"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: number;
  description: string;
  images: string[];
}

export default function ProjectGallery({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const count = project.images.length;
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + count) % count : null)),
    [count]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % count : null)),
    [count]
  );

  // Keyboard controls + lock page scroll while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prevImage, nextImage]);

  // Swipe left/right on touch screens
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prevImage : nextImage)();
    touchStartX.current = null;
  };

  if (count <= 1) return null;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-2xl font-semibold text-primary">Project Gallery</h2>
          <p className="text-[10px] tracking-widest uppercase text-muted">{count} images</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Open image ${i + 1} of ${count}`}
              className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in animate-in fade-in fill-mode-both duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={img}
                alt={`${project.title} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-xs tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded">
                  View
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} gallery`}
          className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <p className="absolute top-6 left-6 text-white/60 text-xs tracking-widest tabular-nums">
            {lightboxIndex + 1} / {count}
          </p>
          <button
            aria-label="Close gallery"
            className="absolute top-5 right-5 z-10 p-1 text-white/60 hover:text-white transition-colors"
            onClick={close}
          >
            <X size={28} />
          </button>
          <button
            aria-label="Previous image"
            className="hidden md:block absolute left-4 z-10 text-white/60 hover:text-white p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            aria-label="Next image"
            className="hidden md:block absolute right-4 z-10 text-white/60 hover:text-white p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={36} />
          </button>
          <div
            key={lightboxIndex}
            className="relative w-full max-w-5xl max-h-[80vh] mx-4 md:mx-16 animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.images[lightboxIndex]}
              alt={`${project.title} ${lightboxIndex + 1}`}
              width={1600}
              height={1067}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain w-full h-full max-h-[80vh]"
            />
          </div>

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {project.images.map((img, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setLightboxIndex(i)}
                className={`relative shrink-0 w-14 h-10 md:w-16 md:h-12 overflow-hidden transition-all duration-300 ${
                  i === lightboxIndex ? "ring-2 ring-accent opacity-100" : "opacity-40 hover:opacity-80"
                }`}
              >
                <Image src={img} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
