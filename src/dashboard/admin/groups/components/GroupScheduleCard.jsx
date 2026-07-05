import { useMemo } from 'react'
import { Calendar, Trash2 } from 'lucide-react'
import DaySelect from './fields/DaySelect'

const WEEK_DAYS = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']
const TIME_OPTIONS = [
  '12 ص', '1 ص', '2 ص', '3 ص', '4 ص', '5 ص', '6 ص',
  '7 ص', '8 ص', '9 ص', '10 ص', '11 ص',
  '12 م', '1 م', '2 م', '3 م', '4 م', '5 م',
  '6 م', '7 م', '8 م', '9 م', '10 م', '11 م',
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
  t
}) {

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

  const localizedWeekDays = useMemo(() => {
    return WEEK_DAYS.map(day => ({
      value: day,
      label: getDayLabel(day)
    }))
  }, [t])

  const localizedTimeOptions = useMemo(() => {
    return TIME_OPTIONS.map(time => ({
      value: time,
      label: getTimeLabel(time)
    }))
  }, [t])

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
      <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-start">
        {t('adminDashboard.groups.scheduleTitle', 'إنشاء الجدول الدراسي للمجموعة')}
      </h3>

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
            options={localizedTimeOptions}
          />
        </div>

        <div className="relative">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
            {t('adminDashboard.groups.timeToLabel', 'أختر الساعة إلى')}
          </label>
          <DaySelect
            value={newTimeTo}
            onChange={setNewTimeTo}
            options={localizedTimeOptions}
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
              {schedule.map((slot) => (
                <tr key={slot.day} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-950/20 transition-colors">
                  <td className="px-5 py-3 text-start font-medium text-slate-700 dark:text-slate-300">
                    {getDayLabel(slot.day)}
                  </td>
                  <td className="px-5 py-3 text-start text-slate-600 dark:text-slate-400">
                    {getTimeLabel(slot.timeFrom)} - {getTimeLabel(slot.timeTo)}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => handleRemoveSchedule(slot.day)}
                      className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors rounded-lg hover:bg-rose-50 dark:hover:bg-rose-955/20 cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
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