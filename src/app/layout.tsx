import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import FAQBot from "@/components/FAQBot";
import RefreshRedirect from "@/components/RefreshRedirect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400","500","600","700"] });

// ⚠️ Update to your custom domain when it goes live (e.g. https://nnpawarassociates.com)
const SITE_URL = "https://nnpawar.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "N.N. Pawar & Associates | Architect & Licensed Engineer in Pune",
    template: "%s | N.N. Pawar & Associates",
  },
  description:
    "N.N. Pawar & Associates — Pune's trusted architect and licensed engineer with 25+ years of experience. Specialising in bungalow design, residential townships, commercial buildings & building approvals in Pune, Sadashiv Peth.",
  keywords: [
    "architect in pune",
    "architect pune",
    "best architect pune",
    "licensed engineer pune",
    "architectural consultant pune",
    "bungalow design pune",
    "residential architect pune",
    "commercial building architect pune",
    "building plan approval pune",
    "PMC approved engineer pune",
    "PMRDA architect pune",
    "township design pune",
    "sadashiv peth architect",
    "nn pawar associates",
    "narsing pawar architect",
    "architecture firm pune",
    "home design pune",
    "interior space planning pune",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "N.N. Pawar & Associates | Architect & Licensed Engineer in Pune",
    description:
      "25+ years of architectural excellence in Pune. Bungalows, townships, commercial buildings — from concept to completion.",
    url: SITE_URL,
    siteName: "N.N. Pawar & Associates",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/vv9.jpeg",
        width: 1200,
        height: 630,
        alt: "N.N. Pawar & Associates — Architecture & Engineering, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N.N. Pawar & Associates | Architect in Pune",
    description: "25+ years of architectural excellence in Pune — bungalows, townships & commercial projects.",
    images: ["/images/vv9.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // ⚠️ GOOGLE SEARCH CONSOLE VERIFICATION CODE GOES HERE
    // After adding your site in Google Search Console, copy the code from
    // the "HTML tag" option and paste ONLY the content value below.
    // Example: google: "abc123xyz456",
    google: "PASTE_YOUR_CODE_HERE",
  },
};

// LocalBusiness JSON-LD structured data — this is what makes Google show
// your address, phone, and rating card directly in search results
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "N.N. Pawar & Associates",
  alternateName: "NN Pawar Associates",
  description:
    "Licensed architect and engineer in Pune with 25+ years of experience in residential, commercial and township projects.",
  url: SITE_URL,
  telephone: ["+919422322195", "+918788285434"],
  email: "narsingpawar@yahoo.com",
  foundingDate: "1999",
  priceRange: "₹₹",
  image: `${SITE_URL}/images/vv9.jpeg`,
  logo: `${SITE_URL}/icon.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Amrapali, 988/1/2/3, Office No. 1+2, Sadashiv Peth",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411030",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5118548,
    longitude: 73.8468509,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "State", name: "Maharashtra" },
  ],
  serviceType: [
    "Architectural Design",
    "Licensed Engineering",
    "Building Plan Approval",
    "Project Consultation",
    "Interior Space Planning",
    "Structural Design",
    "Township Planning",
  ],
  sameAs: ["https://www.facebook.com/narsing.pawar.12"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans bg-white text-primary antialiased">
        <GoogleAnalytics />
        <RefreshRedirect />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FAQBot />
        <CookieConsent />
      </body>
    </html>
  );
}
