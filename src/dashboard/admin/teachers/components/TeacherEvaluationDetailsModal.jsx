import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  Star,
  Award,
  BookOpen,
  Calendar,
  Quote,
  ShieldCheck,
  Layers,
  GraduationCap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { getImageUrl } from '@/shared/services/api/teachersApi'
import { adminTeacherEvaluationsApi } from '@/shared/services/api/adminTeacherEvaluationsApi'

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
  needs_improvement: {
    labelAr: 'يحتاج للتطور',
    labelEn: 'Needs Improvement',
    class: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    stars: 1,
  },
}

export default function TeacherEvaluationDetailsModal({
  isOpen,
  onClose,
  teacherId,
  teacherData = null,
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true
  const [evaluations, setEvaluations] = useState([])
  const [statistics, setStatistics] = useState(null)
  const [teacher, setTeacher] = useState(teacherData)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (!isOpen || !teacherId) return
    let active = true
    const loadDetails = async () => {
      setIsLoading(true)
      try {
        const res = await adminTeacherEvaluationsApi.fetchTeacherAdminEvaluationsDetails(teacherId)
        if (!active) return
        const list = res?.data || []
        setEvaluations(Array.isArray(list) ? list : [])
        setStatistics(res?.statistics || null)
        if (res?.teacher) {
          setTeacher(res.teacher)
        } else if (teacherData) {
          setTeacher(teacherData)
        }
      } catch {
        if (!active) return
        setEvaluations([])
        setStatistics(null)
      } finally {
        if (active) setIsLoading(false)
      }
    }
    loadDetails()
    return () => {
      active = false
    }
  }, [isOpen, teacherId, teacherData])
  const resolvedTeacherName = useMemo(() => {
    if (typeof teacher?.name === 'object' && teacher?.name !== null) {
      return isRtl ? teacher.name.ar || teacher.name.en : teacher.name.en || teacher.name.ar
    }
    return teacher?.displayName || teacher?.name || (isRtl ? 'معلم' : 'Teacher')
  }, [teacher, isRtl])
  const resolvedTeacherImage = useMemo(() => {
    return teacher?.image ? getImageUrl(teacher.image) : null
  }, [teacher])
  const statsSummary = useMemo(() => {
    const total = Number(statistics?.totalEvaluations ?? evaluations.length)
    const avg = statistics?.averageRating !== undefined && statistics?.averageRating !== null
      ? Number(statistics.averageRating).toFixed(1)
      : evaluations.length > 0
        ? (evaluations.reduce((acc, curr) => acc + (curr.score || 3), 0) / evaluations.length).toFixed(1)
        : '0.0'
    const dist = statistics?.distribution || {}
    return {
      total,
      avg,
      dist,
    }
  }, [statistics, evaluations])
  const formatDate = (dateStr) => {
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
  if (!isOpen || typeof document === 'undefined') return null
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
          <div className="flex items-center gap-3 text-start">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center shrink-0">
              {resolvedTeacherImage ? (
                <img
                  src={resolvedTeacherImage}
                  alt={resolvedTeacherName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <GraduationCap size={22} className="text-[#0f7a6c]" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
                  {resolvedTeacherName}
                </h2>
                <span className="text-[11px] font-mono text-slate-400">
                  ID: #{String(teacherId).slice(-6)}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {teacher?.specialization || teacher?.subject || (isRtl ? 'سجل تقييمات الإدارة' : 'Official Evaluation History')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-5 overflow-y-auto flex-1 text-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block">
                  {isRtl ? 'إجمالي التقييمات' : 'Evaluations'}
                </span>
                <span className="text-xl font-black text-slate-800 dark:text-white mt-1 block font-mono">
                  {statsSummary.total}
                </span>
              </div>
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Layers size={16} />
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block">
                  {isRtl ? 'متوسط الدرجة' : 'Avg Score'}
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-xl font-black text-slate-800 dark:text-white font-mono">
                    {statsSummary.avg}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">/ 5.0</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Star size={16} className="fill-current" />
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-100 dark:border-slate-800 col-span-2 sm:col-span-1 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block">
                  {isRtl ? 'التقييم العام' : 'Overall Status'}
                </span>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 mt-1 block">
                  {Number(statsSummary.avg) >= 4.0 ? (isRtl ? 'أداء متميز' : 'Top Tier') : (isRtl ? 'أداء جيد' : 'Good Performance')}
                </span>
              </div>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Award size={16} />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#0f7a6c]" />
              <span>{isRtl ? 'سجل تقييمات المعلم الرسمية' : 'Admin Evaluation Records'}</span>
            </h3>
            {isLoading ? (
              <div className="py-14 flex flex-col items-center justify-center gap-2 text-slate-400">
                <Spinner size="md" />
                <span className="text-xs font-bold">{isRtl ? 'جاري جلب تفاصيل التقييمات...' : 'Loading details...'}</span>
              </div>
            ) : evaluations.length === 0 ? (
              <div className="py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-center space-y-2 p-4">
                <Award size={36} className="text-slate-300 dark:text-slate-700 mx-auto" />
                <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                  {isRtl ? 'لا توجد تقييمات إدارية مسجلة لهذا المعلم بعد' : 'No admin evaluations recorded for this teacher yet'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {isRtl ? 'يمكنك إضافة تقييم جديد واختيار الحصة المناسبة لتوثيق أداء المعلم' : 'Create a new evaluation to assess performance in active sessions'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {evaluations.map((item) => {
                  const gradeKey = item.grade || item.rating
                  const meta = RATING_BADGES[gradeKey] || RATING_BADGES.good
                  const groupName = typeof item.group?.name === 'object'
                    ? (isRtl ? item.group.name.ar || item.group.name.en : item.group.name.en || item.group.name.ar)
                    : (item.group?.name || item.groupName || (isRtl ? 'مجموعة دراسية' : 'Study Group'))
                  const sessionName = item.session?.title || item.sessionTitle || (isRtl ? 'حصة دراسية' : 'Session')
                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-slate-200 dark:hover:border-slate-700 transition-all space-y-3 shadow-2xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                            <BookOpen size={12} className="text-[#0f7a6c]" />
                            <span>{groupName}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                            <Calendar size={12} className="text-amber-500" />
                            <span>{sessionName}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-bold ${meta.class}`}>
                            <Star size={12} className="fill-current" />
                            <span>{isRtl ? meta.labelAr : meta.labelEn}</span>
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {formatDate(item.createdAt)}
                          </span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        <Quote size={14} className="text-slate-300 dark:text-slate-600 mb-1" />
                        <p>{item.notes}</p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-600 dark:text-slate-300">
                          {isRtl ? 'المُقيِّم:' : 'Evaluator:'} {item.evaluator || (isRtl ? 'الإدارة الأكاديمية' : 'Academic Administration')}
                        </span>
                        <span className="font-mono">#{String(item.id).slice(-6)}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isRtl ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
