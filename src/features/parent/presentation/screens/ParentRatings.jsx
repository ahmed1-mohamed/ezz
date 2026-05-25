import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, ChevronDown, Calendar, User, GraduationCap } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function ParentRatings() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('all');
    const [ratingsData, setRatingsData] = useState(null);

    useEffect(() => {
        const fetchRatings = async () => {
            setIsLoading(true);
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock API response
                setRatingsData({
                    stats: {
                        average: 90,
                        count: 5,
                        excellent: 3
                    },
                    evaluations: [
                        {
                            id: 1,
                            subject: 'حفظ سورة البقرة',
                            student: 'فاطمة أحمد',
                            teacher: 'الشيخ أحمد منصور',
                            date: '2026-04-08',
                            notes: 'أداء ممتاز في الحفظ والتلاوة. استمري على هذا المستوى المتميز.',
                            score: 95,
                            label: 'ممتاز',
                            color: 'text-emerald-500'
                        },
                        {
                            id: 2,
                            subject: 'حفظ سورة آل عمران',
                            student: 'علي محمد',
                            teacher: 'الشيخ محمد علي',
                            date: '2026-04-15',
                            notes: 'تقدم ملحوظ في الحفظ. يحتاج إلى تحسين في التجويد.',
                            score: 88,
                            label: 'جيد جداً',
                            color: 'text-emerald-500'
                        },
                        {
                            id: 3,
                            subject: 'حفظ سورة الكهف',
                            student: 'سارة عادل',
                            teacher: 'الشيخ يوسف عبد الله',
                            date: '2026-04-22',
                            notes: 'تحسن كبير في النطق. واصل العمل.',
                            score: 90,
                            label: 'ممتاز',
                            color: 'text-emerald-500'
                        },
                        {
                            id: 4,
                            subject: 'حفظ سورة يس',
                            student: 'محمد رشاد',
                            teacher: 'الشيخ سعيد حسني',
                            date: '2026-04-29',
                            notes: 'يحتاج إلى المزيد من الجهد في الحفظ. لكن لديه إمكانيات عالية.',
                            score: 85,
                            label: 'جيد',
                            color: 'text-amber-500'
                        }
                    ]
                });
            } catch (error) {
                console.error("Failed to fetch ratings", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRatings();
    }, [selectedStudent]);

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
            whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 font-sans bg-transparent min-h-screen relative"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800">{t('parent.ratings.title')}</h1>
                    <p className="text-sm text-slate-500 mt-1">{t('parent.ratings.subtitle')}</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 font-medium text-center md:text-start w-full">{t('parent.schedule.selectStudent')}</label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-400 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-medium"
                        >
                            <option value="all">فاطمة أحمد</option>
                            <option value="c2">علي محمد</option>
                            <option value="c3">سارة عادل</option>
                        </select>
                        <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {isLoading ? (
                <div className="absolute inset-0 flex justify-center items-center bg-white/50 z-10 rounded-2xl mt-32 min-h-[500px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : ratingsData ? (
                <>
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <Star className="w-6 h-6 text-amber-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">{t('parent.ratings.average')}</span>
                            <span className="text-3xl font-bold text-emerald-600">{ratingsData.stats.average}</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <BookOpen className="w-6 h-6 text-sky-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">{t('parent.ratings.count')}</span>
                            <span className="text-3xl font-bold text-sky-600">{ratingsData.stats.count}</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <Star className="w-6 h-6 text-emerald-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">{t('parent.ratings.excellent')}</span>
                            <span className="text-3xl font-bold text-emerald-500">{ratingsData.stats.excellent}</span>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {ratingsData.evaluations.map((evaluation) => (
                            <motion.div
                                variants={itemVariants}
                                key={evaluation.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
                            >
                                <div className="flex-1 w-full">
                                    <h3 className="text-lg font-bold text-slate-800 mb-4">{evaluation.subject}</h3>

                                    <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-slate-500 font-medium mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-4 h-4" />
                                            <span>{t('parent.ratings.student')}: {evaluation.student}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{t('parent.ratings.teacher')}: {evaluation.teacher}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            <span>{evaluation.date}</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                        <span className="text-xs font-bold text-slate-800 block mb-1">{t('parent.reports.teacherNotes')}:</span>
                                        <p className="text-sm text-slate-600 font-medium">{evaluation.notes}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center min-w-[100px] shrink-0 border-t md:border-t-0 md:border-e border-slate-100 pt-4 md:pt-0">
                                    <span className={`text-4xl font-bold ${evaluation.color}`}>{evaluation.score}</span>
                                    <span className={`text-xs font-bold mt-1 ${evaluation.color}`}>{evaluation.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            ) : null}
        </motion.div>
    );
}
