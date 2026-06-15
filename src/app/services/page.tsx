import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Services | N.N. Pawar & Associates",
  description: "Architectural design, licensed engineering, project consultation and interior planning services in Pune.",
};

const services = [
  { num:"01", title:"Architectural Design", desc:"From concept to detailed drawings, we create thoughtful architectural designs for residences, apartments, commercial spaces, and townships.", points:["Conceptual design & 3D visualisation","Working drawings & construction documents","Elevation design & facade planning","Vastu-compliant layouts (on request)"], image:"/images/bungalow2.jpeg" },
  { num:"02", title:"Licensed Engineering", desc:"As a certified licensed engineer, we provide structural engineering services that ensure every building is safe, compliant, and built to last.", points:["Structural design & calculations","Building plan approval (PMC / PMRDA / Grampanchayat)","Commencement & completion certificates","NA order and layout approvals"], image:"/images/vv9.jpeg" },
  { num:"03", title:"Project Consultation", desc:"Need expert guidance on an existing project? We offer independent consultation for site evaluation, design review, cost optimisation, and construction supervision.", points:["Site analysis & feasibility study","Design review & optimisation","Construction supervision","Cost estimation & BOQ preparation"], image:"/images/bungalow3.jpeg" },
  { num:"04", title:"Interior Space Planning", desc:"Great buildings deserve great interiors. We offer space planning and interior layout services that maximise functionality, flow, and visual appeal.", points:["Space planning & furniture layout","False ceiling & lighting design","Material & finish selection","Kitchen & bathroom planning"], image:"/images/sfh7.jpeg" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight max-w-2xl">
            Services Built on <span className="italic font-normal">Expertise</span>
          </h1>
          <p className="mt-6 text-muted text-sm leading-relaxed max-w-xl">We offer a comprehensive range of architectural and engineering services — all under one roof, from a team you can trust.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-24">
          {services.map((service, i) => (
            <div key={service.num} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="font-serif text-5xl text-accent/20 font-bold mb-4">{service.num}</p>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-4">{service.title}</h2>
                <p className="text-sm text-muted leading-relaxed mb-6">{service.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {service.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-muted">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Image src={service.image} alt={service.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Our Process" title="How We Work With You" light subtitle="A clear, collaborative process from first conversation to final handover." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{step:"1",title:"Consultation",desc:"We start with a free initial discussion to understand your requirements, site, and budget."},{step:"2",title:"Concept Design",desc:"We prepare preliminary designs and 3D views for your review and feedback."},{step:"3",title:"Approvals",desc:"We handle all statutory drawings and liaise with authorities for plan sanctions."},{step:"4",title:"Execution",desc:"We supervise construction to ensure quality, timelines, and adherence to approved plans."}].map((step) => (
              <div key={step.step} className="relative pl-6 border-l border-white/10">
                <p className="font-serif text-3xl text-accent/40 font-bold mb-3">{step.step}</p>
                <h3 className="font-serif text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <SectionHeading label="Get Started" title="Ready to Discuss Your Project?" centered subtitle="Contact us today for a free initial consultation. We'd love to hear your vision." />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent transition-colors">
            Contact Us <ArrowRight size={14} />
          </Link>
          <a href="https://wa.me/919422322195" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary hover:text-white transition-all">
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
