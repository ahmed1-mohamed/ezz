import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockEarningsStats = {
  totalRevenue: '489K',
  netProfit: '323K',
  teacherPayments: '15,400',
  platformEarnings: '308K',
};

let mockTeacherEarnings = [
  { name: 'أ. عائشة محمود', initial: 'ع', amount: '4,100', rawAmount: 4100 },
  { name: 'أ. فاطمة الزهراء', initial: 'ف', amount: '3,200', rawAmount: 3200 },
  { name: 'أ. محمد السعيد', initial: 'م', amount: '2,800', rawAmount: 2800 },
  { name: 'أ. مريم العلي', initial: 'مر', amount: '2,500', rawAmount: 2500 },
  { name: 'أ. إبراهيم خليل', initial: 'إ', amount: '1,900', rawAmount: 1900 },
  { name: 'أ. يوسف النجار', initial: 'ي', amount: '900', rawAmount: 900 },
];

let mockWithdrawalRequests = [
  {
    id: 1,
    teacher: 'أ. فاطمة الزهراء',
    amount: '1,800',
    rawAmount: 1800,
    bank: 'الراجحي',
    accountNumber: '****4321',
    date: '2024-04-20',
    status: 'pending',
    proofImage: null,
  },
  {
    id: 2,
    teacher: 'أ. عائشة محمود',
    amount: '2,200',
    rawAmount: 2200,
    bank: 'سامبا',
    accountNumber: '****2345',
    date: '2024-04-15',
    status: 'paid',
    proofImage: 'https://via.placeholder.com/150',
  },
];

export const adminEarningsApi = {
  fetchEarningsStats: async (month = '2026-01') => {
    try {
      const response = await api.get(`/api/v1/admin/earnings/stats?month=${month}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchEarningsStats failed, using mock:', error);
      await delay(300);
      return { success: true, data: mockEarningsStats };
    }
  },

  fetchTeacherEarnings: async (month = '2026-01') => {
    try {
      const response = await api.get(`/api/v1/admin/earnings/teachers?month=${month}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchTeacherEarnings failed, using mock:', error);
      await delay(300);
      return { success: true, data: mockTeacherEarnings };
    }
  },

  fetchWithdrawalRequests: async () => {
    try {
      const response = await api.get('/api/v1/admin/earnings/withdrawals');
      return response.data;
    } catch (error) {
      console.warn('API fetchWithdrawalRequests failed, using mock:', error);
      await delay(300);
      return { success: true, data: [...mockWithdrawalRequests] };
    }
  },

  approveWithdrawal: async (id, proofImage) => {
    try {
      const response = await api.post(`/api/v1/admin/earnings/withdrawals/${id}/approve`, { proofImage });
      return response.data;
    } catch (error) {
      console.warn('API approveWithdrawal failed, using mock:', error);
      await delay(300);
      const req = mockWithdrawalRequests.find((r) => r.id === id);
      if (req) {
        req.status = 'paid';
        req.proofImage = proofImage || 'https://via.placeholder.com/150';
      }
      return { success: true, data: req };
    }
  },

  rejectWithdrawal: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/earnings/withdrawals/${id}/reject`);
      return response.data;
    } catch (error) {
      console.warn('API rejectWithdrawal failed, using mock:', error);
      await delay(300);
      const req = mockWithdrawalRequests.find((r) => r.id === id);
      if (req) {
        req.status = 'rejected';
      }
      return { success: true, data: req };
    }
  },
};
