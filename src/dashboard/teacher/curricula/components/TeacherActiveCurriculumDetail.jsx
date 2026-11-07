import React, { useState, useMemo } from 'react';
import { Users, CheckCircle2, ChevronDown, ChevronLeft, FileText, Layers, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function TeacherActiveCurriculumDetail({
  curriculum,
  onOpenPlan,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const levels = useMemo(() => {
    if (!curriculum) return [];
    if (Array.isArray(curriculum.levels) && curriculum.levels.length > 0) return curriculum.levels;
    return [];
  }, [curriculum]);
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
  const [expandedUnitIndex, setExpandedUnitIndex] = useState(0);
  if (!curriculum) return null;
  const name = resolveName(curriculum.name, isRtl) || curriculum.title || '-';
  const levelBadge = curriculum.level || (levels.length > 0 ? resolveName(levels[0]?.name, isRtl) : t('teacherCurricula.intermediate', 'متوسط'));
  const activeLevel = levels[selectedLevelIndex] || null;
  const displayedUnits = useMemo(() => {
    if (activeLevel && Array.isArray(activeLevel.units) && activeLevel.units.length > 0) {
      return activeLevel.units;
    }
    if (Array.isArray(curriculum.units) && curriculum.units.length > 0) {
      return curriculum.units;
    }
    if (levels.length > 0) {
      const all = levels.flatMap((l) => (Array.isArray(l.units) ? l.units : []));
      if (all.length > 0) return all;
    }
    return [];
  }, [activeLevel, curriculum, levels]);
  const totalUnitsCount = useMemo(() => {
    if (levels.length > 0) {
      return levels.reduce((acc, l) => acc + (Array.isArray(l.units) ? l.units.length : 0), 0) || levels.length;
    }
    return Array.isArray(curriculum.units) ? curriculum.units.length : (Number(curriculum.unitsCount) || 4);
  }, [levels, curriculum]);
  const totalLessons = displayedUnits.reduce((acc, u) => acc + (Array.isArray(u.lessons) ? u.lessons.length : (u.lessonsCount || 0)), 0) || Number(curriculum.totalLessons) || 16;
  const completedLessons = displayedUnits.reduce((acc, u) => {
    if (u.status === 'completed') return acc + (Array.isArray(u.lessons) ? u.lessons.length : (u.lessonsCount || 0));
    if (Array.isArray(u.lessons)) {
      return acc + u.lessons.filter((l) => l.status === 'completed').length;
    }
    return acc;
  }, 0) || Number(curriculum.completedLessons) || 6;
  const resourcesCount = Array.isArray(curriculum.resources) ? curriculum.resources.length : (Number(curriculum.resourcesCount) || 7);
  const linkedGroups = Array.isArray(curriculum.linkedGroups) ? curriculum.linkedGroups : [];
  function handleToggleUnit(index) {
    setExpandedUnitIndex((prev) => (prev === index ? null : index));
  }
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border-2 border-[#00594C] shadow-xs space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eaf4f1] text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-300">
            {curriculum.statusLabel || t('teacherCurricula.inProgress', 'قيد التدريس')}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-800 dark:text-white leading-tight">
            {name}
          </h3>
        </div>
        <p className="text-xs text-slate-400 font-semibold">
          {levels.length > 0 && `${levels.length} ${t('teacherCurricula.levelsWord', 'مستويات')} • `}
          {totalUnitsCount} {t('teacherCurricula.unitsWord', 'وحدات')} • {totalLessons} {t('teacherCurricula.lessonsWord', 'درساً')} • {resourcesCount} {t('teacherCurricula.resourcesWord', 'مصادر مرتبطة')} • {t('teacherCurricula.levelWord', 'المستوى')}: {levelBadge}
        </p>
      </div>
      {linkedGroups.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Users size={14} className="text-[#00594C] shrink-0" />
          {linkedGroups.map((group, idx) => {
            const groupName = resolveName(typeof group === 'object' ? group.name : group, isRtl);
            return (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-bold bg-[#eaf4f1] text-[#00594C] dark:bg-emerald-950/50 dark:text-emerald-300"
              >
                {groupName}
              </span>
            );
          })}
        </div>
      )}
      {levels.length > 0 && (
        <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <Layers size={14} className="text-[#00594C]" />
              <span>{t('teacherCurricula.levelsSchedule', 'مستويات المنهج')}</span>
            </span>
            <span className="text-[11px] font-semibold text-slate-400">
              {levels.length} {t('teacherCurricula.levelsAvailable', 'مستويات متاحة')}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5">
            {levels.map((lvl, lIdx) => {
              const lvlName = resolveName(lvl.name, isRtl) || `${t('teacherCurricula.levelWord', 'المستوى')} ${lIdx + 1}`;
              const lvlUnitsCount = Array.isArray(lvl.units) ? lvl.units.length : 0;
              const isSelected = selectedLevelIndex === lIdx;
              return (
                <button
                  type="button"
                  key={lvl.id || lvl._id || lIdx}
                  onClick={() => {
                    setSelectedLevelIndex(lIdx);
                    setExpandedUnitIndex(0);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#00594C] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <BookOpen size={12} />
                  <span>{lvlName}</span>
                  {lvlUnitsCount > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {lvlUnitsCount} {t('teacherCurricula.unitsShort', 'وحدات')}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white">
            {t('teacherCurricula.unitsLabel', 'وحدات المنهج ودروسه')}
          </h4>
          <span className="text-xs font-bold text-[#00594C] dark:text-emerald-400">
            {completedLessons} {t('teacherCurricula.of', 'من')} {totalLessons} {t('teacherCurricula.lessonsCompleted', 'درساً مكتملاً')}
          </span>
        </div>
        {displayedUnits.length === 0 ? (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-center text-xs text-slate-400 font-semibold">
            {t('teacherCurricula.noUnitsInLevel', 'لا توجد وحدات دراسية مسجلة في هذا المستوى حالياً')}
          </div>
        ) : (
          <div className="space-y-2.5">
            {displayedUnits.map((unit, idx) => {
              const isExpanded = expandedUnitIndex === idx;
              const unitName = resolveName(unit.name, isRtl) || `${t('teacherCurricula.unit', 'الوحدة')} ${idx + 1}`;
              const unitLessons = Array.isArray(unit.lessons) ? unit.lessons.length : (unit.lessonsCount || 0);
              const isCompleted = unit.status === 'completed';
              const isInProgress = unit.status === 'inProgress' || (!unit.status && idx === 0);
              return (
                <div
                  key={unit.id || unit._id || idx}
                  className={`rounded-2xl transition-all ${
                    isExpanded || isInProgress
                      ? 'bg-[#f0f7f5] dark:bg-emerald-950/20 border border-[#00594C]/25 p-3.5 space-y-2'
                      : 'bg-[#f9fbfb] dark:bg-slate-800/60 p-3.5'
                  }`}
                >
                  <div
                    onClick={() => handleToggleUnit(idx)}
                    className="flex items-center justify-between cursor-pointer select-none text-xs font-bold text-slate-700 dark:text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      {isCompleted ? (
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      ) : isExpanded ? (
                        <ChevronDown size={16} className="text-[#00594C] shrink-0" />
                      ) : (
                        <ChevronLeft size={16} className="text-slate-400 shrink-0" />
                      )}
                      <span>{unitName}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      {unitLessons} {t('teacherCurricula.lessonsWord', 'دروس')} •{' '}
                      {isCompleted
                        ? t('teacherCurricula.lessonCompleted', 'مكتملة')
                        : isInProgress
                        ? t('teacherCurricula.lessonInProgress', 'قيد التدريس')
                        : t('teacherCurricula.lessonNotStarted', 'لم تبدأ')}
                    </span>
                  </div>
                  {(isExpanded || isInProgress) && (
                    <div className="pt-2 border-t border-[#00594C]/15 text-xs text-[#00594C] dark:text-emerald-300 font-semibold">
                      {unit.currentLessonHint ||
                        (isRtl
                          ? 'الدرس الحالي: الإظهار الحلقي • التالي: الإدغام بغنة وبغير غنة'
                          : 'Current: Throat Manifestation • Next: Idgham with/without Ghunna')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={() => onOpenPlan(curriculum)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#00594C]/30 text-[#00594C] dark:text-emerald-300 bg-white dark:bg-slate-800 hover:bg-[#00594C]/5 text-xs font-bold transition-colors cursor-pointer"
        >
          <FileText size={14} />
          <span>{t('teacherCurricula.viewPlanBtn', 'عرض خطة المنهج')}</span>
        </button>
        <p className="text-xs font-semibold text-slate-400">
          {t('teacherCurricula.resourcesNotice', 'الكتب والمراجع المرتبطة متاحة بالأسفل')}
        </p>
      </div>
    </div>
  );
});
