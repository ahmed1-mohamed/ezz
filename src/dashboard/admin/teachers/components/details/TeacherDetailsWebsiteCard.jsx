import { useState, useEffect } from 'react'
import { Globe, EyeOff, Eye, Loader2, Pencil, Check, X } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'

export default function TeacherDetailsWebsiteCard({ teacher, isRtl = true, onSuccess }) {
  const teacherId = teacher?.teacher_id || teacher?.id
  const [isUpdating, setIsUpdating] = useState(false)
  const [isUpdatingStats, setIsUpdatingStats] = useState(false)
  const [isEditingStats, setIsEditingStats] = useState(false)
  const [showOnWebsite, setShowOnWebsite] = useState(Boolean(teacher?.showOnWebsite))
  const [studentsCount, setStudentsCount] = useState(teacher?.totalStudents ?? teacher?.studentsCount ?? 0)
  const [lessonsCount, setLessonsCount] = useState(teacher?.totalLessons ?? teacher?.totalSessions ?? 0)
  const years = teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 0
  useEffect(() => {
    setShowOnWebsite(Boolean(teacher?.showOnWebsite))
    setStudentsCount(teacher?.totalStudents ?? teacher?.studentsCount ?? 0)
    setLessonsCount(teacher?.totalLessons ?? teacher?.totalSessions ?? 0)
  }, [teacher])
  const handleToggleVisibility = async () => {
    if (!teacherId || isUpdating) return
    const newValue = !showOnWebsite
    setIsUpdating(true)
    try {
      await teachersApi.updateTeacher(teacherId, { showOnWebsite: newValue })
      setShowOnWebsite(newValue)
      toast.success(
        isRtl
          ? (newValue ? 'تم عرض المعلم على الموقع بنجاح' : 'تم إخفاء المعلم من الموقع بنجاح')
          : (newValue ? 'Teacher is now visible on website' : 'Teacher is now hidden from website')
      )
      if (onSuccess) onSuccess()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تحديث الإعداد' : 'Failed to update setting'))
      toast.error(errorText)
    } finally {
      setIsUpdating(false)
    }
  }
  const handleSaveStats = async () => {
    if (!teacherId || isUpdatingStats) return
    setIsUpdatingStats(true)
    try {
      await teachersApi.updateTeacher(teacherId, {
        totalStudents: Math.max(0, Number(studentsCount) || 0),
        totalLessons: Math.max(0, Number(lessonsCount) || 0),
      })
      toast.success(isRtl ? 'تم تحديث إحصائيات المعلم بنجاح' : 'Teacher statistics updated successfully')
      setIsEditingStats(false)
      if (onSuccess) onSuccess()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء تحديث الإحصائيات' : 'Failed to update stats'))
      toast.error(errorText)
    } finally {
      setIsUpdatingStats(false)
    }
  }
  const handleCancelStatsEdit = () => {
    setStudentsCount(teacher?.totalStudents ?? teacher?.studentsCount ?? 0)
    setLessonsCount(teacher?.totalLessons ?? teacher?.totalSessions ?? 0)
    setIsEditingStats(false)
  }
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#edf4f3] dark:bg-[#005953]/20 rounded-2xl">
            <Globe size={20} className="text-[#005953] dark:text-emerald-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'بيانات صفحة العرض في الموقع الإلكتروني' : 'Website Display Page Data'}
          </h2>
        </div>
        <button
          type="button"
          onClick={handleToggleVisibility}
          disabled={isUpdating}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-60 ${
            showOnWebsite
              ? 'bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-100 dark:border-rose-900/40'
              : 'bg-[#005953]/10 hover:bg-[#005953] text-[#005953] hover:text-white dark:text-emerald-400 dark:hover:text-white border border-[#005953]/20 dark:border-emerald-800/40'
          }`}
          title={isRtl
            ? (showOnWebsite ? 'إخفاء المعلم من الموقع' : 'عرض المعلم على الموقع')
            : (showOnWebsite ? 'Hide from website' : 'Show on website')}
        >
          {isUpdating ? (
            <Loader2 size={15} className="animate-spin" />
          ) : showOnWebsite ? (
            <EyeOff size={15} />
          ) : (
            <Eye size={15} />
          )}
          <span>
            {isUpdating
              ? (isRtl ? 'جاري الحفظ...' : 'Saving...')
              : showOnWebsite
                ? (isRtl ? 'إخفاء من الموقع' : 'Hide from Website')
                : (isRtl ? 'عرض على الموقع' : 'Show on Website')}
          </span>
        </button>
      </div>
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border text-sm font-semibold ${
        showOnWebsite
          ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-400'
          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-700/40 text-slate-500 dark:text-slate-400'
      }`}>
        <span className={`w-2 h-2 rounded-full shrink-0 ${showOnWebsite ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
        <span>
          {showOnWebsite
            ? (isRtl ? 'المعلم ظاهر حالياً على الموقع الإلكتروني' : 'Teacher is currently visible on the website')
            : (isRtl ? 'المعلم مخفي حالياً من الموقع الإلكتروني' : 'Teacher is currently hidden from the website')}
        </span>
      </div>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
          {isRtl ? 'إحصائيات المعلم (تظهر لزوار الموقع)' : 'Public Display Statistics'}
        </span>
        {!isEditingStats ? (
          <button
            type="button"
            onClick={() => setIsEditingStats(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold text-[#005953] dark:text-emerald-400 hover:bg-[#005953]/10 dark:hover:bg-emerald-950/40 transition-colors cursor-pointer"
          >
            <Pencil size={12} />
            <span>{isRtl ? 'تعديل الأرقام' : 'Edit Stats'}</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSaveStats}
              disabled={isUpdatingStats}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold bg-[#005953] text-white hover:bg-[#004742] transition-colors cursor-pointer disabled:opacity-50"
            >
              {isUpdatingStats ? <Loader2 size={12} className="animate-spin" /> : <Check size={12} />}
              <span>{isRtl ? 'حفظ' : 'Save'}</span>
            </button>
            <button
              type="button"
              onClick={handleCancelStatsEdit}
              disabled={isUpdatingStats}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <X size={12} />
              <span>{isRtl ? 'إلغاء' : 'Cancel'}</span>
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'عدد الطلاب' : 'Number of Students'}
          </label>
          {isEditingStats ? (
            <input
              type="number"
              min="0"
              value={studentsCount}
              onChange={(e) => setStudentsCount(e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value, 10) || 0))}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 text-sm font-medium border border-[#005953]/30 focus:border-[#005953] outline-none"
              dir="ltr"
            />
          ) : (
            <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
              {studentsCount}
            </div>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {years} {isRtl ? 'سنوات' : 'years'}
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'إجمالي الحصص' : 'Total Lessons'}
          </label>
          {isEditingStats ? (
            <input
              type="number"
              min="0"
              value={lessonsCount}
              onChange={(e) => setLessonsCount(e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value, 10) || 0))}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 text-sm font-medium border border-[#005953]/30 focus:border-[#005953] outline-none"
              dir="ltr"
            />
          ) : (
            <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
              {lessonsCount}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
