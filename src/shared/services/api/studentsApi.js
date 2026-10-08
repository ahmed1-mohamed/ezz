import api from './axiosConfig';

export const studentsApi = {
  // Fetch students by status filter ('all', 'active', 'stopped') with pagination & statistics
  fetchStudents: async (params = {}) => {
    const { status, page = 1, limit = 10, ...restParams } = params;
    const queryParams = { page, limit, ...restParams };

    let endpoint = '/api/v1/students/localized/all';
    if (status === 'active') {
      endpoint = '/api/v1/students/localized/active';
    } else if (status === 'stopped') {
      endpoint = '/api/v1/students/localized/stopped';
    }

    try {
      const response = await api.get(endpoint, { params: queryParams });
      return response.data;
    } catch (err) {
      // Fallback to base /api/v1/students if localized endpoint has any issue
      if (endpoint !== '/api/v1/students') {
        try {
          const fallbackRes = await api.get('/api/v1/students', {
            params: queryParams,
            skipLang: true
          });
          return fallbackRes.data;
        } catch (fallbackErr) {
          console.error('studentsApi.fetchStudents fallback failed:', fallbackErr);
        }
      }
      console.error('studentsApi.fetchStudents failed:', err);
      throw err;
    }
  },

  // Get raw students
  fetchRawStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students', { params, skipLang: true });
    return response.data;
  },

  // Get all localized students
  fetchAllLocalizedStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/all', { params });
    return response.data;
  },

  // Get active localized students
  fetchActiveLocalizedStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/active', { params });
    return response.data;
  },

  // Get stopped localized students
  fetchStoppedLocalizedStudents: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/stopped', { params });
    return response.data;
  },

  // Lightweight list for dropdowns
  fetchStudentsList: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/students/list', { params, skipLang: true });
      return response.data;
    } catch {
      const response = await api.get('/api/v1/students/localized/list', { params });
      return response.data;
    }
  },

  // Localized lightweight list
  fetchLocalizedStudentsList: async (params = {}) => {
    const response = await api.get('/api/v1/students/localized/list', { params });
    return response.data;
  },

  // Single student view
  fetchStudentById: async (id) => {
    try {
      const response = await api.get(`/api/v1/students/localized/${id}`);
      return response.data;
    } catch {
      const response = await api.get(`/api/v1/students/${id}`, { skipLang: true });
      return response.data;
    }
  },

  // Raw single student
  fetchRawStudentById: async (id) => {
    const response = await api.get(`/api/v1/students/${id}`, { skipLang: true });
    return response.data;
  },

  // Create student
  createStudent: async (studentData) => {
    if (studentData instanceof FormData) {
      const response = await api.post('/api/v1/students', studentData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    }

    const payload = {
      email: studentData.email,
      name: typeof studentData.name === 'object' && studentData.name !== null
        ? {
            ar: studentData.name.ar || studentData.nameAr || '',
            en: studentData.name.en || studentData.nameEn || ''
          }
        : {
            ar: studentData.nameAr || studentData.name || '',
            en: studentData.nameEn || studentData.name || ''
          },
      phone: studentData.phone,
      country: studentData.country,
      password: studentData.password,
      confirmPassword: studentData.confirmPassword,
      birthDate: studentData.birthDate,
      studentLevel: studentData.studentLevel,
      parent: studentData.parent
    };

    const response = await api.post('/api/v1/students', payload);
    return response.data;
  },

  // Update student
  updateStudent: async (id, studentData) => {
    if (studentData instanceof FormData) {
      const response = await api.patch(`/api/v1/students/${id}`, studentData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    }

    const payload = { ...studentData };
    delete payload._id;
    delete payload.student_id;
    delete payload.user_id;
    delete payload.id;
    delete payload.createdAt;
    delete payload.updatedAt;

    const response = await api.patch(`/api/v1/students/${id}`, payload);
    return response.data;
  },

  // Add sessions to student
  addSessions: async (id, sessionsCount) => {
    const response = await api.patch(`/api/v1/students/${id}/add-sessions`, {
      sessionsCount: Number(sessionsCount)
    });
    return response.data;
  },

  // Delete student
  deleteStudent: async (id) => {
    const response = await api.delete(`/api/v1/students/${id}`);
    return response.data;
  }
};
