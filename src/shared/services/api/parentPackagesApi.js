import api from './axiosConfig';

export const parentPackagesApi = {
  fetchPackages: async (params = {}) => {
    const response = await api.get('/api/v1/parent/packages', {
      params,
      skipLang: true,
    });
    return response.data;
  },
  fetchPackageDetails: async (id) => {
    const response = await api.get(`/api/v1/parent/packages/${id}`, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },
};

export default parentPackagesApi;
