import api from './axiosConfig';

export const studentsApi = {
  fetchStudents: async (params) => {
    const response = await api.get('/api/v1/students', { params });
    return response.data;
  },

  fetchAllLocalizedStudents: async () => {
    const response = await api.get('/api/v1/students/localized/all');
    return response.data;
  },

  fetchLocalizedStudentsList: async (params) => {
    const response = await api.get('/api/v1/students/localized/all', { params });
    return response.data;
  },

  fetchStudentById: async (id) => {
    const response = await api.get(`/api/v1/students/localized/${id}`);
    return response.data;
  },

  createStudent: async (studentData) => {
    const isFormData = studentData instanceof FormData;
    const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
    const response = await api.post('/api/v1/students', studentData, { headers });
    return response.data;
  },

  updateStudent: async (id, studentData) => {
    const isFormData = studentData instanceof FormData;
    if (!isFormData && typeof studentData === 'object' && studentData !== null) {
      const keysToRemove = ['image', 'photo', 'photoUrl', 'profileImage'];
      keysToRemove.forEach(k => {
        if (typeof studentData[k] === 'string') {
          delete studentData[k];
        }
      });
    }
    const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
    const response = await api.patch(`/api/v1/students/${id}`, studentData, { headers });
    return response.data;
  },

  deleteStudent: async (id) => {
    const response = await api.delete(`/api/v1/admin/students/${id}`);
    return response.data;
  }
};
