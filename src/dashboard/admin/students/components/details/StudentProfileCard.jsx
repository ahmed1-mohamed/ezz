
export default function StudentProfileCard({
  student,
  isRtl,
  detailsItems
}) {
  const studentDisplayName = typeof student.name === 'string' ? student.name : (student.name?.ar || student.name?.en || '-');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400">
            {isRtl ? 'فعال' : 'Active'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-start">
          <div className="space-y-1 sm:text-end">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {studentDisplayName}
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {student.email}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isRtl ? `العمر: ${student.age} سنوات` : `Age: ${student.age} years`}
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-[#005953]/15 text-[#005953] flex items-center justify-center text-2xl font-black shrink-0">
            {studentDisplayName ? studentDisplayName.trim().charAt(0) : 'أ'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {detailsItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className={`p-4 rounded-2xl border border-transparent transition-all flex items-center gap-3.5 ${item.bgClass}`}
            >
              <div className="text-start flex-1 space-y-0.5">
                <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500">
                  {item.label}
                </span>
                <span className="block text-sm font-bold text-slate-700 dark:text-slate-200">
                  {item.value}
                </span>
              </div>
              <div className={`p-2.5 bg-white dark:bg-slate-900 rounded-xl shadow-sm ${item.iconColor}`}>
                <Icon size={18} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
