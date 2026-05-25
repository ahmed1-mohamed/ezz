import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../../layouts/DashboardLayout.jsx'
import SchedulePage from '../../../pages/SchedulePage.jsx'
import { roleNavigation } from '../../../constants/navigation.js'

export default function StudentSchedule() {
    const { t } = useTranslation()

    return (
        <DashboardLayout title={t('dashboard.schedule')} role={t('auth.student')} links={roleNavigation.Student}>
            <SchedulePage role={t('auth.student')} />
        </DashboardLayout>
    )
}