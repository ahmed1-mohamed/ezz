export default function StudentProfileCard({
  student,
  isRtl,
  detailsItems = []
}) {
  const studentDisplayName = typeof student?.name === 'string'
    ? student.name
    : (student?.name?.ar || student?.name?.en || '-');

  const initial = (studentDisplayName === '-' ? 'ط' : studentDisplayName).trim().charAt(0)
  const imageUrl = student?.image || student?.profileImage
  const isActive = student?.active === true || String(student?.active) === 'true'

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-100 dark:border-slate-800/80 p-6 sm:p-8 shadow-soft space-y-6 text-start">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={studentDisplayName}
              className="w-16 h-16 rounded-2xl object-cover shadow-xs border border-slate-100 dark:border-slate-800 shrink-0"
              onError={(e) => {
                e.target.style.display = 'none'
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            style={{ display: imageUrl ? 'none' : 'flex' }}
            className="w-16 h-16 rounded-2xl bg-[#005953] text-white items-center justify-center text-2xl font-bold shrink-0 shadow-xs"
          >
            {initial}
          </div>

          <div className="space-y-0.5">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {studentDisplayName}
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono" dir="ltr">
              {student?.email || '-'}
            </p>
            {student?.birthDate && (
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {isRtl ? `تاريخ الميلاد: ${String(student.birthDate).slice(0, 10)}` : `Birth Date: ${String(student.birthDate).slice(0, 10)}`}
              </p>
            )}
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
            isActive
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50'
              : 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
          <span>{isActive ? (isRtl ? 'نشط' : 'Active') : (isRtl ? 'متوقف' : 'Suspended')}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {detailsItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className={`p-4 rounded-2xl border border-transparent transition-all flex items-center gap-3.5 ${item.bgClass}`}
            >
              <div className="text-start flex-1 space-y-0.5">
                <span className="block text-[11px] font-bold text-slate-400 dark:text-slate-500">
                  {item.label}
                </span>
                <span className="block text-sm font-bold text-slate-700 dark:text-slate-200">
                  {item.value}
                </span>
              </div>
              <div className={`p-2.5 bg-white dark:bg-slate-900 rounded-xl shadow-xs ${item.iconColor} shrink-0`}>
                <Icon size={18} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
