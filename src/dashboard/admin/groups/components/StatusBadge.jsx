import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function StatusBadge({ status, onChangeStatus, t }) {
  const [open, setOpen] = useState(false)
  const map = {
    'نشط': 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800',
    'active': 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800',
    'متوقف': 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    'suspended': 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    'مكتمل': 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
    'completed': 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
  }

  const getStatusLabel = (st) => {
    if (st === 'نشط' || st === 'active') return t ? t('adminDashboard.groups.status.active', 'نشط') : 'نشط'
    if (st === 'متوقف' || st === 'suspended') return t ? t('adminDashboard.groups.status.suspended', 'متوقف') : 'متوقف'
    if (st === 'مكتمل' || st === 'completed') return t ? t('adminDashboard.groups.status.completed', 'مكتمل') : 'مكتمل'
    return st || ''
  }

  if (!onChangeStatus) {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${map[status] || map['completed']}`}>
        {getStatusLabel(status)}
      </span>
    )
  }

  const options = [
    { value: 'active', label: t ? t('adminDashboard.groups.status.active', 'نشط') : 'نشط', dot: 'bg-brand-500' },
    { value: 'suspended', label: t ? t('adminDashboard.groups.status.suspended', 'متوقف') : 'متوقف', dot: 'bg-amber-500' },
    { value: 'completed', label: t ? t('adminDashboard.groups.status.completed', 'مكتمل') : 'مكتمل', dot: 'bg-slate-400' },
  ]

  return (
    <div className="relative inline-block text-start">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setOpen((o) => !o)
        }}
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border transition-all cursor-pointer hover:shadow-xs ${map[status] || map['completed']}`}
        title={t ? t('adminDashboard.groups.changeStatus', 'انقر لتغيير الحالة') : 'انقر لتغيير الحالة'}
      >
        <span>{getStatusLabel(status)}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
          />
          <div
            className="absolute left-0 right-auto top-full mt-1.5 z-50 min-w-[120px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-1.5 overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  setOpen(false)
                  onChangeStatus(opt.value)
                }}
                className={`w-full px-3 py-1.5 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                  (status === opt.value || (opt.value === 'active' && status === 'نشط') || (opt.value === 'suspended' && status === 'متوقف') || (opt.value === 'completed' && status === 'مكتمل'))
                    ? 'font-bold text-brand-600 dark:text-brand-400 bg-brand-50/50 dark:bg-brand-900/10'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${opt.dot}`} />
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
