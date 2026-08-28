import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ReschedulePanel({ session, onConfirm, onCancel }) {
  const { t } = useTranslation()
  const today = new Date().toISOString().split('T')[0]
  const [newDate, setNewDate] = useState(today)
  const [newTime, setNewTime] = useState(session.time || '10:00')

  return (
    <div className="bg-[#f3f7f6] dark:bg-slate-900/60 rounded-2xl p-4 space-y-3 border border-brand-100 dark:border-brand-900/30 mt-2 mx-2">
      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 text-start">
        {t('adminDashboard.sessions.rescheduleTitle', {
          defaultValue: `إعادة جدولة ${session.groupName}`,
          name: session.groupName
        })}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 text-start">
            {t('adminDashboard.sessions.chooseNewDate', 'أختر التاريخ الجديد')}
          </label>
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
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 text-start">
            {t('adminDashboard.sessions.chooseTime', 'أختر الساعة')}
          </label>
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
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
        >
          {t('adminDashboard.sessions.confirmReschedule', 'تأكيد الجدولة')}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-350 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          {t('adminDashboard.sessions.cancel', 'إلغاء')}
        </button>
      </div>
    </div>
  )
}
