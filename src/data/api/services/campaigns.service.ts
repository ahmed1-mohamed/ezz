import { apiClient2, handleError } from "../client";
import { ENDPOINTS } from "../endpoints";
import { BASE_URL } from "@/data/config";

export const fetchCampaignStats = async (type: string, token: string) => {
  try {
    const res = await apiClient2.get(`${ENDPOINTS.MARKETING.CAMPAIGNS}/stats?type=${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch campaign stats for ${type}:`, error);
    throw error;
  }
};

export const createCampaign = async (
  campaignData: any,
  token: string,
  customBaseUrl?: string
) => {
  try {
    const isFormData = typeof FormData !== "undefined" && campaignData instanceof FormData;

    const baseUrl = customBaseUrl || BASE_URL;

    const url = baseUrl
      ? `${baseUrl.replace(/\/+$/, "")}${baseUrl.includes("/api") ? "" : "/api"}${ENDPOINTS.MARKETING.CAMPAIGNS}`
      : ENDPOINTS.MARKETING.CAMPAIGNS;

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
    };
    if (isFormData) {
      headers["Content-Type"] = "multipart/form-data";
    }
    const res = await apiClient2.post(url, campaignData, {
      headers,
    });
    return res.data;
  } catch (error) {
    handleError(error, ENDPOINTS.MARKETING.CAMPAIGNS);
    throw error;
  }
};

export const fetchCampaigns = async (
  type: string,
  token: string,
  page?: number | string,
  perPage?: number | string,
  search?: string
) => {
  try {
    let url = `${ENDPOINTS.MARKETING.CAMPAIGNS}?type=${type}`;
    if (page) url += `&page=${page}`;
    if (perPage) url += `&per_page=${perPage}`;
    if (search) {
      const encoded = encodeURIComponent(search);
      url += `&search=${encoded}&keyword=${encoded}&query=${encoded}`;
    }
    const res = await apiClient2.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch campaigns for ${type}:`, error);
    throw error;
  }
};

export const viewCampaign = async (id: string | number, token: string) => {
  try {
    const res = await apiClient2.get(`${ENDPOINTS.MARKETING.CAMPAIGNS}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch campaign details for ${id}:`, error);
    throw error;
  }
};

export const updateCampaign = async (id: string | number, campaignData: any, token: string) => {
  try {
    const isFormData = campaignData instanceof FormData;
    const res = await apiClient2.post(`${ENDPOINTS.MARKETING.CAMPAIGNS}/${id}`, campaignData, {
      headers: {
        Authorization: `Bearer ${token}`,
        ...(isFormData ? { "Content-Type": undefined } : {}),
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Failed to update campaign ${id}:`, error);
    throw error;
  }
};

export const updateCampaignStatus = async (id: string | number, status: string | boolean, token: string) => {
  try {
    const res = await apiClient2.patch(`${ENDPOINTS.MARKETING.CAMPAIGNS}/${id}/status`, { status }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error(`Failed to update status for campaign ${id}:`, error);
    throw error;
  }
};

export const deleteCampaign = async (id: string | number, token: string) => {
  try {
    const res = await apiClient2.delete(`${ENDPOINTS.MARKETING.CAMPAIGNS}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error(`Failed to delete campaign ${id}:`, error);
    throw error;
  }
};