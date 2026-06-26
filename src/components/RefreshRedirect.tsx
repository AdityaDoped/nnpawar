"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Detects a browser refresh (F5 / Ctrl+R / hard reload) and redirects
 * the user back to the top of the home page. Client-side navigation
 * (Next.js Link) is NOT affected — only a true page reload triggers this.
 */
export default function RefreshRedirect() {
  const pathname = usePathname();

  useEffect(() => {
    // Already on home — nothing to do.
    if (pathname === "/") return;

    // The Navigation Timing API reliably identifies a reload vs navigation.
    const entries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];

    if (entries.length > 0 && entries[0].type === "reload") {
      // Hard redirect so the browser starts at scroll 0 on the home page.
      window.location.replace("/");
    }
  }, [pathname]);

  return null;
}
