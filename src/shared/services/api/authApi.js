import api from './axiosConfig';

export const authApi = {
  signup: async (signupData) => {
    try {
      const response = await api.post('/api/v1/auth/signup', signupData);
      return response.data;
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await api.post('/api/v1/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  googleLogin: async (data) => {
    try {
      const googleId = typeof data === 'string' ? data : (data?.googleId || data?.sub);
      const response = await api.post('/api/v1/auth/google/login', { googleId });
      return response.data;
    } catch (error) {
      console.error('Error during google login:', error);
      throw error;
    }
  },

  linkGoogle: async (data) => {
    try {
      const googleId = typeof data === 'string' ? data : (data?.googleId || data?.sub);
      const response = await api.post('/api/v1/auth/google/link', { googleId });
      return response.data;
    } catch (error) {
      console.error('Error during google link:', error);
      throw error;
    }
  },

  unlinkGoogle: async () => {
    try {
      const response = await api.delete('/api/v1/auth/google/unlink');
      return response.data;
    } catch (error) {
      console.error('Error during google unlink:', error);
      throw error;
    }
  },

  forgetPassword: async (data) => {
    try {
      const response = await api.post('/api/v1/auth/forget-password', data);
      return response.data;
    } catch (error) {
      console.error('Error requesting password reset:', error);
      throw error;
    }
  },

  verifyCode: async (data) => {
    try {
      const response = await api.post('/api/v1/auth/verify-code', data);
      return response.data;
    } catch (error) {
      console.error('Error verifying code:', error);
      throw error;
    }
  },

  resetPassword: async (data) => {
    try {
      const response = await api.patch('/api/v1/auth/reset-password', data);
      return response.data;
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await api.post('/api/v1/auth/logout');
    } catch (error) {
      console.warn('Logout API call failed (session may already be expired):', error?.response?.status);
    }
  },

  fetchCountries: async (params) => {
    try {
      const response = await api.get('/api/v1/countries', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching countries for auth:', error);
      throw error;
    }
  }
};

export default authApi;
