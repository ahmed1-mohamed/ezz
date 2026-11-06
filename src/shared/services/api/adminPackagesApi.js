import api from './axiosConfig';

const buildImageUrl = (url) => {
  if (!url || typeof url !== 'string') return null;
  if (url === 'star' || url.trim().length < 4) return null;
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
  image: buildImageUrl(item.image || item.imageUrl || item.photo || item.photoUrl || item.iconPath || item.iconUrl || item.icon),
  description: typeof item.description === 'object' ? (item.description.ar || item.description.en || '') : (item.descriptionAr || item.description || ''),
  description_en: typeof item.description === 'object' ? (item.description.en || item.description.ar || '') : (item.descriptionEn || item.description_en || ''),
  subtitle: typeof item.subtitle === 'object' ? (item.subtitle.ar || item.subtitle.en || '') : (item.subtitleAr || item.subtitle || ''),
  subtitle_en: typeof item.subtitle === 'object' ? (item.subtitle.en || item.subtitle.ar || '') : (item.subtitleEn || item.subtitle_en || ''),
  price: item.price,
  currency: item.currency || '$',
  sessions_per_month: item.sessionsCount || item.sessions_per_month,
  sessionDuration: item.sessionDuration || item.duration || item.durationMinutes || 60,
  sessions_language: typeof item.language === 'object' ? item.language?.id || item.language?._id : item.language,
  country: typeof item.country === 'object' && item.country !== null
    ? (item.country.id || item.country._id || item.country.name || item.country.code || '')
    : (item.country || item.countryId || ''),
  countryRaw: item.country || null,
  color: item.icon === 'star' ? '#d97706' : '#0f7a6c',
  features: Array.isArray(item.features) ? item.features : (item.features?.ar || []),
  features_en: Array.isArray(item.features_en) ? item.features_en : (item.features?.en || []),
  is_active: item.is_active !== undefined ? item.is_active : true,
  type: item.type === 'family' ? 'family' : 'individual',
  typeText: item.typeText || '',
  maxMembers: item.maxMembers ?? null,
  familyTiers: Array.isArray(item.familyTiers) ? item.familyTiers : [],
  priceAfterDiscount: item.priceAfterDiscount ?? null,
  discountPercentage: item.discountPercentage ?? null,
});

const buildPackagePayload = (data) => {
  const features = {
    ar: (data.features || []).map((f) => String(f || '').trim()).filter(Boolean),
    en: (data.features_en || []).map((f) => String(f || '').trim()).filter(Boolean),
  };
  const isFamily = data.type === 'family';
  const discount = data.priceAfterDiscount === '' || data.priceAfterDiscount === null || data.priceAfterDiscount === undefined
    ? null
    : Number(data.priceAfterDiscount);
  return {
    name: { ar: String(data.name || '').trim(), en: String(data.name_en || data.name || '').trim() },
    type: isFamily ? 'family' : 'individual',
    price: Number(data.price),
    priceAfterDiscount: discount,
    sessionsCount: Number(data.sessions_per_month),
    sessionDuration: Number(data.sessionDuration) || 60,
    language: data.sessions_language,
    country: data.country,
    features,
    ...(isFamily
      ? {
          maxMembers: Number(data.maxMembers),
          familyDiscounts: (data.familyTiers || []).map((tier) => ({
            membersCount: Number(tier.membersCount),
            pricePerPerson: Number(tier.pricePerPerson),
          })),
        }
      : {}),
  };
};

const uploadPackageIcon = async (id, file) => {
  const fd = new FormData();
  fd.append('icon', file);
  const response = await api.patch(`/api/v1/packages/private/${id}`, fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data?.data || response.data;
};

const toPackageError = (error) => error.response?.data?.message || error.message;

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
      const payload = buildPackagePayload(packageData);
      if (payload.priceAfterDiscount === null) delete payload.priceAfterDiscount;
      const response = await api.post('/api/v1/packages/private', payload);
      let item = response.data?.data || response.data;
      if (packageData.imageFile instanceof File && item?.id) {
        item = await uploadPackageIcon(item.id, packageData.imageFile);
      }
      return { success: true, data: mapPackageData(item) };
    } catch (error) {
      console.error('API createPackage failed:', error);
      return { success: false, error: toPackageError(error) };
    }
  },

  updatePackage: async (id, packageData) => {
    try {
      const response = await api.patch(`/api/v1/packages/private/${id}`, buildPackagePayload(packageData));
      let item = response.data?.data || response.data;
      if (packageData.imageFile instanceof File) {
        item = await uploadPackageIcon(id, packageData.imageFile);
      }
      return { success: true, data: mapPackageData(item) };
    } catch (error) {
      console.error('API updatePackage failed:', error);
      return { success: false, error: toPackageError(error) };
    }
  },

  removePackageDiscount: async (id) => {
    const response = await api.patch(`/api/v1/packages/private/${id}`, { priceAfterDiscount: null });
    return mapPackageData(response.data?.data || response.data);
  },

  fetchCountries: async () => {
    try {
      const response = await api.get('/api/v1/countries', { skipLang: false });
      return { success: true, data: response.data?.data || response.data || [] };
    } catch {
      try {
        const fallback = await api.get('/api/v1/landing/countries');
        return { success: true, data: fallback.data?.data || fallback.data || [] };
      } catch {
        return { success: false, data: [] };
      }
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
      const response = await api.get(`/api/v1/faqs/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`API fetchFaqById failed for ${id}:`, error);
      throw error;
    }
  },

  fetchPackageById: async (id) => {
    try {
      const response = await api.get(`/api/v1/packages/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`API fetchPackageById failed for ${id}:`, error);
      throw error;
    }
  },

  fetchSubscriptions: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/packages-faqs/private/subscriptions', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchSubscriptions failed:', error);
      throw error;
    }
  },

  fetchSubscriptionsStats: async () => {
    try {
      const response = await api.get('/api/v1/packages-faqs/private/subscriptions/statistics');
      return response.data;
    } catch (error) {
      console.error('API fetchSubscriptionsStats failed:', error);
      throw error;
    }
  },

  fetchSubscriptionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/packages-faqs/private/subscriptions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`API fetchSubscriptionById(${id}) failed:`, error);
      throw error;
    }
  }
};