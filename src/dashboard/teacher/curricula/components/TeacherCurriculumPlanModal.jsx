import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, FileText, CheckCircle2, Download, Calendar, Layers, BookOpen, Clock, ExternalLink } from 'lucide-react';
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
  const [activeLevelTab, setActiveLevelTab] = useState(0);
  if (!isOpen || !curriculum || typeof document === 'undefined') return null;
  const name = resolveName(curriculum.name, isRtl) || curriculum.title || '-';
  const description = resolveName(curriculum.description, isRtl) || curriculum.summary || '';
  const levels = Array.isArray(curriculum.levels) && curriculum.levels.length > 0 ? curriculum.levels : [];
  const currentLevel = levels[activeLevelTab] || null;
  const units = currentLevel && Array.isArray(currentLevel.units) && currentLevel.units.length > 0
    ? currentLevel.units
    : (Array.isArray(curriculum.units) && curriculum.units.length > 0
      ? curriculum.units
      : (levels.length > 0 ? levels.flatMap((l) => (Array.isArray(l.units) ? l.units : [])) : []));
  const planFileUrl = curriculum.planUrl || curriculum.fileUrl || curriculum.syllabusUrl || curriculum.pdfUrl || null;
  const levelBadge = curriculum.level || (levels.length > 0 ? resolveName(levels[0]?.name, isRtl) : t('teacherCurricula.intermediate', 'متوسط'));
  const handleDownloadOrPrint = () => {
    if (planFileUrl) {
      window.open(planFileUrl, '_blank');
      return;
    }
    window.print();
  };
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white dark:bg-slate-900 rounded-[28px] max-w-3xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-tight">
                {name}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                {t('teacherCurricula.curriculumPlanTitle', 'خطة المنهج التدريسية المعتمدة')} • {levelBadge}
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
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {description && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-slate-800 dark:text-white block mb-1">
                {t('teacherCurricula.curriculumOverview', 'نبذة عن الخطة التعليمية:')}
              </span>
              {description}
            </div>
          )}
          {levels.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-black text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Layers size={14} className="text-[#00594C]" />
                <span>{t('teacherCurricula.planLevels', 'المستويات الدراسية للخطة:')}</span>
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {levels.map((lvl, idx) => {
                  const lvlTitle = resolveName(lvl.name, isRtl) || `${t('teacherCurricula.levelWord', 'المستوى')} ${idx + 1}`;
                  const isSelected = activeLevelTab === idx;
                  const unitsCount = Array.isArray(lvl.units) ? lvl.units.length : 0;
                  return (
                    <button
                      type="button"
                      key={lvl.id || lvl._id || idx}
                      onClick={() => setActiveLevelTab(idx)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-[#00594C] text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <BookOpen size={13} />
                      <span>{lvlTitle}</span>
                      {unitsCount > 0 && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {unitsCount} {t('teacherCurricula.unitsWord', 'وحدات')}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                <Calendar size={14} className="text-[#00594C]" />
                <span>{t('teacherCurricula.unitsSchedule', 'الجدول الزمني للوحدات والدروس')}</span>
              </h4>
              <span className="text-xs font-semibold text-slate-400">
                {units.length} {t('teacherCurricula.unitsWord', 'وحدات معتمدة')}
              </span>
            </div>
            {units.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-xs text-slate-400 font-semibold">
                {t('teacherCurricula.noUnitsInPlan', 'سيتم إدراج الوحدات التفصيلية الخاصة بهذه الخطة قريباً من الإدارة')}
              </div>
            ) : (
              <div className="space-y-3">
                {units.map((unit, idx) => {
                  const uName = resolveName(unit.name, isRtl) || `${t('teacherCurricula.unit', 'الوحدة')} ${idx + 1}`;
                  const lessons = Array.isArray(unit.lessons) ? unit.lessons : [];
                  const lessonsCount = lessons.length || unit.lessonsCount || 4;
                  const isCompleted = unit.status === 'completed';
                  return (
                    <div
                      key={unit.id || unit._id || idx}
                      className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2.5">
                          {isCompleted ? (
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          ) : (
                            <Clock size={16} className="text-[#00594C] shrink-0" />
                          )}
                          <div>
                            <p className="font-bold text-slate-800 dark:text-white">{uName}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {lessonsCount} {t('teacherCurricula.lessonsWord', 'دروس مخصصة')}
                            </p>
                          </div>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          isCompleted
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300'
                            : 'bg-teal-50 text-[#00594C] dark:bg-teal-950/40 dark:text-teal-300'
                        }`}>
                          {isCompleted ? t('teacherCurricula.lessonCompleted', 'مكتملة') : t('teacherCurricula.pendingPlan', 'مجدولة')}
                        </span>
                      </div>
                      {lessons.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                          {lessons.map((les, lIdx) => {
                            const lName = resolveName(les.name || les.title, isRtl) || `${t('teacherCurricula.lessonWord', 'الدرس')} ${lIdx + 1}`;
                            return (
                              <div
                                key={les.id || les._id || lIdx}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 font-semibold"
                              >
                                <span className="w-5 h-5 rounded-full bg-[#00594C]/10 text-[#00594C] flex items-center justify-center text-[10px] font-bold shrink-0">
                                  {lIdx + 1}
                                </span>
                                <span className="truncate">{lName}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/40 dark:bg-slate-800/20">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t('common.close', 'إغلاق')}
          </button>
          <div className="flex items-center gap-2">
            {planFileUrl && (
              <a
                href={planFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#00594C]/30 text-[#00594C] dark:text-emerald-300 text-xs font-bold hover:bg-[#00594C]/10 transition-colors cursor-pointer"
              >
                <ExternalLink size={13} />
                <span>{t('teacherCurricula.openExternalPlan', 'فتح الملف الأصلي')}</span>
              </a>
            )}
            <button
              type="button"
              onClick={handleDownloadOrPrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00594C] text-white text-xs font-bold hover:bg-[#00483d] transition-colors cursor-pointer shadow-xs"
            >
              <Download size={13} />
              <span>{planFileUrl ? t('teacherCurricula.downloadPlan', 'تحميل الخطة') : t('teacherCurricula.downloadOrPrintPlan', 'طباعة الخطة')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
});
