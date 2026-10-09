import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function SelectField({ label, value, onChange, options = [], placeholder, isRtl, error, required }) {
  const [open, setOpen] = useState(false)

  // Find label if value is an id or value
  const displayLabel = (() => {
    if (!value) return placeholder
    const found = options.find((opt) => {
      if (typeof opt === 'object' && opt !== null) {
        return opt.value === value || opt.id === value || opt.label === value || opt.name === value
      }
      return opt === value
    })
    if (found && typeof found === 'object') {
      return found.label || found.name || found.value
    }
    return value
  })()

  return (
    <div className="relative">
      <label className={`block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 ${isRtl ? 'text-end' : 'text-start'}`}>
        {label}
        {required && <span className="text-red-500 ms-0.5">*</span>}
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-950 border ${
          error ? 'border-red-500 bg-red-50/20' : 'border-transparent focus:border-brand-500/20'
        } rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer`}
      >
        <ChevronDown size={16} className="text-slate-400 shrink-0" />
        <span className={value ? 'text-slate-800 dark:text-slate-100 font-medium truncate' : 'text-slate-400 truncate'}>
          {displayLabel}
        </span>
      </button>
      {error && <span className="text-xs text-red-500 mt-1 block text-start">{error}</span>}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-40 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden max-h-48 overflow-y-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-xs text-slate-400 text-center">
              {isRtl ? 'لا توجد خيارات متاحة' : 'No options available'}
            </div>
          ) : (
            options.map((opt, idx) => {
              const optValue = typeof opt === 'object' && opt !== null ? (opt.value ?? opt.id ?? opt) : opt
              const optLabel = typeof opt === 'object' && opt !== null ? (opt.label ?? opt.name ?? opt.value) : opt
              const isSelected = value === optValue || value === optLabel

              return (
                <button
                  key={typeof opt === 'object' && opt !== null ? (opt.id ?? opt.value ?? idx) : opt}
                  type="button"
                  onClick={() => {
                    onChange(optValue)
                    setOpen(false)
                  }}
                  className={`w-full px-4 py-2.5 flex items-center justify-start text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-brand-600 font-bold bg-brand-50 dark:bg-brand-900/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {optLabel}
                </button>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
