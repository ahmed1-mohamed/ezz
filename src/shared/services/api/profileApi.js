import api from './axiosConfig';

export const profileApi = {
  fetchProfile: async () => {
    try {
      const response = await api.get('/api/v1/profile');
      const profileData = response.data?.data || response.data;
      return { success: true, data: profileData };
    } catch (error) {
      console.error('Error fetching profile:', error);
      return { success: false, error: error.response?.data?.message || 'Failed to fetch profile' };
    }
  },

  updateProfile: async (data) => {
    try {
      const formData = new FormData();
      const arName = (data.nameAr || (typeof data.name === 'object' ? data.name?.ar : data.name) || '').trim();
      const enName = (data.nameEn || (typeof data.name === 'object' ? data.name?.en : '') || '').trim() || arName;
      const finalArName = arName || enName;

      if (finalArName) {
        formData.append('name[ar]', finalArName);
      }
      if (enName) {
        formData.append('name[en]', enName);
      }

      Object.keys(data).forEach((key) => {
        if (['nameAr', 'nameEn', 'name'].includes(key)) {
          return;
        }
        const val = data[key];
        if (val !== undefined && val !== null && val !== '') {
          if (['image', 'photo', 'photoUrl', 'profileImage'].includes(key) && typeof val === 'string') {
            return;
          }
          formData.append(key, val);
        }
      });

      const response = await api.patch('/api/v1/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const updatedProfile = response.data?.data || response.data;
      return { success: true, data: updatedProfile };
    } catch (error) {
      console.error('Error updating profile:', error);
      const errMsg = error.response?.data?.message;
      const formatted = Array.isArray(errMsg) ? errMsg.join(', ') : (errMsg || 'Failed to update profile');
      return { success: false, error: formatted };
    }
  },

  changePassword: async (data) => {
    try {
      const cleanData = {
        password: data.password || data.newPassword || data.new,
        confirmPassword: data.confirmPassword || data.confirm || data.password,
      };
      if (data.currentPassword || data.current) {
        cleanData.currentPassword = data.currentPassword || data.current;
      }
      if (data.phone && typeof data.phone === 'string' && data.phone.trim()) {
        cleanData.phone = data.phone.trim();
      }
      if (data.country && typeof data.country === 'string' && data.country.trim()) {
        cleanData.country = data.country.trim();
      }

      try {
        const response = await api.patch('/api/v1/profile/change-password', cleanData);
        return { success: true, data: response.data };
      } catch (err) {
        if (data.userId) {
          const resUser = await api.patch(`/api/v1/users/${data.userId}/change-password`, cleanData);
          return { success: true, data: resUser.data };
        }
        throw err;
      }
    } catch (error) {
      console.error('Error changing password:', error);
      const errMsg = error.response?.data?.message;
      const formatted = Array.isArray(errMsg) ? errMsg.join(', ') : (errMsg || 'Failed to change password');
      return { success: false, error: formatted };
    }
  },

  createPassword: async (data) => {
    try {
      const cleanData = {
        password: data.password || data.newPassword || data.new,
        confirmPassword: data.confirmPassword || data.confirm || data.password,
      };
      if (data.phone && typeof data.phone === 'string' && data.phone.trim()) {
        cleanData.phone = data.phone.trim();
      }
      if (data.country && typeof data.country === 'string' && data.country.trim()) {
        cleanData.country = data.country.trim();
      }

      try {
        const response = await api.patch('/api/v1/profile/create-password', cleanData);
        return { success: true, data: response.data };
      } catch (err) {
        if (data.userId) {
          const resUser = await api.patch(`/api/v1/users/${data.userId}/change-password`, cleanData);
          return { success: true, data: resUser.data };
        }
        throw err;
      }
    } catch (error) {
      console.error('Error creating password:', error);
      const errMsg = error.response?.data?.message;
      const formatted = Array.isArray(errMsg) ? errMsg.join(', ') : (errMsg || 'Failed to create password');
      return { success: false, error: formatted };
    }
  }
};
