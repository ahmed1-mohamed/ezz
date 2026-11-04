import api from './axiosConfig';

export const adminPaymentsApi = {
  /**
   * GET /api/v1/packages-faqs/private/subscriptions
   * Get all package subscriptions and revenue statistics for Admin
   * Supports pagination, filtering by status (paid, pending, expired, all), and search
   */
  fetchSubscriptions: async (params = {}) => {
    try {
      const cleanParams = {};
      if (params.page) cleanParams.page = params.page;
      if (params.limit) cleanParams.limit = params.limit;
      if (params.status && params.status !== 'all') cleanParams.status = params.status;
      if (params.search && params.search.trim()) cleanParams.search = params.search.trim();

      const response = await api.get('/api/v1/packages-faqs/private/subscriptions', {
        params: cleanParams,
      });
      return response.data;
    } catch (error) {
      console.error('API fetchSubscriptions failed:', error);
      throw error;
    }
  },

  /**
   * GET /api/v1/packages-faqs/private/subscriptions/statistics
   * Get package subscriptions revenue statistics for Admin
   */
  fetchSubscriptionsStats: async () => {
    try {
      const response = await api.get('/api/v1/packages-faqs/private/subscriptions/statistics');
      return response.data;
    } catch (error) {
      console.error('API fetchSubscriptionsStats failed:', error);
      throw error;
    }
  },

  /**
   * GET /api/v1/packages-faqs/private/subscriptions/:id
   * Get single package subscription details for Admin
   */
  fetchSubscriptionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/packages-faqs/private/subscriptions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`API fetchSubscriptionById(${id}) failed:`, error);
      throw error;
    }
  },

  // Backward-compatibility aliases
  fetchPayments: async (params = {}) => {
    return adminPaymentsApi.fetchSubscriptions(params);
  },

  fetchPaymentsStats: async () => {
    return adminPaymentsApi.fetchSubscriptionsStats();
  },

  exportCsv: async (items = []) => {
    try {
      if (!Array.isArray(items) || items.length === 0) {
        throw new Error('No items to export');
      }

      // Generate CSV rows client-side for fast and reliable export
      const headers = [
        'ID',
        'Parent Name',
        'Parent Email',
        'Parent Phone',
        'Package Name',
        'Package Type',
        'Students',
        'Sessions Granted',
        'Base Amount',
        'Discount Amount',
        'Coupon Code',
        'Tax Amount',
        'Final Amount',
        'Currency',
        'Status',
        'Paid At',
        'Created At',
        'Expires At',
        'Stripe Session ID',
        'Stripe Payment Intent ID',
      ];

      const rows = items.map((item) => {
        const studentNames = (item.students || []).map((s) => s.name || s.id).join('; ');
        const couponCode = item.coupon ? item.coupon.code : '';
        const escape = (val) => `"${String(val ?? '').replace(/"/g, '""')}"`;

        return [
          escape(item.id),
          escape(item.parent?.name),
          escape(item.parent?.email),
          escape(item.parent?.phone),
          escape(item.package?.name),
          escape(item.package?.type),
          escape(studentNames),
          escape(item.totalSessionsGranted),
          escape(item.baseAmount),
          escape(item.discountAmount),
          escape(couponCode),
          escape(item.taxAmount),
          escape(item.finalAmount),
          escape(item.currency || 'USD'),
          escape(item.status),
          escape(item.paidAt || ''),
          escape(item.createdAt || ''),
          escape(item.expiresAt || ''),
          escape(item.stripeSessionId || ''),
          escape(item.stripePaymentIntentId || ''),
        ].join(',');
      });

      const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `subscriptions-export-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return { success: true };
    } catch (err) {
      console.error('Failed to export CSV:', err);
      throw err;
    }
  },
};

export default adminPaymentsApi;
