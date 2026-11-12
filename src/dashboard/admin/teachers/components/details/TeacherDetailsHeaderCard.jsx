import { useState } from 'react'
import { Users, DollarSign, BookOpen, Star, Pencil, Copy, Check } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function TeacherDetailsHeaderCard({ teacher, isRtl = true, onOpenHourlyRateModal }) {
  const [isCopied, setIsCopied] = useState(false)
  const isSuspended = teacher?.active === false
  const teacherRawName = typeof teacher?.name === 'object'
    ? (isRtl ? teacher?.name?.ar : teacher?.name?.en) || teacher?.name?.ar || teacher?.name?.en
    : teacher?.name
  const initial = teacherRawName?.trim()?.charAt(0) || 'م'
  const rawTeacherId = String(
    teacher?.teacher_id ||
    teacher?._id ||
    teacher?.id ||
    teacher?.teacherId ||
    teacher?.user_id ||
    ''
  ).trim()
  const teacherCode = rawTeacherId.length >= 8 ? rawTeacherId.slice(-8) : rawTeacherId

  const handleCopyCode = (e) => {
    e?.stopPropagation()
    if (!teacherCode) return
    navigator.clipboard?.writeText(teacherCode)
    setIsCopied(true)
    toast.success(isRtl ? 'تم نسخ كود المعلم' : 'Teacher code copied')
    setTimeout(() => setIsCopied(false), 2000)
  }
  const totalGroups = teacher?.totalGroups ?? teacher?.groupsCount ?? 0
  const hourlyRate = teacher?.hourlyRate ?? 0
  const totalEarnings = teacher?.totalEarnings ?? 0
  const dueEarnings = teacher?.dueEarnings ?? 0
  const actualLessons = Number(teacher?.actualLessons ?? 0)
  const ratingNumber = Number(teacher?.rating ?? 0)
  const rating = ratingNumber.toFixed(1)
  const specializationNames = (Array.isArray(teacher?.specializations) ? teacher.specializations : [])
    .map((spec) => (typeof spec?.name === 'object' && spec.name !== null
      ? (isRtl ? spec.name.ar || spec.name.en : spec.name.en || spec.name.ar)
      : spec?.name))
    .filter(Boolean)
  const subjectName = specializationNames.length > 0
    ? specializationNames.join(' · ')
    : (isRtl ? 'غير محدد' : 'Not specified')
  const teacherDisplayName = teacherRawName
    ? (isRtl && !teacherRawName.startsWith('أ.') ? `أ. ${teacherRawName}` : teacherRawName)
    : (isRtl ? 'معلم' : 'Teacher')
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          {teacher?.image ? (
            <img
              src={teacher.image}
              alt={teacherDisplayName}
              className="w-16 h-16 rounded-2xl object-cover shadow-xs border border-slate-100 dark:border-slate-800"
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
            {teacherCode && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                  {isRtl ? 'كود المعلم:' : 'Teacher Code:'}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-[#edf4f3] hover:bg-[#d8e9e6] dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-[#005953] dark:text-emerald-300 border border-[#005953]/15 transition-colors cursor-pointer group"
                  title={isRtl ? 'اضغط لنسخ كود المعلم' : 'Click to copy teacher code'}
                >
                  <span>#{teacherCode}</span>
                  {isCopied ? (
                    <Check size={12} className="text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy size={12} className="text-slate-400 group-hover:text-[#005953] dark:group-hover:text-emerald-300 transition-colors" />
                  )}
                </button>
              </div>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              {subjectName}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {rating} {isRtl ? 'من 5' : 'out of 5'}
              </span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(ratingNumber)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
            isSuspended
              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50'
              : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50'
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
              {totalEarnings} $
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
              {dueEarnings} $
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
              {actualLessons}
            </span>
          </div>
        </div>
        <div className="bg-[#edf4f3] dark:bg-slate-950/40 rounded-2xl p-4 flex items-center justify-between col-span-2 sm:col-span-1">
          <div className="p-2.5 bg-[#005953] text-white rounded-xl flex items-center justify-center shrink-0">
            <DollarSign size={18} />
          </div>
          <div className="text-end">
            <div className="flex items-center justify-end gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">
                {isRtl ? 'سعر الساعة' : 'Hourly Rate'}
              </span>
              {onOpenHourlyRateModal && (
                <button
                  type="button"
                  onClick={onOpenHourlyRateModal}
                  className="text-[#005953] hover:text-[#004742] dark:text-emerald-400 p-0.5 rounded cursor-pointer transition-colors"
                  title={isRtl ? 'تعديل سعر الساعة' : 'Edit hourly rate'}
                >
                  <Pencil size={12} />
                </button>
              )}
            </div>
            <span className="text-lg font-extrabold text-teal-600 dark:text-teal-400 block mt-0.5">
              {hourlyRate} $
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
