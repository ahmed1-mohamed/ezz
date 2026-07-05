import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, X, UserPlus } from 'lucide-react'
import { studentsApi } from '@/shared/services/api/studentsApi'
import StudentListCard from './StudentListCard'

export default function AddStudentsModal({ group, isRtl, onAdd, onCancel }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')

  const [allStudents, setAllStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTab, setSearchTab] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState([])
  const [prevGroupId, setPrevGroupId] = useState(group?.id)

  if (group?.id !== prevGroupId) {
    setPrevGroupId(group?.id)
    setSearchQuery('')
    setSelectedIds([])
  }

  useEffect(() => {
    let active = true
    const load = async () => {
      setIsLoading(true)
      try {
        const res = await studentsApi.fetchAllLocalizedStudents()
        if (!active) return
        const data = res?.data || res || []
        setAllStudents(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error('Failed to fetch localized students:', err)
      } finally {
        if (active) setIsLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  const existingStudentIds = useMemo(
    () => new Set((group?.students || []).map((s) => s.id || s._id)),
    [group]
  )

  const availableStudents = useMemo(() => {
    return allStudents.filter((s) => !existingStudentIds.has(s.id || s._id))
  }, [allStudents, existingStudentIds])

  const filteredStudents = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return availableStudents
    return availableStudents.filter((s) => {
      const sName = typeof s.name === 'object' && s.name !== null
        ? (isRtlResolved ? s.name.ar || s.name.en : s.name.en || s.name.ar)
        : (s.name || '')
      if (searchTab === 'name') return sName.toLowerCase().includes(query)
      if (searchTab === 'email') return (s.email || '').toLowerCase().includes(query)
      if (searchTab === 'phone') return (s.phone || '').includes(query)
      return true
    })
  }, [availableStudents, searchQuery, searchTab, isRtlResolved])

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleAdd = () => {
    const studentsToAdd = availableStudents.filter((s) => selectedIds.includes(s.id || s._id))
    onAdd(studentsToAdd)
  }

  const getDayLabel = (day) => {
    const map = {
      'السبت': t('adminDashboard.groups.days.saturday', 'السبت'),
      'الأحد': t('adminDashboard.groups.days.sunday', 'الأحد'),
      'الاثنين': t('adminDashboard.groups.days.monday', 'الاثنين'),
      'الثلاثاء': t('adminDashboard.groups.days.tuesday', 'الثلاثاء'),
      'الأربعاء': t('adminDashboard.groups.days.wednesday', 'الأربعاء'),
      'الخميس': t('adminDashboard.groups.days.thursday', 'الخميس'),
      'الجمعة': t('adminDashboard.groups.days.friday', 'الجمعة'),
    }
    return map[day] || day
  }

  const getTimeLabel = (timeStr) => {
    if (!timeStr) return ''
    const parts = timeStr.split(' ')
    if (parts.length === 2) {
      const num = parts[0]
      const period = parts[1]
      if (period === 'ص') {
        return t('adminDashboard.groups.timePeriod.am', { defaultValue: '{{num}} ص', num })
      } else if (period === 'م') {
        return t('adminDashboard.groups.timePeriod.pm', { defaultValue: '{{num}} م', num })
      }
    }
    return timeStr
  }

  const scheduleText = useMemo(() => {
    if (!group?.schedule?.length) return ''
    const days = group.schedule.map((s) => getDayLabel(s.day)).join(' - ')
    const time = getTimeLabel(group.schedule[0]?.timeFrom) || ''
    return `${group.teacher || ''} · ${days} · ${time}`
  }, [group, t])

  const getStatusLabel = (status) => {
    const map = {
      'نشط': t('adminDashboard.groups.statuses.active', 'نشط'),
      'متوقف': t('adminDashboard.groups.statuses.stopped', 'متوقف'),
      'مكتمل': t('adminDashboard.groups.statuses.completed', 'مكتمل'),
    }
    return map[status] || status
  }

  const getLevelLabel = (lvl) => {
    const map = {
      'مبتدئ': t('adminDashboard.groups.levels.beginner', 'مبتدئ'),
      'متوسط': t('adminDashboard.groups.levels.intermediate', 'متوسط'),
      'متوسطة': t('adminDashboard.groups.levels.intermediate', 'متوسطة'),
      'متقدم': t('adminDashboard.groups.levels.advanced', 'متقدم'),
    }
    return map[lvl] || lvl
  }

  const tabs = [
    { key: 'name', label: t('adminDashboard.groups.addStudentsModal.searchByName', 'بحث بالاسم') },
    { key: 'email', label: t('adminDashboard.groups.addStudentsModal.searchByEmail', 'بحث بالبريد') },
    { key: 'phone', label: t('adminDashboard.groups.addStudentsModal.searchByPhone', 'بحث بالجوال') },
  ]

  const getSearchPlaceholder = () => {
    if (searchTab === 'name') return t('adminDashboard.groups.addStudentsModal.placeholderName', 'ابحث باسم الطالب...')
    if (searchTab === 'email') return t('adminDashboard.groups.addStudentsModal.placeholderEmail', 'ابحث بالبريد الإلكتروني...')
    return t('adminDashboard.groups.addStudentsModal.placeholderPhone', 'ابحث برقم الجوال...')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      dir={isRtlResolved ? 'rtl' : 'ltr'}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600">
              <UserPlus size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.groups.addStudentsModal.title', 'إضافة طلاب للمجموعة')}
            </h2>
          </div>
          <button
            onClick={onCancel}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {group && (
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-brand-500 text-white text-xs font-bold">
                {t('adminDashboard.groups.groupLabel', 'مجموعة')}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                {group.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {getStatusLabel(group.status)}
              </span>
              {group.level && (
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {getLevelLabel(group.level)}
                </span>
              )}
            </div>
            {scheduleText && (
              <p className="text-xs text-slate-400 dark:text-slate-500 truncate max-w-xs">
                {scheduleText}
              </p>
            )}
          </div>
        )}

        <div className="px-6 pt-4 pb-3 shrink-0">
          <div className="flex items-center gap-2 mb-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setSearchTab(tab.key); setSearchQuery('') }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${searchTab === tab.key
                    ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className={`absolute inset-y-0 ${isRtlResolved ? 'right-4' : 'left-4'} flex items-center pointer-events-none text-slate-400`}>
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getSearchPlaceholder()}
              className={`w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500/40 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 ${isRtlResolved ? 'pr-11 pl-4' : 'pl-11 pr-4'
                } outline-none transition-all text-sm placeholder-slate-400`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute inset-y-0 ${isRtlResolved ? 'left-4' : 'right-4'} flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer`}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {t('adminDashboard.groups.addStudentsModal.availableStudents', 'الطلاب المتاحون')} ({filteredStudents.length})
            </p>
            {selectedIds.length > 0 && (
              <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold">
                {t('adminDashboard.groups.addStudentsModal.selectedCount', { defaultValue: 'تم اختيار {{count}}', count: selectedIds.length })}
              </span>
            )}
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400 dark:text-slate-500">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mb-3" />
              <p className="text-sm font-medium">{isRtlResolved ? 'جاري تحميل الطلاب...' : 'Loading students...'}</p>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400 dark:text-slate-500">
              <Search size={36} className="mb-3 opacity-40" />
              <p className="text-sm font-medium">{t('adminDashboard.groups.addStudentsModal.noStudentsFound', 'لا يوجد طلاب يطابقون بحثك')}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <StudentListCard
                  key={student.id || student._id}
                  student={student}
                  isSelected={selectedIds.includes(student.id || student._id)}
                  toggleSelect={toggleSelect}
                  t={t}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
          <button
            onClick={handleAdd}
            disabled={selectedIds.length === 0}
            className="flex-1 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer"
          >
            {selectedIds.length > 0
              ? t('adminDashboard.groups.addStudentsModal.addButtonWithCount', { defaultValue: 'إضافة ({{count}})', count: selectedIds.length })
              : t('adminDashboard.groups.addStudentsModal.addButton', 'إضافة')}
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
          >
            {t('adminDashboard.groups.addStudentsModal.cancelButton', 'إلغاء')}
          </button>
        </div>
      </div>
    </div>
  )
}