import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import Card from '@/shared/components/Card.jsx'
import { roleNavigation } from '@/shared/constants/navigation.js'

export default function AdminReports() {
  const { t } = useTranslation()

  return (
    <DashboardLayout title={t('dashboard.reports')} role={t('auth.admin')} links={roleNavigation.Admin}>
      <section className="grid gap-6 xl:grid-cols-3">
        {[
          { title: t('admin.report1Title'), description: t('admin.report1Description') },
          { title: t('admin.report2Title'), description: t('admin.report2Description') },
          { title: t('admin.report3Title'), description: t('admin.report3Description') },
        ].map((report) => (
          <Card key={report.title} title={report.title} description={report.description} className="h-full" />
        ))}
      </section>
    </DashboardLayout>
  )
}
