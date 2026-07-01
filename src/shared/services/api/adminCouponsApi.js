import api from './axiosConfig';

export const adminCouponsApi = {
  fetchCoupons: async () => {
    try {
      const response = await api.get('/api/v1/coupons/private');
      // Assume the response structure is { data: { data: [...] } } or { data: [...] }
      const coupons = response.data?.data?.data || response.data?.data || [];
      return { success: true, data: coupons };
    } catch (error) {
      console.error('Error fetching coupons:', error);
      return { success: false, data: [] };
    }
  },

  fetchCouponById: async (id) => {
    try {
      const response = await api.get(`/api/v1/coupons/private/${id}`);
      const coupon = response.data?.data || response.data;
      return { success: true, data: coupon };
    } catch (error) {
      console.error(`Error fetching coupon ${id}:`, error);
      return { success: false, data: null };
    }
  },

  createCoupon: async (couponData) => {
    try {
      const response = await api.post('/api/v1/coupons/private', couponData);
      const newCoupon = response.data?.data || response.data;
      return { success: true, data: newCoupon };
    } catch (error) {
      console.error('Error creating coupon:', error);
      return { success: false, error: error.response?.data?.message || 'Failed to create coupon' };
    }
  },

  updateCoupon: async (id, couponData) => {
    try {
      const response = await api.patch(`/api/v1/coupons/private/${id}`, couponData);
      const updatedCoupon = response.data?.data || response.data;
      return { success: true, data: updatedCoupon };
    } catch (error) {
      console.error(`Error updating coupon ${id}:`, error);
      return { success: false, error: error.response?.data?.message || 'Failed to update coupon' };
    }
  },

  deleteCoupon: async (id) => {
    try {
      await api.delete(`/api/v1/coupons/private/${id}`);
      return { success: true };
    } catch (error) {
      console.error(`Error deleting coupon ${id}:`, error);
      return { success: false, error: error.response?.data?.message || 'Failed to delete coupon' };
    }
  },

  // Mock endpoint for usage history (to be updated later if backend provides it)
  fetchCouponUsageHistory: async (id) => {
    try {
      // Mock data for now based on UI
      const mockHistory = [
        { id: 1, user: 'خالد المنصور', code: 'QURAN2024', date: '2024-04-20', savings: '170 ر.س' },
        { id: 2, user: 'عبدالله السالم', code: 'QURAN2024', date: '2024-05-01', savings: '150 ر.س' }
      ];
      // Delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true, data: mockHistory };
    } catch (error) {
      console.error('Error fetching usage history:', error);
      return { success: false, data: [] };
    }
  }
};
