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
      Object.keys(data).forEach(key => {
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
      return { success: false, error: error.response?.data?.message || 'Failed to update profile' };
    }
  },

  changePassword: async (data) => {
    try {
      const response = await api.patch('/api/v1/profile/change-password', data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error changing password:', error);
      return { success: false, error: error.response?.data?.message || 'Failed to change password' };
    }
  },

  createPassword: async (data) => {
    try {
      const response = await api.patch('/api/v1/profile/create-password', data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error creating password:', error);
      return { success: false, error: error.response?.data?.message || 'Failed to create password' };
    }
  }
};
