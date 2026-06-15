import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const featuredProjects = projects.filter((p) => p.featured);
const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "3", label: "Project Types" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <Image src="/images/vv9.jpeg" alt="Vishwa Vihar Township by N.N. Pawar &amp; Associates" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-5 animate-fade-in">
              Design &bull; Consultancy &bull; Execution
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] animate-slide-up">
              Designing Spaces,<br /><span className="italic font-normal">Defining Lives</span>
            </h1>
            <p className="mt-6 text-white/65 text-base leading-relaxed max-w-lg animate-slide-up-delay">
              N.N. Pawar &amp; Associates brings over 25 years of architectural expertise to every project — from intimate residences to large-scale townships across Maharashtra.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-slide-up-delay2">
              <Link href="/projects" className="inline-flex items-center gap-2 bg-accent text-white text-xs tracking-widest uppercase px-7 py-4 hover:bg-accent/80 transition-colors">
                View Our Work <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs tracking-widest uppercase px-7 py-4 hover:bg-white hover:text-primary transition-all">
                Start a Project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="absolute right-6 bottom-20 hidden lg:flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-white/30" />
            <div className="border border-white/30 px-5 py-4 text-center backdrop-blur-sm">
              <p className="font-serif text-3xl text-white font-semibold">25+</p>
              <p className="text-white/50 text-[9px] tracking-widest uppercase mt-1">Years</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-white/30" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl text-accent font-semibold">{stat.value}</p>
              <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT INTRO — MORE HAND-WRITTEN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading label="Who We Are" title="Architecture with Purpose & Precision"
            subtitle="Founded by Narsing N. Pawar, our firm combines licensed engineering expertise with architectural artistry. Every structure we design is a balance of form, function, and lasting quality." />
          
          <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
            <p>
              At <strong className="text-primary">N.N. Pawar &amp; Associates</strong>, we believe that great architecture goes beyond aesthetics. 
              It shapes the way people live, work, and connect with their surroundings. With over two decades of experience across 
              Pune and Maharashtra, we have earned a reputation for delivering projects that are structurally sound, 
              visually compelling, and built to stand the test of time.
            </p>
            <p>
              Our practice is rooted in a deep understanding of local building norms, municipal approvals, and 
              structural engineering — ensuring that every design is not only beautiful but also fully compliant 
              and safe. From the very first site visit to the final handover, we are involved at every stage, 
              bringing a personal touch that larger firms often overlook.
            </p>
            <p>
              Whether it&apos;s a cosy family bungalow in Pune&apos;s suburbs, a multi-storey apartment township, or a 
              modern commercial complex, we approach every project with the same dedication: <em className="text-primary font-medium">listen carefully, 
              design thoughtfully, and build responsibly</em>.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {["Residential Bungalows & Villas","Apartment Townships & Complexes","Commercial & Mixed-Use Buildings","Structural Engineering & Consultation","Building Licence & Municipal Approvals"].map((s) => (
              <div key={s} className="flex items-center gap-3 text-sm text-muted">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />{s}
              </div>
            ))}
          </div>
          <Link href="/about" className="mt-10 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
            Learn More About Us <ArrowRight size={12} />
          </Link>
        </div>
        {/* SMALLER IMAGE GRID */}
        <div className="grid grid-cols-2 gap-3 h-[380px]">
          <div className="relative overflow-hidden rounded-sm">
            <Image src="/images/bungalow2.jpeg" alt="Modern Bungalow Design" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-sm">
              <Image src="/images/bungalow5.jpeg" alt="Residential Architecture" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <Image src="/images/bungalow3.jpeg" alt="Commercial Complex" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY — NEW HAND-WRITTEN SECTION */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary leading-snug">
              We Don&apos;t Just Build Structures — We <span className="italic font-normal">Create Legacies</span>
            </h2>
            <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed text-left md:text-center">
              <p>
                Every project begins with a conversation. We sit down with our clients, understand their vision, 
                their lifestyle, their budget, and their aspirations. Architecture, for us, is a collaborative journey — 
                not a one-size-fits-all formula. We sketch, we iterate, we refine until the design feels just right.
              </p>
              <p>
                What sets us apart is our dual expertise in both <strong className="text-primary">design and engineering</strong>. 
                As a licensed engineer and architectural consultant, Narsing N. Pawar brings a rare combination of 
                creative vision and technical rigour to the table. This means fewer surprises during construction, 
                smoother municipal approvals, and buildings that are as strong as they are beautiful.
              </p>
              <p>
                From the foundation to the finishing touches, we oversee every detail. Our commitment doesn&apos;t end 
                at the blueprint — we stay involved through the entire construction process, ensuring that what 
                gets built is exactly what was promised.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="text-center px-6">
                <p className="font-serif text-2xl text-accent font-semibold">100%</p>
                <p className="text-muted text-[10px] tracking-widest uppercase mt-1">Client Satisfaction</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center px-6">
                <p className="font-serif text-2xl text-accent font-semibold">Zero</p>
                <p className="text-muted text-[10px] tracking-widest uppercase mt-1">Structural Failures</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center px-6">
                <p className="font-serif text-2xl text-accent font-semibold">End-to-End</p>
                <p className="text-muted text-[10px] tracking-widest uppercase mt-1">Project Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading label="Selected Work" title="Featured Projects" subtitle="A curated selection of our most celebrated architectural works across Pune and Maharashtra." />
            <Link href="/projects" className="shrink-0 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors">
              All Projects <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Why Choose Us" title="Built on Trust, Driven by Design" centered
            subtitle="We are not just architects — we are licensed engineers who understand both the art and the science of building." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Licensed Engineering", desc: "As a certified licensed engineer, we ensure every structure meets statutory norms, safety codes, and municipal approval requirements — saving you time and legal hassle." },
              { num: "02", title: "End-to-End Delivery", desc: "From initial concept sketches and site analysis to construction supervision and final handover, we manage the complete project lifecycle with precision and personal care." },
              { num: "03", title: "25+ Years of Expertise", desc: "Decades of hands-on experience across residential bungalows, apartment townships, and commercial complexes throughout Pune and Maharashtra." },
            ].map((item) => (
              <div key={item.num} className="group p-8 border border-gray-100 hover:border-accent transition-colors duration-300 bg-white">
                <p className="font-serif text-4xl text-accent/30 font-bold mb-4 group-hover:text-accent/50 transition-colors">{item.num}</p>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/cam01.jpeg" alt="Start your architectural project with N.N. Pawar &amp; Associates" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">Ready to Build?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold max-w-2xl mx-auto leading-tight">
            Let&apos;s Create Something <span className="italic font-normal">Extraordinary</span>
          </h2>
          <p className="mt-6 text-white/55 text-sm max-w-md mx-auto leading-relaxed">
            Share your vision with us. We&apos;ll turn it into spaces people will admire for generations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent/80 transition-colors">
              Contact Us <ArrowUpRight size={14} />
            </Link>
            <a href="https://wa.me/919422322195" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-primary transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
