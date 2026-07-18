import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';

const teacherSchema = z.object({
  teacherId: z.string().min(1, 'يجب اختيار معلم من القائمة')
});

/**
 * Normalizes a name (object or string) into an array of lowercase parts.
 */
function getNameParts(name) {
  if (!name) return [];
  if (typeof name === 'string') return [name.trim().toLowerCase()];
  if (typeof name === 'object') {
    return [name.ar, name.en].filter(Boolean).map(n => n.trim().toLowerCase());
  }
  return [];
}

/**
 * Collects all IDs from an object.
 */
function collectIds(obj) {
  if (!obj) return new Set();
  const ids = new Set();
  [obj._id, obj.id, obj.teacher_id, obj.teacherId, obj.user_id, obj.userId]
    .filter(Boolean).forEach(id => ids.add(String(id)));
  return ids;
}

/**
 * Checks if a system teacher matches an elite teacher record.
 * Uses ID + name + email for comprehensive matching.
 */
function doesSystemTeacherMatchElite(sysTeacher, eliteTeacher) {
  // --- ID matching ---
  const sysIds = collectIds(sysTeacher);

  // Collect all IDs from elite teacher's "teacher" ref
  const etTeacher = eliteTeacher?.teacher;
  const etRefIds = new Set();
  if (typeof etTeacher === 'string' && etTeacher) etRefIds.add(etTeacher);
  if (etTeacher && typeof etTeacher === 'object') {
    collectIds(etTeacher).forEach(id => etRefIds.add(id));
  }
  // Also check direct fields on elite teacher
  [eliteTeacher?.teacher_id, eliteTeacher?.teacherId, eliteTeacher?.userId, eliteTeacher?.user_id]
    .filter(Boolean).forEach(id => etRefIds.add(String(id)));

  for (const sysId of sysIds) {
    if (etRefIds.has(sysId)) return true;
  }

  // --- Name matching ---
  const sysNameParts = getNameParts(sysTeacher?.name);
  const etNameParts = [
    ...getNameParts(eliteTeacher?.name),
    ...getNameParts(eliteTeacher?.teacher?.name)
  ];
  if (sysNameParts.length > 0 && etNameParts.length > 0) {
    if (sysNameParts.some(sp => etNameParts.includes(sp))) return true;
  }

  // --- Email matching ---
  const sysEmail = (sysTeacher?.email || '').trim().toLowerCase();
  const etEmail = (eliteTeacher?.email || eliteTeacher?.teacher?.email || '').trim().toLowerCase();
  if (sysEmail && etEmail && sysEmail === etEmail) return true;

  return false;
}

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

  if (!isOpen || !currentTeacher) return null;

  const isAdd = currentTeacher.id === null;

  const filteredTeachers = systemTeachers.filter((sysT) => {
    // Check if this system teacher is already in elite list
    const alreadyElite = eliteTeachers.some(et => {
      const isMatch = doesSystemTeacherMatchElite(sysT, et);
      // If editing, allow the currently selected teacher to still show
      if (!isAdd && isMatch) {
        const sysIds = collectIds(sysT);
        if (sysIds.has(String(currentTeacher.teacherId))) return false;
      }
      return isMatch;
    });

    if (alreadyElite) return false;

    // Apply search filter
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    const nameStr = typeof sysT.name === 'object'
      ? ((sysT.name.ar || '') + ' ' + (sysT.name.en || '')).toLowerCase()
      : (sysT.name || '').toLowerCase();
    return nameStr.includes(query) || (sysT.email || '').toLowerCase().includes(query);
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
      <div key="backdrop" className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/50" style={{ position: 'fixed', inset: 0 }} />
      <div key="modal-wrap" className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ position: 'fixed', inset: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        >
          <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#0f7a6c] via-[#14b8a6] to-[#0f7a6c]" />

          <div className="p-5 sm:p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {isAdd
                    ? t('adminDashboard.website.addEliteTeacher', 'إضافة معلم متميز')
                    : t('adminDashboard.website.editEliteTeacher', 'تعديل المعلم المتميز')}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {t('adminDashboard.website.selectTeacherSubtitle', 'اختر معلماً من القائمة')}
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

            <form onSubmit={handleFormSubmit} className="space-y-5 text-start">
              <div className="relative">
                <span className="absolute inset-y-0 start-0 flex items-center ps-4 text-slate-400">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('adminDashboard.website.searchTeacher', 'ابحث باسم المعلم أو البريد...')}
                  className="w-full ps-11 pe-4 py-3 sm:py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-[#0f7a6c] focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-800 dark:text-slate-200 text-sm transition-all"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  {t('adminDashboard.website.availableTeachers', 'المعلمون المتاحون')} ({filteredTeachers.length})
                </h4>

                <div className="space-y-3 max-h-[250px] sm:max-h-[350px] overflow-y-auto pr-1">
                  {filteredTeachers.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-sm font-medium">
                      {t('adminDashboard.website.noMatchingTeachers', 'لا يوجد معلمون مطابقون للبحث')}
                    </div>
                  ) : (
                    filteredTeachers.map((tItem, index) => {
                      const teacherIdVal = tItem._id || tItem.id || tItem.teacher_id || tItem.teacherId || tItem.user_id || tItem.userId || `teacher-${index}`;
                      const isSelected = String(currentTeacher.teacherId) === String(teacherIdVal);
                      const teacherNameStr = typeof tItem.name === 'object'
                        ? (isRtl ? tItem.name.ar || tItem.name.en : tItem.name.en || tItem.name.ar)
                        : tItem.name;
                      const initial = teacherNameStr?.trim()?.charAt(0) || 'م';

                      return (
                        <div
                          key={teacherIdVal}
                          onClick={() => {
                            setCurrentTeacher({
                              ...currentTeacher,
                              teacherId: teacherIdVal,
                              name: typeof tItem.name === 'object' && tItem.name !== null ? tItem.name.ar || '' : tItem.name || '',
                              nameEn: typeof tItem.name === 'object' && tItem.name !== null ? tItem.name.en || '' : tItem.nameEn || tItem.name || '',
                              image: tItem.image || tItem.avatar || '',
                            });
                            if (errors.teacherId) setErrors({ ...errors, teacherId: null });
                          }}
                          className={`flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer ${isSelected
                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                            : 'border-slate-100 dark:border-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30'
                            }`}
                        >
                          {tItem.image || tItem.avatar ? (
                            <img
                              src={tItem.image || tItem.avatar}
                              alt={teacherNameStr}
                              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-lg font-bold">
                              {initial}
                            </div>
                          )}

                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                              {teacherNameStr}
                            </h5>
                            <p className="text-xs text-slate-400 truncate mt-0.5">
                              {tItem.email || tItem.phone || ''}
                            </p>
                            {tItem.subject && (
                              <div className="mt-1">
                                <span className="inline-block px-2 py-0.5 bg-[#0f7a6c]/10 text-[#0f7a6c] text-[10px] font-bold rounded-full">
                                  {typeof tItem.subject === 'object' ? (isRtl ? tItem.subject.ar : tItem.subject.en) : tItem.subject}
                                </span>
                              </div>
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
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-start">
                  <h4 className="text-xs font-bold text-[#0f7a6c] dark:text-emerald-455 uppercase tracking-wide">
                    {isRtl ? 'المعلم المحدد:' : 'Selected Teacher:'}
                  </h4>
                  <div className="flex items-center gap-4 p-4 bg-[#e9f6f3]/40 dark:bg-[#0f7a6c]/5 border border-[#0f7a6c]/10 rounded-2xl">
                    {currentTeacher.image ? (
                      <img
                        src={currentTeacher.image}
                        alt="Selected Preview"
                        className="w-14 h-14 rounded-full object-cover border border-[#0f7a6c]/20"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white text-xl font-bold">
                        {currentTeacher.name?.trim().charAt(0) || 'م'}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">
                        {isRtl ? currentTeacher.name : currentTeacher.nameEn}
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        ID: {currentTeacher.teacherId}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {errors.teacherId && <p className="text-xs text-red-500 font-medium text-center">{errors.teacherId}</p>}

              <div className="flex flex-col sm:flex-row justify-start gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  type="submit"
                  disabled={!currentTeacher.teacherId}
                  className="w-full sm:w-auto px-8 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-semibold transition-colors shadow-sm order-1 sm:order-2 cursor-pointer"
                >
                  {isAdd ? t('common.add', 'إضافة') : t('common.saveChanges', 'حفظ التعديلات')}
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