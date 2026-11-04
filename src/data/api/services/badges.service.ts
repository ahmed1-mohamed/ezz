import { BadgeFeaturesResponse, CreateBadgeParams, CreateBadgeResponse } from "@/types";
import { CreateProjectFeatureInput } from "@/validators/project-features.schema";
import { BadgeInput } from "@/validators/badge.schema";
import { apiClient as apiClientClass } from "@/lib/apiClient";
import { handleError, postData } from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchBadgeFeatures = async (
  token: string,
): Promise<BadgeFeaturesResponse> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    apiClientClass.syncToken(token);

    const response = await apiClientClass.get<BadgeFeaturesResponse>(
      ENDPOINTS.MARKETING.BADGES,
      {
        headers,
      },
    );

    return response.data;
  } catch (error) {
    handleError(error, ENDPOINTS.MARKETING.BADGES);
    throw error;
  }
};

export const createBadge = async (
  token: string,
  data: CreateBadgeParams,
): Promise<CreateBadgeResponse> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    apiClientClass.syncToken(token);

    const response = await apiClientClass.post<CreateBadgeResponse>(
      ENDPOINTS.MARKETING.BADGES,
      data,
      { headers },
    );

    return response.data;
  } catch (error) {
    handleError(error, `${ENDPOINTS.MARKETING.BADGES} (POST)`);
    throw error;
  }
};

export const createBadgeFeature = async (
  token: string,
  data: {
    name: string;
    code?: string;
    applies_to: string;
    monthly_price_credits: number;
    priority_boost?: number;
    max_entities?: number;
    is_active?: boolean;
  },
): Promise<BadgeFeaturesResponse> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    apiClientClass.syncToken(token);

    const response = await apiClientClass.post<BadgeFeaturesResponse>(
      ENDPOINTS.MARKETING.BADGES,
      data,
      { headers },
    );

    return response.data;
  } catch (error) {
    handleError(error, `${ENDPOINTS.MARKETING.BADGES} (POST)`);
    throw error;
  }
};

export const deleteBadgeFeature = async (
  token: string,
  featureId: number,
): Promise<BadgeFeaturesResponse> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    apiClientClass.syncToken(token);

    const response = await apiClientClass.delete<BadgeFeaturesResponse>(
      `${ENDPOINTS.MARKETING.BADGES}/${featureId}`,
      { headers },
    );

    return response.data;
  } catch (error) {
    handleError(error, `${ENDPOINTS.MARKETING.BADGES}/${featureId} (DELETE)`);
    throw error;
  }
};

export const addSubscriptionFeature = (
  projectFeatureData: CreateProjectFeatureInput,
  token: string,
) => postData(ENDPOINTS.MARKETING.BADGES, projectFeatureData, token);

export const addBadge = (badgeData: BadgeInput, token: string) =>
  postData(ENDPOINTS.MARKETING.BADGES, badgeData, token);
