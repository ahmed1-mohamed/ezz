import api from './axiosConfig';

export const teacherComplaintsApi = {
  fetchComplaints: async (filterOrParams) => {
    let queryParams = {};
    if (typeof filterOrParams === 'string' && filterOrParams !== 'all') {
      queryParams.status = filterOrParams;
    } else if (typeof filterOrParams === 'object' && filterOrParams !== null) {
      if (filterOrParams.status && filterOrParams.status !== 'all') {
        queryParams.status = filterOrParams.status;
      }
      if (filterOrParams.page) queryParams.page = filterOrParams.page;
      if (filterOrParams.limit) queryParams.limit = filterOrParams.limit;
    }

    try {
      const response = await api.get('/api/v1/teacher/complaints-suggestions', {
        params: Object.keys(queryParams).length > 0 ? queryParams : undefined,
        skipLang: true,
      });
      return response.data;
    } catch (error) {
      if (Object.keys(queryParams).length > 0) {
        const fallback = await api.get('/api/v1/teacher/complaints-suggestions', {
          skipLang: true,
        });
        return fallback.data;
      }
      throw error;
    }
  },

  fetchComplaintById: async (id) => {
    const response = await api.get(`/api/v1/teacher/complaints-suggestions/${id}`, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },

  createComplaintOrSuggestion: async (payload) => {
    const response = await api.post('/api/v1/teacher/complaints-suggestions', payload);
    return response.data;
  },

  requestRescheduleSession: async (payload) => {
    const response = await api.post(
      '/api/v1/teacher/complaints-suggestions/reschedule-session',
      payload
    );
    return response.data;
  },
};