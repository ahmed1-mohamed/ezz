import api from './axiosConfig'

export const messagesApi = {
  fetchMessages: async (params) => {
    try {
      const [readRes, unreadRes] = await Promise.all([
        api.get('/api/v1/messages/private/read', { params }),
        api.get('/api/v1/messages/private/unread', { params })
      ])
      
      const readData = Array.isArray(readRes.data?.data) ? readRes.data.data : (Array.isArray(readRes.data) ? readRes.data : [])
      const unreadData = Array.isArray(unreadRes.data?.data) ? unreadRes.data.data : (Array.isArray(unreadRes.data) ? unreadRes.data : [])
      
      const combined = [...unreadData, ...readData]
      
      return {
        data: combined,
        statistics: {
          total: combined.length,
          read: readData.length,
          unread: unreadData.length
        }
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
      throw error
    }
  },

  fetchReadMessages: async (params) => {
    try {
      const response = await api.get('/api/v1/messages/private/read', { params })
      return response.data
    } catch (error) {
      console.error('Error fetching read messages:', error)
      throw error
    }
  },

  fetchUnreadMessages: async (params) => {
    try {
      const response = await api.get('/api/v1/messages/private/unread', { params })
      return response.data
    } catch (error) {
      console.error('Error fetching unread messages:', error)
      throw error
    }
  },

  fetchMessageById: async (id) => {
    try {
      const response = await api.get(`/api/v1/messages/private/${id}`)
      return response.data?.data || null
    } catch (error) {
      console.error(`Error fetching message details for ${id}:`, error)
      throw error
    }
  },

  deleteMessage: async (id) => {
    try {
      const response = await api.delete(`/api/v1/messages/private/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting message ${id}:`, error)
      throw error
    }
  },

}
