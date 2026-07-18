import api from './axiosConfig'

export const messagesApi = {
  fetchMessages: async (params) => {
    try {
      const response = await api.get('/api/v1/messages/private', { params })
      return response.data
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
