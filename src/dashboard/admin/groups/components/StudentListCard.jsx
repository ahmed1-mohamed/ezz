import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, User, Mail, Phone, BookOpen } from 'lucide-react'

function StudentListCard({
  student,
  isSelected,
  toggleSelect,
  t
}) {
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')

  const studentName = typeof student.name === 'object' && student.name !== null
    ? (isRtl ? student.name.ar || student.name.en : student.name.en || student.name.ar)
    : (student.name || '')

  const initial = studentName ? studentName.trim().charAt(0) : 'ط'

  const getLevelLabel = (lvl) => {
    const map = {
      'مبتدئ': t('adminDashboard.groups.levels.beginner', 'مبتدئ'),
      'متوسط': t('adminDashboard.groups.levels.intermediate', 'متوسط'),
      'متوسطة': t('adminDashboard.groups.levels.intermediate', 'متوسطة'),
      'متقدم': t('adminDashboard.groups.levels.advanced', 'متقدم'),
    }
    return map[lvl] || lvl
  }

  const studentId = student.id || student._id

  return (
    <button
      type="button"
      onClick={() => toggleSelect(studentId)}
      className={`w-full text-start rounded-2xl border-2 transition-all duration-200 overflow-hidden ${isSelected
          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/20'
          : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 hover:bg-slate-50 dark:hover:bg-slate-800'
        }`}
    >
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold text-sm ${isSelected
                ? 'bg-brand-500 text-white'
                : 'bg-brand-500/10 text-brand-700 dark:text-brand-300'
              }`}
          >
            {isSelected ? <Check size={16} /> : initial}
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
            {studentName}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 pb-3">
        <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
          <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <User size={10} />
            {t('adminDashboard.groups.addStudentsModal.age', 'العمر')}
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {t('adminDashboard.groups.addStudentsModal.ageValue', { defaultValue: '{{age}} سنة', age: student.age })}
          </span>
        </div>

        <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
          <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <Mail size={10} />
            {t('adminDashboard.groups.addStudentsModal.email', 'البريد')}
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
            {student.email}
          </span>
        </div>

        <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
          <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <Phone size={10} />
            {t('adminDashboard.groups.addStudentsModal.phone', 'الجوال')}
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
            {student.phone}
          </span>
        </div>

        <div className="flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
          <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <BookOpen size={10} />
            {t('adminDashboard.groups.addStudentsModal.level', 'المستوى')}
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {getLevelLabel(student.level)}
          </span>
        </div>

        <div className="col-span-2 flex flex-col gap-0.5 bg-white dark:bg-slate-800/60 rounded-xl px-3 py-2">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {t('adminDashboard.groups.addStudentsModal.groupName', 'المجموعة')}
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
            {student.groupName || '—'}
          </span>
        </div>
      </div>
    </button>
  )
}

export default memo(StudentListCard)