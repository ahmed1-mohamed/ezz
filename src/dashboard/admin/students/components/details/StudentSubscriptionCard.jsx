import { BookOpen, PlusCircle, CreditCard } from 'lucide-react'

const formatDate = (value, isRtl) => {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'
  return date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function StudentSubscriptionCard({ student, isRtl }) {
  const rawBalance = student?.sessionsBalance
  const isObj = typeof rawBalance === 'object' && rawBalance !== null
  const total = isObj ? Number(rawBalance.total || 0) : Number(rawBalance || 0)
  const used = isObj ? Number(rawBalance.used || 0) : 0
  const remaining = isObj
    ? (rawBalance.remaining !== undefined ? Number(rawBalance.remaining) : Math.max(0, total - used))
    : Number(rawBalance || 0)
  const manualAdded = isObj ? Number(rawBalance.manualAddedThisMonth || 0) : 0
  const sub = student?.lastSubscription || null
  const subName = sub
    ? (typeof sub.name === 'object' && sub.name !== null ? (isRtl ? sub.name.ar || sub.name.en : sub.name.en || sub.name.ar) : sub.name)
    : null
  const isExpired = sub?.expiresAt ? new Date(sub.expiresAt) < new Date() : false
  const subscriptionRows = sub
    ? [
        { label: isRtl ? 'الباقة' : 'Package', value: subName || '-' },
        { label: isRtl ? 'السعر' : 'Price', value: sub.price !== undefined && sub.price !== null ? String(sub.price) : '-' },
        { label: isRtl ? 'عدد الحصص' : 'Sessions', value: sub.sessionsCount ?? '-' },
        { label: isRtl ? 'تاريخ الاشتراك' : 'Subscribed At', value: formatDate(sub.subscribedAt, isRtl) },
        { label: isRtl ? 'تاريخ الانتهاء' : 'Expires At', value: formatDate(sub.expiresAt, isRtl) }
      ]
    : []
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <BookOpen className="text-[#005953]" size={20} />
        <h3 className="text-base font-bold">
          {isRtl ? 'ملخص رصيد الحصص' : 'Sessions Balance Summary'}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
        <div className="p-4 bg-[#f3f7f6] dark:bg-slate-950/30 rounded-2xl border border-slate-100/60 dark:border-slate-800/40 text-start space-y-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
            {isRtl ? 'الحصص المتبقية' : 'Remaining Sessions'}
          </span>
          <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 block">
            {remaining} {isRtl ? 'حصة' : 'Sessions'}
          </span>
        </div>
        <div className="p-4 bg-[#f3f7f6] dark:bg-slate-950/30 rounded-2xl border border-slate-100/60 dark:border-slate-800/40 text-start space-y-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
            {isRtl ? 'الحصص المستخدمة' : 'Used Sessions'}
          </span>
          <span className="text-xl font-black text-slate-700 dark:text-slate-200 block">
            {used} {isRtl ? 'حصة' : 'Sessions'}
          </span>
        </div>
        <div className="p-4 bg-[#f3f7f6] dark:bg-slate-950/30 rounded-2xl border border-slate-100/60 dark:border-slate-800/40 text-start space-y-1 col-span-2 sm:col-span-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
            {isRtl ? 'إجمالي الحصص' : 'Total Sessions'}
          </span>
          <span className="text-xl font-black text-slate-700 dark:text-slate-200 block">
            {total || (remaining + used)} {isRtl ? 'حصة' : 'Sessions'}
          </span>
        </div>
      </div>
      {manualAdded > 0 && (
        <div className="flex items-center gap-2 p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100/60 dark:border-amber-900/30 rounded-2xl text-xs font-semibold text-amber-700 dark:text-amber-400">
          <PlusCircle size={16} className="shrink-0 text-amber-600" />
          <span>
            {isRtl
              ? `تمت إضافة ${manualAdded} حصة يدوياً لهذا الطالب خلال هذا الشهر`
              : `${manualAdded} sessions were added manually this month`}
          </span>
        </div>
      )}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-800 dark:text-white">
            <CreditCard className="text-[#005953]" size={18} />
            <h4 className="text-sm font-bold">
              {isRtl ? 'آخر اشتراك' : 'Latest Subscription'}
            </h4>
          </div>
          {sub?.expiresAt && (
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isExpired
              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400'
              : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400'}`}
            >
              {isExpired ? (isRtl ? 'منتهي' : 'Expired') : (isRtl ? 'ساري' : 'Active')}
            </span>
          )}
        </div>
        {sub ? (
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {subscriptionRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-3 p-3 bg-slate-50/70 dark:bg-slate-950/30 rounded-xl">
                <dt className="text-xs font-bold text-slate-400 dark:text-slate-500">{row.label}</dt>
                <dd className="text-sm font-bold text-slate-700 dark:text-slate-200 text-end">{row.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="p-4 text-center text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50/70 dark:bg-slate-950/30 rounded-xl">
            {isRtl ? 'لا يوجد اشتراك مسجل لهذا الطالب' : 'No subscription recorded for this student'}
          </p>
        )}
      </div>
    </div>
  )
}
