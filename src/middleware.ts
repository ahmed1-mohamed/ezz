import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { isTokenBlacklisted } from "@/lib/rate-limiter";

export const runtime = "nodejs";

const ALLOWED_USER_TYPES = ["admin", "expert", "developer"];

const isLocalHost = (host: string) => /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(host);

/**
 * Origin the browser actually used. NEXTAUTH_URL is only trusted when it points at a public
 * host: on the server it is often left as http://localhost:<port>, and behind a reverse proxy
 * request.url is the internal address too, so the forwarded / Host headers come first.
 */
function getPublicOrigin(request: NextRequest): string {
  const envUrl = process.env.NEXTAUTH_URL?.trim();
  if (envUrl) {
    try {
      const parsed = new URL(envUrl);
      if (!isLocalHost(parsed.host)) return parsed.origin;
    } catch {
      // ignore an invalid NEXTAUTH_URL
    }
  }

  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").split(",")[0].trim();
  if (host && !isLocalHost(host)) {
    const proto = (request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "")).split(",")[0].trim();
    return `${proto === "http" ? "http" : "https"}://${host}`;
  }

  return request.nextUrl.origin;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = !!token;
  const userType = (token?.user_type as string | undefined)?.toLowerCase() || (token?.role_name as string | undefined)?.toLowerCase();
  const isAuthPage = pathname.startsWith("/auth");

  function redirectTo(targetPathWithQuery: string) {
    const path = targetPathWithQuery.startsWith("/") ? targetPathWithQuery : `/${targetPathWithQuery}`;
    return NextResponse.redirect(new URL(path, getPublicOrigin(request)));
  }

  if (!isLoggedIn && !isAuthPage) {
    return redirectTo("/auth/signin");
  }
  if (isLoggedIn && token?.accessToken && !isAuthPage) {
    const blacklisted = await isTokenBlacklisted(token.accessToken as string);
    if (blacklisted) {
      const response = redirectTo("/auth/signin?reason=session_expired");
      response.cookies.delete("next-auth.session-token");
      response.cookies.delete("__Secure-next-auth.session-token");
      response.cookies.delete("refresh_token");
      return response;
    }
  }

  if (isLoggedIn && !isAuthPage && !ALLOWED_USER_TYPES.includes(userType ?? "")) {
    const response = redirectTo("/auth/signin?reason=unauthorized");

    response.cookies.delete("next-auth.session-token");
    response.cookies.delete("__Secure-next-auth.session-token");
    response.cookies.delete("refresh_token");

    return response;
  }

  if (isLoggedIn && (isAuthPage || pathname === "/")) {
    if (userType === "admin") return redirectTo("/admin/home");
    if (userType === "expert") return redirectTo("/expert/home");
    if (userType === "developer") return redirectTo("/developer/home");
  }

  if (pathname.startsWith("/admin") && userType !== "admin") {
    return redirectTo("/unauthorized");
  }
  if (pathname.startsWith("/expert") && userType !== "expert") {
    return redirectTo("/unauthorized");
  }
  if (pathname.startsWith("/developer") && userType !== "developer") {
    return redirectTo("/unauthorized");
  }

  return NextResponse.next();
}