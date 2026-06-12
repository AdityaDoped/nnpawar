"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't pop up instantly on load
      const t = setTimeout(() => {
        setVisible(true);
        setTimeout(() => setAnimating(true), 50);
      }, 2000);
      return () => clearTimeout(t);
    }
    // If previously accepted, enable analytics
    if (consent === "accepted") enableAnalytics();
  }, []);

  const enableAnalytics = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const dismiss = (accepted: boolean) => {
    setAnimating(false);
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
      if (accepted) enableAnalytics();
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-2xl transition-all duration-500 ease-out ${
        animating
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="bg-primary border border-white/10 shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-accent/40 text-accent">
          <Cookie size={16} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium mb-0.5">
            We use cookies
          </p>
          <p className="text-white/45 text-xs leading-relaxed">
            We use Google Analytics to understand how our website is used and
            improve your experience. No personal data is sold or shared.{" "}
            <Link
              href="/privacy-policy"
              className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="cookie-decline-btn"
            onClick={() => dismiss(false)}
            className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors px-3 py-2 border border-white/10 hover:border-white/20"
          >
            <X size={11} />
            Decline
          </button>
          <button
            id="cookie-accept-btn"
            onClick={() => dismiss(true)}
            className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase bg-accent text-white hover:bg-accent/80 transition-colors px-5 py-2"
          >
            <Check size={11} />
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
