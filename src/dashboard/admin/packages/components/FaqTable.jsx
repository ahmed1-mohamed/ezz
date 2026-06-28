import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function FaqTable({ faqs, onDelete }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.packages.${key}`)

  if (faqs.length === 0) return null

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden">
      <div className="grid grid-cols-[auto_1fr_1fr] bg-[#0f7a6c] text-white text-xs font-bold">
        <div className="px-4 py-3 w-16" />
        <div className="px-4 py-3">{p('faqColQuestion')}</div>
        <div className="px-4 py-3">{p('faqColAnswer')}</div>
      </div>

      <div>
        <AnimatePresence>
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="grid grid-cols-[auto_1fr_1fr] items-center border-b border-slate-100 dark:border-slate-800/60 last:border-0 group hover:bg-slate-50/60 dark:hover:bg-slate-900/40 transition-colors"
            >
              <div className="flex items-center gap-1 px-3 py-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onDelete(faq.id)}
                  aria-label={p('deleteConfirm')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="px-4 py-4 text-slate-700 dark:text-slate-300 text-sm font-medium truncate">
                {faq.question}
              </div>
              <div className="px-4 py-4 text-slate-500 dark:text-slate-400 text-sm truncate">
                {faq.answer || faq.question_en || '—'}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}