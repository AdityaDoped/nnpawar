import { NextResponse } from "next/server";

// Middleware intentionally left as pass-through.
// Refresh-to-home redirect is handled client-side via RefreshRedirect component.
export function middleware() {
  return NextResponse.next();
}
