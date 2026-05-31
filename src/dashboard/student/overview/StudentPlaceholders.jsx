import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';

function ComingSoonPlaceholder({ titleKey }) {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Clock size={28} className="text-[#0f7a6c] dark:text-emerald-400" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {t(`studentDashboard.nav.${titleKey}`)}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {t('studentDashboard.comingSoon')}
        </p>
      </div>
    </div>
  );
}


export function StudentRecordedPage() {
  return <ComingSoonPlaceholder titleKey="recordedSessions" />;
}

export function StudentTeachersPage() {
  return <ComingSoonPlaceholder titleKey="teachers" />;
}

export function StudentAssignmentsPage() {
  return <ComingSoonPlaceholder titleKey="assignments" />;
}

export function StudentGradesPage() {
  return <ComingSoonPlaceholder titleKey="grades" />;
}

export function StudentAttendancePage() {
  return <ComingSoonPlaceholder titleKey="attendance" />;
}

export function StudentAchievementsPage() {
  return <ComingSoonPlaceholder titleKey="achievements" />;
}

export function StudentMaterialsPage() {
  return <ComingSoonPlaceholder titleKey="materials" />;
}

export function StudentProfilePage() {
  return <ComingSoonPlaceholder titleKey="profile" />;
}

export function StudentSettingsPage() {
  return <ComingSoonPlaceholder titleKey="settings" />;
}
