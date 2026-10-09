import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { collectAllTeacherIds } from '../hooks/useEliteTeachers';

const teacherSchema = z.object({
  teacherId: z.string().min(1, 'يجب اختيار معلم من القائمة')
});

const normalizeName = (name) => {
  if (!name) return '';
  if (typeof name === 'string') return name.trim().toLowerCase();
  if (typeof name === 'object') {
    return [name.ar, name.en].filter(Boolean).map(n => n.trim().toLowerCase()).join(' ');
  }
  return '';
};

export default function TeacherFormModal({
  isOpen,
  onClose,
  currentTeacher,
  setCurrentTeacher,
  onSubmit,
  systemTeachers = [],
  eliteTeachers = []
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [searchQuery, setSearchQuery] = useState('');
  const [errors, setErrors] = useState({});
  const [showTeacherSearch, setShowTeacherSearch] = useState(false);

  const isAdd = !currentTeacher?.id;

  const originalTeacherName = useMemo(() => {
    if (!currentTeacher?.teacherId) return { ar: currentTeacher?.name || '', en: currentTeacher?.nameEn || '' };
    const sysT = systemTeachers.find(tItem => {
      const tIds = collectAllTeacherIds(tItem);
      return tIds.has(String(currentTeacher.teacherId));
    });
    if (sysT) {
      const arName = typeof sysT.name === 'object' ? sysT.name?.ar : sysT.name;
      const enName = typeof sysT.name === 'object' ? sysT.name?.en : (sysT.nameEn || sysT.name);
      return { ar: arName || '', en: enName || '' };
    }
    return { ar: currentTeacher?.name || '', en: currentTeacher?.nameEn || '' };
  }, [currentTeacher?.teacherId, systemTeachers]);

  if (!isOpen || !currentTeacher) return null;

  // Filter available teachers:
  // In Add mode: Exclude any teacher already in eliteTeachers
  // In Edit mode: Allow the teacher matching currentTeacher.teacherId, but exclude other elite teachers
  const filteredTeachers = systemTeachers.filter((sysT) => {
    const sysIds = collectAllTeacherIds(sysT);
    const sysEmail = (sysT.email || sysT.user?.email || '').trim().toLowerCase();
    const sysName = normalizeName(sysT.name);

    const isMatchedInElite = eliteTeachers.some(et => {
      // If editing, skip the elite teacher currently being edited
      if (!isAdd && (et.id === currentTeacher.id || et._id === currentTeacher.id)) {
        return false;
      }

      const etIds = collectAllTeacherIds(et);
      for (const id of sysIds) {
        if (etIds.has(id)) return true;
      }

      const etEmail = (et.email || et.teacher?.email || '').trim().toLowerCase();
      if (sysEmail && etEmail && sysEmail === etEmail) return true;

      const etName = normalizeName(et.name || et.nameEn || et.teacher?.name);
      if (sysName && etName && sysName === etName) return true;

      return false;
    });

    if (isMatchedInElite) return false;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const nameStr = typeof sysT.name === 'object'
      ? ((sysT.name?.ar || '') + ' ' + (sysT.name?.en || '')).toLowerCase()
      : (sysT.name || '').toLowerCase();
    return nameStr.includes(query) || sysEmail.includes(query);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const result = teacherSchema.safeParse(currentTeacher);
    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach(issue => {
        formatted[issue.path[0]] = isRtl ? issue.message : 'You must select a teacher';
      });
      setErrors(formatted);
      return;
    }
    setErrors({});
    onSubmit(e);
  };

  return createPortal(
    <AnimatePresence>
      <div key="teacher-modal-backdrop" className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      <div key="teacher-modal-wrapper" className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ position: 'fixed', inset: 0 }}>
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
                    ? t('adminDashboard.website.addTeacher', 'إضافة معلم متميز')
                    : t('adminDashboard.website.editTeacher', 'تعديل بيانات المعلم المتميز')}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {isAdd
                    ? t('adminDashboard.website.selectTeacherSubtitle', 'اختر معلماً ثم استكمل البيانات المطلوبة')
                    : t('adminDashboard.website.editTeacherSubtitle', 'تعديل بيانات المعلم الشخصية وحالته')}
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
               {currentTeacher.teacherId ? (
                <div className="p-4 bg-[#e9f6f3]/60 dark:bg-[#0f7a6c]/10 border border-[#0f7a6c]/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <label className="relative cursor-pointer group">
                      {currentTeacher.image ? (
                        <img
                          src={currentTeacher.image}
                          alt="Selected Preview"
                          className="w-12 h-12 rounded-full object-cover border border-[#0f7a6c]/30 shadow-sm"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-lg font-bold shadow-sm">
                          {(originalTeacherName.ar || originalTeacherName.en || currentTeacher.name)?.trim()?.charAt(0) || 'م'}
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
                            setCurrentTeacher({ ...currentTeacher, profileImageFile: file, image: url });
                          }
                        }}
                      />
                    </label>
                    <div>
                      <span className="text-[11px] font-extrabold text-[#0f7a6c] dark:text-emerald-400 uppercase tracking-wider block">
                        {isRtl ? 'المعلم المختار من النظام:' : 'Selected System Teacher:'}
                      </span>
                      <h5 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                        {isRtl
                          ? (originalTeacherName.ar || originalTeacherName.en || currentTeacher.name)
                          : (originalTeacherName.en || originalTeacherName.ar || currentTeacher.nameEn)}
                      </h5>
                    </div>
                  </div>

                  {isAdd && (
                    <button
                      type="button"
                      onClick={() => setShowTeacherSearch(!showTeacherSearch)}
                      className="px-3.5 py-1.5 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:bg-[#0f7a6c]/10 rounded-xl transition-colors cursor-pointer border border-[#0f7a6c]/20"
                    >
                      {showTeacherSearch
                        ? (isRtl ? 'إغلاق البحث' : 'Close Search')
                        : (isRtl ? 'تغيير المعلم' : 'Change Teacher')}
                    </button>
                  )}
                </div>
              ) : null}

               {isAdd && (showTeacherSearch || !currentTeacher.teacherId) && (
                <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-4 animate-fadeIn">
                  <div className="relative">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-4 text-slate-400">
                      <Search size={18} />
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('adminDashboard.website.searchTeacher', 'ابحث باسم المعلم أو البريد...')}
                      className="w-full ps-11 pe-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-[#0f7a6c] outline-none text-slate-800 dark:text-slate-200 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2.5">
                      {t('adminDashboard.website.availableTeachers', 'المعلمون المتاحون')} ({filteredTeachers.length})
                    </h4>

                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {filteredTeachers.length === 0 ? (
                        <div className="text-center py-6 text-slate-400 dark:text-slate-500 text-xs font-medium">
                          {t('adminDashboard.website.noMatchingTeachers', 'لا يوجد معلمون متاحون للإضافة')}
                        </div>
                      ) : (
                        filteredTeachers.map((tItem) => {
                          const teacherIdVal = String(tItem.id || tItem._id || tItem.teacher_id || tItem.user_id || '');
                          const isSelected = String(currentTeacher.teacherId) === teacherIdVal;
                          const teacherNameStr = typeof tItem.name === 'object'
                            ? (isRtl ? tItem.name.ar || tItem.name.en : tItem.name.en || tItem.name.ar)
                            : tItem.name;
                          const initial = teacherNameStr?.trim()?.charAt(0) || 'م';
                          const teacherPhoto = tItem.image || tItem.avatar || tItem.user?.photoUrl || '';

                          return (
                            <div
                              key={teacherIdVal}
                              onClick={() => {
                                const arName = typeof tItem.name === 'object' && tItem.name !== null ? tItem.name.ar || '' : tItem.name || '';
                                const enName = typeof tItem.name === 'object' && tItem.name !== null ? tItem.name.en || '' : tItem.nameEn || tItem.name || '';
                                setCurrentTeacher({
                                  ...currentTeacher,
                                  teacherId: teacherIdVal,
                                  name: arName,
                                  nameEn: enName,
                                  image: teacherPhoto,
                                  email: tItem.email || tItem.user?.email || '',
                                  phone: tItem.phone || tItem.user?.phone || '',
                                  country: tItem.country || tItem.user?.country || ''
                                });
                                setShowTeacherSearch(false);
                                if (errors.teacherId) setErrors({ ...errors, teacherId: null });
                              }}
                              className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${isSelected
                                ? 'border-[#0f7a6c] bg-[#0f7a6c]/10'
                                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                                }`}
                            >
                              {teacherPhoto ? (
                                <img
                                  src={teacherPhoto}
                                  alt={teacherNameStr}
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
                                  {teacherNameStr}
                                </h5>
                                <p className="text-[11px] text-slate-400 truncate">
                                  {tItem.email || tItem.user?.email || ''}
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


              {errors.teacherId && <p className="text-xs text-red-500 font-medium text-center">{errors.teacherId}</p>}

              <div className="flex flex-col sm:flex-row justify-start gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="submit"
                  disabled={!currentTeacher.teacherId}
                  className="w-full sm:w-auto px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-semibold transition-colors shadow-sm order-1 sm:order-2 cursor-pointer"
                >
                  {isAdd ? t('common.add', 'إضافة المعلم') : t('common.saveChanges', 'حفظ التعديلات')}
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