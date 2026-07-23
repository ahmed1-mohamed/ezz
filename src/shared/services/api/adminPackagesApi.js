import api from './axiosConfig';

const buildImageUrl = (url) => {
  if (!url || typeof url !== 'string') return null;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

const mapPackageData = (item) => ({
  id: item.id || item._id,
  name: typeof item.name === 'object' ? (item.name.ar || item.name.en || '') : (item.nameAr || item.titleAr || item.name || ''),
  name_en: typeof item.name === 'object' ? (item.name.en || item.name.ar || '') : (item.nameEn || item.titleEn || item.name_en || ''),
  image: buildImageUrl(item.image || item.imageUrl || item.photo || item.photoUrl || (typeof item.icon === 'string' && (item.icon.includes('/') || item.icon.includes('.')) ? item.icon : null)),
  description: typeof item.description === 'object' ? (item.description.ar || item.description.en || '') : (item.descriptionAr || item.description || ''),
  description_en: typeof item.description === 'object' ? (item.description.en || item.description.ar || '') : (item.descriptionEn || item.description_en || ''),
  subtitle: typeof item.subtitle === 'object' ? (item.subtitle.ar || item.subtitle.en || '') : (item.subtitleAr || item.subtitle || ''),
  subtitle_en: typeof item.subtitle === 'object' ? (item.subtitle.en || item.subtitle.ar || '') : (item.subtitleEn || item.subtitle_en || ''),
  price: item.price,
  currency: item.currency || 'SAR',
  sessions_per_month: item.sessionsCount || item.sessions_per_month,
  sessions_language: typeof item.language === 'object' ? item.language?.id || item.language?._id : item.language,
  color: item.icon === 'star' ? '#d97706' : '#0f7a6c',
  features: Array.isArray(item.features) ? item.features : (item.features?.ar || []),
  features_en: Array.isArray(item.features_en) ? item.features_en : (item.features?.en || []),
  is_active: item.is_active !== undefined ? item.is_active : true
});

export const adminPackagesApi = {
  fetchPackagesAndFaqs: async () => {
    const response = await api.get('/api/v1/packages-faqs/private/localized/all');

    let fetchedPackages = [];
    if (response.data?.data?.packages?.data) {
      fetchedPackages = response.data.data.packages.data.map(mapPackageData);
    }

    let fetchedFaqs = [];
    if (response.data?.data?.faqs?.data) {
      fetchedFaqs = response.data.data.faqs.data.map((item) => ({
        id: item.id || item._id,
        question: typeof item.question === 'object' ? (item.question.ar || item.question.en || '') : (item.questionAr || item.question || ''),
        question_en: typeof item.question === 'object' ? (item.question.en || item.question.ar || '') : (item.questionEn || item.question_en || ''),
        answer: typeof item.answer === 'object' ? (item.answer.ar || item.answer.en || '') : (item.answerAr || item.answer || ''),
        answer_en: typeof item.answer === 'object' ? (item.answer.en || item.answer.ar || '') : (item.answerEn || item.answer_en || ''),
      }));
    }

    return { success: true, packages: fetchedPackages, faqs: fetchedFaqs };
  },

  fetchPackages: async () => {
    const res = await adminPackagesApi.fetchPackagesAndFaqs();
    return { success: true, data: res.packages };
  },

  fetchExplanationLanguages: async () => {
    try {
      const response = await api.get('/api/v1/explanation-languages/private/localized/all');
      return { success: true, data: response.data?.data || response.data || [] };
    } catch (error) {
      console.error(error);
      return { success: false, data: [] };
    }
  },

  createPackage: async (packageData) => {
    try {
      const arTitle = (typeof packageData.name === 'object' ? packageData.name?.ar : packageData.name) || packageData.titleAr || '';
      const enTitle = (typeof packageData.name === 'object' ? packageData.name?.en : packageData.name_en) || packageData.nameEn || packageData.titleEn || arTitle;

      const arDesc = (typeof packageData.description === 'object' ? packageData.description?.ar : packageData.description) || packageData.descriptionAr || '';
      const enDesc = (typeof packageData.description === 'object' ? packageData.description?.en : packageData.description_en) || packageData.descriptionEn || arDesc;

      const arSub = (typeof packageData.subtitle === 'object' ? packageData.subtitle?.ar : packageData.subtitle) || packageData.subtitleAr || '';
      const enSub = (typeof packageData.subtitle === 'object' ? packageData.subtitle?.en : packageData.subtitle_en) || packageData.subtitleEn || arSub;

      const arFeatures = Array.isArray(packageData.features) ? packageData.features : (packageData.features?.ar || []);
      const enFeatures = Array.isArray(packageData.features_en) ? packageData.features_en : (Array.isArray(packageData.featuresEn) ? packageData.featuresEn : (packageData.features?.en || arFeatures));

      const payload = {
        name: { ar: arTitle, en: enTitle },
        title: { ar: arTitle, en: enTitle },
        description: { ar: arDesc, en: enDesc },
        subtitle: { ar: arSub, en: enSub },
        icon: 'star',
        price: Number(packageData.price),
        sessionsCount: Number(packageData.sessions_per_month),
        language: packageData.sessions_language,
        features: {
          ar: arFeatures,
          en: enFeatures
        }
      };
      
      const response = await api.post('/api/v1/packages/private', payload);
      const item = response.data?.data || response.data;
      return { success: true, data: mapPackageData(item) };
    } catch (error) {
      console.error('API createPackage failed:', error);
      const errMsg = error.response?.data?.message || error.message;
      return { success: false, error: errMsg };
    }
  },

  updatePackage: async (id, packageData) => {
    try {
      const arTitle = (typeof packageData.name === 'object' ? packageData.name?.ar : packageData.name) || packageData.titleAr || '';
      const enTitle = (typeof packageData.name === 'object' ? packageData.name?.en : packageData.name_en) || packageData.nameEn || packageData.titleEn || arTitle;

      const arDesc = (typeof packageData.description === 'object' ? packageData.description?.ar : packageData.description) || packageData.descriptionAr || '';
      const enDesc = (typeof packageData.description === 'object' ? packageData.description?.en : packageData.description_en) || packageData.descriptionEn || arDesc;

      const arSub = (typeof packageData.subtitle === 'object' ? packageData.subtitle?.ar : packageData.subtitle) || packageData.subtitleAr || '';
      const enSub = (typeof packageData.subtitle === 'object' ? packageData.subtitle?.en : packageData.subtitle_en) || packageData.subtitleEn || arSub;

      const arFeatures = Array.isArray(packageData.features) ? packageData.features : (packageData.features?.ar || []);
      const enFeatures = Array.isArray(packageData.features_en) ? packageData.features_en : (Array.isArray(packageData.featuresEn) ? packageData.featuresEn : (packageData.features?.en || arFeatures));

      const payload = {
        name: { ar: arTitle, en: enTitle },
        title: { ar: arTitle, en: enTitle },
        description: { ar: arDesc, en: enDesc },
        subtitle: { ar: arSub, en: enSub },
        icon: 'star',
        price: Number(packageData.price),
        sessionsCount: Number(packageData.sessions_per_month),
        language: packageData.sessions_language,
        features: {
          ar: arFeatures,
          en: enFeatures
        }
      };

      const response = await api.patch(`/api/v1/packages/private/${id}`, payload);
      const item = response.data?.data || response.data;
      return { success: true, data: mapPackageData(item) };
    } catch (error) {
      console.error('API updatePackage failed:', error);
      const errMsg = error.response?.data?.message || error.message;
      return { success: false, error: errMsg };
    }
  },

  deletePackage: async (id) => {
    try {
      await api.delete(`/api/v1/packages/private/${id}`);
      return { success: true };
    } catch (error) {
      console.error(error);
      const errMsg = error.response?.data?.message || error.message;
      return { success: false, error: errMsg };
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
      const qAr = (typeof faqData.question === 'object' ? faqData.question?.ar : faqData.question) || faqData.questionAr || '';
      const qEn = (typeof faqData.question === 'object' ? faqData.question?.en : faqData.question_en) || faqData.questionEn || qAr;

      const aAr = (typeof faqData.answer === 'object' ? faqData.answer?.ar : faqData.answer) || faqData.answerAr || '';
      const aEn = (typeof faqData.answer === 'object' ? faqData.answer?.en : faqData.answer_en) || faqData.answerEn || aAr;

      const payload = {
        question: { ar: qAr, en: qEn },
        answer: { ar: aAr, en: aEn }
      };
      const response = await api.post('/api/v1/faqs/private', payload);
      const item = response.data?.data || response.data;
      const mapped = {
        id: item.id || item._id,
        question: typeof item.question === 'object' ? (item.question.ar || item.question.en || '') : (item.questionAr || item.question || ''),
        question_en: typeof item.question === 'object' ? (item.question.en || item.question.ar || '') : (item.questionEn || item.question_en || ''),
        answer: typeof item.answer === 'object' ? (item.answer.ar || item.answer.en || '') : (item.answerAr || item.answer || ''),
        answer_en: typeof item.answer === 'object' ? (item.answer.en || item.answer.ar || '') : (item.answerEn || item.answer_en || ''),
      };
      return { success: true, data: mapped };
    } catch (error) {
      console.error('API createFaq failed:', error);
      const errMsg = error.response?.data?.message || error.message;
      return { success: false, error: errMsg };
    }
  },

  updateFaq: async (id, faqData) => {
    try {
      const qAr = (typeof faqData.question === 'object' ? faqData.question?.ar : faqData.question) || faqData.questionAr || '';
      const qEn = (typeof faqData.question === 'object' ? faqData.question?.en : faqData.question_en) || faqData.questionEn || qAr;

      const aAr = (typeof faqData.answer === 'object' ? faqData.answer?.ar : faqData.answer) || faqData.answerAr || '';
      const aEn = (typeof faqData.answer === 'object' ? faqData.answer?.en : faqData.answer_en) || faqData.answerEn || aAr;

      const payload = {
        question: { ar: qAr, en: qEn },
        answer: { ar: aAr, en: aEn }
      };
      const response = await api.patch(`/api/v1/faqs/private/${id}`, payload);
      const item = response.data?.data || response.data;
      const mapped = {
        id: item.id || item._id,
        question: typeof item.question === 'object' ? (item.question.ar || item.question.en || '') : (item.questionAr || item.question || ''),
        question_en: typeof item.question === 'object' ? (item.question.en || item.question.ar || '') : (item.questionEn || item.question_en || ''),
        answer: typeof item.answer === 'object' ? (item.answer.ar || item.answer.en || '') : (item.answerAr || item.answer || ''),
        answer_en: typeof item.answer === 'object' ? (item.answer.en || item.answer.ar || '') : (item.answerEn || item.answer_en || ''),
      };
      return { success: true, data: mapped };
    } catch (error) {
      console.error('API updateFaq failed:', error);
      const errMsg = error.response?.data?.message || error.message;
      return { success: false, error: errMsg };
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
  },

  fetchFaqById: async (id) => {
    try {
      const response = await api.get(`/api/v1/faqs/private/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error(`API fetchFaqById failed for ${id}:`, error);
      throw error;
    }
  },

  fetchPackageById: async (id) => {
    try {
      const response = await api.get(`/api/v1/packages/private/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error(`API fetchPackageById failed for ${id}:`, error);
      throw error;
    }
  }
};