import api from './axiosConfig'

export const explanationLanguagesApi = {
  fetchLanguages: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/explanation-languages/private/localized/all', { params })
      return response.data
    } catch (error) {
      console.error('API fetchLanguages failed:', error)
      throw error
    }
  },

  fetchLanguageById: async (id) => {
    try {
      const response = await api.get(`/api/v1/explanation-languages/private/${id}`)
      return response.data
    } catch (error) {
      console.error('API fetchLanguageById failed:', error)
      throw error
    }
  },

  createLanguage: async (payload) => {
    try {
      const response = await api.post('/api/v1/explanation-languages/private', payload)
      return response.data
    } catch (error) {
      console.error('API createLanguage failed:', error)
      throw error
    }
  },

  updateLanguage: async (id, payload) => {
    try {
      const response = await api.patch(`/api/v1/explanation-languages/private/${id}`, payload)
      return response.data
    } catch (error) {
      console.error('API updateLanguage failed:', error)
      throw error
    }
  },

  deleteLanguage: async (id) => {
    try {
      const response = await api.delete(`/api/v1/explanation-languages/private/${id}`)
      return response.data
    } catch (error) {
      console.error('API deleteLanguage failed:', error)
      throw error
    }
  }
}
