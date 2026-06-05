import React, { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, BookOpen, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import imageSrc from '../../images/programs/6.jpg'

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

const TeacherCard = React.memo(({ teacher, t, index }) => {
    const navigate = useNavigate();
    return (
    <motion.article
        layout="position"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        style={{ willChange: 'transform, opacity' }}
        className="group w-full max-w-[320px] mx-auto overflow-hidden rounded-[28px] bg-[#F5F5F2] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
        <div className="relative overflow-hidden rounded-[28px] p-3 pb-0">
            <img
                src={teacher.image}
                alt={teacher.name}
                className="aspect-[4/5] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
            />
        </div>

        <div className="space-y-5 p-6 text-start">
            <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                    <h3 className="text-2xl lg:text-[28px] font-extrabold leading-tight text-[#00695C] line-clamp-1">
                        {teacher.name}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-[#8B6B15] line-clamp-1">
                        {teacher.title}
                    </p>
                </div>

                <div className="flex items-center gap-1 text-[#9B7B16] shrink-0 mt-1">
                    <Star className="h-4 w-4 fill-[#9B7B16] text-[#9B7B16]" />
                    <span className="text-sm font-semibold">{teacher.rating}</span>
                </div>
            </div>

            <div className="flex flex-wrap justify-start gap-2">
                <span className="rounded-full bg-[#E7E7E4] px-4 py-2 text-sm text-[#7B7B7B]">
                    {teacher.experience}
                </span>
                <span className="rounded-full bg-[#E7E7E4] px-4 py-2 text-sm text-[#7B7B7B]">
                    {teacher.subject}
                </span>
                {teacher.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-[#E7E7E4] px-4 py-2 text-sm text-[#7B7B7B]">
                        {tag}
                    </span>
                ))}
            </div>

            <button 
                onClick={() => navigate(`/teachers/${teacher.id}`)}
                className="w-full rounded-2xl bg-[#00695C] py-4 text-[18px] font-bold text-white transition-all duration-300 ease-out hover:bg-[#005247] hover:shadow-lg active:scale-95 hover:-translate-y-1"
            >
                {t('teacher.viewProfile', 'عرض الملف الشخصي')}
            </button>
        </div>
    </motion.article>
    )
});

export default function Teachers() {
    const { t, i18n } = useTranslation()

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')
    const [selectedLevel, setSelectedLevel] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    const teachersData = useMemo(() => Array.from({ length: 24 }).map((_, i) => ({
        id: i + 1,
        name: i % 3 === 0 ? t('teacher.names.1', "د. أحمد المنصوري") : i % 3 === 1 ? t('teacher.names.2', "د. خالد الشامسي") : t('teacher.names.3', "د. يوسف الحربي"),
        title: t('teacher.jobTitle', "مجاز بالقراءات العشر"),
        subject: i % 2 === 0 ? t('teacher.subject1', "القرآن الكريم") : t('teacher.subject2', "اللغة العربية"),
        level: i % 3 === 0 ? t('teacher.level1', "مبتدئ") : i % 3 === 1 ? t('teacher.level2', "متوسط") : t('teacher.level3', "متقدم"),
        image: `https://images.unsplash.com/photo-${portraitImages[i % portraitImages.length]}?q=80&w=400&h=400&auto=format&fit=crop`,
        rating: (((i * 7) % 10) / 10 + 4).toFixed(1),
        experience: `${((i * 3) % 10) + 5} ${t('teacher.yearsExperience', 'سنوات خبرة')}`,
        tags: [t('teacher.tag1', "التجويد"), i % 2 === 0 ? t('teacher.tag2', "تحفيظ") : t('teacher.tag3', "نحو"), t('teacher.tag4', "أونلاين")]
    })), [t])

    const subjects = useMemo(() => [...new Set(teachersData.map(t => t.subject))], [teachersData])
    const levels = useMemo(() => [...new Set(teachersData.map(t => t.level))], [teachersData])


    const filteredTeachers = useMemo(() => {
        return teachersData.filter(teacher => {
            const matchName = teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
            const matchSubject = selectedSubject ? teacher.subject === selectedSubject : true
            const matchLevel = selectedLevel ? teacher.level === selectedLevel : true
            return matchName && matchSubject && matchLevel
        })
    }, [searchTerm, selectedSubject, selectedLevel, teachersData])

    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm, selectedSubject, selectedLevel, teachersData])

    const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage)
    const paginatedTeachers = filteredTeachers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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
                                    {t('teacher.titleLine1', 'نخبة من')}
                                </h1>
                                <h1 className="text-[#735C00] text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.3] pb-2">
                                    {t('teacher.titleLine2', 'أفضل المعلمين المجازين')}
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
                                    <img src={imageSrc} alt="Teachers" className="w-full h-64 sm:h-72 lg:h-[320px] object-cover" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="bg-white/95 backdrop-blur-md rounded-[32px] p-6 md:p-8 shadow-md border border-slate-100 w-full mx-auto transition-all duration-300">
                    <div className="flex flex-col md:flex-row items-end gap-5">
                        <div className="flex-1 w-full space-y-2 text-start">
                            <label className="block text-sm font-bold text-[#00695C] mx-1">{t('teacher.searchLabel', 'ابحث عن معلم')}</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={t('teacher.searchPlaceholder', 'الاسم...')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl focus:ring-[#00695C] focus:border-[#00695C] block ps-12 p-4 transition-colors relative z-50 shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-64 space-y-2 text-start">
                            <label className="block text-sm font-bold text-[#00695C] mx-1">{t('teacher.subjectLabel', 'المادة')}</label>
                            <div className="relative">
                                <select
                                    value={selectedSubject}
                                    onChange={(e) => setSelectedSubject(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl focus:ring-[#00695C] focus:border-[#00695C] block p-4 appearance-none cursor-pointer pe-10 relative z-50 shadow-sm"
                                >
                                    <option value="">{t('teacher.allSubjects', 'جميع المواد')}</option>
                                    {subjects.map(subj => <option key={subj} value={subj}>{subj}</option>)}
                                </select>
                                <BookOpen className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="w-full md:w-64 space-y-2 text-start">
                            <label className="block text-sm font-bold text-[#00695C] mx-1">{t('teacher.levelLabel', 'المستوى')}</label>
                            <div className="relative">
                                <select
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-2xl focus:ring-[#00695C] focus:border-[#00695C] block p-4 appearance-none cursor-pointer pe-10 relative z-50 shadow-sm"
                                >
                                    <option value="">{t('teacher.allLevels', 'جميع المستويات')}</option>
                                    {levels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                                </select>
                                <Award className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setSearchTerm('')
                                setSelectedSubject('')
                                setSelectedLevel('')
                            }}
                            className="w-full bg-[#735C00] md:w-56 hover:bg-[#5c4a00] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 ease-out flex items-center justify-center gap-2 shadow-md hover:shadow-lg h-[58px] text-lg active:scale-95 hover:-translate-y-1"
                        >
                            {t('teacher.clearFilter', 'مسح التصفية')}
                            <Filter className="h-5 w-5" />

                        </button>
                    </div>
                </section>

                <section>
                    {paginatedTeachers.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-8">
                            <AnimatePresence mode="popLayout">
                                {paginatedTeachers.map((teacher, idx) => (
                                    <TeacherCard key={teacher.id} teacher={teacher} t={t} index={idx} />
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm">
                            <p className="text-[#00695C] font-bold text-xl">{t('teacher.noResults', 'لا يوجد معلمين يطابقون بحثك.')}</p>
                        </div>
                    )}
                </section>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-8">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95 hover:-translate-y-[1px] hover:shadow-sm"
                            aria-label={t('teacher.previous', 'السابق')}
                        >
                            <ArrowPrev className="w-5 h-5" />
                        </button>

                        <div className="flex gap-1">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-xl font-medium text-sm transition-all duration-300 active:scale-95 hover:-translate-y-[1px] hover:shadow-sm ${currentPage === i + 1
                                        ? 'bg-[#00695C] text-white shadow-md'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95 hover:-translate-y-[1px] hover:shadow-sm"
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