export default function TeacherDetailsWebsiteCard({ teacher, isRtl = true }) {
  const studentsCount = teacher?.totalStudents ?? teacher?.studentsCount ?? 45
  const years = teacher?.yearsOfExperience ?? teacher?.experienceYears ?? 8
  const lessonsCount = teacher?.totalLessons ?? teacher?.totalSessions ?? 120

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-100/80 dark:border-slate-800/60 space-y-6 text-start">
      <h2 className="text-xl font-bold text-slate-800 dark:text-white">
        {isRtl ? 'بيانات صفحه العرض في الموقع الإلكتروني' : 'Website Display Page Data'}
      </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'عدد الطلاب' : 'Number of Students'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {studentsCount}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {years} {isRtl ? 'سنوات' : 'years'}
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            {isRtl ? 'اجمالي الحصص' : 'Total Lessons'}
          </label>
          <div className="w-full bg-[#f3f7f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-2xl py-3.5 px-4 text-sm font-medium border border-transparent">
            {lessonsCount}
          </div>
        </div>
      </div>
    </div>
  )
}
