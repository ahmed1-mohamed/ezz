import api from './axiosConfig';

export const extractSafeString = (val, preferredLang = 'ar', fallback = '') => {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string') return val.trim();
  if (typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    const langVal = val[preferredLang] || val.ar || val.en || val.name || val.title || val.label;
    if (langVal !== undefined && langVal !== null) {
      return extractSafeString(langVal, preferredLang, fallback);
    }
    return fallback;
  }
  return String(val).trim();
};

export const formatTime12h = (timeStr, isRtl = true) => {
  if (!timeStr) return '-';
  const cleanStr = String(timeStr).trim();
  if (!cleanStr) return '-';

  if (cleanStr.includes(' - ')) {
    const parts = cleanStr.split(' - ').map((s) => s.trim());
    return `${formatTime12h(parts[0], isRtl)} - ${formatTime12h(parts[1], isRtl)}`;
  }

  if (cleanStr.includes('T')) {
    const d = new Date(cleanStr);
    if (!isNaN(d.getTime())) {
      let hours = d.getHours();
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? (isRtl ? 'م' : 'PM') : (isRtl ? 'ص' : 'AM');
      hours = hours % 12 || 12;
      return `${hours.toString().padStart(2, '0')}:${minutes} ${period}`;
    }
  }

  const match = cleanStr.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
  if (match) {
    let hours = parseInt(match[1], 10);
    const minutes = match[2];
    const period = hours >= 12 ? (isRtl ? 'م' : 'PM') : (isRtl ? 'ص' : 'AM');
    hours = hours % 12 || 12;
    return `${hours.toString().padStart(2, '0')}:${minutes} ${period}`;
  }

  return cleanStr;
};

export const mapSessionData = (item) => {
  if (!item) return null;
  const id = item.id || item._id;

  let groupName = '';
  let groupId = null;
  if (item.group && typeof item.group === 'object') {
    groupId = item.group.id || item.group._id;
    groupName = extractSafeString(item.group.name) || extractSafeString(item.group.title) || '';
  } else if (item.groupName) {
    groupName = extractSafeString(item.groupName);
  } else if (typeof item.group === 'string') {
    groupName = item.group.trim();
  }

  let teacherName = '';
  let teacherId = null;
  let teacherEmail = '';
  let teacherPhone = '';
  if (item.teacher && typeof item.teacher === 'object') {
    teacherId = item.teacher.id || item.teacher._id;
    teacherEmail = extractSafeString(item.teacher.email);
    teacherPhone = extractSafeString(item.teacher.phone);
    teacherName = extractSafeString(item.teacher.displayName) || extractSafeString(item.teacher.name) || '';
  } else if (item.teacherName) {
    teacherName = extractSafeString(item.teacherName);
  } else if (typeof item.teacher === 'string') {
    teacherName = item.teacher.trim();
  }

  const title = extractSafeString(item.title);
  const sessionNumber = item.sessionNumber !== undefined && item.sessionNumber !== null
    ? (typeof item.sessionNumber === 'object' ? extractSafeString(item.sessionNumber) : item.sessionNumber)
    : '';

  const startTime = extractSafeString(item.startTime || item.time);
  const endTime = extractSafeString(item.endTime);
  const time = (startTime && endTime) ? `${startTime} - ${endTime}` : startTime;
  const durationMinutes = Number(item.durationMinutes ?? item.duration ?? 60) || 60;

  const date = extractSafeString(item.date);
  const day = extractSafeString(item.day);
  const rawDay = extractSafeString(item.rawDay);

  const attendance = Array.isArray(item.attendance) ? item.attendance : [];
  const studentsCount = attendance.length > 0 
    ? attendance.length 
    : (Number(item.studentsCount ?? item.students?.length ?? 0) || 0);

  const rawStatus = extractSafeString(item.status || '').toLowerCase();
  let status = 'scheduled';

  if (rawStatus === 'completed' || rawStatus === 'done' || rawStatus === 'finished' || rawStatus === 'مكتملة' || rawStatus === 'مكتمل' || item.isCompleted) {
    status = 'completed';
  } else if (rawStatus === 'cancelled' || rawStatus === 'canceled' || rawStatus === 'ملغاة' || rawStatus === 'ملغية' || item.isCancelled) {
    status = 'cancelled';
  } else if (rawStatus === 'live' || rawStatus === 'in_progress' || rawStatus === 'in-progress' || rawStatus === 'مباشر' || rawStatus === 'مباشرة' || rawStatus === 'جارية') {
    status = 'live';
  } else if (rawStatus === 'scheduled' || rawStatus === 'upcoming' || rawStatus === 'مجدولة' || rawStatus === 'قادمة') {
    status = 'scheduled';
  } else if (rawStatus) {
    status = rawStatus;
  }

  if (status === 'scheduled' && date) {
    try {
      const sessionDateStr = date.includes('T') ? date.split('T')[0] : date;
      const sessionEndTimeStr = endTime || startTime || '23:59';
      const cleanEndMatch = sessionEndTimeStr.match(/^(\d{1,2}):(\d{2})/);
      const cleanStartMatch = startTime ? startTime.match(/^(\d{1,2}):(\d{2})/) : null;

      if (cleanEndMatch) {
        const sessionEndDateTime = new Date(`${sessionDateStr}T${cleanEndMatch[1].padStart(2, '0')}:${cleanEndMatch[2]}:00`);
        const now = new Date();

        if (!isNaN(sessionEndDateTime.getTime())) {
          if (now > sessionEndDateTime) {
            status = 'completed';
          } else if (cleanStartMatch) {
            const sessionStartDateTime = new Date(`${sessionDateStr}T${cleanStartMatch[1].padStart(2, '0')}:${cleanStartMatch[2]}:00`);
            if (!isNaN(sessionStartDateTime.getTime()) && now >= sessionStartDateTime && now <= sessionEndDateTime) {
              status = 'live';
            }
          }
        }
      } else {
        const sDate = new Date(sessionDateStr);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (!isNaN(sDate.getTime()) && sDate < today) {
          status = 'completed';
        }
      }
    } catch (err) {
      void err;
    }
  }

  return {
    ...item,
    id,
    _id: id,
    title,
    sessionNumber,
    group: item.group,
    groupId,
    groupName: groupName || 'مجموعة دراسية',
    teacher: teacherName || 'غير محدد',
    teacherId,
    teacherEmail,
    teacherPhone,
    date,
    day,
    rawDay,
    startTime,
    endTime,
    time,
    duration: durationMinutes,
    durationMinutes,
    studentsCount,
    status,
    rawStatus,
    type: extractSafeString(item.type) || 'regular',
    zoomJoinUrl: extractSafeString(item.zoomJoinUrl),
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
      queryParams.status = status === 'live' ? 'in_progress' : status;
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
          statistics: resData.statistics || null,
        };
      } catch (err) {
        lastError = err;
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

  rescheduleSession: async (id, dateOrPayload, startTimeArg, endTimeArg) => {
    let payload;
    if (typeof dateOrPayload === 'object' && dateOrPayload !== null) {
      payload = {
        date: dateOrPayload.date,
        startTime: dateOrPayload.startTime,
        endTime: dateOrPayload.endTime,
      };
    } else {
      payload = {
        date: dateOrPayload,
        startTime: startTimeArg,
        endTime: endTimeArg,
      };
    }

    try {
      const response = await api.patch(`/api/v1/sessions/private/${id}/reschedule`, payload);
      return { success: true, data: response.data?.data || response.data };
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'فشلت عملية إعادة الجدولة';
      console.warn('API rescheduleSession failed:', error);
      return { success: false, error, message };
    }
  },

  changeTeacher: async (id, teacherId, reason) => {
    const cleanTeacherId = typeof teacherId === 'object' && teacherId !== null
      ? (teacherId.teacherId || teacherId.teacher || teacherId.id || teacherId._id)
      : teacherId;

    const cleanReason = typeof reason === 'string' && reason.trim()
      ? reason.trim()
      : (typeof teacherId === 'object' && teacherId?.reason ? String(teacherId.reason).trim() : undefined);

    const body = {
      teacherId: cleanTeacherId,
      ...(cleanReason ? { reason: cleanReason } : {}),
    };

    const endpoints = [
      { method: 'patch', url: `/api/v1/sessions/private/${id}/change-teacher` },
      { method: 'put', url: `/api/v1/sessions/private/${id}/change-teacher` },
      { method: 'patch', url: `/api/v1/sessions/${id}/change-teacher` },
      { method: 'patch', url: `/api/v1/sessions/private/${id}`, fallbackPayload: { teacher: cleanTeacherId, ...(cleanReason ? { reason: cleanReason } : {}) } },
    ];

    let lastError = null;
    for (const ep of endpoints) {
      try {
        const payloadToSend = ep.fallbackPayload || body;
        const response = await api[ep.method](ep.url, payloadToSend);
        return {
          success: true,
          data: response.data?.data || response.data,
          message: response.data?.message,
        };
      } catch (err) {
        lastError = err;
      }
    }

    const message = lastError?.response?.data?.message || lastError?.message || 'فشلت عملية تغيير المعلم';
    return { success: false, error: lastError, message };
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
