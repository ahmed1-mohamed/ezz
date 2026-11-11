import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Trophy,
  Star,
  Sparkles,
  RotateCcw,
  MessageSquare,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { dashboardApi } from '@/shared/services/api/dashboardApi.js'
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions'
import { getImageUrl } from '@/shared/services/api/teachersApi'

export default function TeacherPerformanceRanking() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const { isSuperAdmin, hasAllPermissions } = useAdminPermissions()
  const canViewPerformance = isSuperAdmin || hasAllPermissions(['dashboard.analytics.read', 'dashboard.reports.read'])
  const { data: rankingRes, isFetching, refetch } = useQuery({
    queryKey: ['admin-teacher-performance-ranking'],
    queryFn: () => dashboardApi.fetchTeacherPerformance(),
    enabled: Boolean(canViewPerformance),
    staleTime: 3 * 60 * 1000,
  })
  const rawList = useMemo(() => {
    const raw = rankingRes?.data ?? null
    if (!raw) return []
    if (Array.isArray(raw)) return raw
    if (Array.isArray(raw.teachers)) return raw.teachers
    if (Array.isArray(raw.ranking)) return raw.ranking
    if (Array.isArray(raw.data)) return raw.data
    if (Array.isArray(raw.items)) return raw.items
    return []
  }, [rankingRes])
  const teachersList = useMemo(() => {
    if (rawList.length > 0) {
      return rawList.map((item, idx) => ({
        id: item.id || item.teacherId || item._id || idx + 1,
        rank: item.rank || item.ranking || idx + 1,
        name: item.name || item.teacherName || item.fullName || 'معلم',
        avatar: item.avatar || item.image || item.photo || item.teacherImage || item.profileImage || null,
        subject: item.subject || item.specialization || item.course || '',
        rating: Number(item.rating ?? item.averageRating ?? item.avgRating ?? item.rate ?? 5.0).toFixed(1),
        ratingsCount: Number(item.ratingsCount ?? item.reviewsCount ?? item.evaluationsCount ?? item.totalRatings ?? item.ratings ?? item.count ?? item.evaluations ?? 0),
        raw: item,
      }))
    }
    return [
      {
        id: '1',
        rank: 1,
        name: 'أحمد منصور',
        avatar: null,
        subject: 'القرآن الكريم واللغة العربية',
        rating: '5.0',
        ratingsCount: 42,
      },
      {
        id: '2',
        rank: 2,
        name: 'سارة حسن عبد الله',
        avatar: null,
        subject: 'القرآن الكريم واللغة العربية',
        rating: '5.0',
        ratingsCount: 38,
      },
      {
        id: '3',
        rank: 3,
        name: 'نور علي المحمدي',
        avatar: null,
        subject: 'القرآن الكريم واللغة العربية',
        rating: '4.8',
        ratingsCount: 35,
      },
      {
        id: '4',
        rank: 4,
        name: 'إبراهيم يوسف',
        avatar: null,
        subject: 'تلاوة وحفظ متقدم',
        rating: '4.8',
        ratingsCount: 29,
      },
      {
        id: '5',
        rank: 5,
        name: 'نور الهدى',
        avatar: null,
        subject: 'تأسيس اللغة العربية',
        rating: '4.7',
        ratingsCount: 24,
      },
    ]
  }, [rawList])
  if (!canViewPerformance) {
    return null
  }
  const topThree = teachersList.slice(0, 3)
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-7" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 mb-2">
            <Trophy size={14} className="text-amber-500 fill-current" />
            <span>{t('teacherPerformance.badge', 'ترتيب أداء المعلمين')}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
            {t('teacherPerformance.title', 'قائمة التميز وتصنيف أداء المعلمين')}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {t('teacherPerformance.description', 'تصنيف المعلمين المتميزين استناداً إلى متوسط التقييم وعدد تقييمات الطلاب')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            title={t('common.refresh', 'تحديث')}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={15} className={isFetching ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>
      {topThree.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="order-2 md:order-1 rounded-3xl p-5 bg-gradient-to-br from-slate-50 to-slate-100/70 dark:from-slate-800/50 dark:to-slate-800/20 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col justify-between items-center text-center relative overflow-hidden">
            <span className="absolute top-3 left-3 text-2xl font-black text-slate-300 dark:text-slate-600">#2</span>
            <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-black text-xl text-slate-700 dark:text-slate-200 shadow-sm relative mt-2 overflow-hidden">
              {topThree[1].avatar ? (
                <img
                  src={getImageUrl(topThree[1].avatar)}
                  alt={topThree[1].name}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <span>{topThree[1].name[0]}</span>
              )}
              <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-white flex items-center justify-center text-xs font-black border-2 border-white dark:border-slate-800">
                🥈
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h4 className="font-extrabold text-base text-slate-800 dark:text-white">{topThree[1].name}</h4>
              {topThree[1].subject && (
                <p className="text-xs text-slate-500 dark:text-slate-400">{topThree[1].subject}</p>
              )}
            </div>
            <div className="w-full mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-700/60 flex items-center justify-around text-xs font-bold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1 text-amber-500 font-extrabold">
                <Star size={13} className="fill-current" />
                {topThree[1].rating}
              </span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-bold">
                <MessageSquare size={13} className="text-[#0f7a6c]" />
                {topThree[1].ratingsCount} {t('teacherPerformance.evaluations', 'تقييم')}
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-3xl p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white dark:from-amber-950/30 dark:via-slate-800/60 dark:to-slate-900 border-2 border-amber-400 dark:border-amber-500/60 shadow-lg shadow-amber-500/10 flex flex-col justify-between items-center text-center relative overflow-hidden transform md:-translate-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500 text-white text-[11px] font-black shadow-xs mb-1">
              <Sparkles size={12} />
              <span>{t('teacherPerformance.topTeacher', 'المعلم الأول 🏆')}</span>
            </div>
            <div className="w-20 h-20 rounded-3xl bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-300 dark:border-amber-600 flex items-center justify-center font-black text-2xl text-amber-800 dark:text-amber-200 shadow-md relative mt-2 overflow-hidden">
              {topThree[0].avatar ? (
                <img
                  src={getImageUrl(topThree[0].avatar)}
                  alt={topThree[0].name}
                  className="w-full h-full object-cover rounded-3xl"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <span>{topThree[0].name[0]}</span>
              )}
              <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-sm font-black border-2 border-white dark:border-slate-900 shadow-sm">
                🥇
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h4 className="font-black text-lg text-slate-900 dark:text-white">{topThree[0].name}</h4>
              {topThree[0].subject && (
                <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">{topThree[0].subject}</p>
              )}
            </div>
            <div className="w-full mt-4 pt-3 border-t border-amber-200 dark:border-amber-800/60 flex items-center justify-around text-xs font-black text-slate-700 dark:text-slate-200">
              <span className="flex items-center gap-1 text-amber-500 font-black">
                <Star size={14} className="fill-current text-amber-500" />
                {topThree[0].rating}
              </span>
              <span className="flex items-center gap-1 text-[#0f7a6c] dark:text-emerald-400 font-black">
                <MessageSquare size={13} className="text-[#0f7a6c]" />
                {topThree[0].ratingsCount} {t('teacherPerformance.evaluations', 'تقييم')}
              </span>
            </div>
          </div>
          <div className="order-3 md:order-3 rounded-3xl p-5 bg-gradient-to-br from-amber-900/5 to-slate-50 dark:from-amber-950/20 dark:to-slate-800/20 border border-amber-900/20 dark:border-amber-900/40 shadow-xs flex flex-col justify-between items-center text-center relative overflow-hidden">
            <span className="absolute top-3 left-3 text-2xl font-black text-slate-300 dark:text-slate-600">#3</span>
            <div className="w-16 h-16 rounded-2xl bg-amber-100/70 dark:bg-amber-950/60 flex items-center justify-center font-black text-xl text-amber-800 dark:text-amber-300 shadow-sm relative mt-2 overflow-hidden">
              {topThree[2].avatar ? (
                <img
                  src={getImageUrl(topThree[2].avatar)}
                  alt={topThree[2].name}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <span>{topThree[2].name[0]}</span>
              )}
              <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-black border-2 border-white dark:border-slate-800">
                🥉
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h4 className="font-extrabold text-base text-slate-800 dark:text-white">{topThree[2].name}</h4>
              {topThree[2].subject && (
                <p className="text-xs text-slate-500 dark:text-slate-400">{topThree[2].subject}</p>
              )}
            </div>
            <div className="w-full mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-700/60 flex items-center justify-around text-xs font-bold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1 text-amber-500 font-extrabold">
                <Star size={13} className="fill-current" />
                {topThree[2].rating}
              </span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-bold">
                <MessageSquare size={13} className="text-[#0f7a6c]" />
                {topThree[2].ratingsCount} {t('teacherPerformance.evaluations', 'تقييم')}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-400 flex items-center justify-between px-2">
          <span>{t('teacherPerformance.generalRanking', 'الترتيب العام للمعلمين')}</span>
          <span>{t('teacherPerformance.totalRanked', 'إجمالي المعلمين المصنفين')}: {teachersList.length}</span>
        </div>
        {teachersList.map((teacher, idx) => (
          <div
            key={teacher.id || idx}
            className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-[#0f7a6c]/30 dark:hover:border-emerald-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5">
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                  idx === 0
                    ? 'bg-amber-400 text-slate-900 shadow-sm'
                    : idx === 1
                    ? 'bg-slate-300 text-slate-800'
                    : idx === 2
                    ? 'bg-amber-700 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                #{idx + 1}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center font-bold text-[#0f7a6c] dark:text-emerald-400 shrink-0 overflow-hidden">
                {teacher.avatar ? (
                  <img
                    src={getImageUrl(teacher.avatar)}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  <span>{teacher.name[0]}</span>
                )}
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-800 dark:text-white">{teacher.name}</h4>
                {teacher.subject && (
                  <p className="text-xs text-slate-400">{teacher.subject}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6 justify-between sm:justify-end text-xs">
              <div className="text-start">
                <span className="text-[10px] text-slate-400 font-bold block">{t('teacherPerformance.avgRating', 'متوسط التقييم')}</span>
                <span className="font-black text-amber-500 flex items-center gap-1">
                  <Star size={13} className="fill-current" />
                  {teacher.rating}
                </span>
              </div>
              <div className="text-start">
                <span className="text-[10px] text-slate-400 font-bold block">{t('teacherPerformance.evaluationsCount', 'عدد التقييمات')}</span>
                <span className="font-black text-slate-800 dark:text-white flex items-center gap-1">
                  <MessageSquare size={13} className="text-[#0f7a6c]" />
                  {teacher.ratingsCount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
