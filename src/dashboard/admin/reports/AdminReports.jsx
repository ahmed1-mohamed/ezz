import { useTranslation } from 'react-i18next'
import Card from '@/shared/components/Card.jsx'

export default function AdminReports() {
  const { t } = useTranslation()

  return (
    <section className="grid gap-6 xl:grid-cols-3">
      {[
        { title: t('admin.report1Title'), description: t('admin.report1Description') },
        { title: t('admin.report2Title'), description: t('admin.report2Description') },
        { title: t('admin.report3Title'), description: t('admin.report3Description') },
      ].map((report) => (
        <Card key={report.title} title={report.title} description={report.description} className="h-full" />
      ))}
    </section>
  )
}
