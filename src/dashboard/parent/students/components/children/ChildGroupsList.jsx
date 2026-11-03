import { useTranslation } from 'react-i18next';
import {
  Layers,
  BookOpen,
  CheckCircle,
  Clock,
  User,
  Calendar,
  GraduationCap,
} from 'lucide-react';

function getStatusBadge(status) {
  const norm = String(status || '').trim();
  if (norm === 'نشطة' || norm.toLowerCase() === 'active') {
    return {
      text: 'نشطة',
      className: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
    };
  }
  if (norm === 'قيد الانتظار' || norm.toLowerCase().includes('wait') || norm.toLowerCase().includes('pending')) {
    return {
      text: 'قيد الانتظار',
      className: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/60',
    };
  }
  if (norm === 'مكتملة' || norm.toLowerCase() === 'completed') {
    return {
      text: 'مكتملة',
      className: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/60',
    };
  }
  return {
    text: norm || 'مشترك',
    className: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  };
}

export default function ChildGroupsList({ groups = [] }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const groupsList = Array.isArray(groups) ? groups : [];
  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm space-y-5"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0f7a6c]" />
            <span>{t('parent.childrenList.groupsTitle', 'المجموعات الدراسية المسجل بها')}</span>
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {t('parent.childrenList.groupsSubtitle', 'متابعة المجموعات، المناهج، المعلمين ومواعيد الحصص الأسبوعية')}
          </p>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20">
          {groupsList.length} {t('parent.childrenList.classes', 'مجموعات')}
        </span>
      </div>
      {groupsList.length === 0 ? (
        <div className="py-8 text-center text-slate-400 dark:text-slate-500 text-sm">
          {t('parent.childrenList.noGroups', 'لا توجد مجموعات دراسية مسجلة حالياً')}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {groupsList.map((groupItem, idx) => {
            const isRichObject = typeof groupItem === 'object' && groupItem !== null;
            const groupName = isRichObject ? (groupItem.name || groupItem.title || '-') : String(groupItem || '-');
            const teacherName = isRichObject && groupItem.teacher ? String(groupItem.teacher).trim() : '';
            const curriculumName = isRichObject && groupItem.curriculum ? String(groupItem.curriculum).trim() : '';
            const status = isRichObject && groupItem.status ? groupItem.status : 'نشطة';
            const statusBadge = getStatusBadge(status);
            const days = isRichObject && Array.isArray(groupItem.days) ? groupItem.days : [];
            const timeStr = isRichObject && groupItem.time ? String(groupItem.time).trim() : '';
            const schedule = isRichObject && Array.isArray(groupItem.schedule) ? groupItem.schedule : [];
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 hover:border-[#0f7a6c]/40 dark:hover:border-emerald-500/40 transition-all space-y-3.5"
              >
                {/* Header: Name and Status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {groupName}
                      </h4>
                      {curriculumName && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium truncate">
                          <BookOpen className="w-3.5 h-3.5 text-[#0f7a6c] shrink-0" />
                          <span className="truncate">{curriculumName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black shrink-0 border ${statusBadge.className}`}>
                    {statusBadge.text}
                  </span>
                </div>
                {/* Teacher and Timing Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <User className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="font-semibold text-slate-400 shrink-0">{t('teacherLive.teacherPrefix', 'المعلم')}:</span>
                    <span className="font-bold truncate">{teacherName || t('parentTeacherEval.notAssigned', 'سيتم التحديد')}</span>
                  </div>
                  {timeStr && (
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-400 shrink-0">{t('parent.schedule.time', 'التوقيت')}:</span>
                      <span className="font-mono font-bold truncate dir-ltr">{timeStr}</span>
                    </div>
                  )}
                </div>
                {/* Days Badges */}
                {days.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="text-[11px] font-bold text-slate-400 me-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#0f7a6c]" />
                      <span>{t('parent.schedule.days', 'الأيام')}:</span>
                    </span>
                    {days.map((day, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                )}
                {/* Schedule preview if present */}
                {schedule.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 space-y-1">
                    {schedule.map((sch, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between">
                        <span className="font-bold text-slate-700 dark:text-slate-300">{sch.day}</span>
                        <span className="font-mono text-slate-400">{sch.startTime} - {sch.endTime}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
