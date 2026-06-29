import api from './axiosConfig';

export const logsApi = {
  fetchLogs: async (params) => {
    try {
      const response = await api.get('/api/v1/logs/private', { params });
      return {
        data: response.data?.data || [],
        length: response.data?.length || 0,
        counts: response.data?.counts || {
          today: 0,
          lastWeek: 0,
          lastMonth: 0,
          total: 0
        }
      };
    } catch (error) {
      console.error('Error fetching logs:', error);
      throw error;
    }
  },

  fetchLogById: async (id) => {
    try {
      const response = await api.get(`/api/v1/logs/private/${id}`);
      return response.data?.data || null;
    } catch (error) {
      console.error(`Error fetching log details for ${id}:`, error);
      throw error;
    }
  }
};
