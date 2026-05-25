import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import SchedulePage from '../../../pages/SchedulePage.jsx'
import { roleNavigation } from '../../../constants/navigation.js'

export default function ManagerSchedule() {
  const { t } = useTranslation()

  return (
    <DashboardLayout title={t('dashboard.schedule')} role={t('auth.manager')} links={roleNavigation.Manager}>
      <SchedulePage role={t('auth.manager')} />
    </DashboardLayout>
  )
}
