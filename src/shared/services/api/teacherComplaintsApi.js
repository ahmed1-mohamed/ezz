import api from './axiosConfig';

const toMultipart = ({ attachments = [], status, ...fields }) => {
  const fd = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') fd.append(key, value);
  });
  attachments.forEach((file) => {
    if (file instanceof File) fd.append('attachments', file);
  });
  return fd;
};

export const teacherComplaintsApi = {
  fetchComplaints: async (params = {}) => {
    const cleanParams = {};
    if (typeof params === 'object' && params !== null) {
      if (params.page) cleanParams.page = params.page;
      if (params.limit) cleanParams.limit = params.limit;
      if (params.search) cleanParams.search = params.search;
    }
    try {
      const response = await api.get('/api/v1/teacher/complaints-suggestions', {
        params: Object.keys(cleanParams).length > 0 ? cleanParams : undefined,
        skipLang: true,
        skipGlobalErrorToast: true,
      });
      return response.data;
    } catch (err) {
      if (Object.keys(cleanParams).length > 0) {
        const fallbackResponse = await api.get('/api/v1/teacher/complaints-suggestions', {
          skipLang: true,
        });
        return fallbackResponse.data;
      }
      throw err;
    }
  },

  fetchComplaintById: async (id) => {
    const response = await api.get(`/api/v1/teacher/complaints-suggestions/${id}`, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },

  createComplaintOrSuggestion: async (payload) => {
    const response = await api.post(
      '/api/v1/teacher/complaints-suggestions',
      toMultipart(payload),
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },

  requestRescheduleSession: async (payload) => {
    const response = await api.post(
      '/api/v1/teacher/complaints-suggestions/reschedule-session',
      toMultipart(payload),
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  },
};
