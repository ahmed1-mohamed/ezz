import api from './axiosConfig'
import { adminSessionsApi } from './adminSessionsApi'

const BASE_URL = '/api/v1/complaints-suggestions/private'

const cleanParams = (params = {}) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  )

const matchesType = (itemType, filterType) => {
  if (!filterType || filterType === 'all') return true
  if (filterType === 'postpone') {
    return itemType === 'postpone' || itemType === 'postponement' || itemType === 'reschedule' || itemType === 'delay'
  }
  return itemType === filterType
}

export const complaintsApi = {
  fetchComplaints: async ({ status = 'all', type, page = 1, limit = 10, ...otherParams } = {}) => {
    const applyInMemoryFilters = (allItems, rawStats) => {
      let filtered = [...allItems]
      const totalCount = filtered.length
      const pendingCount = filtered.filter((i) => i.status === 'pending').length
      const resolvedCount = filtered.filter((i) => i.status === 'resolved' || i.status === 'accepted' || (i.status && (i.status.includes('محلول') || i.status.includes('مقبول')))).length
      const rejectedCount = filtered.filter((i) => i.status === 'rejected' || (i.status && i.status.includes('مرفوض'))).length
      if (status && status !== 'all') {
        filtered = filtered.filter((i) => {
          const s = (i.status || '').toLowerCase()
          if (status === 'resolved') {
            return s === 'resolved' || s === 'accepted' || s.includes('محلول') || s.includes('مقبول') || s.includes('تم الحل')
          }
          if (status === 'rejected') {
            return s === 'rejected' || s.includes('مرفوض')
          }
          if (status === 'pending') {
            return s === 'pending' || s.includes('انتظار') || s.includes('مراجعة') || s.includes('معلقة')
          }
          return s === status.toLowerCase()
        })
      }
      if (type && type !== 'all') {
        filtered = filtered.filter((i) => matchesType(i.type, type))
      }
      const pageNum = Number(page || 1)
      const limitNum = Number(limit || 10)
      const startIndex = (pageNum - 1) * limitNum
      const paginatedItems = filtered.slice(startIndex, startIndex + limitNum)
      return {
        data: paginatedItems,
        pagination: {
          currentPage: pageNum,
          limit: limitNum,
          numberOfPages: Math.max(1, Math.ceil(filtered.length / limitNum)),
          totalCount: filtered.length,
        },
        statistics: rawStats || {
          total: totalCount,
          pending: pendingCount,
          resolved: resolvedCount,
          rejected: rejectedCount,
        },
      }
    }
    const queryParams = cleanParams({
      ...(type && type !== 'all' ? { type } : {}),
      page: status && status !== 'all' ? undefined : page,
      limit: status && status !== 'all' ? 100 : limit,
      ...otherParams,
    })
    try {
      const response = await api.get(BASE_URL, {
        params: Object.keys(queryParams).length > 0 ? queryParams : undefined,
        skipLang: true,
      })
      const resData = response.data
      const items = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : []
      if (status && status !== 'all') {
        return applyInMemoryFilters(items, resData?.statistics)
      }
      if (type && type !== 'all') {
        const typeFiltered = items.filter((i) => matchesType(i.type, type))
        return {
          ...resData,
          data: typeFiltered,
          pagination: resData.pagination
            ? { ...resData.pagination, totalCount: typeFiltered.length }
            : undefined,
        }
      }
      return resData
    } catch {
      const fallbackResponse = await api.get(BASE_URL, {
        params: { limit: 200 },
        skipLang: true,
      })
      const resData = fallbackResponse.data
      const allItems = Array.isArray(resData?.data)
        ? resData.data
        : Array.isArray(resData)
        ? resData
        : []
      return applyInMemoryFilters(allItems, resData?.statistics)
    }
  },

  fetchComplaintById: async (id) => {
    const response = await api.get(`${BASE_URL}/${id}`, { skipLang: true })
    return response.data?.data || response.data || null
  },

   resolveComplaint: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/resolve/${id}`, { notes }, { skipLang: true })
    return response.data
  },

  acceptSuggestion: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/accept/${id}`, { notes }, { skipLang: true })
    return response.data
  },

  approvePostpone: async ({ id, notes, sessionId, date, startTime, endTime }) => {
    if (sessionId && date && startTime && endTime) {
      try {
        await adminSessionsApi.rescheduleSession(sessionId, { date, startTime, endTime })
      } catch (err) {
        console.warn('Direct session reschedule failed, delegating to complaint approval:', err)
      }
    }
    try {
      const response = await api.patch(`${BASE_URL}/accept/${id}`, { notes, date, startTime, endTime }, { skipLang: true })
      return response.data
    } catch (err) {
      if (err.response?.status === 404 || err.response?.status === 400) {
        const fallbackRes = await api.patch(`${BASE_URL}/resolve/${id}`, { notes, date, startTime, endTime }, { skipLang: true })
        return fallbackRes.data
      }
      throw err
    }
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
