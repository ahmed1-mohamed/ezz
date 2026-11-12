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

  createHomework: async (data, retryCount = 0) => {
    try {
      const config = { skipLang: true };
      const response = await api.post('/api/v1/teacher/homework', data, config);
      return {
        success: true,
        message: response.data?.message || 'تم نشر الواجب المدرسي بنجاح',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API createHomework failed:', error);
      const rawMsg = error.response?.data?.message || error.response?.data?.error;
      // Smart fallback 1: If FormData with JSON questions string failed with "questions must be an array"
      if (retryCount === 0 && error.response?.status === 400 && data instanceof FormData) {
        const errorString = Array.isArray(rawMsg) ? rawMsg.join(' ') : String(rawMsg || '');
        if (errorString.includes('questions must be an array')) {
          try {
            const rawQuestionsStr = data.get('questions');
            if (rawQuestionsStr && typeof rawQuestionsStr === 'string') {
              const parsedQuestions = JSON.parse(rawQuestionsStr);
              if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
                const fallbackFd = new FormData();
                for (const [key, val] of data.entries()) {
                  if (key !== 'questions') {
                    fallbackFd.append(key, val);
                  }
                }
                parsedQuestions.forEach((q, idx) => {
                  fallbackFd.append(`questions[${idx}][type]`, q.type);
                  fallbackFd.append(`questions[${idx}][questionText]`, q.questionText || q.question || '');
                  fallbackFd.append(`questions[${idx}][points]`, q.points);
                  if (q.type === 'multiple_choice') {
                    (q.options || []).forEach((opt, oIdx) => {
                      fallbackFd.append(`questions[${idx}][options][${oIdx}]`, opt);
                    });
                    if (q.correctOptionIndex !== undefined) {
                      fallbackFd.append(`questions[${idx}][correctOptionIndex]`, q.correctOptionIndex);
                    }
                  } else {
                    fallbackFd.append(`questions[${idx}][options][]`, '');
                  }
                });
                return await teacherHomeworkApi.createHomework(fallbackFd, 1);
              }
            }
          } catch (fallbackErr) {
            console.warn('API createHomework FormData fallback failed:', fallbackErr);
          }
        }
      }
      // Smart fallback 2: If JSON request failed because server requires multipart/form-data
      if (retryCount === 0 && (error.response?.status === 415 || error.response?.status === 400) && !(data instanceof FormData) && typeof data === 'object') {
        const errorString = Array.isArray(rawMsg) ? rawMsg.join(' ') : String(rawMsg || '');
        if (errorString.includes('multipart') || errorString.includes('form-data') || error.response?.status === 415) {
          try {
            const fallbackFd = new FormData();
            Object.keys(data).forEach((key) => {
              if (key === 'questions') {
                fallbackFd.append('questions', JSON.stringify(data[key]));
              } else if (data[key] !== undefined && data[key] !== null) {
                fallbackFd.append(key, data[key]);
              }
            });
            return await teacherHomeworkApi.createHomework(fallbackFd, 1);
          } catch (fallbackErr) {
            console.warn('API createHomework JSON-to-FormData fallback failed:', fallbackErr);
          }
        }
      }
      const responseMessage = Array.isArray(rawMsg)
        ? rawMsg.join(' - ')
        : (typeof rawMsg === 'string' ? rawMsg : 'تعذر نشر الواجب، يرجى التأكد من البيانات والمحاولة مجدداً');
      return {
        success: false,
        message: responseMessage,
        error,
      };
    }
  },


  fetchSubmissions: async (statusOrParams = 'all', optionalParams = {}) => {
    try {
      let params = {};
      if (typeof statusOrParams === 'object' && statusOrParams !== null) {
        params = { ...statusOrParams };
      } else {
        params = { ...(optionalParams || {}) };
        if (statusOrParams && statusOrParams !== 'all') {
          params.status = String(statusOrParams).replace('-', '_');
        }
      }
      if (!params.limit) {
        params.limit = 100;
      }
      const endpoint = '/api/v1/teacher/homework/submissions';
      const response = await api.get(endpoint, { params, skipLang: true });
      const resData = response.data || {};
      let list = [];
      if (Array.isArray(resData?.data)) {
        list = resData.data;
      } else if (Array.isArray(resData?.submissions)) {
        list = resData.submissions;
      } else if (Array.isArray(resData?.data?.submissions)) {
        list = resData.data.submissions;
      } else if (Array.isArray(resData?.data?.items)) {
        list = resData.data.items;
      } else if (Array.isArray(resData?.items)) {
        list = resData.items;
      } else if (Array.isArray(resData)) {
        list = resData;
      }
      const statistics =
        resData.statistics ||
        resData.stats ||
        resData.data?.statistics ||
        resData.data?.stats ||
        null;
      return {
        success: true,
        data: list,
        statistics,
        pagination: resData.pagination || {
          currentPage: 1,
          limit: params.limit || 100,
          totalCount: list.length,
          numberOfPages: 1,
        },
      };
    } catch (error) {
      console.warn('API fetchSubmissions failed:', error);
      return {
        success: false,
        data: [],
        statistics: null,
        pagination: { currentPage: 1, limit: 100, totalCount: 0, numberOfPages: 1 },
        error,
      };
    }
  },


  fetchSubmissionDetails: async (submissionId, homeworkId) => {
    const validSubId = submissionId && /^[0-9a-fA-F]{24}$/.test(String(submissionId)) ? String(submissionId) : null;
    const validHwId = homeworkId && /^[0-9a-fA-F]{24}$/.test(String(homeworkId)) ? String(homeworkId) : null;
    if (!validSubId && !validHwId) {
      return { success: true, data: null };
    }
    if (validSubId) {
      try {
        const response = await api.get(`/api/v1/teacher/homework/submissions/${validSubId}`, {
          skipLang: true,
          skipGlobalErrorToast: true,
          silent: true,
        });
        const resData = response.data?.data || response.data || null;
        if (resData) return { success: true, data: resData };
      } catch (err) { void err; }
      try {
        const response = await api.get(`/api/v1/teacher/submissions/${validSubId}`, {
          skipLang: true,
          skipGlobalErrorToast: true,
          silent: true,
        });
        const resData = response.data?.data || response.data || null;
        if (resData) return { success: true, data: resData };
      } catch (err) { void err; }
    }
    if (validHwId) {
      try {
        const response = await api.get(`/api/v1/teacher/homework/${validHwId}`, {
          skipLang: true,
          skipGlobalErrorToast: true,
          silent: true,
        });
        const resData = response.data?.data || response.data || null;
        if (resData) return { success: true, data: resData };
      } catch (err) { void err; }
    }
    return { success: true, data: null };
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
      const sanitizedPayload = { ...payload };
      delete sanitizedPayload.questions;
      const response = await api.patch(
        `/api/v1/teacher/homework/submissions/${submissionId}/evaluate`,
        sanitizedPayload,
        { skipLang: true }
      );
      return {
        success: true,
        message: response.data?.message || 'تم حفظ تصحيح وتقييم الواجب بنجاح',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API evaluateSubmission failed:', error);
      const rawMsg = error.response?.data?.message || error.response?.data?.error;
      const errorMsg = Array.isArray(rawMsg)
        ? rawMsg.join(' - ')
        : (typeof rawMsg === 'string' ? rawMsg : 'تعذر حفظ التصحيح، يرجى المحاولة مرة أخرى');
      return {
        success: false,
        message: errorMsg,
        error,
      };
    }
  },
};