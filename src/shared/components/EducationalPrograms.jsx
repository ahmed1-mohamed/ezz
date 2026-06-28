import React from 'react';
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import program1 from "../../images/programs/2.webp";
import program2 from "../../images/programs/1.webp";
import program3 from "../../images/programs/3.webp";

const programs = [
    {
        image: program3,
        key: "integrated"
    },
    {
        image: program2,
        key: "arabic"
    },
    {
        image: program1,
        key: "quran"
    },
];


export default React.memo(function EducationalPrograms() {
    const { t } = useTranslation();

    return (
        <section
            className="relative bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute top-[-120px] start-[-120px] h-[400px] w-[400px] rounded-full bg-[#0F7A6C]/10 blur-[120px]" />
            <div className="absolute bottom-[-120px] end-[-120px] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F7A6C]">
                        {t('programs.title', 'برامجنا التعليمية')}
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />

                    <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-7 sm:leading-8">
                        {t('programs.description', 'نقدم مجموعة متنوعة من البرامج التعليمية المتميزة لتلبية احتياجات جميع أبنائنا.')}
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {programs.map((program, index) => {
                        const base = `programs.list.${program.key}`;
                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{ willChange: 'transform, opacity' }}
                                className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200 shadow-md  transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
                            >
                                <div className="relative h-48 sm:h-56 overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={t(`${base}.title`)}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    <span className="absolute top-4 start-4 rounded-full bg-white/90 backdrop-blur px-3 sm:px-4 py-1 text-lg sm:text-sm font-bold text-[#0F7A6C] shadow-md">
                                        {t(`${base}.badge`)}
                                    </span>
                                </div>

                                <div className="p-5 sm:p-6 flex flex-col text-start">

                                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0F7A6C] transition">
                                        {t(`${base}.title`)}
                                    </h3>

                                    <p className="mt-3 sm:mt-4 text-slate-600 leading-7 sm:leading-8 text-xs sm:text-sm">
                                        {t(`${base}.description`)}
                                    </p>

                                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                                        {(Array.isArray(t(`${base}.tags`, { returnObjects: true })) ? t(`${base}.tags`, { returnObjects: true }) : []).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:border-[#0F7A6C] hover:text-[#0F7A6C] transition"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
                                        {(Array.isArray(t(`${base}.features`, { returnObjects: true })) ? t(`${base}.features`, { returnObjects: true }) : []).map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="h-5 w-5 rounded-full bg-[#0F7A6C] flex items-center justify-center shadow-sm">
                                                    <Check className="h-3 w-3 text-white" />
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-700">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-6 sm:mt-8 relative overflow-hidden rounded-2xl bg-[#0F7A6C] py-2.5 sm:py-3.5 font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:bg-[#005F54] hover:shadow-lg active:scale-[0.98]">
                                        {t('programs.cta', 'استكشف البرنامج')}
                                    </button>

                                </div>
                            </motion.article>
                        );
                    })}

                </div>
            </div>
        </section>
    );
})