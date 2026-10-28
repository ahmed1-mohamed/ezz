import { useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { BookOpen, Users, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

export default function TeacherCourses() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n?.language?.startsWith('ar') ?? true;
    const [searchParams] = useSearchParams();
    const statusParam = searchParams.get('status') || 'all';
    const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

    const {
        data: responseData,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ['teacher-courses-groups', statusParam],
        queryFn: () => teacherGroupsApi.fetchGroupsByStatus(statusParam),
        staleTime: 0,
        refetchOnMount: 'always',
        refetchOnWindowFocus: true,
    });

    useEffect(() => {
        refetch();
    }, [statusParam, refetch]);

    const coursesList = useMemo(() => {
        let list = [];
        if (Array.isArray(responseData)) {
            list = responseData;
        } else if (Array.isArray(responseData?.data)) {
            list = responseData.data;
        } else if (Array.isArray(responseData?.data?.data)) {
            list = responseData.data.data;
        } else if (Array.isArray(responseData?.data?.groups)) {
            list = responseData.data.groups;
        } else if (Array.isArray(responseData?.groups)) {
            list = responseData.groups;
        }
        if (!Array.isArray(list)) return [];
        return list.map((g, idx) => {
            const name = typeof g.name === 'object' && g.name !== null
                ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
                : g.name || `${t('teacherCourses.group', 'مجموعة')} ${idx + 1}`;

            const curriculum = typeof g.curriculum === 'object' && g.curriculum !== null
                ? (isRtl ? g.curriculum.name?.ar || g.curriculum.name?.en : g.curriculum.name?.en || g.curriculum.name?.ar)
                : (g.curriculum?.name || g.curriculum || '-');

            const level = typeof g.level === 'object' && g.level !== null
                ? (isRtl ? g.level.name?.ar || g.level.name?.en || g.level.name : g.level.name?.en || g.level.name?.ar || g.level.name)
                : (g.level || '-');

            const studentsCount = Array.isArray(g.students) ? g.students.length : (g.currentStudentsCount ?? 0);

            return {
                id: g.id || g._id || `course-${idx}`,
                name,
                curriculum,
                level,
                studentsCount,
                status: g.status || 'active',
            };
        });
    }, [responseData, isRtl, t]);

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-12 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#00594C] text-white flex items-center justify-center shadow-xs shrink-0">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight">
                            {t('teacherCourses.title', 'المقررات والمجموعات التعليمية')}
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
                            {t('teacherCourses.description', 'استعراض البرامج والمناهج والمجموعات المسندة إليك')}
                        </p>
                    </div>
                </div>

                <Link
                    to="/dashboard/teacher/groups"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00483d] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all self-start sm:self-center cursor-pointer"
                >
                    <Layers size={16} />
                    <span>{t('teacherDashboard.viewAllGroups', 'عرض كل المجموعات')}</span>
                </Link>
            </div>

            {isLoading ? (
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/60 animate-pulse" />
                    ))}
                </div>
            ) : isError ? (
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
                    <p className="text-rose-500 font-bold text-sm">
                        {t('common.errorLoading', 'حدث خطأ أثناء تحميل المقررات')}
                    </p>
                    <button
                        onClick={() => refetch()}
                        className="px-4 py-2 rounded-xl bg-[#00594C] text-white text-xs font-bold"
                    >
                        {t('common.retry', 'إعادة المحاولة')}
                    </button>
                </div>
            ) : coursesList.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                        <BookOpen size={28} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white">
                        {t('teacherCourses.noCourses', 'لا توجد مقررات دراسية حالياً')}
                    </h3>
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-start text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-bold">
                                    <th className="pb-3 text-start">{t('teacherCourses.group', 'المجموعة')}</th>
                                    <th className="pb-3 text-start">{t('teacherCourses.curriculum', 'المنهج')}</th>
                                    <th className="pb-3 text-start">{t('teacherCourses.level', 'المستوى')}</th>
                                    <th className="pb-3 text-start">{t('teacherCourses.studentsCount', 'عدد الطلاب')}</th>
                                    <th className="pb-3 text-start">{t('teacherCourses.status', 'الحالة')}</th>
                                    <th className="pb-3 text-end">{t('teacherDashboard.actions', 'الإجراء')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-semibold text-slate-700 dark:text-slate-200">
                                {coursesList.map((course) => (
                                    <tr key={course.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                                        <td className="py-3.5 text-start font-bold text-slate-900 dark:text-white">
                                            {course.name}
                                        </td>
                                        <td className="py-3.5 text-start text-slate-600 dark:text-slate-300">
                                            {course.curriculum}
                                        </td>
                                        <td className="py-3.5 text-start text-slate-500 dark:text-slate-400">
                                            {course.level}
                                        </td>
                                        <td className="py-3.5 text-start">
                                            <div className="flex items-center gap-1 font-bold">
                                                <Users size={13} className="text-[#00594C] dark:text-emerald-400" />
                                                <span>{course.studentsCount}</span>
                                            </div>
                                        </td>
                                        <td className="py-3.5 text-start">
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                                                {course.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 text-end">
                                            <Link
                                                to={`/dashboard/teacher/groups`}
                                                className="inline-flex items-center gap-1 text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline cursor-pointer"
                                            >
                                                <span>{t('teacherGroups.viewDetails', 'عرض')}</span>
                                                <ChevronIcon size={12} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}