import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';

export default function ChildrenStatsBar({ childrenList = [] }) {
  const { t } = useTranslation();
  const totalChildren = childrenList.length;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      <div className="p-4 rounded-2xl border bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30 flex items-center justify-between gap-3 shadow-xs">
        <div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
            {t('parent.childrenList.totalChildren', 'إجمالي عدد الأبناء')}
          </p>
          <p className="text-2xl font-black text-slate-800 dark:text-white">
            {totalChildren}
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-blue-500 bg-white dark:bg-slate-900/60 shadow-xs">
          <Users className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
