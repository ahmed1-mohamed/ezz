import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';

const studentSchema = z.object({
  studentId: z.string().min(1, 'يجب اختيار طالب من القائمة')
});

const collectAllStudentIds = (obj) => {
  if (!obj) return new Set();
  const ids = new Set();
  const add = (v) => { if (v !== undefined && v !== null && String(v).trim()) ids.add(String(v).trim()); };

  add(obj.id);
  add(obj._id);
  add(obj.student_id);
  add(obj.studentId);
  add(obj.user_id);
  add(obj.userId);

  if (obj.student && typeof obj.student === 'object') {
    add(obj.student.id);
    add(obj.student._id);
    add(obj.student.student_id);
    add(obj.student.user_id);
  } else if (typeof obj.student === 'string') {
    add(obj.student);
  }

  if (obj.user && typeof obj.user === 'object') {
    add(obj.user.id);
    add(obj.user._id);
  }

  return ids;
};

const normalizeName = (name) => {
  if (!name) return '';
  if (typeof name === 'string') return name.trim().toLowerCase();
  if (typeof name === 'object') {
    return [name.ar, name.en].filter(Boolean).map(n => n.trim().toLowerCase()).join(' ');
  }
  return '';
};

export default function StudentStarModal({
  isOpen,
  onClose,
  currentStar,
  setCurrentStar,
  onSubmit,
  systemStudents = [],
  stars = []
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [searchQuery, setSearchQuery] = useState('');
  const [errors, setErrors] = useState({});
  const [showStudentSearch, setShowStudentSearch] = useState(false);

  const isAdd = !currentStar?.id;

  const originalStudentName = useMemo(() => {
    if (!currentStar?.studentId) return { ar: currentStar?.name || '', en: currentStar?.nameEn || '' };
    const sysS = systemStudents.find(s => {
      const sIds = collectAllStudentIds(s);
      return sIds.has(String(currentStar.studentId));
    });
    if (sysS) {
      const arName = typeof sysS.name === 'object' ? sysS.name?.ar : sysS.name;
      const enName = typeof sysS.name === 'object' ? sysS.name?.en : (sysS.nameEn || sysS.name);
      return { ar: arName || '', en: enName || '' };
    }
    return { ar: currentStar?.name || '', en: currentStar?.nameEn || '' };
  }, [currentStar?.studentId, systemStudents]);

  if (!isOpen || !currentStar) return null;

  // Filter available students from the system:
  // In Add mode: Exclude any system student who is already in `stars`
  // In Edit mode: Allow the student matching `currentStar.studentId`, but exclude other featured students
  const filteredStudents = systemStudents.filter((sysS) => {
    const sysIds = collectAllStudentIds(sysS);
    const sysEmail = (sysS.email || sysS.user?.email || '').trim().toLowerCase();
    const sysName = normalizeName(sysS.name);

    const isMatchedInStars = stars.some(star => {
      // If in edit mode, skip the star currently being edited
      if (!isAdd && (star.id === currentStar.id || star._id === currentStar.id)) {
        return false;
      }

      const starIds = collectAllStudentIds(star);
      for (const id of sysIds) {
        if (starIds.has(id)) return true;
      }

      const starEmail = (star.email || star.student?.email || '').trim().toLowerCase();
      if (sysEmail && starEmail && sysEmail === starEmail) return true;

      const starName = normalizeName(star.name || star.nameEn || star.student?.name);
      if (sysName && starName && sysName === starName) return true;

      return false;
    });

    if (isMatchedInStars) return false;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const nameStr = typeof sysS.name === 'object'
      ? ((sysS.name?.ar || '') + ' ' + (sysS.name?.en || '')).toLowerCase()
      : (sysS.name || '').toLowerCase();
    return nameStr.includes(query) || sysEmail.includes(query);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const result = studentSchema.safeParse(currentStar);
    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach(issue => {
        formatted[issue.path[0]] = isRtl ? issue.message : 'You must select a student';
      });
      setErrors(formatted);
      return;
    }
    setErrors({});
    onSubmit(e);
  };

  return createPortal(
    <AnimatePresence>
      <div key="student-modal-backdrop" className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      <div key="student-modal-wrapper" className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ position: 'fixed', inset: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#0f7a6c] via-[#14b8a6] to-[#0f7a6c]" />

          <div className="p-5 sm:p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {isAdd
                    ? t('adminDashboard.website.addStar', 'إضافة طالب متميز')
                    : t('adminDashboard.website.editStar', 'تعديل بيانات الطالب المتميز')}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {isAdd
                    ? t('adminDashboard.website.selectStudentSubtitle', 'اختر طالباً ثم استكمل بيانات التميز')
                    : t('adminDashboard.website.editStudentSubtitle', 'قم بتعديل بيانات الطالب والمستوى والمعلومات الأكاديمية')}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 text-start">
               {currentStar.studentId ? (
                <div className="p-4 bg-[#e9f6f3]/60 dark:bg-[#0f7a6c]/10 border border-[#0f7a6c]/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <label className="relative cursor-pointer group">
                      {currentStar.image ? (
                        <img
                          src={currentStar.image}
                          alt="Selected Preview"
                          className="w-12 h-12 rounded-full object-cover border border-[#0f7a6c]/30 shadow-sm"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-lg font-bold shadow-sm">
                          {(originalStudentName.ar || originalStudentName.en || currentStar.name)?.trim()?.charAt(0) || 'ط'}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const url = URL.createObjectURL(file);
                            setCurrentStar({ ...currentStar, imageFile: file, image: url });
                          }
                        }}
                      />
                    </label>
                    <div>
                      <span className="text-[11px] font-extrabold text-[#0f7a6c] dark:text-emerald-400 uppercase tracking-wider block">
                        {isRtl ? 'الطالب المختار من النظام:' : 'Selected System Student:'}
                      </span>
                      <h5 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                        {isRtl
                          ? (originalStudentName.ar || originalStudentName.en || currentStar.name)
                          : (originalStudentName.en || originalStudentName.ar || currentStar.nameEn)}
                      </h5>
                    </div>
                  </div>

                  {isAdd && (
                    <button
                      type="button"
                      onClick={() => setShowStudentSearch(!showStudentSearch)}
                      className="px-3.5 py-1.5 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:bg-[#0f7a6c]/10 rounded-xl transition-colors cursor-pointer border border-[#0f7a6c]/20"
                    >
                      {showStudentSearch
                        ? (isRtl ? 'إغلاق البحث' : 'Close Search')
                        : (isRtl ? 'تغيير الطالب' : 'Change Student')}
                    </button>
                  )}
                </div>
              ) : null}

               {isAdd && (showStudentSearch || !currentStar.studentId) && (
                <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-4 animate-fadeIn">
                  <div className="relative">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-4 text-slate-400">
                      <Search size={18} />
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('adminDashboard.website.searchStudent', 'ابحث باسم الطالب أو البريد...')}
                      className="w-full ps-11 pe-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] outline-none text-slate-800 dark:text-slate-200 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2.5">
                      {t('adminDashboard.website.availableStudents', 'الطلاب المتاحون')} ({filteredStudents.length})
                    </h4>

                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {filteredStudents.length === 0 ? (
                        <div className="text-center py-6 text-slate-400 dark:text-slate-500 text-xs font-medium">
                          {t('adminDashboard.website.noMatchingStudents', 'لا يوجد طلاب متاحون للإضافة')}
                        </div>
                      ) : (
                        filteredStudents.map((sItem) => {
                          const studentIdVal = String(sItem.id || sItem._id || sItem.student_id || sItem.user_id || '');
                          const isSelected = String(currentStar.studentId) === studentIdVal;
                          const studentNameStr = typeof sItem.name === 'object'
                            ? (isRtl ? sItem.name.ar || sItem.name.en : sItem.name.en || sItem.name.ar)
                            : sItem.name;
                          const initial = studentNameStr?.trim()?.charAt(0) || 'ط';
                          const studentPhoto = sItem.image || sItem.avatar || sItem.user?.photoUrl || '';

                          return (
                            <div
                              key={studentIdVal}
                              onClick={() => {
                                const arName = typeof sItem.name === 'object' && sItem.name !== null ? sItem.name.ar || '' : sItem.name || '';
                                const enName = typeof sItem.name === 'object' && sItem.name !== null ? sItem.name.en || '' : sItem.nameEn || sItem.name || '';
                                setCurrentStar({
                                  ...currentStar,
                                  studentId: studentIdVal,
                                  name: arName,
                                  nameEn: enName,
                                  image: studentPhoto,
                                  email: sItem.email || sItem.user?.email || '',
                                  phone: sItem.phone || sItem.user?.phone || '',
                                  country: sItem.country || sItem.user?.country || ''
                                });
                                setShowStudentSearch(false);
                                if (errors.studentId) setErrors({ ...errors, studentId: null });
                              }}
                              className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${isSelected
                                ? 'border-[#0f7a6c] bg-[#0f7a6c]/10'
                                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                                }`}
                            >
                              {studentPhoto ? (
                                <img
                                  src={studentPhoto}
                                  alt={studentNameStr}
                                  className="w-9 h-9 rounded-full object-cover shrink-0"
                                  onError={(e) => { e.target.style.display = 'none'; }}
                                />
                              ) : (
                                <div className="w-9 h-9 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-xs font-bold shrink-0">
                                  {initial}
                                </div>
                              )}

                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-slate-800 dark:text-slate-100 text-xs">
                                  {studentNameStr}
                                </h5>
                                <p className="text-[11px] text-slate-400 truncate">
                                  {sItem.email || sItem.user?.email || ''}
                                </p>
                              </div>

                              {isSelected && (
                                <div className="w-4 h-4 rounded-full bg-[#0f7a6c] flex items-center justify-center shrink-0">
                                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                </div>
              )}


              {errors.studentId && <p className="text-xs text-red-500 font-medium text-center">{errors.studentId}</p>}

              <div className="flex flex-col sm:flex-row justify-start gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="submit"
                  disabled={!currentStar.studentId}
                  className="w-full sm:w-auto px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-semibold transition-colors shadow-sm order-1 sm:order-2 cursor-pointer"
                >
                  {isAdd ? t('common.add', 'إضافة الطالب') : t('common.saveChanges', 'حفظ التعديلات')}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors order-2 sm:order-1 cursor-pointer"
                >
                  {t('common.cancel', 'إلغاء')}
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