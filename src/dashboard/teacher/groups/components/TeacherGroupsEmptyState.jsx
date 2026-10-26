import React from 'react';
import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function TeacherGroupsEmptyState({ message }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
        <Users size={28} />
      </div>
      <h3 className="text-base font-bold text-slate-800 dark:text-white">
        {message || t('teacherGroups.noGroupsFound', 'لا توجد مجموعات تطابق البحث')}
      </h3>
    </div>
  );
});
