import api from './axiosConfig';

let inMemoryDashboardCache = null;

function getCachedDashboard() {
  if (inMemoryDashboardCache) {
    return inMemoryDashboardCache;
  }
  try {
    const raw = sessionStorage.getItem('parent_dashboard_cache');
    if (raw) {
      inMemoryDashboardCache = JSON.parse(raw);
      return inMemoryDashboardCache;
    }
  } catch {
    return null;
  }
  return null;
}

function setCachedDashboard(data) {
  inMemoryDashboardCache = data;
  try {
    sessionStorage.setItem('parent_dashboard_cache', JSON.stringify(data));
  } catch (err) { void err; }
}

function formatChildRecord(child, index = 0) {
  const id = String(child.student_id || child.user_id || child.id || child._id || `child-${index}`);
  const totalClasses = Number(child.sessionsBalance?.total || child.totalClasses || 0);
  const usedClasses = Number(child.sessionsBalance?.used || child.usedClasses || 0);
  const remainingClasses = child.sessionsBalance?.remaining !== undefined
    ? Number(child.sessionsBalance.remaining)
    : Math.max(0, totalClasses - usedClasses);
  const rawGroups = Array.isArray(child.groups) ? child.groups : [];
  const groupsList = rawGroups.map((g) => (typeof g === 'object' && g !== null ? (g.name || g.title || String(g)) : String(g)));
  const primarySubject = groupsList.length > 0
    ? groupsList[0]
    : (typeof child.subject === 'object' && child.subject !== null
        ? (child.subject.ar || child.subject.en || child.subject.name || '')
        : String(child.subject || ''));
  const studentLevel = typeof child.studentLevel === 'object' && child.studentLevel !== null
    ? (child.studentLevel.ar || child.studentLevel.en || child.studentLevel.name || '')
    : String(child.studentLevel || '');
  const name = typeof child.name === 'object' && child.name !== null
    ? (child.name.ar || child.name.en || '')
    : String(child.name || '');
  return {
    ...child,
    id,
    student_id: String(child.student_id || id),
    user_id: String(child.user_id || id),
    name,
    image: child.image || null,
    country: child.country || null,
    birthDate: child.birthDate || null,
    age: child.age !== undefined ? Number(child.age) : null,
    active: child.active !== undefined ? Boolean(child.active) : true,
    groups: rawGroups,
    groupsNames: groupsList,
    subject: primarySubject,
    studentLevel,
    attendanceRate: child.attendanceRate !== undefined ? Number(child.attendanceRate) : 0,
    averageRating: child.averageRating !== undefined ? Number(child.averageRating) : 0,
    totalEvaluations: child.totalEvaluations !== undefined ? Number(child.totalEvaluations) : 0,
    sessionsBalance: { total: totalClasses, used: usedClasses, remaining: remainingClasses },
    totalClasses,
    usedClasses,
    remainingClasses,
    lastSubscription: typeof child.lastSubscription === 'object' && child.lastSubscription !== null ? child.lastSubscription : null,
    rewards: Array.isArray(child.rewards) ? child.rewards : [],
    totalHomework: child.totalHomework !== undefined ? Number(child.totalHomework) : 0,
    completedHomework: child.completedHomework !== undefined ? Number(child.completedHomework) : 0,
    pendingHomework: child.pendingHomework !== undefined ? Number(child.pendingHomework) : 0,
    sessionTransactions: Array.isArray(child.sessionTransactions) ? child.sessionTransactions : [],
    joinDate: child.joinDate ? (typeof child.joinDate === 'object' ? '' : String(child.joinDate)) : '',
    statusColor: remainingClasses > 5 ? 'bg-emerald-500' : remainingClasses > 0 ? 'bg-amber-500' : 'bg-red-500',
    textColor: remainingClasses > 5 ? 'text-emerald-500' : remainingClasses > 0 ? 'text-amber-500' : 'text-red-500'
  };
}

function extractSessionGroupName(s) {
  if (!s) return '';
  const raw = s.group ?? s.groupName ?? s.groupId ?? s.subject ?? s.subjectName ?? s.course;
  if (!raw) return '';
  if (typeof raw === 'string') return raw.trim();
  if (typeof raw === 'object') {
    if (typeof raw.name === 'object' && raw.name !== null) {
      return raw.name.ar || raw.name.en || '';
    }
    return raw.name || raw.ar || raw.title || raw.en || '';
  }
  return String(raw).trim();
}

function formatYearMonthKey(rawVal, fallbackYear = null) {
  if (rawVal === null || rawVal === undefined || rawVal === '') {
    return null;
  }
  if (typeof rawVal === 'number' && rawVal >= 1 && rawVal <= 12) {
    const safeYear = fallbackYear || new Date().getFullYear();
    return `${safeYear}-${String(rawVal).padStart(2, '0')}`;
  }
  const str = String(rawVal).trim();
  const match = str.match(/^(\d{4})-(\d{1,2})$/);
  if (match) {
    const yearPart = match[1];
    const monthPart = match[2].padStart(2, '0');
    return `${yearPart}-${monthPart}`;
  }
  const parsedNum = Number(str);
  if (!isNaN(parsedNum) && parsedNum >= 1 && parsedNum <= 12) {
    const safeYear = fallbackYear || new Date().getFullYear();
    return `${safeYear}-${String(parsedNum).padStart(2, '0')}`;
  }
  return null;
}

export const parentApi = {
  fetchDashboard: async () => {
    try {
      const response = await api.get('/api/v1/parent/dashboard', { skipGlobalErrorToast: true });
      const payload = response.data?.data || response.data;
      if (payload) {
        if (Array.isArray(payload.children)) {
          payload.children = payload.children.map((child, idx) => formatChildRecord(child, idx));
        }
        setCachedDashboard(payload);
        return { success: true, data: payload };
      }
    } catch (err) {
      const cached = getCachedDashboard();
      if (cached) {
        return { success: true, data: cached };
      }
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch dashboard'
      };
    }
    const cached = getCachedDashboard();
    if (cached) {
      return { success: true, data: cached };
    }
    return { success: false, data: null };
  },
  fetchDashboardStats: async () => {
    try {
      const dashRes = await parentApi.fetchDashboard();
      if (dashRes?.success && dashRes.data?.statistics) {
        return { success: true, data: dashRes.data.statistics };
      }
      return { success: false, data: null };
    } catch (err) {
      return { success: false, data: null, message: err?.message };
    }
  },
  fetchStudents: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parent/students', { params, skipGlobalErrorToast: true });
      const rawList = Array.isArray(response.data?.data)
        ? response.data.data
        : (Array.isArray(response.data) ? response.data : []);
      const formatted = rawList.map((child, idx) => formatChildRecord(child, idx));
      return { success: true, data: formatted };
    } catch (err) {
      try {
        const dashRes = await parentApi.fetchDashboard();
        const rawList = Array.isArray(dashRes?.data?.children) ? dashRes.data.children : [];
        if (rawList.length > 0) {
          const formatted = rawList.map((child, idx) => formatChildRecord(child, idx));
          return { success: true, data: formatted };
        }
      } catch (dashErr) { void dashErr; }
      return {
        success: false,
        data: [],
        message: err?.response?.data?.message || err?.message || 'Failed to fetch students'
      };
    }
  },
  fetchChildren: async () => {
    return parentApi.fetchStudents();
  },
  fetchChildById: async (id) => {
    if (!id) return { success: false, data: null };
    try {
      const response = await api.get(`/api/v1/parent/students/${id}`, { skipGlobalErrorToast: true });
      const payload = response.data?.data || response.data;
      if (payload) {
        if (Array.isArray(payload)) {
          const matched = payload.find((c) => String(c.student_id) === String(id) || String(c.user_id) === String(id) || String(c.id) === String(id)) || payload[0];
          if (matched) return { success: true, data: formatChildRecord(matched) };
        } else if (typeof payload === 'object' && payload !== null) {
          return { success: true, data: formatChildRecord(payload) };
        }
      }
    } catch (err) { void err; }
    try {
      const childrenRes = await parentApi.fetchChildren();
      const list = childrenRes?.data || [];
      const matched = list.find((c) => String(c.id) === String(id) || String(c.student_id) === String(id) || String(c.user_id) === String(id));
      if (matched) {
        return { success: true, data: formatChildRecord(matched) };
      }
    } catch (fallbackErr) { void fallbackErr; }
    return { success: false, data: null };
  },
  fetchStudentById: async (id) => {
    return parentApi.fetchChildById(id);
  },
  fetchTeachersList: async () => {
    try {
      const response = await api.get('/api/v1/teachers/public', { params: { limit: 50 }, skipGlobalErrorToast: true });
      const items = response.data?.data || (Array.isArray(response.data) ? response.data : []);
      return { success: true, data: Array.isArray(items) ? items : [] };
    } catch (err) {
      return {
        success: false,
        data: [],
        message: err?.response?.data?.message || err?.message || 'Failed to fetch teachers'
      };
    }
  },
  fetchStudentEvaluations: async (params = {}) => {
    const cleanParams = {};
    const student = params.student || params.studentId;
    if (student && student !== 'all') {
      cleanParams.student = student;
    }
    if (params.page) cleanParams.page = params.page;
    if (params.limit) cleanParams.limit = params.limit;
    try {
      const response = await api.get('/api/v1/parent/students/evaluations', {
        params: cleanParams,
        skipGlobalErrorToast: true
      });
      const payload = response.data;
      const list = Array.isArray(payload?.data) ? payload.data : (Array.isArray(payload) ? payload : []);
      return {
        success: true,
        data: list,
        totalEvaluations: payload?.totalEvaluations ?? list.length,
        averageRating: payload?.averageRating !== undefined ? Number(payload.averageRating) : 0,
        pagination: payload?.pagination || {
          currentPage: Number(cleanParams.page || 1),
          limit: Number(cleanParams.limit || 20),
          numberOfPages: Math.max(1, Math.ceil((payload?.totalEvaluations ?? list.length) / Number(cleanParams.limit || 20)))
        }
      };
    } catch (err) {
      return {
        success: false,
        data: [],
        totalEvaluations: 0,
        averageRating: 0,
        pagination: {
          currentPage: Number(cleanParams.page || 1),
          limit: Number(cleanParams.limit || 20),
          numberOfPages: 1
        },
        message: err?.response?.data?.message || err?.message || 'Failed to fetch evaluations'
      };
    }
  },
  fetchPastRatings: async (params = {}) => {
    return parentApi.fetchStudentEvaluations(params);
  },
  submitRating: async (data) => {
    try {
      const response = await api.post('/api/v1/parent/ratings', data, { skipGlobalErrorToast: true });
      return { success: true, data: response.data };
    } catch (err) {
      return {
        success: false,
        message: err?.response?.data?.message || err?.message || 'Failed to submit rating'
      };
    }
  },
  fetchHomeworkList: async (filter = 'all', params = {}) => {
    let endpoint = '/api/v1/parent/homework';
    if (filter === 'pending') {
      endpoint = '/api/v1/parent/homework/pending';
    } else if (filter === 'submitted') {
      endpoint = '/api/v1/parent/homework/submitted';
    } else if (filter === 'submitted-late' || filter === 'submitted_late') {
      endpoint = '/api/v1/parent/homework/submitted-late';
    } else if (filter === 'overdue') {
      endpoint = '/api/v1/parent/homework/overdue';
    }
    const cleanParams = {};
    const student = params.student || params.studentId;
    if (student && student !== 'all') {
      cleanParams.student = student;
    }
    if (params.page) cleanParams.page = params.page;
    if (params.limit) cleanParams.limit = params.limit;
    try {
      const response = await api.get(endpoint, {
        params: cleanParams,
        skipGlobalErrorToast: true
      });
      const payload = response.data;
      const list = Array.isArray(payload?.data) ? payload.data : (Array.isArray(payload) ? payload : []);
      return {
        success: true,
        data: list,
        pagination: payload?.pagination || {
          currentPage: Number(cleanParams.page || 1),
          limit: Number(cleanParams.limit || 20),
          numberOfPages: Math.max(1, Math.ceil(list.length / Number(cleanParams.limit || 20)))
        }
      };
    } catch (err) {
      return {
        success: false,
        data: [],
        pagination: {
          currentPage: Number(cleanParams.page || 1),
          limit: Number(cleanParams.limit || 20),
          numberOfPages: 1
        },
        message: err?.response?.data?.message || err?.message || 'Failed to fetch homework list'
      };
    }
  },
  fetchHomeworkSubmission: async (submissionId) => {
    try {
      const response = await api.get(`/api/v1/parent/homework/submissions/${submissionId}`, {
        skipGlobalErrorToast: true
      });
      const item = response.data?.data || response.data;
      if (item && typeof item === 'object') {
        return { success: true, data: item };
      }
      return { success: false, data: null };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch homework submission'
      };
    }
  },
  fetchAssignments: async (params = {}) => {
    return parentApi.fetchHomeworkList('all', params);
  },
  fetchReports: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parent/reports', { params, skipGlobalErrorToast: true });
      const item = response.data?.data || response.data;
      return { success: true, data: item || null };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch reports'
      };
    }
  },
  fetchTimetable: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/parent/timetable', { params, skipGlobalErrorToast: true });
      const payload = response.data?.data || response.data;
      return { success: true, data: payload || null };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch timetable'
      };
    }
  },
  fetchSchedules: async (params = {}) => {
    try {
      const timetableRes = await parentApi.fetchTimetable(params);
      if (timetableRes?.success && timetableRes.data) {
        if (Array.isArray(timetableRes.data)) {
          return { success: true, data: timetableRes.data };
        }
        if (Array.isArray(timetableRes.data?.days)) {
          const flattened = [];
          timetableRes.data.days.forEach((d) => {
            if (Array.isArray(d.sessions)) {
              d.sessions.forEach((s) => {
                flattened.push({ ...s, date: s.date || d.date, day: s.day || d.day });
              });
            }
          });
          return { success: true, data: flattened };
        }
        return { success: true, data: [] };
      }
      return { success: false, data: [] };
    } catch {
      return { success: false, data: [] };
    }
  },
  fetchAttendance: async (studentIdOrParams, queryParams = {}) => {
    let studentId = '';
    let targetMonth = null;
    let fallbackYear = null;
    if (typeof studentIdOrParams === 'object' && studentIdOrParams !== null) {
      studentId = studentIdOrParams.studentId || studentIdOrParams.id || studentIdOrParams.student;
      fallbackYear = studentIdOrParams.year ? Number(studentIdOrParams.year) : null;
      const rawVal = studentIdOrParams.month ?? studentIdOrParams.monthKey;
      targetMonth = formatYearMonthKey(rawVal, fallbackYear);
    } else if (typeof studentIdOrParams === 'string' || typeof studentIdOrParams === 'number') {
      studentId = String(studentIdOrParams);
      if (typeof queryParams === 'object' && queryParams !== null) {
        fallbackYear = queryParams.year ? Number(queryParams.year) : null;
        const rawVal = queryParams.month ?? queryParams.monthKey;
        targetMonth = formatYearMonthKey(rawVal, fallbackYear);
      } else if (queryParams !== undefined && queryParams !== null) {
        targetMonth = formatYearMonthKey(queryParams, fallbackYear);
      }
    }
    if (!studentId) {
      try {
        const childrenRes = await parentApi.fetchChildren();
        const firstChild = childrenRes?.data?.[0];
        studentId = firstChild?.student_id || firstChild?.id || firstChild?.user_id;
      } catch (err) { void err; }
    }
    if (!studentId) {
      return { success: false, data: null, message: 'Student ID required' };
    }
    const requestConfig = { skipGlobalErrorToast: true };
    if (targetMonth) {
      requestConfig.params = { month: targetMonth };
    }
    try {
      const response = await api.get(`/api/v1/parent/students/${studentId}/attendance`, requestConfig);
      const payload = response.data?.data || response.data;
      return { success: true, data: payload || null };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch attendance'
      };
    }
  },
  fetchBadges: async () => {
    return { success: true, data: [] };
  },
  fetchComplaints: async (filter = 'all') => {
    let endpoint = '/api/v1/parent/complaints-suggestions';
    if (filter === 'resolved') {
      endpoint = '/api/v1/parent/complaints-suggestions/resolved';
    } else if (filter === 'rejected') {
      endpoint = '/api/v1/parent/complaints-suggestions/rejected';
    }
    try {
      const response = await api.get(endpoint, { skipGlobalErrorToast: true });
      const raw = response.data?.data || (Array.isArray(response.data) ? response.data : []);
      const items = Array.isArray(raw) ? raw : [];
      return { success: true, data: items, length: response.data?.length ?? items.length };
    } catch (err) {
      return {
        success: false,
        data: [],
        length: 0,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch complaints'
      };
    }
  },
  fetchComplaintById: async (id) => {
    if (!id) return { success: false, data: null };
    try {
      const response = await api.get(`/api/v1/parent/complaints-suggestions/${id}`, { skipGlobalErrorToast: true });
      const item = response.data?.data || response.data;
      return { success: true, data: item || null };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch complaint'
      };
    }
  },
  createComplaint: async (payload) => {
    try {
      let body = payload;
      let headers = undefined;
      if (payload instanceof FormData) {
        body = payload;
        headers = { 'Content-Type': 'multipart/form-data' };
      } else if (payload && typeof payload === 'object') {
        const formData = new FormData();
        if (payload.type) formData.append('type', payload.type);
        if (payload.title) formData.append('title', payload.title);
        if (payload.details) formData.append('details', payload.details);
        if (Array.isArray(payload.attachments)) {
          payload.attachments.forEach((file) => {
            if (file instanceof File) formData.append('attachments', file);
          });
        }
        body = formData;
        headers = { 'Content-Type': 'multipart/form-data' };
      }
      const response = await api.post('/api/v1/parent/complaints-suggestions', body, {
        headers,
        skipGlobalErrorToast: true
      });
      return {
        success: true,
        message: response.data?.message || 'تم إرسال الطلب بنجاح وجاري المتابعة',
        data: response.data?.data || response.data
      };
    } catch (err) {
      const rawMsg = err?.response?.data?.message || err?.message;
      const errorMsg = Array.isArray(rawMsg) ? rawMsg.join(' - ') : (rawMsg || 'تعذر إرسال الطلب، يرجى المحاولة لاحقاً');
      return {
        success: false,
        message: errorMsg,
        data: null
      };
    }
  },
  fetchExcusesList: async (params = {}) => {
    const cleanParams = {};
    if (params.page) cleanParams.page = params.page;
    if (params.limit) cleanParams.limit = params.limit;
    if (params.studentId && params.studentId !== 'all') cleanParams.studentId = params.studentId;
    try {
      const response = await api.get('/api/v1/parent/sessions/excuses', {
        params: cleanParams,
        skipGlobalErrorToast: true
      });
      const payload = response.data;
      const list = Array.isArray(payload?.data) ? payload.data : (Array.isArray(payload) ? payload : []);
      return {
        success: true,
        data: list,
        totalExcuses: payload?.totalExcuses ?? list.length,
        pagination: payload?.pagination || {
          currentPage: Number(cleanParams.page || 1),
          totalPages: Math.max(1, Math.ceil(list.length / Number(cleanParams.limit || 10))),
          limit: Number(cleanParams.limit || 10),
          totalItems: payload?.totalExcuses ?? list.length
        }
      };
    } catch (err) {
      return {
        success: false,
        data: [],
        totalExcuses: 0,
        pagination: {
          currentPage: Number(cleanParams.page || 1),
          totalPages: 1,
          limit: Number(cleanParams.limit || 10),
          totalItems: 0
        },
        message: err?.response?.data?.message || err?.message || 'Failed to fetch excuses'
      };
    }
  },
  fetchExcuseDetails: async (sessionId) => {
    if (!sessionId) return { success: false, data: null };
    try {
      const response = await api.get(`/api/v1/parent/sessions/${sessionId}/excuse`, {
        skipGlobalErrorToast: true
      });
      const item = response.data?.data || response.data;
      if (item && typeof item === 'object') {
        return { success: true, data: item, message: response.data?.message };
      }
      return { success: false, data: null };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: err?.response?.data?.message || err?.message || 'Failed to fetch excuse details'
      };
    }
  },
  createSessionExcuse: async (sessionId, payload) => {
    try {
      const response = await api.post(`/api/v1/parent/sessions/${sessionId}/excuse`, {
        studentId: payload.studentId,
        reason: payload.reason
      }, {
        skipGlobalErrorToast: true
      });
      const resData = response.data?.data || response.data;
      const isSuccess = response.data?.success !== undefined ? Boolean(response.data.success) : true;
      return {
        success: isSuccess,
        data: resData,
        message: response.data?.message || 'تم تقديم عذر الغياب بنجاح وجاري المتابعة'
      };
    } catch (err) {
      const errorMsg = err?.response?.data?.message || err?.message || 'تعذر تقديم عذر الغياب، يرجى المحاولة لاحقاً';
      return {
        success: false,
        message: errorMsg,
        data: null
      };
    }
  },
  fetchStudentEligibleSessions: async (studentId) => {
    if (!studentId) return { success: true, data: [] };
    const cleanParams = { studentId, status: 'scheduled,rescheduled' };
    try {
      const response = await api.get('/api/v1/parent/timetable', {
        params: cleanParams,
        skipGlobalErrorToast: true
      });
      const payload = response.data?.data || response.data;
      const allSessions = [];
      if (Array.isArray(payload?.days)) {
        payload.days.forEach((d) => {
          if (Array.isArray(d?.sessions)) {
            d.sessions.forEach((s) => {
              allSessions.push({
                ...s,
                group: extractSessionGroupName(s) || s.group || '',
                day: s.day || d.day || '',
                date: s.date || d.date || '',
                formattedDate: s.formattedDate || d.formattedDate || ''
              });
            });
          }
        });
      } else if (Array.isArray(payload?.sessions)) {
        payload.sessions.forEach((s) => {
          allSessions.push({
            ...s,
            group: extractSessionGroupName(s) || s.group || ''
          });
        });
      } else if (Array.isArray(payload)) {
        payload.forEach((s) => {
          allSessions.push({
            ...s,
            group: extractSessionGroupName(s) || s.group || ''
          });
        });
      }
      const eligible = allSessions.filter((s) => {
        const st = String(s.status || '').toLowerCase();
        return st === 'scheduled' || st === 'rescheduled' || st.includes('مجدول') || st.includes('قادم');
      });
      if (eligible.length > 0) {
        return { success: true, data: eligible };
      }
    } catch (err) { void err; }
    try {
      const dashRes = await parentApi.fetchDashboard();
      const upSessions = Array.isArray(dashRes?.data?.upcomingSessions) ? dashRes.data.upcomingSessions : [];
      const matched = upSessions.filter((s) => {
        const matchesStudent = !s.studentId || String(s.studentId) === String(studentId) || !s.student || String(s.student) === String(studentId);
        const st = String(s.status || '').toLowerCase();
        const isStatusOk = st === 'scheduled' || st === 'rescheduled' || st.includes('مجدول') || st.includes('عادية');
        return matchesStudent && isStatusOk;
      }).map((s) => ({
        ...s,
        group: extractSessionGroupName(s) || s.group || ''
      }));
      return { success: true, data: matched };
    } catch {
      return { success: true, data: [] };
    }
  },
  fetchPackages: async (params = {}) => {
    const response = await api.get('/api/v1/parent/packages', { params, skipLang: true });
    return response.data;
  },
  fetchPackageDetails: async (id) => {
    const response = await api.get(`/api/v1/parent/packages/${id}`, { skipLang: true });
    return response.data?.data || response.data;
  },
  fetchChildrenTeachers: async () => {
    const response = await api.get('/api/v1/parent/teachers', { skipLang: true });
    const payload = response.data?.data ?? response.data;
    return Array.isArray(payload) ? payload : [];
  },
  submitTeacherEvaluation: async (teacherId, { rating, notes }) => {
    const response = await api.post(`/api/v1/parent/teachers/${teacherId}/evaluations`, {
      rating: Number(rating),
      notes: String(notes || '').trim()
    }, { skipLang: true });
    return response.data;
  },
  fetchTeacherEvaluationsHistory: async (params = {}) => {
    const response = await api.get('/api/v1/parent/teachers/evaluations', {
      params,
      skipLang: true
    });
    return response.data;
  },
  fetchTrialSessionsAndEligibility: async () => {
    const response = await api.get('/api/v1/parent/trial-sessions', {
      skipGlobalErrorToast: true
    });
    return response.data;
  },
  fetchTrialCurricula: async () => {
    const response = await api.get('/api/v1/parent/trial-sessions/curricula', {
      skipGlobalErrorToast: true
    });
    return response.data;
  },
  requestTrialSession: async (payload) => {
    const response = await api.post('/api/v1/parent/trial-sessions', payload);
    return response.data;
  },
  fetchTrialSessionDetails: async (id) => {
    const response = await api.get(`/api/v1/parent/trial-sessions/${id}`, {
      skipGlobalErrorToast: true
    });
    return response.data;
  }
};

export default parentApi;
