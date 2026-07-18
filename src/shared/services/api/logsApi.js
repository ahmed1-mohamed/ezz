import api from './axiosConfig';

export const logsApi = {
  fetchLogs: async (params) => {
    try {
      const response = await api.get('/api/v1/logs/private', { params });
      return {
        data: response.data?.data || [],
        pagination: response.data?.pagination || null,
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

  fetchLogsToday: async (params) => {
    try {
      const response = await api.get('/api/v1/logs/private/today', { params });
      return {
        data: response.data?.data || [],
        pagination: response.data?.pagination || null,
        length: response.data?.length || 0,
        counts: response.data?.counts || { today: 0, lastWeek: 0, lastMonth: 0, total: 0 }
      };
    } catch (error) {
      console.error('Error fetching today logs:', error);
      throw error;
    }
  },

  fetchLogsLast7Days: async (params) => {
    try {
      const response = await api.get('/api/v1/logs/private/last-7-days', { params });
      return {
        data: response.data?.data || [],
        pagination: response.data?.pagination || null,
        length: response.data?.length || 0,
        counts: response.data?.counts || { today: 0, lastWeek: 0, lastMonth: 0, total: 0 }
      };
    } catch (error) {
      console.error('Error fetching last 7 days logs:', error);
      throw error;
    }
  },

  fetchLogsLast30Days: async (params) => {
    try {
      const response = await api.get('/api/v1/logs/private/last-30-days', { params });
      return {
        data: response.data?.data || [],
        pagination: response.data?.pagination || null,
        length: response.data?.length || 0,
        counts: response.data?.counts || { today: 0, lastWeek: 0, lastMonth: 0, total: 0 }
      };
    } catch (error) {
      console.error('Error fetching last 30 days logs:', error);
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
