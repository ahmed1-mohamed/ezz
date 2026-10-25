import api from './axiosConfig';
 
export const teacherEvaluationsApi = {
 
  fetchTeacherEvaluationsHistory: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/evaluations', { params, skipLang: true });
      const resData = response.data || {};
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];

      return {
        success: true,
        data: list,
        pagination: resData.pagination || {
          currentPage: 1,
          limit: params.limit || 10,
          numberOfPages: 1,
          totalCount: list.length,
        },
      };
    } catch (error) {
      console.warn('API fetchTeacherEvaluationsHistory failed, using fallback:', error);
      return {
        success: false,
        data: [],
        pagination: { currentPage: 1, limit: 10, numberOfPages: 1, totalCount: 0 },
        error,
      };
    }
  },

  createStudentEvaluation: async (sessionId, payload) => {
    try {
      const response = await api.post(
        `/api/v1/teacher/sessions/${sessionId}/evaluations`,
        {
          student: payload.student,
          rating: Number(payload.rating),
          notes: payload.notes || '',
        },
        { skipLang: true }
      );
      return {
        success: true,
        message: response.data?.message || 'تم تسجيل تقييم الطالب بنجاح',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API createStudentEvaluation failed:', error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.response?.data?.error ||
          'تعذر تسجيل التقييم، يرجى التأكد من البيانات والمحاولة مجدداً',
        error,
      };
    }
  },

  fetchSessionEvaluations: async (sessionId) => {
    try {
      const response = await api.get(`/api/v1/teacher/sessions/${sessionId}/evaluations`, {
        skipLang: true,
      });
      const resData = response.data || {};
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return {
        success: true,
        length: resData.length ?? list.length,
        data: list,
      };
    } catch (error) {
      console.warn('API fetchSessionEvaluations failed:', error);
      return { success: false, length: 0, data: [], error };
    }
  },

  fetchStudentEvaluations: async (studentId, params = {}) => {
    try {
      const response = await api.get(`/api/v1/teacher/students/${studentId}/evaluations`, {
        params,
        skipLang: true,
      });
      const resData = response.data || {};
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];

      return {
        success: true,
        statistics: resData.statistics || {
          averageRating: 0,
          totalEvaluations: list.length,
        },
        pagination: resData.pagination || {
          currentPage: 1,
          limit: 20,
          numberOfPages: 1,
        },
        data: list,
      };
    } catch (error) {
      console.warn('API fetchStudentEvaluations failed:', error);
      return {
        success: false,
        statistics: { averageRating: 0, totalEvaluations: 0 },
        pagination: { currentPage: 1, limit: 20, numberOfPages: 1 },
        data: [],
        error,
      };
    }
  },

  fetchTeacherGroups: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/groups', { params, skipLang: true });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return { success: true, data: list };
    } catch (error) {
      console.warn('API fetchTeacherGroups failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchGroupDetails: async (groupId) => {
    try {
      const response = await api.get(`/api/v1/teacher/groups/${groupId}`, { skipLang: true });
      const groupData = response.data?.data || response.data || null;
      return {
        success: true,
        data: groupData,
        students: groupData?.students || [],
        sessions: groupData?.sessionsHistory || groupData?.sessions || [],
      };
    } catch (error) {
      console.warn('API fetchGroupDetails failed:', error);
      return { success: false, data: null, students: [], sessions: [], error };
    }
  },

  fetchTeacherStudents: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/students', { params, skipLang: true });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return { success: true, data: list };
    } catch (error) {
      console.warn('API fetchTeacherStudents failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchTeacherSessions: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/sessions', { params, skipLang: true });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return { success: true, data: list };
    } catch (error) {
      console.warn('API fetchTeacherSessions failed:', error);
      return { success: false, data: [] };
    }
  },
};
