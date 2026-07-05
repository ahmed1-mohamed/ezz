import { BookOpen, Calendar } from 'lucide-react'

export default function StudentGroupCard({ student, isRtl, onOpenChangeGroup, t }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6 text-start">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-white">
          <BookOpen className="text-[#005953]" size={20} />
          <h3 className="text-base font-bold">
            {t('adminDashboard.students.details.educationalGroup', 'المجموعة التعليمية')}
          </h3>
        </div>
        <button
          type="button"
          onClick={onOpenChangeGroup}
          className="px-3.5 py-1.5 bg-[#005953]/10 hover:bg-[#005953]/20 text-[#005953] dark:text-emerald-400 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/25 text-xs font-bold rounded-xl transition-all cursor-pointer hover:scale-102"
        >
          {t('adminDashboard.students.details.changeGroup', 'تغيير المجموعة')}
        </button>
      </div>

      <div className="p-5 bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-100 dark:border-slate-850/60 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-800 dark:text-white">
              {student.groupName || t('adminDashboard.students.details.noGroupName', 'مجموعة القرآن أ')}
            </h4>
            <p className="text-xs text-slate-450 dark:text-slate-500 font-bold">
              {t('adminDashboard.students.details.groupTeacher', 'المعلم: أ. فاطمة الزهراء')}
              <span className="mx-2">·</span>
              {t('adminDashboard.students.details.level', 'المستوى: {{level}}', { level: student.level || (isRtl ? 'متوسط' : 'Intermediate') })}
            </p>
          </div>

          <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 me-1.5 animate-pulse" />
            {isRtl ? 'نشط' : 'Active'}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-start">
          <div>
            <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.details.studentsCount', 'عدد الطلاب')}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
              4/5
            </span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.details.type', 'النوع')}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
              {isRtl ? 'مجموعة' : 'Group'}
            </span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 dark:text-slate-500">
              {t('adminDashboard.students.details.language', 'اللغة')}
            </span>
            <span className="text-sm font-extrabold text-slate-700 dark:text-slate-205 mt-0.5 block">
              {isRtl ? 'عربي' : 'Arabic'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 bg-slate-100/50 dark:bg-slate-900 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Calendar size={14} className="text-brand-500" />
          <span>{isRtl ? 'السبت، الاثنين، الأربعاء - 10:00' : 'Saturday, Monday, Wednesday - 10:00'}</span>
        </div>
      </div>
    </div>
  )
}
