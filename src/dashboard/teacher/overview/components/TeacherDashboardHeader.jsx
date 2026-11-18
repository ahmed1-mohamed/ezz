import React from 'react';
import { useTranslation } from 'react-i18next';
import TeacherDateTimeDisplay from '@/shared/components/TeacherDateTimeDisplay.jsx';

export default React.memo(function TeacherDashboardHeader({ teacherName }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
          {t('teacherDashboard.title', 'لوحة التحكم')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
          {t('teacherDashboard.welcome', { name: teacherName, defaultValue: `مرحباً بك، ${teacherName}` })}
        </p>
      </div>
      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
        <TeacherDateTimeDisplay />
      </div>
    </div>
  );
});
