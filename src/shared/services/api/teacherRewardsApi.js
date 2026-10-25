import api from './axiosConfig';

export const teacherRewardsApi = {
  fetchRewards: async () => {
    try {
      const response = await api.get('/api/v1/teacher/rewards', { skipLang: true });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return { success: true, data: list, length: resData?.length ?? list.length };
    } catch (error) {
      console.warn('API fetchRewards failed, returning fallback preview:', error);
      return { success: false, data: [] };
    }
  },

  awardRewardToStudent: async (studentId, rewardId) => {
    try {
      const response = await api.post(
        `/api/v1/teacher/students/${studentId}/rewards/${rewardId}`,
        {},
        { skipLang: true }
      );
      return {
        success: true,
        message: response.data?.message || 'تم منح المكافأة للطالب بنجاح وسيتم إشعار ولي أمره',
        data: response.data,
      };
    } catch (error) {
      console.warn('API awardRewardToStudent failed:', error);
      return {
        success: false,
        message: error.response?.data?.message || error.response?.data?.error || 'تعذر منح المكافأة للطالب',
        error,
      };
    }
  },

  fetchActiveGroups: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/groups/active', { params });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return { success: true, data: list, stats: resData?.stats || null };
    } catch (error) {
      console.warn('API fetchActiveGroups failed:', error);
      return { success: false, data: [], error };
    }
  },

  fetchTeacherStudents: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/students', { params });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];
      return { success: true, data: list, total: resData?.total || list.length };
    } catch (error) {
      console.warn('API fetchTeacherStudents failed:', error);
      return { success: false, data: [], error };
    }
  },

  fetchSuggestedRewards: async (status = 'all') => {
    try {
      let endpoint = '/api/v1/teacher/suggested-rewards';
      const normalizedStatus = (status || 'all').toLowerCase();

      if (normalizedStatus === 'pending') {
        endpoint = '/api/v1/teacher/suggested-rewards/pending';
      } else if (normalizedStatus === 'accepted') {
        endpoint = '/api/v1/teacher/suggested-rewards/accepted';
      } else if (normalizedStatus === 'rejected') {
        endpoint = '/api/v1/teacher/suggested-rewards/rejected';
      }

      const response = await api.get(endpoint, { skipLang: true });
      const resData = response.data || {};

      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : [];

      return {
        success: true,
        stats: resData.stats || {
          total: list.length,
          accepted: list.filter((i) => i.status === 'accepted').length,
          pending: list.filter((i) => i.status === 'pending').length,
          rejected: list.filter((i) => i.status === 'rejected').length,
        },
        data: list,
      };
    } catch (error) {
      console.warn(`API fetchSuggestedRewards (${status}) failed:`, error);
      return {
        success: false,
        stats: { total: 0, accepted: 0, pending: 0, rejected: 0 },
        data: [],
        error,
      };
    }
  },

  createSuggestedReward: async (payload) => {
    try {
      const response = await api.post(
        '/api/v1/teacher/suggested-rewards',
        payload,
        { skipLang: true }
      );
      return {
        success: true,
        message: response.data?.message || 'تم إرسال اقتراح المكافأة بنجاح للمراجعة والاعتماد',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API createSuggestedReward failed:', error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.response?.data?.error ||
          'تعذر إرسال اقتراح المكافأة، يرجى المحاولة مرة أخرى',
        error,
      };
    }
  },

  suggestReward: async (payload) => {
    return teacherRewardsApi.createSuggestedReward(payload);
  },
};

