import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AssignmentsHeader from '../components/assignments/AssignmentsHeader';
import AssignmentsStatsBar from '../components/assignments/AssignmentsStatsBar';
import AssignmentCard from '../components/assignments/AssignmentCard';

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
        const fetchAssignments = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 800));
                setAssignmentsData({
                    stats: { total: 5, evaluated: 2, underReview: 1, notSubmitted: 1 },
                    list: [
                        { id: 1, title: t('parent.assignments.mock1Title'), student: t('parent.assignments.mock1Student'), subject: t('parent.assignments.mock1Subject'), teacher: t('parent.assignments.mock1Teacher'), date: '12-04-2026', status: t('parent.assignments.statusUnderReview'), icon: Clock },
                        { id: 2, title: t('parent.assignments.mock2Title'), student: t('parent.assignments.mock2Student'), subject: t('parent.assignments.mock2Subject'), teacher: t('parent.assignments.mock2Teacher'), date: '15-05-2026', status: t('parent.assignments.statusCompleted'), icon: CheckCircle2 },
                        { id: 3, title: t('parent.assignments.mock3Title'), student: t('parent.assignments.mock3Student'), subject: t('parent.assignments.mock3Subject'), teacher: t('parent.assignments.mock3Teacher'), date: '20-06-2026', status: t('parent.assignments.statusInProgress'), icon: Clock },
                        { id: 4, title: t('parent.assignments.mock4Title'), student: t('parent.assignments.mock4Student'), subject: t('parent.assignments.mock4Subject'), teacher: t('parent.assignments.mock4Teacher'), date: '30-07-2026', status: t('parent.assignments.statusPostponed'), icon: Clock },
                        { id: 5, title: t('parent.assignments.mock5Title'), student: t('parent.assignments.mock5Student'), subject: t('parent.assignments.mock5Subject'), teacher: t('parent.assignments.mock5Teacher'), date: '25-08-2026', status: t('parent.assignments.statusCompleted'), icon: CheckCircle2 },
                    ]
                });
            } catch (error) {
                console.error('Failed to fetch assignments', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAssignments();
    }, [selectedStudent, i18n.language]);

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
                <div className="absolute inset-0 flex justify-center items-center bg-white/50 z-10 rounded-2xl mt-32 min-h-[500px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]" />
                </div>
            ) : assignmentsData ? (
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
            ) : null}
        </motion.div>
    );
}
