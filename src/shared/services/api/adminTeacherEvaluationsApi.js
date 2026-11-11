import api from './axiosConfig'

export const RATING_LABELS = {
  needs_improvement: 'يحتاج للتطور',
  poor: 'ضعيف',
  weak: 'ضعيف',
  acceptable: 'مقبول',
  good: 'جيد',
  very_good: 'جيد جداً',
  excellent: 'ممتاز',
}

export const RATING_SCORES = {
  needs_improvement: 1,
  poor: 1,
  weak: 1,
  acceptable: 2,
  good: 3,
  very_good: 4,
  excellent: 5,
}

export const SCORE_TO_GRADE = {
  5: 'excellent',
  4: 'very_good',
  3: 'good',
  2: 'acceptable',
  1: 'poor',
}

export const normalizeAdminEvaluation = (item) => {
  if (!item || typeof item !== 'object') return null
  const id = item.id || item._id || ''
  let grade = item.grade || (typeof item.rating === 'string' && isNaN(Number(item.rating)) ? item.rating : null)
  const numericRating = typeof item.rating === 'number'
    ? item.rating
    : (!isNaN(Number(item.rating)) && item.rating !== null && item.rating !== '' ? Number(item.rating) : null)
  const score = typeof item.score === 'number' ? item.score : (numericRating || null)
  if (!grade && score) {
    grade = SCORE_TO_GRADE[Math.round(score)] || 'good'
  }
  if (!grade) {
    grade = 'good'
  }
  const finalScore = score || RATING_SCORES[grade] || 3
  const teacherObj = item.teacher && typeof item.teacher === 'object' ? item.teacher : null
  const teacherId = item.teacherId || teacherObj?.id || teacherObj?._id || teacherObj?.teacherId || (typeof item.teacher === 'string' ? item.teacher : null)
  const teacherName = teacherObj?.name || (typeof item.teacher === 'string' ? item.teacher : (item.teacherName || 'معلم'))
  const groupObj = item.group && typeof item.group === 'object' ? item.group : null
  const groupId = item.groupId || groupObj?.id || groupObj?._id || (typeof item.group === 'string' ? item.group : null)
  const groupName = groupObj?.name || (typeof item.group === 'string' ? item.group : (item.groupName || 'مجموعة دراسية'))
  const sessionObj = item.session && typeof item.session === 'object' ? item.session : null
  const sessionId = item.sessionId || sessionObj?.id || sessionObj?._id || (typeof item.session === 'string' ? item.session : null)
  const sessionTitle = sessionObj?.title || sessionObj?.name || (typeof item.session === 'string' ? item.session : (item.sessionTitle || 'حصة دراسية'))
  return {
    ...item,
    id,
    _id: id,
    grade,
    rating: grade,
    score: finalScore,
    ratingLabel: RATING_LABELS[grade] || grade,
    teacher: teacherObj || (teacherId ? { id: teacherId, name: teacherName } : null),
    teacherId,
    teacherName,
    group: groupObj || (groupId ? { id: groupId, name: groupName } : null),
    groupId,
    groupName,
    session: sessionObj || (sessionId ? { id: sessionId, title: sessionTitle } : null),
    sessionId,
    sessionTitle,
    notes: typeof item.notes === 'string' ? item.notes : '',
    createdAt: item.createdAt || item.updatedAt || new Date().toISOString(),
    evaluator: item.evaluator || item.admin?.name || 'الإدارة الأكاديمية',
  }
}

export const adminTeacherEvaluationsApi = {
  fetchAdminEvaluations: async (params = {}) => {
    const { teacherId, rating, grade, search, page = 1, limit = 20 } = params
    const effectiveRating = grade || rating
    const queryParams = { page, limit }
    if (effectiveRating && effectiveRating !== 'all') {
      queryParams.rating = effectiveRating
      queryParams.grade = effectiveRating
    }
    if (search && typeof search === 'string' && search.trim()) {
      queryParams.search = search.trim()
    }
    const endpoint = teacherId
      ? `/api/v1/teachers/private/${teacherId}/admin-evaluations`
      : '/api/v1/teachers/private/admin-evaluations'
    try {
      const response = await api.get(endpoint, { params: queryParams })
      const resData = response.data || {}
      const rawList = resData.data || (Array.isArray(resData) ? resData : [])
      const items = Array.isArray(rawList)
        ? rawList.map(normalizeAdminEvaluation).filter(Boolean)
        : []
      const totalCount = resData.pagination?.totalItems ?? resData.pagination?.totalCount ?? resData.pagination?.total ?? items.length
      const totalPages = resData.pagination?.totalPages ?? resData.pagination?.numberOfPages ?? Math.max(1, Math.ceil(totalCount / limit))
      return {
        success: true,
        data: items,
        pagination: {
          currentPage: resData.pagination?.currentPage || page,
          limit: resData.pagination?.limit || limit,
          totalPages,
          numberOfPages: totalPages,
          totalCount,
          totalItems: totalCount,
        },
        statistics: resData.statistics || null,
        message: resData.message || null,
      }
    } catch (error) {
      console.warn(`API fetchAdminEvaluations (${endpoint}) failed:`, error)
      return {
        success: false,
        data: [],
        pagination: {
          currentPage: page,
          limit,
          totalPages: 1,
          numberOfPages: 1,
          totalCount: 0,
          totalItems: 0,
        },
        statistics: null,
        error,
        message: error.response?.data?.message || error.message || 'فشل استرجاع تقييمات المعلمين',
      }
    }
  },

  fetchTeacherAdminEvaluationsDetails: async (teacherId, params = {}) => {
    if (!teacherId) {
      return {
        success: false,
        data: [],
        teacher: null,
        pagination: { currentPage: 1, limit: 20, totalPages: 1, totalItems: 0 },
        statistics: null,
        error: new Error('Teacher ID is required'),
      }
    }
    const cleanId = typeof teacherId === 'object'
      ? (teacherId.id || teacherId._id || teacherId.teacherId || teacherId.teacher_id)
      : teacherId
    try {
      const response = await api.get(`/api/v1/teachers/private/${cleanId}/admin-evaluations`, { params })
      const resData = response.data || {}
      const rawList = resData.data || (Array.isArray(resData) ? resData : [])
      const items = Array.isArray(rawList)
        ? rawList.map(normalizeAdminEvaluation).filter(Boolean)
        : []
      const totalCount = resData.pagination?.totalItems ?? resData.pagination?.totalCount ?? resData.pagination?.total ?? items.length
      const totalPages = resData.pagination?.totalPages ?? resData.pagination?.numberOfPages ?? Math.max(1, Math.ceil(totalCount / (params.limit || 20)))
      return {
        success: true,
        data: items,
        teacher: resData.teacher || null,
        pagination: {
          currentPage: resData.pagination?.currentPage || params.page || 1,
          limit: resData.pagination?.limit || params.limit || 20,
          totalPages,
          numberOfPages: totalPages,
          totalCount,
          totalItems: totalCount,
        },
        statistics: resData.statistics || null,
        message: resData.message || null,
      }
    } catch (error) {
      console.warn(`API fetchTeacherAdminEvaluationsDetails for teacher ${cleanId} failed:`, error)
      return {
        success: false,
        data: [],
        teacher: null,
        pagination: {
          currentPage: params.page || 1,
          limit: params.limit || 20,
          totalPages: 1,
          numberOfPages: 1,
          totalCount: 0,
          totalItems: 0,
        },
        statistics: null,
        error,
        message: error.response?.data?.message || error.message || 'فشل استرجاع تفاصيل تقييمات المعلم',
      }
    }
  },

  createAdminEvaluation: async (teacherIdOrPayload, maybePayload = {}) => {
    const isFirstArgId = typeof teacherIdOrPayload === 'string'
    const teacherId = isFirstArgId
      ? teacherIdOrPayload
      : (teacherIdOrPayload?.teacher || teacherIdOrPayload?.teacherId || teacherIdOrPayload?.teacherData?.id || teacherIdOrPayload?.id)
    const payload = isFirstArgId ? (maybePayload || {}) : (teacherIdOrPayload || {})
    const sessionId = payload.sessionId || payload.session || payload.sessionData?.id || payload.sessionData?._id
    const grade = payload.grade || payload.rating || 'good'
    const notes = typeof payload.notes === 'string' ? payload.notes : ''
    const body = {
      sessionId,
      grade,
      notes,
    }
    const endpoint = teacherId
      ? `/api/v1/teachers/private/${teacherId}/admin-evaluations`
      : '/api/v1/teachers/private/admin-evaluations'
    try {
      const response = await api.post(endpoint, body)
      const resData = response.data || {}
      return {
        success: true,
        data: resData.data || resData,
        message: resData.message || 'تم حفظ تقييم المعلم بنجاح',
      }
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'فشل حفظ تقييم المعلم'
      return {
        success: false,
        error: err,
        message,
      }
    }
  },

  deleteAdminEvaluation: async (id, teacherId = null) => {
    const endpoints = teacherId
      ? [
          `/api/v1/teachers/private/${teacherId}/admin-evaluations/${id}`,
          `/api/v1/teachers/private/admin-evaluations/${id}`,
        ]
      : [`/api/v1/teachers/private/admin-evaluations/${id}`]
    let lastError = null
    for (const ep of endpoints) {
      try {
        const response = await api.delete(ep)
        return {
          success: true,
          message: response.data?.message || 'تم حذف التقييم بنجاح',
        }
      } catch (err) {
        lastError = err
        if (err.response?.status !== 404) break
      }
    }
    return {
      success: false,
      error: lastError,
      message: lastError?.response?.data?.message || lastError?.message || 'فشل حذف التقييم',
    }
  },

  fetchTeacherAdminEvaluations: async (params = {}) => {
    try {
      const response = await api.get('/api/v1/teacher/admin-evaluations', { params })
      const resData = response.data || {}
      const rawList = resData.data || (Array.isArray(resData) ? resData : [])
      const items = Array.isArray(rawList)
        ? rawList.map(normalizeAdminEvaluation).filter(Boolean)
        : []
      return {
        success: true,
        data: items,
        pagination: resData.pagination || {
          currentPage: params.page || 1,
          limit: params.limit || 20,
          numberOfPages: 1,
          totalCount: items.length,
        },
        statistics: resData.statistics || null,
      }
    } catch (error) {
      return {
        success: false,
        data: [],
        pagination: { currentPage: 1, limit: 20, numberOfPages: 1, totalCount: 0 },
        error,
      }
    }
  },
}

export default adminTeacherEvaluationsApi
