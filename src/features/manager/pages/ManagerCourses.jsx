import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import DataTable from '../../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../../constants/navigation.js'

const courses = [
  ['Islamic Studies', 'Latest', 'Active'],
  ['Creative Writing', 'Latest', 'Open'],
  ['Physics Lab', 'Popular', 'Closed'],
  ['Graphic Design', 'Latest', 'Open'],
]

export default function ManagerCourses() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort') || 'latest'

  return (
    <DashboardLayout title={t('dashboard.courses')} role={t('auth.manager')} links={roleNavigation.Manager}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('manager.coursesTitle')}</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('manager.coursesDescription', { sort })}</p>
        </div>
        <DataTable headers={[t('table.course'), t('table.tag'), t('table.status')]} rows={courses} />
      </div>
    </DashboardLayout>
  )
}
