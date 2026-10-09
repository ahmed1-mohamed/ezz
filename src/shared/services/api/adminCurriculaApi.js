import api from './axiosConfig';

export const adminCurriculaApi = {
  fetchCurricula: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/curricula/private/localized/all', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchCurricula failed:', error);
      throw error;
    }
  },

  fetchPrivateCurricula: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/curricula/private', { params });
      return response.data;
    } catch (error) {
      console.error('API fetchPrivateCurricula failed:', error);
      throw error;
    }
  },

  fetchCurriculumById: async (id) => {
    try {
      const response = await api.get(`/api/v1/curricula/private/localized/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchCurriculumById failed:', error);
      throw error;
    }
  },

  fetchCurriculumByIdRaw: async (id) => {
    try {
      const response = await api.get(`/api/v1/curricula/private/${id}`);
      return response.data;
    } catch (error) {
      console.error('API fetchCurriculumByIdRaw failed:', error);
      throw error;
    }
  },

  createCurriculum: async (payload) => {
    try {
      const isFormData = payload instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.post('/api/v1/curricula/private', payload, { headers });
      return response.data;
    } catch (error) {
      console.error('API createCurriculum failed:', error);
      throw error;
    }
  },

  updateCurriculum: async (id, payload) => {
    try {
      const isFormData = payload instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : {};
      const response = await api.patch(`/api/v1/curricula/private/${id}`, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('API updateCurriculum failed:', error);
      throw error;
    }
  },

  deleteCurriculum: async (id) => {
    try {
      const response = await api.delete(`/api/v1/curricula/private/${id}`);
      return response.data;
    } catch (error) {
      console.error('API deleteCurriculum failed:', error);
      throw error;
    }
  },

   addLevel: async (curriculumId, payload) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const body = { name: { ar: payload.name?.ar, en: payload.name?.en } };
      const response = await api.post(`/api/v1/curricula/private/${cId}/levels`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('API addLevel failed:', error);
      throw error;
    }
  },
  updateLevel: async (curriculumId, levelId, payload) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const lId = typeof levelId === 'object' ? (levelId._id || levelId.id) : levelId;
      const body = { name: { ar: payload.name?.ar, en: payload.name?.en } };
      const response = await api.patch(`/api/v1/curricula/private/${cId}/levels/${lId}`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error('API updateLevel failed:', error);
      throw error;
    }
  },
  deleteLevel: async (curriculumId, levelId) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const lId = typeof levelId === 'object' ? (levelId._id || levelId.id || levelId.levelId) : levelId;

      const response = await api.delete(`/api/v1/curricula/private/${cId}/levels/${lId}`);
      return response.data || response;
    } catch (error) {
      console.error('API deleteLevel failed:', error);
      throw error;
    }
  },

   addUnit: async (curriculumId, levelId, payload) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const lId = typeof levelId === 'object' ? (levelId._id || levelId.id || levelId.levelId) : levelId;

      const body = {
        name: {
          ar: payload.name?.ar || (typeof payload.name === 'string' ? payload.name : ''),
          en: payload.name?.en || (typeof payload.name === 'string' ? payload.name : (payload.name?.ar || ''))
        }
      };

      const response = await api.post(`/api/v1/curricula/private/${cId}/levels/${lId}/units`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data || response;
    } catch (error) {
      console.error('API addUnit failed:', error);
      throw error;
    }
  },

  updateUnit: async (curriculumId, levelId, unitId, payload) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const lId = typeof levelId === 'object' ? (levelId._id || levelId.id || levelId.levelId) : levelId;
      const uId = typeof unitId === 'object' ? (unitId._id || unitId.id || unitId.unitId) : unitId;

      const body = {
        name: {
          ar: payload.name?.ar || (typeof payload.name === 'string' ? payload.name : ''),
          en: payload.name?.en || (typeof payload.name === 'string' ? payload.name : (payload.name?.ar || ''))
        }
      };

      const response = await api.patch(`/api/v1/curricula/private/${cId}/levels/${lId}/units/${uId}`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data || response;
    } catch (error) {
      console.error('API updateUnit failed:', error);
      throw error;
    }
  },

  deleteUnit: async (curriculumId, levelId, unitId) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const lId = typeof levelId === 'object' ? (levelId._id || levelId.id || levelId.levelId) : levelId;
      const uId = typeof unitId === 'object' ? (unitId._id || unitId.id || unitId.unitId) : unitId;

      const response = await api.delete(`/api/v1/curricula/private/${cId}/levels/${lId}/units/${uId}`);
      return response.data || response;
    } catch (error) {
      console.error('API deleteUnit failed:', error);
      throw error;
    }
  },

  // Files
  addFile: async (curriculumId, levelId, unitId, payload) => {
    const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
    const lId = typeof levelId === 'object' ? (levelId._id || levelId.id || levelId.levelId) : levelId;
    const uId = typeof unitId === 'object' ? (unitId._id || unitId.id || unitId.unitId) : unitId;
    const endpoint = `/api/v1/curricula/private/${cId}/levels/${lId}/units/${uId}/files`;

    try {
      const isFormData = payload instanceof FormData;
      const headers = isFormData ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json' };
      const response = await api.post(endpoint, payload, { headers });
      return response.data;
    } catch (error) {
      // Fallback: If primary attempt failed and it's a link, try alternative format
      try {
        if (payload instanceof FormData) {
          const type = payload.get('type');
          const nameAr = payload.get('name[ar]') || payload.get('nameAr') || '';
          const nameEn = payload.get('name[en]') || payload.get('nameEn') || nameAr;
          const linkUrl = payload.get('url');

          if (type === 'link' && linkUrl) {
            const jsonBody = {
              type: 'link',
              name: { ar: nameAr, en: nameEn },
              url: linkUrl
            };
            const jsonRes = await api.post(endpoint, jsonBody, {
              headers: { 'Content-Type': 'application/json' }
            });
            return jsonRes.data;
          }
        } else if (typeof payload === 'object' && !(payload instanceof FormData)) {
          const fd = new FormData();
          fd.append('type', payload.type || 'link');
          const ar = payload.name?.ar || payload.nameAr || (typeof payload.name === 'string' ? payload.name : '');
          const en = payload.name?.en || payload.nameEn || ar;
          fd.append('name[ar]', ar);
          fd.append('name[en]', en);
          if (payload.url) {
            fd.append('url', payload.url);
          }
          const fdRes = await api.post(endpoint, fd, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
          return fdRes.data;
        }
      } catch (fallbackErr) {
        console.warn('API addFile fallback attempt also failed:', fallbackErr);
      }

      console.error('API addFile failed:', error);
      throw error;
    }
  },
  deleteFile: async (curriculumId, levelId, unitId, fileId) => {
    try {
      const cId = typeof curriculumId === 'object' ? (curriculumId._id || curriculumId.id) : curriculumId;
      const lId = typeof levelId === 'object' ? (levelId._id || levelId.id || levelId.levelId) : levelId;
      const uId = typeof unitId === 'object' ? (unitId._id || unitId.id || unitId.unitId) : unitId;
      const fId = typeof fileId === 'object' ? (fileId._id || fileId.id || fileId.fileId) : fileId;
      const response = await api.delete(`/api/v1/curricula/private/${cId}/levels/${lId}/units/${uId}/files/${fId}`);
      return response.data;
    } catch (error) {
      console.error('API deleteFile failed:', error);
      throw error;
    }
  }
};
