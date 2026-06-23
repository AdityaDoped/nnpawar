"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search, SlidersHorizontal, X, MapPin, Calendar, Tag,
  User, Layers, CheckCircle, Maximize2, Building2, ArrowUpRight,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Residential", "Commercial", "Township"] as const;
type Filter = (typeof categories)[number];

/* ── Animated card wrapper ── */
function AnimatedCard({
  project, index, priority, onClick,
}: {
  project: Project; index: number; priority: boolean; onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <ProjectCard project={project} priority={priority} onClick={onClick} />
    </div>
  );
}

/* ── Detail row helper ── */
function DetailRow({ icon: Icon, label, children }: {
  icon: React.ElementType; label: string; children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={14} className="text-accent mt-0.5 shrink-0" />
      <div>
        <p className="text-[9px] text-white/40 tracking-widest uppercase mb-0.5">{label}</p>
        <div className="text-sm text-white/90">{children}</div>
      </div>
    </div>
  );
}

/* ── Project Detail Modal ── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" />

      {/* Panel */}
      <div
        className="relative z-10 w-full md:max-w-4xl max-h-[92vh] overflow-y-auto bg-primary text-white animate-in slide-in-from-bottom-4 md:slide-in-from-bottom-0 md:fade-in duration-350 md:mx-4 rounded-t-2xl md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl md:rounded-t-2xl">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

          {/* Category badge */}
          <span className="absolute top-5 left-5 text-[9px] tracking-widest uppercase bg-accent text-white px-3 py-1.5">
            {project.category}
          </span>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-full transition-colors duration-200"
            aria-label="Close"
          >
            <X size={16} className="text-white" />
          </button>

          {/* Title over image */}
          <div className="absolute bottom-5 left-5 right-5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-widest uppercase text-accent mb-3">About this Project</p>
            <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>

            {/* Gallery strip (if multiple images) */}
            {project.images.length > 1 && (
              <div className="mt-6 grid grid-cols-3 gap-2">
                {project.images.slice(1).map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden">
                    <Image src={src} alt={`${project.title} ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project specs */}
          <div className="flex flex-col gap-4 border-l border-white/10 pl-0 md:pl-6">
            <DetailRow icon={MapPin} label="Location">{project.location}</DetailRow>
            <DetailRow icon={Calendar} label="Year">{project.year}</DetailRow>
            <DetailRow icon={Tag} label="Category">{project.category}</DetailRow>
            {project.client && (
              <DetailRow icon={User} label="Client">{project.client}</DetailRow>
            )}
            {project.type && (
              <DetailRow icon={Layers} label="Project Type">{project.type}</DetailRow>
            )}
            {project.status && (
              <DetailRow icon={CheckCircle} label="Status">
                <span className="text-green-400">{project.status}</span>
              </DetailRow>
            )}
            {(project.plotArea || project.builtUpArea) && (
              <DetailRow icon={Maximize2} label="Area">
                {project.plotArea && <p>Plot: {project.plotArea}</p>}
                {project.builtUpArea && <p>Built-up: {project.builtUpArea}</p>}
              </DetailRow>
            )}
            {project.configuration && (
              <DetailRow icon={Building2} label="Configuration">{project.configuration}</DetailRow>
            )}

            {/* CTA */}
            <a
              href={`https://wa.me/919422322195?text=Hello%2C%20I%20am%20interested%20in%20a%20similar%20project%20like%20${encodeURIComponent(project.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase bg-accent text-white px-5 py-3.5 hover:bg-accent/80 transition-all duration-300 hover:scale-105"
            >
              Enquire About This Project
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main grid ── */
export default function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const matchesCategory = active === "All" || p.category === active;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter & Search bar */}
        <div className="mb-12 space-y-5">
          {/* Search */}
          <div
            className={`relative max-w-md transition-all duration-300 ${
              isFocused ? "max-w-xl" : ""
            }`}
          >
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                isFocused ? "text-accent" : "text-muted/30"
              }`}
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name, location, or type…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full border pl-11 pr-4 py-3 text-sm text-primary placeholder:text-muted/35 focus:outline-none transition-all duration-300 bg-white ${
                isFocused
                  ? "border-accent shadow-[0_0_0_3px_rgba(200,169,110,0.12)]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/40 hover:text-primary transition-colors text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal size={13} className="text-muted/40 mr-1" />
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-250 group overflow-hidden ${
                    active === cat
                      ? "bg-primary text-white border-primary"
                      : "border-gray-200 text-muted hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {active !== cat && (
                    <span className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                  <span className="relative">
                    {cat}
                    <span className="ml-2 text-[9px] opacity-50">({count})</span>
                  </span>
                </button>
              );
            })}

            {(active !== "All" || searchTerm) && (
              <button
                onClick={() => { setActive("All"); setSearchTerm(""); }}
                className="text-[9px] tracking-widest uppercase text-accent border border-accent/30 px-3 py-2 hover:bg-accent hover:text-white transition-all duration-200 ml-2"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result count */}
          <p className="text-[10px] text-muted/50 tracking-wider uppercase">
            Showing {filtered.length} of {projects.length} projects
            {active !== "All" && <span> · {active}</span>}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <AnimatedCard
              key={project.id}
              project={project}
              index={i}
              priority={i < 3}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24 animate-in fade-in duration-300">
            <p className="font-serif text-3xl text-primary/20 mb-3">∅</p>
            <p className="font-serif text-xl text-muted">No projects found</p>
            <p className="text-sm text-muted/50 mt-2">Try a different filter or search term</p>
            <button
              onClick={() => { setActive("All"); setSearchTerm(""); }}
              className="mt-6 text-[10px] tracking-widest uppercase text-accent border-b border-accent pb-0.5 hover:text-primary hover:border-primary transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Detail Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
