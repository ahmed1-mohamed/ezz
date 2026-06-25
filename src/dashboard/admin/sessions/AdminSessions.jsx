import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Search,
  Calendar,
  Clock,
  Users,
  RefreshCw,
  UserX,
  ChevronDown,
  X,
} from 'lucide-react'
import { adminSessionsApi } from '@/shared/services/api/adminSessionsApi'
import Spinner from '@/shared/components/Spinner'

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

function StatusBadge({ status }) {
  const config = {
    live: { label: 'مباشر الآن', cls: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800' },
    upcoming: { label: 'قادمة', cls: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' },
    completed: { label: 'مكتملة', cls: 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800' },
    cancelled: { label: 'ملغاة', cls: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700' },
  }
  const { label, cls } = config[status] || config.cancelled
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cls}`}>
      {status === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      )}
      {label}
    </span>
  )
}

function StatCard({ label, value, color }) {
  const colorMap = {
    red: 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-800/30 text-red-600 dark:text-red-400',
    blue: 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400',
    green: 'bg-brand-50 dark:bg-brand-900/10 border-brand-100 dark:border-brand-800/30 text-brand-600 dark:text-brand-400',
    amber: 'bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800/30 text-amber-600 dark:text-amber-400',
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-1 p-5 rounded-3xl border ${colorMap[color]}`}>
      <span className="text-3xl font-extrabold">{value}</span>
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 text-center">{label}</span>
    </div>
  )
}

function TeacherDropdown({ value, onChange, teachers }) {
  const [open, setOpen] = useState(false)
  const selected = teachers.find((t) => t.id === value)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 rounded-2xl py-2.5 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900"
      >
        <ChevronDown size={16} className="text-slate-400 shrink-0" />
        <span className={selected ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}>
          {selected ? selected.name : 'أختر المدرس البديل'}
        </span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden max-h-48 overflow-y-auto">
          {teachers.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => { onChange(t.id); setOpen(false) }}
              className={`w-full px-4 py-2.5 flex items-center justify-end hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${value === t.id
                ? 'text-brand-600 font-semibold bg-brand-50 dark:bg-brand-950/20'
                : 'text-slate-700 dark:text-slate-300'
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ReschedulePanel({ session, onConfirm, onCancel }) {
  const today = new Date().toISOString().split('T')[0]
  const [newDate, setNewDate] = useState(today)
  const [newTime, setNewTime] = useState(session.time || '10:00')

  return (
    <div className="bg-[#f3f7f6] dark:bg-slate-900/60 rounded-2xl p-4 space-y-3 border border-brand-100 dark:border-brand-900/30 mt-2 mx-2">
      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 text-end">
        إعادة جدولة {session.groupName}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 text-end">أختر التاريخ الجديد</label>
          <div className="relative">
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 px-3 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-brand-400 transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 text-end">أختر الساعة</label>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 px-3 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-brand-400 transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 justify-start pt-1">
        <button
          onClick={() => onConfirm(newDate, newTime)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-sm"
        >
          تأكيد الجدولة
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
        >
          إلغاء
        </button>
      </div>
    </div>
  )
}

function ChangeTeacherPanel({ session, onConfirm, onCancel }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState(session.teacherId || null)

  return (
    <div className="bg-[#f3f7f6] dark:bg-slate-900/60 rounded-2xl p-4 space-y-3 border border-amber-100 dark:border-amber-900/30 mt-2 mx-2">
      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 text-end">
        تغيير المدرس لمدرس جديد
      </p>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 text-end">أختر المدرس البديل</label>
        <TeacherDropdown
          value={selectedTeacherId}
          onChange={setSelectedTeacherId}
          teachers={MOCK_TEACHERS}
        />
      </div>
      <div className="flex items-center gap-3 justify-start pt-1">
        <button
          onClick={() => {
            const teacher = MOCK_TEACHERS.find((t) => t.id === selectedTeacherId)
            if (teacher) onConfirm(teacher.id, teacher.name)
          }}
          disabled={!selectedTeacherId}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all shadow-sm"
        >
          تأكيد المدرس
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
        >
          إلغاء
        </button>
      </div>
    </div>
  )
}

export default function AdminSessions() {
  const { i18n } = useTranslation()
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

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-6 p-1 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Page header */}
      <div className="text-start">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">إدارة الحصص</h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
          منارة العز أكاديمي · لوحة الإدارة
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="مباشر الآن" value={stats.live} color="red" />
        <StatCard label="حصص قادمة" value={stats.upcoming} color="blue" />
        <StatCard label="حصص مكتملة" value={stats.completed} color="green" />
        <StatCard label="ملغاة" value={stats.cancelled} color="amber" />
      </div>

      {/* Main card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-hidden">

        {/* Search bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <div className="relative max-w-sm mx-auto">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="بحث..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
              className="w-full bg-[#f3f7f6] dark:bg-slate-800 rounded-2xl py-2.5 pr-9 pl-4 text-sm text-slate-700 dark:text-slate-200 outline-none border border-transparent focus:border-brand-400 transition-colors placeholder-slate-400"
            />
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-800 overflow-x-auto">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setCurrentPage(1) }}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.key
                ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                : 'bg-[#f3f7f6] dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[2fr_2fr_1.2fr_1.2fr_0.8fr_1.2fr_1.5fr] gap-2 px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs font-bold text-slate-500 dark:text-slate-400 text-end">
          <span>الإجراءات</span>
          <span>الحالة</span>
          <span>العدد</span>
          <span>الوقت</span>
          <span>التاريخ</span>
          <span>المعلم</span>
          <span>المجموعة</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
          {paged.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-400">
              <Calendar size={40} strokeWidth={1.5} />
              <p className="text-sm font-medium">لا توجد حصص مطابقة</p>
            </div>
          ) : (
            paged.map((session) => {
              const isExpanded = expandedRow === session.id
              return (
                <div key={session.id} className="group">
                  {/* Main row */}
                  <div className="hidden md:grid grid-cols-[2fr_2fr_1.2fr_1.2fr_0.8fr_1.2fr_1.5fr] gap-2 items-center px-5 py-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors">
                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {session.status !== 'cancelled' && session.status !== 'completed' && (
                        <>
                          <button
                            onClick={() => handleTogglePanel(session.id, 'reschedule')}
                            title="إعادة الجدولة"
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${isExpanded && expandedPanel === 'reschedule'
                              ? 'bg-brand-500 text-white border-brand-500'
                              : 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 hover:bg-brand-100'
                              }`}
                          >
                            <RefreshCw size={12} />
                            <span>إعادة جدولة</span>
                          </button>
                          <button
                            onClick={() => handleTogglePanel(session.id, 'teacher')}
                            title="تغيير المدرس"
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${isExpanded && expandedPanel === 'teacher'
                              ? 'bg-amber-500 text-white border-amber-500'
                              : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800 hover:bg-amber-100'
                              }`}
                          >
                            <UserX size={12} />
                            <span>تغيير المدرس</span>
                          </button>
                          <button
                            onClick={() => handleCancelSession(session.id)}
                            title="إلغاء الحصة"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-100 transition-all"
                          >
                            <X size={12} />
                            <span>إلغاء المجموعة</span>
                          </button>
                        </>
                      )}
                    </div>

                    {/* Status */}
                    <div className="flex justify-end">
                      <StatusBadge status={session.status} />
                    </div>

                    {/* Students count */}
                    <div className="flex items-center justify-end gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                      <span>{session.studentsCount}</span>
                      <Users size={14} className="text-slate-400" />
                    </div>

                    {/* Time */}
                    <div className="flex items-center justify-end gap-1.5 text-sm text-slate-600 dark:text-slate-300">
                      <span>{session.duration} دقيقة</span>
                      <Clock size={14} className="text-slate-400" />
                    </div>

                    {/* Date */}
                    <div className="text-sm text-slate-500 dark:text-slate-400 text-end">
                      {session.date}
                    </div>

                    {/* Teacher */}
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-200 text-end">
                      {session.teacher}
                    </div>

                    {/* Group name */}
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-sm font-bold text-slate-800 dark:text-white">{session.groupName}</span>
                      <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                    </div>
                  </div>

                  {/* Mobile row */}
                  <div className="md:hidden flex flex-col gap-2 px-4 py-4">
                    <div className="flex items-center justify-between">
                      <StatusBadge status={session.status} />
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-500" />
                        <span className="text-sm font-bold text-slate-800 dark:text-white">{session.groupName}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>{session.date} | {session.time}</span>
                      <span>{session.teacher}</span>
                    </div>
                    {session.status !== 'cancelled' && session.status !== 'completed' && (
                      <div className="flex items-center gap-2 flex-wrap pt-1">
                        <button
                          onClick={() => handleTogglePanel(session.id, 'reschedule')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 text-brand-600 border border-brand-200 hover:bg-brand-100 transition-all"
                        >
                          <RefreshCw size={12} />
                          إعادة جدولة
                        </button>
                        <button
                          onClick={() => handleTogglePanel(session.id, 'teacher')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100 transition-all"
                        >
                          <UserX size={12} />
                          تغيير المدرس
                        </button>
                        <button
                          onClick={() => handleCancelSession(session.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all"
                        >
                          <X size={12} />
                          إلغاء
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Expanded panel */}
                  {isExpanded && expandedPanel === 'reschedule' && (
                    <ReschedulePanel
                      session={session}
                      onConfirm={(date, time) => handleReschedule(session.id, date, time)}
                      onCancel={() => { setExpandedRow(null); setExpandedPanel(null) }}
                    />
                  )}
                  {isExpanded && expandedPanel === 'teacher' && (
                    <ChangeTeacherPanel
                      session={session}
                      onConfirm={(tid, tname) => handleChangeTeacher(session.id, tid, tname)}
                      onCancel={() => { setExpandedRow(null); setExpandedPanel(null) }}
                    />
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              عرض {Math.min(currentPage * itemsPerPage, filtered.length)} من {filtered.length}
            </span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-xl text-sm font-bold transition-all ${currentPage === page
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
