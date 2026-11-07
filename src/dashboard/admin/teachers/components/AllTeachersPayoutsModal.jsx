import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useQuery } from '@tanstack/react-query'
import {
  X,
  History,
  Coins,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Receipt,
  } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { teachersApi } from '@/shared/services/api/teachersApi'
import ProofImageModal from '@/dashboard/teacher/earnings/components/ProofImageModal'
import Spinner from '@/shared/components/Spinner'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${curr}`
}

export default function AllTeachersPayoutsModal({
  isOpen,
  onClose,
  isRtl = true,
}) {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const [searchVal, setSearchVal] = useState('')
  const [previewImage, setPreviewImage] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')
  const { data: res, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['all-teachers-payouts', page, searchVal],
    queryFn: () => teachersApi.fetchAllTeachersPayouts({ page, limit: 15, search: searchVal.trim() || undefined }),
    enabled: Boolean(isOpen),
    staleTime: 60 * 1000,
  })
  if (!isOpen || typeof document === 'undefined') return null
  const payoutsList = res?.data || []
  const statistics = res?.statistics || {}
  const pagination = res?.pagination || { currentPage: 1, totalPages: 1, totalItems: 0 }
  const handleOpenProof = (url, title) => {
    if (!url) return
    setPreviewImage(url)
    setPreviewTitle(title || 'إيصال التحويل المالي')
  }
  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 w-screen h-screen min-h-screen z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
      >
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold">
              <Receipt size={20} />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-800 dark:text-white">
                سجل التحويلات المالية لجميع المعلمين
              </h3>
              <p className="text-xs text-slate-400">
                سجل تفصيلي بكافة المبالغ المحولة يدوياً للمعلمين مع أرقام الحوالات وإثباتات الدفع
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => refetch()}
              title="تحديث البيانات"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw size={16} className={isFetching ? 'animate-spin' : ''} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 space-y-4 shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 block">
                  إجمالي المبالغ المحولة
                </span>
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                  {formatVal(statistics?.totalAmount)}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                <Coins size={20} />
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block">
                  عدد التحويلات الكلي
                </span>
                <span className="text-2xl font-black text-slate-800 dark:text-white mt-0.5 block">
                  {statistics?.totalPayouts ?? pagination.totalItems ?? 0}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold">
                <History size={20} />
              </div>
            </div>
          </div>
          <div className="relative">
            <Search className={`absolute ${isRtl ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 text-slate-400`} size={16} />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => {
                setSearchVal(e.target.value)
                setPage(1)
              }}
              placeholder="بحث باسم المعلم، رقم المرجع، أو اسم البنك..."
              className={`w-full ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/30`}
            />
          </div>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
          {isLoading ? (
            <div className="py-20 flex justify-center items-center">
              <Spinner />
            </div>
          ) : payoutsList.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-2">
              <Coins size={36} className="mx-auto text-slate-300 dark:text-slate-600" />
              <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
                {searchVal ? 'لا توجد تحويلات تطابق نتائج البحث' : 'لا توجد تحويلات مالية مسجلة بعد'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
              <table className="w-full text-xs text-start">
                <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-slate-500 font-extrabold">
                  <tr>
                    <th className="py-3 px-4 text-start">المعلم</th>
                    <th className="py-3 px-4 text-start">المبلغ المحول</th>
                    <th className="py-3 px-4 text-start">طريقة الاستلام</th>
                    <th className="py-3 px-4 text-start">رقم المرجع</th>
                    <th className="py-3 px-4 text-start">تاريخ التحويل</th>
                    <th className="py-3 px-4 text-start">المسؤول</th>
                    <th className="py-3 px-4 text-start">ملاحظات</th>
                    <th className="py-3 px-4 text-center">الإيصال</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {payoutsList.map((payout, idx) => {
                    const method = payout.paymentMethod || {}
                    const methodLabel =
                      method.bankName ||
                      method.instapayAddress ||
                      method.walletNumber ||
                      method.type ||
                      'حوالة'
                    const tName = payout.teacher?.name || 'معلم'
                    return (
                      <tr
                        key={payout.id || payout._id || idx}
                        className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-extrabold text-slate-800 dark:text-white whitespace-nowrap">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                              {tName[0]}
                            </div>
                            <span>{tName}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-black text-[#0f7a6c] dark:text-emerald-400 text-sm whitespace-nowrap">
                          {formatVal(payout.amount)}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                          <div>
                            <span className="font-bold block">{methodLabel}</span>
                            {method.accountNumber && (
                              <span className="font-mono text-[10px] text-slate-400" dir="ltr">
                                {method.accountNumber}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-800 dark:text-white whitespace-nowrap">
                          {payout.referenceNumber || '-'}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                          {payout.paidAt || payout.createdAt?.split('T')[0] || '-'}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                          {payout.paidBy?.name || '-'}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 max-w-xs truncate">
                          {payout.notes || '-'}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          {payout.proofImage ? (
                            <button
                              type="button"
                              onClick={() =>
                                handleOpenProof(
                                  payout.proofImage,
                                  `إيصال تحويل - ${tName} (${formatVal(payout.amount)})`
                                )
                              }
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#0f7a6c] dark:text-emerald-400 text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <Eye size={12} />
                              <span>معاينة</span>
                            </button>
                          ) : (
                            <span className="text-slate-400 text-[11px]">-</span>
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
            <div className="flex items-center justify-between pt-4">
              <span className="text-xs text-slate-400 font-medium">
                صفحة {pagination.currentPage} من {pagination.totalPages} (إجمالي {pagination.totalItems} تحويل)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={pagination.currentPage <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  disabled={pagination.currentPage >= pagination.totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
        <ProofImageModal
          isOpen={Boolean(previewImage)}
          onClose={() => {
            setPreviewImage(null)
            setPreviewTitle('')
          }}
          imageUrl={previewImage}
          title={previewTitle}
          t={t}
        />
      </div>
    </div>,
    document.body
  )
}

