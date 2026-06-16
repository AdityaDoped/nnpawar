import type { Metadata } from "next";
import Image from "next/image";
import ProjectsGrid from "./ProjectsGrid";
import ProjectStats from "./ProjectStats";

export const metadata: Metadata = {
  title: "Projects | N.N. Pawar & Associates",
  description:
    "Explore our portfolio of residential bungalows, apartment townships, and commercial buildings across Pune and Maharashtra — designed and built by N.N. Pawar & Associates.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        {/* Background collage */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="relative overflow-hidden">
            <Image
              src="/images/vv9.jpeg"
              alt=""
              fill
              priority
              sizes="33vw"
              className="object-cover scale-105"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/bungalow3.jpeg"
              alt=""
              fill
              priority
              sizes="33vw"
              className="object-cover scale-105"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/cam01.jpeg"
              alt=""
              fill
              priority
              sizes="33vw"
              className="object-cover scale-105"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/85" />
        {/* Thin vertical dividers */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/10" />
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.35em] uppercase mb-4 animate-slide-up">
            Our Portfolio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight animate-slide-up" style={{ animationDelay: "80ms" }}>
            Every Project,{" "}
            <span className="italic font-normal text-accent/90">A Story</span>
          </h1>
          <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: "160ms" }}>
            Residential, commercial, and township projects across Maharashtra —
            each designed with care and built with precision.
          </p>
          {/* Decorative line */}
          <div className="mt-8 w-12 h-px bg-accent animate-slide-up" style={{ animationDelay: "240ms" }} />
        </div>
      </section>

      {/* ── Stats strip ── */}
      <ProjectStats />

      {/* ── Grid ── */}
      <ProjectsGrid />
    </>
  );
}
