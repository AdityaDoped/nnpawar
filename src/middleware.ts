import { NextResponse } from "next/server";

// Middleware intentionally left as pass-through.
export function middleware() {
  return NextResponse.next();
}
