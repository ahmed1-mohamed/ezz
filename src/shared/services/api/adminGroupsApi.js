import api from './axiosConfig';

const CREATE_FIELDS = ['country', 'curriculum', 'studentLevel', 'language', 'maxStudents', 'teacher', 'type', 'startDate', 'endDate', 'status'];
const UPDATE_FIELDS = ['country', 'maxStudents', 'startDate', 'endDate'];

const buildGroupFormData = (data = {}, fields) => {
  const fd = new FormData();
  const nameAr = typeof data.name === 'object' && data.name !== null ? data.name.ar : data.nameAr;
  const nameEn = typeof data.name === 'object' && data.name !== null ? data.name.en : data.nameEn;
  if (nameAr) fd.append('name[ar]', nameAr);
  if (nameEn) fd.append('name[en]', nameEn);
  fields.forEach((key) => {
    if (data[key] !== undefined && data[key] !== null && data[key] !== '') fd.append(key, data[key]);
  });
  if (data.imageFile instanceof File) fd.append('image', data.imageFile);
  if (fields === CREATE_FIELDS) {
    (data.weeklySchedule || []).forEach((slot, i) => {
      fd.append(`weeklySchedule[${i}][day]`, String(slot.day).toLowerCase());
      fd.append(`weeklySchedule[${i}][startTime]`, slot.startTime);
      fd.append(`weeklySchedule[${i}][endTime]`, slot.endTime);
    });
  }
  return fd;
};

export const adminGroupsApi = {
  fetchGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private', { params });
    return response.data;
  },

  fetchLocalizedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private/localized/all', { params });
    return response.data;
  },

  fetchLocalizedPendingGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private/localized/pending', { params });
    return response.data;
  },

  fetchLocalizedActiveGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private/localized/active', { params });
    return response.data;
  },

  fetchLocalizedStoppedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private/localized/stopped', { params });
    return response.data;
  },

  fetchLocalizedCompletedGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private/localized/completed', { params });
    return response.data;
  },

  fetchGroupByIdLocalized: async (id, params = {}) => {
    try {
      const response = await api.get(`/api/v1/groups/private/localized/${id}`, { params });
      return response.data;
    } catch {
      const rawRes = await api.get(`/api/v1/groups/private/${id}`, { params });
      return rawRes.data;
    }
  },

  fetchGroupByIdRaw: async (id, params = {}) => {
    const response = await api.get(`/api/v1/groups/private/${id}`, { params });
    return response.data;
  },

  // Edit form source: English response gives the enum values (day/status/type) the write endpoints expect.
  fetchGroupForEdit: async (id) => {
    const response = await api.get(`/api/v1/groups/private/${id}`, {
      headers: { 'Accept-Language': 'en' },
      skipCache: true,
    });
    const group = response.data?.data || response.data || null;
    if (!group) return null;
    const lower = (v) => (typeof v === 'string' ? v.toLowerCase() : v);
    return {
      ...group,
      status: lower(group.status),
      type: lower(group.type),
      weeklySchedule: (group.weeklySchedule || []).map((s) => ({ ...s, day: lower(s.day) })),
    };
  },

  fetchGroupById: async (id, params = {}) => {
    return adminGroupsApi.fetchGroupByIdLocalized(id, params);
  },

  // POST /groups/private (multipart): name[ar], name[en], image(file), country, curriculum, studentLevel,
  // language, maxStudents, teacher, type, startDate, endDate, status, weeklySchedule[i][day|startTime|endTime]
  createGroup: async (groupData) => {
    const response = await api.post('/api/v1/groups/private', buildGroupFormData(groupData, CREATE_FIELDS), {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  // PATCH /groups/private/:id only accepts name, image, country, maxStudents, startDate, endDate.
  // Schedule, status and teacher have their own endpoints.
  updateGroup: async (id, groupData) => {
    const response = await api.patch(`/api/v1/groups/private/${id}`, buildGroupFormData(groupData, UPDATE_FIELDS), {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  deleteGroup: async (id) => {
    const response = await api.delete(`/api/v1/groups/private/${id}`);
    return response.data;
  },

  addStudentToGroup: async (groupId, payload) => {
    const studentId = typeof payload === 'string'
      ? payload
      : (payload?.student_id || payload?.student || payload?.id || payload?._id);
    const response = await api.post(`/api/v1/groups/private/${groupId}/students`, { student: studentId });
    return response.data;
  },

  removeStudentFromGroup: async (groupId, studentId) => {
    const cleanStudentId = typeof studentId === 'object' && studentId !== null
      ? (studentId.student_id || studentId.id || studentId._id)
      : studentId;
    const response = await api.delete(`/api/v1/groups/private/${groupId}/students/${cleanStudentId}`);
    return response.data;
  },

  fetchTeachersList: async (params = {}) => {
    const response = await api.get('/api/v1/teachers/private/list', { params });
    return response.data;
  },

  changeTeacher: async (groupId, payload) => {
    const teacherId = typeof payload === 'string'
      ? payload
      : (payload?.teacher || payload?.teacherId || payload?.id || payload?._id);
    const response = await api.patch(`/api/v1/groups/private/${groupId}/change-teacher`, { teacher: teacherId });
    return response.data;
  },

  // PATCH /groups/private/:id/schedule { weeklySchedule: [{ day: 'sunday', startTime: 'HH:mm', endTime: 'HH:mm' }] }
  updateGroupSchedule: async (groupId, weeklySchedule) => {
    const body = {
      weeklySchedule: (weeklySchedule || []).map((s) => ({
        day: String(s.day || '').toLowerCase(),
        startTime: s.startTime,
        endTime: s.endTime,
      })),
    };
    const response = await api.patch(`/api/v1/groups/private/${groupId}/schedule`, body);
    return response.data;
  },

  // PATCH /groups/private/:id/status { status: 'active' | 'pending' | 'stopped' | 'completed' }
  updateGroupStatus: async (groupId, status) => {
    const response = await api.patch(`/api/v1/groups/private/${groupId}/status`, { status });
    return response.data;
  },

  transferStudent: async (groupId, payload) => {
    const body = {
      student: payload?.student || payload?.student_id || payload?.studentId,
      targetGroup: payload?.targetGroup || payload?.targetGroupId,
    };
    const response = await api.post(`/api/v1/groups/private/${groupId}/students/transfer`, body);
    return response.data;
  },
};
