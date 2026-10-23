import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AssignmentsHeader from '../components/assignments/AssignmentsHeader';
import AssignmentsStatsBar from '../components/assignments/AssignmentsStatsBar';
import AssignmentCard from '../components/assignments/AssignmentCard';
import { parentApi } from '@/shared/services/api/parentApi';

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function ParentAssignments() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('all');
    const [assignmentsData, setAssignmentsData] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchAssignments = async () => {
            setIsLoading(true);
            try {
                const params = selectedStudent !== 'all' ? { studentId: selectedStudent } : {};
                const res = await parentApi.fetchAssignments(params);

                if (isMounted) {
                    const rawList = res?.success && Array.isArray(res.data)
                        ? res.data
                        : (res?.data?.list || (Array.isArray(res?.data) ? res.data : []));

                    const formattedList = rawList.map((item, idx) => {
                        const id = item.id || item._id || idx;
                        const title = typeof item.title === 'object'
                            ? (isRtl ? item.title.ar : item.title.en)
                            : (item.title || item.name || t('parent.assignments.defaultTitle', 'واجب دراسي'));
                        const student = typeof item.student === 'object'
                            ? (isRtl ? item.student.name?.ar || item.student.name : item.student.name?.en || item.student.name)
                            : (item.studentName || item.student || '-');
                        const subject = typeof item.subject === 'object'
                            ? (isRtl ? item.subject.ar : item.subject.en)
                            : (item.subject || '-');
                        const teacher = typeof item.teacher === 'object'
                            ? (isRtl ? item.teacher.name?.ar || item.teacher.name : item.teacher.name?.en || item.teacher.name)
                            : (item.teacherName || item.teacher || '-');
                        const date = item.dueDate || item.date || item.createdAt?.slice(0, 10) || '-';
                        const isDone = item.status === 'completed' || item.status === 'evaluated';
                        const status = isDone
                            ? t('parent.assignments.statusCompleted', 'مكتمل')
                            : (item.status === 'in_progress' ? t('parent.assignments.statusInProgress', 'قيد التنفيذ') : t('parent.assignments.statusUnderReview', 'قيد المراجعة'));

                        return {
                            id,
                            title,
                            student,
                            subject,
                            teacher,
                            date,
                            status,
                            icon: isDone ? CheckCircle2 : Clock
                        };
                    });

                    const stats = res?.data?.stats || {
                        total: formattedList.length,
                        evaluated: formattedList.filter(a => a.status === t('parent.assignments.statusCompleted', 'مكتمل')).length,
                        underReview: formattedList.filter(a => a.status === t('parent.assignments.statusUnderReview', 'قيد المراجعة')).length,
                        notSubmitted: 0
                    };

                    setAssignmentsData({
                        stats,
                        list: formattedList
                    });
                }
            } catch (error) {
                console.error('Failed to fetch assignments', error);
                if (isMounted) {
                    setAssignmentsData({
                        stats: { total: 0, evaluated: 0, underReview: 0, notSubmitted: 0 },
                        list: []
                    });
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchAssignments();
        return () => { isMounted = false; };
    }, [selectedStudent, i18n.language, isRtl, t]);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen relative"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <AssignmentsHeader
                selectedStudent={selectedStudent}
                onStudentChange={setSelectedStudent}
                variants={itemVariants}
            />

            {isLoading ? (
                <div className="flex justify-center items-center py-24">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]" />
                </div>
            ) : assignmentsData && assignmentsData.list.length > 0 ? (
                <>
                    <AssignmentsStatsBar stats={assignmentsData.stats} variants={itemVariants} />

                    <div className="space-y-4">
                        {assignmentsData.list.map((assignment) => (
                            <AssignmentCard
                                key={assignment.id}
                                assignment={assignment}
                                variants={itemVariants}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-100 dark:border-slate-700 shadow-sm">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {t('parent.assignments.empty', 'لا توجد واجبات مسجلة حالياً.')}
                    </p>
                </div>
            )}
        </motion.div>
    );
}
