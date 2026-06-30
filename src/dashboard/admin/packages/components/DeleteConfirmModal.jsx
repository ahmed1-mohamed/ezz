import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, label }) {
  const { t } = useTranslation()
  const p = (key) => t(`adminDashboard.packages.${key}`)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 w-full max-w-sm text-center"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-4">
              <Trash2 size={24} className="text-red-500" />
            </div>
            <h3 className="font-bold text-slate-800 dark:text-white mb-2">{p('deleteTitle')}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
              {p('deleteMessage')} {label}؟
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                {p('cancel')}
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
              >
                {p('deleteConfirm')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}