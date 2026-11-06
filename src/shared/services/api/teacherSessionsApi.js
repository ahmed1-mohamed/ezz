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

  fetchNextSessionWithOffset: async (offset = 0) => {
    const response = await api.get('/api/v1/teacher/sessions/next', {
      params: { offset },
      skipLang: true,
    });
    return response.data?.data ?? response.data ?? null;
  },

  fetchSessionJoinData: async (sessionId) => {
    let raw;
    try {
      const response = await api.get(`/api/v1/teacher/sessions/${sessionId}/join`, {
        skipLang: true,
      });
      raw = response.data?.data ?? response.data ?? null;
    } catch {
      try {
        const detailRes = await api.get(`/api/v1/teacher/sessions/${sessionId}`, {
          skipLang: true,
        });
        raw = detailRes.data?.data ?? detailRes.data ?? null;
      } catch {
        raw = null;
      }
    }
    if (!raw) return null;
    const startUrl =
      raw.startUrl ||
      raw.start_url ||
      raw.zoomStartUrl ||
      raw.zoom_start_url ||
      raw.zoom?.start_url ||
      raw.zoom?.startUrl ||
      raw.meetingUrl ||
      null;
    const joinUrl =
      raw.joinUrl ||
      raw.join_url ||
      raw.zoomJoinUrl ||
      raw.zoom_join_url ||
      raw.zoom?.join_url ||
      raw.zoom?.joinUrl ||
      raw.meetingUrl ||
      null;
    const meetingId =
      raw.meetingId ||
      raw.meetingNumber ||
      raw.meeting_id ||
      raw.zoom?.id ||
      raw.zoom?.meetingId ||
      null;
    const passcode =
      raw.passcode ||
      raw.password ||
      raw.zoom?.password ||
      null;
    const zak =
      raw.zak ||
      raw.zakToken ||
      raw.zak_token ||
      raw.zoom?.zak ||
      null;
    const sdkSignature =
      raw.sdkSignature ||
      raw.signature ||
      raw.sdk_signature ||
      raw.zoom?.signature ||
      null;
    const sdkKey =
      raw.sdkKey ||
      raw.sdk_key ||
      raw.zoom?.sdkKey ||
      null;
    const effectiveStartUrl = (() => {
      if (!startUrl || !zak) return startUrl;
      try {
        const parsed = new URL(startUrl);
        parsed.searchParams.set('zak', zak);
        return parsed.toString();
      } catch {
        return startUrl;
      }
    })();
    return {
      ...raw,
      startUrl: effectiveStartUrl,
      joinUrl,
      meetingId,
      passcode,
      zak,
      sdkSignature,
      sdkKey,
      role: raw.role !== undefined ? Number(raw.role) : 1,
      canJoinNow: raw.canJoinNow !== undefined ? Boolean(raw.canJoinNow) : true,
      duration: raw.duration || raw.durationMinutes || 90,
    };
  },

  fetchCompletedPendingEvaluations: async (offset = 0) => {
    const response = await api.get('/api/v1/teacher/sessions/completed/pending-evaluations', {
      params: { offset },
      skipLang: true,
    });
    return response.data ?? null;
  },
};
