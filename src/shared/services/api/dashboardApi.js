import api from "./axiosConfig";

export const dashboardApi = {
  fetchStatistics: async () => {
    try {
      const response = await api.get('/api/v1/dashboard/private/statistics');
      return { success: true, data: response.data?.data || response.data };
    } catch (error) {
      console.error('API fetchStatistics failed:', error);
      return { success: false, data: null };
    }
  },

  fetchTeacherStatistics: async () => {
    try {
      const response = await api.get('/api/v1/teacher/dashboard/statistics');
      return { success: true, data: response.data?.data || response.data };
    } catch (error) {
      console.error('API fetchTeacherStatistics failed:', error);
      return { success: false, data: null, error };
    }
  },

  fetchPendingEvaluation: async () => {
    try {
      const response = await api.get('/api/v1/teacher/sessions/completed/pending-evaluations');
      const resData = response.data?.data || response.data || {};
      return {
        success: true,
        session: resData.data || resData,
        pendingStudentIds: Array.isArray(response.data?.pendingEvaluationStudentIds)
          ? response.data.pendingEvaluationStudentIds
          : [],
      };
    } catch (error) {
      console.error('API fetchPendingEvaluation failed:', error);
      return { success: false, session: null, pendingStudentIds: [] };
    }
  },

  fetchNextSession: async () => {
    try {
      const response = await api.get('/api/v1/teacher/sessions/next');
      const session = response.data?.data || response.data || null;
      return { success: true, session };
    } catch (error) {
      console.error('API fetchNextSession failed:', error);
      return { success: false, session: null };
    }
  },
};
