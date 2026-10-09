import api from './axiosConfig';

export const adminGroupsApi = {
  fetchGroups: async (params = {}) => {
    const response = await api.get('/api/v1/groups/private', { params });
    return response.data;
  },

  fetchGroupByIdLocalized: async (id, params = {}) => {
    try {
      const response = await api.get(`/api/v1/groups/private/localized/${id}`, { params });
      return response.data;
    } catch (error) {
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
    try {
      const response = await api.patch(`/api/v1/groups/private/${id}`, groupData);
      return response.data;
    } catch (error) {
      const putRes = await api.put(`/api/v1/groups/private/${id}`, groupData);
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
      : (payload?.studentId || payload?.student || payload?.id || payload?._id);

    const body = {
      student: studentId,
      studentId: studentId,
    };

    const response = await api.post(`/api/v1/groups/private/${groupId}/students`, body);
    return response.data;
  },

  removeStudentFromGroup: async (groupId, studentId) => {
    const response = await api.delete(`/api/v1/groups/private/${groupId}/students/${studentId}`);
    return response.data;
  },

  changeTeacher: async (groupId, payload) => {
    const teacherId = typeof payload === 'string'
      ? payload
      : (payload?.teacherId || payload?.teacher || payload?.id || payload?._id);

    const body = {
      teacher: teacherId,
      teacherId: teacherId,
    };

    const response = await api.patch(`/api/v1/groups/private/${groupId}/change-teacher`, body);
    return response.data;
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
    } catch (error) {
      const putRes = await api.put(`/api/v1/groups/private/${groupId}/schedule`, body);
      return putRes.data;
    }
  },

  /**
   * PATCH /api/v1/groups/private/{id}/status
   * Updates group status (active, suspended, completed).
   * Body: { "status": "active" }
   */
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
    } catch (error) {
      const putRes = await api.put(`/api/v1/groups/private/${groupId}/status`, body);
      return putRes.data;
    }
  },

  /**
   * POST /api/v1/groups/private/{id}/students/transfer
   * PATCH /api/v1/groups/private/{id}/students/transfer
   * Transfers a student from one group to a target group.
   * Body: { "student": "...", "targetGroup": "..." }
   */
  transferStudent: async (groupId, payload) => {
    const studentId = typeof payload === 'string'
      ? payload
      : (payload?.student || payload?.studentId || payload?.id || payload?._id);

    const targetGroupId = payload?.targetGroup || payload?.targetGroupId || payload?.toGroup;

    const body = {
      student: studentId,
      targetGroup: targetGroupId,
      studentId,
      targetGroupId,
    };

    try {
      const response = await api.post(`/api/v1/groups/private/${groupId}/students/transfer`, body);
      return response.data;
    } catch (error) {
      const patchRes = await api.patch(`/api/v1/groups/private/${groupId}/students/transfer`, body);
      return patchRes.data;
    }
  },
};
