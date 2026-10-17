import api from './axiosConfig';

export const mapSessionData = (item) => {
  if (!item) return null;
  const id = item.id || item._id;

  let groupName = '';
  let groupId = null;
  if (item.group && typeof item.group === 'object') {
    groupId = item.group.id || item.group._id;
    if (typeof item.group.name === 'object' && item.group.name !== null) {
      groupName = item.group.name.ar || item.group.name.en || '';
    } else {
      groupName = item.group.name || '';
    }
  } else if (item.groupName) {
    groupName = typeof item.groupName === 'object' && item.groupName !== null
      ? (item.groupName.ar || item.groupName.en || '')
      : String(item.groupName);
  } else if (typeof item.group === 'string') {
    groupName = item.group;
  }

  let teacherName = '';
  let teacherId = null;
  let teacherEmail = '';
  let teacherPhone = '';
  if (item.teacher && typeof item.teacher === 'object') {
    teacherId = item.teacher.id || item.teacher._id;
    teacherEmail = item.teacher.email || '';
    teacherPhone = item.teacher.phone || '';
    if (typeof item.teacher.name === 'object' && item.teacher.name !== null) {
      teacherName = item.teacher.name.ar || item.teacher.name.en || '';
    } else {
      teacherName = item.teacher.name || '';
    }
  } else if (typeof item.teacher === 'string') {
    teacherName = item.teacher;
  }

  const startTime = item.startTime || item.time || '';
  const endTime = item.endTime || '';
  const time = (startTime && endTime) ? `${startTime} - ${endTime}` : startTime;
  const durationMinutes = Number(item.durationMinutes ?? item.duration ?? 60);

  const attendance = Array.isArray(item.attendance) ? item.attendance : [];
  const studentsCount = attendance.length > 0 
    ? attendance.length 
    : Number(item.studentsCount ?? item.students?.length ?? 0);

  // Normalize status
  let status = (item.status || 'scheduled').toLowerCase();
  if (status === 'upcoming') status = 'scheduled';

  return {
    ...item,
    id,
    _id: id,
    title: item.title || '',
    sessionNumber: item.sessionNumber ?? '',
    group: item.group,
    groupId,
    groupName: groupName || 'مجموعة دراسية',
    teacher: teacherName || 'غير محدد',
    teacherId,
    teacherEmail,
    teacherPhone,
    date: item.date || '',
    day: item.day || '',
    rawDay: item.rawDay || '',
    startTime,
    endTime,
    time,
    duration: durationMinutes,
    durationMinutes,
    studentsCount,
    status,
    type: item.type || 'regular',
    zoomJoinUrl: item.zoomJoinUrl || '',
    attendance,
    teacherAttendance: item.teacherAttendance || null,
  };
};

export const adminSessionsApi = {
  fetchSessions: async (params = {}) => {
    const { page = 1, limit = 10, status, search, ...rest } = params;
    const queryParams = { page, limit, ...rest };

    if (search && typeof search === 'string' && search.trim()) {
      queryParams.search = search.trim();
    }
    if (status && status !== 'all') {
      queryParams.status = status;
    }

    const endpoints = [
      '/api/v1/sessions/private',
      '/api/v1/sessions',
      '/api/v1/admin/sessions',
    ];

    let lastError = null;
    for (const ep of endpoints) {
      try {
        const response = await api.get(ep, { params: queryParams });
        const resData = response.data || {};
        const rawList = resData.data || (Array.isArray(resData) ? resData : []);
        const items = Array.isArray(rawList) ? rawList.map(mapSessionData).filter(Boolean) : [];

        const totalCount = resData.pagination?.totalCount ?? resData.pagination?.total ?? items.length;
        const pagination = resData.pagination || {
          currentPage: page,
          limit,
          numberOfPages: Math.max(1, Math.ceil(totalCount / limit)),
          totalCount,
        };

        return {
          ...resData,
          success: true,
          data: items,
          pagination,
          totalCount,
        };
      } catch (err) {
        lastError = err;
        // Continue to fallback endpoint if 404
        if (err.response?.status !== 404) {
          break;
        }
      }
    }

    console.warn('API fetchSessions failed:', lastError);
    return {
      success: false,
      data: [],
      pagination: { currentPage: page, limit, numberOfPages: 1, totalCount: 0 },
      error: lastError,
    };
  },

  rescheduleSession: async (id, newDate, newTime) => {
    try {
      const response = await api.put(`/api/v1/sessions/private/${id}/reschedule`, {
        date: newDate,
        startTime: newTime,
        time: newTime,
      });
      return { success: true, data: response.data };
    } catch (error) {
      try {
        const fallbackRes = await api.patch(`/api/v1/sessions/${id}`, {
          date: newDate,
          startTime: newTime,
        });
        return { success: true, data: fallbackRes.data };
      } catch (err2) {
        console.warn('rescheduleSession failed:', error);
        return { success: false, error: err2 };
      }
    }
  },

  changeTeacher: async (id, teacherId, teacherName) => {
    try {
      const response = await api.put(`/api/v1/sessions/private/${id}/teacher`, {
        teacher: teacherId,
        teacherId,
        teacherName,
      });
      return { success: true, data: response.data };
    } catch (error) {
      try {
        const fallbackRes = await api.patch(`/api/v1/sessions/${id}`, {
          teacher: teacherId,
        });
        return { success: true, data: fallbackRes.data };
      } catch (err2) {
        console.warn('changeTeacher failed:', error);
        return { success: false, error: err2 };
      }
    }
  },

  cancelSession: async (id) => {
    try {
      const response = await api.put(`/api/v1/sessions/private/${id}/cancel`);
      return { success: true, data: response.data, message: 'Session cancelled' };
    } catch (error) {
      try {
        const fallbackRes = await api.patch(`/api/v1/sessions/${id}`, { status: 'cancelled' });
        return { success: true, data: fallbackRes.data, message: 'Session cancelled' };
      } catch (err2) {
        console.warn('cancelSession failed:', error);
        return { success: false, error: err2 };
      }
    }
  },
};

export default adminSessionsApi;
