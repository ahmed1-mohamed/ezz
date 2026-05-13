import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Globe, Menu, X } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import { setLanguage } from '../../i18n.js'
import { publicNavigation } from '../../constants/publicNavigation.js'

export default function AppNavbar() {
    const { t, i18n } = useTranslation()
    const globeRef = useRef(null)
    const navRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLanguageToggle = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar'
        setLanguage(newLang)

        if (globeRef.current) {
            globeRef.current.style.transform = 'rotate(360deg)'
            setTimeout(() => {
                globeRef.current.style.transform = 'rotate(0deg)'
            }, 600)
        }
    }

    const navItems = publicNavigation.map((item) => ({
        label: item.labelKey,
        to: item.path,
    }))

    return (
        <motion.header
            ref={navRef}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
                : 'bg-white shadow-sm border-b border-slate-100/50'
                }`}
        >
            <Container>
                <div
                    dir={i18n.dir()}
                    className="flex items-center justify-between h-14 sm:h-16"
                >
                    <Link
                        to="/"
                        className="flex-shrink-0 text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
                    >
                        {t('appName')}
                    </Link>

                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <button
                            onClick={handleLanguageToggle}
                            ref={globeRef}
                            className="inline-flex items-center justify-center h-9 w-9 xl:h-10 xl:w-10 rounded-full hover:bg-brand-500/10 text-brand-500 transition-all duration-200 hover:scale-105"
                            title={t('language.english')}
                            aria-label="Toggle language"
                        >
                            <Globe size={20} strokeWidth={1.5} />
                        </button>

                        <nav className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                            ? 'text-white bg-gradient-to-r from-brand-500 to-brand-700 shadow-md'
                                            : 'text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 hover:scale-105'
                                        }`
                                    }
                                >
                                    {t(item.label)}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex items-center space-x-3">
                        <Link to="/login">
                            <Button
                                variant="ghost"
                                className="text-slate-700 hover:text-brand-500 hover:bg-brand-500/5 transition-all duration-200"
                            >
                                {t('public.login')}
                            </Button>
                        </Link>
                        <Link to="/login">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 xl:px-6 py-2.5 xl:py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                {t('public.register')}
                            </motion.button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden inline-flex items-center justify-center h-9 w-9 xl:h-10 xl:w-10 rounded-lg text-slate-700 hover:bg-brand-500/10 hover:text-brand-500 transition-all duration-200"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4"
                        >
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={handleLanguageToggle}
                                    ref={globeRef}
                                    className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-brand-500/10 text-brand-500 transition-all duration-200 self-center"
                                >
                                    <Globe size={20} strokeWidth={1.5} />
                                </button>

                                <nav className="flex flex-col space-y-2">
                                    {navItems.map((item) => (
                                        <NavLink
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                                    ? 'text-white bg-gradient-to-r from-brand-500 to-brand-700 shadow-md'
                                                    : 'text-slate-700 hover:text-brand-500 hover:bg-brand-500/5'
                                                }`
                                            }
                                        >
                                            {t(item.label)}
                                        </NavLink>
                                    ))}
                                </nav>

                                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button
                                            variant="ghost"
                                            className="w-full text-slate-700 hover:text-brand-500 hover:bg-brand-500/5"
                                        >
                                            {t('public.login')}
                                        </Button>
                                    </Link>
                                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
                                        >
                                            {t('public.register')}
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.header>
    )
}
