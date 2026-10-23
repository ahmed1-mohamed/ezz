import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ParentSchedule() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('all');
    const [studentsList, setStudentsList] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const loadStudents = async () => {
            try {
                const res = await parentApi.fetchChildren();
                if (isMounted && res?.success && Array.isArray(res.data)) {
                    setStudentsList(res.data);
                }
            } catch (err) {
                console.error("Failed to load students for schedule", err);
            }
        };
        loadStudents();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        let isMounted = true;
        const fetchSchedule = async () => {
            setIsLoading(true);
            try {
                const params = selectedStudent !== 'all' ? { studentId: selectedStudent } : {};
                const res = await parentApi.fetchSchedules(params);

                if (isMounted) {
                    const rawList = res?.success && Array.isArray(res.data)
                        ? res.data
                        : (res?.data?.days || (Array.isArray(res?.data) ? res.data : []));

                    const formatted = rawList.map((item, idx) => {
                        const id = item.id || item._id || idx;
                        const dayName = item.dayName || item.day || '-';
                        const date = item.date || item.scheduledDate || '-';
                        const startTime = item.startTime || item.time || '-';
                        const endTime = item.endTime || '-';
                        const className = item.className || item.title || item.subject || t('parent.schedule.defaultClass', 'حصة دراسية');
                        const teacherName = item.teacherName || item.teacher || '-';
                        const status = item.isLive ? 'live' : (item.status || 'upcoming');
                        const studentId = item.studentId || item.student_id;

                        return {
                            id,
                            dayName,
                            date,
                            startTime,
                            endTime,
                            className,
                            teacherName,
                            status,
                            studentId
                        };
                    });

                    setScheduleData(formatted);
                }
            } catch (error) {
                console.error("Failed to fetch schedule", error);
                if (isMounted) setScheduleData([]);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchSchedule();
        return () => { isMounted = false; };
    }, [selectedStudent, t]);

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
                return { label: t('parent.schedule.live', 'مباشر الآن'), color: 'bg-red-500', text: 'text-white' };
            case 'upcoming':
                return { label: t('parent.schedule.upcoming', 'قادمة'), color: 'bg-[#0f7a6c]', text: 'text-white' };
            case 'completed':
                return { label: t('parent.schedule.completed', 'مكتملة'), color: 'bg-emerald-500', text: 'text-white' };
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
        : scheduleData.filter(item => !item.studentId || item.studentId === selectedStudent);

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
                        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.schedule.title', 'جدول الحصص')}</h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.schedule.subtitle', 'متابعة جدول الحصص الأسبوعية للأبناء')}</p>
                    </div>

                    <div className="w-px h-12 bg-slate-100 dark:bg-slate-700 hidden md:block"></div>

                    <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-auto">
                        <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mb-1 text-start">{t('parent.schedule.selectStudent', 'اختر الابن')}</label>
                        <div className="relative w-full sm:w-48 text-start">
                            <select
                                value={selectedStudent}
                                onChange={(e) => setSelectedStudent(e.target.value)}
                                className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-bold"
                            >
                                <option value="all">{t('parent.schedule.allStudents', 'جميع الأبناء')}</option>
                                {studentsList.map((s) => {
                                    const sId = s.id || s._id || s.student_id;
                                    const sName = typeof s.name === 'object'
                                        ? (isRtl ? s.name.ar : s.name.en)
                                        : (s.name || sId);
                                    return <option key={sId} value={sId}>{sName}</option>;
                                })}
                            </select>
                            <div className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none">
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : filteredSchedule.length === 0 ? (
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-100 dark:border-slate-700 shadow-sm">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {t('parent.schedule.noClasses', 'لا توجد حصص مجدولة حالياً')}
                    </p>
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
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('parent.schedule.teacher', 'المعلم')}: {item.teacherName}</p>
                                    </div>

                                    <div className="w-40 flex flex-col items-center text-center gap-1">
                                        <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-xs font-bold">{t('parent.schedule.time', 'الوقت')}</span>
                                        </div>
                                        <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.startTime}</div>
                                        {item.endTime && item.endTime !== '-' && (
                                            <div className="text-xs text-slate-400 dark:text-slate-500">{item.endTime}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
                                    <div className={`px-4 py-2 rounded-xl text-xs font-bold ${statusInfo.color} ${statusInfo.text}`}>
                                        {statusInfo.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );
}
