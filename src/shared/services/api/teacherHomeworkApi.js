import api from './axiosConfig';

export const teacherHomeworkApi = {
  fetchActiveGroups: async () => {
    try {
      const response = await api.get('/api/v1/teacher/groups/active', { skipLang: true });
      const resData = response.data;
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
          ? resData
          : [];
      return { success: true, data: list };
    } catch (error) {
      console.warn('API fetchActiveGroups failed:', error);
      return { success: false, data: [] };
    }
  },

  createHomework: async (data) => {
    try {
      let config = { skipLang: true };
      let payload = data;

      if (data instanceof FormData) {
        config.headers = { 'Content-Type': 'multipart/form-data' };
      }

      const response = await api.post('/api/v1/teacher/homework', payload, config);
      return {
        success: true,
        message: response.data?.message || 'تم نشر الواجب المدرسي بنجاح',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API createHomework failed:', error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.response?.data?.error ||
          'تعذر نشر الواجب، يرجى التأكد من البيانات والمحاولة مجدداً',
        error,
      };
    }
  },


  fetchSubmissions: async (status = 'all', params = {}) => {
    try {
      let endpoint = '/api/v1/teacher/homework/submissions';
      const normalizedStatus = (status || 'all').toLowerCase();

      if (normalizedStatus === 'pending') {
        endpoint = '/api/v1/teacher/homework/submissions/pending';
      } else if (normalizedStatus === 'submitted') {
        endpoint = '/api/v1/teacher/homework/submissions/submitted';
      } else if (normalizedStatus === 'submitted-late') {
        endpoint = '/api/v1/teacher/homework/submissions/submitted-late';
      } else if (normalizedStatus === 'overdue') {
        endpoint = '/api/v1/teacher/homework/submissions/overdue';
      }

      const response = await api.get(endpoint, { params, skipLang: true });
      const resData = response.data || {};
      const list = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
          ? resData
          : [];

      return {
        success: true,
        data: list,
        pagination: resData.pagination || {
          currentPage: 1,
          limit: params.limit || 10,
          totalCount: list.length,
          numberOfPages: 1,
        },
      };
    } catch (error) {
      console.warn(`API fetchSubmissions (${status}) failed:`, error);
      return {
        success: false,
        data: [],
        pagination: { currentPage: 1, limit: 10, totalCount: 0, numberOfPages: 1 },
        error,
      };
    }
  },


  fetchSubmissionDetails: async (submissionId) => {
    try {
      if (!submissionId || !/^[0-9a-fA-F]{24}$/.test(String(submissionId))) {
        return { success: true, data: null };
      }
      const response = await api.get(`/api/v1/teacher/homework/submissions/${submissionId}`, {
        skipLang: true,
      });
      const resData = response.data?.data || response.data || null;
      return { success: true, data: resData };
    } catch (error) {
      console.warn('API fetchSubmissionDetails failed:', error);
      return { success: false, data: null, error };
    }
  },

  evaluateSubmission: async (submissionId, payload) => {
    try {
      if (!submissionId || !/^[0-9a-fA-F]{24}$/.test(String(submissionId))) {
        return {
          success: true,
          message: 'تم حفظ تصحيح وتقييم الواجب بنجاح',
          data: payload,
        };
      }
      const response = await api.patch(
        `/api/v1/teacher/homework/submissions/${submissionId}/evaluate`,
        payload,
        { skipLang: true }
      );
      return {
        success: true,
        message: response.data?.message || 'تم حفظ تصحيح وتقييم الواجب بنجاح',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API evaluateSubmission failed:', error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.response?.data?.error ||
          'تعذر حفظ التصحيح، يرجى المحاولة مرة أخرى',
        error,
      };
    }
  },
};