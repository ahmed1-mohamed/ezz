import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import useDebounce from '@/shared/hooks/useDebounce'
import {
  Star,
  Search,
  Filter,
  GraduationCap,
  Calendar,
  Clock,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Award,
  Users,
  X,
  Phone,
  Mail,
  MessageCircle,
  Quote,
  BarChart3,
  User,
  ShieldCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { teachersApi, getImageUrl } from '@/shared/services/api/teachersApi'
import AdminEvaluationsList from './components/AdminEvaluationsList'

function extractText(val, isRtl = true) {
  if (val === null || val === undefined) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'number') return String(val)
  if (typeof val === 'object') {
    const localized = isRtl ? (val.ar || val.en) : (val.en || val.ar)
    if (localized && typeof localized === 'string') return localized.trim()
    if (val.name && typeof val.name === 'string') return val.name.trim()
    if (val.title && typeof val.title === 'string') return val.title.trim()
    if (val.notes && typeof val.notes === 'string') return val.notes.trim()
    if (val.text && typeof val.text === 'string') return val.text.trim()
    return ''
  }
  return ''
}

function formatDate(dateStr, isRtl = true) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d)
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

function formatWeekDate(dateStr, isRtl = true) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      const formatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d)
      return isRtl ? `أسبوع ${formatted}` : `Week of ${formatted}`
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

function cleanPhoneNumber(phone) {
  if (!phone || typeof phone !== 'string') return ''
  return phone.replace(/[^0-9+]/g, '')
}

function renderStarIcons(ratingVal, size = 14) {
  const stars = []
  const count = Math.min(5, Math.max(1, Math.round(Number(ratingVal) || 5)))
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={size}
        className={i <= count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}
      />
    )
  }
  return stars
}

function getRatingBadgeMeta(rating, t) {
  const num = Number(rating || 0)
  if (num >= 4.5) {
    return {
      label: t('adminDashboard.teacherEvaluations.ratingLevelExcellent', 'ممتاز'),
      badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      bgBar: 'bg-emerald-500',
    }
  }
  if (num >= 3.5) {
    return {
      label: t('adminDashboard.teacherEvaluations.ratingLevelVeryGood', 'جيد جداً'),
      badgeClass: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200 dark:border-teal-800/60',
      bgBar: 'bg-teal-500',
    }
  }
  if (num >= 2.5) {
    return {
      label: t('adminDashboard.teacherEvaluations.ratingLevelGood', 'جيد'),
      badgeClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
      bgBar: 'bg-amber-500',
    }
  }
  if (num >= 1.5) {
    return {
      label: t('adminDashboard.teacherEvaluations.ratingLevelAcceptable', 'مقبول'),
      badgeClass: 'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 border-orange-200 dark:border-orange-800/60',
      bgBar: 'bg-orange-500',
    }
  }
  return {
    label: t('adminDashboard.teacherEvaluations.ratingLevelPoor', 'ضعيف'),
    badgeClass: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    bgBar: 'bg-rose-500',
  }
}

export default function AdminTeacherEvaluations() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const [activeRoleTab, setActiveRoleTab] = useState('admin')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTeacherId, setSelectedTeacherId] = useState('')
  const [ratingFilter, setRatingFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearch = useDebounce(searchQuery, 400)
  const { data: teachersRes } = useQuery({
    queryKey: ['admin-teachers-lookup-list'],
    queryFn: () => teachersApi.fetchTeachers({ limit: 100 }),
    staleTime: 5 * 60 * 1000,
  })
  const teachersList = useMemo(() => {
    const raw = teachersRes?.data || teachersRes || []
    if (Array.isArray(raw)) return raw
    if (Array.isArray(raw.items)) return raw.items
    return []
  }, [teachersRes])
  const queryParams = useMemo(() => ({
    page: currentPage,
    limit: 20,
    teacherId: selectedTeacherId || undefined,
    rating: ratingFilter !== 'all' ? ratingFilter : undefined,
    search: debouncedSearch.trim() || undefined,
  }), [currentPage, selectedTeacherId, ratingFilter, debouncedSearch])
  const {
    data: evalRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['admin-teachers-private-evaluations', queryParams],
    queryFn: () => teachersApi.fetchTeacherEvaluations(queryParams),
    staleTime: 60 * 1000,
  })
  const rawEvaluations = useMemo(() => {
    if (!evalRes) return []
    const raw = evalRes.data
    if (Array.isArray(raw)) return raw
    if (Array.isArray(raw?.evaluations)) return raw.evaluations
    if (Array.isArray(raw?.items)) return raw.items
    if (Array.isArray(raw?.records)) return raw.records
    return []
  }, [evalRes])
  const stats = useMemo(() => {
    const backendStats = evalRes?.statistics
    const totalCount = Number(backendStats?.totalEvaluations ?? rawEvaluations.length)
    const avgRatingVal = backendStats?.averageRating !== undefined && backendStats?.averageRating !== null
      ? Number(backendStats.averageRating).toFixed(1)
      : rawEvaluations.length > 0
        ? (rawEvaluations.reduce((acc, curr) => acc + Number(curr.rating || 0), 0) / rawEvaluations.length).toFixed(1)
        : '0.0'
    const backendDist = backendStats?.distribution || null
    const dist = {
      '5': backendDist ? Number(backendDist['5'] || 0) : rawEvaluations.filter((it) => Math.round(Number(it.rating || 0)) === 5).length,
      '4': backendDist ? Number(backendDist['4'] || 0) : rawEvaluations.filter((it) => Math.round(Number(it.rating || 0)) === 4).length,
      '3': backendDist ? Number(backendDist['3'] || 0) : rawEvaluations.filter((it) => Math.round(Number(it.rating || 0)) === 3).length,
      '2': backendDist ? Number(backendDist['2'] || 0) : rawEvaluations.filter((it) => Math.round(Number(it.rating || 0)) === 2).length,
      '1': backendDist ? Number(backendDist['1'] || 0) : rawEvaluations.filter((it) => Math.round(Number(it.rating || 0)) === 1).length,
    }
    const fiveStarsCount = dist['5']
    const fiveStarsPct = totalCount > 0 ? Math.round((fiveStarsCount / totalCount) * 100) : 0
    const teacherIds = new Set(
      rawEvaluations
        .map((it) => it.teacherId || it.teacher?.id || it.teacher?.teacherId || it.teacher?._id || it.teacher?.name)
        .filter(Boolean)
    )
    return {
      total: totalCount,
      avgRating: avgRatingVal,
      distribution: dist,
      fiveStarsCount,
      fiveStarsPct,
      distinctTeachersCount: teacherIds.size,
    }
  }, [evalRes, rawEvaluations])
  const filteredEvaluations = useMemo(() => {
    let list = [...rawEvaluations]
    if (selectedTeacherId) {
      list = list.filter((item) => {
        const itemTeacherId = String(item.teacherId || item.teacher?.id || item.teacher?.teacherId || item.teacher?._id || '')
        return itemTeacherId === String(selectedTeacherId)
      })
    }
    if (ratingFilter !== 'all') {
      const targetRating = Number(ratingFilter)
      list = list.filter((item) => {
        const r = Math.round(Number(item.rating || 0))
        return r === targetRating
      })
    }
    return list
  }, [rawEvaluations, selectedTeacherId, ratingFilter])
  const handleTeacherChange = (e) => {
    setSelectedTeacherId(e.target.value)
    setCurrentPage(1)
  }
  const handleRatingFilterClick = (ratingValue) => {
    setRatingFilter((prev) => (prev === ratingValue ? 'all' : ratingValue))
    setCurrentPage(1)
  }
  const handleResetFilters = () => {
    setSelectedTeacherId('')
    setRatingFilter('all')
    setSearchQuery('')
    setCurrentPage(1)
  }
  const hasActiveFilters = Boolean(selectedTeacherId || ratingFilter !== 'all' || searchQuery.trim())
  const pagination = useMemo(() => {
    return {
      currentPage: evalRes?.pagination?.currentPage || currentPage,
      totalPages: evalRes?.pagination?.totalPages || Math.max(1, Math.ceil(filteredEvaluations.length / 20)),
      totalItems: evalRes?.pagination?.totalItems || filteredEvaluations.length,
    }
  }, [evalRes, currentPage, filteredEvaluations.length])
  return (
    <div className="space-y-7" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-start">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveRoleTab('admin')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeRoleTab === 'admin'
                ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-[#14a693] shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldCheck size={16} />
            <span>{isRtl ? 'تقييمات الإدارة للمعلمين' : 'Admin Evaluations'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveRoleTab('parents')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeRoleTab === 'parents'
                ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-[#14a693] shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Users size={16} />
            <span>{isRtl ? 'تقييمات أولياء الأمور' : 'Parent Reviews'}</span>
          </button>
        </div>
      </div>
      {activeRoleTab === 'admin' ? (
        <AdminEvaluationsList />
      ) : (
        <>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 mb-3">
            <Star size={14} className="fill-amber-400 text-amber-500" />
            <span>{t('adminDashboard.teacherEvaluations.badge', 'تقييمات أولياء الأمور')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {t('adminDashboard.teacherEvaluations.pageTitle', 'تقييمات المعلمين')}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-medium">
            {t(
              'adminDashboard.teacherEvaluations.pageSubtitle',
              'استعراض ومتابعة تقييمات أولياء الأمور لأداء المعلمين وملاحظاتهم'
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            title={t('adminDashboard.teacherEvaluations.refresh', 'تحديث البيانات')}
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <RotateCcw size={16} className={isFetching ? 'animate-spin text-[#0f7a6c]' : ''} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 block">
              {t('adminDashboard.teacherEvaluations.totalEvaluations', 'إجمالي التقييمات')}
            </span>
            <span className="text-2xl font-black text-slate-800 dark:text-white mt-1 block">
              {stats.total}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold">
            <MessageSquare size={22} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 block">
              {t('adminDashboard.teacherEvaluations.averageRating', 'متوسط التقييم العام')}
            </span>
            <span className="text-2xl font-black text-amber-500 mt-1 flex items-center gap-1.5">
              <Star size={20} className="fill-amber-400" />
              {stats.avgRating}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <Award size={22} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 block">
              {t('adminDashboard.teacherEvaluations.fiveStarRatings', 'تقييمات 5 نجوم')}
            </span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1 block">
              {stats.fiveStarsCount}{' '}
              <span className="text-xs text-slate-400 font-bold">({stats.fiveStarsPct}%)</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Sparkles size={22} />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 block">
              {t('adminDashboard.teacherEvaluations.evaluatedTeachers', 'معلمون تم تقييمهم')}
            </span>
            <span className="text-2xl font-black text-slate-800 dark:text-white mt-1 block">
              {stats.distinctTeachersCount}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <Users size={22} />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 size={18} className="text-[#0f7a6c] dark:text-emerald-400" />
            <h3 className="text-sm font-extrabold text-slate-800 dark:text-white">
              {t('adminDashboard.teacherEvaluations.ratingDistribution', 'توزيع التقييمات')}
            </h3>
          </div>
          <span className="text-[11px] font-bold text-slate-400">
            {t('adminDashboard.teacherEvaluations.distributionHelp', 'اضغط على أي تقييم لعرض نتائجه المحددة')}
          </span>
        </div>
        <div className="space-y-2.5">
          {['5', '4', '3', '2', '1'].map((starKey) => {
            const count = stats.distribution[starKey] || 0
            const percentage = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0
            const isSelected = ratingFilter === starKey
            const barColors = {
              '5': 'bg-emerald-500',
              '4': 'bg-teal-500',
              '3': 'bg-amber-500',
              '2': 'bg-orange-500',
              '1': 'bg-rose-500',
            }
            return (
              <button
                key={starKey}
                type="button"
                onClick={() => handleRatingFilterClick(starKey)}
                className={`w-full flex items-center gap-3 p-2 rounded-2xl transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/30 ring-2 ring-[#0f7a6c] shadow-xs'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-1.5 w-18 shrink-0">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {starKey} {t('adminDashboard.teacherEvaluations.starsCount', { count: starKey, defaultValue: 'نجوم' })}
                  </span>
                </div>
                <div className="flex-1 h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${barColors[starKey]}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-20 shrink-0 text-right">
                  <span className="text-xs font-black text-slate-800 dark:text-white">
                    {count}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 mx-1">
                    ({percentage}%)
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 dark:text-white">
            <Filter size={16} className="text-[#0f7a6c]" />
            <span>{t('adminDashboard.teacherEvaluations.filterByTeacher', 'تصفية وتقسيم التقييمات')}</span>
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 transition-colors self-start lg:self-auto cursor-pointer"
            >
              <X size={14} />
              <span>{t('adminDashboard.teacherEvaluations.resetFilter', 'إعادة ضبط التصفية')}</span>
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          <div className="relative">
            <label className="text-[11px] font-bold text-slate-400 block mb-1">
              {t('adminDashboard.teacherEvaluations.teacherLabel', 'المعلم')}
            </label>
            <div className="relative">
              <select
                value={selectedTeacherId}
                onChange={handleTeacherChange}
                className={`w-full py-2.5 ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30 cursor-pointer`}
              >
                <option value="">{t('adminDashboard.teacherEvaluations.allTeachers', 'جميع المعلمين')}</option>
                {teachersList.map((teacher) => {
                  const tId = teacher.teacher_id || teacher.id || teacher._id || teacher.user_id
                  const tName = extractText(teacher.name, isRtl) || 'معلم'
                  return (
                    <option key={tId} value={tId}>
                      {tName}
                    </option>
                  )
                })}
              </select>
              <GraduationCap
                size={16}
                className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`}
              />
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1">
              {t('adminDashboard.teacherEvaluations.allRatings', 'مستوى التقييم')}
            </label>
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold overflow-x-auto">
              <button
                type="button"
                onClick={() => handleRatingFilterClick('all')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  ratingFilter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                الكل
              </button>
              {['5', '4', '3', '2', '1'].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingFilterClick(star)}
                  className={`flex-1 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap text-center ${
                    ratingFilter === star
                      ? 'bg-white dark:bg-slate-900 text-amber-500 shadow-xs font-black'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  {star} ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1">
              {t('common.search', 'بحث')}
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                placeholder={t(
                  'adminDashboard.teacherEvaluations.searchPlaceholder',
                  'بحث باسم المعلم، ولي الأمر، الهاتف، أو الملاحظات...'
                )}
                className={`w-full py-2.5 ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30`}
              />
              <Search
                size={16}
                className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`}
              />
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3">
          <Spinner />
          <span className="text-xs font-bold text-slate-400">{t('common.loading', 'جاري التحميل...')}</span>
        </div>
      ) : filteredEvaluations.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-12 text-center shadow-xs space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-500 flex items-center justify-center mx-auto">
            <Star size={26} />
          </div>
          <h4 className="text-base font-extrabold text-slate-800 dark:text-white">
            {hasActiveFilters
              ? t('adminDashboard.teacherEvaluations.noEvaluationsFilter', 'لم يتم العثور على أي تقييمات تطابق معايير التصفية المحددة')
              : t('adminDashboard.teacherEvaluations.noEvaluationsFound', 'لا توجد تقييمات مسجلة حالياً')}
          </h4>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2 rounded-xl bg-[#0f7a6c] text-white text-xs font-bold hover:bg-[#0c6156] transition-colors cursor-pointer"
            >
              {t('adminDashboard.teacherEvaluations.resetFilter', 'إعادة ضبط التصفية')}
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 flex items-center justify-between px-2">
            <span>
              {t('adminDashboard.teacherEvaluations.totalEvaluations', 'إجمالي التقييمات')}: {filteredEvaluations.length}
            </span>
            {hasActiveFilters && (
              <span className="text-[#0f7a6c] dark:text-emerald-400">
                (نتائج مصفاة)
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredEvaluations.map((item, idx) => {
              const evalId = item.id || item._id || idx
              const teacherObj = item.teacher || {}
              const teacherName = extractText(teacherObj.name || item.teacherName, isRtl) || 'المعلم'
              const teacherAvatar = teacherObj.image || teacherObj.avatar || teacherObj.photo || item.teacherAvatar
              const teacherIdCode = teacherObj.teacherId || teacherObj.id || teacherObj._id
              const parentObj = item.parent || {}
              const parentName = extractText(parentObj.name || item.parentName, isRtl) || 'ولي الأمر'
              const parentPhone = parentObj.phone || item.parentPhone || ''
              const parentEmail = parentObj.email || item.parentEmail || ''
              const parentAvatar = parentObj.image || parentObj.avatar || null
              const cleanPhone = cleanPhoneNumber(parentPhone)
              const ratingNumber = Number(item.rating || 5).toFixed(1)
              const notesText = extractText(item.notes || item.comment || item.feedback, isRtl)
              const weekStartDate = item.weekStartDate
              const evalDate = item.createdAt || item.date || item.evaluatedAt
              const ratingMeta = getRatingBadgeMeta(ratingNumber, t)
              return (
                <div
                  key={evalId}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 font-black text-base flex items-center justify-center shrink-0 border border-teal-100 dark:border-emerald-900/40 overflow-hidden shadow-xs">
                        {teacherAvatar ? (
                          <img
                            src={getImageUrl(teacherAvatar)}
                            alt={teacherName}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        ) : (
                          <span>{teacherName.charAt(0) || 'م'}</span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-slate-400 font-bold block">
                            {t('adminDashboard.teacherEvaluations.teacherLabel', 'المعلم')}
                          </span>
                          {teacherIdCode && (
                            <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md">
                              #{String(teacherIdCode).slice(-6)}
                            </span>
                          )}
                        </div>
                        <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mt-0.5">
                          {teacherName}
                        </h4>
                        {teacherObj.subject && (
                          <span className="text-xs text-slate-400 font-medium block">
                            {extractText(teacherObj.subject, isRtl)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border ${ratingMeta.badgeClass}`}>
                        <Star size={13} className="fill-current" />
                        <span>{ratingNumber} / 5</span>
                        <span className="text-[10px] opacity-80 font-bold">({ratingMeta.label})</span>
                      </div>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {renderStarIcons(ratingNumber)}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Quote size={13} className="rotate-180" />
                      <span className="text-[10px] font-bold">
                        {t('adminDashboard.teacherEvaluations.notesLabel', 'ملاحظات التقييم')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {notesText ? (
                        <span>&quot;{notesText}&quot;</span>
                      ) : (
                        <span className="text-slate-400 italic">
                          {t('adminDashboard.teacherEvaluations.noNotes', 'لا توجد ملاحظات مرفقة مع هذا التقييم')}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-teal-50/40 dark:bg-emerald-950/20 border border-teal-100/60 dark:border-emerald-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-emerald-900/60 text-[#0f7a6c] dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
                        {parentAvatar ? (
                          <img
                            src={getImageUrl(parentAvatar)}
                            alt={parentName}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        ) : (
                          <User size={15} />
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 block leading-tight">
                          {t('adminDashboard.teacherEvaluations.parentBadge', 'ولي أمر')}
                        </span>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {parentName}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {cleanPhone && (
                        <div className="flex items-center gap-1">
                          <a
                            href={`https://wa.me/${cleanPhone.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t('adminDashboard.teacherEvaluations.whatsappChat', 'مراسلة عبر واتساب')}
                            className="p-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors inline-flex items-center gap-1 text-[11px] font-bold"
                          >
                            <MessageCircle size={13} />
                            <span className="font-mono text-[10px] dir-ltr">{parentPhone}</span>
                          </a>
                          <a
                            href={`tel:${cleanPhone}`}
                            title={t('adminDashboard.teacherEvaluations.directCall', 'اتصال هاتفي')}
                            className="p-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors inline-flex items-center"
                          >
                            <Phone size={12} />
                          </a>
                        </div>
                      )}
                      {parentEmail && (
                        <a
                          href={`mailto:${parentEmail}`}
                          title={parentEmail}
                          className="p-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors inline-flex items-center"
                        >
                          <Mail size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {weekStartDate ? (
                      <span className="flex items-center gap-1 text-[11px] text-teal-700 dark:text-teal-400 bg-teal-50/60 dark:bg-teal-950/40 px-2 py-0.5 rounded-lg font-bold">
                        <Calendar size={12} />
                        <span>{formatWeekDate(weekStartDate, isRtl)}</span>
                      </span>
                    ) : <span />}
                    {evalDate && (
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                        <Clock size={12} />
                        <span>{formatDate(evalDate, isRtl)}</span>
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs">
              <span className="text-xs font-bold text-slate-400">
                {t('adminDashboard.teacherEvaluations.pageIndicator', {
                  current: pagination.currentPage,
                  total: pagination.totalPages,
                  defaultValue: `صفحة ${pagination.currentPage} من ${pagination.totalPages}`,
                })}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={pagination.currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
                <button
                  type="button"
                  disabled={pagination.currentPage >= pagination.totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
        </>
      )}
    </div>
  )
}
