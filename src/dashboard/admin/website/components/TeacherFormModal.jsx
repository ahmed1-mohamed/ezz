import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X, Search, Image, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TeacherFormModal({
  isOpen,
  onClose,
  currentTeacher,
  setCurrentTeacher,
  onSubmit,
  systemTeachers = []
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen || !currentTeacher) return null;

  const isAdd = currentTeacher.id === null;

  const filteredTeachers = systemTeachers.filter((t) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    const nameStr = typeof t.name === 'object'
      ? ((t.name.ar || '') + ' ' + (t.name.en || '')).toLowerCase()
      : (t.name || '').toLowerCase();
    return nameStr.includes(query) || (t.email || '').toLowerCase().includes(query);
  });

  return createPortal(
    <AnimatePresence>
      {/* Full-screen backdrop */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      {/* Centered content */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4" style={{ position: 'fixed', inset: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden"
        >
          {/* Decorative top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f7a6c] via-[#14b8a6] to-[#0f7a6c]" />

          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {isAdd
                    ? (isRtl ? 'إضافة معلم متميز' : 'Add Elite Teacher')
                    : (isRtl ? 'تعديل المعلم المتميز' : 'Edit Elite Teacher')}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {isRtl ? 'اختر معلماً من القائمة' : 'Select a teacher from the list'}
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

            <form onSubmit={onSubmit} className="space-y-5 text-start">
              {/* Search Input */}
              <div className="relative">
                <span className="absolute inset-y-0 start-0 flex items-center ps-4 text-slate-400">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRtl ? 'ابحث باسم المعلم أو البريد...' : 'Search by teacher name or email...'}
                  className="w-full ps-11 pe-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  {isRtl ? 'المعلمون المتاحون' : 'Available Teachers'} ({filteredTeachers.length})
                </h4>

                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                  {filteredTeachers.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm font-medium">
                      {isRtl ? 'لا يوجد معلمون مطابقون للبحث' : 'No teachers matching search'}
                    </div>
                  ) : (
                    filteredTeachers.map((t, index) => {
                      const teacherIdVal = t.id || t._id || t.teacher_id || t.user_id || `teacher-${index}`;
                      const isSelected = String(currentTeacher.teacherId) === String(teacherIdVal);
                      const teacherNameStr = typeof t.name === 'object'
                        ? (isRtl ? t.name.ar || t.name.en : t.name.en || t.name.ar)
                        : t.name;
                      const initial = teacherNameStr?.trim()?.charAt(0) || 'م';

                      return (
                        <div
                          key={teacherIdVal}
                          onClick={() => {
                            setCurrentTeacher({
                              ...currentTeacher,
                              teacherId: teacherIdVal,
                              name: typeof t.name === 'object' && t.name !== null ? t.name.ar || '' : t.name || '',
                              nameEn: typeof t.name === 'object' && t.name !== null ? t.name.en || '' : t.nameEn || t.name || '',
                              image: t.image || t.avatar || '',
                            });
                          }}
                          className={`flex gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${isSelected
                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                            : 'border-slate-100 dark:border-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30'
                            }`}
                        >
                          {t.image || t.avatar ? (
                            <img
                              src={t.image || t.avatar}
                              alt={teacherNameStr}
                              className="flex-shrink-0 w-12 h-12 rounded-full object-cover"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-lg font-bold">
                              {initial}
                            </div>
                          )}

                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                              {teacherNameStr}
                            </h5>
                            <p className="text-xs text-slate-400 truncate mt-0.5">
                              {t.email || t.phone || ''}
                            </p>
                            {t.subject && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-[#0f7a6c]/10 text-[#0f7a6c] text-[10px] font-bold rounded-full">
                                {typeof t.subject === 'object' ? (isRtl ? t.subject.ar : t.subject.en) : t.subject}
                              </span>
                            )}
                          </div>

                          {isSelected && (
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0f7a6c] flex items-center justify-center self-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {currentTeacher.teacherId && (
                <div className="space-y-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {currentTeacher.image && (
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          src={currentTeacher.image}
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
                      value={currentTeacher.image || ''}
                      onChange={(e) => setCurrentTeacher({ ...currentTeacher, image: e.target.value })}
                      placeholder="https://example.com/teacher-photo.jpg"
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                      <User size={12} />
                      {isRtl ? 'اسم المعلم' : 'Teacher Name'}
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
                          value={currentTeacher.name || ''}
                          onChange={(e) => setCurrentTeacher({ ...currentTeacher, name: e.target.value })}
                          placeholder="مثال: معلم ١"
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
                          value={currentTeacher.nameEn || ''}
                          onChange={(e) => setCurrentTeacher({ ...currentTeacher, nameEn: e.target.value })}
                          placeholder="e.g. Teacher 1"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              )}

              <div className="flex justify-start gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors"
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={!currentTeacher.teacherId || !currentTeacher.name?.trim() || !currentTeacher.nameEn?.trim() || !currentTeacher.image?.trim()}
                  className="px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  {isAdd ? (isRtl ? 'إضافة' : 'Add') : (isRtl ? 'حفظ التعديلات' : 'Save Changes')}
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