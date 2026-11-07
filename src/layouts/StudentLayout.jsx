import { useState, Suspense } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Calendar,
  Video,
  Users,
  FileText,
  Star,
  FileCheck,
  Trophy,
  BookOpen,
  Globe,
  User,
  Menu,
  X,
  LogOut,
} from 'lucide-react'
import { useAuth } from '@/shared/context/useAuth'

const navItems = [
  { path: '/dashboard/student', icon: Home, transKey: 'home', end: true },
  { path: '/dashboard/student/schedule', icon: Calendar, transKey: 'schedule' },
  { path: '/dashboard/student/live', icon: Video, transKey: 'liveSession' },
  { path: '/dashboard/student/teachers', icon: Users, transKey: 'teachers' },
  { path: '/dashboard/student/assignments', icon: FileText, transKey: 'assignments' },
  { path: '/dashboard/student/grades', icon: Star, transKey: 'grades' },
  { path: '/dashboard/student/attendance', icon: FileCheck, transKey: 'attendance' },
  { path: '/dashboard/student/achievements', icon: Trophy, transKey: 'achievements' },
  { path: '/dashboard/student/materials', icon: BookOpen, transKey: 'materials' },
  { path: '/dashboard/student/profile', icon: User, transKey: 'profile' },
  { path: '/', icon: Globe, transKey: 'mainWebsite' },
]

export default function StudentLayout() {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const [prevLocationKey, setPrevLocationKey] = useState(location.key)
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key)
    setIsMobileMenuOpen(false)
  }
  const displayName = (() => {
    if (!user) return t('studentDashboard.user.name', isRtl ? 'طالب' : 'Student')
    if (typeof user.name === 'object' && user.name !== null) {
      return isRtl ? (user.name.ar || user.name.en || '') : (user.name.en || user.name.ar || '')
    }
    if (user.nameAr || user.nameEn) {
      return isRtl ? (user.nameAr || user.nameEn || user.name) : (user.nameEn || user.nameAr || user.name)
    }
    return user.name || t('studentDashboard.user.name', isRtl ? 'طالب' : 'Student')
  })()
  const initialLetter = displayName ? displayName.trim().charAt(0) : (isRtl ? 'ط' : 'S')
  const userImage = user?.image || user?.avatar || user?.photoUrl || user?.photo || null
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f3f7f6] dark:bg-slate-900 transition-colors duration-300 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="lg:hidden w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0f7a6c] flex items-center justify-center text-white shrink-0">
              <BookOpen size={16} />
            </div>
            <div className="text-start">
              <h2 className="text-[#0f7a6c] dark:text-emerald-400 font-bold text-sm leading-tight">
                {t('studentDashboard.header.title', 'منارة العز')}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/dashboard/student/profile" className="flex items-center gap-2 p-1 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
              {userImage ? (
                <img src={userImage} alt={displayName} className="w-full h-full object-cover" />
              ) : (
                <span>{initialLetter}</span>
              )}
            </div>
          </Link>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <aside
        className={`
          fixed lg:sticky top-0 start-0 h-screen z-40
          w-64 bg-white dark:bg-slate-950 border-e border-slate-200 dark:border-slate-800
          transition-transform duration-300 ease-in-out
          flex flex-col justify-between shrink-0
          ${isMobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
        `}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-5 sm:p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 shrink-0">
            <Link to="/dashboard/student" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0f7a6c] text-white flex items-center justify-center shadow-xs shrink-0">
                <BookOpen size={20} />
              </div>
              <div className="text-start">
                <h1 className="text-base font-extrabold text-[#0f7a6c] dark:text-emerald-400 leading-tight">
                  {t('studentDashboard.header.title', 'منارة العز')}
                </h1>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
                  {t('studentDashboard.header.subtitle', 'منصة الطالب')}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thin">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 group
                  ${isActive
                    ? 'bg-[#0f7a6c] text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-[#0f7a6c] dark:hover:text-emerald-400 font-medium'
                  }
                `}
              >
                <item.icon size={18} className="shrink-0 transition-transform group-hover:scale-110" />
                <span className="truncate">{item.transKey === 'mainWebsite' ? t('common.mainWebsite', 'الموقع الرئيسي') : t(`studentDashboard.nav.${item.transKey}`)}</span>
              </NavLink>
            ))}
          </nav>
          <div className="p-4 space-y-3 shrink-0 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <Link
              to="/dashboard/student/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/40 text-[#0f7a6c] dark:text-emerald-400 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-sm shadow-xs shrink-0 overflow-hidden">
                {userImage ? (
                  <img src={userImage} alt={displayName} className="w-full h-full object-cover" />
                ) : (
                  <span>{initialLetter}</span>
                )}
              </div>
              <div className="min-w-0 flex-1 text-start truncate">
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-[#0f7a6c] dark:group-hover:text-emerald-400 transition-colors">
                  {displayName}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate">
                  {t('studentDashboard.user.role', 'طالب')}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer group"
            >
              <LogOut size={16} className="transition-transform group-hover:-translate-x-1 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{t('common.logout', 'تسجيل الخروج')}</span>
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden min-h-screen relative">
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-24 min-h-[400px]">
              <div className="w-8 h-8 rounded-full border-2 border-[#0f7a6c] border-t-transparent animate-spin" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
