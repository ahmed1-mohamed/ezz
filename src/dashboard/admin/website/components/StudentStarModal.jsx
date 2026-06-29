import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X, Image, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StudentStarModal({
  isOpen,
  onClose,
  currentStar,
  setCurrentStar,
  onSubmit
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  if (!isOpen || !currentStar) return null;

  const isAdd = currentStar.id === null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4" style={{ position: 'fixed', inset: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f7a6c] via-[#14b8a6] to-[#0f7a6c]" />

          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {isAdd
                    ? (isRtl ? 'إضافة طالب متميز' : 'Add Excellence Student')
                    : (isRtl ? 'تعديل طالب متميز' : 'Edit Excellence Student')}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {isRtl ? 'أدخل بيانات الطالب يدوياً' : 'Enter student data manually'}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              {currentStar.image && (
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={currentStar.image}
                      alt="preview"
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#0f7a6c]/20 shadow-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute -bottom-1 -end-1 w-6 h-6 bg-[#0f7a6c] rounded-full flex items-center justify-center">
                      <Image size={12} className="text-white" />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  <Image size={12} />
                  {isRtl ? 'رابط الصورة' : 'Image URL'}
                </label>
                <input
                  type="text"
                  required
                  value={currentStar.image || ''}
                  onChange={(e) => setCurrentStar({ ...currentStar, image: e.target.value })}
                  placeholder="https://example.com/student-photo.jpg"
                  className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  <User size={12} />
                  {isRtl ? 'اسم الطالب' : 'Student Name'}
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 block">
                      {isRtl ? 'عربي' : 'Arabic'}
                    </span>
                    <input
                      type="text"
                      required
                      dir="rtl"
                      value={currentStar.name || ''}
                      onChange={(e) => setCurrentStar({ ...currentStar, name: e.target.value })}
                      placeholder="مثال: طالب ١"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 block">
                      {isRtl ? 'إنجليزي' : 'English'}
                    </span>
                    <input
                      type="text"
                      required
                      dir="ltr"
                      value={currentStar.nameEn || ''}
                      onChange={(e) => setCurrentStar({ ...currentStar, nameEn: e.target.value })}
                      placeholder="e.g. Student 1"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  type="submit"
                  disabled={!currentStar.image?.trim() || !currentStar.name?.trim() || !currentStar.nameEn?.trim()}
                  className="px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  {isAdd ? (isRtl ? 'إضافة' : 'Add') : (isRtl ? 'حفظ التعديلات' : 'Save Changes')}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors"
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>

              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}