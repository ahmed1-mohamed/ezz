import api from './axiosConfig';

export const adminPaymentsApi = {
  fetchPaymentsStats: async (period = 'annual') => {
    try {
      const response = await api.get(`/api/v1/admin/payments/stats?period=${period}`);
      return response.data;
    } catch (error) {
      console.error('API fetchPaymentsStats failed:', error);
      return {
        success: false,
        data: {
          totalCollected: '0',
          pendingAmount: '0',
          failedCount: 0,
          totalTransactions: 0,
        }
      };
    }
  },

  fetchPayments: async (filters = {}) => {
    try {
      const query = new URLSearchParams(filters).toString();
      const response = await api.get(`/api/v1/admin/payments?${query}`);
      return response.data;
    } catch (error) {
      console.error('API fetchPayments failed:', error);
      return { success: false, data: [] };
    }
  },

  approvePayment: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/payments/${id}/approve`);
      return response.data;
    } catch (error) {
      console.error('API approvePayment failed:', error);
      throw error;
    }
  },

  rejectPayment: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/payments/${id}/reject`);
      return response.data;
    } catch (error) {
      console.error('API rejectPayment failed:', error);
      throw error;
    }
  },

  exportCsv: async () => {
    try {
      const response = await api.get('/api/v1/admin/payments/export', { responseType: 'blob' });
      return response;
    } catch (err) {
      console.error('API exportCsv failed:', err);
      throw err;
    }
  },
};

export default adminPaymentsApi;
