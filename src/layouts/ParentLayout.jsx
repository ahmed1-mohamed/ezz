import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Users,
  Calendar,
  CheckSquare,
  BarChart2,
  Star,
  BookOpen,
  MessageSquare,
  Globe,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth';

const navItems = [
  { path: '/dashboard/parent', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/parent/children', icon: Users, transKey: 'children' },
  { path: '/dashboard/parent/schedule', icon: Calendar, transKey: 'schedule' },
  { path: '/dashboard/parent/attendance', icon: CheckSquare, transKey: 'attendance' },
  { path: '/dashboard/parent/reports', icon: BarChart2, transKey: 'reports' },
  { path: '/dashboard/parent/ratings', icon: Star, transKey: 'ratings' },
  { path: '/dashboard/parent/assignments', icon: BookOpen, transKey: 'assignments' },
  { path: '/dashboard/parent/complaints', icon: MessageSquare, transKey: 'complaints' },
  { path: '/', icon: Globe, transKey: 'website' },
  { path: '/dashboard/parent/settings', icon: Settings, transKey: 'settings' },
];

export default function ParentLayout() {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f3f7f6] dark:bg-slate-900 transition-colors duration-300 font-sans">

      <header className="lg:hidden w-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 h-16 px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
        <div className="text-start">
          <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-base">{t('parentDashboard.header.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs">{t('parentDashboard.header.subtitle')}</p>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed lg:sticky top-0 h-screen z-40
        w-60 bg-white dark:bg-slate-900 border-e border-slate-200 dark:border-slate-800
        transition-transform duration-300 ease-in-out
        flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full lg:!translate-x-0'}
      `}>
        <div className="p-6 text-center border-b border-slate-100 dark:border-slate-800 shrink-0">
          <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-lg mb-1">{t('parentDashboard.header.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs">{t('parentDashboard.header.subtitle')}</p>
        </div>

        <div className="p-4 shrink-0">
          <Link to="/dashboard/parent" className="bg-[#0f7a6c] text-white rounded-xl p-3 flex flex-col items-center shadow-md cursor-pointer hover:bg-[#0c6156] transition-transform hover:scale-[1.02] active:scale-95 block">
            <h3 className="font-semibold text-base">{t('parentDashboard.user.name')}</h3>
            <p className="text-xs opacity-80 mt-0.5">{t('parentDashboard.user.role')}</p>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `
                flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group
                ${isActive
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 font-bold border-s-4 border-[#0f7a6c] dark:border-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#0f7a6c] dark:hover:text-emerald-400 hover:ps-5'}
              `}
            >
              <item.icon size={18} className="me-3 transition-transform group-hover:scale-110" />
              <span className="text-sm">{t(`parentDashboard.nav.${item.transKey}`)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800 shrink-0">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center px-4 py-2.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white rounded-lg transition-all font-medium group"
          >
            <LogOut size={18} className="me-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">{t('dashboard.logout')}</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden min-h-screen relative">
        <Outlet />
      </main>
    </div>
  );
}
