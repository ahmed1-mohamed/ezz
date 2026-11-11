import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import DataTable from '@/shared/components/DataTable.jsx'
import { roleNavigation } from '@/shared/constants/navigation.js'

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
      <div className="space-y-6 text-start">
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">{t('manager.coursesTitle')}</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{t('manager.coursesDescription', { sort })}</p>
        </div>
        <DataTable headers={[t('table.course'), t('table.tag'), t('table.status')]} rows={courses} />
      </div>
    </DashboardLayout>
  )
}
