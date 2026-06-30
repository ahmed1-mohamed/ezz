import api from './axiosConfig';

const mapLanguageToCode = (lang) => {
  if (lang === 'عربي') return 'ar';
  if (lang === 'إنجليزي') return 'en';
  if (lang === 'عربي / إنجليزي') return 'both';
  return lang || 'ar';
};

const mapCodeToLanguage = (code) => {
  if (code === 'ar') return 'عربي';
  if (code === 'en') return 'إنجليزي';
  if (code === 'both') return 'عربي / إنجليزي';
  return code || 'عربي';
};

export const adminPackagesApi = {
  fetchPackagesAndFaqs: async () => {
    const response = await api.get('/api/v1/packages-faqs/private/localized/all');

    let fetchedPackages = [];
    if (response.data?.data?.packages?.data) {
      fetchedPackages = response.data.data.packages.data.map((item) => ({
        id: item.id,
        name: typeof item.name === 'object' ? (item.name.ar || item.name.en) : item.name,
        name_en: typeof item.name === 'object' ? (item.name.en || item.name.ar) : item.name,
        description: '',
        price: item.price,
        currency: 'SAR',
        sessions_per_month: item.sessionsCount,
        sessions_language: mapCodeToLanguage(item.language),
        color: item.icon === 'star' ? '#d97706' : '#0f7a6c',
        features: Array.isArray(item.features) ? item.features : (item.features?.ar || []),
        features_en: Array.isArray(item.features) ? item.features : (item.features?.en || []),
        is_active: true
      }));
    }

    let fetchedFaqs = [];
    if (response.data?.data?.faqs?.data) {
      fetchedFaqs = response.data.data.faqs.data.map((item) => ({
        id: item.id,
        question: typeof item.question === 'object' ? (item.question.ar || item.question.en) : item.question,
        question_en: typeof item.question === 'object' ? (item.question.en || item.question.ar) : item.question,
        answer: typeof item.answer === 'object' ? (item.answer.ar || item.answer.en) : item.answer,
        answer_en: typeof item.answer === 'object' ? (item.answer.en || item.answer.ar) : item.answer,
      }));
    }

    return { success: true, packages: fetchedPackages, faqs: fetchedFaqs };
  },

  fetchPackages: async () => {
    const res = await adminPackagesApi.fetchPackagesAndFaqs();
    return { success: true, data: res.packages };
  },

  createPackage: async (packageData) => {
    try {
      const payload = {
        name: {
          ar: packageData.name || '',
          en: packageData.name_en || packageData.name || ''
        },
        icon: 'star',
        price: Number(packageData.price),
        sessionsCount: Number(packageData.sessions_per_month),
        language: mapLanguageToCode(packageData.sessions_language),
        features: {
          ar: packageData.features || [],
          en: packageData.features_en || []
        }
      };
      
      const response = await api.post('/api/v1/packages/private', payload);
      return { success: true, data: response.data?.data || response.data };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },

  updatePackage: async (id, packageData) => {
    try {
      const payload = {
        name: {
          ar: packageData.name || '',
          en: packageData.name_en || packageData.name || ''
        },
        icon: 'star',
        price: Number(packageData.price),
        sessionsCount: Number(packageData.sessions_per_month),
        language: mapLanguageToCode(packageData.sessions_language),
        features: {
          ar: packageData.features || [],
          en: packageData.features_en || []
        }
      };

      const response = await api.patch(`/api/v1/packages/private/${id}`, payload);
      return { success: true, data: response.data?.data || response.data };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },

  deletePackage: async (id) => {
    try {
      await api.delete(`/api/v1/packages/private/${id}`);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },

  fetchFaqs: async () => {
    try {
      const res = await adminPackagesApi.fetchPackagesAndFaqs();
      return { success: true, data: res.faqs };
    } catch (error) {
      console.error(error);
      return { success: false, data: [] };
    }
  },

  createFaq: async (faqData) => {
    try {
      const payload = {
        question: {
          ar: faqData.question || '',
          en: faqData.question_en || faqData.question || ''
        },
        answer: {
          ar: faqData.answer || '',
          en: faqData.answer_en || faqData.answer || ''
        }
      };
      const response = await api.post('/api/v1/faqs/private', payload);
      const item = response.data?.data || response.data;
      const mapped = {
        id: item.id,
        question: typeof item.question === 'object' ? (item.question.ar || item.question.en) : item.question,
        question_en: typeof item.question === 'object' ? (item.question.en || item.question.ar) : item.question,
        answer: typeof item.answer === 'object' ? (item.answer.ar || item.answer.en) : item.answer,
        answer_en: typeof item.answer === 'object' ? (item.answer.en || item.answer.ar) : item.answer,
      };
      return { success: true, data: mapped };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },

  updateFaq: async (id, faqData) => {
    try {
      const payload = {
        question: {
          ar: faqData.question || '',
          en: faqData.question_en || faqData.question || ''
        },
        answer: {
          ar: faqData.answer || '',
          en: faqData.answer_en || faqData.answer || ''
        }
      };
      const response = await api.patch(`/api/v1/faqs/private/${id}`, payload);
      const item = response.data?.data || response.data;
      const mapped = {
        id: item.id,
        question: typeof item.question === 'object' ? (item.question.ar || item.question.en) : item.question,
        question_en: typeof item.question === 'object' ? (item.question.en || item.question.ar) : item.question,
        answer: typeof item.answer === 'object' ? (item.answer.ar || item.answer.en) : item.answer,
        answer_en: typeof item.answer === 'object' ? (item.answer.en || item.answer.ar) : item.answer,
      };
      return { success: true, data: mapped };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  },

  deleteFaq: async (id) => {
    try {
      const response = await api.delete(`/api/v1/faqs/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  }
};