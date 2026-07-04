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
  },

  fetchPrivateStatistics: async () => {
    try {
      const response = await api.get('/api/v1/statistics/private');
      return response.data;
    } catch (error) {
      console.error('Error fetching private statistics:', error);
      throw error;
    }
  },

  updatePrivateStatistics: async (statsData) => {
    try {
      const response = await api.patch('/api/v1/statistics/private', statsData);
      return response.data;
    } catch (error) {
      console.error('Error updating private statistics:', error);
      throw error;
    }
  },

  fetchEliteTeachers: async (params) => {
    try {
      const response = await api.get('/api/v1/elite-teachers/private', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching elite teachers:', error);
      throw error;
    }
  },

  fetchSystemTeachers: async () => {
    try {
      const response = await api.get('/api/v1/teachers/localized/all', {
        params: { limit: 1000 }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching system teachers:', error);
      throw error;
    }
  },

  fetchSystemStudents: async () => {
    try {
      const response = await api.get('/api/v1/students/localized/all', {
        params: { limit: 1000 }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching system students:', error);
      throw error;
    }
  },

  fetchEliteTeacherById: async (id) => {
    try {
      const response = await api.get(`/api/v1/elite-teachers/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching elite teacher with id ${id}:`, error);
      throw error;
    }
  },

  addEliteTeacher: async (teacherData) => {
    try {
      const response = await api.post('/api/v1/elite-teachers/private', teacherData);
      return response.data;
    } catch (error) {
      console.error('Error adding elite teacher:', error);
      throw error;
    }
  },

  updateEliteTeacher: async (id, teacherData) => {
    try {
      const response = await api.patch(`/api/v1/elite-teachers/private/${id}`, teacherData);
      return response.data;
    } catch (error) {
      console.error(`Error updating elite teacher with id ${id}:`, error);
      throw error;
    }
  },

  deleteEliteTeacher: async (id) => {
    try {
      const response = await api.delete(`/api/v1/elite-teachers/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting elite teacher with id ${id}:`, error);
      throw error;
    }
  },

  fetchFeaturedStudents: async (params) => {
    try {
      const response = await api.get('/api/v1/featured-students/private', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching featured students:', error);
      throw error;
    }
  },

  fetchFeaturedStudentById: async (id) => {
    try {
      const response = await api.get(`/api/v1/featured-students/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching featured student with id ${id}:`, error);
      throw error;
    }
  },

  addFeaturedStudent: async (studentData) => {
    try {
      const response = await api.post('/api/v1/featured-students/private', studentData);
      return response.data;
    } catch (error) {
      console.error('Error adding featured student:', error);
      throw error;
    }
  },

  updateFeaturedStudent: async (id, studentData) => {
    try {
      const response = await api.patch(`/api/v1/featured-students/private/${id}`, studentData);
      return response.data;
    } catch (error) {
      console.error(`Error updating featured student with id ${id}:`, error);
      throw error;
    }
  },

  deleteFeaturedStudent: async (id) => {
    try {
      const response = await api.delete(`/api/v1/featured-students/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting featured student with id ${id}:`, error);
      throw error;
    }
  },

  fetchContactUs: async () => {
    try {
      const response = await api.get('/api/v1/contact-us/private');
      return response.data;
    } catch (error) {
      console.error('Error fetching contact-us info:', error);
      throw error;
    }
  },

  updateContactUs: async (contactData) => {
    try {
      const response = await api.patch('/api/v1/contact-us/private', contactData);
      return response.data;
    } catch (error) {
      console.error('Error updating contact-us info:', error);
      throw error;
    }
  },

  fetchPrivateTestimonials: async (params) => {
    try {
      const response = await api.get('/api/v1/testimonials/private', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching private testimonials:', error);
      throw error;
    }
  },

  addPrivateTestimonial: async (testimonialData) => {
    try {
      const isFormData = testimonialData instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.post('/api/v1/testimonials/private', testimonialData, { headers });
      return response.data;
    } catch (error) {
      console.error('Error adding private testimonial:', error);
      throw error;
    }
  },

  updatePrivateTestimonial: async (id, testimonialData) => {
    try {
      const isFormData = testimonialData instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.patch(`/api/v1/testimonials/private/${id}`, testimonialData, { headers });
      return response.data;
    } catch (error) {
      console.error(`Error updating private testimonial with id ${id}:`, error);
      throw error;
    }
  },

  deletePrivateTestimonial: async (id) => {
    try {
      const response = await api.delete(`/api/v1/testimonials/private/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting private testimonial with id ${id}:`, error);
      throw error;
    }
  }
};
