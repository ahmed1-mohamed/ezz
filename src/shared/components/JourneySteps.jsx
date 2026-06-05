import React from "react";
import { motion } from "framer-motion";
import { UserPlus, GraduationCap, MonitorPlay } from "lucide-react";
import { useTranslation } from "react-i18next";

export default React.memo(function JourneySteps() {
    const { t } = useTranslation();

    const steps = [
        {
            id: "1",
            title: t('journey.steps.register.title', 'إنشاء حساب'),
            description: t('journey.steps.register.description', 'سجل بياناتك للبدء'),
            icon: UserPlus,
            position: "right",
        },
        {
            id: "2",
            title: t('journey.steps.choose.title', 'اختر البرنامج'),
            description: t('journey.steps.choose.description', 'تصفح البرامج المتاحة واختبر ما يناسبك'),
            icon: GraduationCap,
            position: "center",
        },
        {
            id: "3",
            title: t('journey.steps.start.title', 'ابدأ التعلم'),
            description: t('journey.steps.start.description', 'احضر الدروس وتفاعل مع المعلمين'),
            icon: MonitorPlay,
            position: "left",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#F4FAF8] py-24">
            <div className="relative max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-[#0F7A6C]/10 text-[#0F7A6C] text-sm font-bold mb-5">
                        {t('journey.badge', 'كيف نبدأ؟')}
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black text-[#1B1B1B] leading-tight">
                        {t('journey.title', 'خطوات بسيطة لبدء رحلتك التعليمية')}
                    </h2>

                    <p className="mt-5 text-[#6B7280] text-lg max-w-2xl mx-auto">
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
                                className="animate-pulse"
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
                                    <div className="w-14 h-14 rounded-full bg-[#8B6B00] shadow-md flex items-center justify-center border-4 border-white">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    className="relative z-20 w-24 h-24 md:w-28 md:h-28 rounded-full border-[5px] border-[#F0C343] bg-[#F8F8F8] shadow-sm flex items-center justify-center"
                                >
                                    <span className="text-4xl font-black text-[#005F54]">
                                        {step.id}
                                    </span>
                                </motion.div>

                                <div className="mt-10">
                                    <h3 className="text-2xl font-extrabold text-[#00695C]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-[#6B7280] leading-8 text-base max-w-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
})