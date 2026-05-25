import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import DataTable from '../../../components/ui/DataTable.jsx'
import { roleNavigation } from '../../../constants/navigation.js'

const students = [
    ['Amina Hassan', 'Grade 10', 'Active'],
    ['Khaled Ali', 'Grade 9', 'Active'],
    ['Mona Ibrahim', 'Grade 11', 'Pending'],
    ['Yusuf Saleh', 'Grade 12', 'Active'],
]

export default function AdminStudents() {
    const { t } = useTranslation()
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page') || '1'
    const search = searchParams.get('search') || t('pagination.search')

    return (
        <DashboardLayout title={t('dashboard.students')} role={t('auth.admin')} links={roleNavigation.Admin}>
            <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('admin.studentsTitle')}</h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('admin.studentsDescription')}</p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-slate-700 dark:text-slate-300">{t('admin.filteredBy')} <span className="font-semibold">{search}</span> • {t('pagination.page')} {page}</p>
                    </div>
                </div>
                <DataTable headers={[t('table.student'), t('table.class'), t('table.status')]} rows={students} />
            </div>
        </DashboardLayout>
    )
}
