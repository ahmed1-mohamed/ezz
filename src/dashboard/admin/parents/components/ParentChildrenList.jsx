import { Plus, Users } from 'lucide-react'

export default function ParentChildrenList({ children, isRtl }) {
  if (!children || children.length === 0) return null

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft overflow-hidden mt-6">
      <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 rounded-xl text-xs font-semibold hover:bg-brand-100 transition-all">
          <Plus size={13} />
          <span>{isRtl ? 'إضافة ابن' : 'Add Child'}</span>
        </button>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white">
            {isRtl ? 'الأبناء المرتبطين' : 'Linked Children'}
          </h3>
          <span className="text-xs text-slate-400">({children.length})</span>
          <Users size={16} className="text-brand-500" />
        </div>
      </div>

      <div className="p-5 border-b border-slate-100 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-800 dark:text-white text-start mb-0.5">
          {isRtl ? 'متابعة الأبناء' : 'Children Follow-up'}
        </h4>
        <p className="text-xs text-slate-400 text-start">
          {isRtl ? 'جميع معلومات الأبناء المسجلين' : 'All enrolled children info'}
        </p>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {children.map((child) => {
          const usedPct = Math.min((child.usedSessions / child.totalSessions) * 100, 100)
          const isOver = child.usedSessions > child.totalSessions
          const barColor = isOver
            ? 'bg-rose-500'
            : usedPct >= 80
              ? 'bg-amber-500'
              : 'bg-emerald-500'

          return (
            <div key={child.id} className="p-4">
              <div className="flex items-start justify-between">
                <button className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-all">
                  {isRtl ? 'التفاصيل' : 'Details'}
                </button>
                <div className="text-start">
                  <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{child.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isRtl ? 'انضم في:' : 'Joined:'} {child.joinDate}
                  </p>
                  <div className="flex items-center justify-end gap-3 mt-2">
                    <div className="text-start">
                      <p className="text-xs text-slate-400">{isRtl ? 'الجلسات' : 'Sessions'}</p>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {child.usedSessions} {isRtl ? 'مستخدمة' : 'used'} •{' '}
                        <span className={isOver ? 'text-rose-500' : 'text-emerald-600'}>
                          {child.totalSessions} {isRtl ? 'كلية' : 'total'}
                        </span>
                      </p>
                      <div className="w-28 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 mt-1 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${barColor} transition-all`}
                          style={{ width: `${Math.min(usedPct, 100)}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-start">
                      <p className="text-xs text-slate-400">{isRtl ? 'المادة' : 'Subject'}</p>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {child.subject}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
