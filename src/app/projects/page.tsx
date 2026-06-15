import type { Metadata } from "next";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | N.N. Pawar & Associates",
  description: "Explore our portfolio of residential bungalows, apartment townships, and commercial buildings across Pune and Maharashtra — designed and built by N.N. Pawar & Associates.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">Our Portfolio</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight">
            Every Project, <span className="italic font-normal">A Story</span>
          </h1>
          <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">
            Explore our portfolio of residential, commercial, and township projects across Maharashtra — each designed with care and built with precision.
          </p>
        </div>
      </section>
      <ProjectsGrid />
    </>
  );
}
