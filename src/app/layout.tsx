import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import FAQBot from "@/components/FAQBot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400","500","600","700"] });

// ⚠️ Replace with your actual domain once deployed
const SITE_URL = "https://nnpawar.vercel.app";

export const metadata: Metadata = {
  title: "N.N. Pawar & Associates | Licensed Engineer & Architectural Consultant",
  description: "25+ years of architectural excellence in Pune. Design, Consultancy and Execution by N.N. Pawar & Associates.",
  keywords: "architect pune, architectural consultant pune, licensed engineer pune, building design pune, bungalow design pune, residential architect pune",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "N.N. Pawar & Associates | Licensed Engineer & Architectural Consultant",
    description: "25+ years of architectural excellence in Pune. Residential, Commercial & Township projects across Maharashtra.",
    url: SITE_URL,
    siteName: "N.N. Pawar & Associates",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N.N. Pawar & Associates | Architect & Consultant, Pune",
    description: "25+ years of architectural excellence in Pune.",
  },
  verification: {
    // ⚠️ GOOGLE SEARCH CONSOLE VERIFICATION CODE GOES HERE
    // After adding your site in Google Search Console, copy the code from
    // the "HTML tag" option and paste ONLY the content value below.
    // Example: google: "abc123xyz456",
    google: "PASTE_YOUR_CODE_HERE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-primary antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FAQBot />
        <CookieConsent />
      </body>
    </html>
  );
}
