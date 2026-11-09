import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Activity, ChevronLeft, ChevronRight } from 'lucide-react'
import { logsApi } from '@/shared/services/api/logsApi'
import { getApiErrorText } from '@/shared/utils/errorHandler'
import TabErrorState from '@/shared/components/TabErrorState'
import LogsStats from './components/LogsStats'
import LogsTimeline from './components/LogsTimeline'

export default function AdminLogs() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [page, setPage] = useState(1)
  const [activeTab, setActiveTab] = useState('all')
  const limit = 100
  const {
    data: logsData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['adminLogs', page, limit, activeTab],
    queryFn: () => {
      const params = { page, limit }
      if (activeTab === 'today') return logsApi.fetchLogsToday(params)
      if (activeTab === 'last-7-days') return logsApi.fetchLogsLast7Days(params)
      if (activeTab === 'last-30-days') return logsApi.fetchLogsLast30Days(params)
      return logsApi.fetchLogs(params)
    },
    keepPreviousData: true,
  })
  const logs = logsData?.data || []
  const stats = logsData?.counts || { today: 0, lastWeek: 0, lastMonth: 0, total: 0 }
  const totalItems = logsData?.pagination?.totalItems || logsData?.pagination?.total || logs.length || 0
  const totalPages = Math.max(1, logsData?.pagination?.numberOfPages || Math.ceil(totalItems / limit) || 1)
  const isPaginationDimmed = totalPages <= 1
  const errorMessage = isError ? getApiErrorText(error, t('adminDashboard.logs.errorLoading', 'حدث خطأ أثناء تحميل الأحداث')) : null
  const startIdx = totalItems > 0 ? (page - 1) * limit + 1 : 0
  const endIdx = totalItems > 0 ? (page - 1) * limit + logs.length : 0
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
              <Activity size={24} />
            </div>
            {t('adminDashboard.logs.title', 'سجل الأحداث')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base font-semibold">
            {t('adminDashboard.logs.desc', 'متابعة سجل نشاط المستخدمين وأهم الأحداث في المنصة.')}
          </p>
        </div>
      </div>
      {errorMessage && (
        <TabErrorState
          message={errorMessage}
          compact
          onRetry={() => refetch()}
          isRtl={isRtl}
        />
      )}
      <LogsStats 
        stats={stats} 
        isRtl={isRtl} 
        isLoading={isLoading} 
        t={t} 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab)
          setPage(1)
        }} 
      />
      <LogsTimeline logs={logs} isRtl={isRtl} isLoading={isLoading} t={t} />
      <div
        className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-soft mt-6 transition-opacity duration-300 ${isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''}`}
      >
        <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
          {isRtl ? (
            <>
              {t('adminDashboard.logs.pagination.showing', 'عرض')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
              {t('adminDashboard.logs.pagination.to', 'إلى')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
              {t('adminDashboard.logs.pagination.of', 'من أصل')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{totalItems}</span>{' '}
              {t('adminDashboard.logs.pagination.events', 'أحداث')}
            </>
          ) : (
            <>
              {t('adminDashboard.logs.pagination.showing', 'Showing')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
              {t('adminDashboard.logs.pagination.to', 'to')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
              {t('adminDashboard.logs.pagination.of', 'of')}{' '}
              <span className="font-semibold text-slate-700 dark:text-slate-200">{totalItems}</span>{' '}
              {t('adminDashboard.logs.pagination.events', 'events')}
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1 || isPaginationDimmed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isRtl ? <ChevronRight size={16} aria-hidden="true" /> : <ChevronLeft size={16} aria-hidden="true" />}
          </button>
          <span className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 min-w-[80px] text-center">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages || isPaginationDimmed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isRtl ? <ChevronLeft size={16} aria-hidden="true" /> : <ChevronRight size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </div>
  )
}
