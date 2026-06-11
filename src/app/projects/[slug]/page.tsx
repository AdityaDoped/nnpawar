import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) notFound();

  const relatedProjects = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);

  return (
    <>
      <section className="relative h-[70vh] min-h-[400px]">
        <Image src={project.images[0]} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Link href="/projects" className="absolute top-24 left-6 inline-flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors">
          <ArrowLeft size={14} /> All Projects
        </Link>
        <div className="absolute bottom-10 left-6 right-6 max-w-7xl mx-auto">
          <span className="text-[9px] tracking-widest uppercase bg-accent text-white px-3 py-1.5 mb-4 inline-block">{project.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">{project.title}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 animate-in fade-in slide-in-from-left duration-500">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-5">About this Project</h2>
          <p className="text-muted text-sm leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-right duration-500">
          <div className="bg-secondary p-6 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Location</p>
                <p className="text-sm text-primary">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={15} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Year</p>
                <p className="text-sm text-primary">{project.year}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Tag size={15} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Category</p>
                <p className="text-sm text-primary">{project.category}</p>
              </div>
            </div>
          </div>
          <a href="https://wa.me/919422322195?text=Hello%2C%20I%20am%20interested%20in%20a%20similar%20project." target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase bg-accent text-white px-5 py-3.5 text-center hover:bg-accent/80 transition-all duration-300 hover:scale-105">
            Enquire About This Project
          </a>
        </div>
      </section>

      <ProjectGallery project={project} />

      {relatedProjects.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-10">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => (
                <Link key={rp.id} href={`/projects/${rp.slug}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image src={rp.images[0]} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="font-serif text-base font-medium text-primary group-hover:text-accent transition-colors">{rp.title}</p>
                  <p className="text-xs text-muted mt-1">{rp.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
          <ArrowLeft size={12} /> Back to All Projects
        </Link>
      </div>
    </>
  );
}
