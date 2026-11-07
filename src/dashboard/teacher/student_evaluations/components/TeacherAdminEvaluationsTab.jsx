import { useState, useMemo, useCallback } from 'react'
import {
  Star,
  Search,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  BookOpen,
  Users,
  Quote,
  TrendingUp,
  Calendar,
  Layers,
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import useDebounce from '@/shared/hooks/useDebounce'
import { teacherEvaluationsApi } from '@/shared/services/api/teacherEvaluationsApi'

const RATING_CONFIG = {
  excellent: {
    labelAr: 'ممتاز',
    labelEn: 'Excellent',
    badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    stars: 5,
  },
  very_good: {
    labelAr: 'جيد جداً',
    labelEn: 'Very Good',
    badgeClass: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200 dark:border-teal-800',
    stars: 4,
  },
  good: {
    labelAr: 'جيد',
    labelEn: 'Good',
    badgeClass: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    stars: 3,
  },
  acceptable: {
    labelAr: 'مقبول',
    labelEn: 'Acceptable',
    badgeClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    stars: 2,
  },
  poor: {
    labelAr: 'ضعيف',
    labelEn: 'Poor',
    badgeClass: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    stars: 1,
  },
  weak: {
    labelAr: 'ضعيف',
    labelEn: 'Poor',
    badgeClass: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    stars: 1,
  },
  needs_improvement: {
    labelAr: 'يحتاج للتطور',
    labelEn: 'Needs Improvement',
    badgeClass: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    stars: 1,
  },
}

const SCORE_MAP = {
  excellent: 5,
  very_good: 4,
  good: 3,
  acceptable: 2,
  poor: 1,
  weak: 1,
  needs_improvement: 1,
}

export default function TeacherAdminEvaluationsTab() {
  const { i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true
  const [currentPage, setCurrentPage] = useState(1)
  const [ratingFilter, setRatingFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearch = useDebounce(searchQuery, 300)
  const queryParams = useMemo(() => ({
    page: currentPage,
    limit: 20,
    rating: ratingFilter !== 'all' ? ratingFilter : undefined,
    search: debouncedSearch.trim() || undefined,
  }), [currentPage, ratingFilter, debouncedSearch])
  const {
    data: responseData,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['teacher-admin-evaluations-feed', queryParams],
    queryFn: () => teacherEvaluationsApi.fetchAdminEvaluationsForTeacher(queryParams),
    staleTime: 30 * 1000,
  })
  const evaluations = useMemo(() => {
    const list = responseData?.data
    if (!Array.isArray(list)) return []
    if (!debouncedSearch.trim() && ratingFilter === 'all') return list
    const q = debouncedSearch.trim().toLowerCase()
    return list.filter((item) => {
      const matchRating = ratingFilter === 'all' || item.rating === ratingFilter || (ratingFilter === 'poor' && item.rating === 'weak')
      if (!matchRating) return false
      if (!q) return true
      const groupName = (item.group?.name || item.groupName || '').toLowerCase()
      const sessionTitle = (item.session?.title || item.sessionTitle || '').toLowerCase()
      const notes = (item.notes || '').toLowerCase()
      return groupName.includes(q) || sessionTitle.includes(q) || notes.includes(q)
    })
  }, [responseData, debouncedSearch, ratingFilter])
  const statistics = useMemo(() => {
    const stats = responseData?.statistics
    const list = Array.isArray(responseData?.data) ? responseData.data : []
    const totalCount = Number(stats?.totalEvaluations ?? list.length)
    if (totalCount === 0) {
      return { totalCount: 0, averageRating: '0.0', excellentCount: 0, topPercentage: 0 }
    }
    const totalScore = list.reduce((acc, curr) => acc + (Number(curr.score) || SCORE_MAP[curr.rating] || 3), 0)
    const averageRating = (totalScore / totalCount).toFixed(1)
    const excellentCount = list.filter((it) => it.rating === 'excellent').length
    const topPercentage = Math.round((excellentCount / totalCount) * 100)
    return {
      totalCount,
      averageRating,
      excellentCount,
      topPercentage,
    }
  }, [responseData])
  const handleResetFilters = useCallback(() => {
    setRatingFilter('all')
    setSearchQuery('')
    setCurrentPage(1)
  }, [])
  const formatDate = useCallback((dateStr) => {
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
  }, [isRtl])
  const renderStars = useCallback((ratingKey) => {
    const count = RATING_CONFIG[ratingKey]?.stars || 3
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          className={i <= count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}
        />
      )
    }
    return stars
  }, [])
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#0f7a6c] to-[#14a693] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -end-12 -bottom-12 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 text-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md border border-white/20">
              <ShieldCheck size={14} />
              <span>{isRtl ? 'الإدارة الأكاديمية' : 'Academic Administration'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {isRtl ? 'تقييمات وملاحظات الإدارة' : 'Administration Feedback & Evaluations'}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              {isRtl
                ? 'استعراض التقييمات التوجيهية والملاحظات الدورية الصادرة من الإدارة لمتابعة جودة التدريس وتطوير الأداء الأكاديمي'
                : 'Review periodic feedback and performance guidance provided by the academic administration'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isLoading || isRefetching}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-[#0f7a6c] text-xs sm:text-sm font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95 cursor-pointer self-start md:self-auto shrink-0"
          >
            <RotateCcw size={16} className={isRefetching ? 'animate-spin' : ''} />
            <span>{isRtl ? 'تحديث التقييمات' : 'Refresh Evaluations'}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'إجمالي التقييمات' : 'Total Evaluations'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Layers size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800 dark:text-white mt-2 font-mono">
            {statistics.totalCount}
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'متوسط التقييم العام' : 'Average Score'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Star size={16} className="fill-amber-400 text-amber-400" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <p className="text-2xl font-black text-amber-500 font-mono">
              {statistics.averageRating}
            </p>
            <span className="text-xs text-slate-400 font-bold">/ 5.0</span>
          </div>
        </div>
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'تقييمات ممتازة' : 'Excellent Ratings'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Award size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2 font-mono">
            {statistics.excellentCount}
          </p>
        </div>
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'نسبة الامتياز' : 'Excellence Rate'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <TrendingUp size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-teal-600 dark:text-teal-400 mt-2 font-mono">
            %{statistics.topPercentage}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft flex flex-wrap items-center justify-between gap-3">
        <div className="flex-1 min-w-[220px] relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isRtl ? 'بحث بالمجموعة، الحصة، أو ملاحظات الإدارة...' : 'Search group, session, or admin notes...'}
            className="w-full ps-10 pe-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
          />
          <Search size={16} className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-200 text-xs font-bold focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
          >
            <option value="all">{isRtl ? 'جميع مستويات التقييم' : 'All Ratings'}</option>
            <option value="excellent">{isRtl ? 'ممتاز' : 'Excellent'}</option>
            <option value="very_good">{isRtl ? 'جيد جداً' : 'Very Good'}</option>
            <option value="good">{isRtl ? 'جيد' : 'Good'}</option>
            <option value="acceptable">{isRtl ? 'مقبول' : 'Acceptable'}</option>
            <option value="poor">{isRtl ? 'ضعيف' : 'Poor'}</option>
            <option value="needs_improvement">{isRtl ? 'يحتاج للتطور' : 'Needs Improvement'}</option>
          </select>
          {(ratingFilter !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={handleResetFilters}
              title={isRtl ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
              className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
          <Spinner size="lg" />
          <p className="text-xs font-bold">{isRtl ? 'جاري تحميل تقييمات الإدارة...' : 'Loading admin evaluations...'}</p>
        </div>
      ) : evaluations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 text-center px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
          <Award size={48} strokeWidth={1.5} className="text-slate-300 dark:text-slate-700" />
          <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
            {isRtl ? 'لا توجد تقييمات إدارية حتى الآن' : 'No administration evaluations found'}
          </p>
          <p className="text-xs text-slate-400 max-w-sm">
            {isRtl
              ? 'عند قيام إدارة المنصة بتقييم حصصك ومجموعاتك الدراسية، ستظهر جميع الملاحظات والدرجات هنا مباشرة'
              : 'When the administration evaluates your sessions, feedback and scores will be displayed here'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {evaluations.map((item) => {
            const ratingKey = item.grade || item.rating || 'good'
            const badge = RATING_CONFIG[ratingKey] || RATING_CONFIG.good
            const groupName = item.group?.name || item.groupName || (isRtl ? 'مجموعة دراسية' : 'Study Group')
            const sessionTitle = item.session?.title || item.sessionTitle || (isRtl ? 'حصة دراسية' : 'Session')
            const notes = item.notes || ''
            const evaluator = item.evaluator || (isRtl ? 'الإدارة الأكاديمية' : 'Academic Administration')
            const createdAt = item.createdAt || item.date
            return (
              <div
                key={item.id || item._id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-md transition-all text-start"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#0f7a6c]/10 dark:bg-[#0f7a6c]/20 text-[#0f7a6c] dark:text-[#14a693] flex items-center justify-center shrink-0">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                        <span>{evaluator}</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-[#14a693]">
                          <Sparkles size={11} />
                          {isRtl ? 'تقييم رسمي' : 'Official'}
                        </span>
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <Calendar size={13} />
                        <span>{formatDate(createdAt)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-black ${badge.badgeClass}`}
                    >
                      <div className="flex items-center gap-0.5">{renderStars(ratingKey)}</div>
                      <span>{isRtl ? badge.labelAr : badge.labelEn}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 my-4 bg-slate-50 dark:bg-slate-850/60 p-3 rounded-2xl">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Users size={15} className="text-[#0f7a6c] dark:text-[#14a693]" />
                    <span>{groupName}</span>
                  </div>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <BookOpen size={15} className="text-[#0f7a6c] dark:text-[#14a693]" />
                    <span>{sessionTitle}</span>
                  </div>
                </div>
                {notes ? (
                  <div className="relative ps-4 pe-2 py-2 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border-s-4 border-amber-400 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    <Quote size={16} className="inline-block text-amber-500 opacity-60 me-1.5 align-text-bottom" />
                    <span>{notes}</span>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">
                    {isRtl ? 'لا توجد ملاحظات إضافية مسجلة' : 'No additional notes provided'}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      )}
      {evaluations.length > 20 && (
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage <= 1}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-300"
          >
            {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
            {isRtl ? `صفحة ${currentPage}` : `Page ${currentPage}`}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={evaluations.length < 20}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-300"
          >
            {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      )}
    </div>
  )
}
