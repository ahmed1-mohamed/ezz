import { Users, Phone, Mail } from 'lucide-react'

export default function ParentOverviewBanner({
  parent,
  isRtl = true,
  childrenCount = 1,
}) {
  const displayName = typeof parent?.name === 'object'
    ? (isRtl ? parent.name?.ar || parent.name?.en : parent.name?.en || parent.name?.ar)
    : (parent?.name || (isRtl ? 'خالد المنصور' : 'Khaled Al-Mansour'))

  const initialLetter = displayName ? displayName.trim().charAt(0) : 'خ'
  const isActive = parent?.active !== false && parent?.status !== 'Expired' && parent?.status !== 'Suspended'
  const imageSrc = parent?.profileImage || parent?.image || null

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-soft">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-5 w-full lg:w-auto">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#D79A2B] text-white flex items-center justify-center font-bold text-3xl sm:text-4xl shadow-sm shrink-0 overflow-hidden">
            {imageSrc ? (
              <img src={imageSrc} alt={displayName} className="w-full h-full object-cover" />
            ) : (
              <span>{initialLetter}</span>
            )}
          </div>

          <div className="flex-1 text-start">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                {displayName}
              </h2>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/50'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                <span>{isActive ? (isRtl ? 'فعال' : 'Active') : (isRtl ? 'موقوف' : 'Suspended')}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 bg-[#f3f7f6] dark:bg-slate-950/60 rounded-2xl px-3.5 py-2 border border-slate-100 dark:border-slate-800/60">
                <Users size={16} className="text-[#00594C] shrink-0" />
                <span className="text-xs text-slate-400 font-medium">
                  {isRtl ? 'عدد الأبناء' : 'Children'}:
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  {childrenCount}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#f3f7f6] dark:bg-slate-950/60 rounded-2xl px-3.5 py-2 border border-slate-100 dark:border-slate-800/60">
                <Phone size={16} className="text-[#00594C] shrink-0" />
                <span className="text-xs text-slate-400 font-medium">
                  {isRtl ? 'رقم الجوال' : 'Mobile'}:
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 font-mono" dir="ltr">
                  {parent?.phone || '+966501234567'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#f3f7f6] dark:bg-slate-950/60 rounded-2xl px-3.5 py-2 border border-slate-100 dark:border-slate-800/60">
                <Mail size={16} className="text-[#00594C] shrink-0" />
                <span className="text-xs text-slate-400 font-medium">
                  {isRtl ? 'البريد الإلكتروني' : 'Email'}:
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 font-mono" dir="ltr">
                  {parent?.email || 'khalid@email.com'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
