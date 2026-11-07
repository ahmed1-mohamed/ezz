import { useState, useEffect, useCallback } from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Spinner from '@/shared/components/Spinner'
import { adminEarningsApi } from '@/shared/services/api/adminEarningsApi'
import EarningsStats from './components/EarningsStats'
import TeacherEarningsList from './components/TeacherEarningsList'
import AdminPayoutsSection from './components/AdminPayoutsSection'

export default function AdminEarnings() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const [mode, setMode] = useState('monthly')
  const [currentDate, setCurrentDate] = useState(() => new Date())
  const [earningsData, setEarningsData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const monthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`
  const loadData = useCallback(async () => {
    setIsLoading(true)
    try {
      const earningsRes = mode === 'all-time'
        ? await adminEarningsApi.fetchAllTimeEarnings()
        : await adminEarningsApi.fetchMonthlyEarnings(monthStr)
      if (earningsRes?.data) {
        setEarningsData(earningsRes.data)
      }
    } catch (err) {
      console.error('Failed to load admin earnings:', err)
    } finally {
      setIsLoading(false)
    }
  }, [mode, monthStr])
  useEffect(() => {
    let isMounted = true
    Promise.resolve().then(() => {
      if (isMounted) loadData()
    })
    return () => {
      isMounted = false
    }
  }, [loadData])
  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }
  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }
  const formatMonth = () => {
    const options = { month: 'long', year: 'numeric' }
    return currentDate.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', options)
  }
  const platform = earningsData?.platform || earningsData?.summary || earningsData?.statistics || earningsData?.overview || (earningsData && typeof earningsData === 'object' && !Array.isArray(earningsData) ? earningsData : {})
  const teachers = Array.isArray(earningsData?.teachers)
    ? earningsData.teachers
    : Array.isArray(earningsData?.data)
    ? earningsData.data
    : Array.isArray(earningsData)
    ? earningsData
    : []
  const currency = earningsData?.currency || platform?.currency || 'USD'
  const period = earningsData?.period || { type: mode, month: monthStr }
  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 mb-3">
            <TrendingUp size={14} />
            <span>{t('adminDashboard.earnings.badge', 'المالية والأرباح')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {t('adminDashboard.earnings.pageTitle', 'الأرباح والمكاسب')}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-medium">
            {mode === 'all-time'
              ? t('adminDashboard.earnings.allTimeSub', 'عرض إجمالي الإيرادات وصافي الأرباح التراكمية ومستحقات المعلمين حتى الآن')
              : t('adminDashboard.earnings.monthlySub', 'متابعة أرباح المنصة الشهرية، ومصروفات بوابات الدفع، والمسحوبات')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
            <button
              type="button"
              onClick={() => setMode('monthly')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mode === 'monthly'
                  ? 'bg-white dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Calendar size={14} />
              <span>الشهري</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('all-time')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mode === 'all-time'
                  ? 'bg-[#0f7a6c] text-white shadow-md shadow-[#0f7a6c]/20'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Sparkles size={14} />
              <span>الكل حتى الآن</span>
            </button>
          </div>
          {mode === 'monthly' ? (
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
              <button
                type="button"
                onClick={isRtl ? handlePrevMonth : handleNextMonth}
                disabled={isLoading}
                aria-label={isRtl ? 'الشهر السابق' : 'Previous Month'}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white min-w-[100px] text-center flex items-center justify-center gap-1.5">
                {isLoading && <Loader2 size={13} className="animate-spin text-[#0f7a6c]" />}
                {formatMonth()}
              </span>
              <button
                type="button"
                onClick={isRtl ? handleNextMonth : handlePrevMonth}
                disabled={isLoading}
                aria-label={isRtl ? 'الشهر التالي' : 'Next Month'}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-[#0f7a6c] dark:text-emerald-400 border border-teal-100 dark:border-teal-900/40 text-xs font-bold">
              <ShieldCheck size={14} />
              <span>إجمالي تراكمي شامل</span>
            </div>
          )}
          <button
            type="button"
            onClick={loadData}
            disabled={isLoading}
            title="تحديث البيانات"
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <RotateCcw size={16} className={isLoading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>
      {isLoading && !earningsData ? (
        <div className="flex items-center justify-center h-60">
          <Spinner />
        </div>
      ) : (
        <>
          <EarningsStats
            platform={platform}
            currency={currency}
            mode={mode}
          />
          <TeacherEarningsList
            teachers={teachers}
            mode={mode}
            currency={currency}
            periodInfo={period}
          />
          <AdminPayoutsSection
            teachersList={teachers}
            onPayoutRecorded={loadData}
          />
        </>
      )}
    </div>
  )
}
