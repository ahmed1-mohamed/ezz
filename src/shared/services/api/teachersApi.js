import api from './axiosConfig';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

const toBilingual = (value, enFallback = '') => {
  if (typeof value === 'object' && value !== null) return { ar: value.ar || '', en: value.en || '' };
  return { ar: value || '', en: enFallback || value || '' };
};

export const toAvailabilityPayload = (slots = []) =>
  (Array.isArray(slots) ? slots : [])
    .map((s) => ({
      day: String(s.rawDay || s.day || '').toLowerCase(),
      startTime: s.startTime,
      endTime: s.endTime,
    }))
    .filter((s) => s.day && s.startTime && s.endTime);

const buildTeacherPayload = (data = {}, { isCreate }) => {
  const payload = {};
  if (data.name !== undefined) payload.name = toBilingual(data.name, data.nameEn);
  if (data.phone) payload.phone = data.phone;
  if (data.country) payload.country = data.country;
  if (data.bio !== undefined) payload.bio = toBilingual(data.bio);
  if (data.degree !== undefined) payload.degree = toBilingual(data.degree);
  if (Array.isArray(data.specializations)) {
    payload.specializations = data.specializations.map((s) => (typeof s === 'object' ? (s.id || s._id) : s)).filter(Boolean);
  }
  if (data.yearsOfExperience !== undefined) payload.yearsOfExperience = Math.max(0, Number(data.yearsOfExperience) || 0);
  if (data.achievements !== undefined) {
    const ach = data.achievements;
    payload.achievements = Array.isArray(ach)
      ? { ar: ach.map((a) => a.ar || a.en || '').filter(Boolean), en: ach.map((a) => a.en || a.ar || '').filter(Boolean) }
      : { ar: ach?.ar || [], en: ach?.en || [] };
  }
  if (data.showOnWebsite !== undefined) payload.showOnWebsite = Boolean(data.showOnWebsite);
  if (data.availability !== undefined) payload.availability = toAvailabilityPayload(data.availability);
  ['totalLessons', 'totalStudents', 'totalGroups'].forEach((key) => {
    if (data[key] !== undefined) payload[key] = Math.max(0, Number(data[key]) || 0);
  });
  if (isCreate) {
    payload.email = data.email;
    payload.password = data.password;
    payload.confirmPassword = data.confirmPassword;
    payload.hourlyRate = Math.max(0, Number(data.hourlyRate) || 0);
  }
  return payload;
};

export const mapTeacherData = (item) => {
  if (!item) return null;

  const id = item.teacher_id || item._id || item.id || item.user_id;

  const rawName = item.name;
  const nameAr = typeof rawName === 'object' && rawName !== null
    ? (rawName.ar || rawName.en || '')
    : (typeof rawName === 'string' ? rawName : (item.parentName || 'بدون اسم'));
  const nameEn = typeof rawName === 'object' && rawName !== null
    ? (rawName.en || '')
    : (typeof item.nameEn === 'string' ? item.nameEn : '');
  const displayName = nameAr || nameEn || 'بدون اسم';

  const totalLessons = Number(item.totalLessons ?? item.totalSessions ?? 0);
  const totalGroups = Number(item.totalGroups ?? item.groupsCount ?? (Array.isArray(item.groups) ? item.groups.length : 0));
  const totalStudents = Number(item.totalStudents ?? item.studentsCount ?? 0);
  const totalEarnings = Number(item.totalEarnings ?? 0);
  const dueEarnings = Number(item.dueEarnings ?? 0);
  const profitPercentage = Number(item.profitPercentage ?? 0);
  const rating = Number(item.rating ?? 0);
  const hourlyRate = Number(item.hourlyRate ?? 0);
  const yearsOfExperience = Number(item.yearsOfExperience ?? item.experienceYears ?? 0);

  const rawDegree = item.degree || item.qualification;
  const degreeAr = typeof rawDegree === 'object' && rawDegree !== null
    ? (rawDegree.ar || '')
    : (typeof rawDegree === 'string' ? rawDegree : (item.qualificationAr || ''));
  const degreeEn = typeof rawDegree === 'object' && rawDegree !== null
    ? (rawDegree.en || '')
    : (typeof item.degreeEn === 'string' ? item.degreeEn : (item.qualificationEn || ''));

  const rawBio = item.bio || item.aboutAr;
  const bioAr = typeof rawBio === 'object' && rawBio !== null
    ? (rawBio.ar || '')
    : (typeof rawBio === 'string' ? rawBio : (item.aboutAr || ''));
  const bioEn = typeof rawBio === 'object' && rawBio !== null
    ? (rawBio.en || '')
    : (typeof item.aboutEn === 'string' ? item.aboutEn : (item.bioEn || ''));

  let achievements = [];
  let achievementsAr = [];
  let achievementsEn = [];
  if (Array.isArray(item.achievements)) {
    achievements = item.achievements;
    achievementsAr = item.achievements;
    achievementsEn = item.achievements;
  } else if (typeof item.achievements === 'object' && item.achievements !== null) {
    achievementsAr = Array.isArray(item.achievements.ar) ? item.achievements.ar : [];
    achievementsEn = Array.isArray(item.achievements.en) ? item.achievements.en : [];
    achievements = item.achievements;
  }

  const certificates = Array.isArray(item.certificates)
    ? item.certificates.map((c, idx) => {
        if (!c) return null;
        if (typeof c === 'string') {
          const fileUrl = getImageUrl(c);
          return { id: String(idx), name: 'شهادة معتمدة', file: fileUrl, image: fileUrl, url: fileUrl };
        }
        const cId = c.id || c._id || c.certificateId || String(idx);
        const cName = typeof c.name === 'object' && c.name !== null
          ? (c.name.ar || c.name.en || 'شهادة معتمدة')
          : (c.name || 'شهادة معتمدة');
        const cNameAr = typeof c.name === 'object' && c.name !== null ? (c.name.ar || '') : (c.name || '');
        const cNameEn = typeof c.name === 'object' && c.name !== null ? (c.name.en || '') : (c.nameEn || '');
        const rawFile = c.file || c.image || c.url || '';
        const fileUrl = rawFile ? getImageUrl(rawFile) : '';
        return {
          ...c,
          id: cId,
          _id: cId,
          name: cName,
          nameAr: cNameAr,
          nameEn: cNameEn,
          file: fileUrl,
          image: fileUrl,
          url: fileUrl,
        };
      }).filter(Boolean)
    : [];

  const specializations = Array.isArray(item.specializations) ? item.specializations : [];
  const groups = Array.isArray(item.groups) ? item.groups : [];
  const active = item.active !== false;

  const subject = specializations.length > 0
    ? specializations.map(s => {
        if (typeof s === 'object' && s !== null) {
          if (typeof s.name === 'object' && s.name !== null) {
            return s.name.ar || s.name.en || '';
          }
          return s.name || s.title || '';
        }
        return String(s || '');
      }).filter(Boolean).join(' · ')
    : (degreeAr || 'معلم');

  const title = degreeAr.trim() || 'معلم معتمد';
  const experience = `${yearsOfExperience} سنوات خبرة`;
  const rawImage = item.image || item.imageUrl || item.avatar || '';
  const image = rawImage ? getImageUrl(rawImage) : '';

  const resolvedUserId = (
    (typeof item.user === 'string' && item.user) ||
    item.user?._id ||
    item.user?.id ||
    item.user_id ||
    (typeof item.userId === 'string' && item.userId) ||
    item.userId?._id ||
    item.userId?.id ||
    item.userRef ||
    ''
  );

  return {
    ...item,
    id,
    teacher_id: item.teacher_id || id,
    user_id: resolvedUserId || item.user_id || item.userId || '',
    name: item.name,
    displayName,
    nameAr,
    nameEn,
    subject,
    email: item.email || item.user?.email || item.userId?.email || '',
    phone: item.phone || item.user?.phone || item.userId?.phone || '',
    country: item.country || item.user?.country || item.userId?.country || '',
    active,
    status: active ? 'Active' : 'Suspended',
    profitPercentage,
    rating,
    hourlyRate,
    totalEarnings,
    dueEarnings,
    totalLessons,
    totalSessions: totalLessons,
    totalGroups,
    groupsCount: totalGroups,
    totalStudents,
    studentsCount: totalStudents,
    bio: item.bio,
    bioAr,
    bioEn,
    aboutAr: bioAr,
    aboutEn: bioEn,
    yearsOfExperience,
    experienceYears: yearsOfExperience,
    degree: item.degree,
    degreeAr,
    degreeEn,
    qualification: degreeAr || degreeEn,
    title,
    experience,
    achievements,
    achievementsAr,
    achievementsEn,
    showOnWebsite: Boolean(item.showOnWebsite),
    certificates,
    availability: Array.isArray(item.availability) ? item.availability : [],
    specializations,
    groups,
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
        limit: params.limit || 50,
      };

      if (params.search && typeof params.search === 'string' && params.search.trim()) {
        apiParams.search = params.search.trim();
      }

      if (params.country && typeof params.country === 'string' && params.country.trim()) {
        apiParams.country = params.country.trim();
      }

      const response = await api.get('/api/v1/teachers/public', { params: apiParams });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      let items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];

      const limit = Number(resData.pagination?.limit || apiParams.limit || 10);
      const currentPage = Number(resData.pagination?.currentPage || apiParams.page || 1);
      let numberOfPages = Number(resData.pagination?.numberOfPages || Math.max(1, Math.ceil(items.length / limit)));

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
      const listRes = await teachersApi.fetchPublicTeachers({ limit: 100 });
      const found = listRes.data?.find(
        (t) => t.teacher_id === id || t.id === id || t.user_id === id
      );
      if (found) {
        return { success: true, data: found };
      }
    } catch (err) {
      void err;
    }

    try {
      const response = await api.get(`/api/v1/teachers/private/${id}`);
      const item = response.data?.data || response.data;
      if (item) {
        return { success: true, data: mapTeacherData(item) };
      }
    } catch (err) {
      void err;
    }

    return { success: false, data: null };
  },

  fetchTeachers: async (params = {}) => {
    try {
      const page = params.page || 1;
      const limit = params.limit || 10;
      const apiParams = { page, limit };

      if (params.search && typeof params.search === 'string' && params.search.trim()) {
        apiParams.search = params.search.trim();
      }

      let endpoint = '/api/v1/teachers/private/localized/all';
      if (params.status === 'active' || params.active === true) {
        endpoint = '/api/v1/teachers/private/localized/active';
      } else if (params.status === 'stopped' || params.active === false) {
        endpoint = '/api/v1/teachers/private/localized/stopped';
      }

      const response = await api.get(endpoint, { params: apiParams });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      let items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];

      const pagination = resData.pagination || {
        currentPage: page,
        limit,
        numberOfPages: Math.max(1, Math.ceil(items.length / limit)),
        totalCount: items.length
      };

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
        }
      }

      const totalCount = pagination.totalCount ?? resData.statistics?.total ?? items.length;
      const statistics = resData.statistics || {
        total: totalCount,
        active: items.filter((t) => t.active).length,
        stopped: items.filter((t) => !t.active).length
      };

      return {
        success: true,
        data: items,
        pagination,
        statistics
      };
    } catch (error) {
      console.error('API fetchTeachers failed:', error);
      return {
        success: false,
        data: [],
        pagination: { currentPage: 1, limit: 10, numberOfPages: 1, totalCount: 0 },
        statistics: { total: 0, active: 0, stopped: 0 }
      };
    }
  },

  fetchLocalizedTeachersList: async (params) => {
    return teachersApi.fetchTeachersList(params);
  },

  fetchTeachersList: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teachers/private/list', { params });
      const resData = response.data || {};
      const rawList = resData.data?.teachers || resData.teachers || resData.data || (Array.isArray(resData) ? resData : []);
      const items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];
      return { success: true, data: items };
    } catch (error) {
      console.warn('API fetchTeachersList (/api/v1/teachers/private/list) failed, trying fallback:', error);
      try {
        const fallback = await api.get('/api/v1/teachers/private/localized/list', { params });
        const resData = fallback.data || {};
        const rawList = resData.data?.teachers || resData.teachers || resData.data || (Array.isArray(resData) ? resData : []);
        const items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];
        return { success: true, data: items };
      } catch {
        try {
          const secondFallback = await api.get('/api/v1/teachers/private/localized/all', { params });
          const resData = secondFallback.data || {};
          const rawList = resData.data?.teachers || resData.teachers || resData.data || (Array.isArray(resData) ? resData : []);
          const items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];
          return { success: true, data: items };
        } catch (finalErr) {
          console.error('API fetchTeachersList all fallbacks failed:', finalErr);
          return { success: false, data: [] };
        }
      }
    }
  },

  fetchTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/teachers/private/${id}`);
      const item = response.data?.data || response.data;
      if (item) {
        return { success: true, data: mapTeacherData(item) };
      }
    } catch (error) {
      console.error(`API fetchTeacherById failed for ${id}:`, error);
      return { success: false, data: null };
    }
  },

  fetchLocalizedTeacherDetails: async (id) => {
    return teachersApi.fetchTeacherById(id);
  },

  fetchRawTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/teachers/private/${id}`);
      const item = response.data?.data || response.data;
      if (item) {
        return { success: true, data: item };
      }
    } catch (error) {
      console.error(`API fetchRawTeacherById failed for ${id}:`, error);
      return { success: false, data: null };
    }
  },

  // POST /teachers/private is JSON-only (numeric/boolean fields fail multipart validation),
  // so the image is uploaded afterwards with a multipart PATCH containing only `image`.
  createTeacher: async (teacherData) => {
    const payload = buildTeacherPayload(teacherData, { isCreate: true });
    const response = await api.post('/api/v1/teachers/private', payload);
    let item = response.data?.data || response.data;
    const newId = item?.teacher_id || item?.id || item?._id;
    if (newId && teacherData.profileImageFile instanceof File) {
      item = (await teachersApi.uploadTeacherImage(newId, teacherData.profileImageFile)) || item;
    }
    return { success: true, data: mapTeacherData(item) };
  },

  // PATCH /teachers/private/:id accepts: name, phone, country, bio, degree, specializations[], yearsOfExperience,
  // achievements, showOnWebsite, availability[], totalLessons, totalStudents, totalGroups (+ image via multipart).
  // Email and hourlyRate are not editable here (hourly rate has its own endpoint).
  updateTeacher: async (id, teacherData) => {
    const payload = buildTeacherPayload(teacherData, { isCreate: false });
    let item = null;
    if (Object.keys(payload).length > 0) {
      const response = await api.patch(`/api/v1/teachers/private/${id}`, payload);
      item = response.data?.data || response.data;
    }
    if (teacherData.profileImageFile instanceof File) {
      item = (await teachersApi.uploadTeacherImage(id, teacherData.profileImageFile)) || item;
    }
    return { success: true, data: mapTeacherData(item) };
  },

  uploadTeacherImage: async (id, file) => {
    const fd = new FormData();
    fd.append('image', file);
    const response = await api.patch(`/api/v1/teachers/private/${id}`, fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data?.data || response.data;
  },

  // PATCH /teachers/private/:id/hourly-rate { hourlyRate: number >= 0 }
  updateTeacherHourlyRate: async (id, hourlyRate) => {
    const response = await api.patch(`/api/v1/teachers/private/${id}/hourly-rate`, {
      hourlyRate: Math.max(0, Number(hourlyRate) || 0)
    });
    return response.data;
  },

  addTeacherCertificate: async (id, certData) => {
    try {
      const isFormData = certData instanceof FormData;
      let body = certData;
      let headers = {};

      if (!isFormData) {
        const fd = new FormData();
        const fileObj = certData?.file;
        if (fileObj instanceof File) {
          fd.append('file', fileObj);
        }

        const nameAr = typeof certData?.name === 'object' && certData?.name !== null
          ? (certData.name.ar || '')
          : (certData?.nameAr || (typeof certData?.name === 'string' ? certData.name : ''));
        const nameEn = typeof certData?.name === 'object' && certData?.name !== null
          ? (certData.name.en || '')
          : (certData?.nameEn || '');

        if (nameAr) fd.append('name[ar]', nameAr);
        if (nameEn) fd.append('name[en]', nameEn);

        body = fd;
        headers = { 'Content-Type': 'multipart/form-data' };
      }

      const response = await api.post(`/api/v1/teachers/private/${id}/certificates`, body, { headers });
      return response.data;
    } catch (error) {
      console.error('API addTeacherCertificate failed:', error);
      throw error;
    }
  },

  updateTeacherCertificate: async (id, certificateId, certData) => {
    try {
      const isFormData = certData instanceof FormData;
      let body = certData;
      let headers = {};

      if (!isFormData) {
        const fd = new FormData();
        const fileObj = certData?.file;
        if (fileObj instanceof File) {
          fd.append('file', fileObj);
        }

        const nameAr = typeof certData?.name === 'object' && certData?.name !== null
          ? (certData.name.ar || '')
          : (certData?.nameAr || (typeof certData?.name === 'string' ? certData.name : ''));
        const nameEn = typeof certData?.name === 'object' && certData?.name !== null
          ? (certData.name.en || '')
          : (certData?.nameEn || '');

        if (nameAr) fd.append('name[ar]', nameAr);
        if (nameEn) fd.append('name[en]', nameEn);

        body = fd;
        headers = { 'Content-Type': 'multipart/form-data' };
      }

      const response = await api.patch(`/api/v1/teachers/private/${id}/certificates/${certificateId}`, body, { headers });
      return response.data;
    } catch (error) {
      console.error('API updateTeacherCertificate failed:', error);
      throw error;
    }
  },

  deleteTeacherCertificate: async (id, certificateId) => {
    try {
      const response = await api.delete(`/api/v1/teachers/private/${id}/certificates/${certificateId}`);
      return response.data;
    } catch (error) {
      console.error('API deleteTeacherCertificate failed:', error);
      throw error;
    }
  },

  // PATCH /users/:userId/change-password { password, confirmPassword } — userId is the teacher's user_id
  changeTeacherPassword: async (userId, { password, confirmPassword }) => {
    const response = await api.patch(`/api/v1/users/${userId}/change-password`, { password, confirmPassword });
    return response.data;
  },

  // PATCH /users/:userId/toggle-active
  toggleTeacherStatus: async (teacher) => {
    if (!teacher?.user_id) throw new Error('Missing teacher user_id');
    const res = await api.patch(`/api/v1/users/${teacher.user_id}/toggle-active`);
    return { success: true, data: res.data };
  },

  deleteTeacher: async (id) => {
    try {
      const response = await api.delete(`/api/v1/teachers/private/${id}`);
      return { success: true, message: 'Deleted successfully', data: response.data };
    } catch (error) {
      console.error('API deleteTeacher failed:', error);
      throw error;
    }
  },

  fetchCountries: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/countries', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchCountries failed:', error);
      throw error;
    }
  }
};