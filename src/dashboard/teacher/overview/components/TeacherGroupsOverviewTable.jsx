import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsOverviewTable({ groups }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400">
            <Layers size={18} />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
            {t('teacherDashboard.groupsOverview', 'المجموعات الدراسية')}
          </h2>
        </div>

        <Link
          to="/dashboard/teacher/groups"
          className="text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>{t('teacherDashboard.viewAllGroups', 'عرض كل المجموعات')}</span>
          <ChevronIcon size={14} />
        </Link>
      </div>

      {groups && groups.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-bold">
                <th className="pb-3 text-start">{t('teacherDashboard.groupName', 'المجموعة')}</th>
                <th className="pb-3 text-start">{t('teacherDashboard.groupType', 'النوع')}</th>
                <th className="pb-3 text-start">{t('teacherDashboard.groupLevel', 'المستوى')}</th>
                <th className="pb-3 text-start">{t('teacherDashboard.studentsCount', 'عدد الطلاب')}</th>
                <th className="pb-3 text-end">{t('teacherDashboard.actions', 'الإجراء')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-semibold text-slate-700 dark:text-slate-200">
              {groups.map((group) => (
                <tr key={group.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 text-start font-bold text-slate-900 dark:text-white">
                    {group.name}
                  </td>
                  <td className="py-3.5 text-start">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {group.type}
                    </span>
                  </td>
                  <td className="py-3.5 text-start text-slate-500 dark:text-slate-400">
                    {group.level}
                  </td>
                  <td className="py-3.5 text-start">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Users size={14} className="text-[#00594C] dark:text-emerald-400" />
                      <span>{group.studentsCount}</span>
                      {group.maxStudents > 0 && (
                        <span className="text-slate-400 font-normal">/ {group.maxStudents}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 text-end">
                    <Link
                      to={`/dashboard/teacher/groups`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      <span>{t('teacherGroups.viewDetails', 'عرض')}</span>
                      <ChevronIcon size={12} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-8 text-center text-slate-400 text-xs font-semibold">
          {t('teacher.noGroups', 'لا توجد مجموعات دراسية حالياً')}
        </div>
      )}
    </div>
  );
});
