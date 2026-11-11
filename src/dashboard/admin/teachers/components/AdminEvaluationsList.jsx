import { useState, useMemo, useCallback } from 'react'
import {
  Star,
  Search,
  Plus,
  Trash2,
  GraduationCap,
  Calendar,
  Layers,
  Award,
  TrendingDown,
  Sparkles,
  RotateCcw,
  BookOpen,
  Quote,
  ShieldCheck,
  Eye,
} from 'lucide-react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import useDebounce from '@/shared/hooks/useDebounce'
import { showSuccessToast, showErrorToast, showDeleteConfirm } from '@/shared/utils/sweetAlert'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import { adminTeacherEvaluationsApi } from '@/shared/services/api/adminTeacherEvaluationsApi'
import { teachersApi, getImageUrl } from '@/shared/services/api/teachersApi'
import AdminAddTeacherEvaluationModal from './AdminAddTeacherEvaluationModal'
import TeacherEvaluationDetailsModal from './TeacherEvaluationDetailsModal'

const RATING_BADGES = {
  excellent: {
    labelAr: 'ممتاز',
    labelEn: 'Excellent',
    class: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    stars: 5,
  },
  very_good: {
    labelAr: 'جيد جداً',
    labelEn: 'Very Good',
    class: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200 dark:border-teal-800',
    stars: 4,
  },
  good: {
    labelAr: 'جيد',
    labelEn: 'Good',
    class: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    stars: 3,
  },
  acceptable: {
    labelAr: 'مقبول',
    labelEn: 'Acceptable',
    class: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    stars: 2,
  },
  poor: {
    labelAr: 'ضعيف',
    labelEn: 'Poor',
    class: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    stars: 1,
  },
  weak: {
    labelAr: 'ضعيف',
    labelEn: 'Poor',
    class: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    stars: 1,
  },
  needs_improvement: {
    labelAr: 'يحتاج للتطور',
    labelEn: 'Needs Improvement',
    class: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    stars: 1,
  },
}

export default function AdminEvaluationsList() {
  const { i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true
  const queryClient = useQueryClient()
  const { hasPermission, isSuperAdmin } = useAdminPermissions()
  const canCreate = isSuperAdmin || hasPermission('teacher_evaluations.create') || hasPermission('teachers.create')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTeacherId, setSelectedTeacherId] = useState('')
  const [ratingFilter, setRatingFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [detailsTeacher, setDetailsTeacher] = useState(null)
  const debouncedSearch = useDebounce(searchQuery, 350)
  const { data: teachersRes } = useQuery({
    queryKey: ['admin-teachers-eval-lookup'],
    queryFn: () => teachersApi.fetchTeachers({ limit: 100 }),
    staleTime: 5 * 60 * 1000,
  })
  const teachersList = useMemo(() => {
    const raw = teachersRes?.data || teachersRes || []
    return Array.isArray(raw) ? raw : []
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
    refetch,
  } = useQuery({
    queryKey: ['admin-teacher-evaluations-list', queryParams],
    queryFn: () => {
      if (selectedTeacherId) {
        return adminTeacherEvaluationsApi.fetchTeacherAdminEvaluationsDetails(selectedTeacherId, queryParams)
      }
      return adminTeacherEvaluationsApi.fetchAdminEvaluations(queryParams)
    },
    staleTime: 30 * 1000,
  })
  const evaluations = useMemo(() => {
    const list = evalRes?.data
    return Array.isArray(list) ? list : []
  }, [evalRes])
  const statistics = useMemo(() => {
    const stats = evalRes?.statistics
    const totalCount = Number(stats?.totalEvaluations ?? stats?.total ?? evaluations.length)
    const avg = stats?.averageRating !== undefined && stats?.averageRating !== null
      ? Number(stats.averageRating).toFixed(1)
      : evaluations.length > 0
        ? (evaluations.reduce((acc, curr) => acc + (curr.score || 3), 0) / evaluations.length).toFixed(1)
        : '0.0'
    const dist = stats?.distribution || {}
    const topCount = Number(dist.excellent || 0) + Number(dist.very_good || 0) + Number(dist['5'] || 0) + Number(dist['4'] || 0)
    const needsAttention = Number(dist.poor || dist.weak || 0) + Number(dist.needs_improvement || 0) + Number(dist['1'] || 0) + Number(dist['2'] || 0)
    return {
      totalCount,
      avg,
      topCount,
      needsAttention,
    }
  }, [evalRes, evaluations])
  const deleteMutation = useMutation({
    mutationFn: (id) => adminTeacherEvaluationsApi.deleteAdminEvaluation(id),
    onSuccess: () => {
      showSuccessToast(isRtl ? 'تم حذف التقييم بنجاح' : 'Evaluation deleted successfully')
      queryClient.invalidateQueries({ queryKey: ['admin-teacher-evaluations-list'] })
    },
    onError: () => {
      showErrorToast(isRtl ? 'فشل حذف التقييم' : 'Failed to delete evaluation')
    },
  })
  const handleDelete = useCallback(async (id) => {
    const confirmed = await showDeleteConfirm(isRtl, isRtl ? 'هذا التقييم الإداري' : 'this evaluation')
    if (confirmed) {
      deleteMutation.mutate(id)
    }
  }, [isRtl, deleteMutation])
  const handleResetFilters = useCallback(() => {
    setSelectedTeacherId('')
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
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2.5">
            <ShieldCheck size={26} className="text-[#0f7a6c] dark:text-[#14a693]" />
            <span>{isRtl ? 'تقييمات الإدارة للمعلمين' : 'Admin Teacher Evaluations'}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {isRtl
              ? 'متابعة وتوثيق جودة التدريس وأداء المعلمين في الحصص والمجموعات الدراسية'
              : 'Supervise and document teaching quality and session performance'}
          </p>
        </div>
        {canCreate && (
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0f7a6c] hover:bg-[#14a693] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#0f7a6c]/20 transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <Plus size={18} />
            <span>{isRtl ? 'إضافة تقييم جديد للمعلم' : 'New Teacher Evaluation'}</span>
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
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
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'متوسط التقييم' : 'Average Score'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Star size={16} className="fill-current" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-2xl font-black text-slate-800 dark:text-white font-mono">
              {statistics.avg}
            </span>
            <span className="text-xs font-bold text-slate-400">/ 5.0</span>
          </div>
        </div>
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'تقييمات متميزة' : 'Top Ratings'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2 font-mono">
            {statistics.topCount}
          </p>
        </div>
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft text-start">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? 'تحتاج متابعة' : 'Needs Follow-up'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <TrendingDown size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-2 font-mono">
            {statistics.needsAttention}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft flex flex-wrap items-center justify-between gap-3">
        <div className="flex-1 min-w-[220px] relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isRtl ? 'بحث باسم المعلم، المجموعة، الحصة، أو الملاحظات...' : 'Search teacher, group, session, or notes...'}
            className="w-full ps-10 pe-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
          />
          <Search size={16} className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={selectedTeacherId}
            onChange={(e) => {
              setSelectedTeacherId(e.target.value)
              setCurrentPage(1)
            }}
            className="px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-200 text-xs font-bold focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
          >
            <option value="">{isRtl ? 'جميع المعلمين' : 'All Teachers'}</option>
            {teachersList.map((t) => {
              const tid = t.id || t._id || t.teacher_id
              const tname = typeof t.name === 'object'
                ? (isRtl ? t.name.ar || t.name.en : t.name.en || t.name.ar)
                : (t.displayName || t.name || (isRtl ? 'معلم' : 'Teacher'))
              return (
                <option key={tid} value={tid}>
                  {tname}
                </option>
              )
            })}
          </select>
          <select
            value={ratingFilter}
            onChange={(e) => {
              setRatingFilter(e.target.value)
              setCurrentPage(1)
            }}
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
          {(selectedTeacherId || ratingFilter !== 'all' || searchQuery) && (
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
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400">
            <Spinner size="lg" />
            <p className="text-xs font-bold">{isRtl ? 'جاري تحميل تقييمات المعلمين...' : 'Loading teacher evaluations...'}</p>
          </div>
        ) : evaluations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400 text-center px-4">
            <Award size={44} strokeWidth={1.5} className="text-slate-300 dark:text-slate-700" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? 'لا توجد تقييمات مسجلة حالياً' : 'No Evaluations Found'}
            </h3>
            <p className="text-xs text-slate-400 max-w-sm">
              {isRtl
                ? 'لم يتم العثور على أي تقييم يطابق خيارات البحث الحالية. يمكنك البدء بإضافة تقييم للمعلم.'
                : 'No evaluations match your search criteria. You can create a new evaluation for any teacher.'}
            </p>
            {canCreate && (
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0f7a6c] text-white text-xs font-bold shadow-xs hover:bg-[#14a693] transition-all cursor-pointer"
              >
                <Plus size={14} />
                <span>{isRtl ? 'إضافة تقييم جديد' : 'Add New Evaluation'}</span>
              </button>
            )}
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {evaluations.map((item) => {
              const gradeKey = item.grade || item.rating
              const meta = RATING_BADGES[gradeKey] || RATING_BADGES.good
              const teacherImage = item.teacher?.image ? getImageUrl(item.teacher.image) : null
              const teacherDisplayName = item.teacher?.name || item.teacherName || (isRtl ? 'معلم' : 'Teacher')
              const groupDisplayName = item.group?.name || item.groupName || ''
              const sessionDisplayName = item.session?.title || item.sessionTitle || ''
              return (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 hover:bg-slate-50/70 dark:hover:bg-slate-850/40 transition-colors text-start space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center shrink-0 text-slate-400 font-bold text-base">
                        {teacherImage ? (
                          <img
                            src={teacherImage}
                            alt={teacherDisplayName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <GraduationCap size={22} className="text-[#0f7a6c]" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                            {teacherDisplayName}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            #{String(item.id).slice(-6)}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          {groupDisplayName && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold">
                              <BookOpen size={11} className="text-[#0f7a6c]" />
                              <span>{groupDisplayName}</span>
                            </span>
                          )}
                          {sessionDisplayName && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium">
                              <Calendar size={11} className="text-amber-500" />
                              <span>{sessionDisplayName}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-black ${meta.class}`}
                      >
                        <Star size={13} className="fill-current" />
                        <span>{isRtl ? meta.labelAr : meta.labelEn}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDetailsTeacher(item.teacher || { id: item.teacherId, name: teacherDisplayName })}
                        title={isRtl ? 'عرض سجل وتفاصيل تقييمات هذا المعلم' : 'View Teacher Evaluation History'}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#0f7a6c] dark:hover:text-[#14a693] hover:border-[#0f7a6c]/30 text-xs font-bold transition-all cursor-pointer"
                      >
                        <Eye size={14} />
                        <span className="hidden sm:inline">{isRtl ? 'التفاصيل' : 'Details'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        title={isRtl ? 'حذف التقييم' : 'Delete'}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="relative p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-100 dark:border-slate-800/80">
                    <Quote size={16} className="text-slate-300 dark:text-slate-600 mb-1" />
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {item.notes}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0f7a6c]" />
                      <span className="font-semibold text-slate-600 dark:text-slate-300">
                        {item.evaluator || (isRtl ? 'الإدارة الأكاديمية' : 'Academic Administration')}
                      </span>
                    </div>
                    <span className="font-mono text-slate-400">
                      {formatDate(item.createdAt)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {evalRes?.pagination && evalRes.pagination.totalPages > 1 && (
          <div className="flex items-center justify-between p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs">
            <span className="font-bold text-slate-500 dark:text-slate-400">
              {isRtl ? `صفحة ${currentPage} من ${evalRes.pagination.totalPages}` : `Page ${currentPage} of ${evalRes.pagination.totalPages}`}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-bold cursor-pointer"
              >
                {isRtl ? 'السابق' : 'Previous'}
              </button>
              <button
                type="button"
                disabled={currentPage >= evalRes.pagination.totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-bold cursor-pointer"
              >
                {isRtl ? 'التالي' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
      <AdminAddTeacherEvaluationModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        initialTeacherId={selectedTeacherId}
        onCreated={() => {
          queryClient.invalidateQueries({ queryKey: ['admin-teacher-evaluations-list'] })
          refetch()
        }}
      />
      <TeacherEvaluationDetailsModal
        isOpen={Boolean(detailsTeacher)}
        onClose={() => setDetailsTeacher(null)}
        teacherId={detailsTeacher?.id || detailsTeacher?._id || detailsTeacher?.teacherId || detailsTeacher?.teacher_id}
        teacherData={detailsTeacher}
      />
    </div>
  )
}
