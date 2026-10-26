import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Clock, Globe, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupCard({ group }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const renderStatus = (status) => {
    const st = (status || '').toLowerCase();
    if (st === 'active' || st.includes('نشط')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          {t('teacherGroups.active', 'نشطة')}
        </span>
      );
    }
    if (st === 'pending' || st.includes('انتظار')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
          {t('teacherGroups.pending', 'قيد الانتظار')}
        </span>
      );
    }
    if (st === 'stopped' || st.includes('موقوف')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
          {t('teacherGroups.stopped', 'موقوفة')}
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow text-start">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {group.type}
          </span>
          {renderStatus(group.status)}
        </div>

        <div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
            {group.name}
          </h3>
          {group.curriculum && (
            <p className="text-xs font-semibold text-[#00594C] dark:text-emerald-400 mt-1 flex items-center gap-1.5">
              <BookOpen size={13} />
              <span className="truncate">{group.curriculum}</span>
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Layers size={13} className="text-slate-400" />
              <span>{t('teacherGroups.level', 'المستوى')}:</span>
            </span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">{group.level}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Users size={13} className="text-slate-400" />
              <span>{t('teacherGroups.students', 'الطلاب')}:</span>
            </span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {group.currentStudentsCount} {group.maxStudents > 0 ? `/ ${group.maxStudents}` : ''}
            </span>
          </div>

          {group.language && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Globe size={13} className="text-slate-400" />
                <span>{t('teacherGroups.explanationLanguage', 'لغة الشرح')}:</span>
              </span>
              <span className="text-slate-800 dark:text-slate-200 font-bold">{group.language}</span>
            </div>
          )}

          {group.schedule && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-slate-400" />
                <span>{t('teacherGroups.schedule', 'المواعيد')}:</span>
              </span>
              <span className="text-slate-800 dark:text-slate-200 font-bold truncate max-w-[10rem]">{group.schedule}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <Link
          to={`/dashboard/teacher/groups/${group.id}`}
          className="w-full py-2.5 px-4 rounded-2xl bg-slate-50 hover:bg-[#00594C] text-[#00594C] hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-600 dark:text-slate-200 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <span>{t('teacherGroups.viewDetails', 'عرض تفاصيل المجموعة')}</span>
          <ChevronIcon size={14} />
        </Link>
      </div>
    </div>
  );
});
