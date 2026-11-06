import { useState } from 'react'
import {
  Receipt,
  Copy,
  Check,
  Calendar,
  UserCheck,
  ChevronRight,
  ChevronLeft,
  Building2,
  Smartphone,
  Zap,
  Globe,
  CreditCard,
  FileCheck,
} from 'lucide-react'

const getMethodIcon = (type) => {
  if (type === 'bank_transfer') return Building2
  if (type === 'mobile_wallet') return Smartphone
  if (type === 'instapay') return Zap
  if (type === 'paypal') return Globe
  return CreditCard
}

export default function TeacherPayoutsList({
  payoutsData,
  isLoading,
  page,
  onPageChange,
  onViewProof,
  t,
  isRtl,
}) {
  const [copiedKey, setCopiedKey] = useState(null)
  const currency = t('teacher.earnings.currency', 'ج.م')
  const stats = payoutsData?.statistics || {}
  const pagination = payoutsData?.pagination || {}
  const items = payoutsData?.data || []
  const totalPages = pagination.totalPages || 1
  const totalItems = pagination.totalItems || items.length
  const formatAmount = (val) => {
    const num = Number(val ?? 0)
    if (Number.isNaN(num)) return '0'
    return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
  const formatDate = (isoStr) => {
    if (!isoStr) return '—'
    const d = new Date(isoStr)
    if (Number.isNaN(d.getTime())) return String(isoStr)
    return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    })
  }
  const handleCopy = (key, text) => {
    if (!text) return
    navigator.clipboard?.writeText(String(text))
    setCopiedKey(key)
    setTimeout(() => {
      setCopiedKey(null)
    }, 2000)
  }
  if (isLoading && items.length === 0) {
    return (
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft animate-pulse space-y-4">
        <div className="h-6 w-1/4 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-1/2 rounded bg-slate-100 dark:bg-slate-800/60" />
        <div className="h-40 rounded-2xl bg-slate-100 dark:bg-slate-800/40" />
      </div>
    )
  }
  if (items.length === 0) {
    return (
      <div className="p-8 sm:p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
          <Receipt size={32} />
        </div>
        <div className="max-w-md mx-auto space-y-1.5">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            {t('teacher.earnings.payouts.noPayouts', 'لا توجد تحويلات مالية حتى الآن')}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {t('teacher.earnings.payouts.noPayoutsDesc', 'سيتم إدراج أي مبالغ يتم تحويلها إلى حسابك هنا مع إشعار التحويل ورقم المرجع.')}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50/60 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/40 text-start">
        <div className="space-y-0.5">
          <h3 className="text-base font-black text-slate-800 dark:text-white">
            {t('teacher.earnings.payouts.title', 'سجل التحويلات المالية')}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t('teacher.earnings.payouts.subtitle', 'سجل بجميع الدفعات والمستحقات التي تم تحويلها إليك بنجاح')}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
              {t('teacher.earnings.payouts.totalCount', 'إجمالي التحويلات')}
            </span>
            <span className="text-lg font-black text-blue-700 dark:text-blue-400">
              {stats.totalPayouts ?? totalItems}
            </span>
          </div>
          <div className="h-8 w-px bg-blue-200 dark:bg-blue-800" />
          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block">
              {t('teacher.earnings.payouts.totalTransferred', 'إجمالي المبالغ المحولة')}
            </span>
            <span className="text-lg font-black text-emerald-700 dark:text-emerald-400">
              {formatAmount(stats.totalAmount)} {currency}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((payout) => {
          const method = payout.paymentMethod || {}
          const Icon = getMethodIcon(method.type)
          const methodLabel = method.bankName || method.type || t('teacher.earnings.payouts.method', 'طريقة الاستلام')
          return (
            <div
              key={payout.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-md transition-all text-start space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Receipt size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-emerald-700 dark:text-emerald-400">
                        {formatAmount(payout.amount)} {currency}
                      </span>
                    </div>
                    {payout.referenceNumber && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                        <span>{t('teacher.earnings.payouts.referenceNumber', 'رقم المرجع')}:</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300" dir="ltr">{payout.referenceNumber}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(`ref_${payout.id}`, payout.referenceNumber)}
                          className="p-1 rounded text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                        >
                          {copiedKey === `ref_${payout.id}` ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                    <Calendar size={13} className="text-slate-400" />
                    <span dir="ltr">{formatDate(payout.paidAt || payout.createdAt)}</span>
                  </div>
                  {payout.paidBy?.name && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                      <UserCheck size={13} className="text-slate-400" />
                      <span>{t('teacher.earnings.payouts.paidBy', 'تم بواسطة')}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{payout.paidBy.name}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-medium">{t('teacher.earnings.payouts.method', 'طريقة الاستلام')}:</span>
                    <span className="font-bold text-slate-800 dark:text-white">
                      {methodLabel} {method.accountNumber ? `(${method.accountNumber})` : ''}
                    </span>
                  </div>
                </div>
                {payout.notes && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 italic line-clamp-1 max-w-sm">
                    &quot;{payout.notes}&quot;
                  </div>
                )}
                {payout.proofImage && (
                  <button
                    type="button"
                    onClick={() => onViewProof(payout.proofImage, `${t('teacher.earnings.payouts.proofModalTitle', 'إيصال التحويل')} - ${payout.referenceNumber || ''}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors cursor-pointer shrink-0 ms-auto sm:ms-0"
                  >
                    <FileCheck size={14} />
                    <span>{t('teacher.earnings.payouts.viewProof', 'معاينة الإيصال')}</span>
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-soft">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500">
            {page} / {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => onPageChange(page - 1)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => onPageChange(page + 1)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

