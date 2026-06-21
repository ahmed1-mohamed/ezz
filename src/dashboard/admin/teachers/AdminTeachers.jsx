import { useTranslation } from 'react-i18next'
import DataTable from '@/shared/components/DataTable.jsx'

const teachers = [
  ['Layla Nasser', 'Arabic Literature', 'Active'],
  ['Omar Fathy', 'Mathematics', 'Active'],
  ['Sana Ali', 'Science', 'On leave'],
  ['Hassan Youssef', 'History', 'Active'],
]

export default function AdminTeachers() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('admin.teachersTitle')}</h2>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('admin.teachersDescription')}</p>
      </div>
      <DataTable headers={[t('table.teacher'), t('table.subject'), t('table.status')]} rows={teachers} />
    </div>
  )
}
