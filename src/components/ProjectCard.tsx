import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group relative block overflow-hidden bg-secondary">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-all duration-500" />
        <div className="absolute top-4 right-4 w-9 h-9 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={16} className="text-white" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-[9px] tracking-widest uppercase bg-white/90 text-primary px-3 py-1.5 font-medium">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-lg font-medium text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-muted mt-1">{project.location}</p>
          </div>
          <span className="text-xs text-muted/60 shrink-0 mt-0.5">{project.year}</span>
        </div>
        <p className="text-sm text-muted mt-3 leading-relaxed line-clamp-2">{project.shortDesc}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs tracking-wider uppercase text-primary group-hover:text-accent transition-colors duration-300">
          <span>View Project</span>
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
