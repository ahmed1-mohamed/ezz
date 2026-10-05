import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { ChevronLeft, ChevronRight, CalendarDays, Users } from 'lucide-react'
import { showDeleteConfirm, showSuccessToast } from '@/shared/utils/sweetAlert'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { timetableApi } from '@/shared/services/api/timetableApi'
import ScheduleCalendarGrid from './components/ScheduleCalendarGrid'

const DAYS_IN_WEEK = 7
const STALE_TIME_MS = 60 * 1000
const FIELD_CLASS = 'px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all cursor-pointer'
const NAV_BUTTON_CLASS = 'p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer'

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function getWeekDates(startDateString) {
  const start = startDateString ? parseLocalDate(startDateString) : new Date()
  if (!startDateString) start.setDate(start.getDate() - start.getDay())
  return Array.from({ length: DAYS_IN_WEEK }, (_, i) => {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    return date
  })
}

export default function AdminSchedule() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const today = useMemo(() => new Date(), [])

  // Either a relative week (weekOffset) or an absolute date, never both
  const [weekQuery, setWeekQuery] = useState({ weekOffset: 0, date: '' })
  const [selectedTeacherId, setSelectedTeacherId] = useState('')

  const { data: timetable, isLoading, isFetching, isError } = useQuery({
    queryKey: ['adminTimetable', weekQuery.weekOffset, weekQuery.date, selectedTeacherId],
    queryFn: () => timetableApi.fetchPrivateTimetable({ ...weekQuery, teacherId: selectedTeacherId }),
    staleTime: STALE_TIME_MS,
    placeholderData: keepPreviousData,
  })

  const { data: teachersRes } = useQuery({
    queryKey: ['scheduleTeachers'],
    queryFn: () => teachersApi.fetchLocalizedTeachersList(),
    staleTime: STALE_TIME_MS * 5,
  })
  const teachers = Array.isArray(teachersRes?.data) ? teachersRes.data : []

  const weekInfo = timetable?.weekInfo
  const weekDates = useMemo(() => getWeekDates(weekInfo?.startDate), [weekInfo?.startDate])
  const sessions = useMemo(
    () => (timetable?.days || []).flatMap((day) => day.sessions || []),
    [timetable]
  )

  const getTeacherName = (tItem) => {
    if (!tItem) return ''
    if (typeof tItem.name === 'object' && tItem.name !== null) {
      return isRtl ? tItem.name.ar || tItem.name.en : tItem.name.en || tItem.name.ar
    }
    return tItem.name || ''
  }

  const goToPrevWeek = () => {
    if (weekQuery.date && weekInfo?.previousWeekDate) {
      setWeekQuery({ weekOffset: 0, date: weekInfo.previousWeekDate })
      return
    }
    setWeekQuery((prev) => ({ weekOffset: prev.weekOffset - 1, date: '' }))
  }

  const goToNextWeek = () => {
    if (weekQuery.date && weekInfo?.nextWeekDate) {
      setWeekQuery({ weekOffset: 0, date: weekInfo.nextWeekDate })
      return
    }
    setWeekQuery((prev) => ({ weekOffset: prev.weekOffset + 1, date: '' }))
  }

  const handleDateChange = (e) => {
    const { value } = e.target
    if (!value) return
    setWeekQuery({ weekOffset: 0, date: value })
  }

  const handleEdit = (session) => {
    showSuccessToast(
      t('adminDashboard.schedule.editSessionToast', 'تعديل الجلسة: {{name}}', { name: session.group?.name }),
      isRtl
    )
  }

  const handleDelete = async (session) => {
    const isConfirmed = await showDeleteConfirm(isRtl, session.group?.name)
    if (!isConfirmed) return
    showSuccessToast(
      t('adminDashboard.schedule.deleteSessionToast', 'تم حذف الجلسة رقم: {{id}}', { id: session.sessionNumber }),
      isRtl
    )
  }

  const weekLabel = weekInfo?.isCurrentWeek
    ? t('adminDashboard.schedule.currentWeek', 'الأسبوع الحالي')
    : weekInfo?.weekLabel

  const prevLabel = t('adminDashboard.schedule.previousWeek', 'الأسبوع السابق')
  const nextLabel = t('adminDashboard.schedule.nextWeek', 'الأسبوع التالي')

  return (
    <div className="space-y-6 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
          <div className="p-2.5 bg-brand-500/10 rounded-2xl text-brand-600 dark:text-brand-400">
            <CalendarDays size={24} />
          </div>
          {t('adminDashboard.schedule.title', 'الجدول الدراسي')}
          {isFetching && <div className="w-5 h-5 ms-2 border-2 border-brand-500/30 border-t-brand-500 rounded-full animate-spin" />}
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          {t('adminDashboard.schedule.subtitle', 'منارة العز أكاديمي · لوحة الإدارة')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft">
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden lg:min-w-[340px]">
          <button
            type="button"
            onClick={isRtl ? goToNextWeek : goToPrevWeek}
            aria-label={isRtl ? nextLabel : prevLabel}
            className={NAV_BUTTON_CLASS}
          >
            <ChevronRight size={20} />
          </button>
          <div className="px-4 py-1.5 text-center">
            <span className="block text-sm font-extrabold text-slate-800 dark:text-slate-100 whitespace-nowrap">{weekLabel || '—'}</span>
            <span className="block text-[11px] text-slate-400 whitespace-nowrap min-h-[16px]">{weekInfo?.formattedRange}</span>
          </div>
          <button
            type="button"
            onClick={isRtl ? goToPrevWeek : goToNextWeek}
            aria-label={isRtl ? prevLabel : nextLabel}
            className={NAV_BUTTON_CLASS}
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Users size={16} className="absolute start-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <select
              id="schedule-teacher-filter"
              value={selectedTeacherId}
              onChange={(e) => setSelectedTeacherId(e.target.value)}
              className={`${FIELD_CLASS} ps-9 min-w-[200px]`}
            >
              <option value="">{t('adminDashboard.schedule.allTeachers', 'كل المعلمين')}</option>
              {teachers.map((tItem) => (
                <option key={tItem.id} value={tItem.id}>
                  {getTeacherName(tItem)}
                </option>
              ))}
            </select>
          </div>

          <input
            type="date"
            id="schedule-date-picker"
            aria-label={t('adminDashboard.schedule.pickDate', 'اختيار تاريخ')}
            value={weekQuery.date}
            onChange={handleDateChange}
            className={FIELD_CLASS}
          />
        </div>
      </div>

      {isError && (
        <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 p-4 rounded-2xl text-sm font-bold border border-rose-200 dark:border-rose-900/50">
          {t('adminDashboard.schedule.loadError', 'تعذر تحميل الجدول الدراسي')}
        </div>
      )}

      {isLoading ? (
        <div className="h-96 rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
      ) : (
        <div className={`transition-opacity duration-200 ${isFetching ? 'opacity-60' : ''}`}>
          <ScheduleCalendarGrid
            weekDates={weekDates}
            filteredSessions={sessions}
            today={today}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            t={t}
          />
          {sessions.length === 0 && (
            <p className="text-center text-slate-400 dark:text-slate-500 font-semibold text-sm mt-4">
              {t('adminDashboard.schedule.noEventsPeriod', 'لا توجد أحداث في هذه الفترة')}
            </p>
          )}
        </div>
      )}
    </div>
  )
}