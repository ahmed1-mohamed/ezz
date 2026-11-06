import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Wallet, RefreshCw } from 'lucide-react';
import { teacherEarningsApi } from '@/shared/services/api/teacherEarningsApi';
import TeacherBalanceOverview from './components/TeacherBalanceOverview';
import TeacherEarningsTable from './components/TeacherEarningsTable';
import TeacherFinanceNavTabs from './components/TeacherFinanceNavTabs';

const STALE_TIME_MS = 60 * 1000;

export default function TeacherEarnings() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const queryClient = useQueryClient();
  const {
    data: earningsRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherDashboardEarnings'],
    queryFn: teacherEarningsApi.fetchEarnings,
    staleTime: STALE_TIME_MS,
  });
  const balance = earningsRes?.balance || earningsRes?.summary || (earningsRes && typeof earningsRes === 'object' ? earningsRes : null);
  const records = (() => {
    if (!earningsRes) return [];
    if (Array.isArray(earningsRes.records)) return earningsRes.records;
    if (Array.isArray(earningsRes.earnings)) return earningsRes.earnings;
    if (Array.isArray(earningsRes.sessions)) return earningsRes.sessions;
    if (Array.isArray(earningsRes.data)) return earningsRes.data;
    if (Array.isArray(earningsRes)) return earningsRes;
    return [];
  })();
  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['teacherDashboardEarnings'] });
    refetch();
  };
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-2 sm:p-4 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
              <Wallet size={26} />
            </div>
            {t('teacher.earnings.earningsPageTitle', 'أرباح المعلم')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
            {t('teacher.earnings.earningsPageSubtitle', 'متابعة رصيدك المالي وتفاصيل مستحقات الحصص المنفذة')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isFetching}
            className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-soft cursor-pointer disabled:opacity-50"
            title={t('common.refresh', 'تحديث البيانات')}
          >
            <RefreshCw size={18} className={isFetching ? 'animate-spin text-[#005953]' : ''} />
          </button>
        </div>
      </div>
      <TeacherFinanceNavTabs />
      <TeacherBalanceOverview
        balance={balance}
        isLoading={isLoading}
        t={t}
      />
      <div className="space-y-3">
        <div className="text-start">
          <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
            {t('teacher.earnings.table.title', 'تفاصيل الأرباح ومستحقات الجلسات')}
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t('teacher.earnings.table.subtitle', 'قائمة بجميع الحصص المنجزة وقيمة كل حصة')}
          </p>
        </div>
        <TeacherEarningsTable
          records={records}
          isLoading={isLoading}
          t={t}
          isRtl={isRtl}
        />
      </div>
    </div>
  );
}
