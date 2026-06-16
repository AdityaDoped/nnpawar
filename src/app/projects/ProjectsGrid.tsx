"use client";
import { useState, useEffect, useRef } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Residential", "Commercial", "Township"] as const;
type Filter = (typeof categories)[number];

function AnimatedCard({ project, index, priority }: { project: typeof projects[0]; index: number; priority: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
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
      <ProjectCard project={project} priority={priority} />
    </div>
  );
}

export default function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filtered = projects.filter((p) => {
    const matchesCategory = active === "All" || p.category === active;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
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
                {/* Hover fill animation */}
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

          {/* Active filter indicator */}
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
  );
}
