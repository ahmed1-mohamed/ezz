import { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi'
import { teachersApi } from '@/shared/services/api/teachersApi'
import Spinner from '@/shared/components/Spinner'
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import StatCard from './components/StatCard'
import SessionRow from './components/SessionRow'

const STATUS_TABS = [
  { key: 'all', label: 'الكل' },
  { key: 'scheduled', label: 'مجدولة' },
  { key: 'live', label: 'مباشرة الآن' },
  { key: 'completed', label: 'مكتملة' },
  { key: 'cancelled', label: 'ملغاة' },
]

export default function AdminSessions() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true

  const [apiStats, setApiStats] = useState(null)
  const [sessions, setSessions] = useState([])
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [expandedRow, setExpandedRow] = useState(null)
  const [expandedPanel, setExpandedPanel] = useState(null)

  const itemsPerPage = 10

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
      setCurrentPage(1)
    }, 350)
    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    let active = true
    const loadTeachers = async () => {
      try {
        const res = await teachersApi.fetchTeachers({ limit: 100 })
        if (!active) return
        const list = res?.data || (Array.isArray(res) ? res : [])
        const formatted = (Array.isArray(list) ? list : []).map((tch) => {
          let nameStr = ''
          if (typeof tch.displayName === 'string' && tch.displayName.trim()) {
            nameStr = tch.displayName.trim()
          } else if (typeof tch.name === 'string' && tch.name.trim()) {
            nameStr = tch.name.trim()
          } else if (typeof tch.name === 'object' && tch.name !== null) {
            nameStr = (isRtl ? tch.name.ar || tch.name.en : tch.name.en || tch.name.ar) || ''
          }
          return {
            id: tch.id || tch._id || tch.teacher_id,
            name: nameStr || (isRtl ? 'معلم' : 'Teacher'),
          }
        })
        setTeachers(formatted)
      } catch (err) {
        console.warn('Failed to fetch teachers for sessions dropdown:', err)
      }
    }
    loadTeachers()
    return () => { active = false }
  }, [isRtl])

  const loadSessions = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await adminSessionsApi.fetchSessions({
        page: currentPage,
        limit: itemsPerPage,
        status: activeTab === 'all' ? undefined : activeTab,
        search: debouncedSearch,
      })
      if (res && res.success) {
        setSessions(res.data || [])
        if (res.statistics) {
          setApiStats(res.statistics)
        }
        if (res.pagination) {
          setTotalPages(res.pagination.numberOfPages || Math.max(1, Math.ceil((res.pagination.totalCount || res.data.length) / itemsPerPage)))
          setTotalCount(res.pagination.totalCount ?? res.data.length)
        } else {
          setTotalCount(res.data.length)
          setTotalPages(Math.max(1, Math.ceil(res.data.length / itemsPerPage)))
        }
      } else {
        setSessions([])
        setTotalCount(0)
        setTotalPages(1)
      }
    } catch (err) {
      console.error('Failed to fetch sessions:', err)
      setSessions([])
      setTotalCount(0)
      setTotalPages(1)
    } finally {
      setIsLoading(false)
    }
  }, [currentPage, itemsPerPage, activeTab, debouncedSearch])

  useEffect(() => {
    let isMounted = true
    Promise.resolve().then(() => {
      if (isMounted) loadSessions()
    })
    return () => {
      isMounted = false
    }
  }, [loadSessions])

  const stats = useMemo(() => {
    const list = Array.isArray(sessions) ? sessions : []
    const live = Number(apiStats?.in_progress ?? list.filter((s) => s.status === 'live').length) || 0
    const scheduled = Number(apiStats?.scheduled ?? list.filter((s) => s.status === 'scheduled').length) || 0
    const completed = Number(apiStats?.completed ?? list.filter((s) => s.status === 'completed').length) || 0
    const cancelled = Number(apiStats?.cancelled ?? list.filter((s) => s.status === 'cancelled').length) || 0
    const total = Number(apiStats?.total ?? totalCount ?? (live + scheduled + completed + cancelled)) || 0
    return {
      total,
      scheduled,
      live,
      completed,
      cancelled,
    }
  }, [apiStats, sessions, totalCount])

  const handleTogglePanel = (sessionId, panel) => {
    if (expandedRow === sessionId && expandedPanel === panel) {
      setExpandedRow(null)
      setExpandedPanel(null)
    } else {
      setExpandedRow(sessionId)
      setExpandedPanel(panel)
    }
  }

  const handleReschedule = async (sessionId, payloadOrDate, maybeStartTime, maybeEndTime) => {
    const payload =
      typeof payloadOrDate === 'object' && payloadOrDate !== null
        ? payloadOrDate
        : { date: payloadOrDate, startTime: maybeStartTime, endTime: maybeEndTime }

    const res = await adminSessionsApi.rescheduleSession(sessionId, payload)
    if (res && res.success) {
      showSuccessToast(t('adminDashboard.sessions.rescheduleSuccess', 'تمت إعادة جدولة الحصة بنجاح'), isRtl)
      setSessions((prev) =>
        prev.map((s) => {
          if (s.id !== sessionId) return s
          const timeDisplay = payload.endTime ? `${payload.startTime} - ${payload.endTime}` : payload.startTime
          return {
            ...s,
            date: payload.date,
            startTime: payload.startTime,
            endTime: payload.endTime,
            time: timeDisplay,
          }
        })
      )
      setExpandedRow(null)
      setExpandedPanel(null)
      return true
    } else {
      showErrorToast(
        res?.message || t('adminDashboard.sessions.rescheduleError', 'فشلت عملية إعادة الجدولة'),
        isRtl
      )
      return false
    }
  }

  const handleChangeTeacher = async (sessionId, teacherId, teacherName, reason) => {
    const res = await adminSessionsApi.changeTeacher(sessionId, teacherId, reason)
    if (res.success) {
      showSuccessToast(
        res?.message || (isRtl ? 'تم تغيير المعلم بنجاح' : 'Teacher changed successfully'),
        isRtl
      )
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, teacher: teacherName, teacherId } : s))
      )
      setExpandedRow(null)
      setExpandedPanel(null)
    } else {
      showErrorToast(
        res?.message || (isRtl ? 'فشلت عملية تغيير المعلم' : 'Failed to change teacher'),
        isRtl
      )
    }
  }

  const handleCancelSession = async (sessionId) => {
    const res = await adminSessionsApi.cancelSession(sessionId)
    if (res.success) {
      showSuccessToast(
        res?.message || (isRtl ? 'تم إلغاء الحصة بنجاح' : 'Session cancelled successfully'),
        isRtl
      )
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, status: 'cancelled' } : s))
      )
      setExpandedRow(null)
      setExpandedPanel(null)
    } else {
      showErrorToast(
        res?.message || (isRtl ? 'فشلت عملية إلغاء الحصة' : 'Failed to cancel session'),
        isRtl
      )
    }
  }

  const getTabLabel = (key, defaultLabel) => {
    const map = {
      'all': t('adminDashboard.sessions.tabs.all', 'الكل'),
      'scheduled': t('adminDashboard.sessions.tabs.scheduled', 'مجدولة'),
      'live': t('adminDashboard.sessions.tabs.live', 'مباشرة الآن'),
      'completed': t('adminDashboard.sessions.tabs.completed', 'مكتملة'),
      'cancelled': t('adminDashboard.sessions.tabs.cancelled', 'ملغاة'),
    }
    return map[key] || defaultLabel
  }

  const startIdx = totalCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0
  const endIdx = totalCount > 0 ? Math.min(currentPage * itemsPerPage, totalCount) : 0
  const isPaginationDimmed = totalPages <= 1

  return (
    <div className="space-y-6 p-1 md:p-6 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl">
          <Spinner />
        </div>
      )}
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.sessions.title', 'إدارة الحصص الدراسية')}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.sessions.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          label={t('adminDashboard.sessions.totalSessions', 'إجمالي كل الحصص')}
          value={stats.total}
          color="purple"
        />
        <StatCard
          label={t('adminDashboard.sessions.scheduled', 'حصص مجدولة')}
          value={stats.scheduled}
          color="blue"
        />
        <StatCard
          label={t('adminDashboard.sessions.liveNow', 'مباشر الآن')}
          value={stats.live}
          color="red"
        />
        <StatCard
          label={t('adminDashboard.sessions.completed', 'حصص مكتملة')}
          value={stats.completed}
          color="green"
        />
        <StatCard
          label={t('adminDashboard.sessions.cancelled', 'ملغاة')}
          value={stats.cancelled}
          color="amber"
        />
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <div className="relative max-w-md mx-auto">
            <Search size={16} className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} />
            <input
              type="text"
              placeholder={t('adminDashboard.sessions.searchPlaceholder', 'بحث باسم المجموعة أو المعلم أو عنوان الحصة...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-2xl py-2.5 ${isRtl ? 'pr-9 pl-9' : 'pl-9 pr-9'} text-sm text-slate-700 dark:text-slate-200 outline-none border border-transparent focus:border-brand-400 transition-colors placeholder-slate-400`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer`}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800 overflow-x-auto">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setCurrentPage(1) }}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                  : 'bg-[#f3f7f6] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {getTabLabel(tab.key, tab.label)}
            </button>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-[2.5fr_1.8fr_1.3fr_1.4fr_0.9fr_1.1fr_2.2fr] gap-3 px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs font-bold text-slate-500 dark:text-slate-400">
          <span className="text-start">{t('adminDashboard.sessions.headers.group', 'المجموعة والحصة')}</span>
          <span className="text-start">{t('adminDashboard.sessions.headers.teacher', 'المعلم')}</span>
          <span className="text-start">{t('adminDashboard.sessions.headers.date', 'التاريخ واليوم')}</span>
          <span className="text-start">{t('adminDashboard.sessions.headers.time', 'الوقت والمدة')}</span>
          <span className="text-center">{t('adminDashboard.sessions.headers.count', 'عدد الطلاب')}</span>
          <span className="text-center">{t('adminDashboard.sessions.headers.status', 'الحالة')}</span>
          <span className="text-end">{t('adminDashboard.sessions.headers.actions', 'الإجراءات')}</span>
        </div>

        <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
          {sessions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-400">
              <Calendar size={40} strokeWidth={1.5} />
              <p className="text-sm font-medium">{t('adminDashboard.sessions.noSessionsFound', 'لا توجد حصص مطابقة')}</p>
            </div>
          ) : (
            sessions.map((session) => (
              <SessionRow
                key={session.id}
                session={session}
                isExpanded={expandedRow === session.id}
                expandedPanel={expandedPanel}
                handleTogglePanel={handleTogglePanel}
                handleReschedule={handleReschedule}
                handleChangeTeacher={handleChangeTeacher}
                handleCancelSession={handleCancelSession}
                teachers={teachers}
                t={t}
              />
            ))
          )}
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 rounded-b-3xl transition-opacity duration-300 ${
            isPaginationDimmed ? 'opacity-40 pointer-events-none select-none' : ''
          }`}
        >
          <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            {isRtl ? (
              <>
                {t('adminDashboard.students.pagination.showing', 'عرض')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.students.pagination.to', 'إلى')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.students.pagination.of', 'من أصل')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
                {t('adminDashboard.sessions.title', 'حصص')}
              </>
            ) : (
              <>
                {t('adminDashboard.students.pagination.showing', 'Showing')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{startIdx}</span>{' '}
                {t('adminDashboard.students.pagination.to', 'to')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{endIdx}</span>{' '}
                {t('adminDashboard.students.pagination.of', 'of')}{' '}
                <span className="font-semibold text-slate-700 dark:text-slate-200">{totalCount}</span>{' '}
                {t('adminDashboard.sessions.title', 'sessions')}
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1 || isPaginationDimmed}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isRtl ? <ChevronRight size={16} aria-hidden="true" /> : <ChevronLeft size={16} aria-hidden="true" />}
            </button>

            <span className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 min-w-[80px] text-center">
              {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || isPaginationDimmed}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-100 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isRtl ? <ChevronLeft size={16} aria-hidden="true" /> : <ChevronRight size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}