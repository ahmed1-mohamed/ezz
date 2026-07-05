import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import GroupInfoCard from './GroupInfoCard'
import GroupScheduleCard from './GroupScheduleCard'

export default function AddEditGroupScreen({ group = null, isRtl, onSave, onCancel }) {
  const { t, i18n } = useTranslation()
  const isRtlResolved = isRtl !== undefined ? isRtl : i18n.language.startsWith('ar')
  const BackArrow = isRtlResolved ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: group?.name || '',
    nameEn: group?.nameEn || '',
    subject: group?.subject || '',
    level: group?.level || '',
    type: group?.type || 'مجموعة',
    language: group?.language || 'العربية',
    teacher: group?.teacher || '',
    teacherId: group?.teacherId || null,
    maxStudents: group?.maxStudents || 5,
    status: group?.status || 'نشط',
    image: group?.image || null,
  })

  const [schedule, setSchedule] = useState(group?.schedule || [])
  const [newDay, setNewDay] = useState('السبت')
  const [newTimeFrom, setNewTimeFrom] = useState('1 ص')
  const [newTimeTo, setNewTimeTo] = useState('2 ص')

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => handleChange('image', reader.result)
    reader.readAsDataURL(file)
  }

  const handleAddSchedule = () => {
    const exists = schedule.find((s) => s.day === newDay)
    if (exists) return
    setSchedule((prev) => [...prev, { day: newDay, timeFrom: newTimeFrom, timeTo: newTimeTo }])
  }

  const handleRemoveSchedule = (day) => {
    setSchedule((prev) => prev.filter((s) => s.day !== day))
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      showErrorToast(
        t('adminDashboard.groups.enterGroupNameError', 'الرجاء إدخال اسم المجموعة!'),
        isRtlResolved
      )
      return
    }
    if (!formData.subject) {
      showErrorToast(
        t('adminDashboard.groups.selectSubjectError', 'الرجاء اختيار المادة!'),
        isRtlResolved
      )
      return
    }
    if (!formData.teacher) {
      showErrorToast(
        t('adminDashboard.groups.selectTeacherError', 'الرجاء اختيار المعلم!'),
        isRtlResolved
      )
      return
    }
    onSave({ ...formData, schedule })
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
    if (schedule.length === 0) return ''
    const daysText = schedule.map((s) => getDayLabel(s.day)).join(' - ')
    const timeText = getTimeLabel(schedule[0]?.timeFrom)
    return `${daysText} · ${timeText}`
  }, [schedule, t])

  const statusConfig = {
    'نشط': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
    'متوقف': 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400',
    'مكتمل': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  }

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
      'متوسطة': t('adminDashboard.groups.levels.intermediate', 'متوسطة'),
      'متقدم': t('adminDashboard.groups.levels.advanced', 'متقدم'),
    }
    return map[lvl] || lvl
  }

  return (
    <div className="space-y-6 pb-10" dir={isRtlResolved ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all hover:scale-105 cursor-pointer"
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>{t('adminDashboard.groups.title', 'المجموعات')}</span>
              <span className="text-slate-350 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg font-bold">
                {group ? t('adminDashboard.groups.editGroup', 'تعديل بيانات المجموعة') : t('adminDashboard.groups.createGroup', 'إنشاء مجموعة جديدة')}
              </span>
            </h1>
          </div>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 cursor-pointer"
        >
          {t('adminDashboard.groups.cancel', 'إلغاء')}
        </button>
      </div>

      {group && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-xl bg-brand-500 text-white text-xs font-bold">
              {t('adminDashboard.groups.groupLabel', 'مجموعة')}
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
              {group.name}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusConfig[group.status] || statusConfig['نشط']}`}>
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
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {group.teacher} · {scheduleText}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 max-w-4xl mx-auto">
        <GroupInfoCard
          formData={formData}
          handleChange={handleChange}
          handleImageSelect={handleImageSelect}
          fileInputRef={fileInputRef}
          isRtl={isRtlResolved}
          t={t}
          isEditing={!!group}
        />

        <GroupScheduleCard
          schedule={schedule}
          newDay={newDay}
          setNewDay={setNewDay}
          newTimeFrom={newTimeFrom}
          setNewTimeFrom={setNewTimeFrom}
          newTimeTo={newTimeTo}
          setNewTimeTo={setNewTimeTo}
          handleAddSchedule={handleAddSchedule}
          handleRemoveSchedule={handleRemoveSchedule}
          isRtl={isRtlResolved}
          t={t}
        />

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer"
          >
            {group ? t('adminDashboard.groups.edit', 'تعديل') : t('adminDashboard.groups.createGroupButton', 'إنشاء المجموعة')}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
          >
            {t('adminDashboard.groups.cancel', 'إلغاء')}
          </button>
        </div>
      </form>
    </div>
  )
}