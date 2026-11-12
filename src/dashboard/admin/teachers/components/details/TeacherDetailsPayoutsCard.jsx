import { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Wallet,
  CreditCard,
  Building2,
  PlusCircle,
  Coins,
  History,
  Eye,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { teachersApi } from '@/shared/services/api/teachersApi'
import RecordTeacherPayoutModal from './RecordTeacherPayoutModal'
import ProofImageModal from '@/dashboard/teacher/earnings/components/ProofImageModal'
import Spinner from '@/shared/components/Spinner'
import { hasRealProofImage } from '@/shared/utils/paymentMethodUtils'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${curr}`
}

export default function TeacherDetailsPayoutsCard({
  teacher,
  isRtl = true,
}) {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const teacherId = teacher?.id || teacher?.teacher_id || teacher?._id
  const [activeTab, setActiveTab] = useState('methods') 
  const [payoutsPage, setPayoutsPage] = useState(1)
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [previewTitle, setPreviewTitle] = useState('')
  const {
    data: methodsRes,
    isLoading: isMethodsLoading,
    isFetching: isMethodsFetching,
    refetch: refetchMethods,
  } = useQuery({
    queryKey: ['teacher-payment-methods', teacherId],
    queryFn: () => teachersApi.fetchTeacherPaymentMethods(teacherId),
    enabled: Boolean(teacherId),
    staleTime: 60 * 1000,
  })
  const {
    data: payoutsRes,
    isLoading: isPayoutsLoading,
    isFetching: isPayoutsFetching,
    refetch: refetchPayouts,
  } = useQuery({
    queryKey: ['teacher-payouts', teacherId, payoutsPage],
    queryFn: () => teachersApi.fetchTeacherPayouts(teacherId, { page: payoutsPage, limit: 10 }),
    enabled: Boolean(teacherId),
    staleTime: 60 * 1000,
  })
  const balance = methodsRes?.balance || {}
  const paymentMethods = Array.isArray(methodsRes?.data)
    ? methodsRes.data
    : Array.isArray(methodsRes?.data?.paymentMethods)
    ? methodsRes.data.paymentMethods
    : Array.isArray(methodsRes?.paymentMethods)
    ? methodsRes.paymentMethods
    : Array.isArray(methodsRes?.data?.methods)
    ? methodsRes.data.methods
    : Array.isArray(methodsRes?.methods)
    ? methodsRes.methods
    : Array.isArray(methodsRes)
    ? methodsRes
    : []
  const payoutsList = payoutsRes?.data || []
  const payoutsStats = payoutsRes?.statistics || {}
  const payoutsPagination = payoutsRes?.pagination || { currentPage: 1, totalPages: 1 }
  const handlePayoutSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['teacher-payment-methods', teacherId] })
    queryClient.invalidateQueries({ queryKey: ['teacher-payouts', teacherId] })
    queryClient.invalidateQueries({ queryKey: ['all-teachers-payouts'] })
    queryClient.invalidateQueries({ queryKey: ['teachers'] })
  }
  const handleOpenProof = (url, title) => {
    if (!url) return
    setPreviewImage(url)
    setPreviewTitle(title || 'إثبات التحويل المالي')
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-7 space-y-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Wallet size={22} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 dark:text-white">
              البيانات المالية وطرق دفع المعلم
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              متابعة حسابات المعلم البنكية، أرصدته المستحقة، وتسجيل التحويلات المالية
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              refetchMethods()
              refetchPayouts()
            }}
            title="تحديث البيانات المالية"
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={16} className={isMethodsFetching || isPayoutsFetching ? 'animate-spin' : ''} />
          </button>
          <button
            type="button"
            onClick={() => setIsRecordModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-black shadow-md shadow-[#0f7a6c]/20 transition-all cursor-pointer active:scale-95"
          >
            <PlusCircle size={16} />
            <span>تسجيل تحويل مالي يدوي</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 block">إجمالي أرباح المعلم</span>
          <span className="text-lg sm:text-2xl font-black text-slate-800 dark:text-white block">
            {formatVal(balance?.totalEarnings)}
          </span>
          <span className="text-[10px] text-slate-400">إجمالي ما حققه من الحصص</span>
        </div>
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-amber-900 dark:text-amber-300 block">المستحق حالياً</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </div>
          <span className="text-lg sm:text-2xl font-black text-amber-600 dark:text-amber-400 block">
            {formatVal(balance?.dueEarnings)}
          </span>
          <span className="text-[10px] text-amber-700/80 dark:text-amber-400/80 font-bold">جاهز للتحويل المالي</span>
        </div>
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 space-y-1">
          <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 block">إجمالي المسحوبات</span>
          <span className="text-lg sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 block">
            {formatVal(balance?.totalPaid)}
          </span>
          <span className="text-[10px] text-emerald-700/80 dark:text-emerald-400/80">المبالغ المحولة بنجاح</span>
        </div>
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 block">عدد التحويلات</span>
          <span className="text-lg sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 block">
            {balance?.payoutsCount ?? 0}
          </span>
          <span className="text-[10px] text-slate-400">تحويل تم تنفيذه</span>
        </div>
      </div>
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('methods')}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'methods'
              ? 'bg-[#0f7a6c] text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
          }`}
        >
          <CreditCard size={15} />
          <span>طرق الدفع المعتمدة للمعلم</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20">
            {paymentMethods.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('payouts')}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer ${
            activeTab === 'payouts'
              ? 'bg-[#0f7a6c] text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800'
          }`}
        >
          <History size={15} />
          <span>سجل التحويلات المالية للمعلم</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20">
            {payoutsStats?.totalPayouts ?? payoutsList.length}
          </span>
        </button>
      </div>
      {activeTab === 'methods' && (
        <div className="space-y-4">
          {isMethodsLoading ? (
            <div className="py-12 flex justify-center items-center">
              <Spinner />
            </div>
          ) : paymentMethods.length === 0 ? (
            <div className="p-8 text-center bg-slate-50/60 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
              <CreditCard size={28} className="mx-auto text-slate-300 dark:text-slate-600" />
              <p className="font-bold text-sm text-slate-600 dark:text-slate-300">
                لم يقم المعلم بإضافة أي طريقة دفع حتى الآن
              </p>
              <p className="text-xs text-slate-400">
                يمكن للمعلم إضافة حساباته البنكية أو محفظته من خلال لوحة المعلم لديه
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => {
                const isDefault = method.isDefault
                const isConfirmed = method.isConfirmed
                const typeLabel =
                  method.type === 'bank_transfer'
                    ? 'تحويل بنكي'
                    : method.type === 'instapay'
                    ? 'InstaPay انستاباي'
                    : method.type === 'wallet'
                    ? 'محفظة إلكترونية'
                    : method.type === 'paypal'
                    ? 'PayPal'
                    : method.type === 'western_union'
                    ? 'ويسترن يونيون (Western Union)'
                    : method.type
                return (
                  <div
                    key={method.id || method._id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                      isDefault
                        ? 'bg-gradient-to-br from-emerald-500/5 to-white dark:from-emerald-950/20 dark:to-slate-900 border-emerald-300 dark:border-emerald-700/60 ring-1 ring-emerald-500/20'
                        : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                          <Building2 size={13} className="text-[#0f7a6c]" />
                          <span>{typeLabel}</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          {isConfirmed && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                              <ShieldCheck size={11} />
                              <span>معتمد</span>
                            </span>
                          )}
                          {isDefault && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                              <span>افتراضي ★</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2 text-xs">
                        {method.bankName && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">البنك:</span>
                            <span className="font-extrabold text-slate-800 dark:text-white">
                              {method.bankName}
                            </span>
                          </div>
                        )}
                        {method.accountHolderName && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">اسم صاحب الحساب:</span>
                            <span className="font-bold text-slate-700 dark:text-slate-200">
                              {method.accountHolderName}
                            </span>
                          </div>
                        )}
                        {method.accountNumber && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">رقم الحساب:</span>
                            <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">
                              {method.accountNumber}
                            </span>
                          </div>
                        )}
                        {method.iban && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">الآيبان IBAN:</span>
                            <span className="font-mono font-bold text-slate-800 dark:text-white text-[11px]" dir="ltr">
                              {method.iban}
                            </span>
                          </div>
                        )}
                        {method.instapayAddress && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">عنوان انستاباي:</span>
                            <span className="font-mono font-bold text-[#0f7a6c] dark:text-emerald-400" dir="ltr">
                              {method.instapayAddress}
                            </span>
                          </div>
                        )}
                        {method.walletNumber && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">المحفظة ({method.walletProvider || 'إلكترونية'}):</span>
                            <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">
                              {method.walletNumber}
                            </span>
                          </div>
                        )}
                        {method.paypalEmail && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">بريد بايبال:</span>
                            <span className="font-mono font-bold text-blue-600 dark:text-blue-400" dir="ltr">
                              {method.paypalEmail}
                            </span>
                          </div>
                        )}
                        {method.swiftCode && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">سويفت كود:</span>
                            <span className="font-mono text-slate-600 dark:text-slate-400" dir="ltr">
                              {method.swiftCode}
                            </span>
                          </div>
                        )}
                        {method.country && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">الدولة والمدينة:</span>
                            <span className="font-bold text-slate-800 dark:text-white">{method.country}</span>
                          </div>
                        )}
                        {method.phoneNumber && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">رقم الهاتف:</span>
                            <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">{method.phoneNumber}</span>
                          </div>
                        )}
                        {method.nationalIdOrPassport && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">رقم الهوية / الجواز:</span>
                            <span className="font-mono font-bold text-slate-800 dark:text-white" dir="ltr">{method.nationalIdOrPassport}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {hasRealProofImage(method.verificationImage) && (
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">إثبات ملكية الحساب:</span>
                        <button
                          type="button"
                          onClick={() => handleOpenProof(method.verificationImage, `إثبات حساب - ${method.bankName || typeLabel}`)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline cursor-pointer"
                        >
                          <Eye size={13} />
                          <span>معاينة صورة الحساب</span>
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
      {activeTab === 'payouts' && (
        <div className="space-y-4">
          {isPayoutsLoading ? (
            <div className="py-12 flex justify-center items-center">
              <Spinner />
            </div>
          ) : payoutsList.length === 0 ? (
            <div className="p-8 text-center bg-slate-50/60 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
              <Coins size={28} className="mx-auto text-slate-300 dark:text-slate-600" />
              <p className="font-bold text-sm text-slate-600 dark:text-slate-300">
                لا توجد تحويلات مالية مسجلة لهذا المعلم حتى الآن
              </p>
              <p className="text-xs text-slate-400">
                يمكنك الضغط على زر &quot;تسجيل تحويل مالي يدوي&quot; بالأعلى لتسجيل أول تحويل
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
                <table className="w-full text-xs text-start">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-slate-500 font-extrabold">
                    <tr>
                      <th className="py-3 px-4 text-start">التاريخ</th>
                      <th className="py-3 px-4 text-start">المبلغ المحول</th>
                      <th className="py-3 px-4 text-start">طريقة الاستلام</th>
                      <th className="py-3 px-4 text-start">رقم المرجع</th>
                      <th className="py-3 px-4 text-start">المسؤول</th>
                      <th className="py-3 px-4 text-start">البيان / ملاحظات</th>
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
                      return (
                        <tr
                          key={payout.id || payout._id || idx}
                          className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          <td className="py-3 px-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                            {payout.paidAt || payout.createdAt?.split('T')[0] || '-'}
                          </td>
                          <td className="py-3 px-4 font-black text-[#0f7a6c] dark:text-emerald-400 text-sm whitespace-nowrap">
                            {formatVal(payout.amount)}
                          </td>
                          <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                            <div>
                              <span className="font-bold block">{methodLabel}</span>
                              {method.accountNumber && (
                                <span className="font-mono text-[10px] text-slate-400" dir="ltr">
                                  {method.accountNumber}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-slate-800 dark:text-white whitespace-nowrap">
                            {payout.referenceNumber || '-'}
                          </td>
                          <td className="py-3 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                            {payout.paidBy?.name || '-'}
                          </td>
                          <td className="py-3 px-4 text-slate-500 max-w-xs truncate">
                            {payout.notes || '-'}
                          </td>
                          <td className="py-3 px-4 text-center whitespace-nowrap">
                            {payout.proofImage ? (
                              <button
                                type="button"
                                onClick={() =>
                                  handleOpenProof(
                                    payout.proofImage,
                                    `إيصال التحويل - ${payout.referenceNumber || ''} (${formatVal(payout.amount)})`
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
              {payoutsPagination.totalPages > 1 && (
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400">
                    صفحة {payoutsPagination.currentPage} من {payoutsPagination.totalPages}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={payoutsPagination.currentPage <= 1}
                      onClick={() => setPayoutsPage((p) => Math.max(1, p - 1))}
                      className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      type="button"
                      disabled={payoutsPagination.currentPage >= payoutsPagination.totalPages}
                      onClick={() => setPayoutsPage((p) => p + 1)}
                      className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
      <RecordTeacherPayoutModal
        isOpen={isRecordModalOpen}
        onClose={() => setIsRecordModalOpen(false)}
        teacher={teacher}
        paymentMethods={paymentMethods}
        dueEarnings={balance?.dueEarnings ?? 0}
        isRtl={isRtl}
        onSuccess={handlePayoutSuccess}
      />
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
  )
}

