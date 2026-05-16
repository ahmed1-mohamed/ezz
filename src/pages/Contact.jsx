import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ui/ContactForm.jsx'
import CTASection from '../components/ui/CTASection.jsx'

export default function Contact() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-[#EEF4F2]/50 font-sans overflow-hidden pt-20">
            <ContactForm />
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <CTASection />
            </div>
        </div>
    )
}
