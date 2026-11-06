import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Receipt, RefreshCw } from 'lucide-react';
import { teacherPaymentMethodsApi } from '@/shared/services/api/teacherPaymentMethodsApi';
import TeacherPayoutsList from '../earnings/components/TeacherPayoutsList';
import ProofImageModal from '../earnings/components/ProofImageModal';
import TeacherFinanceNavTabs from '../earnings/components/TeacherFinanceNavTabs';

const STALE_TIME_MS = 60 * 1000;

export default function TeacherPayouts() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [proofModal, setProofModal] = useState({ isOpen: false, url: '', title: '' });
  const {
    data: payoutsRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherPayoutsOnly', page],
    queryFn: () => teacherPaymentMethodsApi.fetchPayouts({ page, limit: 10 }),
    staleTime: STALE_TIME_MS,
  });
  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['teacherPayoutsOnly'] });
    refetch();
  };
  const handleViewProof = (url, title) => {
    setProofModal({ isOpen: true, url, title });
  };
  const handleCloseProof = () => {
    setProofModal({ isOpen: false, url: '', title: '' });
  };
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-2 sm:p-4 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
              <Receipt size={26} />
            </div>
            {t('teacher.earnings.payoutsPageTitle', 'إثباتات الدفع')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
            {t('teacher.earnings.payoutsPageSubtitle', 'سجل بجميع إثباتات الدفع والتحويلات المنفذة من الإدارة')}
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
      <TeacherPayoutsList
        payoutsData={payoutsRes}
        isLoading={isLoading}
        page={page}
        onPageChange={setPage}
        onViewProof={handleViewProof}
        t={t}
        isRtl={isRtl}
      />
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
