

import AboutHero from '@/shared/components/AboutHero.jsx'
import AboutFeatures from '@/shared/components/AboutFeatures.jsx'
import AboutVisionMission from '@/shared/components/AboutVisionMission.jsx'
import AboutCoreValues from '@/shared/components/AboutCoreValues.jsx'
import SEOHead from '@/shared/components/SEOHead.jsx'
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'


    return (
        <main className="bg-[#EEF4F2]/30 min-h-screen pb-20 overflow-hidden font-sans">
            <SEOHead 
                title={isRtl ? 'عن الأكاديمية' : 'About Us'} 
                description={isRtl ? 'تعرف على رؤيتنا ورسالتنا في منارة العز، وتعرف على قيمنا الأساسية.' : 'Learn about our vision and mission at Manarat Al-Ezz, and discover our core values.'}
            />
            <AboutHero />
            <AboutFeatures />
            <AboutVisionMission />
            <AboutCoreValues />
        </main>
    )
}
