import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockStats = {
  totalAssignments: 4,
  activeCount: 2,
  completedCount: 1,
  lateCount: 1,
};

let mockAssignments = [
  {
    id: 1,
    title: 'حفظ سورة البقرة (الآيات 1-20)',
    groupName: 'مجموعة القرآن أ',
    teacher: 'أ. فاطمة الزهراء',
    deadline: '2024-04-25',
    submittedCount: 3,
    totalCount: 4,
    status: 'active', // نشط
  },
  {
    id: 2,
    title: 'تمارين النحو والصرف',
    groupName: 'مجموعة العربية أ',
    teacher: 'أ. مريم العلي',
    deadline: '2024-04-22',
    submittedCount: 2,
    totalCount: 4,
    status: 'late', // متأخر
  },
  {
    id: 3,
    title: 'تدريب على الإملاء',
    groupName: 'مجموعة العربية ب',
    teacher: 'أ. محمد السعيد',
    deadline: '2024-04-24',
    submittedCount: 5,
    totalCount: 5,
    status: 'completed', // مكتمل
  },
];

export const adminAssignmentsApi = {
  fetchStats: async () => {
    try {
      const response = await api.get('/api/v1/admin/assignments/stats');
      return response.data;
    } catch (error) {
      console.warn('API fetchStats failed, using mock:', error);
      await delay(200);
      return { success: true, data: mockStats };
    }
  },

  fetchAssignments: async (search = '') => {
    try {
      const response = await api.get(`/api/v1/admin/assignments?search=${search}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchAssignments failed, using mock:', error);
      await delay(200);
      let filtered = [...mockAssignments];
      if (search) {
        filtered = filtered.filter(
          (a) =>
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.groupName.toLowerCase().includes(search.toLowerCase()) ||
            a.teacher.toLowerCase().includes(search.toLowerCase())
        );
      }
      return { success: true, data: filtered };
    }
  },

  deleteAssignment: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/assignments/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteAssignment failed, using mock:', error);
      await delay(200);
      mockAssignments = mockAssignments.filter((a) => a.id !== id);
      mockStats.totalAssignments = Math.max(0, mockStats.totalAssignments - 1);
      return { success: true };
    }
  },
};
