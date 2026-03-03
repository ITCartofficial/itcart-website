import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore internal & static paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const lower = pathname.toLowerCase();

  if (pathname !== lower) {
    return NextResponse.redirect(
      new URL(lower, request.url),
      301
    );
  }

  return NextResponse.next();
}