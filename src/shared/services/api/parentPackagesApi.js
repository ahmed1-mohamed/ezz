import api from './axiosConfig';

const BASE_URL = '/api/v1/parent/packages';

export const parentPackagesApi = {
  fetchPackages: async (params = {}) => {
    const response = await api.get(BASE_URL, {
      params,
      skipLang: true,
    });
    return response.data;
  },

  fetchPackageDetails: async (id) => {
    const response = await api.get(`${BASE_URL}/${id}`, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },

  previewCheckout: async ({ packageId, studentIds, couponCode }) => {
    const body = {
      packageId,
      studentIds,
    };
    if (couponCode && String(couponCode).trim()) {
      body.couponCode = String(couponCode).trim();
    }
    const response = await api.post(`${BASE_URL}/preview-checkout`, body, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },

  createCheckout: async ({ packageId, studentIds, couponCode }) => {
    const body = {
      packageId,
      studentIds,
    };
    if (couponCode && String(couponCode).trim()) {
      body.couponCode = String(couponCode).trim();
    }
    const response = await api.post(`${BASE_URL}/checkout`, body, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },

  fetchSubscriptions: async (params = {}) => {
    const cleanParams = {};
    if (params.status && params.status !== 'all') {
      cleanParams.status = params.status;
    }
    if (params.page) {
      cleanParams.page = params.page;
    }
    if (params.limit) {
      cleanParams.limit = params.limit;
    }
    const response = await api.get(`${BASE_URL}/subscriptions`, {
      params: cleanParams,
      skipLang: true,
    });
    return response.data;
  },

  fetchSubscriptionDetails: async (subscriptionId) => {
    const response = await api.get(`${BASE_URL}/subscriptions/${subscriptionId}`, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },
};

export default parentPackagesApi;
