import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockSessions = [
  {
    id: 1,
    groupName: 'مجموعة القرآن أ',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'live',
  },
  {
    id: 2,
    groupName: 'مجموعة القرآن أ',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'upcoming',
  },
  {
    id: 3,
    groupName: 'مجموعة القرآن ب',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'upcoming',
  },
  {
    id: 4,
    groupName: 'مجموعة القرآن ب',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'completed',
  },
  {
    id: 5,
    groupName: 'مجموعة القرآن ب',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'completed',
  },
  {
    id: 6,
    groupName: 'مجموعة القرآن ب',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'upcoming',
  },
  {
    id: 7,
    groupName: 'مجموعة القرآن ب',
    teacher: 'فاطمة الزهراء',
    teacherId: 3,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'cancelled',
  },
  {
    id: 8,
    groupName: 'مجموعة العربية ب',
    teacher: 'محمد أحمد علي',
    teacherId: 4,
    date: '2024-04-23',
    time: '10:00',
    duration: 60,
    studentsCount: 4,
    status: 'completed',
  },
];

export const adminSessionsApi = {
  fetchSessions: async () => {
    try {
      const response = await api.get('/api/v1/admin/sessions');
      return response.data;
    } catch (error) {
      console.warn('API fetchSessions failed, using mock data:', error);
      await delay(400);
      return { success: true, data: [...mockSessions] };
    }
  },

  rescheduleSession: async (id, newDate, newTime) => {
    try {
      const response = await api.put(`/api/v1/admin/sessions/${id}/reschedule`, { date: newDate, time: newTime });
      return response.data;
    } catch (error) {
      console.warn('API rescheduleSession failed, using mock:', error);
      await delay(400);
      mockSessions = mockSessions.map((s) =>
        s.id === id ? { ...s, date: newDate, time: newTime } : s
      );
      return { success: true, data: { id, date: newDate, time: newTime } };
    }
  },

  changeTeacher: async (id, teacherId, teacherName) => {
    try {
      const response = await api.put(`/api/v1/admin/sessions/${id}/teacher`, { teacherId, teacherName });
      return response.data;
    } catch (error) {
      console.warn('API changeTeacher failed, using mock:', error);
      await delay(400);
      mockSessions = mockSessions.map((s) =>
        s.id === id ? { ...s, teacher: teacherName, teacherId } : s
      );
      return { success: true, data: { id, teacher: teacherName, teacherId } };
    }
  },

  cancelSession: async (id) => {
    try {
      const response = await api.put(`/api/v1/admin/sessions/${id}/cancel`);
      return response.data;
    } catch (error) {
      console.warn('API cancelSession failed, using mock:', error);
      await delay(400);
      mockSessions = mockSessions.map((s) =>
        s.id === id ? { ...s, status: 'cancelled' } : s
      );
      return { success: true, message: 'Session cancelled' };
    }
  },
};
