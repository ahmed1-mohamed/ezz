import AboutHero from '@/shared/components/AboutHero.jsx'
import AboutFeatures from '@/shared/components/AboutFeatures.jsx'
import AboutVisionMission from '@/shared/components/AboutVisionMission.jsx'
import AboutCoreValues from '@/shared/components/AboutCoreValues.jsx'
import AboutCurriculumComprehensiveness from '@/shared/components/AboutCurriculumComprehensiveness.jsx'

export default function About() {
    return (
        <div className="bg-[#EEF5F3] dark:bg-slate-950 min-h-screen pb-20 overflow-hidden font-sans">
            <AboutHero />
            <AboutFeatures />
            <AboutVisionMission />
            <AboutCoreValues />
            <AboutCurriculumComprehensiveness />
        </div>
    )
}
