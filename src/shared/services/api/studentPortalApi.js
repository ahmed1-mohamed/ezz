import api from './axiosConfig';

export const studentPortalApi = {
  fetchDashboardStatistics: async () => {
    try {
      const response = await api.get('/api/v1/student/dashboard/statistics');
      return response.data?.data || response.data;
    } catch (error) {
      console.error('Error fetching student dashboard statistics:', error);
      throw error;
    }
  },

  fetchWeeklyTimetable: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/timetable', { params });
      return response.data?.data || response.data;
    } catch (error) {
      console.error('Error fetching student weekly timetable:', error);
      throw error;
    }
  },

  fetchTeachers: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/teachers', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching student teachers:', error);
      throw error;
    }
  },

  fetchTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/student/teachers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching student teacher with id ${id}:`, error);
      throw error;
    }
  },

  fetchHomework: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/homework', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching student homework:', error);
      throw error;
    }
  },

  fetchHomeworkById: async (id) => {
    try {
      const response = await api.get(`/api/v1/student/homework/${id}`);
      return response.data?.data || response.data;
    } catch (error) {
      console.error(`Error fetching student homework with id ${id}:`, error);
      throw error;
    }
  },

  submitHomework: async (id, submitData) => {
    try {
      const isFormData = submitData instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.post(`/api/v1/student/homework/${id}/submit`, submitData, { headers });
      return response.data;
    } catch (error) {
      console.error(`Error submitting homework with id ${id}:`, error);
      throw error;
    }
  },

  fetchPendingHomework: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/homework/pending', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching pending homework:', error);
      throw error;
    }
  },

  fetchSubmittedHomework: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/homework/submitted', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching submitted homework:', error);
      throw error;
    }
  },

  fetchSubmittedLateHomework: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/homework/submitted-late', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching submitted late homework:', error);
      throw error;
    }
  },

  fetchOverdueHomework: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/homework/overdue', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching overdue homework:', error);
      throw error;
    }
  },

  fetchEvaluations: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/evaluations', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching student evaluations:', error);
      throw error;
    }
  },

  fetchNextSession: async () => {
    try {
      const response = await api.get('/api/v1/student/sessions/next', {
        skipLang: true,
      });
      return response.data?.data ?? response.data ?? null;
    } catch (error) {
      console.error('Error fetching student next session:', error);
      throw error;
    }
  },

  joinSession: async (sessionId) => {
    try {
      const response = await api.get('/api/v1/student/sessions/' + sessionId + '/join', {
        skipLang: true,
      });
      return response.data?.data ?? response.data ?? null;
    } catch (error) {
      if (error.response?.status === 405) {
        const postRes = await api.post('/api/v1/student/sessions/' + sessionId + '/join');
        return postRes.data?.data ?? postRes.data ?? null;
      }
      console.error('Error joining student session ' + sessionId + ':', error);
      throw error;
    }
  },

  fetchAttendance: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/sessions/attendance', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching student attendance:', error);
      throw error;
    }
  },

  fetchRewards: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/rewards', { params });
      return response.data?.data || response.data;
    } catch (error) {
      console.error('Error fetching student rewards:', error);
      throw error;
    }
  },

  fetchCurriculaAttachments: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/curricula/attachments', { params });
      return response.data?.data || response.data;
    } catch (error) {
      console.error('Error fetching curricula attachments:', error);
      throw error;
    }
  },

  fetchCurricula: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student/curricula', { params });
      return response.data?.data || response.data;
    } catch (error) {
      console.error('Error fetching student curricula:', error);
      throw error;
    }
  },

  linkGoogleAccount: async (googleData = {}) => {
    try {
      const googleId = typeof googleData === 'string' ? googleData : (googleData?.googleId || googleData?.sub);
      const response = await api.post('/api/v1/auth/google/link', { googleId });
      return response.data;
    } catch (error) {
      console.error('Error linking Google account:', error);
      throw error;
    }
  },

  unlinkGoogleAccount: async () => {
    try {
      const response = await api.delete('/api/v1/auth/google/unlink');
      return response.data;
    } catch (error) {
      console.error('Error unlinking Google account:', error);
      throw error;
    }
  }
};

export default studentPortalApi;

