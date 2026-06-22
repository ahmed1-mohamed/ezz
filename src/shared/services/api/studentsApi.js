import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockStudents = [
  {
    id: 1,
    name: 'أحمد خالد المنصور',
    nameEn: 'Ahmed Khaled Al-Mansour',
    age: 10,
    email: 'ahmed.khaled@yahoo.com',
    phone: '+20 1012345678',
    country: 'مصر',
    level: 'متوسط',
    groupName: 'مجموعة القرآن أ',
    parentName: 'خالد المنصور',
    remainingSessions: 8,
    totalSessions: 12,
    subscriptionStatus: 'Active', // فعال
    notes: 'طالب ممتاز ومواظب على الحضور'
  },
  {
    id: 2,
    name: 'أحمد خالد المنصور',
    nameEn: 'Ahmed Khaled Al-Mansour',
    age: 10,
    email: 'ahmed2@yahoo.com',
    phone: '+20 1012345678',
    country: 'مصر',
    level: 'مبتدئ',
    groupName: 'مجموعة القرآن أ',
    parentName: 'خالد المنصور',
    remainingSessions: 8,
    totalSessions: 12,
    subscriptionStatus: 'Active', // فعال
    notes: ''
  },
  {
    id: 3,
    name: 'أحمد خالد المنصور',
    nameEn: 'Ahmed Khaled Al-Mansour',
    age: 10,
    email: 'ahmed3@yahoo.com',
    phone: '+20 1012345678',
    country: 'مصر',
    level: 'متقدم',
    groupName: 'مجموعة القرآن أ',
    parentName: 'خالد المنصور',
    remainingSessions: 8,
    totalSessions: 12,
    subscriptionStatus: 'Active', // فعال
    notes: ''
  },
  {
    id: 4,
    name: 'أحمد خالد المنصور',
    nameEn: 'Ahmed Khaled Al-Mansour',
    age: 10,
    email: 'ahmed4@yahoo.com',
    phone: '+20 1012345678',
    country: 'مصر',
    level: 'متوسط',
    groupName: 'مجموعة القرآن أ',
    parentName: 'خالد المنصور',
    remainingSessions: 8,
    totalSessions: 12,
    subscriptionStatus: 'Active', // فعال
    notes: ''
  },
  {
    id: 5,
    name: 'سليمان خالد المنصور',
    nameEn: 'Soliman Khaled Al-Mansour',
    age: 9,
    email: 'soliman@yahoo.com',
    phone: '+966 501234567',
    country: 'المملكة العربية السعودية',
    level: 'مبتدئ',
    groupName: 'مجموعة التجويد ب',
    parentName: 'خالد المنصور',
    remainingSessions: 2,
    totalSessions: 12,
    subscriptionStatus: 'Expiring', // ينتهي قريباً
    notes: 'قارئ سريع ويحتاج إلى مراجعة مخارج الحروف'
  },
  {
    id: 6,
    name: 'يوسف محمد السعيد',
    nameEn: 'Youssef Mohamed Al-Saeed',
    age: 11,
    email: 'youssef.mohamed@gmail.com',
    phone: '+971 521234567',
    country: 'الإمارات العربية المتحدة',
    level: 'متقدم',
    groupName: 'مجموعة القراءات ج',
    parentName: 'محمد السعيد',
    remainingSessions: 0,
    totalSessions: 12,
    subscriptionStatus: 'Expired', // منتهي
    notes: 'انتهت باقته الحالية ويحتاج للتجديد'
  }
];

export const studentsApi = {
  fetchStudents: async () => {
    try {
      const response = await api.get('/api/v1/admin/students');
      return response.data;
    } catch (error) {
      console.warn('API fetchStudents failed, using mock data:', error);
      await delay(400);
      return { success: true, data: mockStudents };
    }
  },

  createStudent: async (studentData) => {
    try {
      const response = await api.post('/api/v1/admin/students', studentData);
      return response.data;
    } catch (error) {
      console.warn('API createStudent failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { ...studentData, id: Date.now() } };
    }
  },

  updateStudent: async (id, studentData) => {
    try {
      const response = await api.put(`/api/v1/admin/students/${id}`, studentData);
      return response.data;
    } catch (error) {
      console.warn('API updateStudent failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { id, ...studentData } };
    }
  },

  deleteStudent: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/students/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteStudent failed, using mock integration:', error);
      await delay(400);
      return { success: true, message: 'Deleted successfully' };
    }
  }
};
