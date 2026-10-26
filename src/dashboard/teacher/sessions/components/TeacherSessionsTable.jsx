import React from 'react';
import { Video, Users, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherSessionsTable({ sessions }) {
  const { t } = useTranslation();

  const renderBadge = (status) => {
    const st = (status || '').toLowerCase();
    if (st === 'live' || st === 'in_progress') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-red-500 text-white animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          {t('teacherSessions.live', 'مباشرة الآن')}
        </span>
      );
    }
    if (st === 'completed') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          {t('teacherSessions.completed', 'مكتملة')}
        </span>
      );
    }
    if (st === 'cancelled') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
          {t('teacherSessions.cancelled', 'ملغاة')}
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
        {t('teacherSessions.scheduled', 'مجدولة')}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-start text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-bold">
              <th className="pb-3 text-start">{t('teacherSessions.sessionNumber', 'رقم الحصة')}</th>
              <th className="pb-3 text-start">{t('teacherSessions.sessionTitle', 'الحصة')}</th>
              <th className="pb-3 text-start">{t('teacherSessions.group', 'المجموعة')}</th>
              <th className="pb-3 text-start">{t('teacherSessions.dateTime', 'التاريخ والوقت')}</th>
              <th className="pb-3 text-start">{t('teacherSessions.students', 'الطلاب')}</th>
              <th className="pb-3 text-start">{t('teacherSessions.status', 'الحالة')}</th>
              <th className="pb-3 text-end">{t('teacherSessions.actions', 'الإجراءات')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-semibold text-slate-700 dark:text-slate-200">
            {sessions.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 text-start font-mono text-slate-400">
                  #{item.sessionNumber}
                </td>
                <td className="py-3.5 text-start font-bold text-slate-900 dark:text-white">
                  {item.title}
                </td>
                <td className="py-3.5 text-start text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={13} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[12rem]">{item.groupName}</span>
                  </span>
                </td>
                <td className="py-3.5 text-start font-mono text-xs">
                  <div>{item.date}</div>
                  <div className="text-slate-400 text-[11px]" dir="ltr">{item.time}</div>
                </td>
                <td className="py-3.5 text-start">
                  <span className="inline-flex items-center gap-1 font-bold">
                    <Users size={13} className="text-[#00594C] dark:text-emerald-400" />
                    <span>{item.studentsCount}</span>
                  </span>
                </td>
                <td className="py-3.5 text-start">
                  {renderBadge(item.status)}
                </td>
                <td className="py-3.5 text-end">
                  {item.zoomJoinUrl ? (
                    <a
                      href={item.zoomJoinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#00594C] hover:bg-[#00483d] text-white text-xs font-bold shadow-xs cursor-pointer"
                    >
                      <Video size={13} />
                      <span>{t('teacherSessions.join', 'انضمام')}</span>
                    </a>
                  ) : (
                    <span className="text-slate-300 dark:text-slate-600 text-xs">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
