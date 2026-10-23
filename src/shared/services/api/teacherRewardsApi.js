import api from './axiosConfig';

/**
 * Teacher Rewards API Service
 * Handles fetching available rewards, awarding rewards to students, and suggesting new rewards.
 */
export const teacherRewardsApi = {
  /**
   * Fetch all available rewards for teacher
   */
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

  /**
   * Award a reward to a student
   * POST /api/v1/teacher/students/{studentId}/rewards/{rewardId}
   */
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

  /**
   * Suggest a new reward
   */
  suggestReward: async (payload) => {
    try {
      const response = await api.post(
        '/api/v1/suggested-rewards/private',
        payload,
        { skipLang: true }
      );
      return { success: true, data: response.data };
    } catch {
      try {
        const fallback = await api.post('/api/v1/suggested-rewards', payload, { skipLang: true });
        return { success: true, data: fallback.data };
      } catch (err) {
        return { success: false, error: err.response?.data?.message || 'فشل إرسال الاقتراح' };
      }
    }
  },
};
