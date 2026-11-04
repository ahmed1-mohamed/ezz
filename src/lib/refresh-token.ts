import { API_BASE_URL } from "@/data/config";

let pendingRefreshPromise: Promise<RefreshResult> | null = null;
let pendingResolve: ((value: RefreshResult) => void) | null = null;
let pendingReject: ((reason: unknown) => void) | null = null;

interface RefreshResult {
    accessToken: string;
    refreshToken: string;
    expires_at: number;
    refresh_expires_in: number;
}

export async function refreshAccessToken(
    refreshToken: string,
): Promise<RefreshResult> {
    if (!refreshToken) {
        throw new Error("No refresh token");
    }

    if (pendingRefreshPromise) {
        return pendingRefreshPromise;
    }

    pendingRefreshPromise = new Promise<RefreshResult>((resolve, reject) => {
        pendingResolve = resolve;
        pendingReject = reject;
    });

    try {
        const response = await fetch(
            `${API_BASE_URL}/auth/refresh-token`,
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "69420",
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
            },
        );

        const rawText = await response.text();
        let refreshed: any = null;
        try {
            refreshed = rawText ? JSON.parse(rawText) : null;
        } catch {
            throw new Error(`Token refresh failed: invalid server response (${response.status})`);
        }

        if (!response.ok) {
            throw new Error(refreshed?.message || "Failed to refresh token");
        }

        const result: RefreshResult = {
            accessToken: refreshed.access_token,
            refreshToken: refreshed.refresh_token ?? refreshToken,
            expires_at: Math.floor(Date.now() / 1000) + refreshed.expires_in,
            refresh_expires_in: refreshed.refresh_expires_in ?? 86400,
        };

        pendingResolve?.(result);
        return result;
    } catch (error) {
        pendingReject?.(error);
        throw error;
    } finally {
        pendingRefreshPromise = null;
        pendingResolve = null;
        pendingReject = null;
    }
}
