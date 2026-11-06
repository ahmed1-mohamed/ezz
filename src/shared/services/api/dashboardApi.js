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

  fetchAnalytics: async (params = {}) => {
    try {
      let queryParams = {};
      if (typeof params === 'string') {
        queryParams = { period: params, timeframe: params, filter: params };
      } else if (params && typeof params === 'object') {
        const p = params.period || params.timeframe || params.filter || 'monthly';
        queryParams = {
          period: p,
          timeframe: p,
          filter: p,
          ...params,
        };
      }
      const response = await api.get('/api/v1/dashboard/private/analytics', {
        params: queryParams,
      });
      return {
        success: true,
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.error('API fetchAnalytics failed:', error);
      return { success: false, data: null, error };
    }
  },

  fetchTeacherPerformance: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/dashboard/private/reports/teacher-performance', {
        params,
      });
      return {
        success: true,
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.error('API fetchTeacherPerformance failed:', error);
      return { success: false, data: null, error };
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
      const response = await api.get('/api/v1/teacher/sessions/completed/pending-evaluations', {
        skipLang: true,
        skipToast: true,
        validateStatus: (status) => status < 500,
      });
      const root = response.data || {};
      const session = root.data && typeof root.data === 'object' && root.data.id ? root.data : null;
      const pendingStudentIds = Array.isArray(root.pendingEvaluationStudentIds)
        ? root.pendingEvaluationStudentIds
        : [];
      return {
        success: Boolean(session),
        session,
        pendingStudentIds,
      };
    } catch (error) {
      console.warn('API fetchPendingEvaluation handled:', error);
      const root = error?.response?.data || {};
      const session = root.data && typeof root.data === 'object' && root.data.id ? root.data : null;
      const pendingStudentIds = Array.isArray(root.pendingEvaluationStudentIds)
        ? root.pendingEvaluationStudentIds
        : [];
      return {
        success: Boolean(session),
        session,
        pendingStudentIds,
      };
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

export default dashboardApi;
