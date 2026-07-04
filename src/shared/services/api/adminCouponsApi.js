import api from './axiosConfig';

export const adminCouponsApi = {
  fetchCoupons: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/coupons/private', { params });
      const coupons = response.data?.data?.data || response.data?.data || [];
      return { success: true, data: coupons };
    } catch {
      return { success: false, data: [] };
    }
  },

  fetchCouponById: async (id) => {
    try {
      const response = await api.get(`/api/v1/coupons/private/${id}`);
      const coupon = response.data?.data || response.data;
      return { success: true, data: coupon };
    } catch {
      return { success: false, data: null };
    }
  },

  createCoupon: async (couponData) => {
    try {
      const response = await api.post('/api/v1/coupons/private', couponData);
      const newCoupon = response.data?.data || response.data;
      return { success: true, data: newCoupon };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to create coupon' };
    }
  },

  updateCoupon: async (id, couponData) => {
    try {
      const response = await api.patch(`/api/v1/coupons/private/${id}`, couponData);
      const updatedCoupon = response.data?.data || response.data;
      return { success: true, data: updatedCoupon };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to update coupon' };
    }
  },

  deleteCoupon: async (id) => {
    try {
      await api.delete(`/api/v1/coupons/private/${id}`);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to delete coupon' };
    }
  },

  fetchCouponUsageHistory: async () => {
    try {
      const response = await api.get('/api/v1/coupons/usage-history');
      const history = response.data?.data?.data || response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(history) ? history : [] };
    } catch {
      return { success: true, data: [] };
    }
  },
};
