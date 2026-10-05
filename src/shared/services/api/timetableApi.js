import api from './axiosConfig'

const TIMETABLE_URL = '/api/v1/timetable/private'

export const timetableApi = {
  // `date` wins over `weekOffset`; `teacherId` is only sent when a teacher is selected.
  fetchPrivateTimetable: async ({ weekOffset, date, teacherId } = {}) => {
    const params = date ? { date } : { weekOffset: weekOffset ?? 0 }
    if (teacherId) params.teacherId = teacherId
    const response = await api.get(TIMETABLE_URL, { params })
    return response.data
  },
}
