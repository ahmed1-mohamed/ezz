import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import DataTable from '../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../constants/navigation.js'

const grades = [
    ['Arabic Literature', '95%', 'A+'],
    ['Mathematics', '88%', 'B+'],
    ['Science', '92%', 'A-'],
    ['History', '87%', 'B+'],
]

export default function StudentGrades() {
    const { t } = useTranslation()

    return (
        <DashboardLayout title={t('dashboard.grades')} role={t('auth.student')} links={roleNavigation.Student}>
            <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('student.gradesTitle')}</h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('student.gradesDescription')}</p>
                </div>
                <DataTable headers={[t('table.subject'), t('table.score'), t('table.grade')]} rows={grades} />
            </div>
        </DashboardLayout>
    )
}