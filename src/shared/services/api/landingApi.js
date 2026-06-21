import api from './axiosConfig';

export const landingApi = {
  fetchLandingPageData: async (lang) => {
    try {
      const response = await api.get('/api/v1/landing-page', {
        params: { lang }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching landing page data:', error);
      throw error;
    }
  },

  fetchPackagesAndFaqs: async (lang) => {
    try {
      const response = await api.get('/api/v1/packages-faqs/public', {
        params: { lang }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching packages and FAQs:', error);
      throw error;
    }
  },

  fetchContactInfo: async () => {
    try {
      const response = await api.get('/api/v1/contact-us/public');
      return response.data;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      throw error;
    }
  },

  sendMessage: async (messageData) => {
    try {
      const response = await api.post('/api/v1/messages/public', messageData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  fetchCountries: async (params) => {
    try {
      const response = await api.get('/api/v1/countries', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  }
};
