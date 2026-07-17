import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  UserCheck,
  UserX,
  Clock,
  TrendingUp,
  CalendarDays,
  CalendarRange,
  CalendarClock,
  LayoutList,
} from 'lucide-react'
import { showDeleteConfirm, showSuccessToast } from '@/shared/utils/sweetAlert'
import { teachersApi } from '@/shared/services/api/teachersApi'
import ConflictBanner from './components/ConflictBanner'
import StatCard from './components/StatCard'
import ScheduleCalendarGrid from './components/ScheduleCalendarGrid'
import { SESSION_STATUS_MAP } from './components/SessionCard'

function getWeekDates(refDate) {
  const d = new Date(refDate)
  const day = d.getDay()
  const start = new Date(d)
  start.setDate(d.getDate() - day)
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    return date
  })
}

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function buildMockSessions(weekDates) {
  const base = [
    { id: 1, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'scheduled', attendance: { present: 3, absent: 1, postponed: 0 } },
    { id: 2, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'postponed', attendance: { present: 0, absent: 0, postponed: 1 } },
    { id: 3, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'scheduled', attendance: { present: 2, absent: 0, postponed: 0 } },
    { id: 4, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 1, status: 'scheduled', attendance: { present: 4, absent: 0, postponed: 0 } },
    { id: 5, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 1, status: 'conflict', attendance: { present: 0, absent: 0, postponed: 0 } },
    { id: 6, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 1, status: 'scheduled', attendance: { present: 5, absent: 1, postponed: 0 } },
    { id: 7, groupName: 'مجموعة العربية ب', teacher: 'عائشة محمود', time: '3 ص - 5 ص', dayIndex: 2, status: 'scheduled', attendance: { present: 3, absent: 0, postponed: 0 } },
    { id: 8, groupName: 'مجموعة العربية ب', teacher: 'عائشة محمود', time: '3 ص - 5 ص', dayIndex: 3, status: 'scheduled', attendance: { present: 2, absent: 1, postponed: 0 } },
    { id: 9, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 4, status: 'scheduled', attendance: { present: 5, absent: 0, postponed: 0 } },
    { id: 10, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 5, status: 'postponed', attendance: { present: 0, absent: 0, postponed: 1 } },
  ]
  return base.map((s) => ({
    ...s,
    date: weekDates[s.dayIndex],
    dateStr: formatDate(weekDates[s.dayIndex]),
  }))
}

// Period filter options
const PERIOD_FILTERS = [
  { key: 'today', labelAr: 'اليوم', labelEn: 'Today', icon: CalendarDays, color: 'blue' },
  { key: 'week', labelAr: 'هذا الأسبوع', labelEn: 'This Week', icon: CalendarRange, color: 'purple' },
  { key: 'month', labelAr: 'هذا الشهر', labelEn: 'This Month', icon: CalendarClock, color: 'amber' },
  { key: 'all', labelAr: 'الكل', labelEn: 'All', icon: LayoutList, color: 'slate' },
]

export default function AdminSchedule() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const today = new Date()
  const [refDate, setRefDate] = useState(today)
  const [showConflictBanner, setShowConflictBanner] = useState(true)
  const [teachers, setTeachers] = useState([])
  const [selectedTeacher, setSelectedTeacher] = useState('all')
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const weekDates = useMemo(() => getWeekDates(refDate), [refDate])
  const sessions = useMemo(() => buildMockSessions(weekDates), [weekDates])

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const res = await teachersApi.fetchLocalizedTeachersList()
        if (res.success && Array.isArray(res.data)) {
          setTeachers(res.data)
        }
      } catch (err) {
        console.error('Failed to load teachers for schedule filtering:', err)
      }
    }
    loadTeachers()
  }, [])

  const getTeacherName = (tItem) => {
    if (!tItem) return ''
    if (typeof tItem.name === 'object' && tItem.name !== null) {
      return isRtl ? tItem.name.ar || tItem.name.en : tItem.name.en || tItem.name.ar
    }
    return tItem.name || ''
  }

  // Period-based filtering helper
  const isInPeriod = (session) => {
    if (selectedPeriod === 'all') return true
    if (!session.date) return false
    const d = new Date(session.date)
    if (selectedPeriod === 'today') {
      return (
        d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth() &&
        d.getDate() === today.getDate()
      )
    }
    if (selectedPeriod === 'week') {
      const weekStart = new Date(today)
      weekStart.setDate(today.getDate() - today.getDay())
      weekStart.setHours(0, 0, 0, 0)
      const weekEnd = new Date(weekStart)
      weekEnd.setDate(weekStart.getDate() + 6)
      weekEnd.setHours(23, 59, 59, 999)
      return d >= weekStart && d <= weekEnd
    }
    if (selectedPeriod === 'month') {
      return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth()
    }
    return true
  }

  const handlePeriodSelect = (periodKey) => {
    setSelectedPeriod(periodKey)
    // Navigate calendar to today when picking today/week/month
    if (periodKey === 'today' || periodKey === 'week' || periodKey === 'month') {
      setRefDate(today)
    }
  }

  const filteredSessions = useMemo(() => {
    let result = sessions
    if (selectedTeacher !== 'all') {
      result = result.filter((s) => s.teacher === selectedTeacher)
    }
    result = result.filter(isInPeriod)
    return result
  }, [sessions, selectedTeacher, selectedPeriod])

  const stats = useMemo(() => {
    const allAttendance = filteredSessions.flatMap((s) => [
      ...Array(s.attendance.present).fill('present'),
      ...Array(s.attendance.absent).fill('absent'),
      ...Array(s.attendance.postponed).fill('postponed'),
    ])
    const present = allAttendance.filter((a) => a === 'present').length
    const absent = allAttendance.filter((a) => a === 'absent').length
    const postponed = allAttendance.filter((a) => a === 'postponed').length
    const total = present + absent
    const rate = total > 0 ? Math.round((present / total) * 100) : 0
    return { present, absent, postponed, rate }
  }, [filteredSessions])

  const conflicts = useMemo(
    () => filteredSessions.filter((s) => s.status === 'conflict'),
    [filteredSessions]
  )

  const goToPrevWeek = () => {
    const d = new Date(refDate)
    d.setDate(d.getDate() - 7)
    setRefDate(d)
  }

  const goToNextWeek = () => {
    const d = new Date(refDate)
    d.setDate(d.getDate() + 7)
    setRefDate(d)
  }

  const goToToday = () => setRefDate(today)

  const handleEdit = (session) => {
    showSuccessToast(
      t('adminDashboard.schedule.editSessionToast', 'تعديل الجلسة: {{name}}', { name: session.groupName }),
      isRtl
    )
  }

  const handleDelete = async (session) => {
    const isConfirmed = await showDeleteConfirm(isRtl, session.groupName)
    if (!isConfirmed) return
    showSuccessToast(
      t('adminDashboard.schedule.deleteSessionToast', 'تم حذف الجلسة رقم: {{id}}', { id: session.id }),
      isRtl
    )
  }

  return (
    <div className="space-y-5 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.schedule.title', 'الجدول الدراسي')}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.schedule.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      {/* Period filter cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PERIOD_FILTERS.map((period) => (
          <StatCard
            key={period.key}
            label={isRtl ? period.labelAr : period.labelEn}
            value={isRtl ? period.labelAr : period.labelEn}
            color={period.color}
            icon={period.icon}
            isActive={selectedPeriod === period.key}
            onClick={() => handlePeriodSelect(period.key)}
          />
        ))}
      </div>

      {showConflictBanner && conflicts.length > 0 && (
        <ConflictBanner conflicts={conflicts} onDismiss={() => setShowConflictBanner(false)} t={t} />
      )}

      {/* Attendance stats for filtered sessions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label={t('adminDashboard.schedule.attendanceRate', 'معدل الحضور')} value={`${stats.rate}%`} color="slate" icon={TrendingUp} />
        <StatCard label={t('adminDashboard.schedule.present', 'حضر')} value={stats.present} color="green" icon={UserCheck} />
        <StatCard label={t('adminDashboard.schedule.absent', 'غياب')} value={stats.absent} color="red" icon={UserX} />
        <StatCard label={t('adminDashboard.schedule.postponed', 'مؤجل')} value={stats.postponed} color="amber" icon={Clock} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer">
          <Plus size={18} />
          <span>{t('adminDashboard.schedule.addGroup', 'إضافة مجموعة')}</span>
        </button>

        <div className="flex items-center gap-3 flex-wrap w-full sm:w-auto justify-end">
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold outline-none focus:border-brand-500 cursor-pointer"
          >
            <option value="all">{t('adminDashboard.schedule.allTeachers', 'كل المعلمين')}</option>
            {teachers.map((tItem) => {
              const tName = getTeacherName(tItem)
              return (
                <option key={tItem.id} value={tName}>
                  {tName}
                </option>
              )
            })}
          </select>

          <button
            onClick={goToToday}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            {t('adminDashboard.schedule.today', 'اليوم')}
          </button>
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={isRtl ? goToNextWeek : goToPrevWeek}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
            <span className="px-3 text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap min-w-[160px] text-center">
              {t('adminDashboard.schedule.currentWeek', 'الأسبوع الحالي')}
            </span>
            <button
              onClick={isRtl ? goToPrevWeek : goToNextWeek}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Empty state for period with no sessions */}
      {filteredSessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CalendarDays size={40} className="text-slate-300 dark:text-slate-700 mb-3" />
          <p className="text-slate-400 dark:text-slate-500 font-semibold text-sm">
            {isRtl ? 'لا توجد أحداث في هذه الفترة' : 'No events in this period'}
          </p>
        </div>
      ) : (
        <ScheduleCalendarGrid
          weekDates={weekDates}
          filteredSessions={filteredSessions}
          today={today}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          t={t}
        />
      )}

      <div className="flex items-center gap-4 flex-wrap justify-end text-xs text-slate-500 dark:text-slate-400">
        {Object.entries(SESSION_STATUS_MAP).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${cfg.bg}`} />
            <span>{t(`adminDashboard.schedule.status.${cfg.labelKey}`, cfg.label)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


function getWeekDates(refDate) {
  const d = new Date(refDate)
  const day = d.getDay()
  const start = new Date(d)
  start.setDate(d.getDate() - day)
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    return date
  })
}

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function buildMockSessions(weekDates) {
  const base = [
    { id: 1, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'scheduled', attendance: { present: 3, absent: 1, postponed: 0 } },
    { id: 2, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'postponed', attendance: { present: 0, absent: 0, postponed: 1 } },
    { id: 3, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 0, status: 'scheduled', attendance: { present: 2, absent: 0, postponed: 0 } },
    { id: 4, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 1, status: 'scheduled', attendance: { present: 4, absent: 0, postponed: 0 } },
    { id: 5, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 1, status: 'conflict', attendance: { present: 0, absent: 0, postponed: 0 } },
    { id: 6, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 1, status: 'scheduled', attendance: { present: 5, absent: 1, postponed: 0 } },
    { id: 7, groupName: 'مجموعة العربية ب', teacher: 'عائشة محمود', time: '3 ص - 5 ص', dayIndex: 2, status: 'scheduled', attendance: { present: 3, absent: 0, postponed: 0 } },
    { id: 8, groupName: 'مجموعة العربية ب', teacher: 'عائشة محمود', time: '3 ص - 5 ص', dayIndex: 3, status: 'scheduled', attendance: { present: 2, absent: 1, postponed: 0 } },
    { id: 9, groupName: 'مجموعة القرآن أ', teacher: 'فاطمة الزهراء', time: '1 ص - 2 ص', dayIndex: 4, status: 'scheduled', attendance: { present: 5, absent: 0, postponed: 0 } },
    { id: 10, groupName: 'مجموعة القرآن ب', teacher: 'أحمد علي محمد', time: '3 ص - 4 ص', dayIndex: 5, status: 'postponed', attendance: { present: 0, absent: 0, postponed: 1 } },
  ]
  return base.map((s) => ({
    ...s,
    date: weekDates[s.dayIndex],
    dateStr: formatDate(weekDates[s.dayIndex]),
  }))
}

export default function AdminSchedule() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const today = new Date()
  const [refDate, setRefDate] = useState(today)
  const [showConflictBanner, setShowConflictBanner] = useState(true)
  const [teachers, setTeachers] = useState([])
  const [selectedTeacher, setSelectedTeacher] = useState('all')

  const weekDates = useMemo(() => getWeekDates(refDate), [refDate])
  const sessions = useMemo(() => buildMockSessions(weekDates), [weekDates])

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const res = await teachersApi.fetchLocalizedTeachersList()
        if (res.success && Array.isArray(res.data)) {
          setTeachers(res.data)
        }
      } catch (err) {
        console.error('Failed to load teachers for schedule filtering:', err)
      }
    }
    loadTeachers()
  }, [])

  const getTeacherName = (tItem) => {
    if (!tItem) return ''
    if (typeof tItem.name === 'object' && tItem.name !== null) {
      return isRtl ? tItem.name.ar || tItem.name.en : tItem.name.en || tItem.name.ar
    }
    return tItem.name || ''
  }

  const filteredSessions = useMemo(() => {
    if (selectedTeacher === 'all') return sessions
    return sessions.filter((s) => s.teacher === selectedTeacher)
  }, [sessions, selectedTeacher])

  const stats = useMemo(() => {
    const allAttendance = filteredSessions.flatMap((s) => [
      ...Array(s.attendance.present).fill('present'),
      ...Array(s.attendance.absent).fill('absent'),
      ...Array(s.attendance.postponed).fill('postponed'),
    ])
    const present = allAttendance.filter((a) => a === 'present').length
    const absent = allAttendance.filter((a) => a === 'absent').length
    const postponed = allAttendance.filter((a) => a === 'postponed').length
    const total = present + absent
    const rate = total > 0 ? Math.round((present / total) * 100) : 0
    return { present, absent, postponed, rate }
  }, [filteredSessions])

  const conflicts = useMemo(
    () => filteredSessions.filter((s) => s.status === 'conflict'),
    [filteredSessions]
  )

  const goToPrevWeek = () => {
    const d = new Date(refDate)
    d.setDate(d.getDate() - 7)
    setRefDate(d)
  }

  const goToNextWeek = () => {
    const d = new Date(refDate)
    d.setDate(d.getDate() + 7)
    setRefDate(d)
  }

  const goToToday = () => setRefDate(today)

  const handleEdit = (session) => {
    showSuccessToast(
      t('adminDashboard.schedule.editSessionToast', 'تعديل الجلسة: {{name}}', { name: session.groupName }),
      isRtl
    )
  }

  const handleDelete = async (session) => {
    const isConfirmed = await showDeleteConfirm(isRtl, session.groupName)
    if (!isConfirmed) return
    showSuccessToast(
      t('adminDashboard.schedule.deleteSessionToast', 'تم حذف الجلسة رقم: {{id}}', { id: session.id }),
      isRtl
    )
  }

  return (
    <div className="space-y-5 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          {t('adminDashboard.schedule.title', 'الجدول الدراسي')}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.schedule.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      {showConflictBanner && conflicts.length > 0 && (
        <ConflictBanner conflicts={conflicts} onDismiss={() => setShowConflictBanner(false)} t={t} />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label={t('adminDashboard.schedule.attendanceRate', 'معدل الحضور')} value={`${stats.rate}%`} color="slate" icon={TrendingUp} />
        <StatCard label={t('adminDashboard.schedule.present', 'حضر')} value={stats.present} color="green" icon={UserCheck} />
        <StatCard label={t('adminDashboard.schedule.absent', 'غياب')} value={stats.absent} color="red" icon={UserX} />
        <StatCard label={t('adminDashboard.schedule.postponed', 'مؤجل')} value={stats.postponed} color="amber" icon={Clock} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer">
          <Plus size={18} />
          <span>{t('adminDashboard.schedule.addGroup', 'إضافة مجموعة')}</span>
        </button>

        <div className="flex items-center gap-3 flex-wrap w-full sm:w-auto justify-end">
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold outline-none focus:border-brand-500 cursor-pointer"
          >
            <option value="all">{t('adminDashboard.schedule.allTeachers', 'كل المعلمين')}</option>
            {teachers.map((tItem) => {
              const tName = getTeacherName(tItem)
              return (
                <option key={tItem.id} value={tName}>
                  {tName}
                </option>
              )
            })}
          </select>

          <button
            onClick={goToToday}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            {t('adminDashboard.schedule.today', 'اليوم')}
          </button>
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={isRtl ? goToNextWeek : goToPrevWeek}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
            <span className="px-3 text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap min-w-[160px] text-center">
              {t('adminDashboard.schedule.currentWeek', 'الأسبوع الحالي')}
            </span>
            <button
              onClick={isRtl ? goToPrevWeek : goToNextWeek}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>

      <ScheduleCalendarGrid
        weekDates={weekDates}
        filteredSessions={filteredSessions}
        today={today}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        t={t}
      />

      <div className="flex items-center gap-4 flex-wrap justify-end text-xs text-slate-500 dark:text-slate-400">
        {Object.entries(SESSION_STATUS_MAP).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${cfg.bg}`} />
            <span>{t(`adminDashboard.schedule.status.${cfg.labelKey}`, cfg.label)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}