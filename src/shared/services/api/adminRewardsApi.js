import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));





let mockAchievements = [
  { id: 1, title: 'متقن التجويد', titleEn: 'Tajweed Master', description: 'إتِمام 20 حصة تجويد بتقييم ممتاز', descriptionEn: 'Completed 20 Tajweed sessions with excellent rating', studentName: 'عمر السعيد', date: '18 أبريل 2024', emoji: '🏆', bgColor: 'bg-amber-400 dark:bg-amber-600' },
  { id: 2, title: 'حافظ متميز', titleEn: 'Excellent Memorizer', description: 'حفظ 5 سور بدون أخطاء', descriptionEn: 'Memorized 5 Surahs without mistakes', studentName: 'عبد الله محمد', date: '5 ديسمبر 2025', emoji: '⭐', bgColor: 'bg-slate-300 dark:bg-slate-600' },
  { id: 3, title: 'طالب مجتهد', titleEn: 'Diligent Student', description: 'حضور 30 حصة متتالية بدون غياب', descriptionEn: 'Attended 30 consecutive sessions without absence', studentName: 'خالد فهد', date: '10 أغسطس 2024', emoji: '📖', bgColor: 'bg-emerald-200 dark:bg-emerald-700' },
  { id: 4, title: 'نجم الأسبوع', titleEn: 'Weekly Star', description: 'أفضل أداء في الأسبوع الثاني من مارس', descriptionEn: 'Best performance in second week of March', studentName: 'سالم العبدلي', date: '22 نوفمبر 2025', emoji: '✨', bgColor: 'bg-amber-700 dark:bg-amber-900' },
  { id: 5, title: 'منجز الواجبات', titleEn: 'Homework Achiever', description: 'إكمال 50 واجب بتقييم ممتاز', descriptionEn: 'Completed 50 assignments with excellent rating', studentName: 'أحمد الناصر', date: '30 سبتمبر 2026', emoji: '🎯', bgColor: 'bg-purple-600 dark:bg-purple-800' },
  { id: 6, title: 'قارئ متميز', titleEn: 'Distinguished Reciter', description: 'قراءة متقنة بأحكام التجويد الصحيحة', descriptionEn: 'Fluent reading with correct Tajweed rules', studentName: 'فهد العتيبي', date: '14 يونيو 2024', emoji: '💎', bgColor: 'bg-blue-600 dark:bg-blue-800' },
  { id: 7, title: 'الطالب المثالي', titleEn: 'Ideal Student', description: 'التزام وأدب وحسن خلق', descriptionEn: 'Commitment, discipline and good character', studentName: 'سعود الهاشم', date: '9 يناير 2025', emoji: '⭐', bgColor: 'bg-teal-700 dark:bg-teal-900' },
  { id: 8, title: 'محب العلم', titleEn: 'Science Lover', description: 'المشاركة الفعالة في جميع الحصص', descriptionEn: 'Active participation in all sessions', studentName: 'يزيد البدر', date: '2 يوليو 2026', emoji: '📚', bgColor: 'bg-rose-600 dark:bg-rose-800' },
  { id: 9, title: 'متقن التجويد', titleEn: 'Tajweed Master', description: 'إتِمام 20 حصة تجويد بتقييم ممتاز', descriptionEn: 'Completed 20 Tajweed sessions with excellent rating', studentName: 'طلال منصور', date: '1 ديسمبر 2024', emoji: '🏆', bgColor: 'bg-amber-400 dark:bg-amber-600' },
  { id: 10, title: 'منجز الواجبات', titleEn: 'Homework Achiever', description: 'إكمال 50 واجب بتقييم ممتاز', descriptionEn: 'Completed 50 assignments with excellent rating', studentName: 'عبد العزيز صالح', date: '25 يوليو 2026', emoji: '🎯', bgColor: 'bg-purple-600 dark:bg-purple-800' },
  { id: 11, title: 'متقن التجويد', titleEn: 'Tajweed Master', description: 'إتِمام 20 حصة تجويد بتقييم ممتاز', descriptionEn: 'Completed 20 Tajweed sessions with excellent rating', studentName: 'عبد الرحمن ابراهيم', date: '7 مارس 2025', emoji: '🏆', bgColor: 'bg-amber-400 dark:bg-amber-600' },
  { id: 12, title: 'الطالب المثالي', titleEn: 'Ideal Student', description: 'التزام وأدب وحسن خلق', descriptionEn: 'Commitment, discipline and good character', studentName: 'ماجد عبد الله', date: '12 فبراير 2025', emoji: '⭐', bgColor: 'bg-teal-700 dark:bg-teal-900' },
];

let mockStats = {
  totalRewards: 4,
  totalSuggestions: 4,
  approvedCount: 1,
  pendingCount: 2,
  rejectedCount: 1,
  totalAchievements: 12,
};

export const adminRewardsApi = {
  fetchStats: async () => {
    try {
      const response = await api.get('/api/v1/admin/rewards/stats');
      return response.data;
    } catch (error) {
      console.warn('API fetchStats failed, using mock:', error);
      await delay(200);
      return { success: true, data: mockStats };
    }
  },



  createReward: async (data) => {
    try {
      const payload = {
        name: { ar: data.name, en: data.nameEn || data.name },
        description: { ar: data.description, en: data.descriptionEn || data.description },
        icon: data.emoji,
        backgroundColor: data.bgColor
      };
      const response = await api.post('/api/v1/rewards/private', payload);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API createReward failed:', error);
      return { success: false };
    }
  },

  updateReward: async (id, data) => {
    try {
      const payload = {
        name: { ar: data.name, en: data.nameEn || data.name },
        description: { ar: data.description, en: data.descriptionEn || data.description },
        icon: data.emoji,
        backgroundColor: data.bgColor
      };
      const response = await api.patch(`/api/v1/rewards/private/${id}`, payload);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API updateReward failed:', error);
      return { success: false };
    }
  },

  deleteReward: async (id) => {
    try {
      await api.delete(`/api/v1/rewards/private/${id}`);
      return { success: true };
    } catch (error) {
      console.error('API deleteReward failed:', error);
      return { success: false };
    }
  },

  fetchRewardById: async (id) => {
    try {
      const response = await api.get(`/api/v1/rewards/private/${id}`);
      let rewardData = response.data.data || response.data;
      if (Array.isArray(rewardData)) {
        rewardData = rewardData[0];
      }
      return { success: true, data: rewardData };
    } catch (error) {
      console.error('API fetchRewardById failed:', error);
      return { success: false, data: null };
    }
  },

  fetchRewards: async () => {
    try {
      const response = await api.get('/api/v1/rewards/private/localized/all');
      return { success: true, data: response.data.data, length: response.data.length };
    } catch (error) {
      console.error('API fetchRewards failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchSuggestions: async () => {
    try {
      const response = await api.get('/api/v1/suggested-rewards/private');
      return { success: true, data: response.data.data, stats: response.data.stats };
    } catch (error) {
      console.error('API fetchSuggestions failed:', error);
      return { success: false, data: [] };
    }
  },

  approveSuggestion: async (id) => {
    try {
      const response = await api.patch(`/api/v1/suggested-rewards/private/accept/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API approveSuggestion failed:', error);
      return { success: false };
    }
  },

  rejectSuggestion: async (id) => {
    try {
      const response = await api.patch(`/api/v1/suggested-rewards/private/reject/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API rejectSuggestion failed:', error);
      return { success: false };
    }
  },

  deleteSuggestion: async (id) => {
    try {
      await api.delete(`/api/v1/suggested-rewards/private/${id}`);
      return { success: true };
    } catch (error) {
      console.error('API deleteSuggestion failed:', error);
      return { success: false };
    }
  },

  fetchAchievements: async () => {
    try {
      const response = await api.get('/api/v1/admin/rewards/achievements');
      return response.data;
    } catch (error) {
      console.warn('API fetchAchievements failed, using mock:', error);
      await delay(200);
      return { success: true, data: [...mockAchievements] };
    }
  },
};
