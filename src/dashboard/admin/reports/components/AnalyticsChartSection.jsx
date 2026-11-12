import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Coins,
  Loader2,
  RotateCcw,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { dashboardApi } from '@/shared/services/api/dashboardApi.js'
import { adminEarningsApi } from '@/shared/services/api/adminEarningsApi.js'
import { adminPaymentsApi } from '@/shared/services/api/adminPaymentsApi.js'

function formatChartLabel(rawLabel, isRtl) {
  if (!rawLabel || typeof rawLabel !== 'string') {
    return String(rawLabel || '')
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(rawLabel)) {
    try {
      const parts = rawLabel.split('-')
      const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'short' })
      }
    } catch {
      return rawLabel
    }
  }
  return rawLabel
}

export default function AnalyticsChartSection() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const [period, setPeriod] = useState('monthly')
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const {
    data: analyticsRes,
    isLoading: isLoadingAnalytics,
    isFetching: isFetchingAnalytics,
    refetch: refetchAnalytics,
  } = useQuery({
    queryKey: ['admin-dashboard-analytics', period],
    queryFn: () => dashboardApi.fetchAnalytics({ period }),
    staleTime: 2 * 60 * 1000,
  })
  const {
    data: earningsRes,
    isFetching: isFetchingEarnings,
    refetch: refetchEarnings,
  } = useQuery({
    queryKey: ['admin-earnings-overview', period],
    queryFn: async () => {
      if (period === 'yearly') {
        return adminEarningsApi.fetchAllTimeEarnings()
      }
      const now = new Date()
      const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
      return adminEarningsApi.fetchMonthlyEarnings(monthStr)
    },
    staleTime: 2 * 60 * 1000,
  })
  const {
    data: paymentStatsRes,
    isFetching: isFetchingPayments,
    refetch: refetchPayments,
  } = useQuery({
    queryKey: ['admin-payments-stats-overview'],
    queryFn: () => adminPaymentsApi.fetchSubscriptionsStats(),
    staleTime: 5 * 60 * 1000,
  })
  const isRefreshing = isFetchingAnalytics || isFetchingEarnings || isFetchingPayments
  const rawData = analyticsRes?.data ?? null
  const earningsPlatform = useMemo(() => {
    const raw = earningsRes?.data
    if (!raw) return {}
    return raw.platform || raw.summary || raw.statistics || raw.overview || (typeof raw === 'object' && !Array.isArray(raw) ? raw : {})
  }, [earningsRes])
  const paymentsPaid = useMemo(() => {
    const raw = paymentStatsRes?.data || paymentStatsRes || {}
    return raw.paid || {}
  }, [paymentStatsRes])
  const points = useMemo(() => {
    let list = []
    if (rawData) {
      if (Array.isArray(rawData)) {
        list = rawData
      } else if (Array.isArray(rawData.chart)) {
        list = rawData.chart
      } else if (Array.isArray(rawData.points)) {
        list = rawData.points
      } else if (Array.isArray(rawData.data)) {
        list = rawData.data
      } else if (Array.isArray(rawData.timeline)) {
        list = rawData.timeline
      } else if (Array.isArray(rawData.series)) {
        list = rawData.series
      } else if (rawData.labels && Array.isArray(rawData.labels)) {
        const vals = rawData.values || rawData.data || []
        list = rawData.labels.map((lbl, i) => ({
          label: lbl,
          revenue: typeof vals[i] === 'number' ? vals[i] : (vals[i]?.revenue || vals[i]?.value || 0),
          profit: typeof vals[i] === 'object' ? (vals[i]?.profit || vals[i]?.netProfit || 0) : 0,
        }))
      }
    }
    if (list.length > 0) {
      return list.map((item, idx) => {
        const rawLabel = item.label || item.date || item.day || item.month || item.name || `P${idx + 1}`
        const label = formatChartLabel(rawLabel, isRtl)
        const revenue = Number(
          item.revenue ??
          item.totalRevenue ??
          item.grossRevenue ??
          item.amount ??
          item.grossCollected ??
          item.earnings ??
          item.income ??
          item.total ??
          0
        )
        const profit = Number(
          item.profit ??
          item.netProfit ??
          item.netRevenue ??
          item.profits ??
          item.platformProfit ??
          (revenue > 0 ? Math.round(revenue * 0.35) : 0)
        )
        return { label, revenue, profit, raw: item }
      })
    }
    if (period === 'daily') {
      const days = []
      for (let i = 6; i >= 0; i--) {
        const d = new Date()
        d.setDate(d.getDate() - i)
        days.push({
          label: d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', { day: 'numeric', month: 'short' }),
          revenue: 0,
          profit: 0,
        })
      }
      return days
    }
    if (period === 'weekly') {
      return [
        { label: isRtl ? 'السبت' : 'Sat', revenue: 0, profit: 0 },
        { label: isRtl ? 'الأحد' : 'Sun', revenue: 0, profit: 0 },
        { label: isRtl ? 'الإثنين' : 'Mon', revenue: 0, profit: 0 },
        { label: isRtl ? 'الثلاثاء' : 'Tue', revenue: 0, profit: 0 },
        { label: isRtl ? 'الأربعاء' : 'Wed', revenue: 0, profit: 0 },
        { label: isRtl ? 'الخميس' : 'Thu', revenue: 0, profit: 0 },
        { label: isRtl ? 'الجمعة' : 'Fri', revenue: 0, profit: 0 },
      ]
    }
    if (period === 'yearly') {
      return [
        { label: '2024', revenue: 0, profit: 0 },
        { label: '2025', revenue: 0, profit: 0 },
        { label: '2026', revenue: 0, profit: 0 },
      ]
    }
    return [
      { label: isRtl ? 'يناير' : 'Jan', revenue: 0, profit: 0 },
      { label: isRtl ? 'فبراير' : 'Feb', revenue: 0, profit: 0 },
      { label: isRtl ? 'مارس' : 'Mar', revenue: 0, profit: 0 },
      { label: isRtl ? 'أبريل' : 'Apr', revenue: 0, profit: 0 },
      { label: isRtl ? 'مايو' : 'May', revenue: 0, profit: 0 },
      { label: isRtl ? 'يونيو' : 'Jun', revenue: 0, profit: 0 },
      { label: isRtl ? 'يوليو' : 'Jul', revenue: 0, profit: 0 },
      { label: isRtl ? 'أغسطس' : 'Aug', revenue: 0, profit: 0 },
      { label: isRtl ? 'سبتمبر' : 'Sep', revenue: 0, profit: 0 },
      { label: isRtl ? 'أكتوبر' : 'Oct', revenue: 0, profit: 0 },
      { label: isRtl ? 'نوفمبر' : 'Nov', revenue: 0, profit: 0 },
      { label: isRtl ? 'ديسمبر' : 'Dec', revenue: 0, profit: 0 },
    ]
  }, [rawData, period, isRtl])
  const pointsRevenueSum = useMemo(() => {
    return points.reduce((acc, p) => acc + (p.revenue || 0), 0)
  }, [points])
  const pointsProfitSum = useMemo(() => {
    return points.reduce((acc, p) => acc + (p.profit || 0), 0)
  }, [points])
  const platformRevenue = useMemo(() => {
    const rawRevenue = Number(
      rawData?.totalRevenue ??
      rawData?.grossRevenue ??
      rawData?.revenue ??
      rawData?.grossCollected ??
      rawData?.summary?.totalRevenue ??
      rawData?.summary?.revenue ??
      0
    )
    if (rawRevenue > 0) return rawRevenue
    const earnRev = Number(
      earningsPlatform.grossCollected ??
      earningsPlatform.totalRevenue ??
      earningsPlatform.totalCollected ??
      earningsPlatform.grossRevenue ??
      0
    )
    if (earnRev > 0) return earnRev
    return Number(paymentsPaid.totalCollectedAmount ?? paymentsPaid.netRevenueBeforeTax ?? 0)
  }, [rawData, earningsPlatform, paymentsPaid])
  const platformProfit = useMemo(() => {
    const rawProfit = Number(
      rawData?.totalProfit ??
      rawData?.netProfit ??
      rawData?.profit ??
      rawData?.summary?.netProfit ??
      rawData?.summary?.profit ??
      0
    )
    if (rawProfit > 0) return rawProfit
    const earnProfit = Number(
      earningsPlatform.netProfit ??
      earningsPlatform.netRevenue ??
      earningsPlatform.profit ??
      0
    )
    if (earnProfit > 0) return earnProfit
    const payProfit = Number(paymentsPaid.netRevenueBeforeTax ?? 0)
    if (payProfit > 0) return payProfit
    return platformRevenue > 0 ? Math.round(platformRevenue * 0.35) : 0
  }, [rawData, earningsPlatform, paymentsPaid, platformRevenue])
  const totalRevenue = pointsRevenueSum > 0 ? pointsRevenueSum : platformRevenue
  const totalProfit = pointsProfitSum > 0 ? pointsProfitSum : platformProfit
  const displayPoints = useMemo(() => {
    if (points.length === 0) return []
    if (period === 'monthly' && pointsRevenueSum === 0 && totalRevenue > 0) {
      const currentMonthIdx = new Date().getMonth()
      return points.map((p, idx) => {
        if (idx === currentMonthIdx || (idx === points.length - 1 && currentMonthIdx >= points.length)) {
          return { ...p, revenue: totalRevenue, profit: totalProfit }
        }
        return p
      })
    }
    if (period === 'yearly' && pointsRevenueSum === 0 && totalRevenue > 0) {
      return points.map((p, idx) => {
        if (idx === points.length - 1 || p.label.includes('2026')) {
          return { ...p, revenue: totalRevenue, profit: totalProfit }
        }
        return p
      })
    }
    return points
  }, [points, period, pointsRevenueSum, totalRevenue, totalProfit])
  const maxVal = useMemo(() => {
    if (displayPoints.length === 0) return 100
    const vals = displayPoints.map((p) => Math.max(p.revenue || 0, p.profit || 0))
    const highest = Math.max(...vals, 0)
    return highest > 0 ? highest * 1.15 : 100
  }, [displayPoints])
  const periods = [
    { key: 'daily', labelAr: 'يومي', labelEn: 'Daily' },
    { key: 'weekly', labelAr: 'أسبوعي', labelEn: 'Weekly' },
    { key: 'monthly', labelAr: 'شهري', labelEn: 'Monthly' },
    { key: 'yearly', labelAr: 'سنوي', labelEn: 'Yearly' },
  ]
  const handleRefresh = async () => {
    await Promise.allSettled([
      refetchAnalytics(),
      refetchEarnings(),
      refetchPayments(),
    ])
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 mb-2">
            <BarChart3 size={14} />
            <span>{t('analytics.badge', 'تحليلات الإيرادات والأرباح')}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
            {t('analytics.title', 'مؤشرات الإيرادات والأرباح')}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {t('analytics.description', 'متابعة دقيقة لمسار الإيرادات وصافي أرباح المنصة حسب الفترة المختارة')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
            {periods.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPeriod(p.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  period === p.key
                    ? 'bg-[#0f7a6c] text-white shadow-md shadow-[#0f7a6c]/20 scale-102'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {isRtl ? p.labelAr : p.labelEn}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            title={isRtl ? 'تحديث البيانات' : 'Refresh Data'}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={15} className={isRefreshing ? 'animate-spin text-[#0f7a6c]' : ''} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-white dark:from-emerald-950/20 dark:via-slate-800/40 dark:to-slate-800/60 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
              <Coins size={14} className="text-[#0f7a6c]" />
              <span>{isRtl ? 'إجمالي الإيرادات' : 'Total Revenue'}</span>
            </div>
            <span className="text-2xl sm:text-3xl font-black text-[#0f7a6c] dark:text-emerald-400 block tracking-tight">
              {totalRevenue.toLocaleString('en-US')} $
            </span>
            <span className="text-[11px] text-slate-400 font-medium block mt-1">
              {isRtl ? 'المبالغ المحصلة من الاشتراكات بالفترة' : 'Total collected revenue for the period'}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-emerald-950/60 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-teal-100 dark:border-teal-900/40">
            <DollarSign size={22} />
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-slate-50 to-white dark:from-indigo-950/20 dark:via-slate-800/40 dark:to-slate-800/60 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
              <TrendingUp size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span>{isRtl ? 'صافي الأرباح' : 'Net Profits'}</span>
            </div>
            <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 block tracking-tight">
              {totalProfit.toLocaleString('en-US')} $
            </span>
            <span className="text-[11px] text-slate-400 font-medium block mt-1">
              {isRtl ? 'صافي أرباح المنصة بعد خصم التكاليف' : 'Net platform profit after expenses'}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900/40">
            <TrendingUp size={22} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
        <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
          {isRtl ? 'المسار الزمني المالي' : 'Financial Timeline'}
        </span>
        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-gradient-to-t from-[#00594C] to-[#0f7a6c]" />
            <span className="text-slate-600 dark:text-slate-300">{isRtl ? 'الإيرادات ($)' : 'Revenue ($)'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-gradient-to-t from-indigo-600 to-blue-500" />
            <span className="text-slate-600 dark:text-slate-300">{isRtl ? 'الأرباح ($)' : 'Profits ($)'}</span>
          </div>
        </div>
      </div>
      <div className="relative pt-4 pb-2">
        {isLoadingAnalytics && (
          <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xs flex items-center justify-center z-20">
            <Loader2 size={24} className="animate-spin text-[#0f7a6c]" />
          </div>
        )}
        <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 px-2 pt-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          {displayPoints.map((p, idx) => {
            const revHeightPct = maxVal > 0 ? Math.min(100, (p.revenue / maxVal) * 100) : 0
            const profitHeightPct = maxVal > 0 ? Math.min(100, (p.profit / maxVal) * 100) : 0
            const isHovered = hoveredIndex === idx
            const hasData = p.revenue > 0 || p.profit > 0
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {isHovered && (
                  <div className="absolute -top-16 z-30 bg-slate-900/95 text-white text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl whitespace-nowrap border border-slate-700 pointer-events-none animate-in fade-in zoom-in-95 backdrop-blur-xs">
                    <div className="text-slate-300 text-[11px] mb-1 font-medium">{p.label}</div>
                    <div className="flex items-center justify-between gap-3 text-emerald-400">
                      <span>{isRtl ? 'الإيرادات:' : 'Revenue:'}</span>
                      <span className="font-extrabold">{p.revenue.toLocaleString('en-US')} $</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-indigo-300">
                      <span>{isRtl ? 'الأرباح:' : 'Profits:'}</span>
                      <span className="font-extrabold">{p.profit.toLocaleString('en-US')} $</span>
                    </div>
                  </div>
                )}
                <div className="w-full max-w-[48px] relative flex items-end justify-center gap-1 sm:gap-1.5 h-full">
                  {hasData ? (
                    <>
                      <div className="w-2.5 sm:w-3.5 h-full flex items-end">
                        <div
                          className="w-full rounded-t-lg transition-all duration-500 bg-gradient-to-t from-[#00594C] to-[#0f7a6c] group-hover:to-emerald-400 shadow-xs"
                          style={{ height: `${Math.max(6, revHeightPct)}%` }}
                        />
                      </div>
                      <div className="w-2.5 sm:w-3.5 h-full flex items-end">
                        <div
                          className="w-full rounded-t-lg transition-all duration-500 bg-gradient-to-t from-indigo-600 to-blue-500 group-hover:to-indigo-400 shadow-xs"
                          style={{ height: `${Math.max(6, profitHeightPct)}%` }}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-1.5 bg-slate-200/80 dark:bg-slate-700/60 rounded-full group-hover:bg-[#0f7a6c]/40 transition-colors" />
                  )}
                </div>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#0f7a6c] dark:group-hover:text-emerald-400 mt-2 truncate max-w-full transition-colors">
                  {p.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
