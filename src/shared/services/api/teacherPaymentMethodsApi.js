import api from './axiosConfig'

const BASE_URL = '/api/v1/teacher/payment-methods'

const buildFormData = (payload) => {
  const formData = new FormData()
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'verificationImage') {
        if (value instanceof File || value instanceof Blob) {
          formData.append('verificationImage', value)
        }
      } else {
        formData.append(key, typeof value === 'boolean' ? String(value) : value)
      }
    }
  })
  return formData
}

export const teacherPaymentMethodsApi = {
  fetchPaymentMethods: async () => {
    const response = await api.get(BASE_URL, { skipLang: true })
    return response.data
  },

  addPaymentMethod: async (payload) => {
    const hasFile = payload?.verificationImage instanceof File || payload?.verificationImage instanceof Blob
    const body = hasFile ? buildFormData(payload) : payload
    const headers = hasFile ? { 'Content-Type': 'multipart/form-data' } : undefined
    const response = await api.post(BASE_URL, body, { headers, skipLang: true })
    return response.data
  },

  updatePaymentMethod: async (methodId, payload) => {
    const { type, ...cleanPayload } = payload || {}
    const hasFile = cleanPayload?.verificationImage instanceof File || cleanPayload?.verificationImage instanceof Blob
    const body = hasFile ? buildFormData(cleanPayload) : cleanPayload
    const headers = hasFile ? { 'Content-Type': 'multipart/form-data' } : undefined
    const response = await api.patch(`${BASE_URL}/${methodId}`, body, { headers, skipLang: true })
    return response.data
  },

  deletePaymentMethod: async (methodId) => {
    const response = await api.delete(`${BASE_URL}/${methodId}`, { skipLang: true })
    return response.data
  },

  setDefaultPaymentMethod: async (methodId) => {
    const response = await api.patch(`${BASE_URL}/${methodId}/default`, {}, { skipLang: true })
    return response.data
  },

  fetchPayouts: async ({ page = 1, limit = 20 } = {}) => {
    const response = await api.get(`${BASE_URL}/payouts`, {
      params: { page, limit },
      skipLang: true,
    })
    return response.data
  },
}

