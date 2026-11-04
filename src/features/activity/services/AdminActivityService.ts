import { apiClient } from "@/lib/apiClient";

export const AdminActivityService = {

  getActivityLogs: async (
    page: number = 1,
    perPage: number = 10,
    search?: string,
    action?: string,
    entityType?: string,
    dateRange?: string,
    token?: string
  ) => {
    if (token) {
      const expiresAt = Math.floor(Date.now() / 1000) + 3600;
      apiClient.setAuthToken(token, expiresAt);
    }

    const params: Record<string, any> = {
      page,
      per_page: perPage,
    };

    if (search && search.trim()) {
      params.keyword = search.trim();
      params.search = search.trim();
    }

    if (action && action !== "all" && action.trim() !== "") {
      params.action = action.trim();
    }

    if (entityType && entityType !== "all" && entityType.trim() !== "") {
      params.entity_type = entityType.trim();
    }

    if (dateRange && dateRange !== "all" && dateRange.trim() !== "") {
      params.date_range = dateRange.trim();
    }

    try {
      let response: any;
      try {
        response = await apiClient.get(`/dashboard/activityLogs`, { params });
      } catch (err: any) {
        // Fall back to POST if the server only accepts POST for search/filtering
        if (err?.response?.status === 405) {
          response = await apiClient.post(`/dashboard/activityLogs`, params);
        } else {
          throw err;
        }
      }

      if (response && response.data !== undefined) {
        return response.data;
      }
      return response;
    } catch (error) {
      console.error("Failed to fetch activity logs from /dashboard/activityLogs:", error);
      throw error;
    }
  },

  /**
   * Fetch single activity log details.
   * Endpoint: https://demoapi.p-adviser.com/api/dashboard/activityLogs/{id}
   */
  getActivityLog: async (id: number, token?: string) => {
    try {
      if (token) {
        const expiresAt = Math.floor(Date.now() / 1000) + 3600;
        apiClient.setAuthToken(token, expiresAt);
      }
      const response = await apiClient.get<any>(`/dashboard/activityLogs/${id}`);
      return response.data?.data ?? response.data;
    } catch (error) {
      console.error("Activity log detail API error:", error);
      return null;
    }
  },

  /**
   * Delete single activity log.
   */
  deleteActivityLog: async (id: number): Promise<void> => {
    await apiClient.delete(`/dashboard/activityLogs/${id}`);
  },

  /**
   * Bulk delete activity logs.
   */
  deleteBulkActivityLogs: async (ids: number[]): Promise<void> => {
    await apiClient.delete(`/dashboard/activityLogs/bulk`, {
      data: { ids },
    });
  },
};
