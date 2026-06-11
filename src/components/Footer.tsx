import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-xl font-semibold mb-1">N.N. Pawar Associates</p>
          <p className="text-white/40 text-[10px] tracking-widest uppercase mb-6">License Engineer & Architectural Consultant</p>
          <p className="text-white/55 text-sm leading-relaxed">Over 25 years of crafting spaces that inspire — from intimate residences to large-scale commercial complexes across Maharashtra.</p>
          <p className="mt-6 text-accent text-xs tracking-[0.2em] uppercase">Design • Consultancy • Execution</p>
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/30 mb-6">Navigation</p>
          <nav className="flex flex-col gap-3">
            {[{label:"Home",href:"/"},{label:"About Us",href:"/about"},{label:"Our Services",href:"/services"},{label:"Projects",href:"/projects"},{label:"Contact",href:"/contact"}].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/50 hover:text-accent transition-colors duration-200 w-fit">{link.label}</Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/30 mb-6">Contact Us</p>
          <div className="flex flex-col gap-5">
            <a href="https://maps.google.com/?q=988+Sadashiv+Peth+Pune+411030" target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-white/55 hover:text-accent transition-colors group">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              <span className="leading-relaxed">Amrapali, 988/1/2/3, Office No. 1+2,<br />Sadashiv Peth, Pune – 411 030</span>
            </a>
            <a href="tel:+919422322195" className="flex items-center gap-3 text-sm text-white/55 hover:text-accent transition-colors">
              <Phone size={15} className="shrink-0 text-accent" />
              +91 9422322195 / 8788285434
            </a>
            <a href="mailto:narsingpawar@yahoo.com" className="flex items-center gap-3 text-sm text-white/55 hover:text-accent transition-colors">
              <Mail size={15} className="shrink-0 text-accent" />
              narsingpawar@yahoo.com
            </a>
            <a href="https://wa.me/919422322195?text=Hello%20N.N.%20Pawar%20Associates%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-[10px] tracking-widest uppercase px-5 py-3 bg-accent text-white hover:bg-accent/80 transition-colors w-fit">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} N.N. Pawar Associates. All rights reserved.</p>
          <p className="text-white/25 text-xs">Sadashiv Peth, Pune – 411 030, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
