import ContactForm from '@/shared/components/ContactForm.jsx'
import CTASection from '@/shared/components/CTASection.jsx'
import ContactTopHero from '@/shared/components/ContactTopHero.jsx'

export default function Contact() {

    return (
        <div className="min-h-screen bg-[#EEF4F2]/50 font-sans overflow-hidden pt-20">
            <ContactTopHero />
            <ContactForm />
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <CTASection />
            </div>
        </div>
    )
}
