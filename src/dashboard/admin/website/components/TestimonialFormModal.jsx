import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, User, Image as ImageIcon, MessageSquare } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';

export default function TestimonialFormModal({
  isOpen,
  onClose,
  currentTestimonial,
  setCurrentTestimonial,
  onSubmit
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCurrentTestimonial({
        ...currentTestimonial,
        image: file,
        previewImage: URL.createObjectURL(file)
      });
    }
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                {currentTestimonial.id === null
                  ? t('adminDashboard.website.addTestimonialTitle', 'إضافة رأي جديد')
                  : t('adminDashboard.website.editTestimonialTitle', 'تعديل الرأي')}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {t('adminDashboard.website.testimonialSubtitle', 'أدخل بيانات رأي ولي الأمر')}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-300 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 sm:p-8 overflow-y-auto">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <User size={18} />
                  <h3 className="font-bold text-sm">{t('adminDashboard.website.parentName', 'اسم ولي الأمر')} <span className="text-red-500">*</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t('adminDashboard.website.arabic', 'عربي')}
                    </label>
                    <input
                      type="text"
                      value={currentTestimonial.parentNameAr}
                      onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, parentNameAr: e.target.value })}
                      placeholder="اسم ولي الأمر بالعربية"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t('adminDashboard.website.english', 'إنجليزي')}
                    </label>
                    <input
                      type="text"
                      value={currentTestimonial.parentNameEn}
                      onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, parentNameEn: e.target.value })}
                      placeholder="Parent Name in English"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Review Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <MessageSquare size={18} />
                  <h3 className="font-bold text-sm">{t('adminDashboard.website.testimonialText', 'نص الرأي')} <span className="text-red-500">*</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t('adminDashboard.website.arabic', 'عربي')}
                    </label>
                    <textarea
                      value={currentTestimonial.reviewAr}
                      onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, reviewAr: e.target.value })}
                      placeholder="رأي ولي الأمر بالعربية"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-900 rounded-xl p-3 min-h-[120px] resize-y outline-none border focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all dark:text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t('adminDashboard.website.english', 'إنجليزي')}
                    </label>
                    <textarea
                      value={currentTestimonial.reviewEn}
                      onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, reviewEn: e.target.value })}
                      placeholder="Parent Review in English"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-900 rounded-xl p-3 min-h-[120px] resize-y outline-none border focus:ring-2 focus:ring-[#0f7a6c]/20 focus:border-[#0f7a6c] transition-all dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  {currentTestimonial.previewImage || (currentTestimonial.image && typeof currentTestimonial.image === 'string') ? (
                    <img
                      src={currentTestimonial.previewImage || currentTestimonial.image}
                      alt="Preview"
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
                      <ImageIcon size={24} className="text-slate-400" />
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <ImageIcon size={16} />
                      {t('adminDashboard.website.personalImageOptional', 'صورة شخصية (اختياري)')}
                    </h4>
                    <div className="mt-2 flex items-center gap-3">
                      <label className="cursor-pointer bg-[#0f7a6c]/10 text-[#0f7a6c] hover:bg-[#0f7a6c]/20 px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                        Choose File
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                      <span className="text-xs text-slate-400">
                        {currentTestimonial.image?.name || "No file chosen"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-8 py-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
            <div className="flex gap-3 justify-end w-full">
              <Button
                variant="secondary"
                onClick={onClose}
                className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl text-sm font-bold transition-all"
              >
                {t('common.cancel', 'إلغاء')}
              </Button>
              <Button
                onClick={onSubmit}
                className="px-6 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <Save size={18} />
                {t('common.save', 'حفظ')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
