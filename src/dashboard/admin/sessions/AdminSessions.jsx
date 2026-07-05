import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Calendar } from 'lucide-react'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi'
import Spinner from '@/shared/components/Spinner'
import StatCard from './components/StatCard'
import SessionRow from './components/SessionRow'

const STATUS_TABS = [
  { key: 'all', label: 'الكل' },
  { key: 'live', label: 'مباشرة الآن' },
  { key: 'upcoming', label: 'قادمة' },
  { key: 'completed', label: 'مكتملة' },
  { key: 'cancelled', label: 'ملغاة' },
]

const MOCK_TEACHERS = [
  { id: 1, name: 'أحمد علي محمد' },
  { id: 2, name: 'عائشة محمود' },
  { id: 3, name: 'فاطمة الزهراء' },
  { id: 4, name: 'محمد أحمد علي' },
]

export default function AdminSessions() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const [sessions, setSessions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRow, setExpandedRow] = useState(null)
  const [expandedPanel, setExpandedPanel] = useState(null)

  const itemsPerPage = 5

  useEffect(() => {
    async function loadSessions() {
      setIsLoading(true)
      try {
        const res = await adminSessionsApi.fetchSessions()
        if (res.success) setSessions(res.data)
      } catch (err) {
        console.error('Failed to fetch sessions:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadSessions()
  }, [])

  const stats = useMemo(() => ({
    live: sessions.filter((s) => s.status === 'live').length,
    upcoming: sessions.filter((s) => s.status === 'upcoming').length,
    completed: sessions.filter((s) => s.status === 'completed').length,
    cancelled: sessions.filter((s) => s.status === 'cancelled').length,
  }), [sessions])

  const filtered = useMemo(() => {
    let result = sessions
    if (activeTab !== 'all') result = result.filter((s) => s.status === activeTab)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (s) =>
          s.groupName.toLowerCase().includes(q) ||
          s.teacher.toLowerCase().includes(q)
      )
    }
    return result
  }, [sessions, activeTab, searchQuery])

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paged = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filtered.slice(start, start + itemsPerPage)
  }, [filtered, currentPage])

  const handleTogglePanel = (sessionId, panel) => {
    if (expandedRow === sessionId && expandedPanel === panel) {
      setExpandedRow(null)
      setExpandedPanel(null)
    } else {
      setExpandedRow(sessionId)
      setExpandedPanel(panel)
    }
  }

  const handleReschedule = async (sessionId, newDate, newTime) => {
    const res = await adminSessionsApi.rescheduleSession(sessionId, newDate, newTime)
    if (res.success) {
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, date: newDate, time: newTime } : s))
      )
      setExpandedRow(null)
      setExpandedPanel(null)
    }
  }

  const handleChangeTeacher = async (sessionId, teacherId, teacherName) => {
    const res = await adminSessionsApi.changeTeacher(sessionId, teacherId, teacherName)
    if (res.success) {
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, teacher: teacherName, teacherId } : s))
      )
      setExpandedRow(null)
      setExpandedPanel(null)
    }
  }

  const handleCancelSession = async (sessionId) => {
    const res = await adminSessionsApi.cancelSession(sessionId)
    if (res.success) {
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, status: 'cancelled' } : s))
      )
      setExpandedRow(null)
      setExpandedPanel(null)
    }
  }

  const getTabLabel = (key, defaultLabel) => {
    const map = {
      'all': t('adminDashboard.sessions.tabs.all', 'الكل'),
      'live': t('adminDashboard.sessions.tabs.live', 'مباشرة الآن'),
      'upcoming': t('adminDashboard.sessions.tabs.upcoming', 'قادمة'),
      'completed': t('adminDashboard.sessions.tabs.completed', 'مكتملة'),
      'cancelled': t('adminDashboard.sessions.tabs.cancelled', 'ملغاة'),
    }
    return map[key] || defaultLabel
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-6 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.sessions.title', 'إدارة الحصص')}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.sessions.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label={t('adminDashboard.sessions.liveNow', 'مباشر الآن')} value={stats.live} color="red" />
        <StatCard label={t('adminDashboard.sessions.upcoming', 'حصص قادمة')} value={stats.upcoming} color="blue" />
        <StatCard label={t('adminDashboard.sessions.completed', 'حصص مكتملة')} value={stats.completed} color="green" />
        <StatCard label={t('adminDashboard.sessions.cancelled', 'ملغاة')} value={stats.cancelled} color="amber" />
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <div className="relative max-w-sm mx-auto">
            <Search size={16} className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} />
            <input
              type="text"
              placeholder={t('adminDashboard.sessions.searchPlaceholder', 'بحث...')}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
              className={`w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-2xl py-2.5 ${isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'} text-sm text-slate-700 dark:text-slate-200 outline-none border border-transparent focus:border-brand-400 transition-colors placeholder-slate-400`}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800 overflow-x-auto">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setCurrentPage(1) }}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === tab.key
                  ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                  : 'bg-[#f3f7f6] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {getTabLabel(tab.key, tab.label)}
            </button>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-[2fr_2fr_1.2fr_1.2fr_0.8fr_1.2fr_1.5fr] gap-2 px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs font-bold text-slate-500 dark:text-slate-400 text-end">
          <span>{t('adminDashboard.sessions.headers.actions', 'الإجراءات')}</span>
          <span>{t('adminDashboard.sessions.headers.status', 'الحالة')}</span>
          <span>{t('adminDashboard.sessions.headers.count', 'العدد')}</span>
          <span>{t('adminDashboard.sessions.headers.time', 'الوقت')}</span>
          <span>{t('adminDashboard.sessions.headers.date', 'التاريخ')}</span>
          <span>{t('adminDashboard.sessions.headers.teacher', 'المعلم')}</span>
          <span>{t('adminDashboard.sessions.headers.group', 'المجموعة')}</span>
        </div>

        <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
          {paged.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-400">
              <Calendar size={40} strokeWidth={1.5} />
              <p className="text-sm font-medium">{t('adminDashboard.sessions.noSessionsFound', 'لا توجد حصص مطابقة')}</p>
            </div>
          ) : (
            paged.map((session) => (
              <SessionRow
                key={session.id}
                session={session}
                isExpanded={expandedRow === session.id}
                expandedPanel={expandedPanel}
                handleTogglePanel={handleTogglePanel}
                handleReschedule={handleReschedule}
                handleChangeTeacher={handleChangeTeacher}
                handleCancelSession={handleCancelSession}
                mockTeachers={MOCK_TEACHERS}
                t={t}
              />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {t('adminDashboard.sessions.paginationText', {
                defaultValue: 'عرض {{count}} من {{total}}',
                count: Math.min(currentPage * itemsPerPage, filtered.length),
                total: filtered.length
              })}
            </span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-xl text-sm font-bold transition-all cursor-pointer ${currentPage === page
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}