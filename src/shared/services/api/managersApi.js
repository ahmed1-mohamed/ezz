import api from './axiosConfig';

export const managersApi = {
  fetchSupervisors: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/admins/localized/all', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchSupervisors failed:', error);
      throw error;
    }
  },

  fetchActiveSupervisors: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/admins/localized/active', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchActiveSupervisors failed:', error);
      throw error;
    }
  },

  fetchStoppedSupervisors: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/admins/localized/stopped', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchStoppedSupervisors failed:', error);
      throw error;
    }
  },

  fetchSupervisorById: async (id) => {
    try {
      const response = await api.get(`/api/v1/admins/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchSupervisorById failed:', error);
      throw error;
    }
  },

  fetchRawAdminById: async (id) => {
    try {
      const response = await api.get(`/api/v1/admins/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchRawAdminById failed:', error);
      throw error;
    }
  },

  createSupervisor: async (supervisorData) => {
    try {
      const formData = new FormData();
      Object.keys(supervisorData).forEach(key => {
        const val = supervisorData[key];
        if (val !== undefined && val !== null && val !== '') {
          if (['image', 'photo', 'photoUrl', 'profileImage'].includes(key) && typeof val === 'string') {
            return;
          }
          formData.append(key, val);
        }
      });

      const response = await api.post('/api/v1/admins', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('API createSupervisor failed:', error);
      throw error;
    }
  },

  updateSupervisor: async (id, supervisorData) => {
    try {
      const formData = new FormData();
      Object.keys(supervisorData).forEach(key => {
        const val = supervisorData[key];
        if (val !== undefined && val !== null && val !== '') {
          if (['image', 'photo', 'photoUrl', 'profileImage'].includes(key) && typeof val === 'string') {
            return;
          }
          formData.append(key, val);
        }
      });
      const response = await api.patch(`/api/v1/admins/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('API updateSupervisor failed:', error);
      throw error;
    }
  },

  deleteSupervisor: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admins/${id}`);
      return response.data;
    } catch (error) {
      console.error('API deleteSupervisor failed:', error);
      throw error;
    }
  },

  fetchRoles: async () => {
    return {
      success: true,
      data: [
        { id: 1, name: 'مشرف عام', nameEn: 'General Supervisor', icon: 'crown' },
        { id: 2, name: 'مدير', nameEn: 'Manager', icon: 'shield' },
      ]
    };
  },

  fetchPermissions: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/permissions/localized/all', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchPermissions failed:', error);
      throw error;
    }
  },

  fetchPermissionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/permissions/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchPermissionById failed:', error);
      throw error;
    }
  },

  createPermission: async (permissionData) => {
    try {
      const response = await api.post(`/api/v1/permissions`, permissionData);
      return response.data;
    } catch (error) {
      console.error('API createPermission failed:', error);
      throw error;
    }
  },

  updatePermission: async (id, permissionData) => {
    try {
      const response = await api.patch(`/api/v1/permissions/${id}`, permissionData);
      return response.data;
    } catch (error) {
      console.error('API updatePermission failed:', error);
      throw error;
    }
  },

  deletePermission: async (id) => {
    try {
      const response = await api.delete(`/api/v1/permissions/${id}`);
      return response.data;
    } catch (error) {
      console.error('API deletePermission failed:', error);
      throw error;
    }
  },

  assignAdminPermission: async (adminId, permissionId) => {
    try {
      const response = await api.post(`/api/v1/permissions/admin/${adminId}`, { permissionId });
      return response.data;
    } catch (error) {
      console.error('API assignAdminPermission failed:', error);
      throw error;
    }
  },

  updateAdminPermission: async (adminId, permissionId) => {
    try {
      const response = await api.patch(`/api/v1/permissions/admin/${adminId}`, { permissionId });
      return response.data;
    } catch (error) {
      console.error('API updateAdminPermission failed:', error);
      throw error;
    }
  },

  fetchRolesPermissions: async () => {
    return {
      success: true,
      data: {}
    };
  },

  toggleActiveUser: async (id) => {
    try {
      const response = await api.patch(`/api/v1/users/${id}/toggle-active`);
      return response.data;
    } catch (error) {
      console.error('API toggleActiveUser failed:', error);
      throw error;
    }
  },

  changeUserPassword: async (userId, data) => {
    try {
      const response = await api.patch(`/api/v1/users/${userId}/change-password`, data);
      return response.data;
    } catch (error) {
      console.error('API changeUserPassword failed:', error);
      throw error;
    }
  },

  deleteAdminPermission: async (adminId) => {
    try {
      const response = await api.delete(`/api/v1/permissions/admin/${adminId}`);
      return response.data;
    } catch (error) {
      console.error('API deleteAdminPermission failed:', error);
      throw error;
    }
  }
};

