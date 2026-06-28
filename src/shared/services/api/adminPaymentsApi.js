import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockPaymentsStats = {
  totalCollected: '2,950',
  pendingAmount: '850',
  failedCount: 1,
  totalTransactions: 6,
};

let mockPayments = [
  {
    id: 'PAY001',
    parentName: 'خالد المنصور',
    planName: 'الباقة الذهبية',
    amount: '850',
    date: '2024-04-01',
    paymentMethod: 'بطاقة ائتمان',
    status: 'paid',
  },
  {
    id: 'PAY003',
    parentName: 'فهد السلمي',
    planName: 'الباقة الذهبية',
    amount: '850',
    date: '2024-04-08',
    paymentMethod: 'بطاقة ائتمان',
    status: 'pending',
  },
  {
    id: 'PAY004',
    parentName: 'بندر العتيبي',
    planName: 'الباقة الأساسية',
    amount: '450',
    date: '2024-04-10',
    paymentMethod: 'تحويل بنكي',
    status: 'failed',
  },
];

export const adminPaymentsApi = {
  fetchPaymentsStats: async (period = 'annual') => {
    try {
      const response = await api.get(`/api/v1/admin/payments/stats?period=${period}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchPaymentsStats failed, using mock:', error);
      await delay(300);
      return { success: true, data: mockPaymentsStats };
    }
  },

  fetchPayments: async (filters = {}) => {
    try {
      const query = new URLSearchParams(filters).toString();
      const response = await api.get(`/api/v1/admin/payments?${query}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchPayments failed, using mock:', error);
      await delay(300);
      let filtered = [...mockPayments];
      if (filters.status && filters.status !== 'all') {
        filtered = filtered.filter((p) => p.status === filters.status);
      }
      if (filters.search) {
        const query = filters.search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.id.toLowerCase().includes(query) ||
            p.parentName.toLowerCase().includes(query)
        );
      }
      return { success: true, data: filtered };
    }
  },

  approvePayment: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/payments/${id}/approve`);
      return response.data;
    } catch (error) {
      console.warn('API approvePayment failed, using mock:', error);
      await delay(300);
      const pay = mockPayments.find((p) => p.id === id);
      if (pay) {
        pay.status = 'paid';
      }
      return { success: true, data: pay };
    }
  },

  rejectPayment: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/payments/${id}/reject`);
      return response.data;
    } catch (error) {
      console.warn('API rejectPayment failed, using mock:', error);
      await delay(300);
      const pay = mockPayments.find((p) => p.id === id);
      if (pay) {
        pay.status = 'failed';
      }
      return { success: true, data: pay };
    }
  },

  exportCsv: async () => {
    try {
      const response = await api.get('/api/v1/admin/payments/export', { responseType: 'blob' });
      return response;
    } catch (err) {
      console.warn('API exportCsv failed, returning simulated download:', err);
      await delay(300);
      return { success: true };
    }
  },
};
