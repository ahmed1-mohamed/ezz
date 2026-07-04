import { useTranslation } from 'react-i18next'
import { Globe, Trash2, Pencil } from 'lucide-react'

export default function ExplanationLanguageCard({
  langItem,
  onEdit,
  onDelete
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const displayName = typeof langItem.name === 'object'
    ? (isRtl ? langItem.name.ar : langItem.name.en)
    : langItem.name

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-soft transition-all">
      <div className="flex items-center justify-between p-6 select-none">
        {/* Left Side: Actions (Delete, Edit) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onDelete(langItem)}
              className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-955/20 rounded-lg transition-all cursor-pointer"
              title={isRtl ? 'حذف اللغة' : 'Delete language'}
            >
              <Trash2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => onEdit(langItem)}
              className="p-1.5 text-slate-400 hover:text-[#005953] hover:bg-slate-50 dark:hover:bg-slate-850 rounded-lg transition-all cursor-pointer"
              title={isRtl ? 'تعديل البيانات' : 'Edit language'}
            >
              <Pencil size={16} />
            </button>
          </div>
        </div>

        {/* Right Side Header Detail */}
        <div className="flex items-center gap-4">
          <div className="text-end">
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {displayName}
            </h3>
          </div>

          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-955/10 rounded-2xl flex items-center justify-center text-[#005953] shrink-0 shadow-sm border border-emerald-100/50">
            <Globe size={22} />
          </div>
        </div>
      </div>
    </div>
  )
}
