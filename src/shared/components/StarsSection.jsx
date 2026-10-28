import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { landingApi } from '@/shared/services/api/landingApi'

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

const StudentSliderCard = React.memo(function StudentSliderCard({ student, index, isRtl }) {
    const sRef = student.student || {};
    const rawName = student.name || sRef.name;
    const studentName = typeof rawName === 'object' && rawName !== null
        ? (isRtl ? rawName.ar || rawName.en : rawName.en || rawName.ar)
        : (rawName || '');
    const rawImg = student.image || student.avatar || sRef.image || sRef.avatar || student.photo || sRef.photo || '';
    const [hasError, setHasError] = useState(false);
    const [prevImg, setPrevImg] = useState(rawImg);

    if (prevImg !== rawImg) {
        setPrevImg(rawImg);
        setHasError(false);
    }

    const imgUrl = hasError ? null : getImageUrl(rawImg);
    const initial = studentName ? studentName.trim().charAt(0) : 'ط';

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center text-center bg-white dark:bg-slate-900 rounded-[2.2rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] border border-slate-100 dark:border-slate-800 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/30 transition-all duration-300 w-[78vw] max-w-[270px] sm:w-[270px] shrink-0 snap-start select-none"
        >
            <div className="relative mb-6 group shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#EAB308] opacity-40 blur-md group-hover:blur-xl transition-all duration-300 transform scale-105" />
                <div className="relative rounded-full bg-gradient-to-br from-[#FDE047] to-[#CA8A04] p-1.5 shadow-md">
                    <div className="bg-white dark:bg-slate-900 rounded-full w-28 h-28 sm:w-32 sm:h-32 p-1 overflow-hidden flex items-center justify-center">
                        {imgUrl ? (
                            <img
                                src={imgUrl}
                                alt={studentName}
                                width="128"
                                height="128"
                                loading="lazy"
                                decoding="async"
                                onError={() => setHasError(true)}
                                className="w-full h-full rounded-full object-cover pointer-events-none"
                            />
                        ) : (
                            <div className="bg-gradient-to-br from-[#0f7a6c] to-emerald-700 rounded-full w-full h-full flex items-center justify-center text-white text-3xl font-extrabold shadow-inner select-none">
                                {initial}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-1 w-full" title={studentName}>
                {studentName}
            </h3>

            <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 rounded-full border border-amber-200/50 dark:border-amber-900/30">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#735C00] text-[#735C00] dark:fill-amber-400 dark:text-amber-400" />
                ))}
            </div>
        </motion.article>
    );
});

export default React.memo(function StarsSection({ featuredStudents }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const [studentsList, setStudentsList] = useState([]);
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
        const loadStudentsList = async () => {
            try {
                const res = await landingApi.fetchPublicFeaturedStudents();
                const data = res?.data || res || [];
                if (isMounted && Array.isArray(data)) {
                    setStudentsList(data);
                }
            } catch (err) {
                console.warn('Failed to fetch public featured students in StarsSection:', err?.message);
            }
        };
        if (!featuredStudents || featuredStudents.length === 0) {
            loadStudentsList();
        }
        return () => {
            isMounted = false;
        };
    }, [featuredStudents, i18n.language]);

    const displayStudents = useMemo(() => {
        return (featuredStudents && featuredStudents.length > 0)
            ? featuredStudents
            : studentsList;
    }, [featuredStudents, studentsList]);

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
    }, [checkScrollState, displayStudents.length]);

    const scroll = useCallback((direction) => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.querySelector('article');
        const step = card ? card.offsetWidth + 24 : 290;
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

    if (!displayStudents || displayStudents.length === 0) {
        return null;
    }

    return (
        <section className="py-20 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-14 gap-6"
                >
                    <div className="text-start">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
                            {t('stars.title', 'نجوم التميز الأكاديمي')}
                        </h2>
                        <div className="mt-4 h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#0F7A6C]" />
                        <p className="mt-5 text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                            {t('stars.description', 'نحتفي بطلابنا المتميزين الذين حققوا نتائج استثنائية وكانوا مثالاً للجد والاجتهاد')}
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
                        {displayStudents.map((student, index) => (
                            <StudentSliderCard
                                key={student.id || student._id || index}
                                student={student}
                                index={index}
                                isRtl={isRtl}
                            />
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 pt-2">
                        <div className="flex-1 h-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#0F7A6C] rounded-full transition-all duration-300"
                                style={{ width: `${Math.max(scrollProgress, 15)}%` }}
                            />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 shrink-0">
                            {displayStudents.length} {t('stars.countLabel', isRtl ? 'نجوم' : 'stars')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
});