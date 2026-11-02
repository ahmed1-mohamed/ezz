import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, BookOpen, CheckCircle2, Circle, Clock, LayoutList } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function getLevelBadge(level, isRtl) {
  const norm = String(level || '').toLowerCase();
  if (norm === 'advanced' || norm.includes('متقدم')) {
    return { label: isRtl ? 'متقدم' : 'Advanced', className: 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400' };
  }
  if (norm === 'intermediate' || norm === 'middle' || norm.includes('متوسط')) {
    return { label: isRtl ? 'متوسط' : 'Intermediate', className: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' };
  }
  if (norm === 'beginner' || norm.includes('مبتدئ')) {
    return { label: isRtl ? 'مبتدئ' : 'Beginner', className: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' };
  }
  return { label: level || '', className: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300' };
}

function resolveName(nameField, isRtl) {
  if (typeof nameField === 'object' && nameField !== null) {
    return (isRtl ? nameField.ar || nameField.en : nameField.en || nameField.ar) || '';
  }
  return String(nameField || '');
}

function UnitStatusIcon({ status }) {
  if (status === 'completed') return <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />;
  if (status === 'inProgress') return <Clock size={14} className="text-amber-500 shrink-0" />;
  return <Circle size={14} className="text-slate-300 shrink-0" />;
}

function UnitLessonRow({ lesson, isRtl, t }) {
  const statusMap = {
    completed: {
      label: t('teacherCurricula.lessonCompleted', 'مكتملة'),
      className: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300',
    },
    inProgress: {
      label: t('teacherCurricula.lessonInProgress', 'قيد التدريس'),
      className: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
    },
    notStarted: {
      label: t('teacherCurricula.lessonNotStarted', 'لم تبدأ'),
      className: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
    },
  };
  const info = statusMap[lesson.status] || statusMap.notStarted;
  const lessonName = resolveName(lesson.name, isRtl) || lesson.title || '-';
  return (
    <div className="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <div className="flex items-center gap-2 min-w-0">
        <UnitStatusIcon status={lesson.status} />
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">{lessonName}</span>
      </div>
      <span className={`shrink-0 px-2 py-0.5 rounded-full text-[11px] font-bold ${info.className}`}>
        {info.label}
      </span>
    </div>
  );
}

export default React.memo(function TeacherCurriculumCard({ curriculum, isExpanded, onToggleExpand }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [selectedUnit, setSelectedUnit] = useState(null);
  const name = resolveName(curriculum.name, isRtl) || '-';
  const levelInfo = getLevelBadge(curriculum.level, isRtl);
  const progress = Number(curriculum.teachingProgress ?? curriculum.progress ?? 0);
  const units = Array.isArray(curriculum.units) ? curriculum.units : [];
  const linkedGroupsCount = Array.isArray(curriculum.linkedGroups)
    ? curriculum.linkedGroups.length
    : (Number(curriculum.linkedGroupsCount) || 0);
  const sessionsCount = Number(curriculum.sessionsCount ?? curriculum.totalSessions ?? 0);
  const activeUnit = selectedUnit ?? units[0] ?? null;
  const lessons = Array.isArray(activeUnit?.lessons) ? activeUnit.lessons : [];
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="h-1.5 w-full bg-[#00594C]" />
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight truncate">
              {name}
            </h3>
            {curriculum.description && (
              <p className="text-xs font-semibold text-slate-400 mt-1 line-clamp-2">{curriculum.description}</p>
            )}
          </div>
          {levelInfo.label && (
            <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${levelInfo.className}`}>
              {levelInfo.label}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Users size={13} className="text-[#00594C]" />
            <span>{linkedGroupsCount} {t('teacherCurricula.linkedGroups', 'مجموعات مرتبطة')}</span>
          </div>
          {sessionsCount > 0 && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <BookOpen size={13} className="text-[#00594C]" />
              <span>{sessionsCount} {t('teacherCurricula.sessions', 'درسًا')}</span>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {t('teacherCurricula.progress', 'تقدم تدريس المنهج')}
            </span>
            <span className="text-xs font-black text-[#00594C]">{progress}%</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00594C] rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleExpand}
          className="flex items-center justify-between w-full px-4 py-2.5 rounded-2xl border border-[#00594C]/30 text-[#00594C] hover:bg-[#00594C]/5 transition-colors font-bold text-sm"
        >
          <div className="flex items-center gap-2">
            <LayoutList size={15} />
            {t('teacherCurricula.expandBtn', 'استعراض الوحدات والمصادر')}
          </div>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      {isExpanded && (
        <div className="border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100 dark:divide-slate-800">
          <div className="p-4 space-y-1">
            <p className="text-xs font-black text-slate-500 dark:text-slate-400 mb-3">
              {t('teacherCurricula.unitsLabel', 'وحدات المنهج ودروسه')}
            </p>
            {units.length === 0 && (
              <p className="text-xs text-slate-400 text-center py-4">
                {t('teacherCurricula.noUnits', 'لا توجد وحدات مسجلة')}
              </p>
            )}
            {units.map((unit, idx) => {
              const unitName = resolveName(unit.name, isRtl) || `${t('teacherCurricula.unit', 'الوحدة')} ${idx + 1}`;
              const unitLessonsCount = Array.isArray(unit.lessons) ? unit.lessons.length : 0;
              const completedCount = Array.isArray(unit.lessons)
                ? unit.lessons.filter((l) => l.status === 'completed').length
                : 0;
              const unitId = unit.id || unit._id || idx;
              const activeId = (activeUnit?.id || activeUnit?._id) ?? 0;
              const isActive = activeId === unitId || (!selectedUnit && idx === 0);
              return (
                <button
                  key={unitId}
                  type="button"
                  onClick={() => setSelectedUnit(unit)}
                  className={`w-full text-start px-3 py-2.5 rounded-2xl transition-colors ${
                    isActive
                      ? 'bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/40'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <p className={`text-xs font-bold truncate ${isActive ? 'text-[#00594C]' : ''}`}>{unitName}</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                    {completedCount} {t('teacherCurricula.of', 'من')} {unitLessonsCount} {t('teacherCurricula.lessonsCompleted', 'دروس مكتملة')}
                  </p>
                </button>
              );
            })}
          </div>
          <div className="p-4">
            {activeUnit ? (
              <>
                <p className="text-xs font-black text-slate-500 dark:text-slate-400 mb-3">
                  {resolveName(activeUnit.name, isRtl) || t('teacherCurricula.unit', 'الوحدة')}
                </p>
                {lessons.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-4">
                    {t('teacherCurricula.noLessons', 'لا توجد دروس في هذه الوحدة')}
                  </p>
                )}
                {lessons.map((lesson, idx) => (
                  <UnitLessonRow key={lesson.id || lesson._id || idx} lesson={lesson} isRtl={isRtl} t={t} />
                ))}
              </>
            ) : (
              <p className="text-xs text-slate-400 text-center py-8">
                {t('teacherCurricula.selectUnit', 'اختر وحدة لاستعراض دروسها')}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
});
