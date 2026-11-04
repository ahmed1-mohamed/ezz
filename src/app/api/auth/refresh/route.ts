import { refreshAccessToken } from "@/lib/refresh-token";
import { refreshRateLimit } from "@/lib/rate-limiter";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const headerStore = await headers();
        const ip =
            headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            headerStore.get("x-real-ip") ||
            "unknown";

        const rateLimitResult = await refreshRateLimit(ip);
        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { error: "Too many refresh requests. Please wait." },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(rateLimitResult.retryAfter),
                        "X-RateLimit-Limit": String(rateLimitResult.limit),
                        "X-RateLimit-Remaining": "0",
                    },
                }
            );
        }

        const cookieStore = await cookies();
        const refreshToken = cookieStore.get("refresh_token")?.value;

        if (!refreshToken) {
            return NextResponse.json(
                { error: "No refresh token found" },
                { status: 401 }
            );
        }

        const refreshed = await refreshAccessToken(refreshToken);

        if (refreshed.refreshToken !== refreshToken) {
            cookieStore.set("refresh_token", refreshed.refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
                path: "/",
                maxAge: refreshed.refresh_expires_in ?? 60 * 60 * 24,
            });
        }

        return NextResponse.json({
            accessToken: refreshed.accessToken,
            expires_at: refreshed.expires_at,
        });

    } catch (error) {
        return NextResponse.json(
            { error: "Token refresh failed" },
            { status: 401 }
        );
    }
}