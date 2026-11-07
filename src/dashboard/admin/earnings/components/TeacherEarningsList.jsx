import { useState, useMemo } from 'react'
import {
  Users,
  Search,
  GraduationCap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getImageUrl } from '@/shared/services/api/teachersApi'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  const formatted = num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return `${formatted} ${curr}`
}

export default function TeacherEarningsList({
  teachers = [],
  mode = 'monthly',
  currency = 'USD',
}) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('earned')
  const filteredTeachers = useMemo(() => {
    let list = Array.isArray(teachers) ? [...teachers] : []
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim()
      list = list.filter((item) => {
        const name = String(item.name || item.teacherName || item.fullName || '').toLowerCase()
        return name.includes(q)
      })
    }
    list.sort((a, b) => {
      if (sortBy === 'name') {
        const nameA = String(a.name || a.teacherName || a.fullName || '')
        const nameB = String(b.name || b.teacherName || b.fullName || '')
        return nameA.localeCompare(nameB)
      }
      if (mode === 'all-time') {
        if (sortBy === 'due') {
          const dueB = Number(b.dueBalance ?? b.dueEarnings ?? b.due ?? 0)
          const dueA = Number(a.dueBalance ?? a.dueEarnings ?? a.due ?? 0)
          return dueB - dueA
        }
        const earnedB = Number(b.totalEarned ?? b.totalEarnings ?? b.earned ?? b.amount ?? b.rawAmount ?? 0)
        const earnedA = Number(a.totalEarned ?? a.totalEarnings ?? a.earned ?? a.amount ?? a.rawAmount ?? 0)
        return earnedB - earnedA
      } else {
        if (sortBy === 'due') {
          const dueB = Number(b.dueAtEndOfMonth ?? b.dueBalance ?? b.dueEarnings ?? b.due ?? 0)
          const dueA = Number(a.dueAtEndOfMonth ?? a.dueBalance ?? a.dueEarnings ?? a.due ?? 0)
          return dueB - dueA
        }
        const earnedB = Number(b.earnedThisMonth ?? b.monthlyEarnings ?? b.earned ?? b.amount ?? b.rawAmount ?? 0)
        const earnedA = Number(a.earnedThisMonth ?? a.monthlyEarnings ?? a.earned ?? a.amount ?? a.rawAmount ?? 0)
        return earnedB - earnedA
      }
    })
    return list
  }, [teachers, searchTerm, sortBy, mode])
  const totalEarnedSum = useMemo(() => {
    return filteredTeachers.reduce((acc, curr) => {
      const val = mode === 'all-time'
        ? (curr.totalEarned ?? curr.totalEarnings ?? curr.earned ?? curr.amount ?? curr.rawAmount)
        : (curr.earnedThisMonth ?? curr.monthlyEarnings ?? curr.earned ?? curr.amount ?? curr.rawAmount)
      return acc + Number(val || 0)
    }, 0)
  }, [filteredTeachers, mode])
  const totalDueSum = useMemo(() => {
    return filteredTeachers.reduce((acc, curr) => {
      const val = mode === 'all-time'
        ? (curr.dueBalance ?? curr.dueEarnings ?? curr.due)
        : (curr.dueAtEndOfMonth ?? curr.dueBalance ?? curr.dueEarnings ?? curr.due)
      return acc + Number(val || 0)
    }, 0)
  }, [filteredTeachers, mode])
  const maxEarned = useMemo(() => {
    const vals = filteredTeachers.map((tItem) =>
      Number(mode === 'all-time'
        ? (tItem.totalEarned ?? tItem.totalEarnings ?? tItem.earned ?? tItem.amount ?? tItem.rawAmount ?? 0)
        : (tItem.earnedThisMonth ?? tItem.monthlyEarnings ?? tItem.earned ?? tItem.amount ?? tItem.rawAmount ?? 0))
    )
    return Math.max(...vals, 1)
  }, [filteredTeachers, mode])
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm p-6 sm:p-7 space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold">
              <GraduationCap size={18} />
            </div>
            <h3 className="font-extrabold text-slate-800 dark:text-white text-lg">
              {mode === 'all-time'
                ? t('adminDashboard.earnings.teachersListAllTime', 'أرباح ومستحقات المعلمين (التراكمي)')
                : t('adminDashboard.earnings.teachersListMonthly', 'أرباح ومستحقات المعلمين (الشهري)')}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {filteredTeachers.length} {t('common.teacherCount', 'معلماً')}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'all-time'
              ? t('adminDashboard.earnings.allTimeTeachersDesc', 'عرض شامل لإجمالي أرباح ومسحوبات ورصيد كل معلم حتى اللحظة')
              : t('adminDashboard.earnings.monthlyTeachersDesc', 'تقرير أرباح المعلمين والرصيد الافتتاحي والمدفوعات خلال الشهر المحدد')}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative min-w-[200px] flex-1 sm:flex-initial">
            <Search className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400`} size={15} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('common.searchTeacher', 'بحث باسم المعلم...')}
              className={`w-full ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30`}
            />
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-bold">
            <button
              type="button"
              onClick={() => setSortBy('earned')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                sortBy === 'earned'
                  ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              الأعلى ربحاً
            </button>
            <button
              type="button"
              onClick={() => setSortBy('due')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                sortBy === 'due'
                  ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              الأعلى استحقاقاً
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/60 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            {mode === 'all-time' ? 'مجموع أرباح المعلمين الكلية:' : 'مجموع أرباح المعلمين لهذا الشهر:'}
          </span>
          <span className="font-extrabold text-[#0f7a6c] dark:text-emerald-400 text-sm">
            {formatVal(totalEarnedSum, currency)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            {mode === 'all-time' ? 'مجموع الأرصدة المستحقة حالياً:' : 'مجموع المستحق بنهاية الشهر:'}
          </span>
          <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm">
            {formatVal(totalDueSum, currency)}
          </span>
        </div>
      </div>
      {filteredTeachers.length === 0 ? (
        <div className="py-12 text-center text-slate-400 space-y-2">
          <Users size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
          <p className="font-bold text-sm">
            {searchTerm ? 'لا توجد نتائج تطابق بحثك' : 'لا توجد بيانات أرباح معلمين مسجلة لهذه الفترة'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTeachers.map((teacher, idx) => {
            const teacherName = teacher.name || teacher.teacherName || teacher.fullName || 'معلم بدون اسم'
            const initial = String(teacherName).trim()[0] || 'م'
            const teacherCurr = teacher.currency || currency || 'USD'
            const earnedAmount = mode === 'all-time'
              ? (teacher.totalEarned ?? teacher.totalEarnings ?? teacher.earned ?? teacher.amount ?? teacher.rawAmount ?? 0)
              : (teacher.earnedThisMonth ?? teacher.monthlyEarnings ?? teacher.earned ?? teacher.amount ?? teacher.rawAmount ?? 0)
            const paidAmount = mode === 'all-time'
              ? (teacher.totalPaid ?? teacher.paid ?? 0)
              : (teacher.paidThisMonth ?? teacher.paid ?? 0)
            const openingDue = mode === 'monthly'
              ? (teacher.openingDue ?? teacher.previousDue ?? 0)
              : null
            const dueBalance = mode === 'all-time'
              ? (teacher.dueBalance ?? teacher.dueEarnings ?? teacher.due ?? 0)
              : (teacher.dueAtEndOfMonth ?? teacher.dueBalance ?? teacher.dueEarnings ?? teacher.due ?? 0)
            const widthPct = Math.min(100, Math.max(5, (Number(earnedAmount) / maxEarned) * 100))
            const avatar = teacher.avatar || teacher.image || teacher.photo || teacher.profileImage
            return (
              <div
                key={teacher.id || teacher._id || idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#0f7a6c]/30 dark:hover:border-emerald-500/30 transition-all hover:shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-[220px]">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0 border border-teal-100 dark:border-emerald-900/40 overflow-hidden">
                    {avatar ? (
                      <img
                        src={getImageUrl(avatar)}
                        alt={teacherName}
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    ) : (
                      <span>{initial}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-800 dark:text-white">
                      {teacherName}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono">
                      ID: #{String(teacher.id || idx + 1).slice(-6)}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col flex-1 max-w-xs px-2 space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                    <span>نسبة الأرباح</span>
                    <span>{Math.round(widthPct)}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-between md:justify-end">
                  <div className="text-start">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {mode === 'all-time' ? 'إجمالي الأرباح' : 'أرباح الشهر'}
                    </span>
                    <span className="font-black text-sm text-[#0f7a6c] dark:text-emerald-400">
                      {formatVal(earnedAmount, teacherCurr)}
                    </span>
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {mode === 'all-time' ? 'إجمالي المدفوع' : 'المدفوع بالشهر'}
                    </span>
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-300">
                      {formatVal(paidAmount, teacherCurr)}
                    </span>
                  </div>
                  {mode === 'monthly' && (
                    <div className="text-start">
                      <span className="text-[11px] font-bold text-slate-400 block">
                        الرصيد الافتتاحي
                      </span>
                      <span className="font-bold text-sm text-slate-600 dark:text-slate-400">
                        {formatVal(openingDue, teacherCurr)}
                      </span>
                    </div>
                  )}
                  <div className="text-start min-w-[100px]">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      {mode === 'all-time' ? 'الرصيد المستحق' : 'المستحق بنهاية الشهر'}
                    </span>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-xl text-xs font-black mt-0.5 ${
                        Number(dueBalance) > 0
                          ? 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40'
                      }`}
                    >
                      {formatVal(dueBalance, teacherCurr)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
