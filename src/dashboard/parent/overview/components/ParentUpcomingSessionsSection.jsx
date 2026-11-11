import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import ParentPagination from './ParentPagination';

function formatSessionDate(session, isRtl) {
  if (!session?.date && !session?.day) return session?.timeRange || '';
  let dayPart = '';
  if (session?.date) {
    try {
      const parts = session.date.split('-');
      if (parts.length === 3) {
        const sessionDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        const today = new Date();
        const isToday =
          today.getFullYear() === sessionDate.getFullYear() &&
          today.getMonth() === sessionDate.getMonth() &&
          today.getDate() === sessionDate.getDate();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const isTomorrow =
          tomorrow.getFullYear() === sessionDate.getFullYear() &&
          tomorrow.getMonth() === sessionDate.getMonth() &&
          tomorrow.getDate() === sessionDate.getDate();
        if (isToday) {
          dayPart = isRtl ? 'اليوم' : 'Today';
        } else if (isTomorrow) {
          dayPart = isRtl ? 'غداً' : 'Tomorrow';
        } else {
          dayPart = session.day || session.date;
        }
      }
    } catch {
      dayPart = session.day || session.date;
    }
  } else {
    dayPart = session.day || '';
  }
  const timePart = session.timeRange || (session.startTime ? `${session.startTime} ${session.endTime ? `- ${session.endTime}` : ''}` : '');
  if (dayPart && timePart) return `${dayPart} - ${timePart}`;
  return dayPart || timePart;
}

export default React.memo(function ParentUpcomingSessionsSection({
  sessions = [],
  isLoading = false,
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const totalItems = sessions?.length || 0;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentSessions = useMemo(() => {
    return (sessions || []).slice(startIndex, endIndex);
  }, [sessions, startIndex, endIndex]);
  const handleApologize = async (session) => {
    const sessionName = session.group || session.title || 'الحصة';
    const { isConfirmed } = await Swal.fire({
      title: isRtl ? 'الإعتذار عن الحصة' : 'Apologize for Session',
      text: isRtl
        ? `هل تود الإعتذار عن حضور حصة "${sessionName}"؟`
        : `Do you want to cancel session "${sessionName}"?`,
      input: 'textarea',
      inputPlaceholder: isRtl ? 'اكتب سبب الاعتذار (اختياري)...' : 'Reason (optional)...',
      inputAttributes: { dir: isRtl ? 'rtl' : 'ltr' },
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e63946',
      cancelButtonColor: '#94a3b8',
      confirmButtonText: isRtl ? 'تأكيد الاعتذار' : 'Confirm Cancel',
      cancelButtonText: isRtl ? 'تراجع' : 'Back',
      reverseButtons: isRtl,
    });
    if (isConfirmed) {
      toast.success(isRtl ? 'تم تسجيل الاعتذار عن الحصة بنجاح' : 'Session cancellation submitted');
    }
  };
  const handleJoinLive = () => {
    toast.success(isRtl ? 'جاري الانتقال للبث المباشر...' : 'Connecting to live stream...');
  };
  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.home.upcomingClasses', 'الحصص القادمة')}
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-32 bg-white dark:bg-slate-800 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.home.upcomingClasses', 'الحصص القادمة')}
        </h2>
        {totalItems > pageSize && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            {totalItems} {t('parentDashboard.pagination.sessions', 'حصة')}
          </span>
        )}
      </div>
      {totalItems === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center border border-slate-100 dark:border-slate-800">
          <p className="text-slate-400 text-sm">
            {t('parentDashboard.home.noUpcomingSessions', 'لا توجد حصص قادمة مجدولة حالياً')}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {currentSessions.map((session, idx) => {
            const dateStr = formatSessionDate(session, isRtl);
            const canJoin = session.canJoinNow === true;
            const isGenericTitle = session.title && (session.title.includes('الحصة رقم') || session.title.includes('Session #'));
            const mainTitle = (!isGenericTitle && session.title) || session.group || session.title || (session.sessionNumber ? `الحصة رقم ${session.sessionNumber}` : 'حصة دراسية');
            return (
              <div
                key={session.id || idx}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-md"
              >
                <div className="space-y-1.5 text-start flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                      {mainTitle}
                    </h3>
                    {canJoin && (
                      <span className="bg-[#e63946] text-white text-xs px-3 py-1 rounded-full font-bold">
                        {t('parentDashboard.home.liveNow', 'مباشر الآن')}
                      </span>
                    )}
                  </div>
                  {session.student && (
                    <p className="text-sm text-slate-400 dark:text-slate-400">
                      <span>{t('parentDashboard.home.student', 'الطالب:')} </span>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{session.student}</span>
                    </p>
                  )}
                  {session.teacher && (
                    <p className="text-sm text-slate-400 dark:text-slate-400">
                      <span>{t('parentDashboard.home.teacher', 'المعلم:')} </span>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{session.teacher}</span>
                    </p>
                  )}
                  {dateStr && (
                    <p className="text-xs text-slate-400 dark:text-slate-400 font-medium pt-0.5">
                      {dateStr}
                    </p>
                  )}
                </div>
                <div className="shrink-0 flex items-center justify-end">
                  {canJoin ? (
                    <button
                      type="button"
                      onClick={() => handleJoinLive(session)}
                      className="px-8 py-3.5 bg-[#e63946] hover:bg-red-600 text-white rounded-full font-bold text-sm transition-all shadow-xs active:scale-95 whitespace-nowrap"
                    >
                      {t('parentDashboard.home.liveStreamNow', 'البث مباشر الآن')}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleApologize(session)}
                      className="border border-[#e63946] hover:bg-red-50 dark:hover:bg-red-950/20 text-[#e63946] rounded-full px-6 py-2 text-center transition-colors min-w-[170px]"
                    >
                      <span className="font-bold text-sm block leading-tight">
                        {t('parentDashboard.home.cancelClass', 'الإعتذار عن الحصة')}
                      </span>
                      <span className="text-[11px] text-[#e63946]/90 block mt-0.5">
                        {t('parentDashboard.home.availableUntil', { time: '01:30:20' })}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {totalPages > 1 && (
            <ParentPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              startIndex={startIndex}
              endIndex={endIndex}
              itemLabel={t('parentDashboard.pagination.sessions', 'حصة')}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
});
