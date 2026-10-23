import api from './axiosConfig';

export const teacherComplaintsApi = {
  fetchComplaints: async (status = 'all', params = {}) => {
    let endpoint = '/api/v1/teacher/complaints-suggestions';
    if (status === 'resolved') {
      endpoint = '/api/v1/teacher/complaints-suggestions/resolved';
    } else if (status === 'rejected') {
      endpoint = '/api/v1/teacher/complaints-suggestions/rejected';
    }

    const response = await api.get(endpoint, { params });
    return response.data;
  },

  fetchComplaintById: async (id) => {
    const response = await api.get(`/api/v1/teacher/complaints-suggestions/${id}`);
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