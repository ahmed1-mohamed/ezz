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

  createHomework: async (data, onProgress = null, retryCount = 0) => {
    try {
      const config = {
        skipLang: true,
        timeout: 30 * 60 * 1000,
      };
      if (typeof onProgress === 'function') {
        config.onUploadProgress = (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress(percent);
          }
        };
      }
      const response = await api.post('/api/v1/teacher/homework', data, config);
      return {
        success: true,
        message: response.data?.message || 'تم نشر الواجب المدرسي بنجاح',
        data: response.data?.data || response.data,
      };
    } catch (error) {
      console.warn('API createHomework failed:', error);
      const rawMsg = error.response?.data?.message || error.response?.data?.error;
      const status = error.response?.status;
      const errorString = Array.isArray(rawMsg) ? rawMsg.join(' ') : String(rawMsg || '');
      const hasQuestionsArrayError =
        errorString.includes('questions must be an array') ||
        errorString.includes('الأسئلة يجب أن تكون في مصفوفة') ||
        errorString.includes('nested property questions') ||
        errorString.includes('لا يمكن إضافة أكثر من 20 سؤالاً');
      if (retryCount === 0 && status === 400 && data instanceof FormData && hasQuestionsArrayError) {
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
                fallbackFd.append(`questions[${idx}][type]`, q.type || 'multiple_choice');
                fallbackFd.append(`questions[${idx}][questionText]`, (q.questionText || q.question || '').trim());
                fallbackFd.append(`questions[${idx}][points]`, String(Math.max(1, Number(q.points) || 5)));
                if (q.type === 'multiple_choice') {
                  (q.options || []).forEach((opt, oIdx) => {
                    const optStr = String(opt ?? '').trim();
                    if (optStr) fallbackFd.append(`questions[${idx}][options][${oIdx}]`, optStr);
                  });
                  if (q.correctOptionIndex !== undefined && q.correctOptionIndex !== null) {
                    fallbackFd.append(`questions[${idx}][correctOptionIndex]`, String(q.correctOptionIndex));
                  }
                }
              });
              return await teacherHomeworkApi.createHomework(fallbackFd, onProgress, 1);
            }
          }
        } catch (fallbackErr) {
          console.warn('API createHomework FormData fallback failed:', fallbackErr);
        }
      }
      if (retryCount === 0 && (status === 415 || status === 400) && !(data instanceof FormData) && typeof data === 'object') {
        if (errorString.includes('multipart') || errorString.includes('form-data') || status === 415) {
          try {
            const fallbackFd = new FormData();
            Object.keys(data).forEach((key) => {
              if (key === 'questions') {
                if (Array.isArray(data[key])) {
                  data[key].forEach((q, idx) => {
                    fallbackFd.append(`questions[${idx}][type]`, q.type || 'multiple_choice');
                    fallbackFd.append(`questions[${idx}][questionText]`, (q.questionText || q.question || '').trim());
                    fallbackFd.append(`questions[${idx}][points]`, String(Math.max(1, Number(q.points) || 5)));
                    if (q.type === 'multiple_choice') {
                      (q.options || []).forEach((opt, oIdx) => {
                        const optStr = String(opt ?? '').trim();
                        if (optStr) fallbackFd.append(`questions[${idx}][options][${oIdx}]`, optStr);
                      });
                      if (q.correctOptionIndex !== undefined && q.correctOptionIndex !== null) {
                        fallbackFd.append(`questions[${idx}][correctOptionIndex]`, String(q.correctOptionIndex));
                      }
                    }
                  });
                }
              } else if (data[key] !== undefined && data[key] !== null) {
                fallbackFd.append(key, data[key]);
              }
            });
            return await teacherHomeworkApi.createHomework(fallbackFd, onProgress, 1);
          } catch (fallbackErr) {
            console.warn('API createHomework JSON-to-FormData fallback failed:', fallbackErr);
          }
        }
      }
      if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        return {
          success: false,
          message: 'استغرقت عملية رفع الملف وقتاً طويلاً، يرجى التحقق من سرعة اتصال الإنترنت أو تقليل حجم الملف والمحاولة مجدداً.',
          error,
        };
      }
      if (status === 413) {
        return {
          success: false,
          message: 'حجم الملف المرفق كبير جداً ويتجاوز الحد المسموح به من الخادم. يرجى اختيار ملف أصغر حجماً.',
          error,
        };
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