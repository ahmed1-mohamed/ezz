

import AboutHero from '../../../components/ui/AboutHero.jsx'
import AboutFeatures from '../../../components/ui/AboutFeatures.jsx'
import AboutVisionMission from '../../../components/ui/AboutVisionMission.jsx'
import AboutCoreValues from '../../../components/ui/AboutCoreValues.jsx'
export default function About() {
    

    return (
        <div className="bg-[#EEF4F2]/30 min-h-screen pb-20 overflow-hidden font-sans">
            <AboutHero />
            
            <AboutFeatures />
            <AboutVisionMission />
            <AboutCoreValues />
        </div>
    )
}
