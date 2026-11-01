import api from './axiosConfig';

export const formatRewardIcon = (icon) => {
  if (!icon) return '🎁';
  if (typeof icon === 'object' && icon !== null) {
    icon = icon.ar || icon.en || icon.icon || icon.emoji || '';
  }
  const clean = String(icon).trim();
  const lower = clean.toLowerCase();
  const map = {
    trophy: '🏆',
    star: '⭐',
    medal: '🥇',
    award: '🎖️',
    heart: '❤️',
    crown: '👑',
    fire: '🔥',
    sparkles: '✨',
    gift: '🎁',
  };
  return map[lower] || clean;
};

export const adminRewardsApi = {


  createReward: async (data) => {
    try {
      const nameVal = data.name;
      const descVal = data.description;
      const payload = {
        name: typeof nameVal === 'object' ? nameVal : { ar: nameVal, en: data.nameEn || nameVal },
        description: typeof descVal === 'object' ? descVal : { ar: descVal, en: data.descriptionEn || descVal },
        icon: formatRewardIcon(data.emoji || data.icon || '⭐'),
        backgroundColor: data.bgColor || data.backgroundColor || '#4CAF50'
      };
      const response = await api.post('/api/v1/rewards/private', payload);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API createReward failed:', error);
      return { success: false, error: error.response?.data?.message || error.message };
    }
  },

  updateReward: async (id, data) => {
    try {
      const nameVal = data.name;
      const descVal = data.description;
      const payload = {
        name: typeof nameVal === 'object' ? nameVal : { ar: nameVal, en: data.nameEn || nameVal },
        description: typeof descVal === 'object' ? descVal : { ar: descVal, en: data.descriptionEn || descVal },
        icon: formatRewardIcon(data.emoji || data.icon || '⭐'),
        backgroundColor: data.bgColor || data.backgroundColor || '#4CAF50'
      };
      const response = await api.patch(`/api/v1/rewards/private/${id}`, payload);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API updateReward failed:', error);
      return { success: false, error: error.response?.data?.message || error.message };
    }
  },

  deleteReward: async (id) => {
    try {
      await api.delete(`/api/v1/rewards/private/${id}`);
      return { success: true };
    } catch (error) {
      console.error('API deleteReward failed:', error);
      return { success: false };
    }
  },

  fetchRewardById: async (id) => {
    try {
      const response = await api.get(`/api/v1/rewards/private/${id}`);
      const raw = response.data;
      let rewardData = raw?.data || raw?.reward || raw;
      if (Array.isArray(rewardData)) {
        rewardData = rewardData[0];
      }
      return { success: true, data: rewardData };
    } catch (error) {
      console.error('API fetchRewardById failed:', error);
      return { success: false, data: null };
    }
  },

  fetchRewards: async () => {
    try {
      const response = await api.get('/api/v1/rewards/private/localized/all');
      return { success: true, data: response.data.data, length: response.data.length };
    } catch (error) {
      console.error('API fetchRewards failed:', error);
      return { success: false, data: [] };
    }
  },

  fetchSuggestions: async (status = 'all') => {
    try {
      let endpoint = '/api/v1/suggested-rewards/private';
      if (status === 'pending') {
        endpoint = '/api/v1/suggested-rewards/private/pending';
      } else if (status === 'accepted') {
        endpoint = '/api/v1/suggested-rewards/private/accepted';
      } else if (status === 'rejected') {
        endpoint = '/api/v1/suggested-rewards/private/rejected';
      }

      const response = await api.get(endpoint, { skipLang: true });
      const resData = response.data;
      const data = Array.isArray(resData?.data)
        ? resData.data
        : (Array.isArray(resData) ? resData : []);
      const stats = resData?.stats || null;

      return { success: true, data, stats };
    } catch (error) {
      console.error(`API fetchSuggestions (${status}) failed:`, error);
      return { success: false, data: [], stats: null, error: error.message };
    }
  },

  fetchSuggestionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/suggested-rewards/private/${id}`, { skipLang: true });
      const data = response.data?.data || response.data;
      return { success: true, data };
    } catch (error) {
      console.error(`API fetchSuggestionById (${id}) failed:`, error);
      return { success: false, data: null };
    }
  },

  approveSuggestion: async (id, suggestion = null) => {
    try {
      const payload = {};
      if (suggestion) {
        const rawIcon = suggestion.icon || suggestion.emoji;
        if (rawIcon) {
          payload.icon = formatRewardIcon(rawIcon);
        }
        if (suggestion.backgroundColor || suggestion.bgColor) {
          payload.backgroundColor = suggestion.backgroundColor || suggestion.bgColor;
        }
        if (suggestion.name) {
          payload.name = suggestion.name;
        }
        if (suggestion.description) {
          payload.description = suggestion.description;
        }
      }
      const candidates = [
        () => api.patch(`/api/v1/suggested-rewards/private/accept/${id}`, payload, { skipLang: true }),
        () => api.patch(`/api/v1/suggested-rewards/private/approve/${id}`, payload, { skipLang: true }),
        () => api.patch(`/api/v1/suggested-rewards/private/${id}/accept`, payload, { skipLang: true }),
        () => api.patch(`/api/v1/suggested-rewards/private/${id}`, { status: 'accepted', ...payload }, { skipLang: true }),
        () => api.put(`/api/v1/suggested-rewards/private/accept/${id}`, payload, { skipLang: true }),
        () => api.post(`/api/v1/suggested-rewards/private/accept/${id}`, payload, { skipLang: true }),
      ];
      let lastErr = null;
      for (const reqFn of candidates) {
        try {
          const res = await reqFn();
          return { success: true, data: res.data };
        } catch (err) {
          lastErr = err;
          if (err.response && err.response.status !== 404 && err.response.status !== 405) {
            throw err;
          }
        }
      }
      throw lastErr;
    } catch (error) {
      console.error('API approveSuggestion failed:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to approve suggestion',
      };
    }
  },

  rejectSuggestion: async (id) => {
    try {
      const candidates = [
        () => api.patch(`/api/v1/suggested-rewards/private/reject/${id}`, {}, { skipLang: true }),
        () => api.patch(`/api/v1/suggested-rewards/private/${id}/reject`, {}, { skipLang: true }),
        () => api.patch(`/api/v1/suggested-rewards/private/${id}`, { status: 'rejected' }, { skipLang: true }),
        () => api.put(`/api/v1/suggested-rewards/private/reject/${id}`, {}, { skipLang: true }),
        () => api.post(`/api/v1/suggested-rewards/private/reject/${id}`, {}, { skipLang: true }),
      ];
      let lastErr = null;
      for (const reqFn of candidates) {
        try {
          const res = await reqFn();
          return { success: true, data: res.data };
        } catch (err) {
          lastErr = err;
          if (err.response && err.response.status !== 404 && err.response.status !== 405) {
            throw err;
          }
        }
      }
      throw lastErr;
    } catch (error) {
      console.error('API rejectSuggestion failed:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to reject suggestion',
      };
    }
  },

  deleteSuggestion: async (id) => {
    try {
      await api.delete(`/api/v1/suggested-rewards/private/${id}`, { skipLang: true });
      return { success: true };
    } catch (error) {
      console.error('API deleteSuggestion failed:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to delete suggestion',
      };
    }
  },

  fetchAchievements: async () => {
    try {
      const response = await api.get('/api/v1/admin/rewards/achievements');
      return response.data;
    } catch (error) {
      console.error('API fetchAchievements failed:', error);
      return { success: false, data: [] };
    }
  },
};
