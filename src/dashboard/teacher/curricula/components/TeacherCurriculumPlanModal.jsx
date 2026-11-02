import React from 'react';
import { X, FileText, CheckCircle2, Download, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function TeacherCurriculumPlanModal({
  curriculum,
  isOpen,
  onClose,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!isOpen || !curriculum) return null;
  const name = resolveName(curriculum.name, isRtl) || curriculum.title || '-';
  const units = Array.isArray(curriculum.units) ? curriculum.units : [];
  const level = curriculum.level || t('teacherCurricula.intermediate', 'متوسط');
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white dark:bg-slate-900 rounded-[28px] max-w-2xl w-full border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                {name}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                {t('teacherCurricula.curriculumPlanTitle', 'خطة المنهج التدريسية المعتمدة')} • {level}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="bg-[#f0f7f5] dark:bg-emerald-950/20 border border-[#00594C]/20 rounded-2xl p-4 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <p className="font-bold text-[#00594C] dark:text-emerald-300">
              {t('teacherCurricula.planInstructionsTitle', 'إرشادات تنفيذ الخطة الدراسية')}
            </p>
            <p>
              {t(
                'teacherCurricula.planInstructionsDesc',
                'يتم تدريس كل وحدة وفق الجدول الزمني المحدد مع استيفاء التقييمات وحل التدريبات والأنشطة المرفقة بالمصادر التعليمية.'
              )}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-800 dark:text-white">
              {t('teacherCurricula.unitsSchedule', 'الجدول الزمني للوحدات')}
            </h4>
            {units.map((unit, idx) => {
              const uName = resolveName(unit.name, isRtl) || `${t('teacherCurricula.unit', 'الوحدة')} ${idx + 1}`;
              const lessonsCount = Array.isArray(unit.lessons) ? unit.lessons.length : (unit.lessonsCount || 4);
              const isCompleted = unit.status === 'completed';
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    {isCompleted ? (
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    ) : (
                      <Calendar size={16} className="text-[#00594C] shrink-0" />
                    )}
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white">{uName}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{lessonsCount} {t('teacherCurricula.lessonsWord', 'دروس مخصصة')}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    isCompleted
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {isCompleted ? t('teacherCurricula.lessonCompleted', 'مكتملة') : t('teacherCurricula.pendingPlan', 'مجدولة')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t('common.close', 'إغلاق')}
          </button>
          <button
            type="button"
            onClick={() => {
              window.print();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00594C] text-white text-xs font-bold hover:bg-[#00483d] transition-colors cursor-pointer"
          >
            <Download size={13} />
            <span>{t('teacherCurricula.downloadOrPrintPlan', 'تحميل الخطة')}</span>
          </button>
        </div>
      </div>
    </div>
  );
});

