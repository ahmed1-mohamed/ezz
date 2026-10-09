import { Award } from 'lucide-react'

export default function TeacherDetailsPerformanceCard({ teacher, isRtl = true }) {
  const attendanceRate = teacher?.attendanceRate ?? 98
  const studentSatisfaction = teacher?.studentSatisfaction ?? 95
  const rating = Number(teacher?.rating || 4.9).toFixed(1)
  const completedLessons = teacher?.completedLessons ?? teacher?.totalLessons ?? 120

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-5 text-start">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'إحصائيات الأداء' : 'Performance Statistics'}
        </h2>
        <Award size={20} className="text-amber-500" />
      </div>

      <div className="space-y-3">
         <div className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {isRtl ? 'معدل الحضور' : 'Attendance Rate'}
          </span>
          <span className="text-sm font-extrabold text-emerald-500">
            {attendanceRate}%
          </span>
        </div>

         <div className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {isRtl ? 'رضا الطلاب' : 'Student Satisfaction'}
          </span>
          <span className="text-sm font-extrabold text-emerald-500">
            {studentSatisfaction}%
          </span>
        </div>

         <div className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {isRtl ? 'معدل التقييم' : 'Average Rating'}
          </span>
          <span className="text-sm font-extrabold text-amber-500">
            {rating}
          </span>
        </div>

         <div className="bg-[#fcfdfd] dark:bg-slate-950/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {isRtl ? 'الحصص المكتملة' : 'Completed Lessons'}
          </span>
          <span className="text-sm font-extrabold text-sky-500">
            {completedLessons}
          </span>
        </div>
      </div>
    </div>
  )
}
