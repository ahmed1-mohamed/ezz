import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default React.memo(function ScheduleHero({ title, subtitle }) {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
        >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00695C] dark:text-emerald-400 tracking-tight">
                {title || t('schedule.pageTitle', 'جدول الحلقات والجلسات اليومية')}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                {subtitle || t('schedule.pageSubtitle', 'تابع رحلتك القرآنية والعلمية مع نخبة من المعلمين المعتمدين في منارة العز وانضم لحصتك بنقرة واحدة.')}
            </p>
        </motion.div>
    );
});
