import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, BookOpen, Award, ChevronLeft, ChevronRight, RefreshCw, AlertCircle } from 'lucide-react'
import imageSrc from '../../images/programs/6.webp'
import { teachersApi } from '../../shared/services/api/teachersApi'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const portraitImages = [
    "1500648767791-00dcc994a43e",
    "1506794778202-cad84cf45f1d",
    "1504257432389-52343af06ae3",
    "1504593811423-6dd665756598",
    "1535713875002-d1d0cf377fde",
    "1560250097-0b93528c311a",
    "1507003211169-0a1dd7228f2d",
    "1519085360753-af0119f7cbe7",
    "1552058544-e397bfc48364",
    "1556157382-97eda2d62296",
    "1501196354995-cbb51c65aaea",
    "1527980965255-d3b416303d12"
];

const TeacherSkeleton = () => (
    <div className="w-full max-w-[320px] mx-auto overflow-hidden rounded-[28px] bg-[#F5F5F2] shadow-sm p-4 animate-pulse space-y-4">
        <div className="aspect-[4/5] w-full rounded-[24px] bg-slate-200" />
        <div className="space-y-2 p-2">
            <div className="h-6 bg-slate-300 rounded-full w-3/4" />
            <div className="h-4 bg-slate-200 rounded-full w-1/2" />
            <div className="flex gap-2 pt-2">
                <div className="h-6 w-20 bg-slate-200 rounded-full" />
                <div className="h-6 w-24 bg-slate-200 rounded-full" />
            </div>
            <div className="h-11 bg-slate-300 rounded-2xl w-full mt-4" />
        </div>
    </div>
);

const TeacherCard = React.memo(({ teacher, t, index }) => {
    const navigate = useNavigate();
    const fallbackImage = `https://images.unsplash.com/photo-${portraitImages[index % portraitImages.length]}?q=80&w=400&h=400&auto=format&fit=crop`;
    const [imgSrc, setImgSrc] = useState(teacher.image || fallbackImage);

    useEffect(() => {
        setImgSrc(teacher.image || fallbackImage);
    }, [teacher.image, fallbackImage]);

    const teacherId = teacher.teacher_id || teacher.id || teacher.user_id;

    const handleProfileNavigation = () => {
        if (teacherId) {
            navigate(`/teachers/${teacherId}`);
        }
    };

    const ratingDisplay = teacher.rating && Number(teacher.rating) > 0
        ? Number(teacher.rating).toFixed(1)
        : '5.0';

    const tags = useMemo(() => {
        const list = [];
        if (Array.isArray(teacher.specializations)) {
            teacher.specializations.forEach(s => {
                const name = typeof s === 'object' ? s.name : s;
                if (name && name !== teacher.subject && !list.includes(name)) {
                    list.push(name);
                }
            });
        }
        if (teacher.country && !list.includes(teacher.country)) {
            list.push(teacher.country);
        }
        return list.slice(0, 2);
    }, [teacher]);

    return (
        <motion.article
            layout="position"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{ willChange: 'transform, opacity' }}
            className="group w-full max-w-[320px] mx-auto overflow-hidden rounded-[28px] bg-[#F5F5F2] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
        >
            <div
                onClick={handleProfileNavigation}
                className="relative overflow-hidden rounded-[28px] p-3 pb-0 cursor-pointer"
            >
                <img
                    src={imgSrc}
                    onError={() => setImgSrc(fallbackImage)}
                    alt={teacher.name}
                    width="320"
                    height="400"
                    className="aspect-[4/5] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="space-y-5 p-6 text-start flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-col flex-1 min-w-0">
                            <h3
                                onClick={handleProfileNavigation}
                                className="text-xl lg:text-[22px] font-extrabold leading-tight text-[#00695C] truncate cursor-pointer hover:underline"
                                title={teacher.name}
                            >
                                {teacher.name}
                            </h3>
                            <p className="mt-1.5 text-sm font-semibold text-[#8B6B15] line-clamp-1" title={teacher.degree || teacher.title}>
                                {teacher.degree || teacher.title || t('teacher.jobTitle', 'معلم معتمد')}
                            </p>
                        </div>

                        <div className="flex items-center gap-1 text-[#9B7B16] shrink-0 mt-0.5 bg-[#F9F5E8] px-2.5 py-1 rounded-full border border-[#9B7B16]/20">
                            <Star className="h-3.5 w-3.5 fill-[#9B7B16] text-[#9B7B16]" />
                            <span className="text-xs font-bold">{ratingDisplay}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-start gap-1.5 pt-1">
                        {teacher.yearsOfExperience !== undefined && (
                            <span className="rounded-full bg-[#E7E7E4] px-3 py-1 text-xs font-semibold text-[#555]">
                                {teacher.yearsOfExperience} {t('teacher.yearsExperience', 'سنوات خبرة')}
                            </span>
                        )}
                        {teacher.subject && (
                            <span className="rounded-full bg-[#00695C]/10 px-3 py-1 text-xs font-bold text-[#00695C]">
                                {teacher.subject}
                            </span>
                        )}
                        {tags.map((tag, i) => (
                            <span key={i} className="rounded-full bg-[#E7E7E4] px-3 py-1 text-xs font-semibold text-[#7B7B7B]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleProfileNavigation}
                    className="w-full rounded-2xl bg-[#00695C] py-3.5 text-[16px] font-bold text-white transition-all duration-300 ease-out hover:bg-[#005247] hover:shadow-lg active:scale-95 hover:-translate-y-0.5"
                >
                    {t('teacher.viewProfile', 'عرض الملف الشخصي')}
                </button>
            </div>
        </motion.article>
    );
});

export default function Teachers() {
    const { t, i18n } = useTranslation()
    const gridRef = useRef(null)

    const [searchInput, setSearchInput] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const {
        data: response,
        isLoading,
        isError,
        refetch
    } = useQuery({
        queryKey: ['publicTeachers', currentPage, itemsPerPage, searchTerm],
        queryFn: () => teachersApi.fetchPublicTeachers({
            page: currentPage,
            limit: itemsPerPage,
            search: searchTerm
        }),
        placeholderData: (previousData) => previousData,
    })

    const rawTeachers = useMemo(() => {
        return Array.isArray(response?.data) ? response.data : []
    }, [response?.data])

    const availableSubjects = useMemo(() => {
        const set = new Set()
        rawTeachers.forEach((teacher) => {
            if (Array.isArray(teacher.specializations)) {
                teacher.specializations.forEach((s) => {
                    const name = typeof s === 'object' ? s.name : s
                    if (name && typeof name === 'string' && name.trim()) set.add(name.trim())
                })
            }
            if (teacher.subject && typeof teacher.subject === 'string' && teacher.subject.trim()) {
                set.add(teacher.subject.trim())
            }
        })
        return Array.from(set)
    }, [rawTeachers])

    const availableCountries = useMemo(() => {
        const set = new Set()
        rawTeachers.forEach((teacher) => {
            if (teacher.country && typeof teacher.country === 'string' && teacher.country.trim()) {
                set.add(teacher.country.trim())
            }
        })
        return Array.from(set)
    }, [rawTeachers])

    const filteredTeachers = useMemo(() => {
        return rawTeachers.filter((teacher) => {
            if (selectedSubject) {
                const hasSpec = Array.isArray(teacher.specializations) &&
                    teacher.specializations.some((s) => {
                        const name = typeof s === 'object' ? s.name : s
                        return name === selectedSubject
                    })
                const matchesSubject = teacher.subject === selectedSubject
                if (!hasSpec && !matchesSubject) return false
            }

            if (selectedCountry && teacher.country !== selectedCountry) {
                return false
            }

            return true
        })
    }, [rawTeachers, selectedSubject, selectedCountry])

    const totalPages = Math.max(1, Number(response?.pagination?.numberOfPages || 1))

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault()
        setSearchTerm(searchInput.trim())
        setCurrentPage(1)
    }

    const handleResetFilters = () => {
        setSearchInput('')
        setSearchTerm('')
        setSelectedSubject('')
        setSelectedCountry('')
        setCurrentPage(1)
    }

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
            setCurrentPage(newPage)
            if (gridRef.current) {
                gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    const isRtl = i18n.language === 'ar'
    const ArrowNext = isRtl ? ChevronLeft : ChevronRight
    const ArrowPrev = isRtl ? ChevronRight : ChevronLeft

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto space-y-16">
                <section className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 bg-white p-6 sm:p-12 lg:p-16 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-start">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="order-2 lg:order-1 max-w-3xl space-y-8 flex-1 flex flex-col items-center text-center lg:items-start lg:text-start"
                        >
                            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] px-4 py-2 text-sm font-bold text-white shadow-sm">
                                {t('teacher.badge', 'معلمونا')}
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-4">
                                <h1 className="bg-gradient-to-r from-[#00695C] to-[#004D40] bg-clip-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.3] text-transparent pb-2">
                                    <span className="block">{t('teacher.titleLine1', 'نخبة من')}</span>
                                    <span className="block text-[#735C00] text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.3] pt-2">
                                        {t('teacher.titleLine2', 'أفضل المعلمين المجازين')}
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                                    {t('teacher.titleLine3', 'تعلم على أيدي نخبة من المعلمين المعتمدين، ذوي الخبرة الطويلة في تحفيظ القرآن الكريم وتدريس علومه واللغة العربية.')}
                                </p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: isRtl ? 40 : -40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="order-1 lg:order-2 flex justify-center flex-1"
                        >
                            <div className="relative w-full max-w-lg">
                                <div className="absolute z-0 inset-0 -m-8 rounded-full bg-brand-100/50 blur-3xl mix-blend-multiply" />
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl"
                                >
                                    <img src={imageSrc} alt="Teachers" width="512" height="320" className="w-full h-64 sm:h-72 lg:h-[320px] object-cover" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="bg-white/95 backdrop-blur-md rounded-[32px] p-6 md:p-8 shadow-md border border-slate-100 w-full mx-auto transition-all duration-300">
                    <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-end gap-5">
                        <div className="flex-1 w-full space-y-2 text-start">
                            <label htmlFor="teacher-search" className="block text-sm font-bold text-[#00695C] mx-1">
                                {t('teacher.searchLabel', 'ابحث عن معلم')}
                            </label>
                            <div className="relative flex items-center">
                                <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="teacher-search"
                                    type="text"
                                    placeholder={t('teacher.searchPlaceholder', 'الاسم، التخصص، المؤهل...')}
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl focus:ring-[#00695C] focus:border-[#00695C] block ps-12 pe-24 p-4 transition-colors shadow-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute end-2 bg-[#00695C] hover:bg-[#005247] text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
                                >
                                    {t('common.search', 'بحث')}
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-64 space-y-2 text-start">
                            <label htmlFor="subject-select" className="block text-sm font-bold text-[#00695C] mx-1">
                                {t('teacher.subjectLabel', 'التخصص / المادة')}
                            </label>
                            <div className="relative">
                                <select
                                    id="subject-select"
                                    value={selectedSubject}
                                    onChange={(e) => {
                                        setSelectedSubject(e.target.value)
                                        setCurrentPage(1)
                                    }}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl focus:ring-[#00695C] focus:border-[#00695C] block p-4 appearance-none cursor-pointer pe-10 shadow-sm"
                                >
                                    <option value="">{t('teacher.allSubjects', 'جميع التخصصات')}</option>
                                    {availableSubjects.map((subj) => (
                                        <option key={subj} value={subj}>{subj}</option>
                                    ))}
                                </select>
                                <BookOpen className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="w-full md:w-64 space-y-2 text-start">
                            <label htmlFor="country-select" className="block text-sm font-bold text-[#00695C] mx-1">
                                {t('teacher.countryLabel', 'الدولة')}
                            </label>
                            <div className="relative">
                                <select
                                    id="country-select"
                                    value={selectedCountry}
                                    onChange={(e) => {
                                        setSelectedCountry(e.target.value)
                                        setCurrentPage(1)
                                    }}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl focus:ring-[#00695C] focus:border-[#00695C] block p-4 appearance-none cursor-pointer pe-10 shadow-sm"
                                >
                                    <option value="">{t('teacher.allCountries', 'جميع الدول')}</option>
                                    {availableCountries.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                <Award className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleResetFilters}
                            className="w-full bg-[#735C00] md:w-48 hover:bg-[#5c4a00] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 ease-out flex items-center justify-center gap-2 shadow-md hover:shadow-lg h-[58px] text-base active:scale-95"
                        >
                            {t('teacher.clearFilter', 'مسح التصفية')}
                            <Filter className="h-5 w-5" />
                        </button>
                    </form>
                </section>

                <section ref={gridRef}>
                    {isError ? (
                        <div className="text-center py-16 bg-white rounded-[32px] border border-red-100 shadow-sm p-8 space-y-4">
                            <div className="inline-flex p-3 rounded-full bg-red-50 text-red-600">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <p className="text-red-600 font-bold text-lg">
                                {t('common.errorLoading', 'حدث خطأ أثناء تحميل بيانات المعلمين')}
                            </p>
                            <button
                                onClick={() => refetch()}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00695C] text-white font-bold rounded-xl hover:bg-[#005247] transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                <span>{t('common.retry', 'إعادة المحاولة')}</span>
                            </button>
                        </div>
                    ) : isLoading && filteredTeachers.length === 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-8">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <TeacherSkeleton key={idx} />
                            ))}
                        </div>
                    ) : filteredTeachers.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-8">
                            <AnimatePresence mode="popLayout">
                                {filteredTeachers.map((teacher, idx) => (
                                    <TeacherCard
                                        key={teacher.teacher_id || teacher.id || idx}
                                        teacher={teacher}
                                        t={t}
                                        index={idx}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm space-y-4">
                            <p className="text-[#00695C] font-bold text-xl">
                                {t('teacher.noResults', 'لا يوجد معلمين يطابقون بحثك.')}
                            </p>
                            {(searchTerm || selectedSubject || selectedCountry) && (
                                <button
                                    onClick={handleResetFilters}
                                    className="text-sm font-bold text-[#8B6B15] underline hover:text-[#5c4a00]"
                                >
                                    {t('teacher.clearFilter', 'مسح التصفية')}
                                </button>
                            )}
                        </div>
                    )}
                </section>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-8">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center active:scale-95 shadow-sm"
                            aria-label={t('teacher.previous', 'السابق')}
                        >
                            <ArrowPrev className="w-5 h-5" />
                        </button>

                        <div className="flex gap-1">
                            {Array.from({ length: totalPages }).map((_, i) => {
                                const pageNum = i + 1
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 hover:shadow-sm ${
                                            currentPage === pageNum
                                                ? 'bg-[#00695C] text-white shadow-md'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                )
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center active:scale-95 shadow-sm"
                            aria-label={t('teacher.next', 'التالي')}
                        >
                            <ArrowNext className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}