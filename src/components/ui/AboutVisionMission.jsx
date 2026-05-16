import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

export default function AboutVisionMission() {
    const { t } = useTranslation()

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] p-8 sm:p-12 text-center shadow-sm border border-slate-100/50 flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-16 rounded-full bg-[#00695C]/10 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-[#00695C]" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#00695C]">
                            {t('about.vision.title', 'رؤيتنا')}
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                            {t('about.vision.desc', 'توفير تعليم قرآني وعربي متميز ومتاح للجميع في كل مكان، نؤمن بأن العلم حق مشاع، وأن جمال لغتنا وديننا يجب أن يصل لكل قلب بوضوح ويسر.')}
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-[2rem] p-8 sm:p-12 text-center shadow-sm border border-slate-100/50 flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-16 rounded-full bg-[#735C00]/10 flex items-center justify-center">
                        <Target className="w-8 h-8 text-[#735C00]" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#00695C]">
                            {t('about.mission.title', 'رسالتنا')}
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
                            {t('about.mission.desc', 'تمكين المسلمين حول العالم من تعلم لغتهم ودينهم من خلال تقنيات التعليم الحديثة والمعلمين المتخصصين، مع الحفاظ على القدوة والسمت الإسلامي.')}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
