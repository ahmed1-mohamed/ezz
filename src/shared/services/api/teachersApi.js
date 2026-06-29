import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockTeachers = [
  {
    id: 1,
    name: 'أ. فاطمة الزهراء',
    nameEn: 'Fatima Alzahraa',
    subject: 'القرآن الكريم',
    rating: 4.9,
    groupsCount: 4,
    totalSessions: 120,
    totalEarnings: 3200,
    dueEarnings: 200,
    experienceYears: 8,
    country: 'مصر',
    qualification: 'تربية',
    qualificationEn: 'Education',
    aboutAr: 'معلم مختص في علوم القرآن و اللغه العربية',
    aboutEn: 'High Education Bacalorios',
    certificates: ['حافظ عن عاصم'],
    joinDate: '2023-01-15',
    status: 'Active',
    email: 'fatima@manaralezz.com',
    phone: '+20 100 234 5678'
  },
  {
    id: 2,
    name: 'أ. عائشة محمود',
    nameEn: 'Aisha Mahmoud',
    subject: 'التجويد والقراءات',
    rating: 4.8,
    groupsCount: 5,
    totalSessions: 150,
    totalEarnings: 4500,
    dueEarnings: 300,
    experienceYears: 10,
    country: 'مصر',
    qualification: 'دراسات إسلامية',
    qualificationEn: 'Islamic Studies',
    aboutAr: 'معلمة مجازة في القراءات العشر وتدريس التجويد للناطقين بغير العربية.',
    aboutEn: 'Licensed in the Ten Qira\'at, teaching Quran and Tajweed.',
    certificates: ['إجازة في القراءات العشر', 'شهادة حفظ القرآن'],
    joinDate: '2023-05-10',
    status: 'Active',
    email: 'aisha@manaralezz.com',
    phone: '+20 111 876 5432'
  },
  {
    id: 3,
    name: 'أ. محمد السعيد',
    nameEn: 'Mohamed Elsayed',
    subject: 'اللغة العربية',
    rating: 4.7,
    groupsCount: 3,
    totalSessions: 90,
    totalEarnings: 2800,
    dueEarnings: 150,
    experienceYears: 6,
    country: 'مصر',
    qualification: 'دار العلوم',
    qualificationEn: 'Dar Al Uloom',
    aboutAr: 'خبرة طويلة في تدريس النحو والصرف والبلاغة لجميع المراحل الدراسية.',
    aboutEn: 'Extensive experience in teaching Arabic grammar and syntax.',
    certificates: ['ليسانس دار العلوم', 'دبلوم تربوي'],
    joinDate: '2024-02-18',
    status: 'Active',
    email: 'mohamed@manaralezz.com',
    phone: '+20 122 345 6789'
  },
  {
    id: 4,
    name: 'أ. أحمد منصور',
    nameEn: 'Ahmed Mansour',
    subject: 'القرآن الكريم',
    rating: 5.0,
    groupsCount: 6,
    totalSessions: 180,
    totalEarnings: 5200,
    dueEarnings: 500,
    experienceYears: 15,
    country: 'مصر',
    qualification: 'أصول دين',
    qualificationEn: 'Fundamentals of Religion',
    aboutAr: 'مُحفظ معتمد متخصص في تدريس القرآن وتثبيت الحفظ للأطفال والكبار.',
    aboutEn: 'Certified Quran teacher specialized in memorization and review.',
    certificates: ['إجازة رواية حفص عن عاصم', 'سند متصل بالنبي ﷺ'],
    joinDate: '2022-11-01',
    status: 'Suspended',
    email: 'ahmed@manaralezz.com',
    phone: '+20 105 345 6789'
  }
];

export const teachersApi = {
  fetchTeachers: async () => {
    try {
      const response = await api.get('/api/v1/admin/teachers');
      return response.data;
    } catch (error) {
      console.warn('API fetchTeachers failed, using mock data:', error);
      await delay(400);
      return { success: true, data: mockTeachers };
    }
  },

  createTeacher: async (teacherData) => {
    try {
      const response = await api.post('/api/v1/admin/teachers', teacherData);
      return response.data;
    } catch (error) {
      console.warn('API createTeacher failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { ...teacherData, id: Date.now() } };
    }
  },

  updateTeacher: async (id, teacherData) => {
    try {
      const response = await api.put(`/api/v1/admin/teachers/${id}`, teacherData);
      return response.data;
    } catch (error) {
      console.warn('API updateTeacher failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { id, ...teacherData } };
    }
  },

  patchTeacher: async (id, teacherData) => {
    try {
      const response = await api.patch(`/api/v1/teachers/${id}`, teacherData);
      return response.data;
    } catch (error) {
      console.error(`Error patching teacher with id ${id}:`, error);
      throw error;
    }
  },

  deleteTeacher: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/teachers/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteTeacher failed, using mock integration:', error);
      await delay(400);
      return { success: true, message: 'Deleted successfully' };
    }
  }
};
