import api from './axiosConfig';

export const mapStudentData = (item) => {
  if (!item) return null;
  const id = item.student_id || item._id || item.id || item.user_id;
   const name = typeof item.name === 'object' && item.name !== null
    ? (item.name.ar || item.name.en || '')
    : (item.name || 'بدون اسم');
  const nameEn = typeof item.name === 'object' && item.name !== null
    ? (item.name.en || item.name.ar || '')
    : (item.nameEn || item.name || '');
   let parentName = '-';
  let parentPhone = '';
  let parentEmail = '';
  if (item.parent && typeof item.parent === 'object') {
    parentName = typeof item.parent.name === 'object' && item.parent.name !== null
      ? (item.parent.name.ar || item.parent.name.en || '-')
      : (item.parent.name || '-');
    parentPhone = item.parent.phone || '';
    parentEmail = item.parent.email || '';
  } else if (item.parentName) {
    parentName = typeof item.parentName === 'object' && item.parentName !== null
      ? (item.parentName.ar || item.parentName.en || '-')
      : String(item.parentName);
  }
   let levelName = '';
  if (item.studentLevel && typeof item.studentLevel === 'object') {
    levelName = typeof item.studentLevel.name === 'object' && item.studentLevel.name !== null
      ? (item.studentLevel.name.ar || item.studentLevel.name.en || '')
      : (item.studentLevel.name || '');
  } else if (item.level) {
    levelName = typeof item.level === 'object' && item.level !== null
      ? (item.level.ar || item.level.en || '')
      : String(item.level);
  } else if (typeof item.studentLevel === 'string') {
    levelName = item.studentLevel;
  }
   let country = '';
  if (item.country && typeof item.country === 'object') {
    country = typeof item.country.name === 'object' && item.country.name !== null
      ? (item.country.name.ar || item.country.name.en || '')
      : (item.country.name || item.country.code || '');
  } else if (typeof item.country === 'string') {
    country = item.country;
  }
   let sessionsBalance = 0;
  let sessionsTotal = 0;
  let sessionsUsed = 0;
  const rawBalance = item.sessionsBalance ?? item.remainingSessions ?? item.sessions;
  if (typeof rawBalance === 'object' && rawBalance !== null) {
    sessionsTotal = Number(rawBalance.total ?? 0);
    sessionsUsed = Number(rawBalance.used ?? 0);
    sessionsBalance = rawBalance.remaining !== undefined
      ? Number(rawBalance.remaining)
      : Math.max(0, sessionsTotal - sessionsUsed);
  } else if (typeof rawBalance === 'number') {
    sessionsBalance = rawBalance;
    sessionsTotal = rawBalance;
  } else if (rawBalance) {
    sessionsBalance = Number(rawBalance) || 0;
    sessionsTotal = sessionsBalance;
  }
   const active = item.active === true || String(item.active) === 'true';
   const averageRating = item.averageRating !== undefined && item.averageRating !== null && !isNaN(Number(item.averageRating))
    ? Number(item.averageRating)
    : null;
  const attendanceRate = item.attendanceRate !== undefined && item.attendanceRate !== null && !isNaN(Number(item.attendanceRate))
    ? Number(item.attendanceRate)
    : null;
  return {
    ...item,
    id,
    _id: id,
    student_id: item.student_id || id,
    user_id: item.user_id || id,
    name,
    nameEn,
    parentName,
    parentPhone: parentPhone || item.parentPhone || '',
    parentEmail: parentEmail || item.parentEmail || '',
    parent: typeof item.parent === 'object' && item.parent !== null
      ? { ...item.parent, name: parentName, phone: parentPhone, email: parentEmail }
      : item.parent,
    studentLevel: typeof item.studentLevel === 'object' && item.studentLevel !== null
      ? { ...item.studentLevel, name: levelName }
      : item.studentLevel,
    level: levelName,
    levelName,
    country,
    sessionsBalance,
    remainingSessions: sessionsBalance,
    sessionsTotal,
    sessionsUsed,
    rawSessionsBalance: rawBalance,
    active,
    averageRating,
    attendanceRate,
  };
};

const buildStudentFormData = (data = {}, { isCreate }) => {
  const fd = new FormData();
  const nameAr = typeof data.name === 'object' && data.name !== null ? data.name.ar : (data.nameAr ?? data.name);
  const nameEn = typeof data.name === 'object' && data.name !== null ? data.name.en : data.nameEn;
  if (nameAr) fd.append('name[ar]', String(nameAr).trim());
  if (nameEn) fd.append('name[en]', String(nameEn).trim());
  ['email', 'phone', 'country', 'birthDate', 'studentLevel', 'parent'].forEach((key) => {
    if (data[key]) fd.append(key, data[key]);
  });
  if (isCreate || data.password) {
    if (data.password) fd.append('password', data.password);
    if (data.confirmPassword) fd.append('confirmPassword', data.confirmPassword);
  }
  const imageFile = data.profileImageFile instanceof File ? data.profileImageFile : (data.image instanceof File ? data.image : null);
  if (imageFile) fd.append('image', imageFile);
  return fd;
};

const fetchUserImage = async (userId) => {
  if (!userId) return null;
  try {
    const response = await api.get(`/api/v1/users/${userId}`, { skipCache: true, skipGlobalErrorToast: true });
    return response.data?.data?.image || null;
  } catch {
    return null;
  }
};

export const studentsApi = {
   fetchStudents: async (params = {}) => {
    const { status, page = 1, limit = 10, search, ...restParams } = params;
    const queryParams = { page, limit, ...restParams };
    if (search && typeof search === 'string' && search.trim()) {
      queryParams.search = search.trim();
    }
    let endpoint = '/api/v1/students/localized/all';
    if (status === 'active') {
      endpoint = '/api/v1/students/localized/active';
    } else if (status === 'stopped') {
      endpoint = '/api/v1/students/localized/stopped';
    }
    try {
      const response = await api.get(endpoint, { params: queryParams });
      const resData = response.data || {};
      const rawList = resData.data || (Array.isArray(resData) ? resData : []);
      const items = Array.isArray(rawList) ? rawList.map(mapStudentData).filter(Boolean) : [];
      const totalCount = resData.pagination?.totalCount ?? resData.pagination?.total ?? resData.statistics?.total ?? items.length;
      const pagination = resData.pagination || {
        currentPage: page,
        limit,
        numberOfPages: Math.max(1, Math.ceil(items.length / limit)),
        totalCount
      };
      const statistics = resData.statistics || {
        total: totalCount,
        active: items.filter((s) => s.active).length,
        stopped: items.filter((s) => !s.active).length
      };
      return {
        ...resData,
        success: true,
        data: items,
        pagination,
        statistics
      };
    } catch (err) {
      if (endpoint !== '/api/v1/students') {
        try {
          const fallbackRes = await api.get('/api/v1/students', {
            params: queryParams,
            skipLang: true
          });
          const resData = fallbackRes.data || {};
          const rawList = resData.data || (Array.isArray(resData) ? resData : []);
          const items = Array.isArray(rawList) ? rawList.map(mapStudentData).filter(Boolean) : [];
          return {
            ...resData,
            success: true,
            data: items,
            pagination: resData.pagination || {
              currentPage: page,
              limit,
              numberOfPages: Math.max(1, Math.ceil(items.length / limit)),
              totalCount: items.length
            },
            statistics: resData.statistics || {
              total: items.length,
              active: items.filter((s) => s.active).length,
              stopped: items.filter((s) => !s.active).length
            }
          };
        } catch (fallbackErr) {
          console.error('studentsApi.fetchStudents fallback failed:', fallbackErr);
        }
      }
      console.error('studentsApi.fetchStudents failed:', err);
      return {
        success: false,
        data: [],
        pagination: { currentPage: page, limit, numberOfPages: 1, totalCount: 0 },
        statistics: { total: 0, active: 0, stopped: 0 }
      };
    }
  },

  fetchRawStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students', { params, skipLang: true });
    return response.data;
  },

  fetchAllLocalizedStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/all', { params });
    return response.data;
  },

  fetchActiveLocalizedStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/active', { params });
    return response.data;
  },

  fetchStoppedLocalizedStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/stopped', { params });
    return response.data;
  },

  fetchStudentsList: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/students/list', { params, skipLang: true });
      return response.data;
    } catch {
      const response = await api.get('/api/v1/students/localized/list', { params });
      return response.data;
    }
  },

  fetchLocalizedStudentsList: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/list', { params });
    return response.data;
  },

  fetchStudentById: async (id) => {
    const response = await api.get(`/api/v1/students/localized/${id}`, { skipCache: true });
    const student = response.data?.data || null;
    return student ? { ...student, image: await fetchUserImage(student.user_id) } : null;
  },

  fetchRawStudentById: async (id) => {
    const response = await api.get(`/api/v1/students/${id}`, { skipLang: true });
    return response.data;
  },

  fetchStudentForEdit: async (id) => {
    const [arRes, enRes] = await Promise.all([
      api.get(`/api/v1/students/${id}`, { headers: { 'Accept-Language': 'ar' }, skipCache: true }),
      api.get(`/api/v1/students/${id}`, { headers: { 'Accept-Language': 'en' }, skipCache: true })
    ]);
    const ar = arRes.data?.data || arRes.data || {};
    const en = enRes.data?.data || enRes.data || {};
    return {
      ...ar,
      image: await fetchUserImage(ar.user_id),
      name: { ar: ar.name || '', en: en.name || '' },
      countryAr: ar.country || '',
      countryEn: en.country || '',
      studentLevelAr: ar.studentLevel || '',
      studentLevelEn: en.studentLevel || ''
    };
  },

  createStudent: async (studentData) => {
    const response = await api.post('/api/v1/students', buildStudentFormData(studentData, { isCreate: true }), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  updateStudent: async (id, studentData) => {
    const body = studentData instanceof FormData ? studentData : buildStudentFormData(studentData, { isCreate: false });
    const response = await api.patch(`/api/v1/students/${id}`, body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  addSessions: async (id, count, reason) => {
    const response = await api.post(`/api/v1/students/${id}/add-sessions`, {
      count: Number(count),
      ...(reason ? { reason } : {})
    });
    return response.data;
  },

  toggleStudentStatus: async (student) => {
    const userId = student?.user_id;
    if (!userId) throw new Error('Missing student user_id');
    const response = await api.patch(`/api/v1/users/${userId}/toggle-active`);
    return response.data;
  },

  changeStudentPassword: async (userId, { password, confirmPassword }) => {
    const response = await api.patch(`/api/v1/users/${userId}/change-password`, { password, confirmPassword });
    return response.data;
  },

  deleteStudent: async (id) => {
    const response = await api.delete(`/api/v1/students/${id}`);
    return response.data;
  }
};

