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
      const response = await api.post('/api/v1/auth/google', data);
      return response.data;
    } catch (error) {
      console.error('Error during google login:', error);
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
