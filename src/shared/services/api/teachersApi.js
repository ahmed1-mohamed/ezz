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
      const response = await api.get('/api/v1/teachers/private/localized/list', { params });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      const items = Array.isArray(rawList) ? rawList.map(mapTeacherData).filter(Boolean) : [];
      return { success: true, data: items };
    } catch {
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

  createTeacher: async (teacherData) => {
    try {
      const hasFiles = teacherData instanceof FormData ||
        (teacherData?.profileImageFile instanceof File) ||
        (teacherData?.image instanceof File) ||
        (teacherData?.cvFile instanceof File) ||
        (teacherData?.cv instanceof File) ||
        (Array.isArray(teacherData?.certificates) && teacherData.certificates.some(c => (c instanceof File) || (c?.file instanceof File)));

      if (hasFiles) {
        let fd = teacherData instanceof FormData ? teacherData : new FormData();
        if (!(teacherData instanceof FormData)) {
          const nameObj = (typeof teacherData.name === 'object' && teacherData.name !== null)
            ? teacherData.name
            : { ar: teacherData.name || '', en: teacherData.nameEn || teacherData.name || '' };
          fd.append('name[ar]', nameObj.ar || '');
          fd.append('name[en]', nameObj.en || '');
          if (teacherData.nameEn) fd.append('nameEn', teacherData.nameEn);

          const degreeObj = (typeof teacherData.degree === 'object' && teacherData.degree !== null)
            ? teacherData.degree
            : { ar: teacherData.degree || teacherData.qualification || '', en: teacherData.degreeEn || teacherData.qualificationEn || '' };
          fd.append('degree[ar]', degreeObj.ar || '');
          fd.append('degree[en]', degreeObj.en || '');

          const bioObj = (typeof teacherData.bio === 'object' && teacherData.bio !== null)
            ? teacherData.bio
            : { ar: teacherData.bio || teacherData.aboutAr || '', en: teacherData.aboutEn || teacherData.bio || '' };
          fd.append('bio[ar]', bioObj.ar || '');
          fd.append('bio[en]', bioObj.en || '');

          if (teacherData.email) fd.append('email', teacherData.email);
          if (teacherData.phone) fd.append('phone', teacherData.phone);
          if (teacherData.country) fd.append('country', teacherData.country);
          if (teacherData.password) fd.append('password', teacherData.password);
          if (teacherData.confirmPassword) fd.append('confirmPassword', teacherData.confirmPassword);
          fd.append('hourlyRate', String(Number(teacherData.hourlyRate) || 0));
          fd.append('totalLessons', String(Number(teacherData.totalLessons) || 0));
          fd.append('totalStudents', String(Number(teacherData.totalStudents) || 0));
          fd.append('yearsOfExperience', String(Number(teacherData.yearsOfExperience) || 0));
          fd.append('profitPercentage', String(Number(teacherData.profitPercentage) || 0));
          fd.append('showOnWebsite', String(Boolean(teacherData.showOnWebsite)));

          if (Array.isArray(teacherData.specializations)) {
            teacherData.specializations.forEach((s) => {
              const sId = typeof s === 'object' ? (s.id || s._id) : s;
              if (sId) fd.append('specializations[]', sId);
            });
          }

          if (teacherData.achievements) {
            if (Array.isArray(teacherData.achievements)) {
              teacherData.achievements.forEach((ach) => {
                if (typeof ach === 'object' && ach !== null) {
                  if (ach.ar) fd.append('achievements[ar][]', ach.ar);
                  if (ach.en) fd.append('achievements[en][]', ach.en);
                } else {
                  fd.append('achievements[ar][]', String(ach));
                  fd.append('achievements[en][]', String(ach));
                }
              });
            } else if (typeof teacherData.achievements === 'object' && teacherData.achievements !== null) {
              if (Array.isArray(teacherData.achievements.ar)) {
                teacherData.achievements.ar.forEach(a => fd.append('achievements[ar][]', a));
              }
              if (Array.isArray(teacherData.achievements.en)) {
                teacherData.achievements.en.forEach(a => fd.append('achievements[en][]', a));
              }
            }
          }

          if (teacherData.profileImageFile instanceof File) {
            fd.append('image', teacherData.profileImageFile);
          } else if (teacherData.image instanceof File) {
            fd.append('image', teacherData.image);
          }

          const cvObj = teacherData.cvFile instanceof File ? teacherData.cvFile : (teacherData.cv instanceof File ? teacherData.cv : null);
          if (cvObj) {
            fd.append('cv', cvObj);
          }

          if (Array.isArray(teacherData.certificates)) {
            teacherData.certificates.forEach((c) => {
              if (c instanceof File) {
                fd.append('certificates', c);
              } else if (c?.file instanceof File) {
                fd.append('certificates', c.file);
              }
            });
          }
        }

        const response = await api.post('/api/v1/teachers/private', fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        const item = response.data?.data || response.data;
        return { success: true, data: mapTeacherData(item) };
      }

      const nameObj = (typeof teacherData.name === 'object' && teacherData.name !== null)
        ? teacherData.name
        : { ar: teacherData.name || '', en: teacherData.nameEn || teacherData.name || '' };

      const degreeObj = (typeof teacherData.degree === 'object' && teacherData.degree !== null)
        ? teacherData.degree
        : { ar: teacherData.degree || teacherData.qualification || 'مؤهل جامعي', en: teacherData.qualificationEn || teacherData.degreeEn || 'University Degree' };

      const bioObj = (typeof teacherData.bio === 'object' && teacherData.bio !== null)
        ? teacherData.bio
        : { ar: teacherData.bio || teacherData.aboutAr || '', en: teacherData.aboutEn || teacherData.bio || '' };

      const specializations = Array.isArray(teacherData.specializations)
        ? teacherData.specializations.map(s => typeof s === 'object' ? (s.id || s._id) : s).filter(Boolean)
        : [];

      const achievements = Array.isArray(teacherData.achievements)
        ? teacherData.achievements.filter(Boolean)
        : [];

      const payload = {
        name: nameObj,
        nameEn: teacherData.nameEn || nameObj.en,
        degree: degreeObj,
        bio: bioObj,
        email: teacherData.email,
        phone: teacherData.phone,
        country: teacherData.country,
        specializations,
        achievements,
        showOnWebsite: Boolean(teacherData.showOnWebsite),
        totalLessons: Math.max(0, Number(teacherData.totalLessons) || 0),
        totalStudents: Math.max(0, Number(teacherData.totalStudents) || 0),
        hourlyRate: Math.max(0, Number(teacherData.hourlyRate) || 0),
        yearsOfExperience: Math.max(0, Number(teacherData.yearsOfExperience ?? teacherData.experienceYears ?? 0)),
        profitPercentage: Math.min(100, Math.max(0, Number(teacherData.profitPercentage ?? 20))),
      };

      if (teacherData.password) payload.password = teacherData.password;
      if (teacherData.confirmPassword) payload.confirmPassword = teacherData.confirmPassword;
      if (Array.isArray(teacherData.certificates) && teacherData.certificates.length > 0) {
        payload.certificates = teacherData.certificates;
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
      const hasImageFile = (teacherData?.profileImageFile instanceof File) || (teacherData?.image instanceof File);

      if (teacherData instanceof FormData) {
        const response = await api.patch(`/api/v1/teachers/private/${id}`, teacherData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        const item = response.data?.data || response.data;
        return { success: true, data: mapTeacherData(item) };
      }

      if (hasImageFile) {
        const fd = new FormData();

        if (teacherData.name !== undefined) {
          const nameObj = (typeof teacherData.name === 'object' && teacherData.name !== null)
            ? teacherData.name
            : { ar: teacherData.name || '', en: teacherData.nameEn || teacherData.name || '' };
          fd.append('name[ar]', nameObj.ar || '');
          fd.append('name[en]', nameObj.en || '');
        }

        const imgFile = teacherData.profileImageFile instanceof File ? teacherData.profileImageFile : teacherData.image;
        if (imgFile instanceof File) {
          fd.append('image', imgFile);
        }

        if (teacherData.email !== undefined && teacherData.email !== null) {
          fd.append('email', typeof teacherData.email === 'string' ? teacherData.email.trim() : teacherData.email);
        }

        if (teacherData.phone !== undefined) fd.append('phone', teacherData.phone);

        if (teacherData.country !== undefined) fd.append('country', teacherData.country);

        if (teacherData.totalLessons !== undefined || teacherData.totalSessions !== undefined) {
          fd.append('totalLessons', String(Math.max(0, Number(teacherData.totalLessons ?? teacherData.totalSessions) || 0)));
        }

        if (teacherData.totalStudents !== undefined || teacherData.studentsCount !== undefined) {
          fd.append('totalStudents', String(Math.max(0, Number(teacherData.totalStudents ?? teacherData.studentsCount) || 0)));
        }

        if (teacherData.bio !== undefined || teacherData.aboutAr !== undefined || teacherData.aboutEn !== undefined) {
          const bioObj = (typeof teacherData.bio === 'object' && teacherData.bio !== null)
            ? teacherData.bio
            : { ar: teacherData.bio || teacherData.aboutAr || '', en: teacherData.aboutEn || '' };
          fd.append('bio[ar]', bioObj.ar || '');
          fd.append('bio[en]', bioObj.en || '');
        }

        if (Array.isArray(teacherData.specializations)) {
          teacherData.specializations.forEach((s) => {
            const sId = typeof s === 'object' ? (s.id || s._id) : s;
            if (sId) fd.append('specializations[]', sId);
          });
        }

        if (teacherData.yearsOfExperience !== undefined || teacherData.experienceYears !== undefined) {
          fd.append('yearsOfExperience', String(Math.max(0, Number(teacherData.yearsOfExperience ?? teacherData.experienceYears) || 0)));
        }

        if (teacherData.degree !== undefined || teacherData.degreeAr !== undefined || teacherData.qualification !== undefined) {
          const degreeObj = (typeof teacherData.degree === 'object' && teacherData.degree !== null)
            ? teacherData.degree
            : { ar: teacherData.degree || teacherData.degreeAr || teacherData.qualification || '', en: teacherData.degreeEn || teacherData.qualificationEn || '' };
          fd.append('degree[ar]', degreeObj.ar || '');
          fd.append('degree[en]', degreeObj.en || '');
        }

        if (teacherData.achievements !== undefined) {
          if (Array.isArray(teacherData.achievements)) {
            teacherData.achievements.forEach((ach) => {
              if (typeof ach === 'object' && ach !== null) {
                if (ach.ar) fd.append('achievements[ar][]', ach.ar);
                if (ach.en) fd.append('achievements[en][]', ach.en);
              } else {
                fd.append('achievements[ar][]', String(ach));
                fd.append('achievements[en][]', String(ach));
              }
            });
          } else if (typeof teacherData.achievements === 'object' && teacherData.achievements !== null) {
            if (Array.isArray(teacherData.achievements.ar)) {
              teacherData.achievements.ar.forEach(a => fd.append('achievements[ar][]', a));
            }
            if (Array.isArray(teacherData.achievements.en)) {
              teacherData.achievements.en.forEach(a => fd.append('achievements[en][]', a));
            }
          }
        }

        if (teacherData.hourlyRate !== undefined) {
          fd.append('hourlyRate', String(Math.max(0, Number(teacherData.hourlyRate) || 0)));
        }

        if (teacherData.showOnWebsite !== undefined) {
          fd.append('showOnWebsite', String(Boolean(teacherData.showOnWebsite)));
        }

        const response = await api.patch(`/api/v1/teachers/private/${id}`, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        const item = response.data?.data || response.data;
        return { success: true, data: mapTeacherData(item) };
      }

      const payload = {};

      if (teacherData.name !== undefined) {
        payload.name = (typeof teacherData.name === 'object' && teacherData.name !== null)
          ? teacherData.name
          : { ar: teacherData.name || '', en: teacherData.nameEn || teacherData.name || '' };
      }

      const imageVal = teacherData.profileImage || teacherData.image;
      if (imageVal && typeof imageVal === 'string' && !imageVal.startsWith('blob:')) {
        payload.image = imageVal;
      }

      if (teacherData.email !== undefined && teacherData.email !== null) {
        payload.email = typeof teacherData.email === 'string' ? teacherData.email.trim() : teacherData.email;
      }

      if (teacherData.phone !== undefined) payload.phone = teacherData.phone;

      if (teacherData.country !== undefined) payload.country = teacherData.country;

      if (teacherData.hourlyRate !== undefined) {
        payload.hourlyRate = Math.max(0, Number(teacherData.hourlyRate) || 0);
      }

      if (teacherData.totalLessons !== undefined || teacherData.totalSessions !== undefined) {
        payload.totalLessons = Math.max(0, Number(teacherData.totalLessons ?? teacherData.totalSessions) || 0);
      }

      if (teacherData.totalStudents !== undefined || teacherData.studentsCount !== undefined) {
        payload.totalStudents = Math.max(0, Number(teacherData.totalStudents ?? teacherData.studentsCount) || 0);
      }

      if (teacherData.bio !== undefined || teacherData.aboutAr !== undefined || teacherData.aboutEn !== undefined) {
        payload.bio = (typeof teacherData.bio === 'object' && teacherData.bio !== null)
          ? teacherData.bio
          : { ar: teacherData.bio || teacherData.aboutAr || '', en: teacherData.aboutEn || '' };
      }

      if (Array.isArray(teacherData.specializations)) {
        payload.specializations = teacherData.specializations
          .map(s => typeof s === 'object' ? (s.id || s._id) : s)
          .filter(Boolean);
      }

      if (teacherData.yearsOfExperience !== undefined || teacherData.experienceYears !== undefined) {
        payload.yearsOfExperience = Math.max(0, Number(teacherData.yearsOfExperience ?? teacherData.experienceYears) || 0);
      }

      if (teacherData.degree !== undefined || teacherData.degreeAr !== undefined || teacherData.qualification !== undefined) {
        payload.degree = (typeof teacherData.degree === 'object' && teacherData.degree !== null)
          ? teacherData.degree
          : { ar: teacherData.degree || teacherData.degreeAr || teacherData.qualification || '', en: teacherData.degreeEn || teacherData.qualificationEn || '' };
      }

      if (teacherData.achievements !== undefined) {
        payload.achievements = teacherData.achievements;
      }

      if (teacherData.showOnWebsite !== undefined) {
        payload.showOnWebsite = Boolean(teacherData.showOnWebsite);
      }

      const response = await api.patch(`/api/v1/teachers/private/${id}`, payload);
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error('API updateTeacher failed:', error);
      throw error;
    }
  },

  updateTeacherHourlyRate: async (idOrTeacher, hourlyRate) => {
    const id = typeof idOrTeacher === 'object' && idOrTeacher !== null
      ? (idOrTeacher.teacher_id || idOrTeacher.id || idOrTeacher._id)
      : idOrTeacher;
    const rateNumber = Math.max(0, Number(hourlyRate) || 0);
    try {
      const response = await api.patch(`/api/v1/teachers/private/${id}/hourly-rate`, {
        hourlyRate: rateNumber,
        hourly_rate: rateNumber
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404 || error.response?.status === 405) {
        const fallbackRes = await api.patch(`/api/v1/teachers/private/${id}`, {
          hourlyRate: rateNumber,
          hourly_rate: rateNumber
        });
        return fallbackRes.data;
      }
      console.error('API updateTeacherHourlyRate failed:', error);
      throw error;
    }
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

  changeTeacherPassword: async (userIdOrTeacher, passwordData) => {
    try {
      let userId = typeof userIdOrTeacher === 'object' && userIdOrTeacher !== null
        ? (
            (typeof userIdOrTeacher.user === 'string' && userIdOrTeacher.user) ||
            userIdOrTeacher.user?._id ||
            userIdOrTeacher.user?.id ||
            userIdOrTeacher.user_id ||
            (typeof userIdOrTeacher.userId === 'string' && userIdOrTeacher.userId) ||
            userIdOrTeacher.userId?._id ||
            userIdOrTeacher.userId?.id ||
            userIdOrTeacher.userRef ||
            userIdOrTeacher.id ||
            userIdOrTeacher.teacher_id
          )
        : userIdOrTeacher;

      const password = typeof passwordData === 'string' ? passwordData : passwordData?.password;
      const confirmPassword = typeof passwordData === 'object' ? (passwordData?.confirmPassword || password) : password;

      const payload = {
        password,
        confirmPassword,
        ...(passwordData?.phone ? { phone: passwordData.phone } : {}),
        ...(passwordData?.email ? { email: passwordData.email } : {}),
        ...(passwordData?.country ? { country: passwordData.country } : {})
      };

      try {
        const response = await api.patch(`/api/v1/users/${userId}/change-password`, payload);
        return response.data;
      } catch (err) {
        if (err.response?.status === 404 && typeof userId === 'string') {
          try {
            const raw = await api.get(`/api/v1/teachers/private/${userId}`);
            const rawData = raw.data?.data || raw.data;
            const actualUserId =
              (typeof rawData?.user === 'string' && rawData.user) ||
              rawData?.user?._id ||
              rawData?.user?.id ||
              rawData?.user_id ||
              (typeof rawData?.userId === 'string' && rawData.userId) ||
              rawData?.userId?._id ||
              rawData?.userId?.id;
            if (actualUserId && actualUserId !== userId) {
              const res = await api.patch(`/api/v1/users/${actualUserId}/change-password`, payload);
              return res.data;
            }
          } catch (err2) {
            void err2;
          }
        }
        throw err;
      }
    } catch (error) {
      console.error('API changeTeacherPassword failed:', error);
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
          userId = null;
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