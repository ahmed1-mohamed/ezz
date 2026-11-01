import api from './axiosConfig';

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

  fetchGroupById: async (id, params = {}) => {
    return adminGroupsApi.fetchGroupByIdLocalized(id, params);
  },

  createGroup: async (groupData) => {
    const response = await api.post('/api/v1/groups/private', groupData);
    return response.data;
  },

  updateGroup: async (id, groupData) => {
    const cleanData = {};
    if (groupData.name !== undefined) {
      cleanData.name = typeof groupData.name === 'object' && groupData.name !== null
        ? {
            ar: groupData.name.ar || groupData.nameAr || '',
            en: groupData.name.en || groupData.nameEn || '',
          }
        : groupData.name;
    }
    if (groupData.image !== undefined && groupData.image) cleanData.image = groupData.image;
    if (groupData.country !== undefined && groupData.country) cleanData.country = groupData.country;
    if (groupData.maxStudents !== undefined || groupData.max_students !== undefined) {
      cleanData.maxStudents = Number(groupData.maxStudents || groupData.max_students);
    }
    const start = groupData.startTime || groupData.startDate;
    const end = groupData.endTime || groupData.endDate;
    if (start) {
      cleanData.startDate = start;
      cleanData.startTime = start;
    }
    if (end) {
      cleanData.endDate = end;
      cleanData.endTime = end;
    }

    try {
      const response = await api.patch(`/api/v1/groups/private/${id}`, cleanData);
      return response.data;
    } catch {
      const putRes = await api.put(`/api/v1/groups/private/${id}`, cleanData);
      return putRes.data;
    }
  },

  deleteGroup: async (id) => {
    const response = await api.delete(`/api/v1/groups/private/${id}`);
    return response.data;
  },

  addStudentToGroup: async (groupId, payload) => {
    const studentId = typeof payload === 'string'
      ? payload
      : (payload?.student || payload?.studentId || payload?.id || payload?._id);

    const body = {
      student: studentId,
    };

    const response = await api.post(`/api/v1/groups/private/${groupId}/students`, body);
    return response.data;
  },

  removeStudentFromGroup: async (groupId, studentId) => {
    const cleanStudentId = typeof studentId === 'object' && studentId !== null
      ? (studentId.student_id || studentId.studentId || studentId.id || studentId._id)
      : studentId;

    try {
      const response = await api.delete(`/api/v1/groups/private/${groupId}/students/${cleanStudentId}`);
      return response.data;
    } catch (err) {
      try {
        const res2 = await api.delete(`/api/v1/groups/private/${groupId}/students`, {
          data: { student: cleanStudentId, student_id: cleanStudentId }
        });
        return res2.data;
      } catch {
        throw err;
      }
    }
  },

  changeTeacher: async (groupId, payload) => {
    const cleanGroupId = typeof groupId === 'object' && groupId !== null
      ? (groupId.id || groupId._id)
      : groupId;

    const cleanTeacherId = typeof payload === 'string'
      ? payload
      : (payload?.teacherId || payload?.teacher || payload?.id || payload?._id);

    const attempts = [
      () => api.patch(`/api/v1/groups/private/${cleanGroupId}/change-teacher`, { teacherId: cleanTeacherId }),
      () => api.patch(`/api/v1/groups/private/${cleanGroupId}/change-teacher`, { teacher: cleanTeacherId }),
      () => api.post(`/api/v1/groups/private/${cleanGroupId}/change-teacher`, { teacherId: cleanTeacherId }),
      () => api.post(`/api/v1/groups/private/${cleanGroupId}/change-teacher`, { teacher: cleanTeacherId }),
      () => api.put(`/api/v1/groups/private/${cleanGroupId}/change-teacher`, { teacherId: cleanTeacherId }),
      () => api.patch(`/api/v1/groups/${cleanGroupId}/change-teacher`, { teacherId: cleanTeacherId }),
      () => api.patch(`/api/v1/groups/private/${cleanGroupId}`, { teacher: cleanTeacherId }),
      () => api.put(`/api/v1/groups/private/${cleanGroupId}`, { teacher: cleanTeacherId }),
    ];

    let lastError = null;
    for (const attempt of attempts) {
      try {
        const response = await attempt();
        return response.data;
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  },

  updateGroupSchedule: async (groupId, payload) => {
    const weeklySchedule = Array.isArray(payload)
      ? payload
      : (payload?.weeklySchedule || payload?.schedule || []);

    const formattedSchedule = weeklySchedule.map((s) => ({
      day: (s.day || '').toLowerCase(),
      startTime: s.startTime || s.timeFrom || '16:00',
      endTime: s.endTime || s.timeTo || '17:30',
    }));

    const body = {
      weeklySchedule: formattedSchedule,
    };

    try {
      const response = await api.patch(`/api/v1/groups/private/${groupId}/schedule`, body);
      return response.data;
    } catch {
      const putRes = await api.put(`/api/v1/groups/private/${groupId}/schedule`, body);
      return putRes.data;
    }
  },

  updateGroupStatus: async (groupId, statusOrPayload) => {
    let rawStatus = typeof statusOrPayload === 'string'
      ? statusOrPayload
      : (statusOrPayload?.status || 'active');

    const statusMap = {
      'نشط': 'active',
      'متوقف': 'suspended',
      'مكتمل': 'completed',
    };
    const status = statusMap[rawStatus] || rawStatus;
    const body = { status };

    try {
      const response = await api.patch(`/api/v1/groups/private/${groupId}/status`, body);
      return response.data;
    } catch {
      const putRes = await api.put(`/api/v1/groups/private/${groupId}/status`, body);
      return putRes.data;
    }
  },

  transferStudent: async (groupId, payload) => {
    const studentId = typeof payload === 'string'
      ? payload
      : (payload?.student_id || payload?.student || payload?.studentId || payload?.id || payload?._id);

    const targetGroupId = payload?.targetGroup || payload?.targetGroupId || payload?.toGroup;

    const body = {
      student: studentId,
      targetGroup: targetGroupId,
    };

    try {
      const response = await api.post(`/api/v1/groups/private/${groupId}/students/transfer`, body);
      return response.data;
    } catch {
      try {
        const patchRes = await api.patch(`/api/v1/groups/private/${groupId}/students/transfer`, body);
        return patchRes.data;
      } catch {
        const altRes = await api.post(`/api/v1/groups/private/${groupId}/transfer-student`, body);
        return altRes.data;
      }
    }
  },
};
