import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/shared/components/Button.jsx';

export default function StarViewModal({
  isOpen,
  onClose,
  currentStar
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  if (!isOpen || !currentStar) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4" style={{ position: 'fixed', inset: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl p-8 text-center"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 end-5 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>

          <div className="w-20 h-20 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-3xl shadow-md mx-auto mb-5">
            {currentStar.name ? currentStar.name.trim().charAt(0) : 'أ'}
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-150 mb-2">
            {isRtl ? currentStar.name : currentStar.nameEn}
          </h3>
          <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-6">
            {t('adminDashboard.website.age', { defaultValue: `العمر: {{age}} سنة`, age: currentStar.age })}
          </p>

          <div className="space-y-4 text-start bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-100/60 dark:border-slate-800/50 mb-6">
            <div className="flex justify-between gap-4">
              <span className="text-xs font-bold text-slate-400 shrink-0">{t('adminDashboard.website.academicLevel', 'المستوى الدراسي:')}</span>
              <span className="text-sm font-bold text-[#0f7a6c] text-end">{isRtl ? currentStar.level : currentStar.levelEn}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-xs font-bold text-slate-400 shrink-0">{t('adminDashboard.website.learningGroup', 'المجموعة التعليمية:')}</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-350 text-end">{isRtl ? currentStar.groupName : currentStar.groupNameEn}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-xs font-bold text-slate-400 shrink-0">{t('adminDashboard.website.parentGuardian', 'ولي الأمر:')}</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-350 text-end">{isRtl ? currentStar.parentName : currentStar.parentNameEn}</span>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full py-3 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold shadow-sm"
          >
            {t('common.close', 'إغلاق النافذة')}
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}