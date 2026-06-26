"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Detects a browser refresh (F5 / Ctrl+R / hard reload) and redirects
 * the user back to the home page. Client-side navigation (Next.js Link)
 * is NOT affected — only a true page reload triggers the redirect.
 */
export default function RefreshRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Already on home — nothing to do.
    if (pathname === "/") return;

    // The Navigation Timing API reliably identifies a reload.
    const entries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];

    if (entries.length > 0 && entries[0].type === "reload") {
      router.replace("/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, router]);

  return null;
}
