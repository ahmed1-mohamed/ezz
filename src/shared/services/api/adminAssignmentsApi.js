import api from './axiosConfig';

export const adminAssignmentsApi = {
  fetchStats: async () => {
    try {
      const response = await api.get('/api/v1/admin/assignments/stats');
      return { success: true, data: response.data?.data || response.data };
    } catch {
      return { success: false, data: null };
    }
  },

  fetchAssignments: async (search = '') => {
    try {
      const response = await api.get('/api/v1/admin/assignments', {
        params: search ? { search } : undefined,
      });
      const list = response.data?.data?.data || response.data?.data || response.data || [];
      return { success: true, data: Array.isArray(list) ? list : [] };
    } catch {
      return { success: true, data: [] };
    }
  },

  deleteAssignment: async (id) => {
    try {
      await api.delete(`/api/v1/admin/assignments/${id}`);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to delete assignment' };
    }
  },
};
