import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  Video,
  Star,
  DollarSign,
  CreditCard,
  FileText,
  Activity,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';

export default function AdminReports() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const { data: statsRes, isLoading } = useQuery({
    queryKey: ['admin-reports-stats'],
    queryFn: () => dashboardApi.fetchStatistics(),
    staleTime: 5 * 60 * 1000,
  });

  const statsData = useMemo(() => {
    const apiData = statsRes?.data?.data ?? statsRes?.data ?? {};
    return apiData?.statistics ?? apiData?.stats ?? apiData ?? {};
  }, [statsRes]);

  const metrics = useMemo(() => [
    {
      title: t('adminReports.totalStudents', 'إجمالي الطلاب'),
      value: statsData.students ?? statsData.totalStudents ?? '0',
      icon: Users,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900/40',
    },
    {
      title: t('adminReports.totalTeachers', 'إجمالي المعلمين'),
      value: statsData.teachers ?? statsData.totalTeachers ?? '0',
      icon: GraduationCap,
      color: 'text-[#00594C] dark:text-emerald-400',
      bg: 'bg-[#e8f7f3] dark:bg-emerald-950/40',
      border: 'border-[#00594C]/10 dark:border-emerald-900/40',
    },
    {
      title: t('adminReports.totalParents', 'أولياء الأمور'),
      value: statsData.parents ?? statsData.totalParents ?? '0',
      icon: UserCheck,
      color: 'text-indigo-600 dark:text-indigo-400',
      bg: 'bg-indigo-50 dark:bg-indigo-950/40',
      border: 'border-indigo-100 dark:border-indigo-900/40',
    },
    {
      title: t('adminReports.totalGroups', 'المجموعات الدراسية'),
      value: statsData.groups ?? statsData.totalGroups ?? statsData.classes ?? '0',
      icon: BookOpen,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      border: 'border-amber-100 dark:border-amber-900/40',
    },
    {
      title: t('adminReports.activeSessions', 'الحصص النشطة اليوم'),
      value: statsData.todayActiveSessions ?? statsData.activeSessionsToday ?? statsData.activeSessions ?? '0',
      icon: Video,
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/40',
      border: 'border-rose-100 dark:border-rose-900/40',
    },
    {
      title: t('adminReports.rating', 'تقييم المنصة العام'),
      value: statsData.platformRating ?? statsData.rating ?? '5.0',
      icon: Star,
      color: 'text-yellow-500 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-950/40',
      border: 'border-yellow-100 dark:border-yellow-900/40',
    },
  ], [statsData, t]);

  const quickLinks = useMemo(() => [
    {
      title: t('adminReports.viewEarnings', 'عرض الأرباح'),
      desc: t('adminReports.financialOverview', 'الملخص المالي ومؤشرات الدخل'),
      icon: DollarSign,
      path: '/dashboard/admin/earnings',
      badge: 'Financial',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    },
    {
      title: t('adminReports.viewPayments', 'عرض المدفوعات'),
      desc: t('adminReports.transactionsOverview', 'إدارة المعاملات والاشتراكات'),
      icon: CreditCard,
      path: '/dashboard/admin/payments',
      badge: 'Billing',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      title: t('adminReports.viewLogs', 'سجل الأنشطة'),
      desc: t('adminReports.logsOverview', 'متابعة العمليات وسجل مديري النظام'),
      icon: FileText,
      path: '/dashboard/admin/logs',
      badge: 'Audit',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
    },
  ], [t]);

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 mb-3">
            <Activity size={14} />
            <span>{t('adminReports.platformHealth', 'أداء المنصة')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {t('adminReports.title', 'تقارير المنصة ومؤشرات الأداء')}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-medium">
            {t('adminReports.description', 'متابعة مؤشرات الأداء، وسير العملية التعليمية، والإحصائيات الشاملة')}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <TrendingUp size={14} className="text-[#00594C]" />
            <span>Live Data</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 animate-pulse"
              />
            ))
          : metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border ${m.border} flex items-center justify-between gap-4 transition-all hover:shadow-md`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 block">
                      {m.title}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white block">
                      {m.value}
                    </span>
                  </div>
                  <div className={`p-4 rounded-2xl ${m.bg} ${m.color}`}>
                    <Icon size={26} />
                  </div>
                </div>
              );
            })}
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-black text-slate-800 dark:text-white">
          {t('adminReports.financialOverview', 'التقارير المتخصصة وسجلات النظام')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quickLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link
                key={idx}
                to={link.path}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 hover:border-[#00594C]/30 dark:hover:border-emerald-500/30 transition-all hover:shadow-md flex flex-col justify-between h-44"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl ${link.bg} ${link.color}`}>
                    <Icon size={22} />
                  </div>
                  <span className="p-2 rounded-xl text-slate-400 group-hover:text-[#00594C] dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-[#00594C] dark:group-hover:text-emerald-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {link.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
