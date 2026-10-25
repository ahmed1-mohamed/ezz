import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Globe, Menu, X, Sun, Moon } from 'lucide-react'
import { useRef, useEffect, useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button.jsx'
import Container from './Container.jsx'
import { setLanguage } from '../../i18n.js'
import { publicNavigation } from '@/shared/constants/publicNavigation.js'
import { useAuth } from '@/shared/context/useAuth.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
import { getCookie } from '@/shared/utils/cookieUtils.js'
import logoImg from '@/images/programs/NewLogo.webp'

const navItems = publicNavigation.map((item) => ({
    label: item.labelKey,
    to: item.path,
}))

export default memo(function AppNavbar() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const { user, logout, theme, toggleTheme } = useAuth()
    const hasToken = !!getCookie('access_token')
    const isAuthenticated = user && hasToken
    const isDarkMode = theme === 'dark' || (theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogoClick = useCallback((e) => {
        if (location.pathname === '/') {
            e.preventDefault()
            const hero = document.getElementById('hero-section')
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' })
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } else {
            e.preventDefault()
            navigate('/', { state: { scrollToHero: true } })
        }
    }, [location.pathname, navigate])

    const handleLanguageToggle = useCallback((e) => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar'
        setLanguage(newLang)
        const btn = e.currentTarget
        if (btn) {
            btn.style.transition = 'transform 0.6s ease'
            btn.style.transform = 'rotate(360deg)'
            setTimeout(() => {
                btn.style.transition = 'none'
                btn.style.transform = 'rotate(0deg)'
            }, 600)
        }
    }, [i18n.language])

    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), [])
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])

    return (
        <motion.header
            ref={navRef}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:bg-slate-950/95 dark:border-slate-800/60 dark:shadow-slate-950/50'
                : 'bg-white shadow-sm border-b border-slate-100/50 dark:bg-slate-950 dark:border-slate-900'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-14 sm:h-16 relative">
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group hover:opacity-90 transition-opacity duration-200"
                    >
                        <img
                            src={logoImg}
                            alt={t('appName', 'منارة العز')}
                            className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0"
                            width="36"
                            height="36"
                        />
                        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-600">
                            {t('appName', 'منارة العز')}
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-5 xl:gap-7">
                        <div className="flex items-center gap-1.5">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="inline-flex items-center justify-center h-9 w-9 xl:h-10 xl:w-10 rounded-full hover:bg-brand-500/10 text-brand-500 dark:text-emerald-400 dark:hover:bg-emerald-500/15 transition-all duration-200 hover:scale-105 cursor-pointer"
                                title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun size={19} strokeWidth={1.75} /> : <Moon size={19} strokeWidth={1.75} />}
                            </button>

                            <button
                                type="button"
                                onClick={handleLanguageToggle}
                                className="inline-flex items-center justify-center h-9 w-9 xl:h-10 xl:w-10 rounded-full hover:bg-brand-500/10 text-brand-500 dark:text-emerald-400 dark:hover:bg-emerald-500/15 transition-all duration-200 hover:scale-105 cursor-pointer"
                                title={t('language.toggle', 'تغيير اللغة')}
                                aria-label="Toggle language"
                            >
                                <Globe size={19} strokeWidth={1.75} />
                            </button>
                        </div>

                        <nav className="flex items-center gap-1" aria-label={t('public.nav.main', 'الملاحة الرئيسية')}>
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                            ? 'text-white bg-gradient-to-r from-brand-500 to-brand-700 shadow-md'
                                            : 'text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 hover:scale-105 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/10'
                                        }`
                                    }
                                >
                                    {t(item.label)}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/login">
                                    <Button
                                        variant="ghost"
                                        className="text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 transition-all duration-200 dark:text-slate-200 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/10"
                                    >
                                        {t('public.login', 'تسجيل الدخول')}
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 xl:px-6 py-2.5 xl:py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                                    >
                                        {t('public.joinUs', 'انضم إلينا')}
                                    </motion.button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    onClick={logout}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-semibold dark:hover:bg-red-950/30"
                                >
                                    {t('public.logout', 'تسجيل الخروج')}
                                </Button>
                                <Link to={getRedirectPath(user?.role)}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 xl:px-6 py-2.5 xl:py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                                    >
                                        {t('public.dashboard', 'لوحة التحكم')}
                                    </motion.button>
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-brand-500/10 text-brand-500 dark:text-emerald-400 dark:hover:bg-emerald-500/15 transition-all duration-200 hover:scale-105 cursor-pointer"
                            title={isDarkMode ? t('theme.light', 'الوضع النهاري') : t('theme.dark', 'الوضع الليلي')}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
                        </button>
                        <button
                            type="button"
                            onClick={handleLanguageToggle}
                            className="inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-brand-500/10 text-brand-500 dark:text-emerald-400 dark:hover:bg-emerald-500/15 transition-all duration-200 hover:scale-105 cursor-pointer"
                            title={t('language.toggle', 'تغيير اللغة')}
                            aria-label="Toggle language"
                        >
                            <Globe size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-brand-500/10 hover:text-brand-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 transition-all duration-200 cursor-pointer"
                            aria-label={isMobileMenuOpen ? t('public.nav.closeMenu', 'إغلاق القائمة') : t('public.nav.openMenu', 'فتح القائمة')}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute left-4 right-4 top-16 z-[999] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 dark:bg-slate-900/95 dark:border-slate-800 p-6 flex flex-col space-y-4 lg:hidden"
                        >
                            <nav className="flex flex-col space-y-2" aria-label={t('public.nav.mobile', 'قائمة الجوال')}>
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) =>
                                            `px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${isActive
                                                ? 'text-white bg-gradient-to-r from-brand-500 to-brand-700 shadow-md'
                                                : 'text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 dark:text-slate-200 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/10'
                                            }`
                                        }
                                    >
                                        {t(item.label)}
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                                {!isAuthenticated ? (
                                    <>
                                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button
                                                variant="ghost"
                                                className="w-full text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 dark:text-slate-200 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/10"
                                            >
                                                {t('public.login', 'تسجيل الدخول')}
                                            </Button>
                                        </Link>
                                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-center animate-none cursor-pointer"
                                            >
                                                {t('public.joinUs', 'انضم إلينا')}
                                            </motion.button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="ghost"
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 font-semibold"
                                        >
                                            {t('public.logout', 'تسجيل الخروج')}
                                        </Button>
                                        <Link to={getRedirectPath(user?.role)} onClick={() => setIsMobileMenuOpen(false)}>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-center animate-none cursor-pointer"
                                            >
                                                {t('public.dashboard', 'لوحة التحكم')}
                                            </motion.button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.header>
    )
})
