import { apiClient } from "@/data/api-client";
import { ERPNextConfig } from "../types";

const DEFAULT_URL = "https://crm.advixs.com";
const STORAGE_KEY = "erpnext_configured_url";

export const ERPNextService = {
  getConfig: async (): Promise<ERPNextConfig> => {
    try {
      const response = await apiClient.get("/dashboard/erpnext/config");
      const rawData = response.data;
      if (rawData && (rawData.url || rawData.data?.url)) {
        return { url: rawData.url || rawData.data.url };
      }
    } catch (error) {
      console.warn("ERPNext config API unavailable, checking local storage:", error);
    }

    if (typeof window !== "undefined") {
      const localUrl = localStorage.getItem(STORAGE_KEY);
      if (localUrl) return { url: localUrl };
    }

    return { url: DEFAULT_URL };
  },

  saveConfig: async (url: string): Promise<void> => {
    try {
      await apiClient.post("/dashboard/erpnext/config", { url });
    } catch (error) {
      console.warn("ERPNext save config API unavailable, saving locally:", error);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, url);
    }
  },
};
