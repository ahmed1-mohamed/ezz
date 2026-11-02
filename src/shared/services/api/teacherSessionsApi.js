import api from './axiosConfig';

export const teacherSessionsApi = {
  fetchSessions: async (params = {}) => {
    const response = await api.get('/api/v1/teacher/sessions', {
      params,
      skipLang: true,
    });
    return response.data;
  },

  fetchSessionsByStatus: async (status = 'all', params = {}) => {
    let endpoint = '/api/v1/teacher/sessions';
    const norm = (status || 'all').toLowerCase();
    if (norm === 'scheduled' || norm === 'مجدولة') {
      endpoint = '/api/v1/teacher/sessions/scheduled';
    } else if (norm === 'live' || norm === 'in_progress' || norm === 'in-progress' || norm === 'مباشرة') {
      endpoint = '/api/v1/teacher/sessions/live';
    } else if (norm === 'completed' || norm === 'مكتملة') {
      endpoint = '/api/v1/teacher/sessions/completed';
    } else if (norm === 'cancelled' || norm === 'ملغاة') {
      endpoint = '/api/v1/teacher/sessions/cancelled';
    }
    try {
      const response = await api.get(endpoint, { params, skipLang: true });
      return response.data;
    } catch (err) {
      if (endpoint !== '/api/v1/teacher/sessions') {
        const queryParams = { ...params };
        if (norm !== 'all') {
          queryParams.status = norm === 'live' ? 'in_progress' : norm;
        }
        const fallback = await api.get('/api/v1/teacher/sessions', {
          params: queryParams,
          skipLang: true,
        });
        return fallback.data;
      }
      throw err;
    }
  },

  // GET /teacher/sessions/scheduled?group={groupId} — scheduled and rescheduled sessions of a group
  fetchScheduledSessions: async (groupId) => {
    const response = await api.get('/api/v1/teacher/sessions/scheduled', {
      params: { group: groupId, limit: 100 },
    });
    const data = response.data?.data ?? response.data;
    return Array.isArray(data) ? data : [];
  },

  fetchSessionDetails: async (id) => {
    const response = await api.get(`/api/v1/teacher/sessions/${id}`, {
      skipLang: true,
    });
    return response.data?.data || response.data;
  },

  // GET /api/v1/teacher/sessions/next?offset={offset}
  fetchNextSessionWithOffset: async (offset = 0) => {
    const response = await api.get('/api/v1/teacher/sessions/next', {
      params: { offset },
      skipLang: true,
    });
    return response.data?.data ?? response.data ?? null;
  },

  // GET /api/v1/teacher/sessions/{id}/join
  fetchSessionJoinData: async (sessionId) => {
    const response = await api.get(`/api/v1/teacher/sessions/${sessionId}/join`, {
      skipLang: true,
    });
    return response.data?.data ?? response.data ?? null;
  },

  // GET /api/v1/teacher/sessions/completed/pending-evaluations?offset={offset}
  fetchCompletedPendingEvaluations: async (offset = 0) => {
    const response = await api.get('/api/v1/teacher/sessions/completed/pending-evaluations', {
      params: { offset },
      skipLang: true,
    });
    return response.data ?? null;
  },
};
