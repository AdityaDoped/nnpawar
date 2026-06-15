import type { Metadata } from "next";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | N.N. Pawar & Associates",
  description: "Get in touch with N.N. Pawar & Associates — licensed architects and engineers in Pune. Reach out for a free consultation on your residential or commercial project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">Reach Out</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight max-w-xl">
            Let&apos;s Start a <span className="italic font-normal">Conversation</span>
          </h1>
          <p className="mt-5 text-muted text-sm leading-relaxed max-w-lg">Whether you have a project in mind or just want to know more about our work — we&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary mb-8">Visit or Call Us</h2>
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0"><MapPin size={16} className="text-accent" /></div>
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Office Address</p>
                <p className="text-sm text-primary leading-relaxed">Amrapali, 988/1/2/3, Office No. 1+2,<br />Sadashiv Peth, Pune – 411 030,<br />Maharashtra, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0"><Phone size={16} className="text-accent" /></div>
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Phone</p>
                <a href="tel:+919422322195" className="text-sm text-primary hover:text-accent transition-colors block">+91 9422322195</a>
                <a href="tel:+918788285434" className="text-sm text-primary hover:text-accent transition-colors block">+91 8788285434</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0"><Mail size={16} className="text-accent" /></div>
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:narsingpawar@yahoo.com" className="text-sm text-primary hover:text-accent transition-colors block">narsingpawar@yahoo.com</a>
                <a href="mailto:narsingnpawar@gmail.com" className="text-sm text-primary hover:text-accent transition-colors block mt-0.5">narsingnpawar@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0"><Facebook size={16} className="text-accent" /></div>
              <div>
                <p className="text-[9px] text-muted/50 tracking-widest uppercase mb-1">Facebook</p>
                <a href="https://www.facebook.com/narsing.pawar.12" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors">N.N. Pawar &amp; Associates</a>
              </div>
            </div>
          </div>
          <a href="https://wa.me/919422322195?text=Hello%20N.N.%20Pawar%20Associates%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white text-xs tracking-widest uppercase px-7 py-4 hover:bg-[#1ebe5d] transition-colors mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
          {/* REAL GOOGLE MAPS EMBED */}
          <div className="w-full h-64 border border-gray-100 overflow-hidden rounded-sm mt-2">
            <iframe
              src="https://www.google.com/maps?q=18.5118548,73.8468509&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="N.N. Pawar & Associates — Office Location, Sadashiv Peth, Pune"
            />
          </div>
          <a href="https://maps.app.goo.gl/6yKaCcKGR1YiRdm79" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-primary border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors mt-3">
            <MapPin size={12} /> Open Exact Location in Google Maps
          </a>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary mb-8">Send Us a Message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
