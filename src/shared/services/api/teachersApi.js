import api from './axiosConfig';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

export const mapTeacherData = (item) => {
  if (!item) return null;

  const id = item.teacher_id || item._id || item.id || item.user_id;
  const name = typeof item.name === 'object' && item.name !== null
    ? (item.name.ar || item.name.en || '')
    : (item.name || item.parentName || 'بدون اسم');
  const nameEn = typeof item.name === 'object' && item.name !== null
    ? (item.name.en || item.name.ar || '')
    : (item.nameEn || item.name || '');

  const totalLessons = Number(item.totalLessons ?? item.totalSessions ?? 0);
  const totalGroups = Number(item.totalGroups ?? item.groupsCount ?? 0);
  const totalStudents = Number(item.totalStudents ?? item.studentsCount ?? 0);
  const totalEarnings = Number(item.totalEarnings ?? 0);
  const dueEarnings = Number(item.dueEarnings ?? 0);
  const profitPercentage = Number(item.profitPercentage ?? 0);
  const rating = Number(item.rating ?? 0);
  const yearsOfExperience = Number(item.yearsOfExperience ?? item.experienceYears ?? 0);
  const degree = item.degree || item.qualification || item.qualificationAr || '';
  const bio = item.bio || item.aboutAr || item.aboutEn || item.review || '';
  const achievements = Array.isArray(item.achievements) ? item.achievements : [];
  const certificates = Array.isArray(item.certificates) ? item.certificates : [];
  const specializations = Array.isArray(item.specializations) ? item.specializations : [];
  const active = item.active !== false;

  const subject = specializations.length > 0
    ? specializations.map(s => (typeof s === 'object' ? s.name : s)).filter(Boolean).join(' · ')
    : (item.subject || (typeof degree === 'string' ? degree : '') || 'معلم');

  const degreeStr = typeof degree === 'object' && degree !== null ? (degree.ar || degree.en || '') : String(degree || '');
  const title = degreeStr.trim() || 'معلم معتمد';
  const experience = `${yearsOfExperience} سنوات خبرة`;
  const rawImage = item.image || item.imageUrl || item.avatar || '';
  const image = rawImage ? getImageUrl(rawImage) : '';

  return {
    ...item,
    id,
    teacher_id: item.teacher_id || id,
    user_id: item.user_id || item.userId || '',
    name,
    nameEn,
    subject,
    email: item.email || '',
    phone: item.phone || '',
    country: item.country || '🇪🇬 Egypt',
    active,
    status: active ? 'Active' : 'Suspended',
    profitPercentage,
    rating,
    totalEarnings,
    dueEarnings,
    totalLessons,
    totalSessions: totalLessons,
    totalGroups,
    groupsCount: totalGroups,
    totalStudents,
    studentsCount: totalStudents,
    bio,
    aboutAr: bio,
    aboutEn: item.aboutEn || bio,
    yearsOfExperience,
    experienceYears: yearsOfExperience,
    degree,
    qualification: degree,
    title,
    experience,
    achievements,
    showOnWebsite: Boolean(item.showOnWebsite),
    certificates,
    specializations,
    image,
    createdAt: item.createdAt || '',
    joinDate: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : (item.joinDate || '-'),
  };
};

export const teachersApi = {
  fetchPublicTeachers: async (params = {}) => {
    try {
      const apiParams = {
        page: params.page || 1,
        limit: params.limit || 10,
      };

      if (params.search && typeof params.search === 'string' && params.search.trim()) {
        apiParams.search = params.search.trim();
      }

      const response = await api.get('/api/v1/teachers/public', { params: apiParams });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      let items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];

      const limit = Number(resData.pagination?.limit || apiParams.limit || 10);
      const currentPage = Number(resData.pagination?.currentPage || apiParams.page || 1);
      let numberOfPages = Number(resData.pagination?.numberOfPages || Math.max(1, Math.ceil(items.length / limit)));

      // Client-side search fallback if search was requested and backend returned unfiltered data
      if (apiParams.search) {
        const query = apiParams.search.toLowerCase();
        const matchesSearch = (t) => {
          const nameAr = (t.name || '').toLowerCase();
          const nameEn = (t.nameEn || '').toLowerCase();
          const degreeVal = (typeof t.degree === 'object' ? (t.degree?.ar || t.degree?.en || '') : String(t.degree || '')).toLowerCase();
          const countryVal = (t.country || '').toLowerCase();
          const subjectVal = (t.subject || '').toLowerCase();
          const specs = Array.isArray(t.specializations)
            ? t.specializations.some((s) => (typeof s === 'object' ? s.name || '' : String(s)).toLowerCase().includes(query))
            : false;
          return nameAr.includes(query) || nameEn.includes(query) || degreeVal.includes(query) || countryVal.includes(query) || subjectVal.includes(query) || specs;
        };

        const allMatch = items.length === 0 || items.every(matchesSearch);
        if (!allMatch) {
          items = items.filter(matchesSearch);
          numberOfPages = Math.max(1, Math.ceil(items.length / limit));
        }
      }

      return {
        success: true,
        data: items,
        pagination: {
          currentPage,
          limit,
          numberOfPages,
          total: resData.pagination?.total ?? (numberOfPages * limit)
        }
      };
    } catch (error) {
      console.error('API fetchPublicTeachers failed:', error);
      return {
        success: false,
        data: [],
        pagination: { currentPage: 1, limit: 10, numberOfPages: 1, total: 0 }
      };
    }
  },

  fetchPublicTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/teachers/public/${id}`);
      const item = response.data?.data || response.data;
      if (item) {
        return { success: true, data: mapTeacherData(item) };
      }
    } catch (err) {
      console.warn(`Direct fetch /teachers/public/${id} failed, trying fallback:`, err);
    }

    try {
      // Fallback 1: search in public teachers list
      const listRes = await teachersApi.fetchPublicTeachers({ limit: 100 });
      const found = listRes.data?.find(
        (t) => t.teacher_id === id || t.id === id || t.user_id === id
      );
      if (found) {
        return { success: true, data: found };
      }
    } catch (err) {
      // ignore
    }

    try {
      // Fallback 2: private/localized
      const response = await api.get(`/api/v1/teachers/private/${id}`);
      const item = response.data?.data || response.data;
      if (item) {
        return { success: true, data: mapTeacherData(item) };
      }
    } catch (err) {
      // ignore
    }

    return { success: false, data: null };
  },

  fetchTeachers: async (params = {}) => {
    try {
      const apiParams = {
        page: params.page || 1,
        limit: params.limit || 20,
      };

      if (params.search && typeof params.search === 'string' && params.search.trim()) {
        apiParams.search = params.search.trim();
      }

      if (params.active !== undefined) {
        apiParams.active = params.active;
      } else if (params.status === 'active') {
        apiParams.active = true;
      } else if (params.status === 'stopped') {
        apiParams.active = false;
      }

      const response = await api.get('/api/v1/teachers/private/localized/all', { params: apiParams });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      let items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];

      let totalCount = resData.statistics?.total ?? items.length;
      const limit = Number(resData.pagination?.limit || apiParams.limit || 20);
      let numberOfPages = Number(resData.pagination?.numberOfPages || Math.ceil(totalCount / limit) || 1);
      const currentPage = Number(resData.pagination?.currentPage || apiParams.page || 1);

      // Verify and fallback filter if backend did not filter search results or returned unrelated records
      if (apiParams.search) {
        const query = apiParams.search.toLowerCase();
        const matchesSearch = (t) => {
          const nameAr = (t.name || '').toLowerCase();
          const nameEn = (t.nameEn || '').toLowerCase();
          const email = (t.email || '').toLowerCase();
          const phone = (t.phone || '').toLowerCase();
          const subject = (t.subject || '').toLowerCase();
          const degree = (t.degree || '').toLowerCase();
          const bio = (t.bio || '').toLowerCase();
          const specs = Array.isArray(t.specializations)
            ? t.specializations.some((s) => (typeof s === 'object' ? s.name || '' : String(s)).toLowerCase().includes(query))
            : false;
          return (
            nameAr.includes(query) ||
            nameEn.includes(query) ||
            email.includes(query) ||
            phone.includes(query) ||
            subject.includes(query) ||
            degree.includes(query) ||
            bio.includes(query) ||
            specs
          );
        };

        const allMatch = items.length === 0 || items.every(matchesSearch);
        if (!allMatch) {
          items = items.filter(matchesSearch);
          totalCount = items.length;
          numberOfPages = Math.max(1, Math.ceil(totalCount / limit));
        }
      }

      // Verify and fallback filter for active status if backend returned unfiltered records
      if (apiParams.active !== undefined) {
        const targetActive = Boolean(apiParams.active);
        const allStatusMatch = items.every((t) => t.active === targetActive);
        if (!allStatusMatch && items.length > 0) {
          items = items.filter((t) => t.active === targetActive);
          totalCount = items.length;
          numberOfPages = Math.max(1, Math.ceil(totalCount / limit));
        }
      }

      return {
        success: true,
        data: items,
        pagination: {
          currentPage,
          limit,
          numberOfPages
        },
        statistics: resData.statistics || {
          total: totalCount,
          active: items.filter((t) => t.active).length,
          stopped: items.filter((t) => !t.active).length
        }
      };
    } catch (error) {
      console.error('API fetchTeachers failed:', error);
      return {
        success: false,
        data: [],
        pagination: { currentPage: 1, limit: 20, numberOfPages: 1 },
        statistics: { total: 0, active: 0, stopped: 0 }
      };
    }
  },

  fetchLocalizedTeachersList: async (params) => {
    return teachersApi.fetchTeachers(params);
  },

  fetchTeachersList: async (params) => {
    try {
      const response = await api.get('/api/v1/teachers/private/list', { params });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      const items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];
      return { success: true, data: items };
    } catch (error) {
      try {
        const fallback = await api.get('/api/v1/teachers/private/localized/all', { params });
        const resData = fallback.data || {};
        const rawList = resData.data || (Array.isArray(resData) ? resData : []);
        const items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];
        return { success: true, data: items };
      } catch (err) {
        console.error('API fetchTeachersList failed:', err);
        return { success: false, data: [] };
      }
    }
  },

  fetchTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/teachers/private/${id}`);
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error(`API fetchTeacherById failed for ${id}:`, error);
      return { success: false, data: null };
    }
  },

  fetchRawTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/teachers/private/${id}`);
      const item = response.data?.data || response.data;
      return { success: true, data: item };
    } catch (error) {
      console.error(`API fetchRawTeacherById failed for ${id}:`, error);
      return { success: false, data: null };
    }
  },

  createTeacher: async (teacherData) => {
    try {
      if (teacherData instanceof FormData) {
        const response = await api.post('/api/v1/teachers/private', teacherData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        const item = response.data?.data || response.data;
        return { success: true, data: mapTeacherData(item) };
      }

      const nameObj = (typeof teacherData.name === 'object' && teacherData.name !== null)
        ? teacherData.name
        : {
            ar: teacherData.name || '',
            en: teacherData.nameEn || teacherData.name || ''
          };

      const degreeObj = (typeof teacherData.degree === 'object' && teacherData.degree !== null)
        ? teacherData.degree
        : {
            ar: teacherData.degree || teacherData.qualification || 'مؤهل جامعي',
            en: teacherData.qualificationEn || teacherData.degreeEn || teacherData.degree || teacherData.qualification || 'University Degree'
          };

      const specializations = Array.isArray(teacherData.specializations)
        ? teacherData.specializations.map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean)
        : [];

      const achievements = Array.isArray(teacherData.achievements)
        ? teacherData.achievements.filter(Boolean)
        : [];

      const yearsOfExperience = Math.max(0, Number(teacherData.yearsOfExperience ?? teacherData.experienceYears ?? 0));
      const profitPercentage = Math.min(100, Math.max(0, Number(teacherData.profitPercentage ?? 20)));
      const showOnWebsite = Boolean(teacherData.showOnWebsite);

      const payload = {
        name: nameObj,
        degree: degreeObj,
        email: teacherData.email,
        phone: teacherData.phone,
        country: teacherData.country,
        yearsOfExperience,
        profitPercentage,
        showOnWebsite,
      };

      if (teacherData.password) {
        payload.password = teacherData.password;
      }
      if (teacherData.confirmPassword) {
        payload.confirmPassword = teacherData.confirmPassword;
      }
      if (teacherData.bio) {
        payload.bio = teacherData.bio;
      }
      if (specializations.length > 0) {
        payload.specializations = specializations;
      }
      if (achievements.length > 0) {
        payload.achievements = achievements;
      }

      const imageVal = teacherData.profileImage || teacherData.image;
      if (imageVal && typeof imageVal === 'string' && !imageVal.startsWith('blob:')) {
        payload.image = imageVal;
      }

      const response = await api.post('/api/v1/teachers/private', payload);
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error('API createTeacher failed:', error);
      throw error;
    }
  },

  updateTeacher: async (id, teacherData) => {
    try {
      if (teacherData instanceof FormData) {
        const response = await api.patch(`/api/v1/teachers/private/${id}`, teacherData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        const item = response.data?.data || response.data;
        return { success: true, data: mapTeacherData(item) };
      }

      const payload = {};

      if (teacherData.name !== undefined) {
        payload.name = (typeof teacherData.name === 'object' && teacherData.name !== null)
          ? teacherData.name
          : {
              ar: teacherData.name || '',
              en: teacherData.nameEn || teacherData.name || ''
            };
      }

      if (teacherData.degree !== undefined || teacherData.qualification !== undefined) {
        payload.degree = (typeof teacherData.degree === 'object' && teacherData.degree !== null)
          ? teacherData.degree
          : {
              ar: teacherData.degree || teacherData.qualification || 'مؤهل جامعي',
              en: teacherData.qualificationEn || teacherData.degreeEn || teacherData.degree || teacherData.qualification || 'University Degree'
            };
      }

      if (teacherData.email !== undefined) payload.email = teacherData.email;
      if (teacherData.phone !== undefined) payload.phone = teacherData.phone;
      if (teacherData.country !== undefined) payload.country = teacherData.country;
      if (teacherData.bio !== undefined) payload.bio = teacherData.bio;

      if (teacherData.yearsOfExperience !== undefined || teacherData.experienceYears !== undefined) {
        payload.yearsOfExperience = Math.max(0, Number(teacherData.yearsOfExperience ?? teacherData.experienceYears ?? 0));
      }

      if (teacherData.profitPercentage !== undefined) {
        payload.profitPercentage = Math.min(100, Math.max(0, Number(teacherData.profitPercentage)));
      }

      if (teacherData.showOnWebsite !== undefined) {
        payload.showOnWebsite = Boolean(teacherData.showOnWebsite);
      }

      if (teacherData.password) {
        payload.password = teacherData.password;
        if (teacherData.confirmPassword) {
          payload.confirmPassword = teacherData.confirmPassword;
        }
      }

      if (Array.isArray(teacherData.specializations)) {
        payload.specializations = teacherData.specializations
          .map(s => typeof s === 'object' ? (s.id || s._id) : s)
          .filter(Boolean);
      }

      if (Array.isArray(teacherData.achievements)) {
        payload.achievements = teacherData.achievements.filter(Boolean);
      }

      const imageVal = teacherData.profileImage || teacherData.image;
      if (imageVal && typeof imageVal === 'string' && !imageVal.startsWith('blob:')) {
        payload.image = imageVal;
      }

      const response = await api.patch(`/api/v1/teachers/private/${id}`, payload);
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error('API updateTeacher failed:', error);
      throw error;
    }
  },

  toggleTeacherStatus: async (teacherOrId) => {
    try {
      const teacher = typeof teacherOrId === 'object' && teacherOrId !== null ? teacherOrId : null;
      const id = teacher?.teacher_id || teacher?.id || teacherOrId;

      let userId = teacher?.user_id || teacher?.userId || teacher?.user?._id || teacher?.user?.id;

      if (!userId) {
        try {
          const raw = await api.get(`/api/v1/teachers/private/${id}`);
          const rawData = raw.data?.data || raw.data;
          userId = rawData?.user_id || rawData?.userId || rawData?.user?._id || rawData?.user?.id || rawData?.user;
        } catch {
          // ignore
        }
      }

      if (userId && typeof userId === 'string') {
        try {
          const res = await api.patch(`/api/v1/users/${userId}/toggle-active`);
          return { success: true, data: res.data };
        } catch (err) {
          console.warn(`Failed toggle-active on /users/${userId}:`, err);
        }
      }

      try {
        const res = await api.patch(`/api/v1/users/${id}/toggle-active`);
        return { success: true, data: res.data };
      } catch (err) {
        console.warn(`Failed toggle-active on /users/${id}:`, err);
      }

      try {
        const res = await api.patch(`/api/v1/teachers/private/${id}/toggle-active`);
        return { success: true, data: res.data };
      } catch (err) {
        console.warn(`Failed toggle-active on /teachers/private/${id}/toggle-active:`, err);
      }

      const res = await api.patch(`/api/v1/teachers/${id}/toggle-active`);
      return { success: true, data: res.data };
    } catch (error) {
      console.error('API toggleTeacherStatus failed:', error);
      throw error;
    }
  },

  deleteTeacher: async (id) => {
    try {
      const response = await api.delete(`/api/v1/teachers/private/${id}`);
      return { success: true, message: 'Deleted successfully', data: response.data };
    } catch (error) {
      console.error('API deleteTeacher failed:', error);
      throw error;
    }
  }
};