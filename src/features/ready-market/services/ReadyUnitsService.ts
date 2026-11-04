import { apiClient } from "@/lib/apiClient";
import type { ReadyUnitDetails } from "../types";

/**
 * The ready-units API exposes show / store / update / accept / reject only
 * (GET /dashboard/ready-units answers "method not supported"), so the list uses the
 * properties index filtered to the ready market. If the backend adds a dedicated list
 * route or uses other filter names, change LIST_ENDPOINT / LIST_MARKET_PARAMS / FILTER_PARAMS only.
 */
const LIST_ENDPOINT = "/dashboard/properties";
const LIST_MARKET_PARAMS: Record<string, string> = { market_type: "ready" };

export interface ReadyUnitsFilters {
  search?: string;
  isActive?: string;
  listingType?: string;
  countryId?: string;
  sellerId?: string;
  role?: string;
  propertyTypeId?: string;
  propertySubtypeId?: string;
  city?: string;
  area?: string;
}

export interface ReadyUnitsListParams extends ReadyUnitsFilters {
  page: number;
  perPage: number;
}

/** Query-string names sent for each filter. */
const FILTER_PARAMS: Record<keyof ReadyUnitsFilters, string> = {
  search: "property_name",
  isActive: "is_active",
  listingType: "listing_type",
  countryId: "country_id",
  sellerId: "user_id",
  role: "user_type",
  propertyTypeId: "property_type_id",
  propertySubtypeId: "property_subtype_id",
  city: "city",
  area: "area",
};

const unwrap = <T>(body: any): T => (body?.data !== undefined && body?.status !== undefined ? body.data : body);

export const ReadyUnitsService = {
  list: async ({ page, perPage, ...filters }: ReadyUnitsListParams) => {
    const query = new URLSearchParams({
      ...LIST_MARKET_PARAMS,
      page: String(page),
      per_page: String(perPage),
    });
    (Object.keys(FILTER_PARAMS) as (keyof ReadyUnitsFilters)[]).forEach((key) => {
      const value = filters[key]?.trim();
      if (value) query.append(FILTER_PARAMS[key], value);
    });
    const response = await apiClient.get(`${LIST_ENDPOINT}?${query.toString()}`);
    return response.data;
  },

  get: async (propertyId: number): Promise<ReadyUnitDetails> => {
    const response = await apiClient.get(`/dashboard/ready-units/${propertyId}`);
    return unwrap<ReadyUnitDetails>(response.data);
  },

  create: async (payload: FormData) => {
    const response = await apiClient.post("/dashboard/ready-units", payload);
    return response.data;
  },

  /** The API updates with POST + multipart (partial updates supported). */
  update: async (propertyId: number, payload: FormData) => {
    const response = await apiClient.post(`/dashboard/ready-units/${propertyId}`, payload);
    return response.data;
  },

  accept: async (propertyId: number) => {
    const response = await apiClient.patch(`/dashboard/ready-units/${propertyId}/accept`, new FormData());
    return response.data;
  },

  reject: async (propertyId: number) => {
    const response = await apiClient.patch(`/dashboard/ready-units/${propertyId}/reject`, new FormData());
    return response.data;
  },

  /** No ready-units delete route is documented; ready units are Property records, so the property delete route is used. */
  remove: async (propertyId: number) => {
    const response = await apiClient.delete(`/dashboard/properties/${propertyId}`);
    return response.data;
  },
};
