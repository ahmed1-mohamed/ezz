import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mockPackages = [
  {
    id: 1,
    name: 'الباقة الأساسية',
    name_en: 'Basic Package',
    description: 'مناسبة للمبتدئين',
    description_en: 'Suitable for beginners',
    price: 450,
    currency: 'SAR',
    sessions_per_month: 12,
    sessions_language: 'عربي',
    color: '#6b7280',
    features: ['12 حصة شهرياً', 'مواد تعليمية', 'تقارير أسبوعية'],
    features_en: ['12 sessions/month', 'Educational materials', 'Weekly reports'],
    is_active: true,
  },
  {
    id: 2,
    name: 'الباقة الأساسية',
    name_en: 'Basic Package',
    description: 'مناسبة للمبتدئين',
    description_en: 'Suitable for beginners',
    price: 850,
    currency: 'SAR',
    sessions_per_month: 12,
    sessions_language: 'عربي',
    color: '#d97706',
    features: ['12 حصة شهرياً', 'مواد تعليمية', 'تقارير أسبوعية'],
    features_en: ['12 sessions/month', 'Educational materials', 'Weekly reports'],
    is_active: true,
  },
  {
    id: 3,
    name: 'الباقة المتقدمة',
    name_en: 'Advanced Package',
    description: 'مناسبة للمستويات المتقدمة',
    description_en: 'Suitable for advanced levels',
    price: 1200,
    currency: 'SAR',
    sessions_per_month: 20,
    sessions_language: 'عربي / إنجليزي',
    color: '#0f7a6c',
    features: ['20 حصة شهرياً', 'مواد تعليمية متقدمة', 'تقارير أسبوعية', 'جلسات مراجعة'],
    features_en: ['20 sessions/month', 'Advanced materials', 'Weekly reports', 'Review sessions'],
    is_active: true,
  },
];

let mockFaqs = [
  {
    id: 1,
    question: 'هل يمكن التجديد قبل الانتهاء؟',
    question_en: 'Can I renew before the end?',
    answer: 'نعم و سيتم إضافة الحصص الجديدة إلى حصصك الحالية',
    answer_en: 'Yes, new sessions will be added to your current sessions',
  },
  {
    id: 2,
    question: 'ما هي طرق الدفع المتاحة؟',
    question_en: 'What payment methods are available?',
    answer: 'نقبل الدفع عبر بطاقات الائتمان، والتحويل البنكي، وخدمة PayPal.',
    answer_en: 'We accept payment via credit cards, bank transfer, and PayPal.',
  },
  {
    id: 3,
    question: 'هل يمكن تغيير الباقة بعد الاشتراك؟',
    question_en: 'Can I change my package after subscribing?',
    answer: 'نعم، يمكنك الترقية أو التخفيض في أي وقت، وسيتم احتساب الفارق.',
    answer_en: 'Yes, you can upgrade or downgrade anytime, and the difference will be calculated.',
  },
  {
    id: 4,
    question: 'هل هناك فترة تجريبية مجانية؟',
    question_en: 'Is there a free trial period?',
    answer: 'نعم، نوفر حصة تجريبية مجانية واحدة لكل طالب جديد.',
    answer_en: 'Yes, we provide one free trial session for each new student.',
  },
];

export const adminPackagesApi = {
  fetchPackages: async () => {
    try {
      const response = await api.get('/api/v1/admin/packages');
      return response.data;
    } catch (error) {
      console.warn('API fetchPackages failed, using mock data:', error);
      await delay(400);
      return { success: true, data: [...mockPackages] };
    }
  },

  createPackage: async (packageData) => {
    try {
      const response = await api.post('/api/v1/admin/packages', packageData);
      return response.data;
    } catch (error) {
      console.warn('API createPackage failed, using mock:', error);
      await delay(400);
      const newPackage = { id: Date.now(), ...packageData };
      mockPackages = [...mockPackages, newPackage];
      return { success: true, data: newPackage };
    }
  },

  updatePackage: async (id, packageData) => {
    try {
      const response = await api.put(`/api/v1/admin/packages/${id}`, packageData);
      return response.data;
    } catch (error) {
      console.warn('API updatePackage failed, using mock:', error);
      await delay(400);
      mockPackages = mockPackages.map((p) => (p.id === id ? { ...p, ...packageData } : p));
      return { success: true, data: { id, ...packageData } };
    }
  },

  deletePackage: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/packages/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deletePackage failed, using mock:', error);
      await delay(400);
      mockPackages = mockPackages.filter((p) => p.id !== id);
      return { success: true, message: 'Package deleted' };
    }
  },

  fetchFaqs: async () => {
    try {
      const response = await api.get('/api/v1/admin/faqs');
      return response.data;
    } catch (error) {
      console.warn('API fetchFaqs failed, using mock data:', error);
      await delay(400);
      return { success: true, data: [...mockFaqs] };
    }
  },

  createFaq: async (faqData) => {
    try {
      const response = await api.post('/api/v1/admin/faqs', faqData);
      return response.data;
    } catch (error) {
      console.warn('API createFaq failed, using mock:', error);
      await delay(400);
      const newFaq = { id: Date.now(), ...faqData };
      mockFaqs = [...mockFaqs, newFaq];
      return { success: true, data: newFaq };
    }
  },

  updateFaq: async (id, faqData) => {
    try {
      const response = await api.put(`/api/v1/admin/faqs/${id}`, faqData);
      return response.data;
    } catch (error) {
      console.warn('API updateFaq failed, using mock:', error);
      await delay(400);
      mockFaqs = mockFaqs.map((f) => (f.id === id ? { ...f, ...faqData } : f));
      return { success: true, data: { id, ...faqData } };
    }
  },

  deleteFaq: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/faqs/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteFaq failed, using mock:', error);
      await delay(400);
      mockFaqs = mockFaqs.filter((f) => f.id !== id);
      return { success: true, message: 'FAQ deleted' };
    }
  },
};
