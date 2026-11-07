import { useState, useMemo } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Coins,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Receipt,
  PlusCircle,
  Landmark,
  Smartphone,
  Send,
  CreditCard,
  Wallet,
  CheckCircle2,
  FileCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { teachersApi, getImageUrl } from '@/shared/services/api/teachersApi'
import { formatPaymentMethodInfo } from '@/shared/utils/paymentMethodUtils'
import AdminRecordPayoutModal from './AdminRecordPayoutModal'
import ProofImageModal from '@/dashboard/teacher/earnings/components/ProofImageModal'
import Spinner from '@/shared/components/Spinner'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${curr}`
}

function formatDate(dateStr) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      return d.toISOString().split('T')[0]
    }
  } catch {
    return String(dateStr)
  }
  return String(dateStr)
}

function renderMethodIcon(iconType) {
  if (iconType === 'bank') return <Landmark size={14} className="text-[#0f7a6c] dark:text-emerald-400" />
  if (iconType === 'wallet') return <Smartphone size={14} className="text-amber-600 dark:text-amber-400" />
  if (iconType === 'instapay') return <Send size={14} className="text-indigo-600 dark:text-indigo-400" />
  if (iconType === 'paypal') return <CreditCard size={14} className="text-blue-600 dark:text-blue-400" />
  return <Wallet size={14} className="text-slate-500 dark:text-slate-400" />
}

export default function AdminPayoutsSection({
  teachersList = [],
  onPayoutRecorded,
}) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [previewImage, setPreviewImage] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false)
  const {
    data: res,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['all-teachers-payouts-section', page, searchTerm],
    queryFn: () => teachersApi.fetchAllTeachersPayouts({ page, limit: 12, search: searchTerm.trim() || undefined }),
    staleTime: 60 * 1000,
  })
  const rawList = res?.data || (Array.isArray(res) ? res : [])
  const payoutsList = Array.isArray(rawList) ? rawList : []
  const pagination = res?.pagination || { currentPage: page, totalPages: 1, totalItems: payoutsList.length }
  const handleOpenProof = (url, title) => {
    if (!url) return
    setPreviewImage(url)
    setPreviewTitle(title || (isRtl ? 'إيصال التحويل المالي' : 'Proof of Payment'))
  }
  const handleModalSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['all-teachers-payouts-section'] })
    queryClient.invalidateQueries({ queryKey: ['admin-teachers-lookup-list'] })
    onPayoutRecorded?.()
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm p-6 sm:p-7 space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold">
              <Receipt size={18} />
            </div>
            <h3 className="font-extrabold text-slate-800 dark:text-white text-lg">
              {isRtl ? 'طلبات السحب وإثباتات الدفع' : 'Payout Requests & Payment Proofs'}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {pagination.totalItems || payoutsList.length} {isRtl ? 'تحويلاً مسجلاً' : 'payouts'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {isRtl
              ? 'سجل الحوالات وإثباتات الدفع المحولة للمعلمين مع إمكانية إرسال طلب دفع جديد'
              : 'Record of teacher payouts, payment proofs, and bank receipts'}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative min-w-[200px] flex-1 sm:flex-initial">
            <Search className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400`} size={15} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setPage(1)
              }}
              placeholder={isRtl ? 'بحث باسم المعلم أو المرجع...' : 'Search teacher or reference...'}
              className={`w-full ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30`}
            />
          </div>
          <button
            type="button"
            onClick={() => setIsRecordModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <PlusCircle size={15} />
            <span>{isRtl ? 'تسجيل تحويل مالي للمعلم' : 'Record Teacher Payout'}</span>
          </button>
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            title={isRtl ? 'تحديث البيانات' : 'Refresh'}
            className="p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <RotateCcw size={15} className={isFetching ? 'animate-spin text-[#0f7a6c]' : ''} />
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="py-16 flex flex-col items-center justify-center gap-3">
          <Spinner />
          <span className="text-xs font-bold text-slate-400">{t('common.loading', 'جاري التحميل...')}</span>
        </div>
      ) : payoutsList.length === 0 ? (
        <div className="py-16 text-center text-slate-400 space-y-2 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
          <Coins size={36} className="mx-auto text-slate-300 dark:text-slate-600" />
          <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
            {searchTerm ? (isRtl ? 'لا توجد تحويلات تطابق نتائج البحث' : 'No payouts match search') : (isRtl ? 'لا توجد طلبات سحب أو تحويلات مالية مسجلة حالياً' : 'No payout records currently')}
          </p>
          <button
            type="button"
            onClick={() => setIsRecordModalOpen(true)}
            className="text-xs font-bold text-[#0f7a6c] hover:underline mt-2 inline-block cursor-pointer"
          >
            {isRtl ? '+ تسجيل تحويل مالي جديد الآن' : '+ Record new payout now'}
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
          <table className="w-full text-xs text-start">
            <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-extrabold">
              <tr>
                <th className="py-3 px-4 text-start">{isRtl ? 'المعلم' : 'Teacher'}</th>
                <th className="py-3 px-4 text-start">{isRtl ? 'المبلغ' : 'Amount'}</th>
                <th className="py-3 px-4 text-start">{isRtl ? 'طريقة الاستلام' : 'Receipt Method'}</th>
                <th className="py-3 px-4 text-start">{isRtl ? 'رقم الحساب / المرجع' : 'Account / Ref'}</th>
                <th className="py-3 px-4 text-start">{isRtl ? 'التاريخ' : 'Date'}</th>
                <th className="py-3 px-4 text-start">{isRtl ? 'الحالة' : 'Status'}</th>
                <th className="py-3 px-4 text-start">{isRtl ? 'المسؤول' : 'Admin'}</th>
                <th className="py-3 px-4 text-center">{isRtl ? 'الإجراءات / الإيصال' : 'Proof Receipt'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {payoutsList.map((payout, idx) => {
                const method = payout.paymentMethod || {}
                const info = formatPaymentMethodInfo(method, isRtl)
                const teacherObj = payout.teacher || {}
                const tName = typeof teacherObj.name === 'object' ? (teacherObj.name?.ar || teacherObj.name?.en) : (teacherObj.name || payout.teacherName || (isRtl ? 'معلم' : 'Teacher'))
                const tAvatar = teacherObj.avatar || teacherObj.image || teacherObj.photo
                const initial = String(tName).trim()[0] || 'م'
                return (
                  <tr
                    key={payout.id || payout._id || idx}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-extrabold text-slate-800 dark:text-white whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden border border-teal-100 dark:border-emerald-900/40">
                          {tAvatar ? (
                            <img
                              src={getImageUrl(tAvatar)}
                              alt={tName}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                          ) : (
                            <span>{initial}</span>
                          )}
                        </div>
                        <div>
                          <span className="block font-bold">{tName}</span>
                          {teacherObj.id && (
                            <span className="text-[10px] text-slate-400 font-mono">
                              ID: #{String(teacherObj.id).slice(-5)}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-black text-[#0f7a6c] dark:text-emerald-400 text-sm whitespace-nowrap">
                      {formatVal(payout.amount, payout.currency || '$')}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                          {renderMethodIcon(info.iconType)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-800 dark:text-white">{info.title}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                              {info.typeLabel}
                            </span>
                          </div>
                          {info.accountHolder && (
                            <span className="text-[10px] text-slate-400 block">
                              {info.accountHolder}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 dark:text-slate-300 whitespace-nowrap">
                      <div>
                        {info.subtitle && (
                          <span className="font-bold block" dir="ltr">{info.subtitle}</span>
                        )}
                        {payout.referenceNumber && (
                          <span className="text-[10px] text-slate-400 font-mono block">
                            Ref: {payout.referenceNumber}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                      {formatDate(payout.paidAt || payout.createdAt)}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        <CheckCircle2 size={12} />
                        <span>{isRtl ? 'تم التحويل' : 'Transferred'}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {payout.paidBy?.name || '-'}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {payout.proofImage ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleOpenProof(
                              payout.proofImage,
                              `${isRtl ? 'إيصال تحويل' : 'Transfer Proof'} - ${tName} (${formatVal(payout.amount)})`
                            )
                          }
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-[#0f7a6c] dark:text-emerald-400 text-xs font-bold transition-colors cursor-pointer"
                        >
                          <FileCheck size={13} />
                          <span>{isRtl ? 'معاينة الإيصال' : 'View Proof'}</span>
                        </button>
                      ) : (
                        <span className="text-slate-400 text-xs font-medium">{isRtl ? 'بدون إيصال' : 'No receipt'}</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-400 font-medium">
            {isRtl
              ? `صفحة ${pagination.currentPage} من ${pagination.totalPages} (إجمالي ${pagination.totalItems} تحويل)`
              : `Page ${pagination.currentPage} of ${pagination.totalPages} (Total ${pagination.totalItems})`}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={pagination.currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
            <button
              type="button"
              disabled={pagination.currentPage >= pagination.totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      )}
      <AdminRecordPayoutModal
        isOpen={isRecordModalOpen}
        onClose={() => setIsRecordModalOpen(false)}
        teachersList={teachersList}
        isRtl={isRtl}
        onSuccess={handleModalSuccess}
      />
      <ProofImageModal
        isOpen={Boolean(previewImage)}
        onClose={() => setPreviewImage(null)}
        imageUrl={previewImage}
        title={previewTitle}
        t={t}
      />
    </div>
  )
}

