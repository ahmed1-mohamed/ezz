import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Clock, BookOpen, MoreVertical } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function getStatusBadge(status, t) {
  const norm = String(status || '').trim().toLowerCase();
  if (norm === 'active' || norm.includes('نشط')) {
    return {
      label: t('teacherGroups.statusActive', 'نشط'),
      className: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300',
    };
  }
  if (norm === 'pending' || norm.includes('انتظار')) {
    return {
      label: t('teacherGroups.statusPending', 'قيد الانتظار'),
      className: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300',
    };
  }
  if (norm === 'stopped' || norm.includes('موقوف') || norm.includes('متوقف')) {
    return {
      label: t('teacherGroups.statusStopped', 'متوقف مؤقتاً'),
      className: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
    };
  }
  if (norm === 'completed' || norm.includes('مكتمل')) {
    return {
      label: t('teacherGroups.statusCompleted', 'مكتملة'),
      className: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-300',
    };
  }
  return {
    label: status || '-',
    className: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  };
}

export default React.memo(function TeacherGroupCard({ group }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const statusInfo = getStatusBadge(group.status, t);
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow text-start"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="h-1.5 w-full bg-[#00594C] absolute top-0 inset-x-0" />
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3 pt-1">
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate leading-tight">
              {group.name}
            </h3>
            {group.curriculum && (
              <p className="text-xs font-semibold text-slate-400 mt-1 truncate">
                {group.curriculum}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusInfo.className}`}>
              {statusInfo.label}
            </span>
            <button
              type="button"
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Options"
            >
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 my-3">
          <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">
              {t('teacherGroups.language', 'اللغة')}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-1 truncate w-full">
              <Globe size={13} className="text-slate-400 shrink-0" />
              <span className="truncate">{group.language || t('common.arabic', 'العربية')}</span>
            </span>
          </div>
          <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">
              {t('teacherGroups.students', 'الطلاب')}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-1 font-mono">
              <Users size={13} className="text-slate-400 shrink-0" />
              <span>{group.currentStudentsCount}/{group.maxStudents || '-'}</span>
            </span>
          </div>
          <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">
              {t('teacherGroups.type', 'النوع')}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate w-full">
              {group.type}
            </span>
          </div>
          <div className="bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">
              {t('teacherGroups.level', 'المستوى')}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate w-full">
              {group.level || '-'}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 pt-1 pb-1">
          <Clock size={14} className="text-slate-400 shrink-0" />
          <span className="truncate">{group.scheduleFormatted || t('teacherGroups.noSchedule', 'المواعيد: لم تحدد')}</span>
        </div>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          to={`/dashboard/teacher/sessions?groupId=${group.id}`}
          className="px-5 py-2.5 rounded-2xl border border-[#00594C] text-[#00594C] hover:bg-[#00594C]/10 dark:border-emerald-500/40 dark:text-emerald-400 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          <BookOpen size={15} />
          <span>{t('teacherGroups.sessionBtn', 'جلسة')}</span>
        </Link>
        <Link
          to={`/dashboard/teacher/groups/${group.id}`}
          className="flex-1 py-2.5 px-4 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs sm:text-sm font-bold text-center transition-colors shadow-xs hover:shadow-md cursor-pointer"
        >
          {t('teacherGroups.viewDetails', 'عرض التفاصيل')}
        </Link>
      </div>
    </div>
  );
});
