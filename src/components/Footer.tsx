import Link from "next/link";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* BRAND */}
        <div>
          <p className="font-serif text-xl font-bold mb-1">
            N.N. Pawar <span className="text-accent">&amp;</span> Associates
          </p>
          <p className="text-white/40 text-[10px] tracking-widest uppercase mb-6">
            Licensed Engineer &amp; Architectural Consultant
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            Over 25 years of crafting spaces that inspire — from intimate residences to large-scale commercial complexes across Maharashtra.
          </p>
          <p className="mt-6 text-accent text-xs tracking-[0.2em] uppercase">
            Design &bull; Consultancy &bull; Execution
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.facebook.com/narsing.pawar.12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200"
            >
              <Facebook size={15} />
            </a>
            <a
              href="https://wa.me/919422322195"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/30 mb-6">Navigation</p>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/50 hover:text-accent transition-colors duration-200 w-fit">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-[10px] tracking-widest uppercase text-white/30 mb-6">Contact Us</p>
          <div className="flex flex-col gap-5">
            <a
              href="https://maps.app.goo.gl/6yKaCcKGR1YiRdm79"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-white/55 hover:text-accent transition-colors group"
            >
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              <span className="leading-relaxed">
                Amrapali, 988/1/2/3, Office No. 1+2,<br />Sadashiv Peth, Pune – 411 030
              </span>
            </a>
            <a href="tel:+919422322195" className="flex items-center gap-3 text-sm text-white/55 hover:text-accent transition-colors">
              <Phone size={15} className="shrink-0 text-accent" />
              +91 9422322195 / 8788285434
            </a>
            <a href="mailto:narsingpawar@yahoo.com" className="flex items-center gap-3 text-sm text-white/55 hover:text-accent transition-colors">
              <Mail size={15} className="shrink-0 text-accent" />
              narsingpawar@yahoo.com
            </a>
            <a href="mailto:narsingnpawar@gmail.com" className="flex items-center gap-3 text-sm text-white/55 hover:text-accent transition-colors">
              <Mail size={15} className="shrink-0 text-accent" />
              narsingnpawar@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/6yKaCcKGR1YiRdm79"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-[10px] tracking-widest uppercase px-5 py-3 bg-accent text-white hover:bg-accent/80 transition-colors w-fit"
            >
              <MapPin size={13} /> View on Maps
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} N.N. Pawar &amp; Associates. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/25 text-xs hover:text-accent transition-colors">Privacy Policy</Link>
            <p className="text-white/25 text-xs">Sadashiv Peth, Pune – 411 030, Maharashtra</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
