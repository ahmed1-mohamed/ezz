import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ChildTimeline({ childId, initialEvents }) {
  const { t } = useTranslation();
  const [events, setEvents] = useState(initialEvents || []);
  const [isLoading, setIsLoading] = useState(!initialEvents);
  const [prevInitialEvents, setPrevInitialEvents] = useState(initialEvents);

  if (prevInitialEvents !== initialEvents) {
    setPrevInitialEvents(initialEvents);
    if (initialEvents && initialEvents.length > 0) {
      setEvents(initialEvents);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (initialEvents && initialEvents.length > 0) return;

    let isMounted = true;
    Promise.resolve().then(async () => {
      if (!isMounted) return;
      setIsLoading(true);
      const res = await parentApi.fetchSchedules({ studentId: childId });
      if (isMounted) {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setEvents(res.data);
        } else {
          setEvents([]);
        }
        setIsLoading(false);
      }
    });

    return () => { isMounted = false; };
  }, [childId, initialEvents]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6">
        {t('parentDashboard.childrenDetails.timelineTitle', 'سجل النشاط الزمني')}
      </h3>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2].map((n) => (
            <div key={n} className="h-16 rounded-xl bg-slate-100 dark:bg-slate-700/50 animate-pulse" />
          ))}
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-6 text-slate-500 dark:text-slate-400 text-sm">
          {t('parentDashboard.childrenDetails.noTimeline', 'لا توجد أنشطة مسجلة حتى الآن')}
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event, idx) => {
            const title = event.title || event.className || event.subject || t('parentDashboard.childrenDetails.sessionEvent', 'حصة دراسية');
            const details = event.teacherName || event.teacher || event.details || '';
            const date = event.date || (event.startTime ? `${event.dayName || ''} ${event.startTime}` : '');
            const color = event.status === 'completed' || event.status === 'attended'
              ? 'bg-emerald-500'
              : event.status === 'cancelled' || event.status === 'absent'
              ? 'bg-rose-500'
              : 'bg-amber-500';

            return (
              <div key={event.id || event._id || idx} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${color}`} />
                <div className="text-start">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{title}</h4>
                  {details && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{details}</p>}
                  {date && <p className="text-[10px] text-slate-400 mt-1">{date}</p>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
