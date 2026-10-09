import api from './axiosConfig'

const BASE_URL = '/api/v1/complaints-suggestions/private'

 const cleanParams = (params = {}) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  )

export const complaintsApi = {
  fetchComplaints: async ({ status = 'all', type, page = 1, limit = 10, ...otherParams } = {}) => {
     const applyInMemoryFilters = (allItems, rawStats) => {
      let filtered = [...allItems]
      const totalCount = filtered.length
      const pendingCount = filtered.filter((i) => i.status === 'pending').length
      const resolvedCount = filtered.filter((i) => i.status === 'resolved').length
      const rejectedCount = filtered.filter((i) => i.status === 'rejected').length

      if (status && status !== 'all') {
        filtered = filtered.filter((i) => i.status === status)
      }

      if (type && type !== 'all') {
        filtered = filtered.filter((i) => i.type === type)
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

     const urlsToTry = []
    if (status && status !== 'all') {
      urlsToTry.push(`${BASE_URL}/${status}`)
    }
    urlsToTry.push(BASE_URL)

    for (const url of urlsToTry) {
      try {
        const isSubpath = url !== BASE_URL
        const queryParams = cleanParams({
          ...(!isSubpath && status && status !== 'all' ? { status } : {}),
          ...(type && type !== 'all' ? { type } : {}),
          page,
          limit,
          ...otherParams,
        })

        const response = await api.get(url, {
          params: queryParams,
          skipLang: true,
        })

        const resData = response.data
        const items = Array.isArray(resData?.data)
          ? resData.data
          : Array.isArray(resData)
          ? resData
          : []

         if (type && type !== 'all') {
          const typeFiltered = items.filter((i) => i.type === type)
          return {
            ...resData,
            data: typeFiltered,
            pagination: resData.pagination
              ? { ...resData.pagination, totalCount: typeFiltered.length }
              : undefined,
          }
        }

        return resData
      } catch (err) {
         if (err.response?.status === 400 || err.response?.status === 404) {
          continue
        }
        throw err
      }
    }

     try {
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
    } catch {
       const simpleRes = await api.get(BASE_URL, { skipLang: true })
      const items = Array.isArray(simpleRes.data?.data)
        ? simpleRes.data.data
        : Array.isArray(simpleRes.data)
        ? simpleRes.data
        : []
      return applyInMemoryFilters(items, simpleRes.data?.statistics)
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

  rejectComplaint: async ({ id, notes }) => {
    const response = await api.patch(`${BASE_URL}/reject/${id}`, { notes }, { skipLang: true })
    return response.data
  },

  deleteComplaint: async (id) => {
    const response = await api.delete(`${BASE_URL}/${id}`, { skipLang: true })
    return response.data
  },
}
