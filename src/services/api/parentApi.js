import api from './axiosConfig';
import { mockTeachers, mockPastRatings, mockDashboardStats, mockChildren } from '../mockData/parentMock';

// Simulated delay for mock data
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const parentApi = {
  // Use mock data for now. Later replace with: return api.get('/parent/stats');
  fetchDashboardStats: async () => {
    await delay(500);
    return { data: mockDashboardStats };
  },

  fetchChildren: async () => {
    await delay(500);
    return { data: mockChildren };
  },

  fetchTeachersList: async () => {
    await delay(500);
    return { data: mockTeachers };
  },

  fetchPastRatings: async () => {
    await delay(500);
    return { data: mockPastRatings };
  },

  submitRating: async (ratingData) => {
    await delay(800);
    // Simulate successful API response
    return { data: { success: true, message: 'Rating submitted successfully' } };
  }
};
