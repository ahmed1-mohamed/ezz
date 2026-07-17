import api from './axiosConfig';
const mapTeacherData = (item) => ({
  ...item,
  id: item.teacher_id || item._id || item.id,
  name: item.name || item.parentName || 'بدون اسم',
  subject: item.subject || 'معلم',
  rating: item.rating || 5.0,
  groupsCount: item.groupsCount || 0,
  totalSessions: item.totalSessions || 0,
  totalEarnings: item.totalEarnings || 0,
  dueEarnings: item.dueEarnings || 0,
  experienceYears: item.experienceYears || 0,
  country: item.country || 'مصر',
  status: item.active === false ? 'Suspended' : 'Active',
  email: item.email || '',
  phone: item.phone || '',
  aboutAr: item.aboutAr || item.review || '',
  aboutEn: item.aboutEn || item.review || '',
});

export const teachersApi = {
  fetchTeachers: async (params) => {
    try {
      const response = await api.get('/api/v1/teachers/localized/all', { params });
      const items = response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(items) ? items.map(mapTeacherData) : [] };
    } catch (error) {
      console.error('API fetchTeachers failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchLocalizedTeachersList: async (params) => {
    try {
      const response = await api.get('/api/v1/teachers/localized/all', { params });
      const items = response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(items) ? items.map(mapTeacherData) : [] };
    } catch (error) {
      console.error('API fetchLocalizedTeachersList failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchTeachersList: async (params) => {
    try {
      const response = await api.get('/api/v1/teachers/list', { params });
      const items = response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(items) ? items.map(mapTeacherData) : [] };
    } catch (error) {
      console.error('API fetchTeachersList failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchActiveTeachers: async (params) => {
    try {
      const response = await api.get('/api/v1/teachers/localized/active', { params });
      const items = response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(items) ? items.map(mapTeacherData) : [] };
    } catch (error) {
      console.error('API fetchActiveTeachers failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchStoppedTeachers: async (params) => {
    try {
      const response = await api.get('/api/v1/teachers/localized/stopped', { params });
      const items = response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(items) ? items.map(mapTeacherData) : [] };
    } catch (error) {
      console.error('API fetchStoppedTeachers failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/teachers/localized/${id}`);
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error(`API fetchTeacherById failed for ${id}:`, error);
      return { success: false, data: null };
    }
  },

  createTeacher: async (teacherData) => {
    try {
      const formData = new FormData();
      formData.append('name[ar]', teacherData.name || "");
      formData.append('name[en]', teacherData.nameEn || teacherData.name || "");
      if (teacherData.phone) formData.append('phone', teacherData.phone);
      if (teacherData.profileImageFile instanceof File || teacherData.profileImageFile instanceof Blob) {
        formData.append('image', teacherData.profileImageFile);
      } else if (teacherData.image && (teacherData.image instanceof File || teacherData.image instanceof Blob)) {
        formData.append('image', teacherData.image);
      }

      const response = await api.post('/api/v1/teachers', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error('API createTeacher failed:', error);
      return { success: false };
    }
  },

  updateTeacher: async (id, teacherData) => {
    try {
      const formData = new FormData();
      if (teacherData.name) formData.append('name[ar]', teacherData.name);
      if (teacherData.nameEn) formData.append('name[en]', teacherData.nameEn);
      if (teacherData.phone) formData.append('phone', teacherData.phone);
      if (teacherData.country) formData.append('country', teacherData.country);

      if (teacherData.profileImageFile instanceof File || teacherData.profileImageFile instanceof Blob) {
        formData.append('image', teacherData.profileImageFile);
      } else if (teacherData.image && (teacherData.image instanceof File || teacherData.image instanceof Blob)) {
        formData.append('image', teacherData.image);
      }

      const response = await api.patch(`/api/v1/teachers/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const item = response.data?.data || response.data;
      return { success: true, data: mapTeacherData(item) };
    } catch (error) {
      console.error('API updateTeacher failed:', error);
      return { success: false };
    }
  },

  patchTeacher: async (id, teacherData) => {
    return teachersApi.updateTeacher(id, teacherData);
  },

  deleteTeacher: async (id) => {
    try {
      const response = await api.delete(`/api/v1/teachers/${id}`);
      return { success: true, message: 'Deleted successfully', data: response.data };
    } catch (error) {
      console.error('API deleteTeacher failed:', error);
      return { success: false };
    }
  }
};