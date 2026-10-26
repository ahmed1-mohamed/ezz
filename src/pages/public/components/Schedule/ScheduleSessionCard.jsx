import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Video, ExternalLink, Copy, Check, Users, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    const teacherName = typeof session.teacher === 'object' && session.teacher !== null
        ? session.teacher.name || session.teacher.nameAr || session.teacher.nameEn || ''
        : session.teacher || session.teacherName || '';
    const groupName = typeof session.group === 'object' && session.group !== null
        ? session.group.name || session.group.title || ''
        : session.group || session.groupName || '';

    const zoomUrl = session.zoomJoinUrl || session.joinUrl || session.meetingUrl;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 relative border flex flex-col justify-between ${
                isLive
                    ? 'bg-gradient-to-br from-red-50/80 via-white to-red-50/30 dark:from-red-950/30 dark:via-slate-900 dark:to-red-950/20 border-red-200/80 dark:border-red-900/50 shadow-md ring-2 ring-red-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1'
            }`}
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                        {t('schedule.sessionNo', 'الحصة رقم')} {session.sessionNumber || index + 1}
                    </span>

                    {isLive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-red-500 text-white animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-white" />
                            {t('schedule.filterLive', 'مباشر الآن')}
                        </span>
                    ) : isCompleted ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            {t('schedule.filterCompleted', 'مكتملة')}
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400">
                            {t('schedule.filterScheduled', 'قادمة')}
                        </span>
                    )}
                </div>

                <div className="space-y-1.5 text-start">
                    {groupName && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#00695C] dark:text-emerald-400">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span className="truncate">{groupName}</span>
                        </div>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {session.title}
                    </h3>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 font-semibold text-start">
                    {timeText && (
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span dir="ltr">{timeText}</span>
                        </div>
                    )}
                    {teacherName && (
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-slate-400" />
                            <span>{teacherName}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                {zoomUrl ? (
                    <>
                        <a
                            href={zoomUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 py-2.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                                isLive
                                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/20'
                                    : 'bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white'
                            }`}
                        >
                            <Video className="w-4 h-4" />
                            <span>{t('schedule.joinViaZoom', 'انضم عبر زووم')}</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>

                        <button
                            onClick={() => onCopyZoom(zoomUrl, session.id || index)}
                            title={t('schedule.copyZoomLink', 'نسخ رابط الزووم')}
                            className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                            {copiedSessionId === (session.id || index) ? (
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </>
                ) : (
                    <div className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-slate-400 dark:text-slate-500 text-xs font-semibold text-center">
                        {isCompleted ? t('schedule.sessionCompleted', 'الجلسة منتهية') : t('schedule.linkPending', 'رابط الجلسة سيتاح قبل الموعد')}
                    </div>
                )}
            </div>
        </motion.div>
    );
});
