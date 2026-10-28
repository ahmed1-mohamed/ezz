import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { teachersApi } from '@/shared/services/api/teachersApi'

const getImageUrl = (imagePath) => {
    if (!imagePath || typeof imagePath !== 'string' || imagePath.trim() === '') {
        return null;
    }
    const trimmed = imagePath.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
        return trimmed;
    }
    const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
    return `https://manaret-ezz.dramcode.top/${cleanPath}`;
}

function StarRating({ rating = 5 }) {
    const num = Math.min(5, Math.max(1, Math.round(Number(rating) || 5)));
    return (
        <div className="flex gap-0.5 justify-center" dir="ltr">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 transition-colors duration-300 ${
                        index < num ? "fill-[#D4AF37] text-[#D4AF37]" : "text-slate-300 dark:text-slate-600"
                    }`}
                />
            ))}
        </div>
    )
}

const TeacherSliderCard = React.memo(function TeacherSliderCard({ teacher, index, isRtl, t }) {
    const rawName = teacher.nameKey ? t(teacher.nameKey) : teacher.name;
    const name = typeof rawName === 'object' && rawName !== null
        ? (isRtl ? rawName.ar || rawName.en : rawName.en || rawName.ar)
        : (rawName || t('teachers.title', 'معلم معتمد'));

    const rawTitle = teacher.titleKey ? t(teacher.titleKey) : (teacher.title || teacher.degree || teacher.subject);
    const title = typeof rawTitle === 'object' && rawTitle !== null
        ? (isRtl ? rawTitle.ar || rawTitle.en : rawTitle.en || rawTitle.ar)
        : (rawTitle || t('teachers.defaultTitle', 'معلم متميز'));

    const initialLetter = name ? name.trim().charAt(0) : 'م';
    const rawImg = teacher.image || teacher.avatar || teacher.photo;
    const [hasError, setHasError] = useState(false);
    const [prevImg, setPrevImg] = useState(rawImg);

    if (prevImg !== rawImg) {
        setPrevImg(rawImg);
        setHasError(false);
    }

    const imgUrl = hasError ? null : getImageUrl(rawImg);

    return (
        <motion.article
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.4),
                ease: 'easeOut',
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center text-center bg-white dark:bg-slate-900 rounded-[2.2rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 hover:shadow-[0_20px_40px_rgba(15,122,108,0.12)] hover:border-[#0F7A6C]/30 transition-all duration-300 w-[78vw] max-w-[280px] sm:w-[280px] lg:w-[290px] shrink-0 snap-start select-none"
        >
            <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 shrink-0">
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0F7A6C]/20 to-[#17B89C]/20 blur-md"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {imgUrl ? (
                    <img
                        src={imgUrl}
                        alt={name}
                        width="144"
                        height="144"
                        loading="lazy"
                        decoding="async"
                        onError={() => setHasError(true)}
                        className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-[0_10px_25px_rgba(15,122,108,0.2)] relative z-10 pointer-events-none"
                    />
                ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0F7A6C] to-emerald-700 flex items-center justify-center text-white text-3xl font-extrabold shadow-[0_10px_25px_rgba(15,122,108,0.2)] relative z-10 border-4 border-white dark:border-slate-800">
                        {initialLetter}
                    </div>
                )}
            </div>

            <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-2 line-clamp-1 w-full" title={name}>
                {name}
            </h3>
            <p className="text-sm font-semibold text-[#0F7A6C] dark:text-emerald-400 mb-5 line-clamp-1 w-full" title={title}>
                {title}
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700 mt-auto">
                <StarRating rating={teacher.rating || 5} />
            </div>
        </motion.article>
    );
});

export default React.memo(function TeachersSection({ eliteTeachers: propTeachers }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const [fetchedTeachers, setFetchedTeachers] = useState([]);
    const sliderRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const hasMovedRef = useRef(false);

    const [isDragging, setIsDragging] = useState(false);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        if (!propTeachers || propTeachers.length === 0) {
            teachersApi.fetchPublicTeachers({ page: 1, limit: 12 })
                .then((res) => {
                    if (!isMounted) return;
                    const items = res?.data || res || [];
                    if (Array.isArray(items)) {
                        setFetchedTeachers(items);
                    }
                })
                .catch((err) => {
                    console.warn('TeachersSection fetchPublicTeachers fallback error:', err?.message);
                });
        }
        return () => {
            isMounted = false;
        };
    }, [propTeachers]);

    const displayTeachers = useMemo(() => {
        if (Array.isArray(propTeachers) && propTeachers.length > 0) {
            return propTeachers;
        }
        return fetchedTeachers;
    }, [propTeachers, fetchedTeachers]);

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
    }, [checkScrollState, displayTeachers.length]);

    const scroll = useCallback((direction) => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.querySelector('article');
        const step = card ? card.offsetWidth + 24 : 300;
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
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startXRef.current) * 1.5;
        if (Math.abs(walk) > 5) {
            hasMovedRef.current = true;
        }
        sliderRef.current.scrollLeft = startScrollLeftRef.current - walk;
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
        setIsDragging(false);
    };

    const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
    const NextIcon = isRtl ? ChevronLeft : ChevronRight;

    if (displayTeachers.length === 0) {
        return null;
    }

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20 sm:py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 start-0 w-[500px] h-[500px] bg-[#0F7A6C]/5 dark:bg-[#0F7A6C]/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-[#D4AF37]/5 dark:bg-[#D4AF37]/15 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-14 gap-6"
                >
                    <div className="text-start">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1B1B] dark:text-white">
                            {t("teachers.title", "نخبة من معلمينا")}
                        </h2>
                        <div className="mt-4 h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />
                        <p className="mt-5 text-[#6B7280] dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                            {t("teachers.desc", "نفخر بكوادرنا التعليمية المؤهلة والمتميزة، من ذوي الخبرة الواسعة في مجالاتهم")}
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
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className={`flex gap-6 overflow-x-auto overflow-y-hidden pb-6 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
                        }`}
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {displayTeachers.map((teacher, index) => (
                            <TeacherSliderCard
                                key={teacher.id || teacher._id || teacher.teacher_id || index}
                                teacher={teacher}
                                index={index}
                                isRtl={isRtl}
                                t={t}
                            />
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 pt-2">
                        <div className="flex-1 h-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37] rounded-full transition-all duration-300"
                                style={{ width: `${Math.max(scrollProgress, 15)}%` }}
                            />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 shrink-0">
                            {displayTeachers.length} {t('teachers.totalCount', isRtl ? 'معلمين' : 'teachers')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
});