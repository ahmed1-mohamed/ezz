import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function TeacherDropdown({ value, onChange, teachers }) {
  const [open, setOpen] = useState(false)
  const selected = teachers.find((t) => t.id === value)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-955 border border-transparent focus:border-brand-500/20 rounded-2xl py-2.5 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900"
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
                : 'text-slate-700 dark:text-slate-350'
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
