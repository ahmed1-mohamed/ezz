import api from './axiosConfig';

export const parentTrialSessionsApi = {
  /**
   * GET /api/v1/parent/trial-sessions
   * Get Parent Trial Sessions & Children Eligibility
   */
  fetchTrialSessionsAndEligibility: async () => {
    const response = await api.get('/api/v1/parent/trial-sessions', {
      skipGlobalErrorToast: true,
    });
    return response.data;
  },

  /**
   * GET /api/v1/parent/trial-sessions/curricula
   * Get Curricula available for Trial Sessions
   */
  fetchTrialCurricula: async () => {
    const response = await api.get('/api/v1/parent/trial-sessions/curricula', {
      skipGlobalErrorToast: true,
    });
    return response.data;
  },

  /**
   * POST /api/v1/parent/trial-sessions
   * Request Trial Session for a Child
   * @param {{ studentId: string, curriculumId: string, notes?: string, teacherId?: string }} payload
   */
  requestTrialSession: async (payload) => {
    const response = await api.post('/api/v1/parent/trial-sessions', payload);
    return response.data;
  },

  /**
   * GET /api/v1/parent/trial-sessions/{id}
   * Get Trial Session Request Details
   */
  fetchTrialSessionDetails: async (id) => {
    const response = await api.get(`/api/v1/parent/trial-sessions/${id}`, {
      skipGlobalErrorToast: true,
    });
    return response.data;
  },
};

