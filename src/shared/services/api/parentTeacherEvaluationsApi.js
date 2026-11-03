import api from './axiosConfig';

export const parentTeacherEvaluationsApi = {
  fetchChildrenTeachers: async () => {
    const response = await api.get('/api/v1/parent/teachers', { skipLang: true });
    const payload = response.data?.data ?? response.data;
    return Array.isArray(payload) ? payload : [];
  },

  submitTeacherEvaluation: async (teacherId, { rating, notes }) => {
    const response = await api.post(`/api/v1/parent/teachers/${teacherId}/evaluations`, {
      rating: Number(rating),
      notes: String(notes || '').trim()
    }, { skipLang: true });
    return response.data;
  },

  fetchTeacherEvaluationsHistory: async (params = {}) => {
    const response = await api.get('/api/v1/parent/teachers/evaluations', {
      params,
      skipLang: true
    });
    return response.data;
  }
};

export default parentTeacherEvaluationsApi;

