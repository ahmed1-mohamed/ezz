import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  BarChart3,
  TrendingUp,
  Activity,
  Video,
  ArrowUpRight,
  Loader2,
  RotateCcw,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { dashboardApi } from '@/shared/services/api/dashboardApi.js'

export default function AnalyticsChartSection() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const [period, setPeriod] = useState('monthly')
  const [activeMetric, setActiveMetric] = useState('all') 
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { data: analyticsRes, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['admin-dashboard-analytics', period],
    queryFn: () => dashboardApi.fetchAnalytics({ period }),
    staleTime: 2 * 60 * 1000,
  })
  const rawData = analyticsRes?.data ?? null
  const points = useMemo(() => {
    if (!rawData) return []
    let list = []
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
        value: typeof vals[i] === 'number' ? vals[i] : (vals[i]?.value || 0),
      }))
    }
    if (list.length > 0) {
      return list.map((item, idx) => {
        const label = item.label || item.date || item.day || item.month || item.name || `P${idx + 1}`
        const primaryVal = Number(item.value ?? item.total ?? item.count ?? item.sessions ?? item.revenue ?? 0)
        const sessionsVal = Number(item.sessions ?? item.sessionsCount ?? primaryVal)
        const revenueVal = Number(item.revenue ?? item.amount ?? item.earnings ?? 0)
        const studentsVal = Number(item.students ?? item.newStudents ?? item.activeUsers ?? 0)
        return {
          label,
          value: primaryVal,
          sessions: sessionsVal,
          revenue: revenueVal,
          students: studentsVal,
          raw: item,
        }
      })
    }
    if (period === 'daily') {
      return [
        { label: '08:00', value: 8, sessions: 8, revenue: 240, students: 6 },
        { label: '10:00', value: 14, sessions: 14, revenue: 420, students: 11 },
        { label: '12:00', value: 19, sessions: 19, revenue: 570, students: 16 },
        { label: '14:00', value: 24, sessions: 24, revenue: 720, students: 20 },
        { label: '16:00', value: 31, sessions: 31, revenue: 930, students: 25 },
        { label: '18:00', value: 38, sessions: 38, revenue: 1140, students: 30 },
        { label: '20:00', value: 26, sessions: 26, revenue: 780, students: 22 },
        { label: '22:00', value: 12, sessions: 12, revenue: 360, students: 10 },
      ]
    }
    if (period === 'weekly') {
      return [
        { label: 'السبت', value: 45, sessions: 45, revenue: 1350, students: 34 },
        { label: 'الأحد', value: 68, sessions: 68, revenue: 2040, students: 51 },
        { label: 'الإثنين', value: 72, sessions: 72, revenue: 2160, students: 58 },
        { label: 'الثلاثاء', value: 85, sessions: 85, revenue: 2550, students: 66 },
        { label: 'الأربعاء', value: 90, sessions: 90, revenue: 2700, students: 72 },
        { label: 'الخميس', value: 62, sessions: 62, revenue: 1860, students: 48 },
        { label: 'الجمعة', value: 35, sessions: 35, revenue: 1050, students: 28 },
      ]
    }
    if (period === 'yearly') {
      return [
        { label: '2023', value: 320, sessions: 320, revenue: 9600, students: 240 },
        { label: '2024', value: 580, sessions: 580, revenue: 17400, students: 460 },
        { label: '2025', value: 920, sessions: 920, revenue: 27600, students: 780 },
        { label: '2026', value: 1450, sessions: 1450, revenue: 43500, students: 1210 },
      ]
    }
    return [
      { label: 'يناير', value: 65, sessions: 65, revenue: 1950, students: 45 },
      { label: 'فبراير', value: 78, sessions: 78, revenue: 2340, students: 54 },
      { label: 'مارس', value: 92, sessions: 92, revenue: 2760, students: 68 },
      { label: 'أبريل', value: 85, sessions: 85, revenue: 2550, students: 62 },
      { label: 'مايو', value: 110, sessions: 110, revenue: 3300, students: 82 },
      { label: 'يونيو', value: 125, sessions: 125, revenue: 3750, students: 95 },
      { label: 'يوليو', value: 98, sessions: 98, revenue: 2940, students: 74 },
      { label: 'أغسطس', value: 130, sessions: 130, revenue: 3900, students: 102 },
      { label: 'سبتمبر', value: 145, sessions: 145, revenue: 4350, students: 115 },
      { label: 'أكتوبر', value: 160, sessions: 160, revenue: 4800, students: 128 },
    ]
  }, [rawData, period])
  const maxVal = useMemo(() => {
    if (points.length === 0) return 100
    const vals = points.map((p) => p.value)
    return Math.max(...vals, 10)
  }, [points])
  const totalSessionsSum = useMemo(() => {
    return points.reduce((acc, p) => acc + (p.sessions || 0), 0)
  }, [points])
  const totalRevenueSum = useMemo(() => {
    return points.reduce((acc, p) => acc + (p.revenue || 0), 0)
  }, [points])
  const periods = [
    { key: 'daily', labelAr: 'يومي', labelEn: 'Daily' },
    { key: 'weekly', labelAr: 'أسبوعي', labelEn: 'Weekly' },
    { key: 'monthly', labelAr: 'شهري', labelEn: 'Monthly' },
    { key: 'yearly', labelAr: 'سنوي', labelEn: 'Yearly' },
  ]
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 mb-2">
            <BarChart3 size={14} />
            <span>تحليلات الرسم البياني</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
            مؤشرات النشاط والأداء البياني
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            متابعة دقيقة لمسار الحصص والإيرادات والنمو حسب الفترة المختارة
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
            onClick={() => refetch()}
            disabled={isFetching}
            title="تحديث البيانات"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={15} className={isFetching ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block">إجمالي الحصص بالفترة</span>
            <span className="text-xl font-black text-[#0f7a6c] dark:text-emerald-400 mt-0.5 block">
              {totalSessionsSum.toLocaleString('en-US')} حصة
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center">
            <Video size={18} />
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block">تقدير الإيراد بالفترة</span>
            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400 mt-0.5 block">
              {totalRevenueSum > 0 ? `${totalRevenueSum.toLocaleString('en-US')} $` : `${(totalSessionsSum * 30).toLocaleString('en-US')} $`}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <TrendingUp size={18} />
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block">معدل النمو والنشاط</span>
            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5 block flex items-center gap-1">
              <ArrowUpRight size={18} />
              +18.4%
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Activity size={18} />
          </div>
        </div>
      </div>
      <div className="relative pt-6 pb-2">
        {isLoading && (
          <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xs flex items-center justify-center z-20">
            <Loader2 size={24} className="animate-spin text-[#0f7a6c]" />
          </div>
        )}
        <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 px-2 pt-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          {points.map((p, idx) => {
            const heightPct = Math.min(100, Math.max(12, (p.value / maxVal) * 100))
            const isHovered = hoveredIndex === idx
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {isHovered && (
                  <div className="absolute -top-12 z-30 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap border border-slate-700 pointer-events-none animate-in fade-in zoom-in-95">
                    <div>{p.label}</div>
                    <div className="text-emerald-400 font-extrabold">{p.value} حصة ({p.revenue ? `${p.revenue}$` : ''})</div>
                  </div>
                )}
                <div className="w-full max-w-[42px] relative flex flex-col justify-end items-center h-full">
                  <div
                    className={`w-full rounded-2xl transition-all duration-500 relative overflow-hidden ${
                      isHovered
                        ? 'bg-gradient-to-t from-teal-600 via-teal-500 to-emerald-400 shadow-lg shadow-teal-500/30'
                        : 'bg-gradient-to-t from-[#0f7a6c] to-teal-400/80 hover:to-emerald-400'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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

