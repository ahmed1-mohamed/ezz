import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ParentAttendance() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('c1');
    const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // Default to April 2026 initially
    const [attendanceData, setAttendanceData] = useState([]);

    // Stats
    const [stats, setStats] = useState([
        { id: 1, label: t('parent.attendance.rate'), value: '0%', color: 'text-[#0f7a6c]' },
        { id: 2, label: t('parent.attendance.attended'), value: '0', color: 'text-[#10b981]' },
        { id: 3, label: t('parent.attendance.absent'), value: '0', color: 'text-red-500' },
        { id: 4, label: t('parent.attendance.postponed'), value: '0', color: 'text-yellow-500' }
    ]);

    useEffect(() => {
        // Simulate backend fetch API endpoint for given month and student
        const fetchAttendance = async () => {
            setIsLoading(true);
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock dynamic calendar data based on the selected month/student
                // In a real scenario, this would come from the API Response mapped to days
                const newMockDays = Array(35).fill('none').map(() => {
                    const rand = Math.random();
                    if (rand > 0.7) return 'attended'; // 30% chance of attendance
                    if (rand > 0.85) return 'absent';   // 15% chance of absence
                    if (rand > 0.95) return 'postponed'; // 5% chance of postponed
                    return 'none';
                });

                // Recalculate stats based on fetched data
                const attended = newMockDays.filter(s => s === 'attended').length;
                const absent = newMockDays.filter(s => s === 'absent').length;
                const postponed = newMockDays.filter(s => s === 'postponed').length;
                const total = attended + absent + postponed;
                const rate = total > 0 ? Math.round((attended / total) * 100) : 0;

                setAttendanceData(newMockDays);
                setStats([
                    { id: 1, label: t('parent.attendance.rate'), value: `${rate}%`, color: 'text-[#0f7a6c]' },
                    { id: 2, label: t('parent.attendance.attended'), value: attended.toString(), color: 'text-[#10b981]' },
                    { id: 3, label: t('parent.attendance.absent'), value: absent.toString(), color: 'text-red-500' },
                    { id: 4, label: t('parent.attendance.postponed'), value: postponed.toString(), color: 'text-yellow-500' }
                ]);

            } catch (error) {
                console.error("Failed to fetch attendance data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAttendance();
    }, [selectedStudent, currentDate]);

    const handlePrevMonth = () => {
        // In Arabic, reading right to left, the right arrow typically means "next month" or "future" 
        // but traditionally right is "previous" and left is "next" in RTL calendars. 
        // We will make ChevronRight go to previous month and ChevronLeft go to next month for RTL.
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
                return 'bg-emerald-100';
            case 'absent':
                return 'bg-red-100';
            case 'postponed':
                return 'bg-yellow-100';
            case 'none':
            default:
                return 'bg-slate-100';
        }
    };

    const daysOfWeek = [
        t('parent.attendance.days.sat'),
        t('parent.attendance.days.sun'),
        t('parent.attendance.days.mon'),
        t('parent.attendance.days.tue'),
        t('parent.attendance.days.wed'),
        t('parent.attendance.days.thu'),
        t('parent.attendance.days.fri')
    ];

    const monthFormatter = new Intl.DateTimeFormat(i18n.language === 'ar' ? 'ar-EG' : 'en-US', { month: 'long', year: 'numeric' });
    const formattedMonth = monthFormatter.format(currentDate);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800">{t('parent.attendance.title')}</h1>
                    <p className="text-sm text-slate-500 mt-1">{t('parent.attendance.subtitle')} {selectedStudent === 'c1' ? (isRtl ? 'فاطمة أحمد' : 'Fatima Ahmed') : selectedStudent === 'c2' ? (isRtl ? 'علي خالد' : 'Ali Khaled') : (isRtl ? 'سعاد عمر' : 'Soad Omar')}</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 font-medium text-center md:text-start w-full">{t('parent.attendance.selectStudent')}</label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-400 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-medium"
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <motion.div
                        variants={itemVariants}
                        key={stat.id}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2"
                    >
                        <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
                        <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-slate-100 relative min-h-[400px]">
                <div className="flex items-center justify-between mb-8" dir="ltr">
                    <button
                        onClick={handlePrevMonth}
                        disabled={isLoading}
                        className="p-2 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent rounded-lg transition-colors text-slate-800"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-lg font-bold text-slate-800">{formattedMonth}</h2>
                    <button
                        onClick={handleNextMonth}
                        disabled={isLoading}
                        className="p-2 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent rounded-lg transition-colors text-slate-800"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {isLoading ? (
                    <div className="absolute inset-0 flex justify-center items-center bg-white/50 z-10 rounded-2xl">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                    </div>
                ) : null}

                <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-4">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="text-center text-xs font-bold text-slate-600">
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

                <div className="flex items-center justify-center gap-6 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-2">
                        <span>{t('parent.attendance.attended')}</span>
                        <div className="w-4 h-4 rounded bg-emerald-100" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>{t('parent.attendance.absent')}</span>
                        <div className="w-4 h-4 rounded bg-red-100" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>{t('parent.attendance.postponed')}</span>
                        <div className="w-4 h-4 rounded bg-yellow-100" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
