import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wallet, Receipt, CreditCard } from 'lucide-react';

export default function TeacherFinanceNavTabs() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const isEarnings = currentPath.endsWith('/earnings');
  const isPayouts = currentPath.endsWith('/payouts') || currentPath.endsWith('/withdrawals');
  const isMethods = currentPath.endsWith('/payment-methods');
  const tabs = [
    {
      id: 'earnings',
      path: '/dashboard/teacher/earnings',
      label: t('teacher.earnings.tabs.earnings', 'الأرباح'),
      icon: Wallet,
      isActive: isEarnings,
    },
    {
      id: 'payouts',
      path: '/dashboard/teacher/payouts',
      label: t('teacher.earnings.tabs.payouts', 'إثباتات الدفع'),
      icon: Receipt,
      isActive: isPayouts,
    },
    {
      id: 'methods',
      path: '/dashboard/teacher/payment-methods',
      label: t('teacher.earnings.tabs.methods', 'طرق الدفع'),
      icon: CreditCard,
      isActive: isMethods,
    },
  ];
  return (
    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <Link
            key={tab.id}
            to={tab.path}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              tab.isActive
                ? 'bg-[#005953] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Icon size={18} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
