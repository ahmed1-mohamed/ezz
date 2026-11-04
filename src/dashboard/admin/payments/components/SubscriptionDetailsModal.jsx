import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  X,
  CreditCard,
  User,
  Users,
  Package,
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  AlertCircle,
  Clock3,
  ExternalLink,
  Copy,
  Receipt,
  Check,
  ShieldCheck,
  DollarSign,
  Percent,
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { adminPaymentsApi } from '@/shared/services/api/adminPaymentsApi'
import Spinner from '@/shared/components/Spinner'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${curr}`
}

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    return d.toLocaleString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dateStr
  }
}

export default function SubscriptionDetailsModal({
  isOpen,
  onClose,
  subscriptionId,
  initialData = null,
  isRtl = true,
}) {
  const [copiedKey, setCopiedKey] = React.useState(null)

  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  // Fetch full details if subscriptionId provided
  const { data: res, isLoading } = useQuery({
    queryKey: ['subscription-details', subscriptionId],
    queryFn: () => adminPaymentsApi.fetchSubscriptionById(subscriptionId),
    enabled: Boolean(isOpen && subscriptionId),
    staleTime: 60 * 1000,
  })

  if (!isOpen) return null

  const sub = res?.data || initialData || {}

  const handleCopy = (text, key) => {
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    toast.success(isRtl ? 'تم النسخ إلى الحافظة' : 'Copied to clipboard')
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            <CheckCircle2 size={14} />
            <span>{isRtl ? 'مدفوع بنجاح' : 'Paid'}</span>
          </span>
        )
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
            <Clock3 size={14} />
            <span>{isRtl ? 'قيد الانتظار' : 'Pending'}</span>
          </span>
        )
      case 'expired':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60">
            <AlertCircle size={14} />
            <span>{isRtl ? 'منتهي الصلاحية' : 'Expired'}</span>
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {status || '-'}
          </span>
        )
    }
  }

  const currency = sub.currency || 'USD'

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] text-start"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#005953]/10 dark:bg-emerald-950/50 text-[#005953] dark:text-emerald-400 flex items-center justify-center font-bold">
              <Receipt size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-slate-800 dark:text-white">
                  {isRtl ? 'تفاصيل عملية الاشتراك والدفع' : 'Subscription & Payment Details'}
                </h3>
                {getStatusBadge(sub.status)}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                ID: {sub.id || subscriptionId}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isLoading && !sub.id ? (
            <div className="py-16 flex flex-col items-center justify-center space-y-3">
              <Spinner />
              <p className="text-sm font-semibold text-slate-500">
                {isRtl ? 'جاري تحميل تفاصيل الاشتراك...' : 'Loading subscription details...'}
              </p>
            </div>
          ) : (
            <>
              {/* Financial Highlight Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 block">
                    {isRtl ? 'المبلغ النهائي' : 'Final Amount'}
                  </span>
                  <span className="text-xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-1 block">
                    {formatVal(sub.finalAmount, currency)}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
                    {isRtl ? 'السعر الأساسي' : 'Base Amount'}
                  </span>
                  <span className="text-lg font-extrabold text-slate-700 dark:text-slate-300 mt-1 block">
                    {formatVal(sub.baseAmount, currency)}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                  <span className="text-[11px] font-bold text-purple-800 dark:text-purple-300 block">
                    {isRtl ? 'الخصم' : 'Discount'}
                  </span>
                  <span className="text-lg font-extrabold text-purple-700 dark:text-purple-400 mt-1 block">
                    {formatVal(sub.discountAmount, currency)}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40">
                  <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 block">
                    {isRtl ? 'الضريبة' : 'Tax'} ({sub.taxPercentage || 0}%)
                  </span>
                  <span className="text-lg font-extrabold text-amber-700 dark:text-amber-400 mt-1 block">
                    {formatVal(sub.taxAmount, currency)}
                  </span>
                </div>
              </div>

              {/* Parent & Package 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Parent Info Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2.5 text-[#005953] dark:text-emerald-400 font-bold text-sm border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <User size={18} />
                    <span>{isRtl ? 'بيانات ولي الأمر' : 'Parent Information'}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'الاسم:' : 'Name:'}</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{sub.parent?.name || '-'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'البريد الإلكتروني:' : 'Email:'}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 font-mono text-[11px]">{sub.parent?.email || '-'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'رقم الهاتف:' : 'Phone:'}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 font-mono" dir="ltr">{sub.parent?.phone || '-'}</span>
                    </div>

                    {sub.parent?.id && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'معرف الحساب:' : 'Parent ID:'}</span>
                        <span className="font-mono text-[10px] text-slate-400">{sub.parent.id}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Package Info Card */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2.5 text-[#005953] dark:text-emerald-400 font-bold text-sm border-b border-slate-100 dark:border-slate-800 pb-2.5">
                    <Package size={18} />
                    <span>{isRtl ? 'بيانات الباقة المشترك بها' : 'Package Information'}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'اسم الباقة:' : 'Package:'}</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{sub.package?.name || '-'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'نوع الباقة:' : 'Type:'}</span>
                      <span className="font-semibold">
                        {sub.package?.type === 'family' ? (
                          <span className="px-2 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 font-bold text-[11px]">
                            {isRtl ? 'عائلية' : 'Family'}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-bold text-[11px]">
                            {isRtl ? 'فردية' : 'Individual'}
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'الحصص لكل طالب:' : 'Sessions per student:'}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{sub.package?.sessionsPerStudent ?? '-'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">{isRtl ? 'إجمالي الحصص الممنوحة:' : 'Total sessions granted:'}</span>
                      <span className="font-extrabold text-[#005953] dark:text-emerald-400">
                        {sub.totalSessionsGranted ?? '-'} {isRtl ? 'حصة' : 'sessions'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscribed Students Section */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-sm">
                    <Users size={18} className="text-[#005953] dark:text-emerald-400" />
                    <span>{isRtl ? 'الطلاب المستفيدون من الاشتراك' : 'Enrolled Students'}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">
                    ({(sub.students || []).length} {isRtl ? 'طلاب' : 'students'})
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(sub.students || []).length === 0 ? (
                    <p className="text-xs text-slate-400 italic py-2">
                      {isRtl ? 'لا يوجد طلاب محددون' : 'No students specified'}
                    </p>
                  ) : (
                    sub.students.map((student, idx) => (
                      <div
                        key={student.id || idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#005953]/10 text-[#005953] dark:text-emerald-400 font-bold flex items-center justify-center text-xs">
                            {idx + 1}
                          </div>
                          <div>
                            <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block">
                              {student.name}
                            </span>
                            {student.id && (
                              <span className="font-mono text-[10px] text-slate-400">
                                {student.id}
                              </span>
                            )}
                          </div>
                        </div>

                        {sub.coupon?.appliedToStudentId === student.id && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-[10px] font-bold">
                            <Tag size={10} />
                            <span>{sub.coupon.code}</span>
                          </span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Coupon Info (If Applied) */}
              {sub.coupon && (
                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/70 dark:border-purple-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0">
                      <Percent size={18} />
                    </div>
                    <div>
                      <span className="font-extrabold text-purple-950 dark:text-purple-200 block">
                        {isRtl ? 'تم تطبيق كود خصم:' : 'Discount Coupon Applied:'} {sub.coupon.code}
                      </span>
                      <span className="text-purple-700 dark:text-purple-300 text-[11px]">
                        {isRtl ? `نسبة الخصم: ${sub.coupon.discountPercentage}%` : `Discount: ${sub.coupon.discountPercentage}%`}
                      </span>
                    </div>
                  </div>

                  <span className="font-bold text-purple-800 dark:text-purple-300">
                    -{formatVal(sub.discountAmount, currency)}
                  </span>
                </div>
              )}

              {/* Timestamps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 dark:text-slate-500 font-medium block">
                    {isRtl ? 'تاريخ الإنشاء:' : 'Created At:'}
                  </span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 mt-1 block">
                    {formatDate(sub.createdAt, isRtl)}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 dark:text-slate-500 font-medium block">
                    {isRtl ? 'تاريخ الدفع الفعلي:' : 'Paid At:'}
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 mt-1 block">
                    {formatDate(sub.paidAt, isRtl)}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 dark:text-slate-500 font-medium block">
                    {isRtl ? 'انتهاء صلاحية الرابط:' : 'Expires At:'}
                  </span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 mt-1 block">
                    {formatDate(sub.expiresAt, isRtl)}
                  </span>
                </div>
              </div>

              {/* Stripe Gateways References */}
              {(sub.stripeSessionId || sub.stripePaymentIntentId || sub.checkoutUrl) && (
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 space-y-2 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">
                    {isRtl ? 'بيانات بوابة الدفع (Stripe)' : 'Payment Gateway Data (Stripe)'}
                  </span>

                  {sub.stripeSessionId && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        Session: {sub.stripeSessionId}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(sub.stripeSessionId, 'session')}
                        className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                        title={isRtl ? 'نسخ معرف الجلسة' : 'Copy session ID'}
                      >
                        {copiedKey === 'session' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      </button>
                    </div>
                  )}

                  {sub.stripePaymentIntentId && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        PaymentIntent: {sub.stripePaymentIntentId}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(sub.stripePaymentIntentId, 'pi')}
                        className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                        title={isRtl ? 'نسخ معرف نية الدفع' : 'Copy payment intent ID'}
                      >
                        {copiedKey === 'pi' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      </button>
                    </div>
                  )}

                  {sub.checkoutUrl && (
                    <a
                      href={sub.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005953] dark:text-emerald-400 hover:underline pt-1"
                    >
                      <ExternalLink size={14} />
                      <span>{isRtl ? 'فتح رابط الدفع (Checkout URL)' : 'Open Checkout Link'}</span>
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end bg-slate-50/50 dark:bg-slate-800/30">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer"
          >
            {isRtl ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
