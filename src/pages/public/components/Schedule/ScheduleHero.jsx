import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default React.memo(function ScheduleHero({
    title,
    subtitle,
    formattedWeekRange,
    weekInfo,
    totalWeeklySessions,
}) {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 dark:bg-[#00695C]/20 border border-emerald-200/60 dark:border-emerald-500/30 text-[#00695C] dark:text-emerald-400 text-xs sm:text-sm font-bold shadow-xs">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t('schedule.badge', 'الجدول الدراسي التفاعلي')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00695C] dark:text-emerald-400 tracking-tight">
                {title || t('schedule.pageTitle', 'جدول الحلقات والجلسات اليومية')}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                {subtitle || t('schedule.pageSubtitle', 'تابع رحلتك القرآنية والعلمية مع نخبة من المعلمين المعتمدين في منارة العز وانضم لحصتك بنقرة واحدة.')}
            </p>

            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold mt-2">
                <CalendarDays className="w-4 h-4 text-[#00695C] dark:text-emerald-400" />
                <span>
                    {formattedWeekRange ||
                        `${t('schedule.weekOf', 'أسبوع')}: ${weekInfo?.startDate || ''} - ${weekInfo?.endDate || ''}`}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="text-[#00695C] dark:text-emerald-400 font-bold">
                    {totalWeeklySessions} {t('schedule.sessionsThisWeek', 'جلسة هذا الأسبوع')}
                </span>
            </div>
        </motion.div>
    );
});
