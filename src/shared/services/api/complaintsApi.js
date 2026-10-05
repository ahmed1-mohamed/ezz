import api from './axiosConfig'

const BASE_URL = '/api/v1/complaints-suggestions/private'

const STATUS_ENDPOINTS = {
  all: BASE_URL,
  pending: `${BASE_URL}/pending`,
  resolved: `${BASE_URL}/resolved`,
  rejected: `${BASE_URL}/rejected`,
}

// The backend rejects empty query values, so only meaningful params are forwarded.
const cleanParams = (params = {}) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  )

export const complaintsApi = {
  fetchComplaints: async ({ status = 'all', ...params } = {}) => {
    const endpoint = STATUS_ENDPOINTS[status] || STATUS_ENDPOINTS.all
    const response = await api.get(endpoint, { params: cleanParams(params) })
    return response.data
  },

  fetchComplaintById: async (id) => {
    const response = await api.get(`${BASE_URL}/${id}`)
    return response.data?.data || null
  },

  // Resolving a complaint and accepting a suggestion are the same action from the admin's point of view.
  resolveComplaint: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/resolve/${id}`, { notes })
    return response.data
  },

  acceptSuggestion: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/accept/${id}`, { notes })
    return response.data
  },

  rejectComplaint: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/reject/${id}`, { notes })
    return response.data
  },

  deleteComplaint: async (id) => {
    const response = await api.delete(`${BASE_URL}/${id}`)
    return response.data
  },
}
