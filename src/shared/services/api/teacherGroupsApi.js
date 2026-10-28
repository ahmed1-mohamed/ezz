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

    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;

    const response = await api.get(endpoint, {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },

  fetchGroups: async (params = {}) => {
    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;

    const response = await api.get('/api/v1/teacher/groups', {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },

  fetchPendingGroups: async (params = {}) => {
    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;

    const response = await api.get('/api/v1/teacher/groups/pending', {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },

  fetchActiveGroups: async (params = {}) => {
    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;

    const response = await api.get('/api/v1/teacher/groups/active', {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },

  fetchStoppedGroups: async (params = {}) => {
    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;

    const response = await api.get('/api/v1/teacher/groups/stopped', {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },

  fetchCompletedGroups: async (params = {}) => {
    const cleanParams = { ...params };
    delete cleanParams.forceRefresh;
    delete cleanParams.skipCache;

    const response = await api.get('/api/v1/teacher/groups/completed', {
      forceRefresh: true,
      skipCache: true,
      params: cleanParams,
    });
    return response.data;
  },

  fetchGroupDetails: async (id) => {
    const response = await api.get(`/api/v1/teacher/groups/${id}`, {
      forceRefresh: true,
      skipCache: true,
    });
    return response.data;
  },
};
