import { COMPLAINT_TYPES } from './complaintTypes'

export default function ComplaintsTypeFilter({ activeType, onSelectType, t }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {Object.values(COMPLAINT_TYPES).map((type) => {
        const Icon = type.icon
        const isActive = activeType === type.id

        return (
          <button
            type="button"
            key={type.id}
            id={`complaints-type-${type.id}`}
            aria-pressed={isActive}
            onClick={() => onSelectType(isActive ? '' : type.id)}
            className={`bg-white dark:bg-slate-900 p-4 rounded-3xl border transition-all cursor-pointer flex items-center gap-4 shadow-soft hover:shadow-md text-start ${isActive ? type.activeBorder : 'border-slate-100 dark:border-slate-800'}`}
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${type.bg} ${type.color}`}>
              <Icon size={22} />
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
