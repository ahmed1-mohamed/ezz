import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, CheckCircle2, Clock, XCircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ParentAssignments() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('all');
    const [assignmentsData, setAssignmentsData] = useState(null);

    useEffect(() => {
        const fetchAssignments = async () => {
            setIsLoading(true);
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock API response
                setAssignmentsData({
                    stats: {
                        total: 5,
                        evaluated: 2,
                        underReview: 1,
                        notSubmitted: 1
                    },
                    list: [
                        {
                            id: 1,
                            title: 'حفظ الآيات 1-10 من سورة البقرة',
                            student: 'فاطمة أحمد',
                            subject: 'القرآن الكريم',
                            teacher: 'الشيخ أحمد منصور',
                            date: '12-04-2026',
                            status: 'قيد المراجعة',
                            icon: Clock
                        },
                        {
                            id: 2,
                            title: 'إنجاز البحث في اللغة العربية',
                            student: 'محمد علي',
                            subject: 'اللغة العربية',
                            teacher: 'الدكتور سامي القاضي',
                            date: '15-05-2026',
                            status: 'مكتمل',
                            icon: CheckCircle2
                        },
                        {
                            id: 3,
                            title: 'تحضير مشروع الفيزياء',
                            student: 'سارة محمود',
                            subject: 'الفيزياء',
                            teacher: 'الأستاذة ليلى عبد الرحمن',
                            date: '20-06-2026',
                            status: 'قيد التنفيذ',
                            icon: Clock
                        },
                        {
                            id: 4,
                            title: 'كتابة التقرير الأدبي',
                            student: 'يوسف عبد الله',
                            subject: 'الأدب الإنجليزي',
                            teacher: 'الأستاذ عادل يوسف',
                            date: '30-07-2026',
                            status: 'مؤجل',
                            icon: Clock
                        },
                        {
                            id: 5,
                            title: 'مراجعة الرياضيات 1-5',
                            student: 'ندى طارق',
                            subject: 'الرياضيات',
                            teacher: 'الأستاذة فاطمة السالم',
                            date: '25-08-2026',
                            status: 'مكتمل',
                            icon: CheckCircle2
                        }
                    ]
                });
            } catch (error) {
                console.error("Failed to fetch assignments", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAssignments();
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
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 font-sans bg-transparent min-h-screen relative"
            dir="rtl"
        >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800">الواجبات</h1>
                    <p className="text-sm text-slate-500 mt-1">متابعة واجبات جميع الأبناء</p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-1 w-full sm:w-64">
                    <label className="text-xs text-slate-500 font-medium text-center md:text-start w-full">اختر الطالب</label>
                    <div className="relative w-full">
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-400 rounded-xl py-3 px-4 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer text-sm font-medium"
                        >
                            <option value="all">فاطمة أحمد</option>
                            <option value="c2">محمد علي</option>
                            <option value="c3">سارة محمود</option>
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
            ) : assignmentsData ? (
                <>
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <FileText className="w-6 h-6 text-sky-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">إجمالي الواجبات</span>
                            <span className="text-3xl font-bold text-sky-600">{assignmentsData.stats.total}</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">مُقيَّم</span>
                            <span className="text-3xl font-bold text-emerald-500">{assignmentsData.stats.evaluated}</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <Clock className="w-6 h-6 text-amber-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">قيد المراجعة</span>
                            <span className="text-3xl font-bold text-amber-500">{assignmentsData.stats.underReview}</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                            <XCircle className="w-6 h-6 text-red-500 mb-1" />
                            <span className="text-xs text-slate-500 font-medium">لم يُسلَّم</span>
                            <span className="text-3xl font-bold text-red-500">{assignmentsData.stats.notSubmitted}</span>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {assignmentsData.list.map((assignment) => {
                            const StatusIcon = assignment.icon;
                            return (
                                <motion.div
                                    variants={itemVariants}
                                    key={assignment.id}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
                                >
                                    <div className="flex-1 w-full text-center md:text-start">
                                        <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                                            <h3 className="text-lg font-bold text-slate-800">{assignment.title}</h3>
                                            <div className="flex items-center gap-1.5 bg-[#0f7a6c] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                <StatusIcon className="w-3.5 h-3.5" />
                                                <span>{assignment.status}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                                            <div className="flex items-center gap-1">
                                                <span className="text-slate-400">الطالب:</span>
                                                <span className="text-slate-700">{assignment.student}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-slate-400">المادة:</span>
                                                <span className="text-slate-700">{assignment.subject}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-slate-400">المعلم:</span>
                                                <span className="text-slate-700">{assignment.teacher}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-slate-400">تاريخ التسليم:</span>
                                                <span className="text-slate-700">{assignment.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
                                        <button
                                            onClick={() => navigate(`/dashboard/parent/assignments/${assignment.id}`)}
                                            className="w-full md:w-auto px-8 py-3 bg-[#0f7a6c] hover:bg-[#0c6156] text-white rounded-xl font-bold transition-all shadow-sm"
                                        >
                                            عرض التفاصيل
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </>
            ) : null}
        </motion.div>
    );
}
