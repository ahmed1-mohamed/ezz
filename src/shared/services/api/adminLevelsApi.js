import api from './axiosConfig';

export const adminLevelsApi = {
  fetchLevels: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/student-levels/private/localized/all', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchLevels failed:', error);
      throw error;
    }
  },

  fetchLevelById: async (id) => {
    try {
      const response = await api.get(`/api/v1/student-levels/private/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchLevelById failed:', error);
      throw error;
    }
  },

  createLevel: async (payload) => {
    try {
      const response = await api.post('/api/v1/student-levels/private', payload);
      return response.data;
    } catch (error) {
      console.error('API createLevel failed:', error);
      throw error;
    }
  },

  updateLevel: async (id, payload) => {
    try {
      const response = await api.patch(`/api/v1/student-levels/private/${id}`, payload);
      return response.data;
    } catch (error) {
      console.error('API updateLevel failed:', error);
      throw error;
    }
  },

  deleteLevel: async (id) => {
    try {
      const response = await api.delete(`/api/v1/student-levels/private/${id}`);
      return response.data;
    } catch (error) {
      console.error('API deleteLevel failed:', error);
      throw error;
    }
  }
};
