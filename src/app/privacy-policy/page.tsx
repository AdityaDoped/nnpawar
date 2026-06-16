import Link from "next/link";
import { ArrowRight, Shield, Eye, Cookie, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | N.N. Pawar & Associates",
  description:
    "Privacy Policy for N.N. Pawar & Associates — how we handle your information on our architecture and consultancy website.",
};

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "When you visit our website, certain information may be automatically collected by third-party services we use, including:",
      "• Your browser type, device type, and operating system",
      "• Pages you visit and time spent on each page (via Google Analytics)",
      "• Your approximate geographic location (country/city level only)",
      "• Referring website or search engine that brought you to us",
      "When you contact us via our WhatsApp button, you voluntarily share your phone number and message content directly with us through WhatsApp. We do not store this data on our servers.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content: [
      "We use Google Analytics (GA4) to understand how visitors interact with our website. This service uses cookies — small text files stored in your browser — to collect anonymous usage data.",
      "The data collected helps us understand which pages are most visited, how users navigate our site, and how we can improve your experience. We do not use this data to identify you personally.",
      "You can opt out of Google Analytics tracking at any time by declining cookies via our cookie consent banner, or by installing the Google Analytics Opt-out Browser Add-on.",
      "We also use Google Fonts, which loads font files from Google's CDN. This may result in Google receiving your IP address as part of the resource request.",
    ],
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    content: [
      "We use the information collected solely for the following purposes:",
      "• To analyse website traffic and improve the quality and performance of our website",
      "• To understand which projects and services generate the most interest",
      "• To respond to your enquiries when you contact us directly",
      "We do not sell, rent, or share your personal information with any third parties for their marketing purposes.",
    ],
  },
  {
    icon: Mail,
    title: "Third-Party Services",
    content: [
      "Our website uses the following third-party services, each with their own privacy policies:",
      "• Google Analytics — analytics.google.com/analytics",
      "• Google Fonts — fonts.google.com",
      "• WhatsApp (for contact) — whatsapp.com/legal/privacy-policy",
      "• Google Maps (for location) — policies.google.com/privacy",
      "We recommend reviewing the privacy policies of these services to understand how they handle your data.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">
            Legal
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-primary leading-tight max-w-2xl">
            Privacy{" "}
            <span className="italic font-normal">Policy</span>
          </h1>
          <p className="mt-4 text-sm text-muted max-w-xl leading-relaxed">
            Last updated: June 2025. This policy explains what information we
            collect, how we use it, and your choices.
          </p>
        </div>
      </section>

      {/* INTRO BANNER */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
            N.N. Pawar & Associates (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
            &ldquo;us&rdquo;) operates the website at{" "}
            <span className="text-accent">nnpawarassociates.com</span>. This
            page informs you of our policies regarding the collection, use, and
            disclosure of personal data when you use our website and the choices
            you have associated with that data. We are committed to protecting
            your privacy and being transparent about how information is handled.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="grid md:grid-cols-[280px_1fr] gap-8 pb-12 border-b border-gray-100 last:border-0"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center border border-accent/40 text-accent">
                      <Icon size={16} />
                    </div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-muted">
                      0{i + 1}
                    </p>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-primary">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      className={`text-sm leading-relaxed ${
                        para.startsWith("•")
                          ? "text-muted pl-2 border-l border-gray-200"
                          : "text-muted"
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* YOUR RIGHTS */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-4">
            Your Rights
          </p>
          <h2 className="font-serif text-3xl font-semibold text-primary mb-8 max-w-lg">
            Control Over Your Data
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Opt Out of Analytics",
                desc: "You can decline cookies when the banner appears, or clear your browser cookies at any time to stop analytics tracking.",
              },
              {
                title: "Request Data Deletion",
                desc: "Since we do not store personal data on our servers, there is nothing to delete on our end. Any WhatsApp messages are controlled within your WhatsApp account.",
              },
              {
                title: "Contact Us",
                desc: "If you have any questions about this privacy policy or how your data is handled, please reach out to us directly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 border border-gray-100"
              >
                <h3 className="font-serif text-base font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-primary">
            Questions about this policy?
          </h3>
          <p className="text-sm text-muted mt-1">
            We&apos;re happy to clarify anything. Get in touch with us directly.
          </p>
          <p className="text-sm text-muted mt-2">
            <span className="text-accent font-medium">Email:</span>{" "}
            narsingpawar@yahoo.com &nbsp;|&nbsp;{" "}
            <span className="text-accent font-medium">Phone:</span> +91
            9422322195
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent transition-colors"
        >
          Contact Us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
