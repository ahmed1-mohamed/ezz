import api from './axiosConfig';

export const parentApi = {
  fetchDashboardStats: async () => {
    try {
      const response = await api.get('/api/v1/parents');
      return { success: true, data: response.data?.data || response.data };
    } catch {
      try {
        const fallbackRes = await api.get('/api/v1/parents/stats');
        return { success: true, data: fallbackRes.data?.data || fallbackRes.data };
      } catch (err) {
        console.error('parentApi.fetchDashboardStats failed:', err);
        return { success: false, data: null };
      }
    }
  },

  fetchChildren: async () => {
    try {
      const response = await api.get('/api/v1/parents/my-children');
      const items = response.data?.data || (Array.isArray(response.data) ? response.data : []);
      return { success: true, data: items };
    } catch {
      try {
        const fallbackRes = await api.get('/api/v1/parents/children');
        const items = fallbackRes.data?.data || (Array.isArray(fallbackRes.data) ? fallbackRes.data : []);
        return { success: true, data: items };
      } catch {
        try {
          const allRes = await api.get('/api/v1/students/localized/all');
          const items = allRes.data?.data || (Array.isArray(allRes.data) ? allRes.data : []);
          return { success: true, data: items };
        } catch (err) {
          console.error('parentApi.fetchChildren failed:', err);
          return { success: false, data: [] };
        }
      }
    }
  },

  fetchChildById: async (id) => {
    try {
      const response = await api.get(`/api/v1/students/localized/${id}`);
      return { success: true, data: response.data?.data || response.data };
    } catch {
      try {
        const response = await api.get(`/api/v1/students/${id}`, { skipLang: true });
        return { success: true, data: response.data?.data || response.data };
      } catch (err) {
        console.error('parentApi.fetchChildById failed:', err);
        return { success: false, data: null };
      }
    }
  },

  fetchTeachersList: async () => {
    try {
      const response = await api.get('/api/v1/teachers/public', { params: { limit: 50 } });
      const items = response.data?.data || (Array.isArray(response.data) ? response.data : []);
      return { success: true, data: items };
    } catch {
      try {
        const res = await api.get('/api/v1/parents/teachers');
        return { success: true, data: res.data?.data || (Array.isArray(res.data) ? res.data : []) };
      } catch (err) {
        console.error('parentApi.fetchTeachersList failed:', err);
        return { success: false, data: [] };
      }
    }
  },

  fetchPastRatings: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parents/ratings', { params });
      return { success: true, data: response.data?.data || (Array.isArray(response.data) ? response.data : []) };
    } catch {
      try {
        const res = await api.get('/api/v1/parents/evaluations', { params });
        return { success: true, data: res.data?.data || (Array.isArray(res.data) ? res.data : []) };
      } catch (err) {
        console.error('parentApi.fetchPastRatings failed:', err);
        return { success: false, data: [] };
      }
    }
  },

  submitRating: async (data) => {
    try {
      const response = await api.post('/api/v1/parents/ratings', data);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('parentApi.submitRating failed:', err);
      throw err;
    }
  },

  fetchAssignments: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parents/assignments', { params });
      return { success: true, data: response.data?.data || response.data };
    } catch {
      try {
        const res = await api.get('/api/v1/admin/assignments', { params });
        return { success: true, data: res.data?.data || res.data };
      } catch (err) {
        console.error('parentApi.fetchAssignments failed:', err);
        return { success: false, data: [] };
      }
    }
  },

  fetchReports: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parents/reports', { params });
      return { success: true, data: response.data?.data || response.data };
    } catch {
      try {
        const res = await api.get('/api/v1/students/progress', { params });
        return { success: true, data: res.data?.data || res.data };
      } catch (err) {
        console.error('parentApi.fetchReports failed:', err);
        return { success: false, data: null };
      }
    }
  },

  fetchSchedules: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parents/schedules', { params });
      return { success: true, data: response.data?.data || response.data };
    } catch {
      try {
        const res = await api.get('/api/v1/sessions/private', { params });
        return { success: true, data: res.data?.data || (Array.isArray(res.data) ? res.data : []) };
      } catch {
        try {
          const res = await api.get('/api/v1/timetable/public', { params });
          return { success: true, data: res.data?.data || res.data };
        } catch (err) {
          console.error('parentApi.fetchSchedules failed:', err);
          return { success: false, data: [] };
        }
      }
    }
  },

  fetchAttendance: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parents/attendance', { params });
      return { success: true, data: response.data?.data || response.data };
    } catch {
      try {
        const res = await api.get('/api/v1/sessions/private', { params: { ...params, status: 'completed' } });
        return { success: true, data: res.data?.data || res.data };
      } catch (err) {
        console.error('parentApi.fetchAttendance failed:', err);
        return { success: false, data: [] };
      }
    }
  },

  fetchBadges: async (childId) => {
    try {
      const response = await api.get('/api/v1/rewards/private/localized/all');
      return { success: true, data: response.data?.data || (Array.isArray(response.data) ? response.data : []) };
    } catch {
      try {
        const res = await api.get('/api/v1/rewards/private');
        return { success: true, data: res.data?.data || (Array.isArray(res.data) ? res.data : []) };
      } catch (err) {
        console.error('parentApi.fetchBadges failed:', err);
        return { success: false, data: [] };
      }
    }
  }
};

export default parentApi;
