import ContactForm from '@/shared/components/ContactForm.jsx'
import CTASection from '@/shared/components/CTASection.jsx'
import ContactTopHero from '@/shared/components/ContactTopHero.jsx'
import SEOHead from '@/shared/components/SEOHead.jsx'
import { useTranslation } from 'react-i18next'

export default function Contact() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    return (
        <main className="min-h-screen bg-[#EEF4F2]/50 font-sans overflow-hidden pt-20">
            <SEOHead 
                title={isRtl ? 'اتصل بنا' : 'Contact Us'} 
                description={isRtl ? 'تواصل مع فريق منارة العز للحصول على المساعدة والاستفسارات.' : 'Get in touch with the Manarat Al-Ezz team for support and inquiries.'}
            />
            <ContactTopHero />
            <ContactForm />
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <CTASection />
            </div>
        </main>
    )
}
