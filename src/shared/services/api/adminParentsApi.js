import api from './axiosConfig';


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
      let body = parentData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      if (isFormData && body && typeof body.delete === 'function') {
        body.delete('id');
      }

      if (!isFormData && typeof parentData === 'object' && parentData !== null) {
        body = { ...parentData };
        const keysToRemove = [
          'id', '_id', 'parent_id', 'user_id', 'userId',
          'createdAt', 'updatedAt', '__v',
          'phonePrefix', 'profileImage', 'profileImageFile', 'image', 'photo', 'photoUrl'
        ];
        keysToRemove.forEach((k) => delete body[k]);
        if (body.email === '' || body.email === undefined) {
          delete body.email;
        }
        if (body.password === '********' || !body.password) {
          delete body.password;
          delete body.confirmPassword;
        }
      }

      const response = await api.patch(`/api/v1/parents/${id}`, body, { headers });
      return response.data;
    } catch (error) {
      console.error('API updateParent failed:', error);
      throw error;
    }
  },

  changeParentPassword: async (userId, data) => {
    try {
      const response = await api.patch(`/api/v1/users/${userId}/change-password`, data);
      return response.data;
    } catch (error) {
      console.error('API changeParentPassword failed:', error);
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
      console.error('API sendMessage failed:', error);
      throw error;
    }
  },

  suspendParent: async (parentId) => {
    try {
      const response = await api.post(`/api/v1/parents/${parentId}/suspend`);
      return response.data;
    } catch (error) {
      console.error('API suspendParent failed:', error);
      throw error;
    }
  },
};
