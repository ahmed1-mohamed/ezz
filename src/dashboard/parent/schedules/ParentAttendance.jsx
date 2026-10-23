import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ParentAttendance() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [studentsList, setStudentsList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState([]);

    const [stats, setStats] = useState([
        { id: 1, label: t('parent.attendance.rate', 'نسبة الحضور'), value: '0%', color: 'text-[#0f7a6c]' },
        { id: 2, label: t('parent.attendance.attended', 'حضور'), value: '0', color: 'text-[#10b981]' },
        { id: 3, label: t('parent.attendance.absent', 'غياب'), value: '0', color: 'text-red-500' },
        { id: 4, label: t('parent.attendance.postponed', 'مؤجل'), value: '0', color: 'text-yellow-500' }
    ]);

    useEffect(() => {
        let isMounted = true;
        const loadStudents = async () => {
            try {
                const res = await parentApi.fetchChildren();
                if (isMounted && res?.success && Array.isArray(res.data)) {
                    setStudentsList(res.data);
                    if (res.data.length > 0 && !selectedStudent) {
                        const first = res.data[0];
                        setSelectedStudent(first.id || first._id || first.student_id);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch students for attendance", err);
            }
        };
        loadStudents();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        let isMounted = true;
        const fetchAttendance = async () => {
            setIsLoading(true);
            try {
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();
                const res = await parentApi.fetchAttendance({
                    studentId: selectedStudent,
                    month,
                    year
                });

                if (isMounted) {
                    const daysInMonth = new Date(year, month, 0).getDate();
                    const rawRecords = res?.success && Array.isArray(res.data) ? res.data : [];

                    // Map days 1..35
                    const mappedDays = Array(35).fill('none').map((_, idx) => {
                        const dayNum = idx + 1;
                        if (dayNum > daysInMonth) return 'none';
                        const rec = rawRecords.find(r => {
                            if (!r.date) return false;
                            const d = new Date(r.date);
                            return d.getDate() === dayNum && (d.getMonth() + 1) === month;
                        });
                        if (rec) {
                            return rec.status || 'attended';
                        }
                        return 'none';
                    });

                    const attended = mappedDays.filter(s => s === 'attended' || s === 'present').length;
                    const absent = mappedDays.filter(s => s === 'absent').length;
                    const postponed = mappedDays.filter(s => s === 'postponed' || s === 'excused').length;
                    const total = attended + absent + postponed;
                    const rate = total > 0 ? Math.round((attended / total) * 100) : 0;

                    setAttendanceData(mappedDays);
                    setStats([
                        { id: 1, label: t('parent.attendance.rate', 'نسبة الحضور'), value: `${rate}%`, color: 'text-[#0f7a6c]' },
                        { id: 2, label: t('parent.attendance.attended', 'حضور'), value: attended.toString(), color: 'text-[#10b981]' },
                        { id: 3, label: t('parent.attendance.absent', 'غياب'), value: absent.toString(), color: 'text-red-500' },
                        { id: 4, label: t('parent.attendance.postponed', 'مؤجل'), value: postponed.toString(), color: 'text-yellow-500' }
                    ]);
                }
            } catch (error) {
                console.error("Failed to fetch attendance data", error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchAttendance();
        return () => { isMounted = false; };
    }, [selectedStudent, currentDate, t]);

    const handlePrevMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

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

    const getDayColor = (status) => {
        switch (status) {
            case 'attended':
            case 'present':
                return 'bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800';
            case 'absent':
                return 'bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-800';
            case 'postponed':
            case 'excused':
                return 'bg-yellow-100 dark:bg-yellow-950/40 border border-yellow-300 dark:border-yellow-800';
            default:
                return 'bg-slate-100 dark:bg-slate-800';
        }
    };

    const daysOfWeek = [
        t('parent.attendance.days.sat', 'السبت'),
        t('parent.attendance.days.sun', 'الأحد'),
        t('parent.attendance.days.mon', 'الإثنين'),
        t('parent.attendance.days.tue', 'الثلاثاء'),
        t('parent.attendance.days.wed', 'الأربعاء'),
        t('parent.attendance.days.thu', 'الخميس'),
        t('parent.attendance.days.fri', 'الجمعة')
    ];

    const monthFormatter = new Intl.DateTimeFormat(i18n.language === 'ar' ? 'ar-EG' : 'en-US', { month: 'long', year: 'numeric' });
    const formattedMonth = monthFormatter.format(currentDate);

    const currentStudentObj = studentsList.find(s => (s.id || s._id || s.student_id) === selectedStudent);
    const selectedStudentName = currentStudentObj
        ? (typeof currentStudentObj.name === 'object' ? (isRtl ? currentStudentObj.name.ar : currentStudentObj.name.en) : currentStudentObj.name)
        : '';

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.attendance.title', 'سجل الحضور والغياب')}</h1>
                    {selectedStudentName && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {t('parent.attendance.subtitle', 'متابعة حضور')} {selectedStudentName}
                        </p>
                    )}
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center md:text-start w-full">
                        {t('parent.attendance.selectStudent', 'اختر الابن')}
                    </label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-medium"
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <motion.div
                        variants={itemVariants}
                        key={stat.id}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2"
                    >
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</span>
                        <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 relative min-h-[400px]">
                <div className="flex items-center justify-between mb-8" dir="ltr">
                    <button
                        onClick={handlePrevMonth}
                        disabled={isLoading}
                        className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:hover:bg-transparent rounded-lg transition-colors text-slate-800 dark:text-slate-100"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{formattedMonth}</h2>
                    <button
                        onClick={handleNextMonth}
                        disabled={isLoading}
                        className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:hover:bg-transparent rounded-lg transition-colors text-slate-800 dark:text-slate-100"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {isLoading ? (
                    <div className="absolute inset-0 flex justify-center items-center bg-white/50 dark:bg-slate-800/50 z-10 rounded-2xl">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                    </div>
                ) : null}

                <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-4">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="text-center text-xs font-bold text-slate-600 dark:text-slate-400">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-8">
                    {attendanceData.map((status, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.01 }}
                            key={`${currentDate.toISOString()}-${index}`}
                            className={`aspect-square rounded-xl sm:rounded-2xl ${getDayColor(status)} transition-colors`}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <span>{t('parent.attendance.attended', 'حضور')}</span>
                        <div className="w-4 h-4 rounded bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>{t('parent.attendance.absent', 'غياب')}</span>
                        <div className="w-4 h-4 rounded bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-800" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>{t('parent.attendance.postponed', 'مؤجل')}</span>
                        <div className="w-4 h-4 rounded bg-yellow-100 dark:bg-yellow-950/40 border border-yellow-300 dark:border-yellow-800" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
