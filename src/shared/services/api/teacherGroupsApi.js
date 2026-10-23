import api from './axiosConfig';

/**
 * Teacher Groups API Service
 * Handles fetching teacher groups list with different statuses and single group details.
 */
export const teacherGroupsApi = {
  /**
   * Fetch teacher groups by status
   * @param {string} status 'all' | 'pending' | 'active' | 'stopped' | 'completed'
   * @param {object} params query parameters { page, limit, search }
   */
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

  /**
   * Fetch all teacher groups
   */
  fetchGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups', { params });
    return response.data;
  },

  /**
   * Fetch pending teacher groups
   */
  fetchPendingGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/pending', { params });
    return response.data;
  },

  /**
   * Fetch active teacher groups
   */
  fetchActiveGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/active', { params });
    return response.data;
  },

  /**
   * Fetch stopped teacher groups
   */
  fetchStoppedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/stopped', { params });
    return response.data;
  },

  /**
   * Fetch completed teacher groups
   */
  fetchCompletedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/groups/completed', { params });
    return response.data;
  },

  /**
   * Fetch single teacher group details by ID
   * @param {string} id Group ID
   */
  fetchGroupDetails: async (id) => {
    const response = await api.get(`/api/v1/teacher/groups/${id}`);
    return response.data;
  },
};
