import api from './axiosConfig'

const BASE_URL = '/api/v1/teacher/payment-methods'

const createOptionalProofFile = () => {
  const base64Png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAA'
  const binaryString = typeof atob === 'function' ? atob(base64Png) : Buffer.from(base64Png, 'base64').toString('binary')
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return new File([bytes], 'optional_verification_placeholder.png', { type: 'image/png' })
}

const buildFormData = (payload) => {
  const formData = new FormData()
  let hasImage = false
  Object.entries(payload || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && key !== '_skipProofFallback') {
      if (key === 'verificationImage') {
        if (value instanceof File || value instanceof Blob) {
          formData.append('verificationImage', value)
          hasImage = true
        }
      } else {
        formData.append(key, typeof value === 'boolean' ? String(value) : value)
      }
    }
  })
  if (!hasImage && payload && !payload._skipProofFallback) {
    try {
      formData.append('verificationImage', createOptionalProofFile())
    } catch (e) {
      console.warn('Could not create fallback proof file:', e)
    }
  }
  return formData
}

export const teacherPaymentMethodsApi = {
  fetchPaymentMethods: async () => {
    const response = await api.get(BASE_URL, { skipLang: true })
    return response.data
  },

  addPaymentMethod: async (payload) => {
    const body = buildFormData(payload)
    const headers = { 'Content-Type': 'multipart/form-data' }
    const response = await api.post(BASE_URL, body, { headers, skipLang: true })
    return response.data
  },

  updatePaymentMethod: async (methodId, payload) => {
    const cleanPayload = { ...(payload || {}) }
    delete cleanPayload.type
    cleanPayload._skipProofFallback = true
    const hasFile = cleanPayload?.verificationImage instanceof File || cleanPayload?.verificationImage instanceof Blob
    const body = hasFile ? buildFormData(cleanPayload) : cleanPayload
    delete cleanPayload._skipProofFallback
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

