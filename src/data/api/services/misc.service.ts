import { FeaturesDataType, MeetingRequestsDataType } from "@/types";
import { CreateReferralInput } from "@/validators/create-referral.schema";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { FeatureInput } from "@/validators/feature.schema";
import { apiClient } from "@/lib/apiClient";
import {
  fetchData,
  fetchPaginatedData,
  postData,
  editData,
  deleteData,
} from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchLocations = (
  token: string,
  page: number = 1,
  perPage: number = 10,
) => fetchPaginatedData(`${ENDPOINTS.LOCATIONS.LOCATIONS}?page=${page}&per_page=${perPage}`, token);

export const fetchProjects = (token: string) =>
  fetchData(ENDPOINTS.PROJECTS.RAW, token);

export const fetchProjectsByDeveloper = (
  token: string,
  developer_id: number,
  is_active?: number,
  per_page: string = "100",
  search?: string,
) => {
  const params = new URLSearchParams({
    developer_id: developer_id.toString(),
    per_page,
  });
  if (is_active !== undefined && is_active !== null) {
    params.append("is_active", is_active.toString());
  }
  if (search) {
    params.append("search", search);
  }
  return fetchData(`${ENDPOINTS.PROJECTS.BASE}?${params.toString()}`, token);
};

export const fetchCountries = (token: string) =>
  fetchData(ENDPOINTS.COMMON.COUNTRIES, token);

export const fetchFeatures = (token: string) =>
  fetchData(ENDPOINTS.COMMON.FEATURES, token);

export const fetchTenants = (token: string) =>
  fetchData("/tenants", token);

export const fetchRereferralDetails = (referralId: number, token: string) =>
  fetchData(`/referrals/${referralId}`, token);

export const fetchFeaturesDetails = (featureId: number, token: string) =>
  fetchData(`/features/${featureId}`, token);

export const addReferral = (referralData: CreateProjectInput, token: string) =>
  postData("/referrals", referralData, token);

export const addFeature = (featureData: FeatureInput, token: string) =>
  postData("/features", featureData, token);

export const editReferral = (
  referralId: number,
  referralData: CreateReferralInput,
  token: string,
) => editData(`/referrals/${referralId}`, referralData, token);

export const editFeature = (
  featureId: number,
  featureData: FeaturesDataType,
  token: string,
) => editData(`/features/${featureId}`, featureData, token);

export const deleteReferral = (referralId: number, token: string) =>
  deleteData(`/referrals/${referralId}`, token);

export const deleteCity = (cityId: number, token: string) =>
  deleteData(`/cities/${cityId}`, token);

export const deleteFeature = (featureId: number, token: string) =>
  deleteData(`/dashboard/features/${featureId}`, token);

export interface MeetingFilters {
  country?: string;
  status?: string;
  search?: string;
}

export const AdminMeetingsService = {
  getMeetingRequests: (
    page: number = 1,
    perPage: number = 10,
    filters?: MeetingFilters,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });

    if (filters) {
      if (filters.country && filters.country !== "all") {
        params.append("country", filters.country);
      }
      if (filters.status && filters.status !== "all") {
        params.append("status", filters.status);
      }
      if (filters.search && filters.search.trim() !== "") {
        params.append("search", filters.search.trim());
      }
    }

    return apiClient.get(`/dashboard/meeting-requests?${params.toString()}`);
  },

  getMeetingRequest: (meetingId: number) => {
    return apiClient.get<MeetingRequestsDataType>(
      `/meeting-requests/${meetingId}`,
    );
  },

  confirmMeeting: (meetingId: number) => {
    return apiClient.post(`/meeting-requests/${meetingId}/confirm`);
  },

  cancelMeeting: (meetingId: number) => {
    return apiClient.post(`/meeting-requests/${meetingId}/cancel`);
  },
};

interface OffersFilters {
  status?: string;
  search?: string;
}

interface CreateOfferPayload {
  entity_type: "DEVELOPERS" | "PROJECTS" | "PROPERTIES";
  entity_id: number;
  name: string;
  description?: string;
  banner_image?: string;
  discount_type: "percentage" | "fixed_amount" | "special_deal" | "join_offers" | "discount_events";
  discount_pct?: number;
  is_active?: boolean;
  starts_at?: string;
  ends_at?: string;
  clicks?: number;
  views?: number;
}

export interface OfferUpdateFields {
  entity_type: string;
  entity_id: number;
  discount_type: string;
  name?: string;
  is_active: boolean;
  description?: string;
  starts_at?: string;
  ends_at?: string;
  discount_pct?: number;
}

export const AdminOffersService = {
  getOffers: async (
    page: number = 1,
    perPage: number = 15,
    filters?: OffersFilters,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });
    if (filters?.status && filters.status !== "all") {
      params.append("status", filters.status);
    }
    if (filters?.search && filters.search.trim()) {
      params.append("search", filters.search.trim());
    }
    const response = await apiClient.get(`/dashboard/offers?${params.toString()}`);
    return response;
  },

  getOffersTotals: async () => {
    const response = await apiClient.get("/dashboard/offers/totals");
    return response.data;
  },

  getOffer: async (offerId: string) => {
    return apiClient.get(`/dashboard/offers/${offerId}`);
  },

  createOffer: (data: CreateOfferPayload) => {
    return apiClient.post(ENDPOINTS.V2.OFFERS, data, {
      headers: { "Content-Type": "application/json" },
    });
  },

  updateOffer: (offerId: number, data: FormData) => {
    return apiClient.post(`/dashboard/offers/${offerId}`, data);
  },

  deleteOffer: (offerId: number) => {
    return apiClient.delete(`/dashboard/offers/${offerId}`);
  },

  toggleStatus: (offerId: number, fields: OfferUpdateFields) => {
    const formData = new FormData();
    formData.append("entity_type", fields.entity_type);
    formData.append("entity_id", String(fields.entity_id));
    formData.append("discount_type", fields.discount_type);
    formData.append("is_active", fields.is_active ? "1" : "0");
    if (fields.name) formData.append("name", fields.name);
    if (fields.description) formData.append("description", fields.description);
    if (fields.starts_at) formData.append("starts_at", fields.starts_at);
    if (fields.ends_at) formData.append("ends_at", fields.ends_at);
    if (fields.discount_pct != null) formData.append("discount_pct", String(fields.discount_pct));
    return apiClient.post(`/dashboard/offers/${offerId}`, formData);
  },
};

export const AdminFeaturesService = {
  getFeatures: () => {
    return apiClient.get<any>("/dashboard/features");
  },
  getFeature: (featureId: number) => {
    return apiClient.get<FeaturesDataType>(`/dashboard/features/${featureId}`);
  },
  createFeature: (data: FeaturesDataType) => {
    return apiClient.post<FeaturesDataType>("/dashboard/features", data);
  },
  updateFeature: (featureId: number, data: FeaturesDataType) => {
    return apiClient.put<FeaturesDataType>(
      `/dashboard/features/${featureId}`,
      data,
    );
  },
  deleteFeature: (featureId: number) => {
    return apiClient.delete(`/dashboard/features/${featureId}`);
  },
};
