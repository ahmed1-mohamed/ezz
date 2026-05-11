import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import Card from '../../components/ui/Card.jsx'
import { roleNavigation } from '../../constants/navigation.js'

export default function ManagerReports() {
    const { t } = useTranslation()

    return (
        <DashboardLayout title={t('dashboard.reports')} role={t('auth.manager')} links={roleNavigation.Manager}>
            <section className="grid gap-6 xl:grid-cols-3">
                {[
                    { title: t('manager.report1Title'), description: t('manager.report1Description') },
                    { title: t('manager.report2Title'), description: t('manager.report2Description') },
                    { title: t('manager.report3Title'), description: t('manager.report3Description') },
                ].map((report) => (
                    <Card key={report.title} title={report.title} description={report.description} className="h-full" />
                ))}
            </section>
        </DashboardLayout>
    )
}