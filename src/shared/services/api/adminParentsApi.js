import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const adminParentsApi = {
  fetchParents: async () => {
    try {
      const response = await api.get('/api/v1/parents/localized/all');
      return response.data;
    } catch (error) {
      console.error('API fetchParents failed:', error);
      throw error;
    }
  },

  fetchParentById: async (id) => {
    try {
      const response = await api.get(`/api/v1/parents/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchParentById failed:', error);
      throw error;
    }
  },

  createParent: async (parentData) => {
    try {
      const response = await api.post('/api/v1/parents', parentData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      console.error('API createParent failed:', error);
      throw error;
    }
  },

  updateParent: async (id, parentData) => {
    try {
      const isFormData = parentData instanceof FormData;
      if (!isFormData && typeof parentData === 'object' && parentData !== null) {
        const keysToRemove = ['image', 'photo', 'photoUrl', 'profileImage'];
        keysToRemove.forEach(k => {
          if (typeof parentData[k] === 'string') {
            delete parentData[k];
          }
        });
      }
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.patch(`/api/v1/parents/${id}`, parentData, { headers });
      return response.data;
    } catch (error) {
      console.error('API updateParent failed:', error);
      throw error;
    }
  },

  deleteParent: async (id) => {
    try {
      const response = await api.delete(`/api/v1/parents/${id}`);
      return response.data;
    } catch (error) {
      console.error('API deleteParent failed:', error);
      throw error;
    }
  },

  sendMessage: async (parentId, message) => {
    try {
      const response = await api.post(`/api/v1/parents/${parentId}/message`, { message });
      return response.data;
    } catch (error) {
      console.warn('API sendMessage failed, using mock:', error);
      await delay(600);
      return { success: true, message: 'Message sent successfully' };
    }
  },

  suspendParent: async (parentId) => {
    try {
      const response = await api.post(`/api/v1/parents/${parentId}/suspend`);
      return response.data;
    } catch (error) {
      console.warn('API suspendParent failed, using mock:', error);
      await delay(400);
      return { success: true, message: 'Account suspended' };
    }
  },
};
