import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const getImageUrl = (imagePath) => {
    if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) return null;
    const trimmed = imagePath.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
        return trimmed;
    }
    const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
    return `https://manaret-ezz.dramcode.top/${cleanPath}`;
}

const TestimonialCard = React.memo(({ item, index }) => {
    const rawImg = item.image || item.avatar;
    const [hasError, setHasError] = useState(false);
    const [prevImg, setPrevImg] = useState(rawImg);

    if (prevImg !== rawImg) {
        setPrevImg(rawImg);
        setHasError(false);
    }

    const imgUrl = hasError ? null : getImageUrl(rawImg);
    const initial = item.name ? item.name.trim().charAt(0) : 'و';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.4),
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{ willChange: 'transform, opacity' }}
            className="group relative w-[85vw] max-w-[340px] sm:w-[360px] lg:w-[380px] shrink-0 snap-start select-none"
        >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#0F7A6C]/5 to-[#17B89C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative bg-white/95 dark:bg-slate-900/90 rounded-[32px] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 overflow-hidden h-[320px] flex flex-col justify-between transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(15,122,108,0.1)] group-hover:border-[#0F7A6C]/25">
                <Quote className="absolute top-6 start-6 w-12 h-12 text-[#0F7A6C]/20 dark:text-emerald-400/20 rotate-180" />

                <p className="relative z-10 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-8 mt-6 text-start line-clamp-4 font-medium">
                    {item.text}
                </p>

                <div className="flex items-center gap-4 mt-6 justify-start border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#17B89C] blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        {imgUrl ? (
                            <img
                                src={imgUrl}
                                alt={item.name}
                                onError={() => setHasError(true)}
                                className="relative w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md pointer-events-none"
                                loading="lazy"
                                decoding="async"
                            />
                        ) : (
                            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#0F7A6C] to-[#0A5248] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-2 border-white dark:border-slate-800">
                                {initial}
                            </div>
                        )}
                    </div>
                    <div className="relative z-10 text-start min-w-0">
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg truncate">
                            {item.name}
                        </h3>
                        <span className="text-xs font-semibold text-[#0F7A6C] dark:text-emerald-400">
                            {item.role || 'ولي أمر'}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

export default React.memo(function TestimonialsSection({ testimonials: customTestimonials }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const sliderRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const hasMovedRef = useRef(false);

    const [isDragging, setIsDragging] = useState(false);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    const rawTestimonials = t('testimonials.items', { returnObjects: true });
    const fallbackTestimonials = useMemo(() => {
        if (Array.isArray(rawTestimonials)) return rawTestimonials;
        return [
            { text: 'تجربة تعليمية ممتازة ومتابعة مستمرة رفعت من مستوى أبنائي في القرآن واللغة العربية بشكل ملحوظ.', name: 'أحمد محمود', role: 'ولي أمر' },
            { text: 'محتوى رائع جداً والمعلمون على أعلى درجات الكفاءة والصبر مع الأطفال في بيئة تفاعلية مميزة.', name: 'سارة العبدالله', role: 'ولي أمر' },
            { text: 'أفضل قرار اتخذناه لأطفالنا؛ الجمع بين جودة التعليم الرقمي والتربية القيمية الصادقة.', name: 'خالد يوسف', role: 'ولي أمر' },
            { text: 'المنصة ممتازة وسهلة الاستخدام، وحصص القرآن المباشرة مع المشايخ كان لها أثر طيب في بيتنا.', name: 'أم عبد الرحمن', role: 'ولي أمر' }
        ];
    }, [rawTestimonials]);

    const displayTestimonials = useMemo(() => {
        if (Array.isArray(customTestimonials) && customTestimonials.length > 0) {
            return customTestimonials.map(item => ({
                id: item.id || item._id,
                text: item.review || item.text || item.comment || '',
                name: item.parentName || item.name || '',
                image: item.image || item.avatar || '',
                role: item.role || 'ولي أمر'
            }));
        }
        return fallbackTestimonials;
    }, [customTestimonials, fallbackTestimonials]);

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
    }, [checkScrollState, displayTestimonials.length]);

    const scroll = useCallback((direction) => {
        const el = sliderRef.current;
        if (!el) return;
        const card = el.querySelector('div.group');
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

    if (displayTestimonials.length === 0) {
        return null;
    }

    return (
        <section className="relative overflow-hidden bg-[#EEF5F3] dark:bg-slate-900/50 py-20 sm:py-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-14 gap-6"
                >
                    <div className="text-start">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1B1B] dark:text-white">
                            {t('testimonials.title', 'ماذا يقول أولياء الأمور؟')}
                        </h2>
                        <div className="mt-4 h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37]" />
                        <p className="mt-5 text-[#6B7280] dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                            {t('testimonials.subtitle', 'آراء حقيقية من عائلات انضمت إلى رحلتنا التعليمية')}
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
                        {displayTestimonials.map((item, index) => (
                            <TestimonialCard key={item.id || index} item={item} index={index} />
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 pt-2">
                        <div className="flex-1 h-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#0F7A6C] to-[#D4AF37] rounded-full transition-all duration-300"
                                style={{ width: `${Math.max(scrollProgress, 20)}%` }}
                            />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 shrink-0">
                            {displayTestimonials.length} {t('testimonials.countLabel', isRtl ? 'آراء' : 'reviews')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
});