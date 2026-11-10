import React from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

export default React.memo(function TeacherCurriculumSidebarCard({
  curriculum,
  onSelect,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  if (!curriculum) return null;
  const name = resolveName(curriculum.name, isRtl) || curriculum.title || '-';
  const levels = Array.isArray(curriculum.levels) ? curriculum.levels : [];
  const level = curriculum.level || (levels.length > 0 ? resolveName(levels[0]?.name, isRtl) : t('teacherCurricula.beginner', 'مبتدئ'));
  const unitsCount = levels.length > 0
    ? (levels.reduce((acc, l) => acc + (Array.isArray(l.units) ? l.units.length : 0), 0) || levels.length)
    : (Array.isArray(curriculum.units) ? curriculum.units.length : (Number(curriculum.unitsCount) || 6));
  const totalLessons = Number(curriculum.totalLessons ?? curriculum.lessonsCount ?? 30);
  const resourcesCount = Array.isArray(curriculum.resources) ? curriculum.resources.length : (Number(curriculum.resourcesCount) || 5);
  const linkedGroups = Array.isArray(curriculum.linkedGroups) ? curriculum.linkedGroups : [];
  const groupsNames = linkedGroups
    .map((g) => resolveName(typeof g === 'object' ? g.name : g, isRtl))
    .filter(Boolean)
    .join(' • ');
  return (
    <div
      onClick={() => onSelect(curriculum)}
      className="bg-white dark:bg-slate-900 rounded-[28px] p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-3.5 hover:border-[#00594C]/40 transition-all cursor-pointer text-start"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {level}
        </span>
        <h4 className="text-sm font-black text-slate-800 dark:text-white truncate">
          {name}
        </h4>
      </div>
      <p className="text-xs text-slate-400 font-semibold">
        {levels.length > 0 && `${levels.length} ${t('teacherCurricula.levelsWord', 'مستويات')} • `}
        {unitsCount} {t('teacherCurricula.unitsWord', 'وحدات')} • {totalLessons} {t('teacherCurricula.lessonsWord', 'درساً')} • {resourcesCount} {t('teacherCurricula.resourcesWord', 'مصادر مرتبطة')}
      </p>
      {groupsNames && (
        <div className="flex items-center gap-1.5 text-xs text-[#00594C] dark:text-emerald-300 font-bold">
          <Users size={13} className="shrink-0" />
          <span className="truncate">{groupsNames}</span>
        </div>
      )}
      <div className="pt-1 flex items-center justify-between text-xs font-bold text-[#00594C] dark:text-emerald-300 group">
        <span>{t('teacherCurricula.expandUnitsAndResources', 'استعراض الوحدات والمصادر')}</span>
        {isRtl ? (
          <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        ) : (
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        )}
      </div>
    </div>
  );
});
