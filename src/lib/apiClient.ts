
"use client";

import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { API_CONFIG, getCountryId, BASE_URL, API_BASE_URL } from "@/data/config";
import { apiLogger } from "./logger";
import { logoutToLogin, SessionExpiredError } from "./auth-session";
import { getApiErrorMessage } from "./api-errors";

export function readBearerToken(headers: unknown): string | null {
  if (!headers) return null;
  const value =
    typeof (headers as any).get === "function"
      ? (headers as any).get("Authorization")
      : (headers as any).Authorization ?? (headers as any).authorization;
  if (typeof value !== "string") return null;
  return value.replace(/^Bearer\s+/i, "") || null;
}

interface RefreshResponse {
  accessToken: string;
  expires_at: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}

class ApiClient {
  private client: AxiosInstance;
  private accessToken: string | null = null;
  private expiresAt: number | null = null;
  private isRefreshing = false;
  private refreshQueue: { resolve: (token: string) => void; reject: (err: any) => void }[] = [];
  private sessionUpdateCallback:
    | ((data: { accessToken: string; expiresAt: number }) => Promise<void>)
    | null = null;
  private isInitialized = false;
  private resolveInit: (() => void) | null = null;
  private initPromise: Promise<void>;

  constructor() {
    this.initPromise = new Promise((resolve) => {
      this.resolveInit = resolve;
    });

    this.client = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      headers: API_CONFIG.DEFAULT_HEADERS,
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  private async waitForInit() {
    if (!this.isInitialized) {
      await this.initPromise;
    }
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(async (config) => {
      await this.waitForInit();

      const countryId = getCountryId();
      config.headers["country-id"] = countryId;
      config.headers["country_id"] = countryId;
      config.headers["ngrok-skip-browser-warning"] = "69420";

      // Safeguard: Ensure centralized base url is used
      if (config.baseURL && (config.baseURL.includes("ngrok") || config.baseURL.includes("api.p-adviser.com"))) {
        config.baseURL = API_BASE_URL;
      }
      if (config.url && (config.url.includes("ngrok") || config.url.includes("api.p-adviser.com"))) {
        config.url = config.url
          .replace(/https?:\/\/[^\/]*ngrok[^\/]*/g, BASE_URL)
          .replace(/https?:\/\/api\.p-adviser\.com/g, BASE_URL);
      }
      if (config.url && config.url.startsWith("/api/")) {
        config.url = config.url.replace(/^\/api/, "");
      }

      if (this.accessToken && this.expiresAt) {
        const now = Math.floor(Date.now() / 1000);
        const isExpiringSoon = this.expiresAt <= now + 60;

        if (isExpiringSoon) {
          apiLogger.auth("⏰ Token expiring soon → refreshing");
          await this.refreshToken();
        }
      }

      if (this.accessToken) {
        config.headers.Authorization = `Bearer ${this.accessToken}`;
      } else {
        delete config.headers.Authorization;
      }

      if (config.data instanceof FormData) {
        if (typeof config.headers.delete === "function") {
          config.headers.delete("Content-Type");
        } else {
          delete config.headers["Content-Type"];
        }
      }

      apiLogger.request(config);
      return config;
    });

    this.client.interceptors.response.use(
      (response) => {
        apiLogger.response(response);

        const data = response.data;
        if (data && typeof data === 'object') {
          if (data.status === false || data.success === false || data.status === "error") {
            const error = new AxiosError(
              data.message || "Business logic error",
              AxiosError.ERR_BAD_RESPONSE,
              response.config,
              response.request,
              response
            );
            return Promise.reject(error);
          }
        }

        return response;
      },
      async (error: AxiosError) => {
        apiLogger.error(error);

        const originalRequest = error.config as AxiosRequestConfig & {
          _retry?: boolean;
        };

        if (error.response?.status === 401 && originalRequest) {
          if (originalRequest._retry) {
            // Still unauthenticated with a freshly refreshed token.
            apiLogger.auth("❌ 401 after refresh → redirecting to login");
            this.clearAuthToken();
            logoutToLogin();
            return Promise.reject(error);
          }

          originalRequest._retry = true;
          apiLogger.auth("⚠️ 401 → attempting refresh");

          const token = await this.getTokenAfterUnauthorized(
            readBearerToken(originalRequest.headers),
          );
          if (!token) return Promise.reject(error);

          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${token}`,
          };
          return this.client(originalRequest);
        }

        return Promise.reject(error);
      },
    );
  }

  setSessionUpdateCallback(
    callback: (data: {
      accessToken: string;
      expiresAt: number;
    }) => Promise<void>,
  ) {
    this.sessionUpdateCallback = callback;
  }

  private async refreshToken(): Promise<void> {
    if (this.isRefreshing) {
      return new Promise<void>((resolve, reject) => {
        this.refreshQueue.push({ resolve: () => resolve(), reject });
      });
    }

    this.isRefreshing = true;

    try {
      apiLogger.auth("🔄 Calling /api/auth/refresh");

      const res = await fetch("/api/auth/refresh", {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        // 429 (rate limit) or a server error doesn't mean the session is gone.
        if (res.status === 401) {
          apiLogger.auth("❌ Refresh rejected → redirecting to login");
          this.clearAuthToken();
          logoutToLogin();
          throw new SessionExpiredError();
        }
        throw new Error(`Token refresh failed (HTTP ${res.status})`);
      }

      const data: RefreshResponse = await res.json();

      this.accessToken = data.accessToken;
      this.expiresAt = data.expires_at;

      if (this.sessionUpdateCallback) {
        await this.sessionUpdateCallback({
          accessToken: data.accessToken,
          expiresAt: data.expires_at,
        });
      }

      this.processQueue();
    } catch (error) {
      this.processQueue(error);
      throw error;
    } finally {
      this.isRefreshing = false;
    }
  }

  /**
   * Called after a request was rejected with 401. Returns a token to retry with, or null when
   * there is none (the user is logged out and sent to the login page if the session expired).
   * `usedToken` is the token the failed request carried: if it was already replaced by a newer
   * one, that newer token is returned without refreshing again.
   */
  async getTokenAfterUnauthorized(usedToken?: string | null): Promise<string | null> {
    await this.waitForInit();
    if (this.accessToken && usedToken && usedToken !== this.accessToken) {
      return this.accessToken;
    }
    try {
      await this.refreshToken();
      return this.accessToken;
    } catch {
      return null;
    }
  }

  private processQueue(error?: any) {
    this.refreshQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(this.accessToken!);
      }
    });
    this.refreshQueue = [];
  }

  private buildHeaders(data?: unknown, config?: any) {
    const isFormData = data instanceof FormData;
    const headers: Record<string, string> = { ...config?.headers };
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    } else {
      headers["Content-Type"] = "multipart/form-data";
    }
    const countryId = getCountryId();
    headers["country-id"] = countryId;
    headers["country_id"] = countryId;
    headers["ngrok-skip-browser-warning"] = "69420";
    return headers;
  }

  async get<T>(endpoint: string, config?: any): Promise<AxiosResponse<T>> {
    return await this.client.get<T>(endpoint, {
      ...config,
      headers: this.buildHeaders(undefined, config),
    });
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: any,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post(endpoint, data, {
      ...config,
      headers: this.buildHeaders(data, config),
    });
    return { data: response.data, status: response.status };
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: any,
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.put(endpoint, data, {
      ...config,
      headers: this.buildHeaders(data, config),
    });
    return { data: response.data, status: response.status };
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    config?: any,
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.patch(endpoint, data, {
      ...config,
      headers: this.buildHeaders(data, config),
    });
    return { data: response.data, status: response.status };
  }

  async delete<T>(endpoint: string, config?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.delete(endpoint, {
      ...config,
      headers: this.buildHeaders(undefined, config),
    });
    return { data: response.data, status: response.status };
  }

  setAuthToken(token?: string | null, expiresAt?: number | null) {
    this.accessToken = token ?? null;
    this.expiresAt = expiresAt ?? null;

    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common["Authorization"];
    }

    this.isInitialized = true;
    if (this.resolveInit) {
      this.resolveInit();
      this.resolveInit = null;
    }

    apiLogger.auth(`🔑 Token initialized (hasToken: ${!!token}, expiresAt: ${expiresAt})`);
  }

  /**
   * Adopts a caller-supplied token only when the client has none yet.
   * The client's own token (set by AuthBootstrap and rotated by refreshToken)
   * is always at least as fresh as a token captured from a component's session,
   * so overwriting it would revert refreshed tokens and drop the real expiry.
   */
  syncToken(token?: string | null) {
    if (!token || this.accessToken) return;
    this.setAuthToken(token, Math.floor(Date.now() / 1000) + 3600);
  }

  clearAuthToken() {
    this.accessToken = null;
    this.expiresAt = null;
    this.isInitialized = true;
    delete this.client.defaults.headers.common["Authorization"];
    if (this.resolveInit) {
      this.resolveInit();
    }
  }
}

export const apiClient = new ApiClient();

/** Toast-ready message for a failed request; never returns raw/technical backend text. */
export function getErrorMessage(error: any, fallback = "Something went wrong"): string {
  return getApiErrorMessage(error, undefined, fallback);
}