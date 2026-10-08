import { COMPLAINT_TYPES } from './complaintTypes'

export default function ComplaintsTypeFilter({ activeType, onSelectType, t }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      {Object.values(COMPLAINT_TYPES).map((type) => {
        const Icon = type.icon
        const isActive = (activeType || '') === type.id

        return (
          <button
            type="button"
            key={type.id || 'all'}
            id={`complaints-type-${type.id || 'all'}`}
            aria-pressed={isActive}
            onClick={() => onSelectType(type.id)}
            className={`bg-white dark:bg-slate-900 p-4 rounded-3xl border transition-all cursor-pointer flex items-center gap-3.5 shadow-soft hover:shadow-md text-start ${
              isActive
                ? type.activeBorder
                : 'border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700'
            }`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${type.bg} ${type.color}`}>
              <Icon size={20} />
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {t(type.labelKey, type.defaultLabel)}
            </span>
          </button>
        )
      })}
    </div>
  )
}
