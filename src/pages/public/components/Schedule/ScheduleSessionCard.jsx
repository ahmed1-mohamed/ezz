import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Video, ExternalLink, Copy, Check, BookOpen, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StatusBadge = React.memo(({ status, badge, badgeType, isLive: propIsLive, t }) => {
    const isLive = status === 'live' || badgeType === 'live' || propIsLive;
    const isScheduled = status === 'scheduled' || badgeType === 'upcoming' || status === 'upcoming';
    const isCompleted = status === 'completed' || status === 'finished' || badgeType === 'completed';

    if (isLive) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-xs font-bold border border-red-200 dark:border-red-900/40">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-red-600" />
                {t('schedule.status.live', 'مباشر الآن')}
            </span>
        );
    }
    if (isScheduled) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-200/80 dark:border-amber-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {t('schedule.status.scheduled', t('schedule.status.upcoming', 'مجدولة'))}
            </span>
        );
    }
    if (isCompleted) {
        return (
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                {t('schedule.status.completed', t('schedule.status.finished', 'مكتملة'))}
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700">
            {badge || status}
        </span>
    );
});

export default React.memo(function ScheduleSessionCard({
    session,
    index,
    formatSessionTime,
    copiedSessionId,
    onCopyZoom,
}) {
    const { t } = useTranslation();

    const isLive = session.status === 'live' || session.isLive || session.badgeType === 'live';
    const isCompleted = session.status === 'completed' || session.status === 'finished' || session.badgeType === 'completed';

    const timeText = formatSessionTime(session);
    const rawTeacher = typeof session.teacher === 'object' && session.teacher !== null
        ? session.teacher.name || session.teacher.nameAr || session.teacher.nameEn || ''
        : session.teacher || session.teacherName || '';
    const teacherName = rawTeacher || t('schedule.certifiedTeacher', 'معلم معتمد');
    const teacherInitial = teacherName.trim().charAt(0) || 'م';

    const groupOrCurriculum = typeof session.group === 'object' && session.group !== null
        ? session.group.name || session.group.title || ''
        : (session.group || session.groupName || session.curriculum?.name || '');

    const joinUrl = session.zoomJoinUrl || session.meetingUrl || session.zoomUrl || session.link || session.joinUrl;
    const isCopied = copiedSessionId === (session.id || index);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 sm:p-7 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:shadow-lg hover:border-[#00695C]/25 dark:hover:border-emerald-500/40 transition-all duration-300 group"
        >
            <div className="space-y-3.5 flex-1 min-w-0 text-start">
                <div className="flex flex-wrap items-center gap-2">
                    {session.sessionNumber && (
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#00695C] dark:bg-emerald-600 text-white">
                            {t('schedule.sessionNo', 'الجلسة')} #{session.sessionNumber}
                        </span>
                    )}
                    {groupOrCurriculum && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-[#00695C] dark:text-emerald-400 border border-emerald-100/70 dark:border-emerald-900/40">
                            <BookOpen className="w-3.5 h-3.5 text-[#00695C] dark:text-emerald-400 shrink-0" />
                            <span className="truncate max-w-[200px] sm:max-w-none">
                                {groupOrCurriculum}
                                {session.studentLevel?.name && ` • ${session.studentLevel.name}`}
                            </span>
                        </span>
                    )}
                    <StatusBadge
                        status={session.status}
                        badge={session.badge}
                        badgeType={session.badgeType}
                        isLive={session.isLive}
                        t={t}
                    />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#00695C] dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {session.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <div className="flex items-center gap-2 bg-[#F5F8F7] dark:bg-slate-800 px-3.5 py-2 rounded-2xl">
                        <div className="w-7 h-7 rounded-full bg-[#00695C] dark:bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            {teacherInitial}
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{teacherName}</span>
                    </div>

                    {timeText && (
                        <div className="flex items-center gap-1.5 bg-[#F5F8F7] dark:bg-slate-800 px-3.5 py-2 rounded-2xl text-slate-700 dark:text-slate-200">
                            <Clock className="w-4 h-4 text-[#00695C] dark:text-emerald-400 shrink-0" />
                            <span className="font-bold" dir="ltr">
                                {timeText}
                            </span>
                        </div>
                    )}

                    {(session.durationMinutes || session.duration) && (
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl font-medium">
                            <span>{session.durationMinutes ? `${session.durationMinutes} ${t('schedule.minutes', 'دقيقة')}` : session.duration}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                {joinUrl ? (
                    <>
                        <a
                            href={joinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 text-white cursor-pointer ${
                                isLive
                                    ? 'bg-red-600 hover:bg-red-700 animate-pulse shadow-red-500/20'
                                    : 'bg-[#00695C] hover:bg-[#005247] shadow-[#00695C]/20'
                            }`}
                        >
                            <Video className="w-4 h-4" />
                            <span>
                                {isLive
                                    ? t('schedule.joinLiveNow', 'انضم للبث المباشر الآن')
                                    : t('schedule.joinViaZoom', 'الانضمام عبر Zoom')}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>

                        <button
                            type="button"
                            onClick={() => onCopyZoom(joinUrl, session.id || index)}
                            className={`flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                isCopied
                                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                                    : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                            }`}
                            title={t('schedule.copyZoomLink', 'نسخ رابط الزوم')}
                        >
                            {isCopied ? (
                                <>
                                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-xs">{t('schedule.copied', 'تم النسخ!')}</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                                    <span className="text-xs hidden sm:inline">{t('schedule.copy', 'نسخ')}</span>
                                </>
                            )}
                        </button>
                    </>
                ) : (
                    <div className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold text-center border border-transparent dark:border-slate-700">
                        {isCompleted
                            ? t('schedule.sessionCompleted', 'انتهت الجلسة')
                            : (session.actionText || t('schedule.linkPending', 'سيتم تفعيل الرابط قبل البدء'))}
                    </div>
                )}
            </div>
        </motion.div>
    );
});
