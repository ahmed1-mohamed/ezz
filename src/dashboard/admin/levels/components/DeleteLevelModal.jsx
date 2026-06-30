import { useTranslation } from 'react-i18next'
import { AlertTriangle } from 'lucide-react'
import Spinner from '@/shared/components/Spinner'

export default function DeleteLevelModal({ isOpen, onClose, onConfirm, isDeleting }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl w-full max-w-sm overflow-hidden animate-slideUp border border-slate-100 dark:border-slate-800">
        <div className="p-6 text-center space-y-4">
          <div className="w-16 h-16 bg-rose-50 dark:bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'تأكيد الحذف' : 'Confirm Delete'}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {isRtl
              ? 'هل أنت متأكد من رغبتك في حذف هذا المستوى بالكامل؟ هذا الإجراء لا يمكن التراجع عنه وسيتم حذف جميع الدرجات المرتبطة.'
              : 'Are you sure you want to completely delete this level? This action cannot be undone and all associated grades will be removed.'}
          </p>
        </div>

        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-950/50">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-750 transition-all cursor-pointer"
          >
            {isRtl ? 'إلغاء' : 'Cancel'}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-2xl shadow-md shadow-rose-500/20 transition-all cursor-pointer flex justify-center items-center gap-2"
            disabled={isDeleting}
          >
            {isDeleting ? <Spinner className="w-4 h-4" /> : null}
            <span>{isRtl ? 'تأكيد الحذف' : 'Yes, Delete'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
