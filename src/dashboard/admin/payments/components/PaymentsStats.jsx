import {
  TrendingUp,
  DollarSign,
  GraduationCap,
  Percent,
  Clock3,
  } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function formatVal(val, curr = '$') {
  const num = Number(val || 0)
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ${curr}`
}

export default function PaymentsStats({ stats = {}, currency = '$' }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const paid = stats.paid || {}
  const pending = stats.pending || {}
  const expired = stats.expired || {}
  const items = [
    {
      title: isRtl ? 'إجمالي المحصل الفعلي' : 'Total Collected Amount',
      value: formatVal(paid.totalCollectedAmount, currency),
      subValue: isRtl ? `${paid.count ?? 0} عملية مدفوعة` : `${paid.count ?? 0} paid subscriptions`,
      icon: DollarSign,
      textColor: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-100 dark:border-emerald-900/30',
    },
    {
      title: isRtl ? 'صافي الإيرادات (قبل الضريبة)' : 'Net Revenue Before Tax',
      value: formatVal(paid.netRevenueBeforeTax, currency),
      subValue: isRtl ? `الضريبة: ${formatVal(paid.totalTaxAmount, currency)}` : `Tax: ${formatVal(paid.totalTaxAmount, currency)}`,
      icon: TrendingUp,
      textColor: 'text-[#005953] dark:text-emerald-400',
      iconBg: 'bg-[#005953]/10 dark:bg-emerald-950/40 text-[#005953] dark:text-emerald-400',
      borderColor: 'border-[#005953]/20 dark:border-emerald-900/30',
    },
    {
      title: isRtl ? 'إجمالي الحصص المباعة' : 'Total Sessions Sold',
      value: `${(paid.totalSessionsSold ?? 0).toLocaleString()} ${isRtl ? 'حصة' : 'sessions'}`,
      subValue: isRtl ? 'ممنوحة للطلاب' : 'Granted to students',
      icon: GraduationCap,
      textColor: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-100 dark:border-blue-900/30',
    },
    {
      title: isRtl ? 'الخصومات الممنوحة' : 'Discounts Given',
      value: formatVal(paid.totalDiscountGiven, currency),
      subValue: isRtl ? 'عبر الكوبونات الترويجية' : 'Via promo coupons',
      icon: Percent,
      textColor: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-100 dark:border-purple-900/30',
    },
    {
      title: isRtl ? 'معلقة ومنتهية الصلاحية' : 'Pending & Expired',
      value: `${pending.count ?? 0} ${isRtl ? 'معلقة' : 'pending'} / ${expired.count ?? 0} ${isRtl ? 'منتهية' : 'expired'}`,
      subValue: isRtl
        ? `منتهية: ${formatVal(expired.totalExpiredAmount, currency)}`
        : `Expired: ${formatVal(expired.totalExpiredAmount, currency)}`,
      icon: Clock3,
      textColor: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
      borderColor: 'border-amber-100 dark:border-amber-900/30',
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <div
            key={idx}
            className={`bg-white dark:bg-slate-900 rounded-3xl p-5 border ${item.borderColor} shadow-sm flex flex-col justify-between transition-all hover:shadow-md text-start`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-snug">
                {item.title}
              </span>
              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                <Icon size={18} />
              </div>
            </div>
            <div className="mt-3">
              <span className={`text-2xl font-extrabold tracking-tight ${item.textColor} block`}>
                {item.value}
              </span>
              {item.subValue && (
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1 block">
                  {item.subValue}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
