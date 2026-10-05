import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function DaySelect({ value, onChange, options = [] }) {
  const [open, setOpen] = useState(false)

  const displayLabel = (() => {
    if (!value) return ''
    const found = options.find((opt) => {
      if (typeof opt === 'object' && opt !== null) {
        return opt.value === value || opt.label === value
      }
      return opt === value
    })
    if (found && typeof found === 'object') {
      return found.label || found.value
    }
    return value
  })()

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-950 border border-transparent rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
      >
        <ChevronDown size={16} className="text-slate-400 shrink-0" />
        <span className="font-medium truncate">{displayLabel}</span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-40 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden max-h-48 overflow-y-auto">
          {options.map((opt, idx) => {
            const optVal = typeof opt === 'object' && opt !== null ? opt.value : opt
            const optLabel = typeof opt === 'object' && opt !== null ? (opt.label || opt.value) : opt
            const isSelected = value === optVal

            return (
              <button
                key={optVal || idx}
                type="button"
                onClick={() => {
                  onChange(optVal)
                  setOpen(false)
                }}
                className={`w-full px-4 py-2.5 flex items-center justify-start hover:bg-slate-50 dark:hover:bg-slate-800 text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-brand-600 font-bold bg-brand-50 dark:bg-brand-900/20'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {optLabel}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
