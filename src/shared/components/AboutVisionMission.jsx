import React from 'react';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

export default React.memo(function AboutVisionMission() {
    const { t } = useTranslation()
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-12 text-center shadow-sm border border-slate-100/50 dark:border-slate-800 flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-16 rounded-full bg-[#00695C]/10 dark:bg-[#00695C]/20 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-[#00695C] dark:text-emerald-400" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#00695C] dark:text-emerald-400">
                            {t('about.vision.title', 'رؤيتنا')}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-md mx-auto">
                            {t('about.vision.desc', 'أن نكون مرجعًا موثوقًا للتعلّم عبر الإنترنت، نُيسّر للمتعلّمين حول العالم إتقان تلاوة القرآن الكريم، واستخدام اللغة العربية بثقة، وفهم تعاليم الإسلام والعمل بها في حياتهم اليومية.')}
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-12 text-center shadow-sm border border-slate-100/50 dark:border-slate-800 flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-16 rounded-full bg-[#735C00]/10 dark:bg-amber-950/40 flex items-center justify-center">
                        <Target className="w-8 h-8 text-[#735C00] dark:text-amber-400" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#00695C] dark:text-emerald-400">
                            {t('about.mission.title', 'رسالتنا')}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-md mx-auto">
                            {t('about.mission.desc', 'نقدّم برامج تعليمية عبر الإنترنت في تلاوة القرآن الكريم وحفظه وتجويده، وفي اللغة العربية للناطقين بها وبغيرها، والتربية الإسلامية. ويُقدّم هذه البرامج معلّمون متخصّصون، يراعون مستوى كل متعلّم وأهدافه، ويتابعون تقدّمه بتوجيه فردي وملاحظات تساعده على تطوير مهاراته.')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
})


