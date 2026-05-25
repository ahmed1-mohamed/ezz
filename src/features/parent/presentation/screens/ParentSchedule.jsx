import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ParentSchedule() {
    const { i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('all');
    const [scheduleData, setScheduleData] = useState([]);

    // Simulate backend fetch
    useEffect(() => {
        const fetchSchedule = async () => {
            setIsLoading(true);
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock API response
                const mockData = [
                    {
                        id: 1,
                        dayName: 'الأحد',
                        date: '2026-04-20',
                        startTime: '10:30 صباحاً',
                        endTime: '11:30 صباحاً',
                        className: 'حفظ سورة الإخلاص',
                        teacherName: 'الشيخ فهد السعيد',
                        status: 'live', // live, upcoming, completed
                        studentId: 'c1'
                    },
                    {
                        id: 2,
                        dayName: 'الإثنين',
                        date: '2026-04-21',
                        startTime: '1:00 ظهراً',
                        endTime: '2:00 ظهراً',
                        className: 'حفظ سورة الكهف',
                        teacherName: 'الشيخ علي الشمري',
                        status: 'upcoming',
                        studentId: 'c1'
                    },
                    {
                        id: 3,
                        dayName: 'الثلاثاء',
                        date: '2026-04-22',
                        startTime: '3:00 عصراً',
                        endTime: '4:00 عصراً',
                        className: 'حفظ سورة يس',
                        teacherName: 'الشيخ سعيد الماجد',
                        status: 'completed',
                        studentId: 'c2'
                    }
                ];
                setScheduleData(mockData);
            } catch (error) {
                console.error("Failed to fetch schedule", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSchedule();
    }, []);

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

    const getStatusDetails = (status) => {
        switch (status) {
            case 'live':
                return { label: 'مباشر الآن', color: 'bg-red-500', text: 'text-white' };
            case 'upcoming':
                return { label: 'قادم', color: 'bg-[#0f7a6c]', text: 'text-white' };
            case 'completed':
                return { label: 'مكتمل', color: 'bg-emerald-500', text: 'text-white' };
            default:
                return { label: status, color: 'bg-slate-500', text: 'text-white' };
        }
    };

    const getCardStyles = (status) => {
        if (status === 'live') {
            return {
                wrapper: 'bg-red-50/30 dark:bg-red-900/10 border-e-4 border-e-red-500',
                dayBox: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
            };
        }
        return {
            wrapper: 'bg-white dark:bg-slate-800 border-e-4 border-e-[#0f7a6c] dark:border-e-[#0c6156]',
            dayBox: 'bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400',
        };
    };

    const filteredSchedule = selectedStudent === 'all'
        ? scheduleData
        : scheduleData.filter(item => item.studentId === selectedStudent);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto text-center md:text-start">
                    <div>
                        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">الجدول الأسبوعي</h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">جدول الحصص الأسبوعية</p>
                    </div>

                    <div className="w-px h-12 bg-slate-100 dark:bg-slate-700 hidden md:block"></div>

                    <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-auto">
                        <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 text-start">اختر الطالب</label>
                        <div className="relative w-full sm:w-48 text-start">
                            <select
                                value={selectedStudent}
                                onChange={(e) => setSelectedStudent(e.target.value)}
                                className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                            >
                                <option value="all">كل الأبناء</option>
                                <option value="c1">علي خالد</option>
                                <option value="c2">سعاد عمر</option>
                                <option value="c3">يوسف منصور</option>
                            </select>
                            <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-sm text-sm w-full md:w-auto">
                    <span>تصدير الجدول</span>
                </button>
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredSchedule.map((item) => {
                        const statusInfo = getStatusDetails(item.status);
                        const styles = getCardStyles(item.status);

                        return (
                            <motion.div
                                variants={itemVariants}
                                key={item.id}
                                className={`rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-md ${styles.wrapper}`}
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full md:w-auto text-center md:text-start flex-grow">
                                    <div className={`w-32 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 shrink-0 ${styles.dayBox}`}>
                                        <Calendar className="w-5 h-5" />
                                        <div className="font-bold">{item.dayName}</div>
                                        <div className="text-[10px] opacity-75">{item.date}</div>
                                    </div>

                                    <div className="w-48 text-center md:text-start">
                                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">{item.className}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">المعلم: {item.teacherName}</p>
                                    </div>

                                    <div className="w-40 flex flex-col items-center text-center gap-1">
                                        <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">الوقت</span>
                                        </div>
                                        <div className="font-bold text-slate-800 dark:text-slate-100">{item.startTime}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">إلى {item.endTime}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center w-full md:w-32 shrink-0 mt-4 md:mt-0">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 mb-2 font-medium">الحالة</span>
                                    <div className={`px-5 py-2 rounded-full text-xs font-bold ${statusInfo.color} ${statusInfo.text}`}>
                                        {statusInfo.label}
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}

                    {filteredSchedule.length === 0 && (
                        <div className="text-center py-10 text-slate-500 dark:text-slate-400">
                            لا توجد حصص في الجدول للطالب المحدد.
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    );
}
