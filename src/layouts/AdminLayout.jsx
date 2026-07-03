import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Users,
  GraduationCap,
  Book,
  Award,
  Heart,
  Layers,
  Globe,
  Calendar,
  Clock,
  Tag,
  CreditCard,
  TrendingUp,
  Gift,
  Edit3,
  BookMarked,
  Percent,
  BarChart2,
  Activity,
  MessageSquare,
  Menu,
  X,
  LogOut,
  Settings,
} from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth'

const navItems = [
  { path: '/dashboard/admin', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/admin/managers', icon: Users, transKey: 'managers' },
  { path: '/dashboard/admin/teachers', icon: GraduationCap, transKey: 'teachers' },
  { path: '/dashboard/admin/students', icon: Book, transKey: 'students' },
  { path: '/dashboard/admin/student-levels', icon: Award, transKey: 'studentLevels' },
  { path: '/dashboard/admin/parents', icon: Heart, transKey: 'parents' },
  { path: '/dashboard/admin/groups', icon: Layers, transKey: 'groups' },
  { path: '/dashboard/admin/website', icon: Globe, transKey: 'website' },
  { path: '/dashboard/admin/sessions', icon: Calendar, transKey: 'sessions' },
  { path: '/dashboard/admin/schedule', icon: Clock, transKey: 'studySchedule' },
  { path: '/dashboard/admin/packages', icon: Tag, transKey: 'packages' },
  { path: '/dashboard/admin/payments', icon: CreditCard, transKey: 'payments' },
  { path: '/dashboard/admin/earnings', icon: TrendingUp, transKey: 'earnings' },
  { path: '/dashboard/admin/rewards', icon: Gift, transKey: 'rewards' },
  { path: '/dashboard/admin/assignments', icon: Edit3, transKey: 'assignments' },
  { path: '/dashboard/admin/curriculums', icon: BookMarked, transKey: 'curriculums' },
  { path: '/dashboard/admin/coupons', icon: Percent, transKey: 'discountCodes' },
  { path: '/dashboard/admin/reports', icon: BarChart2, transKey: 'reports' },
  { path: '/dashboard/admin/logs', icon: Activity, transKey: 'activities' },
  { path: '/dashboard/admin/messages', icon: MessageSquare, transKey: 'messages' },
  { path: '/', icon: Globe, transKey: 'mainWebsite' },
  { path: '/dashboard/admin/settings', icon: Settings, transKey: 'settings' },
]

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')



  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getDisplayName = (nameVal) => {
    if (!nameVal) return '';
    if (typeof nameVal === 'string') return nameVal;
    if (typeof nameVal === 'object') {
      return nameVal.ar || nameVal.en || Object.values(nameVal)[0] || '';
    }
    return String(nameVal);
  }

  const resolvedName = getDisplayName(user?.name);
  const userInitial = resolvedName ? resolvedName.trim().charAt(0) : 'أ'
  const displayRole = user?.role === 'super_admin' ? t('adminDashboard.adminRole', 'مشرف عام') : t('auth.admin', 'مسؤول')

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f3f7f6] dark:bg-slate-900 transition-colors duration-300 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>

      <header className="lg:hidden w-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 h-16 px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white">
            <BookMarked size={20} />
          </div>
          <div className="text-start">
            <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-sm leading-tight">
              {t('adminDashboard.header.title', 'منارة العز')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-[10px]">
              {t('adminDashboard.header.subtitle', 'لوحة الإدارة')}
            </p>
          </div>
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
        w-64 bg-white dark:bg-slate-950 border-e border-slate-200 dark:border-slate-800
        transition-transform duration-300 ease-in-out
        flex flex-col shrink-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full lg:!translate-x-0'}
      `}>
        <div className="p-5 flex items-center gap-3 border-b border-slate-100 dark:border-slate-900 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#0f7a6c] flex items-center justify-center text-white shadow-sm shrink-0">
            <BookMarked size={22} />
          </div>
          <div className="text-start">
            <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-base leading-tight">
              {t('adminDashboard.header.title', 'منارة العز')}
            </h2>
            <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">
              {t('adminDashboard.header.subtitle', 'لوحة الإدارة')}
            </p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thin">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `
                flex  items-center px-4 py-2.5 rounded-xl transition-all duration-200 group
                ${isActive
                  ? 'bg-[#0f7a6c] text-white font-semibold shadow-md shadow-[#0f7a6c]/10'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#0f7a6c] dark:hover:text-emerald-400 hover:ps-5'}
              `}
            >
              <item.icon size={18} className="me-3 transition-transform group-hover:scale-110" />
              <span className="text-sm">{t(`adminDashboard.nav.${item.transKey}`, item.transKey === 'mainWebsite' ? 'الموقع الرئيسي' : '')}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-900 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white rounded-xl transition-all font-medium group"
          >
            <LogOut size={18} className="me-2 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">{t('dashboard.logout', 'تسجيل الخروج')}</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">

        <header className="hidden lg:flex h-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 items-center justify-between px-8 sticky top-0 z-20 shrink-0">

          <div className="text-start">
            <h1 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
              {t('adminDashboard.panelTitle', 'لوحة التحكم الرئيسية')}
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {t('adminDashboard.panelSubtitle', 'منارة العز أكاديمي - لوحة الإدارة')}
            </p>
          </div>


          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#f3f7f6] dark:bg-slate-900 text-[#0f7a6c] dark:text-emerald-400 hover:bg-[#0f7a6c] hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-all hover:scale-105 active:scale-95 duration-200"
            >
              <span>{t('adminDashboard.nav.mainWebsite', 'الموقع الرئيسي')}</span>
              <Globe size={16} />
            </Link>

            <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800" />

            <div className="flex items-center gap-3">
              <div className="text-end hidden xl:block">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {resolvedName || t('adminDashboard.adminName', 'أحمد الإداري')}
                </h4>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                  {displayRole}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                {userInitial}
              </div>
            </div>

          </div>

        </header>

        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}