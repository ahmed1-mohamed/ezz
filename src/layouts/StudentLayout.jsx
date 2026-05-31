import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Calendar,
  Video,
  PlayCircle,
  Users,
  BookOpen,
  Star,
  ClipboardList,
  Award,
  Library,
  Globe,
  User,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../context/useAuth';

const navItems = [
  { path: '/dashboard/student', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/student/schedule', icon: Calendar, transKey: 'schedule' },
  { path: '/dashboard/student/live', icon: Video, transKey: 'liveSession' },
  { path: '/dashboard/student/recorded', icon: PlayCircle, transKey: 'recordedSessions' },
  { path: '/dashboard/student/teachers', icon: Users, transKey: 'teachers' },
  { path: '/dashboard/student/assignments', icon: BookOpen, transKey: 'assignments' },
  { path: '/dashboard/student/grades', icon: Star, transKey: 'grades' },
  { path: '/dashboard/student/attendance', icon: ClipboardList, transKey: 'attendance' },
  { path: '/dashboard/student/achievements', icon: Award, transKey: 'achievements' },
  { path: '/dashboard/student/materials', icon: Library, transKey: 'materials' },
  { path: '/', icon: Globe, transKey: 'website' },
  { path: '/dashboard/student/profile', icon: User, transKey: 'profile' },
  { path: '/dashboard/student/settings', icon: Settings, transKey: 'settings' },
];

export default function StudentLayout() {
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
          <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-base">{t('studentDashboard.header.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs">{t('studentDashboard.header.subtitle')}</p>
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
        fixed lg:sticky top-0 start-0 h-screen z-40
        w-60 bg-white dark:bg-slate-900 border-e border-slate-200 dark:border-slate-800
        transition-transform duration-300 ease-in-out
        flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full lg:!translate-x-0'}
      `}>
        <div className="p-6 text-center border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="w-10 h-10 bg-[#0f7a6c] rounded-xl flex items-center justify-center mx-auto mb-2">
            <BookOpen size={20} className="text-white" />
          </div>
          <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-base">{t('studentDashboard.header.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{t('studentDashboard.header.subtitle')}</p>
        </div>

        <div className="p-4 shrink-0">
          <div className="bg-[#0f7a6c] text-white rounded-xl p-3 flex items-center gap-3 shadow-md">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <User size={16} className="text-white" />
            </div>
            <div className="text-start">
              <h3 className="font-semibold text-sm leading-tight">{t('studentDashboard.user.name')}</h3>
              <p className="text-xs opacity-80">{t('studentDashboard.user.role')}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
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
              <span className="text-sm">{t(`studentDashboard.nav.${item.transKey}`)}</span>
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
