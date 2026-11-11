import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layers, Receipt } from 'lucide-react';

export default function ParentPackageNavTabs() {
  const { t } = useTranslation();

  const tabs = [
    {
      to: '/dashboard/parent/packages',
      icon: Layers,
      label: t('parentPackages.tabs.availablePackages', 'الباقات المتاحة'),
      end: true,
    },
    {
      to: '/dashboard/parent/subscriptions',
      icon: Receipt,
      label: t('parentPackages.tabs.subscriptionsHistory', 'سجل الدفع والاشتراكات'),
      end: false,
    },
  ];

  return (
    <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs w-fit">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => `
              flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer
              ${
                isActive
                  ? 'bg-[#0f7a6c] text-white shadow-md shadow-[#0f7a6c]/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }
            `}
          >
            <Icon size={16} />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

