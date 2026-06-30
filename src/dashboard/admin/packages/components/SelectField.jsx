import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function SelectField({ id, label, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)

  const selectedLabel = (() => {
    if (!value && value !== 0) return placeholder;
    const match = options.find(o => typeof o === 'object' ? o.value === value : o === value);
    return match ? (typeof match === 'object' ? match.label : match) : value;
  })();

  return (
    <div id={id} className="relative" tabIndex={-1}>
      {label && (
        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 text-end">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f3f7f6] dark:bg-slate-900/60 border border-transparent rounded-xl py-2.5 px-4 text-sm text-slate-800 dark:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900"
      >
        <ChevronDown size={15} className="text-slate-400 shrink-0" />
        <span className={value || value === 0 ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}>
          {selectedLabel}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute z-50 end-0 mt-1 w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((opt) => {
              const isObj = typeof opt === 'object' && opt !== null;
              const val = isObj ? opt.value : opt;
              const lbl = isObj ? opt.label : opt;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => { onChange(val); setOpen(false) }}
                  className="w-full text-end px-4 py-2.5 text-sm hover:bg-[#f3f7f6] dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  {lbl}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}