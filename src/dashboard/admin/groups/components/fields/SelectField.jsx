import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function SelectField({ label, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
      >
        <ChevronDown size={16} className="text-slate-400 shrink-0" />
        <span className={value ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}>
          {value || placeholder}
        </span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 overflow-hidden max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={typeof opt === 'object' ? opt.id : opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false) }}
              className="w-full px-4 py-2.5 flex items-center justify-end hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-705 dark:text-slate-205 text-sm transition-colors cursor-pointer"
            >
              {typeof opt === 'object' ? opt.name : opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
