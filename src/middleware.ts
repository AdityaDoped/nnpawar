import { NextRequest, NextResponse } from "next/server";

// Paths that should redirect to home on a full page load (browser refresh / direct URL entry).
// Add any route that should be "internal-only" navigation here.
const REDIRECT_TO_HOME = [
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/privacy-policy",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect if the path matches one of the guarded routes.
  const shouldRedirect = REDIRECT_TO_HOME.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (shouldRedirect) {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = "/";
    // Remove any search params / hash so the user lands cleanly at the top.
    homeUrl.search = "";
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Run the middleware only on the app routes listed above; skip
  // Next.js internals, static files, and API routes.
  matcher: [
    "/about/:path*",
    "/services/:path*",
    "/projects/:path*",
    "/contact/:path*",
    "/privacy-policy/:path*",
  ],
};
