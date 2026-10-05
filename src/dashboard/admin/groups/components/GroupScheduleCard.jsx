import { useMemo } from 'react'
import { Calendar, Trash2 } from 'lucide-react'
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

export default function GroupScheduleCard({
  schedule,
  newDay,
  setNewDay,
  newTimeFrom,
  setNewTimeFrom,
  newTimeTo,
  setNewTimeTo,
  handleAddSchedule,
  handleRemoveSchedule,
  t,
  isRtl,
  error,
}) {
  const getDayLabel = (dayKey) => {
    if (!dayKey) return ''
    const normalized = dayKey.toString().trim().toLowerCase()
    const found = WEEK_DAYS.find((d) => d.key === normalized || d.ar === dayKey || d.en.toLowerCase() === normalized)
    if (found) {
      return t ? t(`schedule.${found.key}`, isRtl ? found.ar : found.en) : (isRtl ? found.ar : found.en)
    }
    return dayKey
  }

  const localizedWeekDays = useMemo(() => {
    return WEEK_DAYS.map((d) => ({
      value: d.key,
      label: t ? t(`schedule.${d.key}`, isRtl ? d.ar : d.en) : (isRtl ? d.ar : d.en),
    }))
  }, [t, isRtl])

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-3xl border ${error ? 'border-red-300 dark:border-red-900/60 ring-2 ring-red-500/10' : 'border-slate-100 dark:border-slate-800/80'} p-6 shadow-soft space-y-5`}>
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <h3 className="text-base font-bold text-slate-800 dark:text-white text-start">
          {t('adminDashboard.groups.scheduleTitle', 'إنشاء الجدول الدراسي للمجموعة')}
          <span className="text-red-500 ms-1">*</span>
        </h3>
        {error && (
          <span className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-xl">
            {error}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.weeklyDaysLabel', 'أختر أيام الجدول الأسبوعي')}
          </label>
          <DaySelect
            value={newDay}
            onChange={setNewDay}
            options={localizedWeekDays}
          />
        </div>

        <div className="relative">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.timeFromLabel', 'أختر الساعة من')}
          </label>
          <DaySelect
            value={newTimeFrom}
            onChange={setNewTimeFrom}
            options={TIME_OPTIONS}
          />
        </div>

        <div className="relative">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.timeToLabel', 'أختر الساعة إلى')}
          </label>
          <DaySelect
            value={newTimeTo}
            onChange={setNewTimeTo}
            options={TIME_OPTIONS}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleAddSchedule}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/15 active:scale-[0.98] cursor-pointer"
        >
          <Calendar size={16} />
          <span>{t('adminDashboard.groups.addScheduleButton', 'إضافة موعد')}</span>
        </button>
      </div>

      {schedule.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-brand-600 text-white">
              <tr>
                <th className="px-5 py-3 text-start font-semibold">{t('adminDashboard.groups.day', 'اليوم')}</th>
                <th className="px-5 py-3 text-start font-semibold">{t('adminDashboard.groups.hour', 'الساعة')}</th>
                <th className="px-4 py-3 w-10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {schedule.map((slot, index) => {
                const startTime = slot.startTime || slot.timeFrom || ''
                const endTime = slot.endTime || slot.timeTo || ''

                return (
                  <tr key={`${slot.day}-${index}`} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-950/20 transition-colors">
                    <td className="px-5 py-3 text-start font-medium text-slate-700 dark:text-slate-300">
                      {getDayLabel(slot.day)}
                    </td>
                    <td className="px-5 py-3 text-start text-slate-600 dark:text-slate-400 dir-ltr">
                      {startTime} - {endTime}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => handleRemoveSchedule(slot.day, index)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 cursor-pointer"
                        title={t('common.delete', 'حذف')}
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {schedule.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8 text-slate-400 dark:text-slate-500 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
          <Calendar size={28} className="mb-2 opacity-40" />
          <p className="text-sm font-medium">{t('adminDashboard.groups.noScheduleMessage', 'لم يتم إضافة أي مواعيد بعد')}</p>
        </div>
      )}
    </div>
  )
}