import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../constants/navigation.js'

const courses = [
    ['Arabic Literature', 'Active', 'Grade 10'],
    ['Mathematics', 'Active', 'Grade 10'],
    ['Science', 'Active', 'Grade 10'],
    ['History', 'Active', 'Grade 10'],
]

export default function StudentCourses() {
    const { t } = useTranslation()
    const [searchParams] = useSearchParams()
    const status = searchParams.get('status') || 'active'

    return (
        <DashboardLayout title={t('dashboard.courses')} role={t('auth.student')} links={roleNavigation.Student}>
            <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('student.coursesTitle')}</h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('student.coursesDescription', { status })}</p>
                </div>
                <DataTable headers={[t('table.course'), t('table.status'), t('table.class')]} rows={courses} />
            </div>
        </DashboardLayout>
    )
}