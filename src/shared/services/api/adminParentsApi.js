import api from './axiosConfig';

const buildParentFormData = (data = {}) => {
  const fd = new FormData();
  if (data.name?.ar) fd.append('name[ar]', data.name.ar);
  if (data.name?.en) fd.append('name[en]', data.name.en);
  ['email', 'phone', 'country', 'password', 'confirmPassword'].forEach((key) => {
    if (data[key]) fd.append(key, data[key]);
  });
  if (data.imageFile instanceof File) fd.append('image', data.imageFile);
  return fd;
};

export const adminParentsApi = {
  fetchParents: async (params = {}) => {
    const response = await api.get('/api/v1/parents/localized/all', { params: { limit: 1000, ...params } });
    return response.data;
  },

  fetchParentById: async (id) => {
    const response = await api.get(`/api/v1/parents/${id}`, { skipCache: true });
    return response.data;
  },

  createParent: async (parentData) => {
    const response = await api.post('/api/v1/parents', buildParentFormData(parentData), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  updateParent: async (id, parentData) => {
    const response = await api.patch(`/api/v1/parents/${id}`, buildParentFormData(parentData), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  changeParentPassword: async (userId, { password, confirmPassword }) => {
    const response = await api.patch(`/api/v1/users/${userId}/change-password`, { password, confirmPassword });
    return response.data;
  },

  toggleParentActive: async (userId) => {
    const response = await api.patch(`/api/v1/users/${userId}/toggle-active`);
    return response.data;
  },

  deleteParent: async (id) => {
    const response = await api.delete(`/api/v1/parents/${id}`);
    return response.data;
  },
};
