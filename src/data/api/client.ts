import axios, { AxiosInstance } from "axios";
import { apiClient as apiClientClass } from "@/lib/apiClient";
import { attachUnauthenticatedInterceptor } from "@/lib/unauthenticated-handler";
import { toast } from "sonner";
import {
  getCountryId,
  DEFAULT_COUNTRY_ID,
  API_BASE_URL,
  DASHBOARD_API_BASE_URL,
  DASHBOARD_V2_API_BASE_URL,
} from "@/data/config";

export interface CreateProjectResponse {
  data?: {
    project_id?: number;
    project_name?: string;
  };
}

const attachCountryHeader = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const countryId = getCountryId();
    config.headers["country-id"] = countryId;
    config.headers["country_id"] = countryId;
    config.headers["ngrok-skip-browser-warning"] = "69420";
    if (typeof FormData !== "undefined" && config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return config;
  });
};

export const apiClient = axios.create({
  baseURL: DASHBOARD_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "country-id": DEFAULT_COUNTRY_ID,
    "country_id": DEFAULT_COUNTRY_ID,
    "ngrok-skip-browser-warning": "69420",
  },
});
attachCountryHeader(apiClient);
attachUnauthenticatedInterceptor(apiClient);

export const apiClient2 = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "country-id": DEFAULT_COUNTRY_ID,
    "country_id": DEFAULT_COUNTRY_ID,
    "ngrok-skip-browser-warning": "69420",
  },
});
attachCountryHeader(apiClient2);
attachUnauthenticatedInterceptor(apiClient2);

import { extractErrorMessage } from "@/lib/utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export const handleError = (error: unknown, endpoint: string) => {
  const errorMessage = extractErrorMessage(error, "Operation failed");
  console.error(`API Error on ${endpoint}:`, errorMessage);

  toast.error(errorMessage, {
    id: API_ERROR_TOAST_ID,
    duration: 4000,
  });

  if (error && typeof error === "object") {
    (error as any).message = errorMessage;
  }

  throw error;
};

export const fetchData = async (endpoint: string, token?: string): Promise<any> => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.get(endpoint);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const fetchDevelopersData = fetchData;
export const fetchPropertiesCreateData = fetchData;
export const fetchDLDAreasData = fetchData;
export const fetchPropertiesIdData = fetchData;
export const fetchPaginatedData = fetchData;
export const fetchAdsData = fetchData;
export const fetchDataTotals = fetchData;
export const fetchData2 = (endpoint: string) => fetchData(endpoint);

export const fetchDataWithPagination = async (
  endpoint: string,
  token?: string,
  page: number = 1,
  perPage: number = 15,
) => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.get(endpoint, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const fetchPropertiesData = async (
  endpoint: string,
  sortBy: string[],
  sortOrder: string[],
  selectedCountries: number[],
  selectedDevelopers: number[],
  selectedProjects: number[],
  per_page: number | string,
  page?: number,
) => {
  try {
    const body: any = {
      sort_by: sortBy,
      sort_order: sortOrder,
      country_id: selectedCountries,
      developer_id: selectedDevelopers,
      project_id: selectedProjects,
      per_page: per_page,
    };

    if (page !== undefined) {
      body.page = page;
    }

    const response = await apiClientClass.post(endpoint, body);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const fetchDataReserveUnit = async (
  token: string,
  reservationId: number,
): Promise<any> => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.get(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/${reservationId}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Fetch reservation error:", error);
  }
};

export const fetchDataReserve = async (token: string) => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.get(
      `${DASHBOARD_V2_API_BASE_URL}/reservations`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (endpoint: string, data: unknown, token?: string) => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const postDataImg = postData;
export const editDataImg = postData;

export const editData = async (endpoint: string, data: unknown, token?: string) => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const deleteData = async (endpoint: string, token?: string) => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.delete(endpoint);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const patchData = async (endpoint: string, data?: unknown, token?: string) => {
  try {
    apiClientClass.syncToken(token);
    const response = await apiClientClass.patch(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};

export const apiAuth = axios.create({
  baseURL: DASHBOARD_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "country-id": DEFAULT_COUNTRY_ID,
    "country_id": DEFAULT_COUNTRY_ID,
  },
});
attachCountryHeader(apiAuth);

export const postDataAuth = async (endpoint: string, data: unknown) => {
  try {
    const response = await apiAuth.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error, endpoint);
  }
};