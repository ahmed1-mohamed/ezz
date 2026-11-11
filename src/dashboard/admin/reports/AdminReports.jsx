import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  CreditCard,
  FileText,
  Activity,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import AnalyticsChartSection from './components/AnalyticsChartSection';
import TeacherPerformanceRanking from './components/TeacherPerformanceRanking';

export default function AdminReports() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const quickLinks = useMemo(() => [
    {
      title: t('adminReports.viewEarnings', 'عرض الأرباح والمكاسب'),
      desc: t('adminReports.financialOverview', 'الملخص المالي ومؤشرات الدخل وأرباح المعلمين التراكمية والشهرية'),
      icon: DollarSign,
      path: '/dashboard/admin/earnings',
      badge: 'Financial',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    },
    {
      title: t('adminReports.viewPayments', 'عرض المدفوعات'),
      desc: t('adminReports.transactionsOverview', 'إدارة المعاملات المالية واشتراكات الباقات'),
      icon: CreditCard,
      path: '/dashboard/admin/payments',
      badge: 'Billing',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      title: t('adminReports.viewLogs', 'سجل الأنشطة والعمليات'),
      desc: t('adminReports.logsOverview', 'متابعة العمليات وسجل أنشطة مسؤولي النظام'),
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
            <span>{t('adminReports.platformHealth', 'التحليلات والتقارير')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {t('adminReports.title', 'تقارير المنصة ومؤشرات الأداء')}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-medium">
            {t('adminReports.description', 'متابعة مؤشرات الأداء، وسير العملية التعليمية، وتحليلات النشاط الزمني، وترتيب كفاءة المعلمين')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <TrendingUp size={14} className="text-[#00594C]" />
            <span>مؤشرات مباشرة</span>
          </span>
        </div>
      </div>
      <AnalyticsChartSection />
      <TeacherPerformanceRanking />
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
                className="group bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 hover:border-[#00594C]/30 dark:hover:border-emerald-500/30 transition-all hover:shadow-md flex flex-col justify-between h-44 cursor-pointer"
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
