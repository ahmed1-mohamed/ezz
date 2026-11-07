import { useState } from 'react'
import {
  Eye,
  Copy,
  Check,
  CheckCircle2,
  Clock3,
  AlertCircle,
  ExternalLink,
  Users,
  Tag,
  DollarSign,
  } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-hot-toast'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${curr}`
}

function formatDate(dateStr, isRtl) {
  if (!dateStr) return '-'
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function PaymentsTable({
  subscriptions = [],
  onViewDetails,
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [copiedId, setCopiedId] = useState(null)
  const handleCopyId = (id, e) => {
    e.stopPropagation()
    if (!id) return
    navigator.clipboard.writeText(id)
    setCopiedId(id)
    toast.success(isRtl ? 'تم نسخ رقم المعاملة' : 'Transaction ID copied')
    setTimeout(() => setCopiedId(null), 2000)
  }
  const renderStatus = (status) => {
    switch (status) {
      case 'paid':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
            <CheckCircle2 size={13} />
            <span>{isRtl ? 'مدفوع' : 'Paid'}</span>
          </span>
        )
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
            <Clock3 size={13} />
            <span>{isRtl ? 'معلق' : 'Pending'}</span>
          </span>
        )
      case 'expired':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40">
            <AlertCircle size={13} />
            <span>{isRtl ? 'منتهي' : 'Expired'}</span>
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {status || '-'}
          </span>
        )
    }
  }
  if (subscriptions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <DollarSign size={24} />
        </div>
        <h4 className="text-base font-extrabold text-slate-700 dark:text-slate-200">
          {isRtl ? 'لا توجد عمليات دفع أو اشتراكات مطابقة' : 'No subscriptions or payments found'}
        </h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          {isRtl
            ? 'لم يتم العثور على أي عمليات دفع بناءً على الفلاتر أو معايير البحث الحالية.'
            : 'No payment transactions found matching the selected filters or search query.'}
        </p>
      </div>
    )
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden text-start">
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-extrabold">
              <th className="py-4 px-4">{isRtl ? 'رقم المعاملة' : 'Transaction ID'}</th>
              <th className="py-4 px-4">{isRtl ? 'ولي الأمر' : 'Parent'}</th>
              <th className="py-4 px-4">{isRtl ? 'الباقة والطلاب' : 'Package & Students'}</th>
              <th className="py-4 px-4">{isRtl ? 'المبلغ والخصم' : 'Amount'}</th>
              <th className="py-4 px-4">{isRtl ? 'التاريخ' : 'Date'}</th>
              <th className="py-4 px-4">{isRtl ? 'الحالة' : 'Status'}</th>
              <th className="py-4 px-4 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {subscriptions.map((sub) => {
              const currency = '$'
              const shortId = sub.id ? `${sub.id.slice(0, 8)}...${sub.id.slice(-4)}` : '-'
              const studentNames = (sub.students || []).map((s) => s.name).filter(Boolean)
              return (
                <tr
                  key={sub.id}
                  onClick={() => onViewDetails?.(sub)}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-slate-600 dark:text-slate-300 font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg text-[11px]">
                        {shortId}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleCopyId(sub.id, e)}
                        className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                        title={isRtl ? 'نسخ المعرف' : 'Copy ID'}
                      >
                        {copiedId === sub.id ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-100 block group-hover:text-[#005953] dark:group-hover:text-emerald-400 transition-colors">
                        {sub.parent?.name || '-'}
                      </span>
                      <span className="text-[11px] text-slate-400 block font-mono">
                        {sub.parent?.phone || sub.parent?.email || ''}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {sub.package?.name || '-'}
                        </span>
                        {sub.package?.type === 'family' ? (
                          <span className="px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 font-bold text-[10px]">
                            {isRtl ? 'عائلية' : 'Family'}
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-bold text-[10px]">
                            {isRtl ? 'فردية' : 'Individual'}
                          </span>
                        )}
                      </div>
                      {studentNames.length > 0 && (
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                          <Users size={12} className="shrink-0 text-slate-400" />
                          <span className="truncate max-w-[200px]" title={studentNames.join(' · ')}>
                            {studentNames.join(' · ')}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">
                            ({sub.totalSessionsGranted || 0} {isRtl ? 'حصة' : 'ses.'})
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <span className="font-extrabold text-[#005953] dark:text-emerald-400 text-sm block">
                        {formatVal(sub.finalAmount, currency)}
                      </span>
                      {sub.coupon && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-[10px] font-bold mt-0.5">
                          <Tag size={10} />
                          <span>{sub.coupon.code} (-{sub.coupon.discountPercentage}%)</span>
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-slate-600 dark:text-slate-300 font-medium block">
                      {formatDate(sub.paidAt || sub.createdAt, isRtl)}
                    </span>
                    {sub.paidAt && (
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                        {isRtl ? 'تاريخ الدفع' : 'Paid Date'}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {renderStatus(sub.status)}
                  </td>
                  <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => onViewDetails?.(sub)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-[#005953] hover:text-white dark:bg-slate-800 dark:hover:bg-emerald-600 text-slate-600 dark:text-slate-300 transition-all cursor-pointer shadow-sm active:scale-95"
                        title={isRtl ? 'عرض تفاصيل العملية' : 'View details'}
                      >
                        <Eye size={15} />
                      </button>
                      {sub.checkoutUrl && (
                        <a
                          href={sub.checkoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-700 dark:bg-teal-950/40 dark:text-teal-400 transition-all cursor-pointer shadow-sm"
                          title={isRtl ? 'رابط الدفع' : 'Checkout link'}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
