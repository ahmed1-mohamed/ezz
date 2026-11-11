import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default React.memo(function ScheduleHero({ title, subtitle }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language?.startsWith('en') ? 'en' : 'ar';
    const isRtl = currentLang === 'ar';
    const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
        >
            <div className="flex justify-center">
                <Link
                    to={`/${currentLang}/trial-session`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-amber-500/15 border border-amber-300/60 dark:border-amber-500/40 text-xs sm:text-sm font-black text-amber-800 dark:text-amber-300 shadow-xs hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer group"
                >
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black text-[10px] shrink-0">
                        %20
                    </div>
                    <span>
                        {t(
                            'schedule.trialOfferBadge',
                            'احجز حصتك التجريبية الآن واحصل على خصم 20% على الشهر الأول'
                        )}
                    </span>
                    <ArrowIcon className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00695C] dark:text-emerald-400 tracking-tight">
                {title || t('schedule.pageTitle', 'جدول الحلقات والجلسات اليومية')}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                {subtitle || t('schedule.pageSubtitle', 'تابع رحلتك القرآنية والعلمية مع نخبة من المعلمين المعتمدين في منارة العز وانضم لحصتك بنقرة واحدة.')}
            </p>
        </motion.div>
    );
});
