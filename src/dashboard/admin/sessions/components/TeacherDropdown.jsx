import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

export default function TeacherDropdown({ value, onChange, teachers = [] }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n?.language?.startsWith('ar') ?? true
  const [open, setOpen] = useState(false)
  const safeTeachers = Array.isArray(teachers) ? teachers : []
  const selected = safeTeachers.find((t) => (t.id || t._id) === value)

  const formatTeacherName = (item) => {
    if (!item) return ''
    const val = item.name ?? item.displayName
    if (typeof val === 'string') return val
    if (typeof val === 'object' && val !== null) {
      return (isRtl ? val.ar || val.en : val.en || val.ar) || ''
    }
    return String(val || '')
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 rounded-2xl py-2.5 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
      >
        <ChevronDown size={16} className="text-slate-400 shrink-0" />
        <span className={selected ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}>
          {selected ? formatTeacherName(selected) : t('adminDashboard.sessions.chooseSubstituteTeacher', 'أختر المدرس البديل')}
        </span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden max-h-48 overflow-y-auto">
          {safeTeachers.map((tItem) => (
            <button
              key={tItem.id || tItem._id}
              type="button"
              onClick={() => { onChange(tItem.id || tItem._id); setOpen(false) }}
              className={`w-full px-4 py-2.5 flex items-center justify-start hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${value === (tItem.id || tItem._id)
                ? 'text-brand-600 font-semibold bg-brand-50 dark:bg-brand-950/20'
                : 'text-slate-700 dark:text-slate-350'
                }`}
            >
              {formatTeacherName(tItem)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
