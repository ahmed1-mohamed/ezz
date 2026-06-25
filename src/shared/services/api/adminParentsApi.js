import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockParents = [
  {
    id: 1,
    name: 'خالد المنصور',
    nameEn: 'Khaled Al-Mansour',
    email: 'khalid@email.com',
    phone: '+966 501234567',
    phonePrefix: '+966',
    country: 'المملكة العربية السعودية',
    birthDate: '1985-03-15',
    status: 'Active',
    gender: 'male',
    averageRating: 4.8,
    childrenCount: 3,
    children: [
      {
        id: 'c1',
        name: 'علي خالد',
        subject: 'اللغة العربية',
        joinDate: '2025-02-20',
        usedSessions: 4,
        totalSessions: 12,
      },
      {
        id: 'c2',
        name: 'سعاد عمر',
        subject: 'القرآن',
        joinDate: '2025-03-05',
        usedSessions: 10,
        totalSessions: 8,
      },
      {
        id: 'c3',
        name: 'يوسف منصور',
        subject: 'العربية والقرآن',
        joinDate: '2025-04-10',
        usedSessions: 3,
        totalSessions: 5,
      },
    ],
  },
  {
    id: 2,
    name: 'فهد السلمي',
    nameEn: 'Fahad Al-Salmi',
    email: 'fahad@email.com',
    phone: '+966 512345678',
    phonePrefix: '+966',
    country: 'المملكة العربية السعودية',
    birthDate: '1982-07-22',
    status: 'Expiring',
    gender: 'male',
    averageRating: 4.5,
    childrenCount: 1,
    children: [
      {
        id: 'c4',
        name: 'محمد فهد',
        subject: 'القرآن الكريم',
        joinDate: '2025-01-10',
        usedSessions: 9,
        totalSessions: 10,
      },
    ],
  },
  {
    id: 3,
    name: 'بندر العتيبي',
    nameEn: 'Bandar Al-Otaibi',
    email: 'bandar@email.com',
    phone: '+966 523456789',
    phonePrefix: '+966',
    country: 'المملكة العربية السعودية',
    birthDate: '1990-11-08',
    status: 'Expired',
    gender: 'male',
    averageRating: 3.9,
    childrenCount: 1,
    children: [
      {
        id: 'c5',
        name: 'نورة بندر',
        subject: 'التجويد',
        joinDate: '2024-12-01',
        usedSessions: 12,
        totalSessions: 12,
      },
    ],
  },
  {
    id: 4,
    name: 'منى الكعبي',
    nameEn: 'Mona Al-Kaabi',
    email: 'mona@email.com',
    phone: '+971 521234567',
    phonePrefix: '+971',
    country: 'الإمارات العربية المتحدة',
    birthDate: '1988-04-30',
    status: 'Active',
    gender: 'female',
    averageRating: 4.7,
    childrenCount: 2,
    children: [
      {
        id: 'c6',
        name: 'سارة منى',
        subject: 'القرآن الكريم',
        joinDate: '2025-01-15',
        usedSessions: 6,
        totalSessions: 12,
      },
      {
        id: 'c7',
        name: 'عمر منى',
        subject: 'اللغة العربية',
        joinDate: '2025-02-01',
        usedSessions: 3,
        totalSessions: 8,
      },
    ],
  },
  {
    id: 5,
    name: 'سارة العلي',
    nameEn: 'Sara Al-Ali',
    email: 'sara@email.com',
    phone: '+965 61234567',
    phonePrefix: '+965',
    country: 'الكويت',
    birthDate: '1992-09-18',
    status: 'Active',
    gender: 'female',
    averageRating: 4.9,
    childrenCount: 1,
    children: [
      {
        id: 'c8',
        name: 'ليلى أحمد',
        subject: 'التجويد والقرآن',
        joinDate: '2025-03-20',
        usedSessions: 2,
        totalSessions: 12,
      },
    ],
  },
  {
    id: 6,
    name: 'أحمد الزهراني',
    nameEn: 'Ahmed Al-Zahrani',
    email: 'ahmed.z@email.com',
    phone: '+966 534567890',
    phonePrefix: '+966',
    country: 'المملكة العربية السعودية',
    birthDate: '1979-12-25',
    status: 'Expired',
    gender: 'male',
    averageRating: 4.2,
    childrenCount: 2,
    children: [
      {
        id: 'c9',
        name: 'عبدالله أحمد',
        subject: 'القرآن الكريم',
        joinDate: '2024-10-05',
        usedSessions: 12,
        totalSessions: 12,
      },
      {
        id: 'c10',
        name: 'ريم أحمد',
        subject: 'اللغة العربية',
        joinDate: '2024-11-10',
        usedSessions: 12,
        totalSessions: 12,
      },
    ],
  },
];

export const adminParentsApi = {
  fetchParents: async () => {
    try {
      const response = await api.get('/api/v1/admin/parents');
      return response.data;
    } catch (error) {
      console.warn('API fetchParents failed, using mock data:', error);
      await delay(400);
      return { success: true, data: mockParents };
    }
  },

  fetchParentById: async (id) => {
    try {
      const response = await api.get(`/api/v1/admin/parents/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API fetchParentById failed, using mock data:', error);
      await delay(300);
      const parent = mockParents.find((p) => p.id === id);
      return parent
        ? { success: true, data: parent }
        : { success: false, message: 'Parent not found' };
    }
  },

  createParent: async (parentData) => {
    try {
      const response = await api.post('/api/v1/admin/parents', parentData);
      return response.data;
    } catch (error) {
      console.warn('API createParent failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { ...parentData, id: Date.now() } };
    }
  },

  updateParent: async (id, parentData) => {
    try {
      const response = await api.put(`/api/v1/admin/parents/${id}`, parentData);
      return response.data;
    } catch (error) {
      console.warn('API updateParent failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { id, ...parentData } };
    }
  },

  deleteParent: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/parents/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteParent failed, using mock integration:', error);
      await delay(400);
      return { success: true, message: 'Deleted successfully' };
    }
  },

  sendMessage: async (parentId, message) => {
    try {
      const response = await api.post(`/api/v1/admin/parents/${parentId}/message`, { message });
      return response.data;
    } catch (error) {
      console.warn('API sendMessage failed, using mock:', error);
      await delay(600);
      return { success: true, message: 'Message sent successfully' };
    }
  },

  suspendParent: async (parentId) => {
    try {
      const response = await api.post(`/api/v1/admin/parents/${parentId}/suspend`);
      return response.data;
    } catch (error) {
      console.warn('API suspendParent failed, using mock:', error);
      await delay(400);
      return { success: true, message: 'Account suspended' };
    }
  },
};
