"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Residential", "Commercial", "Township"] as const;
type Filter = (typeof categories)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = projects.filter((p) => {
    const matchesCategory = active === "All" || p.category === active;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">Our Portfolio</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight">
            Every Project, <span className="italic font-normal">A Story</span>
          </h1>
          <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">Explore our portfolio of residential, commercial, and township projects across Maharashtra — each designed with care and built with precision.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="relative mb-6 max-w-md animate-in fade-in slide-in-from-bottom duration-500">
            <Search className="absolute left-4 top-3 text-muted/40" size={18} />
            <input 
              type="text" 
              placeholder="Search projects by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-200 pl-12 pr-4 py-3 text-sm text-primary placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom duration-500">
            {categories.map((cat, idx) => (
              <button key={cat} onClick={() => setActive(cat)} style={{animationDelay: `${idx * 50}ms`}}
                className={`text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 animate-in fade-in slide-in-from-bottom duration-500 ${
                  active === cat ? "bg-primary text-white border-primary scale-105" : "border-gray-200 text-muted hover:border-primary hover:text-primary hover:scale-105"
                }`}>
                {cat}
                <span className="ml-2 text-[9px] opacity-60">
                  ({cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.id} className="animate-in fade-in slide-in-from-bottom duration-500" style={{animationDelay: `${i * 100}ms`}}>
              <ProjectCard project={project} priority={i < 3} />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted animate-in fade-in duration-300">
            <p className="font-serif text-2xl mb-2">No projects found</p>
            <p className="text-sm">Try a different filter</p>
          </div>
        )}
      </section>
    </>
  );
}
