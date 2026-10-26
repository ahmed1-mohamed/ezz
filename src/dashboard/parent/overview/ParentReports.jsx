import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AcademicPerformance from '../components/ratings/AcademicPerformance';
import AssignmentsStats from '../components/ratings/AssignmentsStats';
import ClassesStats from '../components/ratings/ClassesStats';
import ProgressAchievements from '../components/ratings/ProgressAchievements';
import StrengthsWeaknesses from '../components/ratings/StrengthsWeaknesses';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ParentReports() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [studentsList, setStudentsList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [reportData, setReportData] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const loadStudents = async () => {
            try {
                const res = await parentApi.fetchChildren();
                if (isMounted && res?.success && Array.isArray(res.data)) {
                    setStudentsList(res.data);
                    if (res.data.length > 0) {
                        const first = res.data[0];
                        setSelectedStudent((prev) => prev || (first.id || first._id || first.student_id));
                    }
                }
            } catch (err) {
                console.error("Failed to load students for reports", err);
            }
        };
        loadStudents();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        if (!selectedStudent) return;
        let isMounted = true;
        const fetchReport = async () => {
            setIsLoading(true);
            try {
                const res = await parentApi.fetchReports({ studentId: selectedStudent });
                const currentStudent = studentsList.find(s => (s.id || s._id || s.student_id) === selectedStudent);
                const studentName = currentStudent
                    ? (typeof currentStudent.name === 'object' ? (isRtl ? currentStudent.name.ar : currentStudent.name.en) : currentStudent.name)
                    : '-';
                const joinDate = currentStudent?.createdAt ? new Date(currentStudent.createdAt).toLocaleDateString() : (currentStudent?.joinDate || '-');
                const currentPackage = currentStudent?.packageName || currentStudent?.package || t('parent.reports.defaultPackage', 'باقة أساسية');

                if (isMounted) {
                    const data = res?.data || {};
                    const totalClasses = currentStudent?.totalClasses || currentStudent?.sessionsTotal || data.attendanceStats?.total || 0;
                    const attended = currentStudent?.usedClasses || currentStudent?.sessionsUsed || data.attendanceStats?.attended || 0;
                    const absent = data.attendanceStats?.absent || 0;
                    const attRate = totalClasses > 0 ? `${Math.round((attended / totalClasses) * 100)}%` : (data.attendanceStats?.rate || '0%');

                    setReportData({
                        studentInfo: {
                            name: data.studentInfo?.name || studentName,
                            joinDate: data.studentInfo?.joinDate || joinDate,
                            currentPackage: data.studentInfo?.currentPackage || currentPackage
                        },
                        attendanceStats: {
                            total: totalClasses,
                            attended,
                            absent,
                            rate: attRate,
                            currentMonth: data.attendanceStats?.currentMonth || { attended, total: totalClasses, rate: attRate },
                            lastMonth: data.attendanceStats?.lastMonth || { attended: 0, total: 0, rate: '0%' }
                        },
                        evaluationStats: data.evaluationStats || {
                            total: currentStudent?.evaluations?.length || 0,
                            excellent: 0,
                            veryGood: 0,
                            good: 0,
                            lastEvaluation: {
                                subject: currentStudent?.subject || '-',
                                teacher: currentStudent?.teacherName || '-',
                                score: currentStudent?.averageRating || 0,
                                date: '-',
                                notes: '-'
                            }
                        },
                        academic: data.academic || {
                            overallAverage: currentStudent?.averageRating || 0,
                            currentMonthAverage: currentStudent?.averageRating || 0,
                            lastMonthAverage: 0,
                            subjects: currentStudent?.subject ? [{ name: currentStudent.subject, average: currentStudent.averageRating || 0, lastRating: currentStudent.averageRating || 0, trend: 'up' }] : []
                        },
                        assignments: data.assignments || {
                            total: 0,
                            completed: 0,
                            pending: 0,
                            completionRate: '0%',
                            delivery: { onTime: 0, late: 0 },
                            currentMonth: { completed: 0, total: 0, rate: '0%' }
                        },
                        classes: data.classes || {
                            total: totalClasses,
                            used: attended,
                            remaining: Math.max(0, totalClasses - attended),
                            thisMonth: attended
                        },
                        progress: data.progress || {
                            currentMemorization: currentStudent?.levelName || currentStudent?.level || '-',
                            nextGoal: '-',
                            achievements: []
                        },
                        strengthsWeaknesses: data.strengthsWeaknesses || {
                            strengths: [],
                            weaknesses: []
                        }
                    });
                }
            } catch (error) {
                console.error("Failed to fetch report", error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchReport();
        return () => { isMounted = false; };
    }, [selectedStudent, studentsList, isRtl, t]);

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
                    <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.reports.title', 'التقارير الأكاديمية')}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.reports.subtitle', 'تقرير شامل عن أداء ومستوى الأبناء')}</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center md:text-start w-full">
                        {t('parent.schedule.selectStudent', 'اختر الابن')}
                    </label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                        >
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
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : reportData ? (
                <>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 relative inline-block">
                            {t('parent.reports.studentInfo', 'بيانات الطالب')}
                            <span className="absolute -bottom-2 start-0 w-1/2 h-1 bg-[#0f7a6c] rounded-full"></span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700 w-full">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">{t('parent.reports.name', 'الاسم')}</span>
                                <span className="font-bold text-slate-800 dark:text-slate-100">{reportData.studentInfo.name}</span>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700 w-full">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">{t('parent.reports.joinDate', 'تاريخ الانضمام')}</span>
                                <span className="font-bold text-slate-800 dark:text-slate-100">{reportData.studentInfo.joinDate}</span>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700 w-full">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-medium">{t('parent.reports.currentPackage', 'الباقة')}</span>
                                <span className="font-bold text-slate-800 dark:text-slate-100">{reportData.studentInfo.currentPackage}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 relative inline-block">
                            {t('parent.reports.attendance', 'الحضور')}
                            <span className="absolute -bottom-2 start-0 w-1/2 h-1 bg-red-500 rounded-full"></span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="bg-sky-50 dark:bg-sky-950/20 rounded-xl p-5 flex flex-col items-center justify-center border border-sky-100 dark:border-sky-900/40">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">{t('parent.reports.totalClasses', 'إجمالي الحصص')}</span>
                                <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">{reportData.attendanceStats.total}</span>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-5 flex flex-col items-center justify-center border border-emerald-100 dark:border-emerald-900/40">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">{t('parent.reports.attended', 'حضور')}</span>
                                <span className="text-3xl font-bold text-emerald-500">{reportData.attendanceStats.attended}</span>
                            </div>
                            <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-5 flex flex-col items-center justify-center border border-red-100 dark:border-red-900/40">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">{t('parent.reports.absent', 'غياب')}</span>
                                <span className="text-3xl font-bold text-red-500">{reportData.attendanceStats.absent}</span>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 flex flex-col items-center justify-center border border-amber-100 dark:border-amber-900/40">
                                <span className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">{t('parent.attendance.rate', 'النسبة')}</span>
                                <span className="text-3xl font-bold text-amber-500">{reportData.attendanceStats.rate}</span>
                            </div>
                        </div>
                    </motion.div>

                    <AcademicPerformance data={reportData.academic} variants={itemVariants} />
                    <AssignmentsStats data={reportData.assignments} variants={itemVariants} />
                    <ClassesStats data={reportData.classes} variants={itemVariants} />
                    <ProgressAchievements data={reportData.progress} variants={itemVariants} />
                    {reportData.strengthsWeaknesses?.strengths?.length > 0 && (
                        <StrengthsWeaknesses data={reportData.strengthsWeaknesses} variants={itemVariants} />
                    )}
                </>
            ) : null}
        </motion.div>
    );
}
