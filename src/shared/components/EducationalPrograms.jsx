import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

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

    const sliderRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const hasMovedRef = useRef(false);

    const [isDragging, setIsDragging] = useState(false);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    const programsList = useMemo(() => {
        if (hasDynamicData) {
            return rawCurricula.map((item, index) => {
                const prog = item?.data || item;
                const title = typeof prog.name === 'object'
                    ? (isRtl ? prog.name.ar || prog.name.en : prog.name.en || prog.name.ar)
                    : prog.name || '';
                const desc = typeof prog.description === 'object'
                    ? (isRtl ? prog.description.ar || prog.description.en : prog.description.en || prog.description.ar)
                    : prog.description || '';
                const imgSrc = prog.image ? getImageUrl(prog.image) : '';

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

                return {
                    id: prog.id || prog._id || index,
                    title,
                    desc,
                    badge,
                    tags,
                    features,
                    image: imgSrc,
                };
            });
        }

        const defaultKeys = ['integrated', 'arabic', 'quran'];
        return defaultKeys.map((key, index) => {
            const base = `programs.list.${key}`;
            return {
                id: index,
                title: t(`${base}.title`),
                desc: t(`${base}.description`),
                badge: t(`${base}.badge`),
                tags: Array.isArray(t(`${base}.tags`, { returnObjects: true })) ? t(`${base}.tags`, { returnObjects: true }) : [],
                features: Array.isArray(t(`${base}.features`, { returnObjects: true })) ? t(`${base}.features`, { returnObjects: true }) : [],
                image: '',
            };
        });
    }, [hasDynamicData, rawCurricula, isRtl, t]);

    const checkScrollState = useCallback(() => {
        const el = sliderRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll <= 5) {
            setCanScrollPrev(false);
            setCanScrollNext(false);
            setScrollProgress(100);
            return;
        }

        const current = Math.abs(scrollLeft);
        setCanScrollPrev(current > 8);
        setCanScrollNext(current < maxScroll - 8);
        const pct = Math.min(100, Math.max(0, (current / maxScroll) * 100));
        setScrollProgress(pct);
    }, []);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        checkScrollState();
        el.addEventListener('scroll', checkScrollState, { passive: true });
        window.addEventListener('resize', checkScrollState);

        return () => {
            el.removeEventListener('scroll', checkScrollState);
            window.removeEventListener('resize', checkScrollState);
        };
    }, [checkScrollState, programsList.length]);

    const scroll = useCallback((direction) => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.querySelector('article');
        const step = card ? card.offsetWidth + 24 : 360;
        const delta = direction === 'next' ? step : -step;

        el.scrollBy({
            left: isRtl ? -delta : delta,
            behavior: 'smooth'
        });
    }, [isRtl]);

    const handleMouseDown = (e) => {
        if (!sliderRef.current) return;
        isDraggingRef.current = true;
        hasMovedRef.current = false;
        startXRef.current = e.pageX - sliderRef.current.offsetLeft;
        startScrollLeftRef.current = sliderRef.current.scrollLeft;
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current || !sliderRef.current) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = x - startXRef.current;
        if (Math.abs(walk) > 5) {
            hasMovedRef.current = true;
        }
        sliderRef.current.scrollLeft = startScrollLeftRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDraggingRef.current = false;
        setIsDragging(false);
    };

    const handleCardClick = (e) => {
        if (hasMovedRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
    const NextIcon = isRtl ? ChevronLeft : ChevronRight;

    return (
        <section
            className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="absolute top-[-120px] start-[-120px] h-[400px] w-[400px] rounded-full bg-[#0F7A6C]/10 dark:bg-[#0F7A6C]/20 blur-[120px]" />
            <div className="absolute bottom-[-120px] end-[-120px] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 gap-6"
                >
                    <div className="text-start">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F7A6C] dark:text-emerald-400">
                            {t('programs.title', 'برامجنا التعليمية')}
                        </h2>

                        <div className="mt-4 h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />

                        <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-7 sm:leading-8">
                            {t('programs.description', 'نقدم مجموعة متنوعة من البرامج التعليمية المتميزة لتلبية احتياجات جميع أبنائنا.')}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
                        <button
                            type="button"
                            onClick={() => scroll('prev')}
                            disabled={!canScrollPrev}
                            aria-label={isRtl ? 'السابق' : 'Previous'}
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                                canScrollPrev
                                    ? 'border-slate-300 bg-white text-slate-700 hover:bg-[#0F7A6C] hover:text-white hover:border-[#0F7A6C] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-[#0F7A6C] dark:hover:text-white shadow-md hover:shadow-lg active:scale-95 cursor-pointer'
                                    : 'border-slate-200 bg-slate-100/70 text-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            <PrevIcon className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('next')}
                            disabled={!canScrollNext}
                            aria-label={isRtl ? 'التالي' : 'Next'}
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                                canScrollNext
                                    ? 'border-[#0F7A6C] bg-[#0F7A6C] text-white hover:bg-[#005F54] shadow-md hover:shadow-lg active:scale-95 cursor-pointer'
                                    : 'border-slate-200 bg-slate-100/70 text-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            <NextIcon className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                <div className="relative group/slider">
                    <button
                        type="button"
                        onClick={() => scroll('prev')}
                        disabled={!canScrollPrev}
                        aria-label={isRtl ? 'السابق' : 'Previous'}
                        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 -start-5 z-20 w-12 h-12 rounded-full items-center justify-center bg-white/95 backdrop-blur-md shadow-xl border border-slate-200 text-slate-700 hover:bg-[#0F7A6C] hover:text-white hover:border-[#0F7A6C] dark:bg-slate-800/95 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-[#0F7A6C] dark:hover:text-white transition-all duration-300 active:scale-95 cursor-pointer ${
                            canScrollPrev ? 'opacity-90 hover:opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <PrevIcon className="w-6 h-6" />
                    </button>

                    <button
                        type="button"
                        onClick={() => scroll('next')}
                        disabled={!canScrollNext}
                        aria-label={isRtl ? 'التالي' : 'Next'}
                        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 -end-5 z-20 w-12 h-12 rounded-full items-center justify-center bg-white/95 backdrop-blur-md shadow-xl border border-slate-200 text-slate-700 hover:bg-[#0F7A6C] hover:text-white hover:border-[#0F7A6C] dark:bg-slate-800/95 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-[#0F7A6C] dark:hover:text-white transition-all duration-300 active:scale-95 cursor-pointer ${
                            canScrollNext ? 'opacity-90 hover:opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <NextIcon className="w-6 h-6" />
                    </button>

                    <div
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        className={`flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
                            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
                        }`}
                    >
                        {programsList.map((prog, index) => (
                            <motion.article
                                key={prog.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
                                style={{ willChange: 'transform, opacity' }}
                                className="group relative overflow-hidden rounded-[2.2rem] bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between w-[82vw] max-w-[340px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start"
                            >
                                <div className="flex-1 flex flex-col">
                                    <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-[#0F7A6C] to-[#0A544A] shrink-0 flex items-center justify-center">
                                        {prog.image ? (
                                            <img
                                                src={prog.image}
                                                alt={prog.title}
                                                width="380"
                                                height="224"
                                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105 pointer-events-none select-none"
                                                loading="lazy"
                                                decoding="async"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-white/90 p-6 text-center select-none bg-gradient-to-br from-[#0F7A6C] via-[#0D6B5E] to-[#D4AF37]/40">
                                                <BookOpen className="w-14 h-14 text-white/80 mb-2" />
                                                <span className="text-base font-bold text-white tracking-wide">{prog.title}</span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

                                        {prog.badge && (
                                            <span className="absolute top-4 start-4 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1 text-xs sm:text-sm font-bold text-[#0F7A6C] dark:text-emerald-400 shadow-md border border-white/60 dark:border-slate-700">
                                                {prog.badge}
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-5 sm:p-6 flex flex-col flex-1 text-start">
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#0F7A6C] dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                                            {prog.title}
                                        </h3>

                                        {prog.desc && (
                                            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm line-clamp-3">
                                                {prog.desc}
                                            </p>
                                        )}

                                        {prog.tags.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {prog.tags.slice(0, 4).map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-750 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-[#0F7A6C] dark:hover:border-emerald-400 hover:text-[#0F7A6C] dark:hover:text-emerald-400 transition-colors truncate max-w-[200px]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {prog.features.length > 0 && (
                                            <div className="mt-5 space-y-2.5">
                                                {prog.features.slice(0, 4).map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-5 w-5 rounded-full bg-[#0F7A6C] flex items-center justify-center shadow-sm shrink-0">
                                                            <Check className="h-3 w-3 text-white" />
                                                        </div>
                                                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 line-clamp-1 font-medium">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6 pt-0 mt-auto">
                                    <Link
                                        to="/curriculums"
                                        onClick={handleCardClick}
                                        className="block w-full"
                                    >
                                        <button
                                            type="button"
                                            aria-label={`${t('programs.cta', 'استكشف البرنامج')} - ${prog.title}`}
                                            className="w-full relative overflow-hidden rounded-2xl bg-[#0F7A6C] py-3 font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:bg-[#005F54] hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                        >
                                            {t('programs.cta', 'استكشف البرنامج')}
                                        </button>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-28 sm:w-36 h-2 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37] rounded-full transition-all duration-300"
                                style={{ width: `${Math.max(12, scrollProgress)}%` }}
                            />
                        </div>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            {programsList.length} {isRtl ? 'مناهج دراسية' : 'Curricula'}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/curriculums"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F7A6C] dark:text-emerald-400 hover:text-[#005F54] dark:hover:text-emerald-300 transition-colors"
                        >
                            <span>{isRtl ? 'عرض جميع المناهج' : 'View All Curricula'}</span>
                            <NextIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
});