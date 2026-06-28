import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockRewards = [
  {
    id: 1,
    name: 'نجم القرآن',
    nameEn: 'Quran Star',
    emoji: '⭐',
    bgColor: '#fef3c7',
    textColor: '#d97706',
    description: 'يُمنح للطلاب المتميزين في التلاوة والتجويد.',
    descriptionEn: 'Given to students distinguished in recitation and Tajweed.',
  },
  {
    id: 2,
    name: 'المواظب المثالي',
    nameEn: 'Perfect Attendance',
    emoji: '📅',
    bgColor: '#d1fae5',
    textColor: '#059669',
    description: 'يُمنح للحضور الكامل دون أي غياب طوال الشهر.',
    descriptionEn: 'Given for full attendance without any absence throughout the month.',
  },
  {
    id: 3,
    name: 'البطل السريع',
    nameEn: 'Speed Champion',
    emoji: '⚡',
    bgColor: '#e0e7ff',
    textColor: '#4f46e5',
    description: 'يُمنح للسرعة الفائقة في الحفظ والمراجعة.',
    descriptionEn: 'Given for outstanding speed in memorization and review.',
  },
  {
    id: 4,
    name: 'القارئ الذهبي',
    nameEn: 'Golden Reciter',
    emoji: '👑',
    bgColor: '#fee2e2',
    textColor: '#dc2626',
    description: 'يُمنح لأفضل أداء صوتي وتجويدي مجود.',
    descriptionEn: 'Given for best vocal performance and perfect Tajweed.',
  },
];

let mockSuggestions = [
  {
    id: 101,
    name: 'نجم القرآن',
    nameEn: 'Quran Star',
    emoji: '⭐',
    description: 'تُمنح عند إتمام حفظ جزء كامل',
    descriptionEn: 'Given upon completing memorization of a full Juz\'',
    status: 'pending',
    grantedCount: 45,
    studentTarget: 'لكل الطلاب',
    studentTargetEn: 'For all students',
  },
  {
    id: 102,
    name: 'متفوق الأسبوع',
    nameEn: 'Weekly Star',
    emoji: '⭐',
    description: 'أفضل طالب في الأسبوع',
    descriptionEn: 'Best student of the week',
    status: 'pending',
    grantedCount: 45,
    studentTarget: 'لكل الطلاب',
    studentTargetEn: 'For all students',
  },
  {
    id: 103,
    name: 'القارئ المتميز',
    nameEn: 'Distinguished Reciter',
    emoji: '📖',
    description: 'تحسين مخارج الحروف وقواعد التجويد',
    descriptionEn: 'Improving articulation and Tajweed rules',
    status: 'approved',
    grantedCount: 12,
    studentTarget: 'لكل الطلاب',
    studentTargetEn: 'For all students',
  },
  {
    id: 104,
    name: 'المتفوق الأكاديمي',
    nameEn: 'Academic Achiever',
    emoji: '🎓',
    description: 'الحصول على الدرجات النهائية في جميع الاختبارات',
    descriptionEn: 'Obtaining full grades in all exams',
    status: 'rejected',
    grantedCount: 0,
    studentTarget: 'طلاب محددين',
    studentTargetEn: 'Specific students',
  },
];

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

  fetchRewards: async () => {
    try {
      const response = await api.get('/api/v1/admin/rewards');
      return response.data;
    } catch (error) {
      console.warn('API fetchRewards failed, using mock:', error);
      await delay(200);
      return { success: true, data: [...mockRewards] };
    }
  },

  createReward: async (data) => {
    try {
      const response = await api.post('/api/v1/admin/rewards', data);
      return response.data;
    } catch (error) {
      console.warn('API createReward failed, using mock:', error);
      await delay(200);
      const newReward = {
        id: Date.now(),
        ...data,
      };
      mockRewards.push(newReward);
      mockStats.totalRewards += 1;
      return { success: true, data: newReward };
    }
  },

  updateReward: async (id, data) => {
    try {
      const response = await api.put(`/api/v1/admin/rewards/${id}`, data);
      return response.data;
    } catch (error) {
      console.warn('API updateReward failed, using mock:', error);
      await delay(200);
      mockRewards = mockRewards.map((r) => (r.id === id ? { ...r, ...data } : r));
      return { success: true, data: { id, ...data } };
    }
  },

  deleteReward: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/rewards/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteReward failed, using mock:', error);
      await delay(200);
      mockRewards = mockRewards.filter((r) => r.id !== id);
      mockStats.totalRewards = Math.max(0, mockStats.totalRewards - 1);
      return { success: true };
    }
  },

  fetchSuggestions: async () => {
    try {
      const response = await api.get('/api/v1/admin/rewards/suggestions');
      return response.data;
    } catch (error) {
      console.warn('API fetchSuggestions failed, using mock:', error);
      await delay(200);
      return { success: true, data: [...mockSuggestions] };
    }
  },

  approveSuggestion: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/rewards/suggestions/${id}/approve`);
      return response.data;
    } catch (error) {
      console.warn('API approveSuggestion failed, using mock:', error);
      await delay(200);
      const sug = mockSuggestions.find((s) => s.id === id);
      if (sug) {
        sug.status = 'approved';
        mockStats.approvedCount += 1;
        mockStats.pendingCount = Math.max(0, mockStats.pendingCount - 1);
        // Add to mock rewards list too
        mockRewards.push({
          id: Date.now(),
          name: sug.name,
          nameEn: sug.nameEn,
          emoji: sug.emoji,
          bgColor: '#d1fae5',
          textColor: '#059669',
          description: sug.description,
          descriptionEn: sug.descriptionEn,
        });
        mockStats.totalRewards += 1;
      }
      return { success: true, data: sug };
    }
  },

  rejectSuggestion: async (id) => {
    try {
      const response = await api.post(`/api/v1/admin/rewards/suggestions/${id}/reject`);
      return response.data;
    } catch (error) {
      console.warn('API rejectSuggestion failed, using mock:', error);
      await delay(200);
      const sug = mockSuggestions.find((s) => s.id === id);
      if (sug) {
        sug.status = 'rejected';
        mockStats.rejectedCount += 1;
        mockStats.pendingCount = Math.max(0, mockStats.pendingCount - 1);
      }
      return { success: true, data: sug };
    }
  },

  deleteSuggestion: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/rewards/suggestions/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteSuggestion failed, using mock:', error);
      await delay(200);
      mockSuggestions = mockSuggestions.filter((s) => s.id !== id);
      mockStats.totalSuggestions = Math.max(0, mockStats.totalSuggestions - 1);
      return { success: true };
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
