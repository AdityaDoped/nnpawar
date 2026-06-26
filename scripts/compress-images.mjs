/**
 * compress-images.mjs
 * One-off script: compresses large images in public/images/ using sharp.
 * Targets all .jpeg/.jpg files above 500 KB.
 * Run: node scripts/compress-images.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, "../public/images");

// Only compress files larger than this (bytes)
const SIZE_THRESHOLD = 500 * 1024; // 500 KB
// Target max width — Next.js serves srcset anyway, this caps the source
const MAX_WIDTH = 1920;
// JPEG quality (80 = good visual quality, ~60-70% smaller than raw)
const QUALITY = 80;

const files = await readdir(IMAGES_DIR);
const jpegs = files.filter((f) => /\.(jpe?g)$/i.test(f));

console.log(`\nFound ${jpegs.length} JPEG files. Checking sizes...\n`);

for (const file of jpegs) {
  const filePath = path.join(IMAGES_DIR, file);
  const { size } = await stat(filePath);

  if (size < SIZE_THRESHOLD) {
    console.log(`  ✓ ${file} (${(size / 1024).toFixed(0)} KB) — skipped`);
    continue;
  }

  const sizeBefore = (size / 1024 / 1024).toFixed(2);

  // Compress in-place: write to temp, then overwrite
  const tmpPath = filePath + ".tmp";
  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toFile(tmpPath);

  // Swap files
  const { size: newSize } = await stat(tmpPath);
  const sizeAfter = (newSize / 1024 / 1024).toFixed(2);

  const { rename } = await import("fs/promises");
  await rename(tmpPath, filePath);

  console.log(`  🗜  ${file}: ${sizeBefore} MB → ${sizeAfter} MB (saved ${((size - newSize) / 1024 / 1024).toFixed(2)} MB)`);
}

console.log("\nDone! All large images compressed.\n");
