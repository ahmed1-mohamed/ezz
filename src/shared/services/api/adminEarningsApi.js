import api from './axiosConfig';

export const adminEarningsApi = {
  // GET /api/v1/dashboard/private/earnings (All-time platform earnings)
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

  // GET /api/v1/dashboard/private/earnings/monthly?month=YYYY-MM (Monthly platform earnings)
  fetchMonthlyEarnings: async (month) => {
    try {
      const params = month ? { month } : {};
      const response = await api.get('/api/v1/dashboard/private/earnings/monthly', { params });
      return {
        success: true,
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.error('API fetchMonthlyEarnings failed:', error);
      return { success: false, data: null, error };
    }
  },

  // Fallback / legacy methods
  fetchEarningsStats: async (month = '2026-01') => {
    try {
      const monthlyRes = await api.get('/api/v1/dashboard/private/earnings/monthly', { params: { month } });
      const raw = monthlyRes.data?.data || monthlyRes.data;
      if (raw?.platform) {
        return {
          success: true,
          data: {
            totalRevenue: String(raw.platform.grossCollected ?? '0'),
            netProfit: String(raw.platform.netProfit ?? '0'),
            teacherPayments: String(raw.platform.teacherEarnings ?? '0'),
            platformEarnings: String(raw.platform.revenueAfterPaymentFees ?? '0'),
            currency: raw.currency || 'USD',
            platform: raw.platform,
            period: raw.period,
          },
        };
      }
      const response = await api.get(`/api/v1/admin/earnings/stats?month=${month}`);
      return response.data;
    } catch (error) {
      try {
        const response = await api.get(`/api/v1/admin/earnings/stats?month=${month}`);
        return response.data;
      } catch (err2) {
        console.error('API fetchEarningsStats fallback failed:', err2);
        return {
          success: false,
          data: {
            totalRevenue: '0',
            netProfit: '0',
            teacherPayments: '0',
            platformEarnings: '0',
          },
        };
      }
    }
  },

  fetchTeacherEarnings: async (month = '2026-01') => {
    try {
      const monthlyRes = await api.get('/api/v1/dashboard/private/earnings/monthly', { params: { month } });
      const raw = monthlyRes.data?.data || monthlyRes.data;
      if (Array.isArray(raw?.teachers)) {
        return { success: true, data: raw.teachers };
      }
      const response = await api.get(`/api/v1/admin/earnings/teachers?month=${month}`);
      return response.data;
    } catch (error) {
      try {
        const response = await api.get(`/api/v1/admin/earnings/teachers?month=${month}`);
        return response.data;
      } catch (err2) {
        console.error('API fetchTeacherEarnings fallback failed:', err2);
        return { success: false, data: [] };
      }
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
