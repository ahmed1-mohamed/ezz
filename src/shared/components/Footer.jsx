/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import api from '@/shared/services/api/axiosConfig'

export default function Footer() {
    const { t } = useTranslation()
    const [contactData, setContactData] = useState(null)

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await api.get('/api/v1/contact-us/public')
                if (response.data && response.data.data) {
                    setContactData(response.data.data)
                } else if (response.data) {
                    setContactData(response.data)
                }
            } catch (error) {
                console.error("Failed to fetch contact data", error)
            }
        }
        fetchContactData()
    }, [])

    const email = contactData?.email || "info@manaratezz.edu.sa"
    const phone = contactData?.phone || "+0201012345678"
    const whatsapp = contactData?.whatsapp || "+0201012345678"
    const policyLinks = [
        { label: t('public.footer.privacy', 'سياسة الخصوصية'), href: '/privacy' },
        { label: t('public.footer.terms', 'الشروط والأحكام'), href: '/terms' },
        { label: t('public.footer.refund', 'سياسة الاسترجاع'), href: '/refund' },
        { label: t('public.footer.support', 'الدعم الفني'), href: '/support' },
    ]
    const quickLinks = [
        { label: t('public.nav.aboutUs'), href: '/about' },
        { label: t('public.nav.courses'), href: '/courses' },
        { label: t('public.nav.contactUs'), href: '/contact' },
    ]

    return (
        <footer className="bg-white text-slate-900 border-t border-slate-200">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#00695C]">{t('public.footer.brand', 'أكاديمية منارة العز')}</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {t('public.footer.description', 'نقدم محتوى تعليمي متخصص لغرس القيم وبناء جيل متسلح بالعلم والإيمان.')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-[#00695C]">{t('public.footer.policies', 'السياسات')}</h2>
                        <nav aria-label={t('public.footer.policies', 'السياسات')}>
                            <ul className="space-y-3">
                                {policyLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.href} className="text-gray-700 hover:text-[#00695C] transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-[#00695C]">{t('public.footer.quickLinks', 'روابط سريعة')}</h2>
                        <nav aria-label={t('public.footer.quickLinks', 'روابط سريعة')}>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/curriculums" className="text-gray-700 hover:text-[#00695C] transition-colors">{t('public.nav.curriculums', 'المناهج')}</Link>
                                </li>
                                <li>
                                    <Link to="/pricing" className="text-gray-700 hover:text-[#00695C] transition-colors">{t('public.nav.pricing', 'الأسعار')}</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-gray-700 hover:text-[#00695C] transition-colors">{t('public.nav.aboutUs', 'من نحن')}</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-gray-700 hover:text-[#00695C] transition-colors">{t('public.nav.contactUs', 'تواصل معنا')}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-[#00695C]">{t('public.contact.title', 'تواصل معنا')}</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-[#735C00]" />
                                <a href={`mailto:${email}`} dir="ltr" className="text-gray-700 hover:text-[#00695C] transition-colors">{email}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-[#735C00]" />
                                <a href={`tel:${phone}`} dir="ltr" className="text-gray-700 hover:text-[#00695C] transition-colors">{phone}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#735C00]">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <a href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" dir="ltr" className="text-gray-700 hover:text-[#00695C] transition-colors">{whatsapp}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200 py-4">
                <p className="text-center text-gray-500 text-sm">
                    {t('public.footer.copyright', 'جميع الحقوق محفوظة © 2026 أكاديمية منارة العز')}
                </p>
            </div>
        </footer>
    )
}
