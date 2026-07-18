import api from './axiosConfig';

export const adminCurriculaApi = {
  fetchCurricula: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/curricula/private/localized/all', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchCurricula failed:', error);
      throw error;
    }
  },

  fetchPrivateCurricula: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/curricula/private', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchPrivateCurricula failed:', error);
      throw error;
    }
  },

  fetchCurriculumById: async (id) => {
    try {
      const response = await api.get(`/api/v1/curricula/private/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchCurriculumById failed:', error);
      throw error;
    }
  },

  fetchCurriculumByIdRaw: async (id) => {
    try {
      const response = await api.get(`/api/v1/curricula/private/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchCurriculumByIdRaw failed:', error);
      throw error;
    }
  },

  createCurriculum: async (payload) => {
    try {
      const isFormData = payload instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.post('/api/v1/curricula/private', payload, { headers });
      return response.data;
    } catch (error) {
      console.error('API createCurriculum failed:', error);
      throw error;
    }
  },

  updateCurriculum: async (id, payload) => {
    try {
      const isFormData = payload instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.patch(`/api/v1/curricula/private/${id}`, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('API updateCurriculum failed:', error);
      throw error;
    }
  },

  deleteCurriculum: async (id) => {
    try {
      const response = await api.delete(`/api/v1/curricula/private/${id}`);
      return response.data;
    } catch (error) {
      console.error('API deleteCurriculum failed:', error);
      throw error;
    }
  },

  // Levels
  addLevel: async (curriculumId, payload) => {
    try {
      const body = { name: { ar: payload.name?.ar, en: payload.name?.en } };
      const response = await api.post(`/api/v1/curricula/private/${curriculumId}/levels`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('API addLevel failed:', error);
      throw error;
    }
  },
  updateLevel: async (curriculumId, levelId, payload) => {
    try {
      const body = { name: { ar: payload.name?.ar, en: payload.name?.en } };
      const response = await api.patch(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('API updateLevel failed:', error);
      throw error;
    }
  },
  deleteLevel: async (curriculumId, levelId) => {
    try {
      const response = await api.delete(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}`);
      return response.data;
    } catch (error) {
      console.error('API deleteLevel failed:', error);
      throw error;
    }
  },

  // Units
  addUnit: async (curriculumId, levelId, payload) => {
    try {
      const body = { name: { ar: payload.name?.ar, en: payload.name?.en } };
      console.log('=== ADD UNIT DEBUG ===');
      console.log('URL:', `/api/v1/curricula/private/${curriculumId}/levels/${levelId}/units`);
      console.log('Body:', JSON.stringify(body));
      console.log('curriculumId:', curriculumId, 'levelId:', levelId);
      const response = await api.post(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}/units`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('API addUnit failed:', error);
      throw error;
    }
  },
  updateUnit: async (curriculumId, levelId, unitId, payload) => {
    try {
      const body = { name: { ar: payload.name?.ar, en: payload.name?.en } };
      const response = await api.patch(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}/units/${unitId}`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('API updateUnit failed:', error);
      throw error;
    }
  },
  deleteUnit: async (curriculumId, levelId, unitId) => {
    try {
      const response = await api.delete(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}/units/${unitId}`);
      return response.data;
    } catch (error) {
      console.error('API deleteUnit failed:', error);
      throw error;
    }
  },

  // Files
  addFile: async (curriculumId, levelId, unitId, payload) => {
    try {
      const isFormData = payload instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.post(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}/units/${unitId}/files`, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('API addFile failed:', error);
      throw error;
    }
  },
  deleteFile: async (curriculumId, levelId, unitId, fileId) => {
    try {
      const response = await api.delete(`/api/v1/curricula/private/${curriculumId}/levels/${levelId}/units/${unitId}/files/${fileId}`);
      return response.data;
    } catch (error) {
      console.error('API deleteFile failed:', error);
      throw error;
    }
  }
};
