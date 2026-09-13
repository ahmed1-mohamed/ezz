import { useMemo } from 'react'
import { Star, Pencil, Ban, CheckCircle2, Trash2, Eye, Globe, BookOpen } from 'lucide-react'

export default function TeacherProfileCard({
  teacher,
  isRtl,
  t,
  onEdit,
  onToggleStatus,
  onDelete,
  onViewDetails
}) {
  const avatarLetter = useMemo(() => {
    return teacher?.name ? teacher?.name?.trim()?.charAt(0) : 'م'
  }, [teacher])

  if (!teacher) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-10 text-center text-slate-400 dark:text-slate-500 font-bold shadow-soft">
        {isRtl ? 'اختر معلماً لعرض تفاصيله' : 'Select a teacher to view details'}
      </div>
    )
  }

  const isSuspended = !teacher.active

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft flex flex-col items-center text-center space-y-5">
      {/* Avatar */}
      <div className="relative">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-24 h-24 rounded-3xl object-cover border-2 border-slate-100 dark:border-slate-800 shadow-md"
            onError={(e) => {
              e.target.style.display = 'none'
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div
          style={{ display: teacher.image ? 'none' : 'flex' }}
          className="w-24 h-24 rounded-3xl bg-[#005953]/10 text-[#005953] dark:bg-[#005953]/20 dark:text-emerald-400 items-center justify-center text-3xl font-black shadow-md border-2 border-[#005953]/20"
        >
          {avatarLetter}
        </div>
        {teacher.showOnWebsite && (
          <span
            className="absolute -top-1 -end-1 px-2 py-0.5 bg-sky-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center gap-1 text-[10px] font-bold text-white shadow-sm"
            title={isRtl ? 'معروض في الموقع الإلكتروني' : 'Shown on website'}
          >
            <Globe size={10} />
            <span>{isRtl ? 'موقع' : 'Web'}</span>
          </span>
        )}
      </div>

      {/* Name & Title */}
      <div className="space-y-1 w-full">
        <h3 className="text-lg font-extrabold text-slate-800 dark:text-white">
          {teacher.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
          {teacher.degree || teacher.subject || (isRtl ? 'معلم معتمد' : 'Certified Teacher')}
        </p>
        <p className="text-[11px] text-slate-400" dir="ltr">
          {teacher.email}
        </p>
      </div>

      {/* Status Badge & Rating */}
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
            isSuspended
              ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400'
              : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full me-1.5 ${isSuspended ? 'bg-rose-600' : 'bg-emerald-600'}`} />
          {isSuspended ? (isRtl ? 'موقوف' : 'Stopped') : (isRtl ? 'نشط' : 'Active')}
        </span>

        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 dark:bg-amber-950/30 px-2.5 py-0.5 rounded-full">
          <span>{teacher.rating ?? 0}</span>
          <Star size={12} fill="currentColor" />
        </div>
      </div>

      {/* Specializations */}
      {teacher.specializations && teacher.specializations.length > 0 && (
        <div className="w-full space-y-1.5 pt-1 text-start">
          <span className="text-[11px] font-bold text-slate-400 block">
            {isRtl ? 'المناهج والتخصصات:' : 'Specializations:'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {teacher.specializations.map((spec) => (
              <span
                key={spec.id || spec._id || spec.name}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <BookOpen size={10} className="text-[#005953] dark:text-emerald-400" />
                <span>{spec.name}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Details list */}
      <div className="w-full divide-y divide-slate-100 dark:divide-slate-800 text-xs text-start">
        <div className="flex justify-between py-2.5">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.joinDate', 'تاريخ الانضمام')}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.joinDate || '-'}
          </span>
        </div>

        {teacher.yearsOfExperience > 0 && (
          <div className="flex justify-between py-2.5">
            <span className="text-slate-400 dark:text-slate-500 font-semibold">
              {isRtl ? 'سنوات الخبرة' : 'Experience'}
            </span>
            <span className="font-bold text-slate-700 dark:text-slate-300">
              {teacher.yearsOfExperience} {isRtl ? 'سنوات' : 'years'}
            </span>
          </div>
        )}

        <div className="flex justify-between py-2.5">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.groupsCount', 'عدد المجموعات')}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.totalGroups ?? 0} {isRtl ? 'مجموعات' : 'groups'}
          </span>
        </div>

        <div className="flex justify-between py-2.5">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.totalSessions', 'إجمالي الحصص')}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.totalLessons ?? 0} {isRtl ? 'حصة' : 'sessions'}
          </span>
        </div>

        <div className="flex justify-between py-2.5">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {isRtl ? 'عدد الطلاب' : 'Students'}
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {teacher.totalStudents ?? 0} {isRtl ? 'طالب' : 'students'}
          </span>
        </div>

        {teacher.profitPercentage > 0 && (
          <div className="flex justify-between py-2.5">
            <span className="text-slate-400 dark:text-slate-500 font-semibold">
              {isRtl ? 'نسبة الربح' : 'Profit Share'}
            </span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {teacher.profitPercentage}%
            </span>
          </div>
        )}

        <div className="flex justify-between py-2.5">
          <span className="text-slate-400 dark:text-slate-500 font-semibold">
            {t('adminDashboard.teachers.totalEarnings', 'إجمالي الأرباح')}
          </span>
          <span className="font-black text-emerald-600 dark:text-emerald-400">
            {teacher.totalEarnings ?? 0} {isRtl ? 'ر.س' : 'SAR'}
          </span>
        </div>

        {teacher.dueEarnings > 0 && (
          <div className="flex justify-between py-2.5">
            <span className="text-slate-400 dark:text-slate-500 font-semibold">
              {isRtl ? 'الأرباح المستحقة' : 'Due Earnings'}
            </span>
            <span className="font-black text-blue-600 dark:text-blue-400">
              {teacher.dueEarnings} {isRtl ? 'ر.س' : 'SAR'}
            </span>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="w-full space-y-2.5 pt-2">
        {onViewDetails && (
          <button
            type="button"
            onClick={() => onViewDetails(teacher)}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold rounded-2xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye size={15} />
            <span>{t('adminDashboard.teachers.viewDetails', 'عرض كافة التفاصيل')}</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => onEdit(teacher)}
          className="w-full py-2.5 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] cursor-pointer"
        >
          <Pencil size={15} />
          <span>{t('adminDashboard.teachers.editData', 'تعديل البيانات')}</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          {onToggleStatus && (
            <button
              type="button"
              onClick={() => onToggleStatus(teacher.id)}
              className={`py-2.5 font-bold rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer ${
                isSuspended
                  ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400'
                  : 'bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950/30 dark:text-amber-400'
              }`}
            >
              {isSuspended ? (
                <>
                  <CheckCircle2 size={14} />
                  <span>{isRtl ? 'تفعيل' : 'Activate'}</span>
                </>
              ) : (
                <>
                  <Ban size={14} />
                  <span>{isRtl ? 'إيقاف' : 'Suspend'}</span>
                </>
              )}
            </button>
          )}

          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(teacher)}
              className="py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 font-bold rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer"
            >
              <Trash2 size={14} />
              <span>{isRtl ? 'حذف' : 'Delete'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}