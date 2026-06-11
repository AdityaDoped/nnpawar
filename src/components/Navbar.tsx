"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const solidNav = scrolled || !isHome;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solidNav ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 shrink-0">
            <Image src="/logo.png" alt="N.N. Pawar Associates" fill className="object-contain" />
          </div>
          <div className="leading-tight">
            <p className={`font-serif font-semibold text-sm tracking-wide transition-colors duration-300 ${solidNav ? "text-primary" : "text-white"}`}>
              N.N. Pawar Associates
            </p>
            <p className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${solidNav ? "text-muted" : "text-white/60"}`}>
              Architect & Consultant
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`relative text-xs tracking-widest uppercase transition-colors duration-300 group ${
                pathname === link.href
                  ? solidNav ? "text-accent" : "text-white"
                  : solidNav ? "text-primary hover:text-accent" : "text-white/70 hover:text-white"
              }`}>
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
          <Link href="/contact"
            className={`text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
              solidNav ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white/60 text-white hover:bg-white hover:text-primary"
            }`}>
            Get in Touch
          </Link>
        </nav>

        <button className={`md:hidden transition-colors duration-300 ${solidNav ? "text-primary" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 py-5 gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-xs tracking-widest uppercase py-2 border-b border-gray-50 transition-colors ${
                pathname === link.href ? "text-accent font-medium" : "text-primary hover:text-accent"
              }`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 text-[10px] tracking-widest uppercase px-5 py-3 bg-primary text-white text-center hover:bg-accent transition-colors">
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
