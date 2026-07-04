import api from "./axiosConfig";

export const dashboardApi = {
  fetchStatistics: async () => {
    try {
      const response = await api.get('/api/v1/dashboard/private/statistics');
      return { success: true, data: response.data?.data || response.data };
    } catch (error) {
      console.error('API fetchStatistics failed:', error);
      return { success: false, data: null };
    }
  }
};
