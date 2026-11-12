import api from './axiosConfig'

export const adminTrialSessionsApi = {
  fetchTrialSessions: async (params = {}) => {
    try {
      const cleanParams = {}
      if (params.page) cleanParams.page = params.page
      if (params.limit) cleanParams.limit = params.limit
      if (params.status && params.status !== 'all') cleanParams.status = params.status
      if (params.search && params.search.trim()) cleanParams.search = params.search.trim()
      const response = await api.get('/api/v1/trial-sessions/private', { params: cleanParams })
      return response.data
    } catch (error) {
      console.error('API fetchTrialSessions failed:', error)
      throw error
    }
  },

  fetchTrialSessionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/trial-sessions/private/${id}`)
      return response.data
    } catch (error) {
      console.error(`API fetchTrialSessionById(${id}) failed:`, error)
      throw error
    }
  },

  fetchAvailableGroups: async (id) => {
    try {
      const response = await api.get(`/api/v1/trial-sessions/private/${id}/available-groups`)
      return response.data
    } catch (error) {
      console.error(`API fetchAvailableGroups(${id}) failed:`, error)
      throw error
    }
  },

  assignSession: async (id, payload = {}) => {
    try {
      const rawGroupId = payload.groupId || payload.group
      const rawSessionId = payload.sessionId || payload.session
      const groupId = typeof rawGroupId === 'object' && rawGroupId !== null ? (rawGroupId.id || rawGroupId._id) : rawGroupId
      const sessionId = typeof rawSessionId === 'object' && rawSessionId !== null ? (rawSessionId.id || rawSessionId._id) : rawSessionId
      const body = {
        groupId: String(groupId || '').trim(),
        sessionId: String(sessionId || '').trim(),
      }
      const response = await api.patch(`/api/v1/trial-sessions/private/${id}/assign-session`, body)
      return response.data
    } catch (error) {
      console.error(`API assignSession(${id}) failed:`, error)
      throw error
    }
  },

  cancelTrialSession: async (id, payload = {}) => {
    try {
      const body = typeof payload === 'string' ? { reason: payload } : (payload || {})
      const response = await api.patch(`/api/v1/trial-sessions/private/${id}/cancel`, body)
      return response.data
    } catch (error) {
      console.error(`API cancelTrialSession(${id}) failed:`, error)
      throw error
    }
  },

  fetchWebsiteTrialSessions: async (params = {}) => {
    try {
      const cleanParams = {}
      if (params.page !== undefined && params.page !== null) {
        cleanParams.page = params.page
      }
      if (params.limit !== undefined && params.limit !== null) {
        cleanParams.limit = params.limit
      }
      const statusStr = String(params.status || '').toLowerCase().trim()
      if (statusStr && statusStr !== 'all') {
        const allowedStatuses = ['pending', 'accepted', 'rejected']
        if (allowedStatuses.includes(statusStr)) {
          cleanParams.status = statusStr
        }
      }
      const response = await api.get('/api/v1/trial-sessions/website/private', { params: cleanParams })
      return response.data
    } catch (error) {
      console.error('API fetchWebsiteTrialSessions failed:', error)
      throw error
    }
  },

  fetchWebsiteTrialSessionById: async (id) => {
    try {
      const response = await api.get(`/api/v1/trial-sessions/website/private/${id}`)
      return response.data
    } catch (error) {
      console.error(`API fetchWebsiteTrialSessionById(${id}) failed:`, error)
      throw error
    }
  },

  updateWebsiteTrialSession: async (id, data = {}) => {
    try {
      const rawStatus = typeof data === 'string' ? data : (data?.status || '')
      const normalizedStatus = String(rawStatus).toLowerCase().trim()
      const status = normalizedStatus === 'rejected' ? 'rejected' : 'accepted'
      const payload = { status }
      const response = await api.patch(`/api/v1/trial-sessions/website/private/${id}`, payload)
      return response.data
    } catch (error) {
      console.error(`API updateWebsiteTrialSession(${id}) failed:`, error)
      throw error
    }
  },
}

