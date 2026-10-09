import { Users, DollarSign, BookOpen, Award, Star } from 'lucide-react'

export default function TeacherDetailsHeaderCard({ teacher, isRtl = true }) {
  const isSuspended = teacher?.active === false
  const initial = teacher?.name?.trim()?.charAt(0) || 'م'

  const totalGroups = teacher?.totalGroups ?? teacher?.groupsCount ?? 4
  const totalEarnings = teacher?.totalEarnings ?? 3200
  const dueEarnings = teacher?.dueEarnings ?? 200
  const totalLessons = teacher?.totalLessons ?? teacher?.totalSessions ?? 120
  const rating = Number(teacher?.rating || 4.9).toFixed(1)

  const subjectName = teacher?.subject ||
    (Array.isArray(teacher?.specializations) && teacher?.specializations.length > 0
      ? (typeof teacher.specializations[0] === 'object' ? (teacher.specializations[0].name?.ar || teacher.specializations[0].name) : teacher.specializations[0])
      : 'القرآن الكريم')

  const teacherDisplayName = teacher?.name?.startsWith('أ.') ? teacher?.name : `أ. ${teacher?.name || 'فاطمة الزهراء'}`

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
       <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
           {teacher?.image ? (
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-16 h-16 rounded-2xl object-cover shadow-xs border border-slate-100"
              onError={(e) => {
                e.target.style.display = 'none'
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            style={{ display: teacher?.image ? 'none' : 'flex' }}
            className="w-16 h-16 rounded-2xl bg-[#005953] text-white items-center justify-center text-2xl font-bold shrink-0 shadow-xs"
          >
            {initial}
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {teacherDisplayName}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              {subjectName}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-xs text-slate-500 font-semibold">
                {rating} {isRtl ? 'من 5' : 'out of 5'}
              </span>
              <div className="flex items-center text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

         <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
            isSuspended
              ? 'bg-rose-50 text-rose-600 border border-rose-100'
              : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isSuspended ? 'bg-rose-500' : 'bg-emerald-500'}`} />
          <span>{isSuspended ? (isRtl ? 'موقوف' : 'Suspended') : (isRtl ? 'نشط' : 'Active')}</span>
        </span>
      </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
         <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <Users size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'المجموعات' : 'Groups'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {totalGroups}
            </span>
          </div>
        </div>

         <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <DollarSign size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'إجمالي الأرباح' : 'Total Earnings'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {totalEarnings} {isRtl ? 'ر.س' : 'SAR'}
            </span>
          </div>
        </div>

         <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <DollarSign size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'الأرباح المستحقة' : 'Due Earnings'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {dueEarnings} {isRtl ? 'ر.س' : 'SAR'}
            </span>
          </div>
        </div>

         <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <BookOpen size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'الحصص' : 'Lessons'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {totalLessons}
            </span>
          </div>
        </div>

         <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between col-span-2 sm:col-span-1">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <Award size={18} />
          </div>
          <div className="text-end">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
              {isRtl ? 'التقييم' : 'Rating'}
            </span>
            <span className="text-lg font-extrabold text-slate-800 dark:text-white block mt-0.5">
              {rating} ⭐
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
