import React from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import program1 from "../../images/programs/2.webp";
import program2 from "../../images/programs/1.webp";
import program3 from "../../images/programs/3.webp";

const fallbackImages = [program3, program2, program1];

const staticPrograms = [
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

const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
        return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

export default React.memo(function EducationalPrograms({ curricula: propCurricula }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const reduxCurricula = useSelector((state) => state.landing?.landingData?.curricula);
    const rawCurricula = propCurricula || reduxCurricula;
    const hasDynamicData = Array.isArray(rawCurricula) && rawCurricula.length > 0;

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
                    {hasDynamicData
                        ? rawCurricula.map((item, index) => {
                            const prog = item?.data || item;
                            const title = typeof prog.name === 'object'
                                ? (isRtl ? prog.name.ar || prog.name.en : prog.name.en || prog.name.ar)
                                : prog.name || '';
                            const desc = typeof prog.description === 'object'
                                ? (isRtl ? prog.description.ar || prog.description.en : prog.description.en || prog.description.ar)
                                : prog.description || '';
                            const fallbackImg = fallbackImages[index % fallbackImages.length];
                            const imgSrc = prog.image ? getImageUrl(prog.image) : fallbackImg;

                            const badge = prog.language?.name
                                || (prog.levels && prog.levels.length > 0
                                    ? (isRtl ? `${prog.levels.length} مستويات` : `${prog.levels.length} Levels`)
                                    : (isRtl ? 'برنامج معتمد' : 'Accredited'));

                            const tags = Array.isArray(prog.benefitsAfterGraduation) && prog.benefitsAfterGraduation.length > 0
                                ? prog.benefitsAfterGraduation
                                : (Array.isArray(prog.levels) ? prog.levels.map((l) => l.name) : []);

                            const features = Array.isArray(prog.features) && prog.features.length > 0
                                ? prog.features
                                : (Array.isArray(prog.benefitsAfterGraduation) && prog.benefitsAfterGraduation.length > 0
                                    ? prog.benefitsAfterGraduation
                                    : []);

                            return (
                                <motion.article
                                    key={prog.id || prog._id || index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    style={{ willChange: 'transform, opacity' }}
                                    className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                                            <img
                                                src={imgSrc}
                                                alt={title}
                                                width="360"
                                                height="224"
                                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                                loading="lazy"
                                                decoding="async"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = fallbackImg;
                                                }}
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                            {badge && (
                                                <span className="absolute top-4 start-4 rounded-full bg-white/90 backdrop-blur px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold text-[#0F7A6C] shadow-md">
                                                    {badge}
                                                </span>
                                            )}
                                        </div>

                                        <div className="p-5 sm:p-6 flex flex-col text-start">
                                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0F7A6C] transition line-clamp-2">
                                                {title}
                                            </h3>

                                            {desc && (
                                                <p className="mt-3 sm:mt-4 text-slate-600 leading-7 sm:leading-8 text-xs sm:text-sm line-clamp-3">
                                                    {desc}
                                                </p>
                                            )}

                                            {tags.length > 0 && (
                                                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                                                    {tags.slice(0, 4).map((tag, i) => (
                                                        <span
                                                            key={i}
                                                            className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs text-slate-600 hover:border-[#0F7A6C] hover:text-[#0F7A6C] transition truncate max-w-[200px]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {features.length > 0 && (
                                                <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
                                                    {features.slice(0, 4).map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="h-5 w-5 rounded-full bg-[#0F7A6C] flex items-center justify-center shadow-sm shrink-0">
                                                                <Check className="h-3 w-3 text-white" />
                                                            </div>
                                                            <span className="text-xs sm:text-sm text-slate-700 line-clamp-1">
                                                                {feature}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-5 sm:p-6 pt-0">
                                        <Link
                                            to="/curriculums"
                                            className="block w-full"
                                        >
                                            <button
                                                aria-label={`${t('programs.cta', 'استكشف البرنامج')} - ${title}`}
                                                className="w-full relative overflow-hidden rounded-2xl bg-[#0F7A6C] py-2.5 sm:py-3.5 font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:bg-[#005F54] hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                            >
                                                {t('programs.cta', 'استكشف البرنامج')}
                                            </button>
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })
                        : staticPrograms.map((program, index) => {
                            const base = `programs.list.${program.key}`;
                            return (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    style={{ willChange: 'transform, opacity' }}
                                    className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="relative h-48 sm:h-56 overflow-hidden">
                                            <img
                                                src={program.image}
                                                alt={t(`${base}.title`)}
                                                width="360"
                                                height="224"
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
                                        </div>
                                    </div>

                                    <div className="p-5 sm:p-6 pt-0">
                                        <Link to="/curriculums" className="block w-full">
                                            <button
                                                aria-label={`${t('programs.cta', 'استكشف البرنامج')} - ${t(`${base}.title`)}`}
                                                className="w-full relative overflow-hidden rounded-2xl bg-[#0F7A6C] py-2.5 sm:py-3.5 font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:bg-[#005F54] hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                            >
                                                {t('programs.cta', 'استكشف البرنامج')}
                                            </button>
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                </div>
            </div>
        </section>
    );
});