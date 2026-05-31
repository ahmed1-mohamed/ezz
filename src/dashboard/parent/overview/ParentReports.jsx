import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AcademicPerformance from '../components/ratings/AcademicPerformance';
import AssignmentsStats from '../components/ratings/AssignmentsStats';
import ClassesStats from '../components/ratings/ClassesStats';
import ProgressAchievements from '../components/ratings/ProgressAchievements';
import StrengthsWeaknesses from '../components/ratings/StrengthsWeaknesses';

import { useTranslation } from 'react-i18next';

export default function ParentReports() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('c1');
    const [reportData, setReportData] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 800));

                setReportData({
                    studentInfo: {
                        name: selectedStudent === 'c1' ? (isRtl ? 'فاطمة أحمد' : 'Fatima Ahmed') : selectedStudent === 'c2' ? (isRtl ? 'علي خالد' : 'Ali Khaled') : (isRtl ? 'سعاد عمر' : 'Soad Omar'),
                        joinDate: '2025-01-15',
                        currentPackage: t('parent.mockData.reports.package')
                    },
                    attendanceStats: {
                        total: 24,
                        attended: 23,
                        absent: 1,
                        rate: '96%',
                        currentMonth: { attended: 6, total: 6, rate: '100%' },
                        lastMonth: { attended: 5, total: 6, rate: '83%' }
                    },
                    evaluationStats: {
                        total: 18,
                        excellent: 12,
                        veryGood: 5,
                        good: 1,
                        lastEvaluation: {
                            subject: t('parent.mockData.reports.subjectBaqarah'),
                            teacher: t('parent.mockData.reports.teacherAhmed'),
                            score: 97,
                            date: '2026-04-08',
                            notes: t('parent.mockData.reports.notes')
                        }
                    },
                    academic: {
                        overallAverage: 92,
                        currentMonthAverage: 94,
                        lastMonthAverage: 90,
                        subjects: [
                            { name: t('parent.mockData.reports.subjectQuran'), average: 95, lastRating: 97, trend: 'up' },
                            { name: t('parent.mockData.reports.subjectQuran'), average: 95, lastRating: 97, trend: 'up' },
                            { name: t('parent.mockData.reports.subjectQuran'), average: 95, lastRating: 97, trend: 'down' }
                        ]
                    },
                    assignments: {
                        total: 45,
                        completed: 42,
                        pending: 3,
                        completionRate: '93%',
                        delivery: { onTime: 38, late: 4 },
                        currentMonth: { completed: 9, total: 9, rate: '100%' }
                    },
                    classes: { total: 24, used: 6, remaining: 18, thisMonth: 6 },
                    progress: {
                        currentMemorization: t('parent.mockData.reports.currentMem'),
                        nextGoal: t('parent.mockData.reports.nextGoal'),
                        achievements: t('parent.mockData.reports.achievements', { returnObjects: true })
                    },
                    strengthsWeaknesses: {
                        strengths: t('parent.mockData.reports.strengths', { returnObjects: true }),
                        weaknesses: t('parent.mockData.reports.weaknesses', { returnObjects: true })
                    }
                });
            } catch (error) {
                console.error("Failed to fetch report", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReport();
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
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen relative"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800">{t('parent.reports.title')}</h1>
                    <p className="text-sm text-slate-500 mt-1">{t('parent.reports.subtitle')}</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 font-medium text-center md:text-start w-full">{t('parent.schedule.selectStudent')}</label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                        >
                            <option value="c1">{isRtl ? 'فاطمة أحمد' : 'Fatima Ahmed'}</option>
                            <option value="c2">{isRtl ? 'علي خالد' : 'Ali Khaled'}</option>
                            <option value="c3">{isRtl ? 'سعاد عمر' : 'Soad Omar'}</option>
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
            ) : reportData ? (
                <>
                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800 mb-6 relative inline-block">
                            {t('parent.reports.studentInfo')}
                            <span className="absolute -bottom-2 start-0 w-1/2 h-1 bg-[#0f7a6c] rounded-full"></span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-start p-4 bg-slate-50 rounded-xl border border-slate-100 w-full">
                                <span className="text-xs text-slate-500 mb-1 font-medium">{t('parent.reports.name')}</span>
                                <span className="font-bold text-slate-800">{reportData.studentInfo.name}</span>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-slate-50 rounded-xl border border-slate-100 w-full">
                                <span className="text-xs text-slate-500 mb-1 font-medium">{t('parent.reports.joinDate')}</span>
                                <span className="font-bold text-slate-800">{reportData.studentInfo.joinDate}</span>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-slate-50 rounded-xl border border-slate-100 w-full">
                                <span className="text-xs text-slate-500 mb-1 font-medium">{t('parent.reports.currentPackage')}</span>
                                <span className="font-bold text-slate-800">{reportData.studentInfo.currentPackage}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800 mb-6 relative inline-block">
                            {t('parent.reports.attendance')}
                            <span className="absolute -bottom-2 start-0 w-1/2 h-1 bg-red-500 rounded-full"></span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="bg-sky-50 rounded-xl p-5 flex flex-col items-center justify-center border border-sky-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.totalClasses')}</span>
                                <span className="text-3xl font-bold text-sky-600">{reportData.attendanceStats.total}</span>
                            </div>
                            <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center justify-center border border-emerald-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.attended')}</span>
                                <span className="text-3xl font-bold text-emerald-500">{reportData.attendanceStats.attended}</span>
                            </div>
                            <div className="bg-red-50 rounded-xl p-5 flex flex-col items-center justify-center border border-red-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.absent')}</span>
                                <span className="text-3xl font-bold text-red-500">{reportData.attendanceStats.absent}</span>
                            </div>
                            <div className="bg-amber-50 rounded-xl p-5 flex flex-col items-center justify-center border border-amber-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.attendance.rate')}</span>
                                <span className="text-3xl font-bold text-amber-500">{reportData.attendanceStats.rate}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-2">{t('parent.reports.currentMonth')}</h3>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-slate-500">{t('parent.reports.attended')}</span>
                                            <span className="font-bold text-slate-700">{reportData.attendanceStats.currentMonth.attended} {t('parent.reports.from')} {reportData.attendanceStats.currentMonth.total}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-slate-500">{t('parent.reports.rate')}</span>
                                            <span className="font-bold text-emerald-500">{reportData.attendanceStats.currentMonth.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-2">{t('parent.reports.lastMonth')}</h3>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-slate-500">{t('parent.reports.attended')}</span>
                                            <span className="font-bold text-slate-700">{reportData.attendanceStats.lastMonth.attended} {t('parent.reports.from')} {reportData.attendanceStats.lastMonth.total}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-slate-500">{t('parent.reports.rate')}</span>
                                            <span className="font-bold text-emerald-500">{reportData.attendanceStats.lastMonth.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800 mb-6 relative inline-block">
                            {t('parent.reports.evaluations')}
                            <span className="absolute -bottom-2 start-0 w-1/2 h-1 bg-slate-800 rounded-full"></span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-sky-50 rounded-xl p-5 flex flex-col items-center justify-center border border-sky-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.totalEvaluations')}</span>
                                <span className="text-3xl font-bold text-sky-600">{reportData.evaluationStats.total}</span>
                            </div>
                            <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center justify-center border border-emerald-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.excellent')}</span>
                                <span className="text-3xl font-bold text-emerald-500">{reportData.evaluationStats.excellent}</span>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-5 flex flex-col items-center justify-center border border-blue-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.good')}</span>
                                <span className="text-3xl font-bold text-blue-500">{reportData.evaluationStats.veryGood}</span>
                            </div>
                            <div className="bg-amber-50 rounded-xl p-5 flex flex-col items-center justify-center border border-amber-100">
                                <span className="text-xs text-slate-500 mb-2 font-medium">{t('parent.reports.good', { defaultValue: 'جيد' })}</span>
                                <span className="text-3xl font-bold text-amber-500">{reportData.evaluationStats.good}</span>
                            </div>
                        </div>

                        <div className="border border-emerald-200 rounded-2xl p-6 bg-white relative overflow-hidden">
                            <h3 className="font-bold text-slate-800 mb-6">{t('parent.reports.lastEvaluation')}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-500 font-medium block">{t('parent.reports.subject')}</span>
                                    <span className="font-bold text-slate-800 block">{reportData.evaluationStats.lastEvaluation.subject}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-500 font-medium block">{t('parent.reports.teacher')}</span>
                                    <span className="font-bold text-slate-800 block">{reportData.evaluationStats.lastEvaluation.teacher}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-500 font-medium block">{t('parent.reports.score')}</span>
                                    <span className="font-bold text-emerald-500 text-2xl block">{reportData.evaluationStats.lastEvaluation.score}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-500 font-medium block">{t('parent.reports.date')}</span>
                                    <span className="font-bold text-slate-800 block text-sm">{reportData.evaluationStats.lastEvaluation.date}</span>
                                </div>
                            </div>

                            <div className="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <span className="text-xs text-slate-500 font-medium block mb-1">{t('parent.reports.teacherNotes')}:</span>
                                <p className="text-sm font-bold text-slate-700">{reportData.evaluationStats.lastEvaluation.notes}</p>
                            </div>
                        </div>
                    </motion.div>

                    <AcademicPerformance data={reportData.academic} variants={itemVariants} />
                    <AssignmentsStats data={reportData.assignments} variants={itemVariants} />
                    <ClassesStats data={reportData.classes} variants={itemVariants} />
                    <ProgressAchievements data={reportData.progress} variants={itemVariants} />
                    <StrengthsWeaknesses data={reportData.strengthsWeaknesses} variants={itemVariants} />

                </>
            ) : null}
        </motion.div>
    );
}
