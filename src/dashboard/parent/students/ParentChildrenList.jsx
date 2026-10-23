import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChildDetailsView from '../components/child_details/ChildDetailsView';
import { parentApi } from '@/shared/services/api/parentApi';

export default function ParentChildrenList() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [isLoading, setIsLoading] = useState(true);
    const [childrenList, setChildrenList] = useState([]);

    const location = useLocation();

    const selectedChildId = location.state?.childId || null;
    const setSelectedChildId = (id) => {
        if (id) {
            navigate('.', { state: { ...location.state, childId: id }, replace: true });
        } else {
            const newState = { ...location.state };
            delete newState.childId;
            navigate('.', { state: newState, replace: true });
        }
    };

    useEffect(() => {
        let isMounted = true;
        const fetchChildren = async () => {
            setIsLoading(true);
            try {
                const res = await parentApi.fetchChildren();
                if (isMounted) {
                    const rawList = res?.success && Array.isArray(res.data) ? res.data : [];
                    const formatted = rawList.map((child, idx) => {
                        const id = child.id || child._id || child.student_id || `child-${idx}`;
                        const name = typeof child.name === 'object' && child.name !== null
                            ? (isRtl ? (child.name.ar || child.name.en) : (child.name.en || child.name.ar))
                            : (child.name || '-');
                        const joinDate = child.createdAt
                            ? new Date(child.createdAt).toLocaleDateString()
                            : (child.joinDate || '-');
                        const subject = typeof child.subject === 'object' && child.subject !== null
                            ? (isRtl ? child.subject.ar : child.subject.en)
                            : (child.subject || child.level || child.levelName || t('parent.childrenList.defaultSubject', 'القرآن الكريم'));

                        const totalClasses = Number(child.totalClasses || child.sessionsTotal || child.sessionsBalance || 12);
                        const usedClasses = Number(child.usedClasses || child.sessionsUsed || 0);
                        const remainingClasses = child.remainingClasses !== undefined
                            ? Number(child.remainingClasses)
                            : Math.max(0, totalClasses - usedClasses);

                        return {
                            ...child,
                            id,
                            name,
                            joinDate,
                            subject,
                            totalClasses: totalClasses > 0 ? totalClasses : 1,
                            usedClasses,
                            remainingClasses,
                            statusColor: remainingClasses > 5 ? 'bg-emerald-500' : remainingClasses > 0 ? 'bg-amber-500' : 'bg-red-500',
                            textColor: remainingClasses > 5 ? 'text-emerald-500' : remainingClasses > 0 ? 'text-amber-500' : 'text-red-500'
                        };
                    });
                    setChildrenList(formatted);
                }
            } catch (error) {
                console.error("Failed to fetch children", error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchChildren();
        return () => { isMounted = false; };
    }, [i18n.language, isRtl, t]);

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

    if (selectedChildId) {
        return (
            <div className="p-4 md:p-8 max-w-7xl mx-auto font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
                <ChildDetailsView
                    childId={selectedChildId}
                    onBack={() => setSelectedChildId(null)}
                />
            </div>
        );
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-start">
                    <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.childrenList.title', 'قائمة الأبناء')}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.childrenList.subtitle', 'متابعة أداء واشتراكات الأبناء')}</p>
                </div>

                <button
                    onClick={() => navigate('/dashboard/parent/students/add')}
                    className="flex items-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm text-sm"
                >
                    <Plus className="w-4 h-4" />
                    <span>{t('parent.childrenList.addNew', 'إضافة ابن جديد')}</span>
                </button>
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0f7a6c]"></div>
                </div>
            ) : childrenList.length === 0 ? (
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-100 dark:border-slate-700 shadow-sm">
                    <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
                        {t('parent.childrenList.empty', 'لا يوجد أبناء مسجلين حالياً.')}
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {childrenList.map((child) => (
                        <motion.div variants={itemVariants} key={child.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-md hover:border-slate-200 dark:hover:border-slate-600">
                            <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto text-center md:text-start">
                                <div className="w-48 text-center md:text-start">
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{child.name}</h3>
                                    <div className="text-xs text-slate-400 mt-1">{t('parent.dashboard.children.joinDate', 'تاريخ الانضمام')}: {child.joinDate}</div>
                                </div>

                                <div className="text-center w-32">
                                    <div className="text-xs text-slate-400 dark:text-slate-500 mb-1">{t('parent.childrenList.subject', 'المادة')}</div>
                                    <div className="font-bold text-slate-800 dark:text-slate-100">{child.subject}</div>
                                </div>

                                <div className="w-full md:w-64">
                                    <div className="text-center mb-1">
                                        <span className="text-xs text-slate-400 dark:text-slate-500">{t('parent.childrenList.classes', 'الحصص')}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-xs mb-2">
                                        <span className="text-slate-500 dark:text-slate-400">{child.usedClasses} {t('parent.childrenList.used', 'مستخدمة')}</span>
                                        <span className="text-slate-400 dark:text-slate-600">.</span>
                                        <span className={`font-bold ${child.textColor}`}>{child.remainingClasses} {t('parent.childrenList.remaining', 'متبقية')}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden flex" dir={isRtl ? 'rtl' : 'ltr'}>
                                        <div
                                            className={`${child.statusColor} h-full rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${Math.min(100, (child.remainingClasses / child.totalClasses) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
                                <button
                                    onClick={() => navigate('/dashboard/parent/packages')}
                                    className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-sm text-sm"
                                >
                                    {t('parent.childrenList.package', 'الباقة')}
                                </button>
                                <button
                                    onClick={() => setSelectedChildId(child.id)}
                                    className="px-8 py-3 bg-[#0f7a6c] hover:bg-[#0c6156] text-white rounded-xl font-bold transition-all shadow-sm text-sm"
                                >
                                    {t('parent.childrenList.details', 'التفاصيل')}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
