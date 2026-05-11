import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../constants/navigation.js'

const classes = [
    ['Grade 10A', 'Arabic Literature', '25 students', 'Active'],
    ['Grade 9B', 'Mathematics', '22 students', 'Active'],
    ['Grade 11C', 'Science', '28 students', 'Active'],
    ['Grade 12D', 'History', '20 students', 'Active'],
]

export default function TeacherClasses() {
    const { t } = useTranslation()

    return (
        <DashboardLayout title={t('dashboard.classes')} role={t('auth.teacher')} links={roleNavigation.Teacher}>
            <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('teacher.classesTitle')}</h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('teacher.classesDescription')}</p>
                </div>
                <DataTable headers={[t('table.class'), t('table.subject'), t('table.students'), t('table.status')]} rows={classes} />
            </div>
        </DashboardLayout>
    )
}