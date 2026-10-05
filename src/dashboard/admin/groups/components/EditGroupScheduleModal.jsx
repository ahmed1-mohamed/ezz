import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Calendar, Trash2, ArrowRight, ArrowLeft, Loader2, Plus, Clock, AlertCircle } from 'lucide-react'
import DaySelect from './fields/DaySelect'

const WEEK_DAYS = [
  { key: 'sunday', ar: 'الأحد', en: 'Sunday' },
  { key: 'monday', ar: 'الاثنين', en: 'Monday' },
  { key: 'tuesday', ar: 'الثلاثاء', en: 'Tuesday' },
  { key: 'wednesday', ar: 'الأربعاء', en: 'Wednesday' },
  { key: 'thursday', ar: 'الخميس', en: 'Thursday' },
  { key: 'friday', ar: 'الجمعة', en: 'Friday' },
  { key: 'saturday', ar: 'السبت', en: 'Saturday' },
]

const TIME_OPTIONS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00',
]

export default function EditGroupScheduleModal({ group, onClose, onSave, isRtl: propIsRtl }) {
  const { t, i18n } = useTranslation()
  const isRtl = propIsRtl !== undefined ? propIsRtl : i18n.language.startsWith('ar')
  const CloseArrow = isRtl ? ArrowRight : ArrowLeft

  const [schedule, setSchedule] = useState(() => {
    const rawList = group?.weeklySchedule || group?.schedule || []
    if (Array.isArray(rawList) && rawList.length > 0) {
      return rawList.map((s) => ({
        day: (s.day || '').toLowerCase(),
        startTime: s.startTime || s.timeFrom || '16:00',
        endTime: s.endTime || s.timeTo || '17:30',
      }))
    }
    return [
      { day: 'sunday', startTime: '16:00', endTime: '17:30' },
      { day: 'tuesday', startTime: '16:00', endTime: '17:30' },
    ]
  })

  const [newDay, setNewDay] = useState('sunday')
  const [newTimeFrom, setNewTimeFrom] = useState('17:00')
  const [newTimeTo, setNewTimeTo] = useState('18:30')
  const [errorMsg, setErrorMsg] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getDayLabel = (dayKey) => {
    if (!dayKey) return ''
    const normalized = dayKey.toString().trim().toLowerCase()
    const found = WEEK_DAYS.find((d) => d.key === normalized || d.ar === dayKey || d.en.toLowerCase() === normalized)
    if (found) {
      return isRtl ? found.ar : found.en
    }
    return dayKey
  }

  const localizedWeekDays = useMemo(() => {
    return WEEK_DAYS.map((d) => ({
      value: d.key,
      label: isRtl ? d.ar : d.en,
    }))
  }, [isRtl])

  const handleAddSlot = () => {
    setErrorMsg('')
    if (newTimeFrom >= newTimeTo) {
      setErrorMsg(t('adminDashboard.groups.scheduleTimeOrderError', 'وقت بداية الحصة يجب أن يكون قبل وقت نهايتها!'))
      return
    }

    const exists = schedule.some(
      (s) => s.day === newDay && s.startTime === newTimeFrom && s.endTime === newTimeTo
    )
    if (exists) {
      setErrorMsg(t('adminDashboard.groups.scheduleDuplicateError', 'هذا الموعد مضاف بالفعل في الجدول!'))
      return
    }

    setSchedule((prev) => [...prev, { day: newDay, startTime: newTimeFrom, endTime: newTimeTo }])
  }

  const handleRemoveSlot = (index) => {
    setSchedule((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e?.preventDefault()
    if (schedule.length === 0) {
      setErrorMsg(t('adminDashboard.groups.scheduleEmptyError', 'يجب إضافة موعد واحد على الأقل في الجدول!'))
      return
    }

    setIsSubmitting(true)
    try {
      await onSave(group.id, schedule)
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer text-slate-500"
            >
              <CloseArrow size={18} />
            </button>
            <div className="text-start">
              <h2 className="text-base font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.groups.editScheduleTitle', 'تعديل جدول الحصص الأسبوعي')}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 truncate max-w-xs" title={group?.name}>
                {group?.name}
              </p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center">
            <Calendar size={18} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* New Slot Pickers */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block text-start">
              {t('adminDashboard.groups.addScheduleSlot', 'إضافة موعد جديد في الجدول')}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 text-start">
                  {t('adminDashboard.groups.day', 'اليوم')}
                </label>
                <DaySelect
                  value={newDay}
                  onChange={setNewDay}
                  options={localizedWeekDays}
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 text-start">
                  {t('adminDashboard.groups.timeFromLabel', 'من الساعة')}
                </label>
                <DaySelect
                  value={newTimeFrom}
                  onChange={setNewTimeFrom}
                  options={TIME_OPTIONS}
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1 text-start">
                  {t('adminDashboard.groups.timeToLabel', 'إلى الساعة')}
                </label>
                <DaySelect
                  value={newTimeTo}
                  onChange={setNewTimeTo}
                  options={TIME_OPTIONS}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              {errorMsg ? (
                <div className="text-[11px] font-semibold text-red-500 flex items-center gap-1">
                  <AlertCircle size={12} />
                  <span>{errorMsg}</span>
                </div>
              ) : <div />}

              <button
                type="button"
                onClick={handleAddSlot}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Plus size={14} />
                <span>{t('adminDashboard.groups.addScheduleButton', 'إضافة موعد')}</span>
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('adminDashboard.groups.currentSchedule', 'مواعيد الحصص المحددة')} ({schedule.length})
              </span>
            </div>

            {schedule.length === 0 ? (
              <div className="py-8 text-center text-slate-400 dark:text-slate-500 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-1">
                <Clock size={24} className="mx-auto opacity-40 mb-1" />
                <p className="text-xs font-medium">{t('adminDashboard.groups.noScheduleMessage', 'لم يتم إضافة أي مواعيد بعد')}</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                {schedule.map((slot, index) => (
                  <div
                    key={`${slot.day}-${slot.startTime}-${index}`}
                    className="flex items-center justify-between p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center text-xs font-bold">
                        <Clock size={15} />
                      </div>
                      <div className="text-start">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
                          {getDayLabel(slot.day)}
                        </span>
                        <span className="text-[11px] text-slate-400 dir-ltr inline-block">
                          {slot.startTime} - {slot.endTime}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveSlot(index)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
                      title={t('common.delete', 'حذف')}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-end gap-3 sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-50"
          >
            {t('common.cancel', 'إلغاء')}
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={schedule.length === 0 || isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>{t('common.saving', 'جاري الحفظ...')}</span>
              </>
            ) : (
              <>
                <Calendar size={14} />
                <span>{t('adminDashboard.groups.saveSchedule', 'حفظ جدول المجموعة')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
