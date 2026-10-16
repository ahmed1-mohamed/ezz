import { BookOpen, PlusCircle } from 'lucide-react'

export default function StudentSubscriptionCard({ student, isRtl }) {
  const rawBalance = student?.sessionsBalance ?? student?.SessionsBalance ?? student?.remainingSessions ?? 0
  const total = typeof rawBalance === 'object' && rawBalance !== null
    ? Number(rawBalance.total || 0)
    : Number(rawBalance || 0)
  const used = typeof rawBalance === 'object' && rawBalance !== null
    ? Number(rawBalance.used || 0)
    : 0
  const remaining = typeof rawBalance === 'object' && rawBalance !== null
    ? (rawBalance.remaining !== undefined ? Number(rawBalance.remaining) : Math.max(0, total - used))
    : Number(rawBalance || 0)
  const manualAdded = typeof rawBalance === 'object' && rawBalance !== null
    ? Number(rawBalance.manualAddedThisMonth || 0)
    : 0

  const packageName = typeof student?.package === 'object' && student?.package !== null
    ? (student.package.name?.ar || student.package.name?.en || student.package.name)
    : (student?.packageName || student?.package || (isRtl ? 'الباقة الأساسية' : 'Standard Package'))

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white">
          <BookOpen className="text-[#005953]" size={20} />
          <h3 className="text-base font-bold">
            {isRtl ? 'ملخص رصيد الحصص (SessionsBalance)' : 'Sessions Balance Summary'}
          </h3>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-brand-500/10 text-[#005953] dark:text-emerald-400 font-bold">
          {packageName}
        </span>
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
    </div>
  )
}