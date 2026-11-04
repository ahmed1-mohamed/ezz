"use client";

import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import { apiClient, readBearerToken } from "./apiClient";
import { logoutToLogin } from "./auth-session";

/**
 * Requests that don't go through `apiClient` (plain axios instances and fetch) still need to
 * end the session when the backend says the user is unauthenticated (HTTP 401). The token is
 * refreshed first; only when that fails, or the retried request is still rejected, is the user
 * logged out and sent to the login page.
 */

// Channel auth for chat has its own fallback; a 401 there must not log the user out.
const IGNORED_URL_PATTERNS = ["/broadcasting/auth", "/api/auth/"];

const isIgnoredUrl = (url?: string) => !!url && IGNORED_URL_PATTERNS.some((p) => url.includes(p));

type RetriableConfig = InternalAxiosRequestConfig & { _unauthenticatedRetry?: boolean };

export function attachUnauthenticatedInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(undefined, async (error: AxiosError) => {
    const config = error.config as RetriableConfig | undefined;
    if (error.response?.status !== 401 || !config || isIgnoredUrl(config.url)) {
      return Promise.reject(error);
    }

    const usedToken = readBearerToken(config.headers);
    // A request sent without a token wasn't rejected because of the session.
    if (!usedToken) return Promise.reject(error);

    if (config._unauthenticatedRetry) {
      apiClient.clearAuthToken();
      logoutToLogin();
      return Promise.reject(error);
    }

    config._unauthenticatedRetry = true;
    const token = await apiClient.getTokenAfterUnauthorized(usedToken);
    if (!token) return Promise.reject(error);
    config.headers.set("Authorization", `Bearer ${token}`);
    return instance(config);
  });
}

function requestUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.href;
  return input.url;
}

function requestToken(input: RequestInfo | URL, init?: RequestInit): string | null {
  const headers = new Headers(init?.headers ?? (input instanceof Request ? input.headers : undefined));
  return readBearerToken(headers);
}

let installed = false;

/** Installs the 401 handling on the global axios instance and on window.fetch (once). */
export function installUnauthenticatedHandlers() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  attachUnauthenticatedInterceptor(axios);

  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const response = await originalFetch(input, init);
    if (response.status !== 401) return response;

    const url = requestUrl(input);
    const usedToken = requestToken(input, init);
    if (usedToken && !isIgnoredUrl(url)) {
      // Renews the token for the next request, or logs out when the session can't be renewed.
      apiClient.getTokenAfterUnauthorized(usedToken).catch(() => {});
    }
    return response;
  };
}
