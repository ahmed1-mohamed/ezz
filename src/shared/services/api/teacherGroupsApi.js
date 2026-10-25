import api from './axiosConfig';

export const teacherGroupsApi = {
  fetchGroupsByStatus: async (status = 'all', params = {}) => {
    let endpoint = '/api/v1/teacher/groups';
    const normalizedStatus = (status || 'all').toLowerCase();
    
    if (normalizedStatus === 'pending') {
      endpoint = '/api/v1/teacher/groups/pending';
    } else if (normalizedStatus === 'active') {
      endpoint = '/api/v1/teacher/groups/active';
    } else if (normalizedStatus === 'stopped') {
      endpoint = '/api/v1/teacher/groups/stopped';
    } else if (normalizedStatus === 'completed') {
      endpoint = '/api/v1/teacher/groups/completed';
    }

    const response = await api.get(endpoint, { params });
    return response.data;
  },

  fetchGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups', { params });
    return response.data;
  },

  fetchPendingGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/pending', { params });
    return response.data;
  },

  fetchActiveGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/active', { params });
    return response.data;
  },

  fetchStoppedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/stopped', { params });
    return response.data;
  },

  fetchCompletedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/completed', { params });
    return response.data;
  },

  fetchGroupDetails: async (id) => {
    const response = await api.get(`/api/v1/teacher/groups/${id}`);
    return response.data;
  },
};
