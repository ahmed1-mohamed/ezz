export default function TeacherDetailsProfile({ teacher, isRtl }) {
  const isSuspended = teacher?.status !== 'Active'

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="w-20 h-20 rounded-2xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-brand-300 flex items-center justify-center text-3xl font-black shrink-0">
        {teacher?.name?.trim().charAt(0) || 'ف'}
      </div>
      <div className="space-y-2 text-center md:text-start flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <h2 className="text-xl font-bold text-slate-850 dark:text-white">
            {teacher?.name}
          </h2>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold self-center md:self-start ${isSuspended
              ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400'
              : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400'
            }`}>
            <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
            {isSuspended ? (isRtl ? 'موقوف' : 'Suspended') : (isRtl ? 'نشط' : 'Active')}
          </span>
        </div>
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
          {teacher?.subject} · {teacher?.qualification}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500 mt-2">
          <span>{isRtl ? 'تاريخ الانضمام:' : 'Join Date:'} <strong className="text-slate-600 dark:text-slate-300">{teacher?.joinDate || '-'}</strong></span>
          <span>·</span>
          <span>{isRtl ? 'البريد الالكتروني:' : 'Email:'} <strong className="text-slate-600 dark:text-slate-300">{teacher?.email || '-'}</strong></span>
          <span>·</span>
          <span>{isRtl ? 'رقم الهاتف:' : 'Phone:'} <strong className="text-slate-600 dark:text-slate-300" dir="ltr">{teacher?.phone || '-'}</strong></span>
        </div>
      </div>
    </div>
  )
}