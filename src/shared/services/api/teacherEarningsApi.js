import api from './axiosConfig';

const BASE_URL = '/api/v1/teacher/dashboard/earnings';

export const teacherEarningsApi = {
  fetchEarnings: async (params = {}) => {
    const response = await api.get(BASE_URL, {
      params,
      skipLang: true,
    });
    return response.data?.data || response.data;
  },
};

export default teacherEarningsApi;
