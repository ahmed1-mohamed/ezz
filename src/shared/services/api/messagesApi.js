import api from './axiosConfig'

export const messagesApi = {
  fetchAllMessages: async (params) => {
    try {
      const response = await api.get('/api/v1/messages/private', { params }).catch(async () => {
        const responseAlt = await api.get('/api/v1/messages/private/all', { params }).catch(async () => {
          const [readRes, unreadRes] = await Promise.all([
            api.get('/api/v1/messages/private/read', { params }),
            api.get('/api/v1/messages/private/unread', { params })
          ])
          const readData = Array.isArray(readRes.data?.data) ? readRes.data.data : (Array.isArray(readRes.data) ? readRes.data : [])
          const unreadData = Array.isArray(unreadRes.data?.data) ? unreadRes.data.data : (Array.isArray(unreadRes.data) ? unreadRes.data : [])
          return { data: [...unreadData, ...readData] }
        })
        return responseAlt.data || responseAlt
      })
      return response.data || response
    } catch (error) {
      console.error('Error fetching all messages:', error)
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

  fetchMessageStats: async (params = {}) => {
    try {
      const [allRes, unreadRes, readRes] = await Promise.allSettled([
        api.get('/api/v1/messages/private', { params }),
        api.get('/api/v1/messages/private/unread', { params }),
        api.get('/api/v1/messages/private/read', { params })
      ])

      const extractCount = (res) => {
        if (res.status !== 'fulfilled') return 0;
        const d = res.value?.data;
        if (Array.isArray(d?.data)) return d.data.length;
        if (Array.isArray(d)) return d.length;
        if (typeof d?.total === 'number') return d.total;
        if (typeof d?.count === 'number') return d.count;
        return 0;
      };

      const total = extractCount(allRes);
      const unread = extractCount(unreadRes);
      const read = extractCount(readRes);

      return {
        total: total || (unread + read),
        unread,
        read
      };
    } catch (error) {
      console.error('Error fetching message stats:', error);
      return { total: 0, unread: 0, read: 0 };
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
