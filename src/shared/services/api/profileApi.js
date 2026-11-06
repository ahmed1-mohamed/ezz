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
      const arName = (data.nameAr || data['name[ar]'] || (typeof data.name === 'object' ? data.name?.ar : data.name) || '').trim();
      const enName = (data.nameEn || data['name[en]'] || (typeof data.name === 'object' ? data.name?.en : '') || '').trim();
      if (arName) {
        formData.append('name[ar]', arName);
      }
      if (enName) {
        formData.append('name[en]', enName);
      }
      if (data.phone) formData.append('phone', String(data.phone).replace(/\s+/g, ''));
      if (data.country) formData.append('country', data.country);
      if (data.birthDate) formData.append('birthDate', data.birthDate);
      if (data.dateOfBirth) formData.append('dateOfBirth', data.dateOfBirth);
      const imageFile = data.image instanceof File ? data.image : (data.imageFile instanceof File ? data.imageFile : null);
      if (imageFile) formData.append('image', imageFile);
      const response = await api.patch('/api/v1/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        skipGlobalErrorToast: true,
      });
      const updatedProfile = response.data?.data || response.data;
      return { success: true, data: updatedProfile };
    } catch (error) {
      console.error('Error updating profile:', error);
      const data = error.response?.data;
      const errMsg = data?.message || data?.error || error.message;
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
      try {
        const response = await api.patch('/api/v1/profile/change-password', cleanData, {
          skipGlobalErrorToast: true,
        });
        return { success: true, data: response.data };
      } catch (err) {
        if (err.response?.status === 404 && data.userId) {
          const resUser = await api.patch(`/api/v1/users/${data.userId}/change-password`, cleanData, {
            skipGlobalErrorToast: true,
          });
          return { success: true, data: resUser.data };
        }
        throw err;
      }
    } catch (error) {
      console.error('Error changing password:', error);
      const data = error.response?.data;
      const errMsg = data?.message || data?.error || error.message;
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
      try {
        const response = await api.patch('/api/v1/profile/create-password', cleanData, {
          skipGlobalErrorToast: true,
        });
        return { success: true, data: response.data };
      } catch (err) {
        if (err.response?.status === 404 && data.userId) {
          const resUser = await api.patch(`/api/v1/users/${data.userId}/change-password`, cleanData, {
            skipGlobalErrorToast: true,
          });
          return { success: true, data: resUser.data };
        }
        throw err;
      }
    } catch (error) {
      console.error('Error creating password:', error);
      const data = error.response?.data;
      const errMsg = data?.message || data?.error || error.message;
      const formatted = Array.isArray(errMsg) ? errMsg.join(', ') : (errMsg || 'Failed to create password');
      return { success: false, error: formatted };
    }
  },

  linkGoogleAccount: async (googleData = {}) => {
    try {
      const googleId = typeof googleData === 'string' ? googleData : (googleData?.googleId || googleData?.sub);
      const response = await api.post('/api/v1/auth/google/link', { googleId });
      return response.data;
    } catch (error) {
      console.error('Error linking Google account:', error);
      throw error;
    }
  },

  unlinkGoogleAccount: async () => {
    try {
      const response = await api.delete('/api/v1/auth/google/unlink');
      return response.data;
    } catch (error) {
      console.error('Error unlinking Google account:', error);
      throw error;
    }
  },
};

export default profileApi;
