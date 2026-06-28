import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function DaySelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-955 border border-transparent rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-101 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
      >
        <ChevronDown size={16} className="text-slate-400 shrink-0" />
        <span>{value}</span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden max-h-44 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false) }}
              className={`w-full px-4 py-2.5 flex items-center justify-end hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-colors cursor-pointer ${value === opt
                ? 'text-brand-600 font-semibold bg-brand-50 dark:bg-brand-950/20'
                : 'text-slate-700 dark:text-slate-300'
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
