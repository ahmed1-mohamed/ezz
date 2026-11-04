import { FetchExpertsResult } from "@/types";
import { apiClient } from "@/lib/apiClient";
import { apiClient as apiClientClass } from "@/lib/apiClient";
import { handleError } from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchExpertsPaginated = async (
  token: string,
  params: {
    page?: number;
    per_page?: number;
    search?: string;
    status?: string;
  },
): Promise<FetchExpertsResult> => {
  try {
    const queryParams = new URLSearchParams();
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.per_page)
      queryParams.append("per_page", params.per_page.toString());
    if (params.search) queryParams.append("search", params.search);
    if (params.status) queryParams.append("status", params.status);

    const res = await apiClient.get<any>(`${ENDPOINTS.COMMON.EXPERTS}?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      experts: res.data?.data || [],
      total: res.data?.total || 0,
    };
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.EXPERTS);
    return { experts: [], total: 0 };
  }
};

export const deleteExpert = async (id: number, token: string): Promise<any> => {
  try {
    apiClientClass.syncToken(token);

    const res = await apiClientClass.delete(ENDPOINTS.COMMON.EXPERT_DETAIL(id));
    return res.data;
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.EXPERT_DETAIL(id));
    throw error;
  }
};

export const addExpert = async (data: FormData, token: string): Promise<any> => {
  try {
    const res = await apiClient.post(ENDPOINTS.COMMON.DASHBOARD_EXPERTS, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.DASHBOARD_EXPERTS);
    throw error;
  }
};

export const editExpert = async (id: number, data: FormData, token: string): Promise<any> => {
  try {
    const res = await apiClient.post(ENDPOINTS.COMMON.EXPERT_DETAIL(id), data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.EXPERT_DETAIL(id));
    throw error;
  }
};

export const toggleExpertStatus = async (id: number, token?: string, data?: any): Promise<any> => {
  try {
    const payload = typeof data === "boolean"
      ? { status: data ? "approved" : "inactive", is_active: data ? 1 : 0 }
      : (data || {});
    const res = await apiClient.patch(
      ENDPOINTS.COMMON.EXPERT_TOGGLE_STATUS(id),
      payload,
      token ? { headers: { Authorization: `Bearer ${token}` } } : undefined,
    );
    return res.data;
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.EXPERT_TOGGLE_STATUS(id));
    throw error;
  }
};

export const fetchExpertDetails = async (id: number, token: string): Promise<any> => {
  try {
    const res = await apiClient.get<any>(`${ENDPOINTS.COMMON.EXPERTS}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
    return res.data;
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.EXPERT_DETAIL(id));
    throw error;
  }
};

export const AdminExpertsService = {
  getLanguages: () => {
    return apiClient.get(`/experts/languages`);
  },
  getCategories: () => {
    return apiClient.get(`/experts/categories`);
  },
  getCountries: () => {
    return apiClient.get(`${ENDPOINTS.COMMON.COUNTRIES}`);
  },
  getExpert: (expertId: number) => {
    return apiClient.get(ENDPOINTS.COMMON.EXPERT_DETAIL(expertId), {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
  },
  getExpertsPaginated: async (
    page: number = 1,
    limit: number = 10,
    search?: string,
    status?: string,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: limit.toString(),
    });

    if (search && search.trim() !== "") {
      params.append("search", search.trim());
    }
    if (status && status !== "all") {
      params.append("status", status);
    }

    const response = await apiClient.get(
      `/dashboard/experts?${params.toString()}`,
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      }
    );
    return response.data;
  },
  createExpert: (data: any) => {
    return apiClient.post(ENDPOINTS.COMMON.DASHBOARD_EXPERTS, data);
  },
  updateExpert: (expertId: number, data: any) => {
    if (data instanceof FormData) {
      return apiClient.post(ENDPOINTS.COMMON.EXPERT_DETAIL(expertId), data);
    }
    return apiClient.put(ENDPOINTS.COMMON.EXPERT_DETAIL(expertId), data);
  },
  deleteExpert: (expertId: number) => {
    return apiClient.delete(ENDPOINTS.COMMON.EXPERT_DETAIL(expertId));
  },
  toggleExpertStatus: (expertId: number, data?: any) => {
    const payload = typeof data === "boolean"
      ? { status: data ? "approved" : "inactive", is_active: data ? 1 : 0 }
      : (data || {});
    return apiClient.patch(ENDPOINTS.COMMON.EXPERT_TOGGLE_STATUS(expertId), payload);
  },
  bulkImportExperts: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiClient.post("/dashboard/experts/bulk-import", formData);
  },
};
