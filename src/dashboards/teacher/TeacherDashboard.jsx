import { useTranslation } from 'react-i18next'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import { roleNavigation } from '../../constants/navigation.js'

export default function TeacherDashboard() {
  const { t } = useTranslation()

  return (
    <DashboardLayout title={t('dashboard.teacherDashboard')} role={t('auth.teacher')} links={roleNavigation.Teacher}>
      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('teacher.welcomeCardTitle')}</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('teacher.welcomeCardDescription')}</p>
        </article>
        <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('teacher.classroomCardTitle')}</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('teacher.classroomCardDescription')}</p>
        </article>
      </section>
    </DashboardLayout>
  )
}
