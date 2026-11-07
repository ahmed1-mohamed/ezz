import api from './axiosConfig';

export const adminEarningsApi = {
  fetchAllTimeEarnings: async () => {
    try {
      const response = await api.get('/api/v1/dashboard/private/earnings');
      return {
        success: true,
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.error('API fetchAllTimeEarnings failed:', error);
      return { success: false, data: null, error };
    }
  },

  fetchMonthlyEarnings: async (month) => {
    try {
      const params = month ? { month } : {};
      let response;
      try {
        response = await api.get('/api/v1/dashboard/private/earnings/monthly', { params });
      } catch (err) {
        if (err?.response?.status === 400 && params.month) {
          response = await api.get('/api/v1/dashboard/private/earnings/monthly');
        } else {
          throw err;
        }
      }
      return {
        success: true,
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.error('API fetchMonthlyEarnings failed:', error);
      return { success: false, data: null, error };
    }
  },
};

export default adminEarningsApi;
