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
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {p('features')}
        </label>
        <button
          type="button"
          onClick={onAddFeature}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0f7a6c]/10 text-[#0f7a6c] rounded-xl text-xs font-semibold hover:bg-[#0f7a6c]/20 transition-colors"
        >
          <Plus size={13} />
          {p('addFeature')}
        </button>
      </div>

      <div className="grid grid-cols-[1fr_1fr_auto] gap-2 mb-2 px-1 items-center">
        <div className="text-xs font-semibold text-slate-400 text-start">{p('featuresAr')}</div>
        <div className="text-xs font-semibold text-slate-400 text-start">{p('featuresEn')}</div>
        <div className="w-7"></div>
      </div>

      <div className="space-y-2">
        {features.map((feat, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_auto] items-center gap-2">
            <input
              value={feat}
              onChange={(e) => onFeatureChange(i, e.target.value)}
              placeholder={`${p('featureArPlaceholder')} ${i + 1}`}
              dir="rtl"
              className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-3 py-2 text-xs outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800/60"
            />
            <input
              value={featuresEn[i] || ''}
              onChange={(e) => onFeatureEnChange(i, e.target.value)}
              placeholder={`${p('featureEnPlaceholder')} ${i + 1}`}
              dir="ltr"
              className="w-full bg-[#f3f7f6] dark:bg-slate-900/60 rounded-xl px-3 py-2 text-xs outline-none placeholder-slate-400 text-start text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800/60"
            />
            <button
              type="button"
              onClick={() => onRemoveFeature(i)}
              className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shrink-0"
              aria-label={p('delete')}
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}
      </div>

      {features.filter(Boolean).length > 0 && (
        <div className="mt-3 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-2 bg-[#0f7a6c] text-white text-xs font-semibold">
            <div className="px-4 py-2.5 text-start">{p('featuresAr')}</div>
            <div className="px-4 py-2.5 text-start">{p('featuresEn')}</div>
          </div>
          {features.filter(Boolean).map((f, i) => (
            <div key={i} className="grid grid-cols-2 border-t border-slate-100 dark:border-slate-800 text-sm">
              <div className="px-4 py-2.5 text-slate-700 dark:text-slate-300 text-start" dir="rtl">
                {f}
              </div>
              <div className="px-4 py-2.5 text-slate-500 dark:text-slate-400 text-start" dir="ltr">
                {featuresEn[i] || '—'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}