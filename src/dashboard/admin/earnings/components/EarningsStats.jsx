import {
  TrendingUp,
  Coins,
  CreditCard,
  GraduationCap,
  Landmark,
  Tag,
  ShieldCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

function formatCurrency(val, currency = 'USD') {
  const num = Number(val || 0)
  const formatted = num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  if (currency === 'USD' || currency === '$') return `${formatted} $`
  if (currency === 'SAR') return `${formatted} ر.س`
  return `${formatted} ${currency}`
}

export default function EarningsStats({ stats, platform, currency = 'USD', mode = 'monthly' }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language?.startsWith('ar') ?? true
  const p = platform || stats?.platform || {}
  const curr = currency || p.currency || stats?.currency || 'USD'
  const grossCollected = p.grossCollected ?? stats?.totalRevenue ?? 0
  const netProfit = p.netProfit ?? stats?.netProfit ?? 0
  const revenueAfterFees = p.revenueAfterPaymentFees ?? stats?.platformEarnings ?? (grossCollected - (p.paymentFeesAmount ?? 0))
  const teacherEarnings = p.teacherEarnings ?? stats?.teacherPayments ?? 0
  const paymentFees = p.paymentFeesAmount ?? 0
  const couponDiscount = p.couponDiscountAmount ?? 0
  const items = [
    {
      title: t('adminDashboard.earnings.netProfit', 'صافي ربح المنصة'),
      subtitle: mode === 'all-time' ? t('adminDashboard.earnings.allTimeNet', 'صافي الربح التراكمي') : t('adminDashboard.earnings.monthlyNet', 'صافي ربح هذا الشهر'),
      value: formatCurrency(netProfit, curr),
      icon: TrendingUp,
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-200 dark:border-emerald-800/60',
      isHero: true,
    },
    {
      title: t('adminDashboard.earnings.grossCollected', 'إجمالي التحصيل'),
      subtitle: t('adminDashboard.earnings.grossCollectedDesc', 'المبالغ المحصلة من المشتركين'),
      value: formatCurrency(grossCollected, curr),
      icon: Coins,
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-100 dark:border-blue-900/40',
    },
    {
      title: t('adminDashboard.earnings.revenueAfterFees', 'الإيراد بعد رسوم الدفع'),
      subtitle: t('adminDashboard.earnings.revenueAfterFeesDesc', 'المتبقي بعد خصم بوابات الدفع'),
      value: formatCurrency(revenueAfterFees, curr),
      icon: CreditCard,
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      borderColor: 'border-indigo-100 dark:border-indigo-900/40',
    },
    {
      title: t('adminDashboard.earnings.teacherEarnings', 'أرباح ومستحقات المعلمين'),
      subtitle: t('adminDashboard.earnings.teacherEarningsDesc', 'نصيب المعلمين من الحصص'),
      value: formatCurrency(teacherEarnings, curr),
      icon: GraduationCap,
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      iconColor: 'text-amber-600 dark:text-amber-400',
      borderColor: 'border-amber-100 dark:border-amber-900/40',
    },
    {
      title: t('adminDashboard.earnings.paymentFees', 'رسوم بوابات الدفع'),
      subtitle: t('adminDashboard.earnings.paymentFeesDesc', 'عمولات المعالجة البنكية'),
      value: formatCurrency(paymentFees, curr),
      icon: Landmark,
      bgColor: 'bg-rose-50 dark:bg-rose-950/20',
      iconColor: 'text-rose-600 dark:text-rose-400',
      borderColor: 'border-rose-100 dark:border-rose-900/40',
    },
    {
      title: t('adminDashboard.earnings.couponDiscounts', 'خصومات الكوبونات'),
      subtitle: t('adminDashboard.earnings.couponDiscountsDesc', 'قيمة الخصومات الممنوحة'),
      value: formatCurrency(couponDiscount, curr),
      icon: Tag,
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-100 dark:border-purple-900/40',
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" dir={isRtl ? 'rtl' : 'ltr'}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-3xl p-6 border shadow-xs transition-all hover:shadow-md flex flex-col justify-between ${
            item.isHero
              ? 'bg-gradient-to-br from-emerald-500/10 via-white to-white dark:from-emerald-950/30 dark:via-slate-900 dark:to-slate-900 border-emerald-300 dark:border-emerald-700/60 ring-1 ring-emerald-500/20'
              : `bg-white dark:bg-slate-900 ${item.borderColor}`
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                {item.title}
              </span>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                {item.subtitle}
              </p>
            </div>
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.bgColor} shrink-0`}>
              <item.icon size={22} className={item.iconColor} />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-baseline justify-between">
            <h3 className={`text-2xl sm:text-3xl font-black ${item.iconColor}`}>
              {item.value}
            </h3>
            {item.isHero && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                <ShieldCheck size={12} />
                <span>صافي الأرباح</span>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
