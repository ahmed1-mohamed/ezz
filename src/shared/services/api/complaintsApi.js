import api from './axiosConfig'

const BASE_URL = '/api/v1/complaints-suggestions/private'

// The backend rejects empty query values, so only meaningful params are forwarded.
const cleanParams = (params = {}) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  )

export const complaintsApi = {
  fetchComplaints: async ({ status, type, page, limit, ...otherParams } = {}) => {
    const queryParams = cleanParams({
      ...(status && status !== 'all' ? { status } : {}),
      ...(type ? { type } : {}),
      ...(page ? { page } : {}),
      ...(limit ? { limit } : {}),
      ...otherParams,
    })

    const response = await api.get(BASE_URL, {
      params: queryParams,
      skipLang: true,
    })
    return response.data
  },

  fetchComplaintById: async (id) => {
    const response = await api.get(`${BASE_URL}/${id}`, { skipLang: true })
    return response.data?.data || response.data || null
  },

  // Resolving a complaint and accepting a suggestion are the same action from the admin's point of view.
  resolveComplaint: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/resolve/${id}`, { notes }, { skipLang: true })
    return response.data
  },

  acceptSuggestion: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/accept/${id}`, { notes }, { skipLang: true })
    return response.data
  },

  rejectComplaint: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/reject/${id}`, { notes }, { skipLang: true })
    return response.data
  },

  deleteComplaint: async (id) => {
    const response = await api.delete(`${BASE_URL}/${id}`, { skipLang: true })
    return response.data
  },
}
