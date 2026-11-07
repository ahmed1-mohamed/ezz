import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Wallet, RefreshCw, Receipt, Layers, FileCheck } from 'lucide-react';
import { teacherEarningsApi } from '@/shared/services/api/teacherEarningsApi';
import { teacherPaymentMethodsApi } from '@/shared/services/api/teacherPaymentMethodsApi';
import TeacherBalanceOverview from './components/TeacherBalanceOverview';
import TeacherEarningsTable from './components/TeacherEarningsTable';
import TeacherPayoutsList from './components/TeacherPayoutsList';
import ProofImageModal from './components/ProofImageModal';
import TeacherFinanceNavTabs from './components/TeacherFinanceNavTabs';

const STALE_TIME_MS = 60 * 1000;

export default function TeacherEarnings({ defaultSection = 'all' }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const queryClient = useQueryClient();
  const [activeSection, setActiveSection] = useState(defaultSection);
  const [payoutPage, setPayoutPage] = useState(1);
  const [proofModal, setProofModal] = useState({ isOpen: false, url: '', title: '' });
  const {
    data: earningsRes,
    isLoading: isLoadingEarnings,
    isFetching: isFetchingEarnings,
    refetch: refetchEarnings,
  } = useQuery({
    queryKey: ['teacherDashboardEarnings'],
    queryFn: teacherEarningsApi.fetchEarnings,
    staleTime: STALE_TIME_MS,
  });
  const {
    data: payoutsRes,
    isLoading: isLoadingPayouts,
    isFetching: isFetchingPayouts,
    refetch: refetchPayouts,
  } = useQuery({
    queryKey: ['teacherPayoutsInEarnings', payoutPage],
    queryFn: () => teacherPaymentMethodsApi.fetchPayouts({ page: payoutPage, limit: 10 }),
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
    queryClient.invalidateQueries({ queryKey: ['teacherPayoutsInEarnings'] });
    refetchEarnings();
    refetchPayouts();
  };
  const handleViewProof = (url, title) => {
    setProofModal({ isOpen: true, url, title });
  };
  const handleCloseProof = () => {
    setProofModal({ isOpen: false, url: '', title: '' });
  };
  const isRefreshing = isFetchingEarnings || isFetchingPayouts;
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-2 sm:p-4 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
              <Wallet size={26} />
            </div>
            {t('teacher.earnings.earningsPageTitle', 'الأرباح وإثباتات الدفع')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
            {t('teacher.earnings.earningsPageSubtitle', 'متابعة رصيدك المالي، مستحقات الحصص المنفذة، وإثباتات التحويلات البنكية في مكان واحد')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-soft cursor-pointer disabled:opacity-50"
            title={t('common.refresh', 'تحديث البيانات')}
          >
            <RefreshCw size={18} className={isRefreshing ? 'animate-spin text-[#005953]' : ''} />
          </button>
        </div>
      </div>
      <TeacherFinanceNavTabs />
      <TeacherBalanceOverview
        balance={balance}
        isLoading={isLoadingEarnings}
        t={t}
        isRtl={isRtl}
      />
      <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-3 flex-wrap">
        <button
          type="button"
          onClick={() => setActiveSection('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSection === 'all'
              ? 'bg-[#005953] text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Layers size={14} />
          <span>{isRtl ? 'عرض الكل معاً' : 'View All'}</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('sessions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSection === 'sessions'
              ? 'bg-[#005953] text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileCheck size={14} />
          <span>{isRtl ? 'مستحقات الحصص المنفذة' : 'Sessions Earnings'}</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('payouts')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSection === 'payouts'
              ? 'bg-[#005953] text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Receipt size={14} />
          <span>{isRtl ? 'إثباتات الدفع والتحويلات' : 'Payment Proofs'}</span>
        </button>
      </div>
      {(activeSection === 'all' || activeSection === 'sessions') && (
        <div className="space-y-3">
          <div className="text-start">
            <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
              <FileCheck size={18} className="text-[#005953]" />
              <span>{t('teacher.earnings.table.title', 'تفاصيل الأرباح ومستحقات الجلسات')}</span>
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {t('teacher.earnings.table.subtitle', 'قائمة بجميع الحصص المنجزة وقيمة كل حصة')}
            </p>
          </div>
          <TeacherEarningsTable
            records={records}
            isLoading={isLoadingEarnings}
            t={t}
            isRtl={isRtl}
          />
        </div>
      )}
      {(activeSection === 'all' || activeSection === 'payouts') && (
        <div className="space-y-3 pt-2">
          <div className="text-start">
            <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
              <Receipt size={18} className="text-[#005953]" />
              <span>{t('teacher.earnings.payouts.title', 'إثباتات الدفع وسجل التحويلات المالية')}</span>
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {t('teacher.earnings.payouts.subtitle', 'سجل بجميع الدفعات والمستحقات التي تم تحويلها إليك بنجاح مع إيصالات الدفع')}
            </p>
          </div>
          <TeacherPayoutsList
            payoutsData={payoutsRes}
            isLoading={isLoadingPayouts}
            page={payoutPage}
            onPageChange={setPayoutPage}
            onViewProof={handleViewProof}
            t={t}
            isRtl={isRtl}
          />
        </div>
      )}
      <ProofImageModal
        isOpen={proofModal.isOpen}
        onClose={handleCloseProof}
        imageUrl={proofModal.url}
        title={proofModal.title}
        t={t}
      />
    </div>
  );
}
