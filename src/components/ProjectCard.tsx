import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden bg-secondary"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] tracking-widest uppercase bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 font-medium">
            {project.category}
          </span>
        </div>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={16} className="text-white" />
        </div>

        {/* Slide-up info overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <div className="bg-primary/90 backdrop-blur-sm px-5 py-4">
            <h3 className="font-serif text-base font-medium text-white leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 mt-2">
              <MapPin size={11} className="text-accent shrink-0" />
              <p className="text-[11px] text-white/60">{project.location}</p>
              <span className="ml-auto text-[10px] text-white/40">{project.year}</span>
            </div>
            <p className="text-xs text-white/50 mt-2 leading-relaxed line-clamp-2">
              {project.shortDesc}
            </p>
            <div className="mt-3 flex items-center gap-1 text-[10px] tracking-wider uppercase text-accent">
              <span>View Project</span>
              <ArrowUpRight size={11} />
            </div>
          </div>
        </div>

        {/* Subtle dark scrim always present at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card footer — visible when not hovered */}
      <div className="p-5 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-base font-medium text-primary leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-muted mt-1">{project.location}</p>
          </div>
          <span className="text-xs text-muted/50 shrink-0 mt-0.5">{project.year}</span>
        </div>
        <p className="text-sm text-muted mt-3 leading-relaxed line-clamp-2">
          {project.shortDesc}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-xs tracking-wider uppercase text-primary/60">
          <span>View Project</span>
          <ArrowUpRight size={12} />
        </div>
      </div>
    </Link>
  );
}
