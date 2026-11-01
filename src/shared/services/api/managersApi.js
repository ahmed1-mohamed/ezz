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
      const response = await api.get('/api/v1/permissions', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchPermissions failed:', error);
      throw error;
    }
  },

  fetchPermissionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/permissions/${id}`);
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
    const cleanAdminId = typeof adminId === 'object' && adminId !== null
      ? (adminId.admin_id || adminId.id || adminId._id)
      : adminId;
    const cleanPermId = typeof permissionId === 'object' && permissionId !== null
      ? (permissionId.id || permissionId._id)
      : permissionId;
    const attempts = [
      () => api.patch(`/api/v1/permissions/admin/${cleanAdminId}`, { permissionId: cleanPermId }),
      () => api.patch(`/api/v1/permissions/admin/${cleanAdminId}`, { permission: cleanPermId }),
      () => api.post(`/api/v1/permissions/admin/${cleanAdminId}`, { permissionId: cleanPermId }),
      () => api.post(`/api/v1/permissions/admin/${cleanAdminId}`, { permission: cleanPermId }),
      () => api.put(`/api/v1/permissions/admin/${cleanAdminId}`, { permissionId: cleanPermId }),
      () => api.patch(`/api/v1/admins/${cleanAdminId}`, { permission: cleanPermId }),
    ];
    let lastError = null;
    for (const attempt of attempts) {
      try {
        const response = await attempt();
        return response.data;
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  },

  updateAdminPermission: async (adminId, permissionId) => {
    return managersApi.assignAdminPermission(adminId, permissionId);
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
    const cleanUserId = typeof userId === 'object' && userId !== null
      ? (userId.id || userId._id || userId.user_id)
      : userId;
    const password = typeof data === 'string' ? data : (data?.password || data?.newPassword);
    const confirmPassword = typeof data === 'object' ? (data?.confirmPassword || password) : password;
    const payload = { password, confirmPassword };
    const attempts = [
      () => api.patch(`/api/v1/users/${cleanUserId}/change-password`, payload),
      () => api.patch(`/api/v1/users/${cleanUserId}/change-password`, { password }),
      () => api.put(`/api/v1/users/${cleanUserId}/change-password`, payload),
      () => api.patch(`/api/v1/admins/${cleanUserId}/change-password`, payload),
    ];
    let lastError = null;
    for (const attempt of attempts) {
      try {
        const response = await attempt();
        return response.data;
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  },

  deleteAdminPermission: async (adminId) => {
    const cleanAdminId = typeof adminId === 'object' && adminId !== null
      ? (adminId.admin_id || adminId.id || adminId._id)
      : adminId;
    const attempts = [
      () => api.delete(`/api/v1/permissions/admin/${cleanAdminId}`),
      () => api.delete(`/api/v1/admins/${cleanAdminId}/permissions`),
      () => api.patch(`/api/v1/admins/${cleanAdminId}`, { permission: null }),
    ];
    let lastError = null;
    for (const attempt of attempts) {
      try {
        const response = await attempt();
        return response.data;
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  }
};

