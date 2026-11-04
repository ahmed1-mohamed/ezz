export * from "@/config/api";
import {
  BASE_URL,
  API_BASE_URL,
  DASHBOARD_API_BASE_URL,
  DASHBOARD_V2_API_BASE_URL,
  IMPORTS_API_BASE_URL,
} from "@/config/api";

export const DEFAULT_COUNTRY_ID = "1";

export const getCountryId = (): string => {
  if (typeof window !== "undefined") {
    return (
      localStorage.getItem("country_id") ||
      localStorage.getItem("country-id") ||
      DEFAULT_COUNTRY_ID
    );
  }
  return DEFAULT_COUNTRY_ID;
};

export const API_CONFIG = {
  ORIGIN: BASE_URL,
  BASE_URL: API_BASE_URL,
  DASHBOARD_URL: DASHBOARD_API_BASE_URL,
  DASHBOARD_V2_URL: DASHBOARD_V2_API_BASE_URL,
  IMPORTS_URL: IMPORTS_API_BASE_URL,
  DEFAULT_HEADERS: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "country-id": DEFAULT_COUNTRY_ID,
    "country_id": DEFAULT_COUNTRY_ID,
    "ngrok-skip-browser-warning": "69420",
  },
};
