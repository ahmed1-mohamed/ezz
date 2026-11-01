import { useState } from 'react'
import { Clock, Plus, Trash2, CalendarDays } from 'lucide-react'
import { toast } from 'react-hot-toast'

const DAYS_OF_WEEK = [
  { key: 'sunday', ar: 'الأحد', en: 'Sunday' },
  { key: 'monday', ar: 'الإثنين', en: 'Monday' },
  { key: 'tuesday', ar: 'الثلاثاء', en: 'Tuesday' },
  { key: 'wednesday', ar: 'الأربعاء', en: 'Wednesday' },
  { key: 'thursday', ar: 'الخميس', en: 'Thursday' },
  { key: 'friday', ar: 'الجمعة', en: 'Friday' },
  { key: 'saturday', ar: 'السبت', en: 'Saturday' },
]

export default function TeacherAvailabilityCard({
  formData = {},
  onChange,
  isRtl = true,
  t
}) {
  const [selectedDay, setSelectedDay] = useState('sunday')
  const [startTime, setStartTime] = useState('16:00')
  const [endTime, setEndTime] = useState('18:00')

  const workingHours = Array.isArray(formData.workingHours)
    ? formData.workingHours
    : (Array.isArray(formData.availability)
        ? formData.availability
        : (Array.isArray(formData.availableHours) ? formData.availableHours : []))

  const handleAddSlot = (e) => {
    e?.preventDefault()
    if (!startTime || !endTime) {
      toast.error(isRtl ? 'الرجاء تحديد وقت البداية والنهاية' : 'Please select start and end time')
      return
    }
    if (startTime >= endTime) {
      toast.error(isRtl ? 'وقت البداية يجب أن يكون قبل وقت النهاية' : 'Start time must be before end time')
      return
    }

    const newSlot = {
      day: selectedDay,
      startTime,
      endTime
    }

    const updated = [...workingHours, newSlot]
    onChange('workingHours', updated)
    onChange('availability', updated)
  }

  const handleRemoveSlot = (indexToRemove) => {
    const updated = workingHours.filter((_, idx) => idx !== indexToRemove)
    onChange('workingHours', updated)
    onChange('availability', updated)
  }

  const getDayLabel = (dayKey) => {
    const found = DAYS_OF_WEEK.find(d => d.key.toLowerCase() === String(dayKey).toLowerCase())
    if (!found) return dayKey
    return isRtl ? found.ar : found.en
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-[#14a693]">
            <Clock size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'مواعيد العمل المتاحة للمعلم' : 'Teacher Available Working Hours'}
            </h2>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
              {isRtl
                ? 'تحديد الفترات الزمنية والأيام المتاحة لتقديم الدروس والحصص'
                : 'Configure available days and time intervals for teaching'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f8faf9] dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'اليوم' : 'Day'}
            </label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-[#005953] text-slate-800 dark:text-slate-100 rounded-xl py-2.5 px-3 outline-none text-xs sm:text-sm font-semibold cursor-pointer"
            >
              {DAYS_OF_WEEK.map((d) => (
                <option key={d.key} value={d.key}>
                  {isRtl ? d.ar : d.en}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'من الساعة' : 'From'}
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-[#005953] text-slate-800 dark:text-slate-100 rounded-xl py-2.5 px-3 outline-none text-xs sm:text-sm font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
              {isRtl ? 'إلى الساعة' : 'To'}
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-[#005953] text-slate-800 dark:text-slate-100 rounded-xl py-2.5 px-3 outline-none text-xs sm:text-sm font-semibold"
            />
          </div>
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={handleAddSlot}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#005953] hover:bg-[#004742] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Plus size={16} />
            <span>{isRtl ? 'إضافة موعد متاح' : 'Add Available Slot'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <CalendarDays size={16} className="text-[#005953]" />
          <span>{isRtl ? 'المواعيد المحددة حالياً' : 'Currently Configured Slots'}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
            {workingHours.length}
          </span>
        </h3>

        {workingHours.length === 0 ? (
          <div className="py-8 text-center bg-slate-50/50 dark:bg-slate-950/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {isRtl
                ? 'لم يتم تحديد مواعيد عمل متاحة للمعلم حتى الآن'
                : 'No working hours configured for this teacher yet'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {workingHours.map((slot, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xs hover:border-[#005953]/30 transition-all"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
                    {getDayLabel(slot.day)}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#005953] dark:text-[#14a693]" dir="ltr">
                    {slot.startTime || '00:00'} - {slot.endTime || '00:00'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveSlot(idx)}
                  className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors cursor-pointer"
                  title={isRtl ? 'حذف هذا الموعد' : 'Remove slot'}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

