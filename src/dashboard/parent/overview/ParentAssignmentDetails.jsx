import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, FileText, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ParentAssignmentDetails() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [assignmentData, setAssignmentData] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 800));
                setAssignmentData({
                    id: id,
                    title: t('parent.assignments.detailTitle'),
                    subject: t('parent.assignments.detailSubject'),
                    teacher: t('parent.assignments.detailTeacher'),
                    student: t('parent.assignments.detailStudent'),
                    score: 95,
                    totalScore: 100,
                    requiredDate: '2026-04-10',
                    actualDate: '2026-04-09',
                    description: t('parent.assignments.detailDescription'),
                    attachments: [
                        { name: t('parent.assignments.detailFileName'), size: '2.3 MB', url: '#' }
                    ],
                    teacherNotes: t('parent.assignments.detailTeacherNotes')
                });
            } catch (error) {
                console.error("Failed to fetch assignment details", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, i18n.language]);


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
            dir={i18n.language.startsWith('ar') ? 'rtl' : 'ltr'}
        >            <motion.div variants={itemVariants} className="flex justify-end mb-4">
                <button
                    onClick={() => navigate('/dashboard/parent/assignments')}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm"
                >
                    <span>{t('parent.assignments.back')}</span>
                    <ArrowRight className={`w-5 h-5 ${i18n.language.startsWith('ar') ? '' : 'rotate-180'}`} />
                </button>
            </motion.div>

            {isLoading ? (
                <div className="absolute inset-0 flex justify-center items-center bg-white/50 z-10 rounded-2xl mt-20 min-h-[500px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : assignmentData ? (
                <>
                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                            <div>
                                <h1 className="text-2xl font-extrabold text-slate-800 mb-4">{assignmentData.title}</h1>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <span className="text-slate-400">{t('parent.assignments.subject')}:</span>
                                        <span className="text-slate-700">{assignmentData.subject}</span>
                                    </div>
                                    <span className="hidden sm:inline text-slate-300">•</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-slate-400">{t('parent.reports.teacher')}:</span>
                                        <span className="text-slate-700">{assignmentData.teacher}</span>
                                    </div>
                                    <span className="hidden sm:inline text-slate-300">•</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-slate-400">{t('parent.ratings.student')}:</span>
                                        <span className="text-slate-700">{assignmentData.student}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100 shrink-0">
                                <div className="flex items-center gap-1 mb-1 text-emerald-600">
                                    <Star className="w-4 h-4 fill-emerald-600" />
                                    <span className="text-xs font-bold">{t('parent.assignments.score')}</span>
                                </div>
                                <div className="text-3xl font-extrabold text-emerald-600 flex items-baseline">
                                    {assignmentData.score}<span className="text-lg text-emerald-500 font-medium">/{assignmentData.totalScore}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col items-center text-center bg-slate-50 px-6 py-3 rounded-xl w-full sm:w-auto">
                                <span className="text-[10px] font-bold text-slate-400 mb-1">{t('parent.assignments.submissionStatus')}</span>
                                <span className="text-sm font-bold text-emerald-500">{assignmentData.actualDate}</span>
                            </div>
                            <div className="flex flex-col items-center text-center bg-slate-50 px-6 py-3 rounded-xl w-full sm:w-auto">
                                <span className="text-[10px] font-bold text-slate-400 mb-1">{t('parent.assignments.date')}</span>
                                <span className="text-sm font-bold text-slate-800">{assignmentData.requiredDate}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">{t('parent.assignments.description')}</h2>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            {assignmentData.description}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">{t('parent.assignments.attachments')}</h2>
                        <div className="flex flex-col gap-3">
                            {assignmentData.attachments.map((file, index) => (
                                <div key={index} className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 gap-4">
                                    <div className="flex items-center gap-4 text-slate-700">
                                        <div className="bg-white p-2 rounded-lg text-[#0f7a6c] shadow-sm">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm">{file.name}</span>
                                            <span className="text-xs text-slate-500 mt-0.5">{file.size}</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors w-full sm:w-auto">
                                        <span>{t('parent.assignments.download')}</span>
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800 mb-6">{t('parent.assignments.teacherNotes')}</h2>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-xl font-bold shrink-0">
                                أ
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-2">{assignmentData.teacher}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    {assignmentData.teacherNotes}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : null}
        </motion.div>
    );
}
