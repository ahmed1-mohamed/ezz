import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockGroups = [
  {
    id: 1,
    name: 'مجموعة القرآن أ',
    nameEn: 'Quran Group A',
    subject: 'القرآن الكريم',
    level: 'متوسطة',
    type: 'مجموعة',
    language: 'العربية',
    teacher: 'أحمد علي محمد',
    teacherId: 1,
    status: 'نشط',
    maxStudents: 5,
    image: null,
    schedule: [
      { day: 'السبت', timeFrom: '1 ص', timeTo: '2 ص' },
      { day: 'الثلاثاء', timeFrom: '1 ص', timeTo: '2 ص' },
    ],
    students: [
      { id: 's1', name: 'علي خالد', joinDate: '2025-02-20' },
      { id: 's2', name: 'سعاد عمر', joinDate: '2025-03-05' },
      { id: 's3', name: 'يوسف منصور', joinDate: '2025-04-10' },
      { id: 's4', name: 'نورة بندر', joinDate: '2025-04-12' },
    ],
    createdAt: '2025-01-10',
  },
  {
    id: 2,
    name: 'مجموعة العربية ب',
    nameEn: 'Arabic Group B',
    subject: 'اللغة العربية',
    level: 'مبتدئ',
    type: 'مجموعة',
    language: 'العربية',
    teacher: 'عائشة محمود',
    teacherId: 2,
    status: 'نشط',
    maxStudents: 5,
    image: null,
    schedule: [
      { day: 'السبت', timeFrom: '1 ص', timeTo: '2 ص' },
      { day: 'الثلاثاء', timeFrom: '1 ص', timeTo: '2 ص' },
    ],
    students: [
      { id: 's5', name: 'ليلى أحمد', joinDate: '2025-03-20' },
      { id: 's6', name: 'محمد فهد', joinDate: '2025-02-15' },
      { id: 's7', name: 'ريم أحمد', joinDate: '2025-01-30' },
      { id: 's8', name: 'عبدالله خالد', joinDate: '2025-03-01' },
      { id: 's9', name: 'سارة منى', joinDate: '2025-04-05' },
    ],
    createdAt: '2025-01-15',
  },
  {
    id: 3,
    name: 'مجموعة التجويد ج',
    nameEn: 'Tajweed Group C',
    subject: 'التجويد',
    level: 'متقدم',
    type: 'خاصة',
    language: 'العربية',
    teacher: 'أحمد علي محمد',
    teacherId: 1,
    status: 'نشط',
    maxStudents: 5,
    image: null,
    schedule: [
      { day: 'الأحد', timeFrom: '3 م', timeTo: '4 م' },
      { day: 'الأربعاء', timeFrom: '3 م', timeTo: '4 م' },
    ],
    students: [
      { id: 's10', name: 'يوسف منصور', joinDate: '2025-02-01' },
      { id: 's11', name: 'نورة بندر', joinDate: '2025-02-10' },
    ],
    createdAt: '2025-02-01',
  },
  {
    id: 4,
    name: 'مجموعة القرآن المتقدم',
    nameEn: 'Advanced Quran Group',
    subject: 'القرآن الكريم',
    level: 'متقدم',
    type: 'مجموعة',
    language: 'العربية',
    teacher: 'عائشة محمود',
    teacherId: 2,
    status: 'متوقف',
    maxStudents: 8,
    image: null,
    schedule: [
      { day: 'الاثنين', timeFrom: '5 م', timeTo: '6 م' },
    ],
    students: [
      { id: 's12', name: 'علي خالد', joinDate: '2025-01-05' },
      { id: 's13', name: 'سعاد عمر', joinDate: '2025-01-10' },
      { id: 's14', name: 'محمد فهد', joinDate: '2025-01-15' },
    ],
    createdAt: '2024-12-15',
  },
  {
    id: 5,
    name: 'مجموعة اللغة المبتدئة',
    nameEn: 'Beginner Language Group',
    subject: 'اللغة العربية',
    level: 'مبتدئ',
    type: 'مجموعة',
    language: 'العربية',
    teacher: 'أحمد علي محمد',
    teacherId: 1,
    status: 'نشط',
    maxStudents: 6,
    image: null,
    schedule: [
      { day: 'الجمعة', timeFrom: '2 م', timeTo: '3 م' },
    ],
    students: [
      { id: 's15', name: 'ريم أحمد', joinDate: '2025-03-05' },
      { id: 's16', name: 'عبدالله خالد', joinDate: '2025-03-10' },
      { id: 's17', name: 'سارة منى', joinDate: '2025-03-15' },
      { id: 's18', name: 'ليلى أحمد', joinDate: '2025-03-20' },
      { id: 's19', name: 'يوسف منصور', joinDate: '2025-03-25' },
    ],
    createdAt: '2025-03-01',
  },
];

export const adminGroupsApi = {
  fetchGroups: async () => {
    try {
      const response = await api.get('/api/v1/admin/groups');
      return response.data;
    } catch (error) {
      console.warn('API fetchGroups failed, using mock data:', error);
      await delay(400);
      return { success: true, data: [...mockGroups] };
    }
  },

  fetchGroupById: async (id) => {
    try {
      const response = await api.get(`/api/v1/admin/groups/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchGroupById failed, using mock data:', error);
      await delay(300);
      const group = mockGroups.find((g) => g.id === id);
      return group
        ? { success: true, data: group }
        : { success: false, message: 'Group not found' };
    }
  },

  createGroup: async (groupData) => {
    try {
      const response = await api.post('/api/v1/admin/groups', groupData);
      return response.data;
    } catch (error) {
      console.warn('API createGroup failed, using mock:', error);
      await delay(500);
      const newGroup = {
        ...groupData,
        id: Date.now(),
        students: [],
        createdAt: new Date().toISOString().split('T')[0],
      };
      mockGroups = [newGroup, ...mockGroups];
      return { success: true, data: newGroup };
    }
  },

  updateGroup: async (id, groupData) => {
    try {
      const response = await api.put(`/api/v1/admin/groups/${id}`, groupData);
      return response.data;
    } catch (error) {
      console.warn('API updateGroup failed, using mock:', error);
      await delay(400);
      mockGroups = mockGroups.map((g) => (g.id === id ? { ...g, ...groupData, id } : g));
      return { success: true, data: { ...groupData, id } };
    }
  },

  deleteGroup: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/groups/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteGroup failed, using mock:', error);
      await delay(400);
      mockGroups = mockGroups.filter((g) => g.id !== id);
      return { success: true, message: 'Deleted successfully' };
    }
  },

  addStudentToGroup: async (groupId, studentData) => {
    try {
      const response = await api.post(`/api/v1/admin/groups/${groupId}/students`, studentData);
      return response.data;
    } catch (error) {
      console.warn('API addStudentToGroup failed, using mock:', error);
      await delay(400);
      const newStudent = { ...studentData, id: `s${Date.now()}`, joinDate: new Date().toISOString().split('T')[0] };
      mockGroups = mockGroups.map((g) =>
        g.id === groupId ? { ...g, students: [...(g.students || []), newStudent] } : g
      );
      return { success: true, data: newStudent };
    }
  },

  removeStudentFromGroup: async (groupId, studentId) => {
    try {
      const response = await api.delete(`/api/v1/admin/groups/${groupId}/students/${studentId}`);
      return response.data;
    } catch (error) {
      console.warn('API removeStudentFromGroup failed, using mock:', error);
      await delay(400);
      mockGroups = mockGroups.map((g) =>
        g.id === groupId ? { ...g, students: (g.students || []).filter((s) => s.id !== studentId) } : g
      );
      return { success: true, message: 'Student removed' };
    }
  },
};
