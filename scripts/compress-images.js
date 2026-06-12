// Image compression script using sharp (bundled with Next.js)
// Run with: node scripts/compress-images.js

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../public/images");
const MAX_WIDTH = 1920; // Max width in pixels
const JPEG_QUALITY = 80; // 80% quality — good balance of size vs. clarity

async function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(1);
}

async function compressImages() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) =>
    /\.(jpg|jpeg|png)$/i.test(f)
  );

  console.log(`\n🖼️  Found ${files.length} images to compress...\n`);
  console.log("─".repeat(70));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(IMAGES_DIR, file);
    const tempPath = path.join(IMAGES_DIR, `__temp__${file}`);

    const beforeKB = parseFloat(await getFileSizeKB(inputPath));
    totalBefore += beforeKB;

    try {
      await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
        .toFile(tempPath);

      const afterKB = parseFloat(await getFileSizeKB(tempPath));
      totalAfter += afterKB;

      const savings = (((beforeKB - afterKB) / beforeKB) * 100).toFixed(0);

      // Replace original with compressed version
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);

      const icon = afterKB < 500 ? "✅" : "⚠️ ";
      console.log(
        `${icon} ${file.padEnd(25)} ${String(Math.round(beforeKB) + "KB").padStart(8)} → ${String(Math.round(afterKB) + "KB").padStart(8)}   (${savings}% smaller)`
      );
    } catch (err) {
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      console.error(`❌ Failed: ${file} — ${err.message}`);
    }
  }

  console.log("─".repeat(70));
  const totalSavings = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0);
  console.log(
    `\n📦 Total:  ${Math.round(totalBefore / 1024)}MB → ${Math.round(totalAfter / 1024)}MB   (${totalSavings}% saved)\n`
  );
  console.log("✅ All images compressed and replaced in-place!\n");
}

compressImages();
