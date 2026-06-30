import { Plus, Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function PackageFeaturesField({
  features,
  featuresEn,
  onAddFeature,
  onRemoveFeature,
  onFeatureChange,
  onFeatureEnChange,
}) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.packages.${key}`)

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={onAddFeature}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0f7a6c]/10 text-[#0f7a6c] rounded-xl text-xs font-semibold hover:bg-[#0f7a6c]/20 transition-colors"
        >
          <Plus size={13} />
          {p('addFeature')}
        </button>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {p('features')}
        </label>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2 px-1">
        <div className="text-xs font-semibold text-slate-400">{p('featuresEn')}</div>
        <div className="text-xs font-semibold text-slate-400 text-end">{p('featuresAr')}</div>
      </div>

      <div className="space-y-2">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onRemoveFeature(i)}
              className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shrink-0"
              aria-label={p('delete')}
            >
              <Trash2 size={13} />
            </button>
            <input
              value={featuresEn[i] || ''}
              onChange={(e) => onFeatureEnChange(i, e.target.value)}
              placeholder={`${p('featureEnPlaceholder')} ${i + 1}`}
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-3 py-2 text-xs outline-none placeholder-slate-400 text-slate-800 dark:text-slate-100"
            />
            <input
              value={feat}
              onChange={(e) => onFeatureChange(i, e.target.value)}
              placeholder={`${p('featureArPlaceholder')} ${i + 1}`}
              className="flex-1 bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-3 py-2 text-xs outline-none placeholder-slate-400 text-end text-slate-800 dark:text-slate-100"
            />
          </div>
        ))}
      </div>

      {features.filter(Boolean).length > 0 && (
        <div className="mt-3 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-2 bg-[#0f7a6c] text-white text-xs font-semibold">
            <div className="px-4 py-2.5">{p('featuresEn')}</div>
            <div className="px-4 py-2.5 text-end">{p('featuresAr')}</div>
          </div>
          {features.filter(Boolean).map((f, i) => (
            <div key={i} className="grid grid-cols-2 border-t border-slate-100 dark:border-slate-800 text-sm">
              <div className="px-4 py-2.5 text-slate-500 dark:text-slate-400">
                {featuresEn[i] || '—'}
              </div>
              <div className="px-4 py-2.5 text-slate-700 dark:text-slate-300 text-end">
                {f}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}