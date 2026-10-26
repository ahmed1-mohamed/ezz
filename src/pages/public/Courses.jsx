import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import api from '@/shared/services/api/axiosConfig';

const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
        return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `https://manaret-ezz.dramcode.top/${cleanPath}`;
};

export default React.memo(function Courses() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language?.startsWith('ar') ?? true;

    const {
        data: curriculaData,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ['public-courses-curricula', i18n.language],
        queryFn: async () => {
            const res = await api.get('/api/v1/curricula/public');
            const items = res.data?.data || res.data || [];
            return Array.isArray(items) ? items.map((item) => item.data || item) : [];
        },
        staleTime: 5 * 60 * 1000,
    });

    const coursesList = useMemo(() => {
        if (!Array.isArray(curriculaData)) return [];
        return curriculaData.map((prog, index) => {
            const title = typeof prog.name === 'object' && prog.name !== null
                ? (isRtl ? prog.name.ar || prog.name.en : prog.name.en || prog.name.ar)
                : prog.name || '';
            const desc = typeof prog.description === 'object' && prog.description !== null
                ? (isRtl ? prog.description.ar || prog.description.en : prog.description.en || prog.description.ar)
                : prog.description || '';
            const imgSrc = prog.image ? getImageUrl(prog.image) : '';
            const levelsCount = Array.isArray(prog.levels) ? prog.levels.length : 0;

            return {
                id: prog.id || prog._id || index,
                title,
                desc,
                levelsCount,
                image: imgSrc,
            };
        });
    }, [curriculaData, isRtl]);

    const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 min-h-screen pt-12 sm:pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-10 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 text-center sm:text-start"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400 text-xs sm:text-sm font-bold border border-emerald-200/60 dark:border-emerald-800/60 mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>{t('public.nav.courses', 'المناهج والبرامج')}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {t('publicCourses.title', 'البرامج والمناهج التعليمية')}
                </h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300 font-medium max-w-3xl">
                    {t('publicCourses.description', 'اكتشف مناهجنا القرآنية واللغوية والتربوية المعتمدة المصممة لجميع المستويات والأعمار')}
                </p>
            </motion.section>

            {isLoading ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-64 rounded-3xl bg-slate-100 dark:bg-slate-800/60 animate-pulse border border-slate-200/50 dark:border-slate-800" />
                    ))}
                </div>
            ) : isError ? (
                <div className="rounded-3xl border border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-900/40 p-8 text-center space-y-3">
                    <p className="text-red-600 dark:text-red-400 font-bold">
                        {t('common.errorLoading', 'حدث خطأ أثناء تحميل البرامج')}
                    </p>
                    <button
                        onClick={() => refetch()}
                        className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
                    >
                        {t('common.retry', 'إعادة المحاولة')}
                    </button>
                </div>
            ) : coursesList.length === 0 ? (
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 dark:border-slate-800 dark:bg-slate-900/90 p-12 text-center space-y-3">
                    <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
                    <p className="text-slate-500 dark:text-slate-400 font-semibold text-lg">
                        {t('publicCourses.noCoursesFound', 'لا توجد مناهج معروضة حالياً')}
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {coursesList.map((course, idx) => (
                        <motion.article
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="group rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div>
                                {course.image ? (
                                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00695C] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center mb-5 font-black text-xl shadow-xs">
                                        <BookOpen className="w-7 h-7" />
                                    </div>
                                )}

                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    {course.levelsCount > 0 && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#E0F2F1] text-[#00796B] dark:bg-[#004D40]/30 dark:text-[#4DB6AC]">
                                            <Layers className="w-3.5 h-3.5" />
                                            <span>{t('publicCourses.levelsCount', { count: course.levelsCount })}</span>
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#00695C] dark:group-hover:text-emerald-400 transition-colors">
                                    {course.title}
                                </h2>

                                <p className="mt-3 text-sm sm:text-base leading-6 text-slate-600 dark:text-slate-300 font-medium line-clamp-3">
                                    {course.desc}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                                <Link
                                    to="/curriculums"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00695C] dark:text-emerald-400 hover:underline cursor-pointer"
                                >
                                    <span>{t('publicCourses.learnMore', 'تفاصيل البرنامج')}</span>
                                    <ArrowIcon className="w-4 h-4" />
                                </Link>

                                <Link
                                    to="/pricing"
                                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                                >
                                    {t('publicCourses.enrollNow', 'سجل الآن')}
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-[#00695C]/20 bg-[#F4FAF8] p-6 sm:p-10 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 mb-12 shadow-sm"
            >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00695C] dark:text-emerald-400">
                            {t('publicCourses.ctaTitle', 'هل ترغب في استشارة تربوية لاختيار المنهج المناسب؟')}
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl">
                            {t('publicCourses.ctaText', 'فريقنا المتخصص مستعد لمساعدتك في تحديد المستوى الأنسب لطفلك')}
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-md whitespace-nowrap cursor-pointer text-center"
                    >
                        {t('publicCourses.ctaButton', 'تواصل مع مستشار تعليمي')}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
});