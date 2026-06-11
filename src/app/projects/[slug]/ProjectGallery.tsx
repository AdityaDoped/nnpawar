"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

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

  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null
        ? (i - 1 + project.images.length) % project.images.length
        : null
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % project.images.length : null
    );

  if (project.images.length <= 1) return null;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
        <h2 className="font-serif text-2xl font-semibold text-primary mb-8">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in animate-in fade-in duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={img}
                alt={`${project.title} ${i + 1}`}
                fill
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
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={28} />
          </button>
          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white/60 hover:text-white p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft size={36} />
              </button>
              <button
                className="absolute right-4 text-white/60 hover:text-white p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-16 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.images[lightboxIndex]}
              alt={project.title}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 animate-in fade-in slide-in-from-bottom duration-300 delay-100">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === lightboxIndex
                      ? "bg-accent w-6"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
