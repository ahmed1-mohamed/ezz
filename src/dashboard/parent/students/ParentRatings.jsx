import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, ChevronDown, Calendar, User, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ParentRatings() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [studentsList, setStudentsList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('all');
    const [ratingsData, setRatingsData] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const loadStudents = async () => {
            try {
                const res = await parentApi.fetchChildren();
                if (isMounted && res?.success && Array.isArray(res.data)) {
                    setStudentsList(res.data);
                }
            } catch (err) {
                console.error("Failed to load students for ratings", err);
            }
        };
        loadStudents();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        let isMounted = true;
        const fetchRatings = async () => {
            setIsLoading(true);
            try {
                const params = selectedStudent !== 'all' ? { studentId: selectedStudent } : {};
                const res = await parentApi.fetchPastRatings(params);

                if (isMounted) {
                    const rawList = res?.success && Array.isArray(res.data) ? res.data : [];
                    const evaluations = rawList.map((item, idx) => {
                        const id = item.id || item._id || idx;
                        const subject = item.subject || item.className || t('parent.ratings.defaultSubject', 'القرآن الكريم');
                        const student = item.studentName || item.student || '-';
                        const teacher = item.teacherName || item.teacher || '-';
                        const date = item.date || item.createdAt?.slice(0, 10) || '-';
                        const notes = item.notes || item.comment || '-';
                        const score = Number(item.score || item.rating || 90);
                        const isExcellent = score >= 90;
                        const label = isExcellent ? t('parent.ratings.labelExcellent', 'ممتاز') : score >= 80 ? t('parent.ratings.labelVeryGood', 'جيد جداً') : t('parent.ratings.labelGood', 'جيد');
                        const color = score >= 80 ? 'text-emerald-500' : 'text-amber-500';

                        return {
                            id,
                            subject,
                            student,
                            teacher,
                            date,
                            notes,
                            score,
                            label,
                            color
                        };
                    });

                    const totalScores = evaluations.reduce((acc, e) => acc + e.score, 0);
                    const avg = evaluations.length > 0 ? Math.round(totalScores / evaluations.length) : 0;
                    const excellentCount = evaluations.filter(e => e.score >= 90).length;

                    setRatingsData({
                        stats: {
                            average: avg,
                            count: evaluations.length,
                            excellent: excellentCount
                        },
                        evaluations
                    });
                }
            } catch (error) {
                console.error("Failed to fetch ratings", error);
                if (isMounted) {
                    setRatingsData({
                        stats: { average: 0, count: 0, excellent: 0 },
                        evaluations: []
                    });
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchRatings();
        return () => { isMounted = false; };
    }, [selectedStudent, i18n.language, t]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen relative"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.ratings.title', 'تقييمات الطلاب')}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.ratings.subtitle', 'سجل تقييمات وملاحظات المعلمين للأبناء')}</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center md:text-start w-full">{t('parent.schedule.selectStudent', 'اختر الابن')}</label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                        >
                            <option value="all">{t('parent.ratings.allStudents', 'جميع الأبناء')}</option>
                            {studentsList.map((s) => {
                                const id = s.id || s._id || s.student_id;
                                const name = typeof s.name === 'object' ? (isRtl ? s.name.ar : s.name.en) : s.name;
                                return <option key={id} value={id}>{name}</option>;
                            })}
                        </select>
                        <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center items-center py-24">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : ratingsData && ratingsData.evaluations.length > 0 ? (
                <>
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2">
                            <Star className="w-6 h-6 text-amber-500 mb-1" />
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('parent.ratings.average', 'المتوسط')}</span>
                            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{ratingsData.stats.average}</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2">
                            <BookOpen className="w-6 h-6 text-sky-500 mb-1" />
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('parent.ratings.count', 'عدد التقييمات')}</span>
                            <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">{ratingsData.stats.count}</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2">
                            <Star className="w-6 h-6 text-emerald-500 mb-1" />
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('parent.ratings.excellent', 'تقييم ممتاز')}</span>
                            <span className="text-3xl font-bold text-emerald-500">{ratingsData.stats.excellent}</span>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {ratingsData.evaluations.map((evaluation) => (
                            <motion.div
                                variants={itemVariants}
                                key={evaluation.id}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
                            >
                                <div className="flex-1 w-full text-start">
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{evaluation.subject}</h3>

                                    <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-slate-500 dark:text-slate-400 font-medium mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-4 h-4 shrink-0" />
                                            <span>{t('parent.ratings.student', 'الطالب')}: {evaluation.student}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <GraduationCap className="w-4 h-4 shrink-0" />
                                            <span>{t('parent.ratings.teacher', 'المعلم')}: {evaluation.teacher}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 shrink-0" />
                                            <span>{evaluation.date}</span>
                                        </div>
                                    </div>

                                    {evaluation.notes && evaluation.notes !== '-' && (
                                        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1">{t('parent.reports.teacherNotes', 'ملاحظات المعلم')}:</span>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{evaluation.notes}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-center min-w-[100px] shrink-0 border-t md:border-t-0 md:border-s border-slate-100 dark:border-slate-700 pt-4 md:pt-0 md:ps-6">
                                    <span className={`text-4xl font-bold ${evaluation.color}`}>{evaluation.score}</span>
                                    <span className={`text-xs font-bold mt-1 ${evaluation.color}`}>{evaluation.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-100 dark:border-slate-700 shadow-sm">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {t('parent.ratings.empty', 'لا توجد تقييمات مسجلة حالياً.')}
                    </p>
                </div>
            )}
        </motion.div>
    );
}
