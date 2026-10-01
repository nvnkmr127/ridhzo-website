import { NextResponse, type NextRequest } from "next/server";

// Proxy /blog to WordPress. Done here (not in next.config rewrites) because rewrites drop the trailing
// slash from the proxied path, and WordPress 301s every slash-less permalink back to the slashed one,
// which loops. nextUrl.pathname keeps the slash because of skipTrailingSlashRedirect.
export function middleware(req: NextRequest) {
  const origin = process.env.WORDPRESS_ORIGIN;
  if (!origin) return NextResponse.next();
  const { pathname, search } = req.nextUrl;
  return NextResponse.rewrite(new URL(`${origin}${pathname}${pathname === "/blog" ? "/" : ""}${search}`));
}

export const config = { matcher: ["/blog", "/blog/:path*"] };
