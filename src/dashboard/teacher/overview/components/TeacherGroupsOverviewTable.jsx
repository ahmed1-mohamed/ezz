import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsOverviewTable({ groups }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section className="space-y-3 pt-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
          {t('teacherDashboard.groupsOverview', 'نظرة عامة على المجموعات')}
        </h2>

        <Link
          to="/dashboard/teacher/groups"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#00594C] dark:text-emerald-400 hover:underline transition-colors"
        >
          <span>{t('teacherDashboard.manageGroups', 'إدارة المجموعات')}</span>
          <ChevronIcon size={16} />
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[700px]">
          <thead>
            <tr className="text-xs font-semibold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">
              <th className="text-start pb-4 font-semibold pe-4">
                {t('teacherDashboard.groupName', 'اسم المجموعة')}
              </th>
              <th className="text-center pb-4 font-semibold px-4">
                {t('teacherDashboard.groupType', 'النوع')}
              </th>
              <th className="text-center pb-4 font-semibold px-4">
                {t('teacherDashboard.groupLevel', 'المستوى')}
              </th>
              <th className="text-center pb-4 font-semibold px-4">
                {t('teacherDashboard.students', 'الطلاب')}
              </th>
              <th className="text-center pb-4 font-semibold px-4">
                {t('teacherDashboard.progress', 'التقدم')}
              </th>
              <th className="text-start pb-4 font-semibold ps-4">
                {t('teacherDashboard.nextSession', 'الجلسة القادمة')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {groups && groups.length > 0 ? (
              groups.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  {/* 1. اسم المجموعة */}
                  <td className="py-5 text-start pe-4">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {row.name}
                    </span>
                  </td>

                  {/* 2. النوع */}
                  <td className="py-5 text-center px-4">
                    {row.type === 'خاص' || row.type?.toLowerCase() === 'private' ? (
                      <span className="inline-block px-7 py-2 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb] dark:bg-blue-950/40 dark:text-blue-300">
                        {t('teacherDashboard.private', 'خاص')}
                      </span>
                    ) : (
                      <span className="inline-block px-7 py-2 rounded-full text-xs font-bold bg-[#faf5ff] text-[#9333ea] dark:bg-purple-950/40 dark:text-purple-300">
                        {t('teacherDashboard.public', 'عام')}
                      </span>
                    )}
                  </td>

                  {/* 3. المستوى */}
                  <td className="py-5 text-center px-4">
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {row.level}
                    </span>
                  </td>

                  {/* 4. الطلاب */}
                  <td className="py-5 text-center px-4">
                    <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                      <span>{row.studentsCount}/{row.maxStudents || 5}</span>
                      <Users size={13} className="text-slate-400" />
                    </div>
                  </td>

                  {/* 5. التقدم */}
                  <td className="py-5 text-center px-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 w-8 text-end">
                        {row.progress ?? 75}%
                      </span>
                      <div className="w-20 sm:w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00594C] rounded-full transition-all duration-500"
                          style={{ width: `${row.progress ?? 75}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* 6. الجلسة القادمة + التفاصيل */}
                  <td className="py-5 text-start ps-4">
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-semibold whitespace-nowrap font-mono">
                        {row.nextSessionTime || `${t('teacherDashboard.today', isRtl ? 'اليوم' : 'Today')} 18:30`}
                      </span>
                      <Link
                        to={`/dashboard/teacher/groups/${row.id}`}
                        className="text-[#00594C] dark:text-emerald-400 font-bold hover:underline whitespace-nowrap cursor-pointer"
                      >
                        {t('teacherDashboard.details', 'التفاصيل')}
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400 text-xs font-semibold">
                  {t('teacher.noGroups', 'لا توجد مجموعات دراسية حالياً')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
});
