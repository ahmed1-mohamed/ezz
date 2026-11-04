import { AdCreditPackage, FetchAdCreditPackagesParams } from "@/types";
import { apiClient as apiClientClass } from "@/lib/apiClient";
import { handleError } from "../client";
import { ENDPOINTS } from "../endpoints";

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
}

export interface FetchAdCreditPackagesResult {
  packages: AdCreditPackage[];
  pagination: PaginationMeta | null;
}

export interface CreateAdCreditPackageParams {
  name: string;
  price_cents: number;
  credits: number;
  is_active?: boolean;
}

export interface CreateAdCreditPackageResponse {
  success: boolean;
  data: AdCreditPackage;
  message?: string;
}

export interface CreateAdCreditPackageApiError {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export interface DeleteAdCreditPackageResponse {
  success: boolean;
  message?: string;
  data?: AdCreditPackage;
}

export interface DeleteAdCreditPackageApiError {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export const generateAdCreditPackageCode = (): string => {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `AD-PKG-${timestamp}-${randomSuffix}`;
};

const validateCreateAdCreditPackageParams = (
  params: CreateAdCreditPackageParams,
): void => {
  if (!params.name || params.name.trim() === "") {
    throw new Error("Package name is required");
  }

  if (params.price_cents < 0) {
    throw new Error("Price must be non-negative");
  }

  if (params.credits < 1) {
    throw new Error("Credits must be at least 1");
  }
};

export const createAdCreditPackage = async (
  token: string,
  params: CreateAdCreditPackageParams,
): Promise<CreateAdCreditPackageResponse> => {
  validateCreateAdCreditPackageParams(params);

  const code = generateAdCreditPackageCode();

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const payload = {
      code,
      name: params.name.trim(),
      price_cents: params.price_cents,
      currency: "AED",
      credits: params.credits,
      sort_order: 0,
      is_active: params.is_active ?? true,
    };

    apiClientClass.syncToken(token);

    const response = await apiClientClass.post<CreateAdCreditPackageResponse>(
      ENDPOINTS.MARKETING.CREDITS,
      payload,
      { headers },
    );

    return response.data;
  } catch (error) {
    const axiosError = error as {
      response?: {
        data?: CreateAdCreditPackageApiError;
      };
      message?: string;
    };

    const errorData = axiosError.response?.data;

    if (errorData?.errors && Object.keys(errorData.errors).length > 0) {
      const errorMessages = Object.entries(errorData.errors)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join("; ");

      interface ErrorWithDetails extends Error {
        details?: string;
      }
      const apiError: ErrorWithDetails = new Error(
        errorData.message || "Validation failed",
      );
      apiError.details = errorMessages;
      handleError(error, ENDPOINTS.MARKETING.CREDITS);
      throw apiError;
    }

    const errorMessage =
      errorData?.message ||
      (axiosError.message
        ? `Request failed: ${axiosError.message}`
        : "Failed to create package");

    handleError(error, ENDPOINTS.MARKETING.CREDITS);
    throw new Error(errorMessage);
  }
};

export const deleteAdCreditPackage = async (
  token: string,
  packageId: number,
): Promise<DeleteAdCreditPackageResponse> => {
  if (!packageId || packageId <= 0) {
    throw new Error("Invalid package ID");
  }

  if (!token) {
    throw new Error("Authentication token is required");
  }

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    headers["Authorization"] = `Bearer ${token}`;

    const endpoint = `${ENDPOINTS.MARKETING.CREDITS}/${packageId}`;
    apiClientClass.syncToken(token);

    const response = await apiClientClass.delete<DeleteAdCreditPackageResponse>(
      endpoint,
      { headers },
    );

    return response.data;
  } catch (error) {
    const axiosError = error as {
      response?: {
        data?: DeleteAdCreditPackageApiError;
      };
      message?: string;
    };

    const errorData = axiosError.response?.data;

    if (errorData?.errors && Object.keys(errorData.errors).length > 0) {
      const errorMessages = Object.entries(errorData.errors)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join("; ");

      interface ErrorWithDetails extends Error {
        details?: string;
      }
      const apiError: ErrorWithDetails = new Error(
        errorData.message || "Validation failed",
      );
      apiError.details = errorMessages;
      handleError(error, ENDPOINTS.MARKETING.CREDITS);
      throw apiError;
    }

    const errorMessage =
      errorData?.message ||
      (axiosError.message
        ? `Request failed: ${axiosError.message}`
        : "Failed to delete package");

    handleError(error, ENDPOINTS.MARKETING.CREDITS);
    throw new Error(errorMessage);
  }
};

export const fetchAdCreditPackages = async (
  token: string,
  params?: FetchAdCreditPackagesParams,
): Promise<FetchAdCreditPackagesResult> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const queryParams = new URLSearchParams();
    if (params?.page) {
      queryParams.append("page", params.page.toString());
    }
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }
    if (params?.sort_by) {
      queryParams.append("sort_by", params.sort_by);
    }
    if (params?.sort_order) {
      queryParams.append("sort_order", params.sort_order);
    }
    if (typeof params?.is_active === "boolean") {
      queryParams.append("is_active", params.is_active.toString());
    }
    if (params?.include_inactive) {
      queryParams.append("include_inactive", "true");
    }

    const endpoint = `${ENDPOINTS.MARKETING.CREDITS}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    apiClientClass.syncToken(token);

    const response = await apiClientClass.get<any>(
      endpoint,
      {
        headers,
      },
    );
    return {
      packages: response.data.data || [],
      pagination: response.data.pagination || null,
    };
  } catch (error) {
    handleError(error, ENDPOINTS.MARKETING.CREDIT_PACKAGE);
    throw error;
  }
};

export const purchaseAdCreditPackage = async (
  token: string,
  developerId: number | string,
  packageId: number | string,
  paymentDetails?: {
    payment_method: string;
    card_name?: string;
    card_number?: string;
    receipt_file_url?: string;
  }
): Promise<any> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const payload = paymentDetails || { payment_method: "card" };

    apiClientClass.syncToken(token);

    const response = await apiClientClass.post<any>(
      `${ENDPOINTS.COMMON.DEVELOPERS}/${developerId}/packages/${packageId}`,
      payload,
      { headers },
    );

    return response.data;
  } catch (error) {
    handleError(error, `/developers/${developerId}/packages/${packageId}`);
    throw error;
  }
};

import { apiClient } from "@/lib/apiClient";

export const AdminSubscriptionsService = {
  getCustomerPlans: () => {
    return apiClient.get("/dashboard/subs/customerPlans");
  },

  getCustomerPlanById: (id: number | string) => {
    return apiClient.get(`/dashboard/subs/customerPlans/${id}`);
  },

  getPackages: (token?: string, params?: any) => {
    return apiClient.get("/dashboard/ad-credit-packages", { params });
  },

  createPackage: (tokenOrData: any, data?: any) => {
    const actualData = data || tokenOrData;
    return apiClient.post("/dashboard/ad-credit-packages", actualData);
  },

  updatePackage: (id: number | string, data: Record<string, unknown>) => {
    return apiClient.put(`/dashboard/ad-credit-packages/${id}`, data);
  },

  getBadges: (params?: { is_active?: boolean; applies_to?: string; platform?: string }) => {
    return apiClient.get("/dashboard/badges", { params });
  },

  getSubscriptionFeatures: () => {
    return apiClient.get("/dashboard/subscription-features");
  },

  createBadge: (data: Record<string, unknown>) => {
    return apiClient.post("/dashboard/badges", data);
  },

  updateBadge: (id: number | string, data: Record<string, unknown>) => {
    return apiClient.put(`/dashboard/badges/${id}`, data);
  },

  deleteBadge: (id: number | string) => {
    return apiClient.delete(`/dashboard/badges/${id}`);
  },

  getAddons: (params?: Record<string, any>) => {
    return apiClient.get("/dashboard/subs/add-ons", { params });
  },

  getAddonTypes: () => {
    return apiClient.get("/dashboard/subs/add-ons/types");
  },

  createAddon: (data: Record<string, unknown>) => {
    return apiClient.post("/dashboard/subs/add-ons", data);
  },

  updateAddon: (id: number | string, data: Record<string, unknown>) => {
    return apiClient.put(`/dashboard/subs/add-ons/${id}`, data);
  },

  deleteAddon: (id: number | string) => {
    return apiClient.delete(`/dashboard/subs/add-ons/${id}`);
  },

  createCustomerPlan: (data: Record<string, unknown>) => {
    return apiClient.post("/dashboard/subs/customerPlans", data);
  },

  updateCustomerPlan: (id: number | string, data: Record<string, unknown>) => {
    return apiClient.put(`/dashboard/subs/customerPlans/${id}`, data);
  },

  deletePackage: (tokenOrId: any, id?: number) => {
    const actualId = id !== undefined ? id : tokenOrId;
    return apiClient.delete(`/dashboard/ad-credit-packages/${actualId}`);
  },

  deleteCustomerPlan: (id: number | string) => {
    return apiClient.delete(`/dashboard/subs/customerPlans/${id}`);
  },
};

