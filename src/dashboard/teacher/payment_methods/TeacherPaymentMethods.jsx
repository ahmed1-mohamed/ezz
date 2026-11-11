import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CreditCard, RefreshCw } from 'lucide-react';
import { teacherPaymentMethodsApi } from '@/shared/services/api/teacherPaymentMethodsApi';
import { showDeleteConfirm, showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert';
import TeacherPaymentMethodsList from '../earnings/components/TeacherPaymentMethodsList';
import TeacherPaymentMethodModal from '../earnings/components/TeacherPaymentMethodModal';
import ProofImageModal from '../earnings/components/ProofImageModal';
import TeacherFinanceNavTabs from '../earnings/components/TeacherFinanceNavTabs';

const STALE_TIME_MS = 60 * 1000;

export default function TeacherPaymentMethods() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const queryClient = useQueryClient();
  const [isMethodModalOpen, setIsMethodModalOpen] = useState(false);
  const [editingMethod, setEditingMethod] = useState(null);
  const [modalServerError, setModalServerError] = useState('');
  const [proofModal, setProofModal] = useState({ isOpen: false, url: '', title: '' });
  const {
    data: paymentMethodsRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacherPaymentMethodsOnly'],
    queryFn: teacherPaymentMethodsApi.fetchPaymentMethods,
    staleTime: STALE_TIME_MS,
  });
  const methods = Array.isArray(paymentMethodsRes?.data) ? paymentMethodsRes.data : [];
  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['teacherPaymentMethodsOnly'] });
    refetch();
  };
  const getErrorMessage = (err, fallback) => {
    const raw = err?.response?.data?.message;
    if (Array.isArray(raw)) return raw.filter(Boolean).join(' • ');
    if (typeof raw === 'string') return raw;
    return err?.message || fallback;
  };
  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      if (editingMethod?.id) {
        return teacherPaymentMethodsApi.updatePaymentMethod(editingMethod.id, payload);
      }
      return teacherPaymentMethodsApi.addPaymentMethod(payload);
    },
    onSuccess: () => {
      setIsMethodModalOpen(false);
      setEditingMethod(null);
      setModalServerError('');
      handleRefresh();
      showSuccessToast(
        editingMethod
          ? t('teacher.earnings.modal.updateSuccess', 'تم تحديث طريقة الدفع بنجاح')
          : t('teacher.earnings.modal.addSuccess', 'تمت إضافة طريقة الدفع بنجاح'),
        isRtl
      );
    },
    onError: (err) => {
      const msg = getErrorMessage(err, t('common.error', 'حدث خطأ أثناء حفظ البيانات'));
      setModalServerError(msg);
      showErrorToast(msg, isRtl);
    },
  });
  const deleteMutation = useMutation({
    mutationFn: teacherPaymentMethodsApi.deletePaymentMethod,
    onSuccess: () => {
      handleRefresh();
      showSuccessToast(t('teacher.earnings.methods.deleteSuccess', 'تم حذف طريقة الدفع بنجاح'), isRtl);
    },
    onError: (err) => {
      showErrorToast(getErrorMessage(err, t('common.error', 'حدث خطأ أثناء الحذف')), isRtl);
    },
  });
  const setDefaultMutation = useMutation({
    mutationFn: teacherPaymentMethodsApi.setDefaultPaymentMethod,
    onSuccess: () => {
      handleRefresh();
      showSuccessToast(t('teacher.earnings.methods.setDefaultSuccess', 'تم تعيين طريقة الدفع كأساسية بنجاح'), isRtl);
    },
    onError: (err) => {
      showErrorToast(getErrorMessage(err, t('common.error', 'حدث خطأ أثناء العملية')), isRtl);
    },
  });
  const handleOpenAddModal = () => {
    setEditingMethod(null);
    setModalServerError('');
    setIsMethodModalOpen(true);
  };
  const handleOpenEditModal = (method) => {
    setEditingMethod(method);
    setModalServerError('');
    setIsMethodModalOpen(true);
  };
  const handleDeleteMethod = async (method) => {
    const isConfirmed = await showDeleteConfirm(
      isRtl,
      method.accountHolderName || method.bankName || t('teacher.earnings.methods.types.bank_transfer', 'طريقة الدفع')
    );
    if (!isConfirmed) return;
    deleteMutation.mutate(method.id);
  };
  const handleSetDefault = (methodId) => {
    setDefaultMutation.mutate(methodId);
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
              <CreditCard size={26} />
            </div>
            {t('teacher.earnings.methodsPageTitle', 'طرق الدفع')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
            {t('teacher.earnings.methodsPageSubtitle', 'إدارة وتعيين حساباتك البنكية ومحافظك لاستلام الأرباح')}
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
      <TeacherPaymentMethodsList
        methods={methods}
        isLoading={isLoading}
        onAdd={handleOpenAddModal}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteMethod}
        onSetDefault={handleSetDefault}
        onViewProof={handleViewProof}
        t={t}
      />
      <TeacherPaymentMethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSave={(data) => saveMutation.mutate(data)}
        isSubmitting={saveMutation.isPending}
        initialData={editingMethod}
        serverError={modalServerError}
        t={t}
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
