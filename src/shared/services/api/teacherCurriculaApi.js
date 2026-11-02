import api from './axiosConfig';

export const teacherCurriculaApi = {
  fetchCurricula: async (params = {}) => {
    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;
    const response = await api.get('/api/v1/teacher/curricula', {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },
};

