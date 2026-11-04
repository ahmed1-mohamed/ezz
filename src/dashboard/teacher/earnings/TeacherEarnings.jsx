import { useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Wallet,
  Receipt,
  CreditCard,
  RefreshCw,
} from 'lucide-react'
import { teacherPaymentMethodsApi } from '@/shared/services/api/teacherPaymentMethodsApi'
import { showDeleteConfirm, showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert'
import TeacherBalanceOverview from './components/TeacherBalanceOverview'
import TeacherPaymentMethodsList from './components/TeacherPaymentMethodsList'
import TeacherPaymentMethodModal from './components/TeacherPaymentMethodModal'
import TeacherPayoutsList from './components/TeacherPayoutsList'
import ProofImageModal from './components/ProofImageModal'

const STALE_TIME_MS = 60 * 1000

export default function TeacherEarnings() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const isWithdrawalsRoute = location.pathname.includes('withdrawals')
  const activeTab = searchParams.get('tab') ? searchParams.get('tab') : (isWithdrawalsRoute ? 'payouts' : 'methods')
  const handleSelectTab = (tab) => {
    setSearchParams(tab === (isWithdrawalsRoute ? 'payouts' : 'methods') ? {} : { tab })
  }
  const [payoutsPage, setPayoutsPage] = useState(1)
  const [isMethodModalOpen, setIsMethodModalOpen] = useState(false)
  const [editingMethod, setEditingMethod] = useState(null)
  const [modalServerError, setModalServerError] = useState('')
  const [proofModal, setProofModal] = useState({ isOpen: false, url: '', title: '' })
  const {
    data: paymentMethodsRes,
    isLoading: isMethodsLoading,
    isFetching: isMethodsFetching,
    refetch: refetchMethods,
  } = useQuery({
    queryKey: ['teacherPaymentMethods'],
    queryFn: teacherPaymentMethodsApi.fetchPaymentMethods,
    staleTime: STALE_TIME_MS,
  })
  const {
    data: payoutsRes,
    isLoading: isPayoutsLoading,
    isFetching: isPayoutsFetching,
    refetch: refetchPayouts,
  } = useQuery({
    queryKey: ['teacherPayouts', payoutsPage],
    queryFn: () => teacherPaymentMethodsApi.fetchPayouts({ page: payoutsPage, limit: 10 }),
    staleTime: STALE_TIME_MS,
  })
  const balance = paymentMethodsRes?.balance || null
  const methods = Array.isArray(paymentMethodsRes?.data) ? paymentMethodsRes.data : []
  const refreshAll = () => {
    queryClient.invalidateQueries({ queryKey: ['teacherPaymentMethods'] })
    queryClient.invalidateQueries({ queryKey: ['teacherPayouts'] })
  }
  const getErrorMessage = (err, fallback) => {
    const raw = err?.response?.data?.message
    if (Array.isArray(raw)) return raw.filter(Boolean).join(' • ')
    if (typeof raw === 'string') return raw
    return err?.message || fallback
  }
  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      if (editingMethod?.id) {
        return teacherPaymentMethodsApi.updatePaymentMethod(editingMethod.id, payload)
      }
      return teacherPaymentMethodsApi.addPaymentMethod(payload)
    },
    onSuccess: () => {
      setIsMethodModalOpen(false)
      setEditingMethod(null)
      setModalServerError('')
      refreshAll()
      showSuccessToast(
        editingMethod
          ? t('teacher.earnings.modal.updateSuccess', 'تم تحديث طريقة الدفع بنجاح')
          : t('teacher.earnings.modal.addSuccess', 'تمت إضافة طريقة الدفع بنجاح'),
        isRtl
      )
    },
    onError: (err) => {
      const msg = getErrorMessage(err, t('common.error', 'حدث خطأ أثناء حفظ البيانات'))
      setModalServerError(msg)
      showErrorToast(msg, isRtl)
    },
  })
  const deleteMutation = useMutation({
    mutationFn: teacherPaymentMethodsApi.deletePaymentMethod,
    onSuccess: () => {
      refreshAll()
      showSuccessToast(t('teacher.earnings.methods.deleteSuccess', 'تم حذف طريقة الدفع بنجاح'), isRtl)
    },
    onError: (err) => {
      showErrorToast(getErrorMessage(err, t('common.error', 'حدث خطأ أثناء الحذف')), isRtl)
    },
  })
  const setDefaultMutation = useMutation({
    mutationFn: teacherPaymentMethodsApi.setDefaultPaymentMethod,
    onSuccess: () => {
      refreshAll()
      showSuccessToast(t('teacher.earnings.methods.setDefaultSuccess', 'تم تعيين طريقة الدفع كأساسية بنجاح'), isRtl)
    },
    onError: (err) => {
      showErrorToast(getErrorMessage(err, t('common.error', 'حدث خطأ أثناء العملية')), isRtl)
    },
  })
  const handleOpenAddModal = () => {
    setEditingMethod(null)
    setModalServerError('')
    setIsMethodModalOpen(true)
  }
  const handleOpenEditModal = (method) => {
    setEditingMethod(method)
    setModalServerError('')
    setIsMethodModalOpen(true)
  }
  const handleDeleteMethod = async (method) => {
    const isConfirmed = await showDeleteConfirm(
      isRtl,
      method.accountHolderName || method.bankName || t('teacher.earnings.methods.types.bank_transfer', 'طريقة الدفع')
    )
    if (!isConfirmed) return
    deleteMutation.mutate(method.id)
  }
  const handleSetDefault = (methodId) => {
    setDefaultMutation.mutate(methodId)
  }
  const handleViewProof = (url, title) => {
    setProofModal({ isOpen: true, url, title })
  }
  const handleCloseProof = () => {
    setProofModal({ isOpen: false, url: '', title: '' })
  }
  const isRefreshing = isMethodsFetching || isPayoutsFetching
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn p-2 sm:p-4 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2.5 bg-[#005953]/10 dark:bg-[#005953]/20 rounded-2xl text-[#005953] dark:text-brand-400">
              <Wallet size={26} />
            </div>
            {t('teacher.earnings.pageTitle', 'الأرباح وطرق الدفع')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
            {t('teacher.earnings.pageSubtitle', 'إدارة طرق استلام مستحقاتك ومتابعة رصيدك المالي وسجل التحويلات المنفذة')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={refreshAll}
            disabled={isRefreshing}
            className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-soft cursor-pointer"
            title={t('common.refresh', 'تحديث البيانات')}
          >
            <RefreshCw size={18} className={isRefreshing ? 'animate-spin text-[#005953]' : ''} />
          </button>
        </div>
      </div>
      <TeacherBalanceOverview
        balance={balance}
        isLoading={isMethodsLoading}
        t={t}
      />
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
        <button
          type="button"
          onClick={() => handleSelectTab('methods')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'methods'
              ? 'bg-[#005953] text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <CreditCard size={18} />
          <span>{t('teacher.earnings.tabs.methods', 'طرق الدفع')}</span>
          {methods.length > 0 && (
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
              activeTab === 'methods'
                ? 'bg-white/20 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}>
              {methods.length}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => handleSelectTab('payouts')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'payouts'
              ? 'bg-[#005953] text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Receipt size={18} />
          <span>{t('teacher.earnings.tabs.payouts', 'سجل التحويلات')}</span>
          {payoutsRes?.statistics?.totalPayouts !== undefined && (
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-black ${
              activeTab === 'payouts'
                ? 'bg-white/20 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}>
              {payoutsRes.statistics.totalPayouts}
            </span>
          )}
        </button>
      </div>
      <div>
        {activeTab === 'methods' ? (
          <TeacherPaymentMethodsList
            methods={methods}
            isLoading={isMethodsLoading}
            onAdd={handleOpenAddModal}
            onEdit={handleOpenEditModal}
            onDelete={handleDeleteMethod}
            onSetDefault={handleSetDefault}
            onViewProof={handleViewProof}
            t={t}
          />
        ) : (
          <TeacherPayoutsList
            payoutsData={payoutsRes}
            isLoading={isPayoutsLoading}
            page={payoutsPage}
            onPageChange={setPayoutsPage}
            onViewProof={handleViewProof}
            t={t}
            isRtl={isRtl}
          />
        )}
      </div>
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
  )
}
