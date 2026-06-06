import { useTranslation } from 'react-i18next';

export default function ChildTimeline() {
  const { t } = useTranslation();
  const timelineEvents = [
    { id: 1, title: t('parent.mockData.timeline.attendedMemorizationClass'), details: t('parent.mockData.teachers.sheikhAhmedMansour'), date: `04-09-2026 - 09:00 ${t('parent.mockData.timeline.am')}`, color: 'bg-emerald-500' },
    { id: 2, title: t('parent.mockData.badges.gotExcellentBadge'), details: t('parent.mockData.teachers.sheikhSamiAlAli'), date: `04-10-2026 - 10:30 ${t('parent.mockData.timeline.am')}`, color: 'bg-amber-500' },
    { id: 3, title: t('parent.mockData.timeline.attendedArabicGrammar'), details: t('parent.mockData.teachers.ustadhaLailaAlAsiri'), date: `04-11-2026 - 11:15 ${t('parent.mockData.timeline.am')}`, color: 'bg-emerald-500' },
    { id: 4, title: t('parent.mockData.timeline.missedIslamicHistory'), details: t('parent.mockData.teachers.drYoussefAlQahtani'), date: `04-12-2026 - 01:00 ${t('parent.mockData.timeline.pm')}`, color: 'bg-rose-500' }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parentDashboard.childrenDetails.timelineTitle')}</h3>
      <div className="space-y-4">
        {timelineEvents.map((event) => (
          <div key={event.id} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${event.color}`} />
            <div className="text-start">
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{event.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{event.details}</p>
              <p className="text-[10px] text-slate-400 mt-1">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
