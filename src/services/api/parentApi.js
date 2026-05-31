import { mockTeachers, mockPastRatings, mockDashboardStats, mockChildren } from '../mockData/parentMock';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const parentApi = {
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

  submitRating: async () => {
    await delay(800);
    return { data: { success: true, message: 'Rating submitted successfully' } };
  }
};
