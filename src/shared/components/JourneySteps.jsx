import React from 'react';
import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, MonitorPlay } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/context/useAuth.jsx";
import { getRedirectPath } from "@/shared/services/authService.js";

export default React.memo(function JourneySteps() {
    const { t } = useTranslation();
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const executeRegister = () => {
        const targetUrl = '/dashboard/parent/students?action=trial';
        if (!isAuthenticated) {
            navigate(`/login?redirect=${encodeURIComponent(targetUrl)}`);
            return;
        }
        if (user?.role?.toLowerCase() === 'parent') {
            navigate(targetUrl);
            return;
        }
        navigate(getRedirectPath(user?.role) || '/');
    };
    const steps = [
        {
            id: "1",
            title: t('journey.steps.register.title', 'سجّل في الأكاديمية'),
            description: t('journey.steps.register.description', 'أكمل التسجيل عبر الموقع للبدء.'),
            icon: UserPlus,
            position: "right",
        },
        {
            id: "2",
            title: t('journey.steps.choose.title', 'ننسّق معك حصّتك الأولى'),
            description: t('journey.steps.choose.description', 'يتواصل معك فريق الأكاديمية للتعرّف إلى احتياجات الطالب وترشيح معلّم متخصّص والاتفاق على موعد مناسب.'),
            icon: CalendarCheck,
            position: "center",
        },
        {
            id: "3",
            title: t('journey.steps.start.title', 'ابدأ التعلّم'),
            description: t('journey.steps.start.description', 'احضر حصّتك الفردية المباشرة عبر الإنترنت في الموعد المتّفق عليه.'),
            icon: MonitorPlay,
            position: "left",
        },
    ];
    return (
        <section className="relative overflow-hidden bg-[#F4FAF8] dark:bg-slate-900/40 py-24">
            <div className="relative max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-[#0F7A6C]/10 dark:bg-[#0F7A6C]/25 text-[#0F7A6C] dark:text-emerald-400 text-sm font-bold mb-5">
                        {t('journey.badge', 'خطوات بسيطة')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1B1B1B] dark:text-white leading-tight">
                        {t('journey.title', 'كيف تبدأ التعلّم معنا؟')}
                    </h2>
                    <p className="mt-5 text-[#6B7280] dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        {t('journey.description', 'نرافقك خطوة بخطوة في رحلتك التعليمية معنا.')}
                    </p>
                </motion.div>
                <div className="relative">
                    <div className="hidden md:block absolute top-[-25px] start-[14%] end-[14%] z-0 pointer-events-none">
                        <svg
                            width="100%"
                            height="120"
                            viewBox="50 -30 1200 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full overflow-visible"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 60 
         C140 -10 260 -10 400 60
         C540 130 660 130 800 60
         C940 0 1060 0 1200 60"
                                stroke="#9A7B12"
                                strokeWidth="3"
                                strokeDasharray="10 12"
                                strokeLinecap="round"
                                fill="none"
                                className="animate-pulse opacity-60 dark:opacity-80"
                            />
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">                        {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                style={{ willChange: 'transform, opacity' }}
                                className="relative flex flex-col items-center text-center"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute -top-5 end-[35%] md:end-[30%] z-20"
                                >
                                    <div className="w-14 h-14 rounded-full bg-[#8B6B00] shadow-md flex items-center justify-center border-4 border-white dark:border-slate-800">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    className="relative z-20 w-24 h-24 md:w-28 md:h-28 rounded-full border-[5px] border-[#F0C343] bg-[#F8F8F8] dark:bg-slate-800 shadow-sm flex items-center justify-center"
                                >
                                    <span className="text-4xl font-black text-[#005F54] dark:text-emerald-400">
                                        {step.id}
                                    </span>
                                </motion.div>
                                <div className="mt-10">
                                    <h3 className="text-2xl font-extrabold text-[#00695C] dark:text-emerald-400">
                                        {step.title}
                                    </h3>
                                    <p className="mt-4 text-[#6B7280] dark:text-slate-300 leading-8 text-base max-w-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                    </div>
                    <div className="mt-16 text-center">
                        <button
                            type="button"
                            onClick={executeRegister}
                            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            {t('journey.cta', 'سجّل الآن')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
})