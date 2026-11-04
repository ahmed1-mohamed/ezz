import { AdData } from "@/types";
import {
  fetchData,
  fetchDataTotals,
  postDataImg,
  deleteData,
  editData,
  patchData,
  fetchAdsData,
} from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchAds = (
  token: string,
  page: number = 1,
  per_page: number = 15,
  filters?: {
    status?: string;
    platform?: string;
    format?: string;
    search?: string;
  },
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });

  if (filters) {
    if (filters.status && filters.status !== "all") {
      params.append("status", filters.status);
    }
    if (filters.platform && filters.platform !== "all") {
      params.append("platform", filters.platform);
    }
    if (filters.format && filters.format !== "all") {
      params.append("format", filters.format);
    }
    if (filters.search && filters.search.trim() !== "") {
      params.append("search", filters.search.trim());
    }
  }

  return fetchAdsData(`${ENDPOINTS.MARKETING.ADS}?${params.toString()}`, token);
};

export const fetchAdsTotals = (token: string) =>
  fetchDataTotals(ENDPOINTS.MARKETING.ADS_TOTALS, token);

export const fetchAd = (adId: string, token: string) =>
  fetchData(ENDPOINTS.MARKETING.ADS_DETAIL(adId), token);

export const updateAd = (adId: number, adData: FormData, token?: string) => {
  if (adData instanceof FormData && adData.has("_method")) {
    adData.delete("_method");
  }
  return postDataImg(ENDPOINTS.MARKETING.ADS_DETAIL(adId), adData, token);
};

export const deleteAd = (adId: number, token: string) =>
  deleteData(ENDPOINTS.MARKETING.ADS_DETAIL(adId), token);

export const createAd = (adData: FormData, token: string) =>
  postDataImg(ENDPOINTS.MARKETING.ADS, adData, token);

export const updateAdStatus = (adId: number, status: boolean, token: string) =>
  editData(ENDPOINTS.MARKETING.ADS_DETAIL(adId), { is_active: status }, token);

export const updateAdStatusUsingCreateEndpoint = (
  adId: number,
  status: string,
  token: string,
) => {
  const adData: AdData = {
    campaign: {
      start_at: null,
      end_at: null,
      daily_cap_credits: null,
      status: status,
    },
    placement: {
      platform: null,
      location: null,
      format: null,
      billing_unit: null,
    },
    country_id: null,
    entity_type: null,
    entity_id: null,
    title: null,
    weight: null,
  };
  return editData(ENDPOINTS.MARKETING.ADS_DETAIL(adId), adData, token);
};

export const toggleAdStatus = (
  adId: number,
  newStatus: string,
  token: string,
) => {
  return patchData(ENDPOINTS.MARKETING.ADS_TOGGLE_STATUS(adId), newStatus, token);
};

export const AdminAdsService = {
  getAds: (page: number = 1, perPage: number = 15, filters?: any) => {

    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      type: "ad",
    });

    if (filters?.status && filters.status !== "all") {
      params.append("status", filters.status);
    }
    if (filters?.platform && filters.platform !== "all") {
      params.append("platform", filters.platform);
    }
    if (filters?.format && filters.format !== "all") {
      params.append("format", filters.format);
    }
    if (filters?.search && filters.search.trim() !== "") {
      params.append("search", filters.search.trim());
    }

    return fetchAdsData(`${ENDPOINTS.MARKETING.ADS}?${params.toString()}`);
  },
  getAdsTotals: () => fetchDataTotals(ENDPOINTS.MARKETING.ADS_TOTALS),
  getAd: (adId: string, token: string) => fetchAd(adId, token),
  createAd: (data: FormData, token: string) => createAd(data, token),
  updateAd: (adId: number, data: FormData, token: string) => updateAd(adId, data, token),
  deleteAd: (adId: number) => deleteData(ENDPOINTS.MARKETING.ADS_DETAIL(adId)),
  toggleStatus: (adId: number, status: string) => patchData(ENDPOINTS.MARKETING.ADS_TOGGLE_STATUS(adId), status),
};