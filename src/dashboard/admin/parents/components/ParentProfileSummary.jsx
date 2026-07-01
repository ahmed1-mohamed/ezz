import { Star, Mail, Phone } from 'lucide-react'

export default function ParentProfileSummary({ parent, isRtl, statusCfg }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-b border-slate-100 dark:border-slate-800/60 pb-5">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
            {parent.profileImage ? (
              <img src={parent.profileImage} alt="" className="w-full h-full object-cover" />
            ) : (
              parent.name.charAt(0)
            )}
          </div>
          <div className="text-start">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
              {parent.name}
            </h2>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Mail size={14} className="text-slate-400" />
                <span dir="ltr">{parent.email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Phone size={14} className="text-slate-400" />
                <span dir="ltr">{parent.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">{isRtl ? 'متوسط التقييم' : 'Avg. Rating'}</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-lg font-bold text-slate-800 dark:text-white">{parent.rating || '4.8'}</span>
              <Star className="text-amber-400 fill-amber-400" size={16} />
            </div>
          </div>
        </div>
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">{isRtl ? 'تاريخ الانضمام' : 'Join Date'}</p>
            <p className="text-sm font-bold text-slate-800 dark:text-white mt-1.5">{parent.joinDate || '2023-09-15'}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-soft p-5 mt-4">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusCfg.badgeClass}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusCfg.dotClass}`} />
            {statusCfg.label}
          </span>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {parent.country || 'السعودية'}
          </span>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-500 mb-1.5 text-start">{isRtl ? 'ملاحظات إدارية' : 'Admin Notes'}</p>
          <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800/60 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-start">
            {parent.notes || (isRtl ? 'لا توجد ملاحظات مسجلة على هذا الحساب حتى الآن.' : 'No notes recorded for this account yet.')}
          </div>
        </div>
      </div>
    </div>
  )
}
