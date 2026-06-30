import { motion } from 'framer-motion'
import { Pencil, Trash2, Package, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function PackageCard({ pkg, onEdit, onDelete, explanationLanguages = [] }) {
  const { t, i18n } = useTranslation()
  const p = (key) => t(`adminDashboard.packages.${key}`)

  const accentColor = pkg.color || '#6b7280'
  const cardBg = accentColor === '#d97706'
    ? 'bg-amber-50/60 dark:bg-amber-950/20'
    : accentColor === '#0f7a6c'
      ? 'bg-teal-50/60 dark:bg-teal-950/20'
      : 'bg-slate-50/80 dark:bg-slate-900/50'

  const isRtl = i18n.language.startsWith('ar')
  const langObj = explanationLanguages.find(l => l.id === pkg.sessions_language)
  const languageLabel = langObj 
    ? (isRtl ? (langObj.name?.ar || langObj.name?.en) : (langObj.name?.en || langObj.name?.ar))
    : pkg.sessions_language

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`rounded-3xl border border-white/80 dark:border-slate-700/40 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden ${cardBg}`}
    >
      <div className="p-6 flex flex-col items-center gap-3 flex-1">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mt-1"
          style={{ backgroundColor: accentColor }}
        >
          <Package size={24} className="text-white" />
        </div>

        <div className="text-center">
          <h3 className="font-bold text-slate-800 dark:text-white text-base leading-tight">
            {pkg.name}
          </h3>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
            {pkg.description}
          </p>
        </div>

        <div className="text-center mt-1">
          <span className="text-4xl font-extrabold" style={{ color: accentColor }}>
            {pkg.price}
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            {pkg.currency || 'ريال سعودي'} {p('perMonth')}
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">
            {pkg.sessions_per_month} {p('sessions')} · {languageLabel}
          </p>
        </div>

        <ul className="w-full space-y-1.5 mt-1">
          {(pkg.features || []).map((feat, i) => (
            <li key={i} className="flex items-center justify-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Check size={14} className="shrink-0" style={{ color: accentColor }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 px-4 pb-4">
        <button
          onClick={() => onEdit(pkg)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: accentColor }}
        >
          <Pencil size={14} />
          {p('edit')}
        </button>
        <button
          onClick={() => onDelete(pkg.id)}
          aria-label={p('deleteConfirm')}
          className="p-2.5 rounded-xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-100 dark:border-red-900/30 transition-all shrink-0"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </motion.div>
  )
}