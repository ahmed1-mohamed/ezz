import api from './axiosConfig'

const TIMETABLE_URL = '/api/v1/timetable/private'

export const timetableApi = {
   fetchPrivateTimetable: async ({ weekOffset, date, teacherId } = {}) => {
    const params = date ? { date } : { weekOffset: weekOffset ?? 0 }
    if (teacherId) params.teacherId = teacherId
    const response = await api.get(TIMETABLE_URL, { params, skipLang: true })
    return response.data
  },
}
