import { useState } from 'react'
import { Users, Plus } from 'lucide-react'
import AddChildModal from './AddChildModal'

export default function ParentChildrenSection({
  childrenList = [],
  isRtl = true,
  onAddChild,
  onViewChildDetails,
}) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const defaultSampleChildren = [
    {
      id: 'sample-1',
      name: isRtl ? 'علي خالد' : 'Ali Khaled',
      joinDate: '20-02-2025',
      subject: isRtl ? 'اللغة العربية' : 'Arabic Language',
      usedSessions: 4,
      remainingSessions: 12,
      totalSessions: 16,
    },
    {
      id: 'sample-2',
      name: isRtl ? 'سعاد عمر' : 'Souad Omar',
      joinDate: '05-03-2025',
      subject: isRtl ? 'القرآن' : 'Quran',
      usedSessions: 8,
      remainingSessions: 10,
      totalSessions: 18,
    },
    {
      id: 'sample-3',
      name: isRtl ? 'يوسف منصور' : 'Youssef Mansour',
      joinDate: '10-04-2025',
      subject: isRtl ? 'العربية و القرآن' : 'Arabic & Quran',
      usedSessions: 5,
      remainingSessions: 3,
      totalSessions: 8,
    },
  ]

  const displayList = Array.isArray(childrenList) && childrenList.length > 0
    ? childrenList.map((child, index) => {
        if (typeof child === 'string') {
          return {
            id: child,
            name: `${isRtl ? 'طالب' : 'Student'} #${index + 1}`,
            joinDate: '20-02-2025',
            subject: isRtl ? 'اللغة العربية' : 'Arabic',
            usedSessions: 4,
            remainingSessions: 12,
            totalSessions: 16,
          }
        }
        const nameStr = typeof child.name === 'object'
          ? (isRtl ? child.name?.ar || child.name?.en : child.name?.en || child.name?.ar)
          : (child.name || `${isRtl ? 'طالب' : 'Student'} #${index + 1}`)

        const used = Number(child.usedSessions ?? child.completedSessions ?? child.attendedSessions ?? 4)
        const total = Number(child.totalSessions ?? child.packageSessions ?? (used + (child.remainingSessions ?? 12)) ?? 16)
        const remaining = Number(child.remainingSessions ?? Math.max(0, total - used))

        const rawDate = child.joinDate || child.createdAt || '2025-02-20'
        let formattedDate = rawDate
        if (rawDate && rawDate.includes('T')) {
          const d = new Date(rawDate)
          if (!isNaN(d.getTime())) {
            const day = String(d.getDate()).padStart(2, '0')
            const month = String(d.getMonth() + 1).padStart(2, '0')
            const year = d.getFullYear()
            formattedDate = `${day}-${month}-${year}`
          }
        }

        return {
          id: child.id || child._id || child.student_id || `child-${index}`,
          name: nameStr,
          joinDate: formattedDate,
          subject: child.subject || child.curriculum || child.grade || (isRtl ? 'اللغة العربية' : 'Arabic'),
          usedSessions: used,
          remainingSessions: remaining,
          totalSessions: total,
        }
      })
    : defaultSampleChildren

  const existingIds = displayList.map((c) => c.id)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#00594C]/20 dark:border-emerald-500/30 text-[#00594C] dark:text-emerald-400 hover:bg-[#00594C]/5 text-xs font-bold transition-all cursor-pointer active:scale-95"
        >
          <Plus size={14} />
          <span>{isRtl ? 'إضافة ابن' : 'Add Child'}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-800 dark:text-white">
            {isRtl ? `الأبناء المرتبطون (${displayList.length})` : `Linked Children (${displayList.length})`}
          </span>
          <Users size={18} className="text-[#00594C] dark:text-emerald-400" />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800/80 shadow-soft">
        <div className="text-center mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'متابعة الأبناء' : 'Children Follow-up'}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
            {isRtl ? 'جميع معلومات أبنائك المسجلين' : 'All enrolled children info'}
          </p>
        </div>

        <div className="space-y-3">
          {displayList.map((child) => {
            const total = Math.max(1, child.totalSessions || 1)
            const usedPct = Math.min(100, Math.max(0, (child.usedSessions / total) * 100))
            const isLowRemaining = child.remainingSessions <= 3
            const isMediumRemaining = child.remainingSessions > 3 && child.remainingSessions <= 10

            const progressColor = isLowRemaining
              ? 'bg-rose-500'
              : isMediumRemaining
                ? 'bg-amber-500'
                : 'bg-emerald-500'

            const remainingTextColor = isLowRemaining
              ? 'text-rose-500 dark:text-rose-400'
              : isMediumRemaining
                ? 'text-amber-500 dark:text-amber-400'
                : 'text-emerald-600 dark:text-emerald-400'

            return (
              <div
                key={child.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all shadow-xs"
              >
                <div className="order-4 md:order-1 flex justify-end md:justify-start">
                  <button
                    type="button"
                    onClick={() => onViewChildDetails && onViewChildDetails(child)}
                    className="w-full md:w-auto px-6 py-2.5 bg-[#00594C] hover:bg-[#004742] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs cursor-pointer active:scale-95 text-center"
                  >
                    {isRtl ? 'التفاصيل' : 'Details'}
                  </button>
                </div>

                <div className="order-3 md:order-2 text-start">
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'الحصص' : 'Sessions'}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {child.usedSessions} {isRtl ? 'مستخدمة' : 'used'} •
                    </span>
                    <span className={`text-xs font-bold ${remainingTextColor}`}>
                      {child.remainingSessions} {isRtl ? 'متبقية' : 'remaining'}
                    </span>
                  </div>
                  <div className="w-36 sm:w-44 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mt-2">
                    <div
                      className={`h-full rounded-full ${progressColor} transition-all duration-300`}
                      style={{ width: `${usedPct}%` }}
                    />
                  </div>
                </div>

                <div className="order-2 md:order-3 text-start">
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {isRtl ? 'المادة' : 'Subject'}
                  </span>
                  <p className="text-sm font-bold text-slate-800 dark:text-white mt-1">
                    {child.subject}
                  </p>
                </div>

                <div className="order-1 md:order-4 text-start">
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                    {child.name}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-mono">
                    {isRtl ? 'تاريخ الانضمام:' : 'Joined:'} {child.joinDate}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AddChildModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        isRtl={isRtl}
        onAddChild={onAddChild}
        existingChildIds={existingIds}
      />
    </div>
  )
}
