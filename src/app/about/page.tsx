import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About | N.N. Pawar & Associates",
  description: "Meet Narsing N. Pawar — 25+ years of architectural and engineering excellence in Pune.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight max-w-2xl">
            Two Decades of <span className="italic font-normal">Architectural Vision</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image src="/images/vv7.jpeg" alt="Our Work" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white px-8 py-6 hidden md:block">
            <p className="font-serif text-4xl font-semibold text-accent">25+</p>
            <p className="text-white/50 text-[9px] tracking-widest uppercase mt-1">Years of Excellence</p>
          </div>
        </div>
        <div className="md:pl-8">
          <SectionHeading label="Founder & Principal" title="Narsing N. Pawar" />
          <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
            <p>With over 25 years of hands-on experience in architectural design and licensed engineering, Narsing N. Pawar has established himself as one of Pune&apos;s most trusted architectural consultants.</p>
            <p>His work spans the full spectrum of the built environment — elegant private residences, large gated townships, mixed-use commercial buildings, and structural engineering consultations. Each project reflects a deep commitment to functional beauty and structural integrity.</p>
            <p>As a licensed engineer, Mr. Pawar brings a rare combination of architectural creativity and technical rigour to every engagement. He personally oversees each project from concept to completion.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[{label:"Licensed Engineer",value:"Certified"},{label:"Architectural Consultant",value:"Registered"},{label:"Based In",value:"Pune, MH"},{label:"Est.",value:"1999"}].map((item) => (
              <div key={item.label} className="border-l-2 border-accent pl-4">
                <p className="text-[9px] text-muted/60 tracking-widest uppercase">{item.label}</p>
                <p className="text-sm font-medium text-primary mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <SectionHeading label="Our Philosophy" title="Form Follows Function — and Beauty" light />
          <div className="space-y-4 text-sm text-white/55 leading-relaxed">
            <p>We believe great architecture is not just about what you see — it&apos;s about how a space makes you feel. Every design decision is made with purpose.</p>
            <p>Our approach balances the timeless principles of good design with the practical realities of construction, budget, and regulation. We don&apos;t believe in architecture that looks beautiful in renders but fails in execution.</p>
            <p>We build relationships as much as we build structures. Many of our clients have returned for second and third projects — a testament to the trust we cultivate.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading label="Our Values" title="What Drives Us" centered subtitle="Three principles guide everything we do at N.N. Pawar & Associates." />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "◈", title: "Design Excellence", desc: "We pursue beauty and functionality in equal measure. Every elevation, every floor plan is refined until it meets our exacting standards." },
            { icon: "◉", title: "Technical Integrity", desc: "As licensed engineers, structural safety and regulatory compliance are non-negotiable. We build what we design, exactly as promised." },
            { icon: "◎", title: "Client Partnership", desc: "Your vision is our brief. We listen deeply, communicate openly, and collaborate closely throughout the entire project journey." },
          ].map((val) => (
            <div key={val.title} className="text-center p-8 bg-secondary">
              <p className="text-accent text-3xl mb-5">{val.icon}</p>
              <h3 className="font-serif text-lg font-semibold text-primary mb-3">{val.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 gap-3 h-64 md:h-96">
          <div className="relative overflow-hidden col-span-2">
            <Image src="/images/vv3.jpeg" alt="Township" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden">
              <Image src="/images/sfh7.jpeg" alt="Villa" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="/images/cam01.jpeg" alt="Apartments" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-primary">Have a project in mind?</h3>
            <p className="text-sm text-muted mt-1">Let&apos;s discuss how we can bring your vision to life.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent transition-colors">
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
