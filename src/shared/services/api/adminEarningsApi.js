import api from './axiosConfig';

export const adminEarningsApi = {
  fetchEarningsStats: async (month = '2026-01') => {
    try {
      const response = await api.get(`/api/v1/admin/earnings/stats?month=${month}`);
      return response.data;
    } catch (error) {
      console.error('API fetchEarningsStats failed:', error);
      return {
        success: false,
        data: {
          totalRevenue: '0',
          netProfit: '0',
          teacherPayments: '0',
          platformEarnings: '0',
        }
      };
    }
  },

  fetchTeacherEarnings: async (month = '2026-01') => {
    try {
      const response = await api.get(`/api/v1/admin/earnings/teachers?month=${month}`);
      return response.data;
    } catch (error) {
      console.error('API fetchTeacherEarnings failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchWithdrawalRequests: async () => {
    try {
      const response = await api.get('/api/v1/admin/earnings/withdrawals');
      return response.data;
    } catch (error) {
      console.error('API fetchWithdrawalRequests failed:', error);
      return { success: false, data: [] };
    }
  },

  approveWithdrawal: async (id, proofImage) => {
    try {
      const response = await api.post(`/api/v1/admin/earnings/withdrawals/${id}/approve`, { proofImage });
      return response.data;
    } catch (error) {
      console.error('API approveWithdrawal failed:', error);
      throw error;
    }
  },

  rejectWithdrawal: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/earnings/withdrawals/${id}/reject`);
      return response.data;
    } catch (error) {
      console.error('API rejectWithdrawal failed:', error);
      throw error;
    }
  },
};

export default adminEarningsApi;
