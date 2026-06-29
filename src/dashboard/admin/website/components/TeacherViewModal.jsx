import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/shared/components/Button.jsx';

export default function TeacherViewModal({
  isOpen,
  onClose,
  teacher,
  isLoading
}) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4" style={{ position: 'fixed', inset: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl p-8"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 end-5 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-150 mb-6 text-start border-b border-slate-100 dark:border-slate-800 pb-3">
            {t('adminDashboard.website.eliteTeacherNotes', 'ملاحظات المعلم المتميز')}
          </h3>

          {isLoading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-[#0f7a6c] animate-spin" />
              <span className="text-sm font-semibold text-slate-450">{t('adminDashboard.website.loadingNotes', 'جاري تحميل الملاحظات...')}</span>
            </div>
          ) : teacher ? (
            <div className="text-center space-y-6">
              {teacher.image ? (
                <img
                  src={teacher.image.startsWith('http') || teacher.image.startsWith('data:') ? teacher.image : `https://manaret-ezz.dramcode.top/${teacher.image}`}
                  alt={teacher.name}
                  className="w-20 h-20 rounded-full object-cover shadow-md mx-auto border-2 border-white"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-450 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-3xl shadow-md mx-auto">
                  {teacher.name ? teacher.name.trim().charAt(0) : 'ف'}
                </div>
              )}

              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-250">
                  {teacher.name}
                </h4>
              </div>

              <div className="text-start bg-slate-50 dark:bg-slate-950/40 p-6 rounded-2xl border border-slate-100/60 dark:border-slate-800/50">
                <p className="text-sm text-slate-600 dark:text-slate-305 leading-7 whitespace-pre-line font-medium text-start">
                  {teacher.review || t('adminDashboard.website.noReviewNotes', 'لا توجد ملاحظات مكتوبة')}
                </p>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400">
              {t('common.errorLoading', 'خطأ في تحميل البيانات')}
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex justify-start">
            <Button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold shadow-sm"
            >
              {t('common.close', 'إغلاق')}
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}