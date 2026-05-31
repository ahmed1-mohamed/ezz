import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MonitorPlay, BookOpen } from 'lucide-react'
import imagesrc from '../../images/students/1.jpg'

export default React.memo(function AboutFeatures() {
    const { t } = useTranslation()

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] inline-block relative">
                    {t('about.features.title', 'لماذا يختارنا الأهالي ؟')}
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#735C00] rounded-full"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="lg:col-span-8 bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm border border-slate-100/50"
                >
                    <div className="flex-1 space-y-4 text-start">
                        <h3 className="text-2xl font-bold text-[#00695C]">
                            {t('about.features.f1.title', 'تمكين المتعلمين')}
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            {t('about.features.f1.desc', 'هدفنا ليس مجرد التلقين، بل تمكين كل متعلم من الأدوات التي تساعده على فهم معاني القرآن وتذوق جماله، ليصبح قادراً على التعبير عن هذه اللغة العظيمة ونشر رسالتها في مختلف أنحاء العالم، ونسعى إلى غرس حب التعلم والتدبر ليكون القرآن نوراً يهديه في حياته اليومية.')}
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                        <img 
                            src={imagesrc} 
                            alt="Students" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="lg:col-span-4 bg-[#FECD31] rounded-[2rem] p-8 flex flex-col justify-center space-y-6 shadow-sm"
                >
                    <div className="w-14 h-14 border-2 border-[#735C00]/20 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-[#735C00]">
                        <MonitorPlay className="w-7 h-7" />
                    </div>
                    <div className="space-y-3 text-start">
                        <h3 className="text-xl font-bold text-[#735C00]">
                            {t('about.features.f2.title', 'تقنية حديثة')}
                        </h3>
                        <p className="text-[#735C00]/80 font-medium leading-relaxed text-sm">
                            {t('about.features.f2.desc', 'استخدمنا أحدث تقنيات التعليم عن بعد لنجعل الدرس تفاعلياً وممتعاً، بما يناسب جيل اليوم المتعطش للتقنية.')}
                        </p>
                    </div>
                </motion.div>

               

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="lg:col-span-8 bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm border border-slate-100/50"
                >
                    <div className="w-full sm:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop"
                            alt="Books"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-start">
                        <h3 className="text-2xl font-bold text-[#00695C]">
                            {t('about.features.f4.title', 'التميز الأكاديمي')}
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            {t('about.features.f4.desc', 'تعتمد أكاديميتنا على مناهج تم اختيارها بعناية من كبار العلماء والتربويين، لضمان توازن دقيق بين الحفظ والفهم، وبين القواعد والتطبيق العملي، مما يخلق بيئة تعليمية متكاملة.')}
                        </p>
                    </div>
                   
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="lg:col-span-4 bg-[#00695C] rounded-[2rem] p-8 flex flex-col justify-center space-y-6 shadow-sm"
                >
                    <div className="w-14 h-14 border-2 border-white/20 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white">
                        <BookOpen className="w-7 h-7" />
                    </div>
                    <div className="space-y-3 text-start">
                        <h3 className="text-xl font-bold text-white">
                            {t('about.features.f3.title', 'بيئة آمنة')}
                        </h3>
                        <p className="text-emerald-50/80 font-medium leading-relaxed text-sm">
                            {t('about.features.f3.desc', 'نحن نوفر الملاذ الرقمي الآمن لأطفالكم، حيث يتم اختيار المعلمين بعد اختبارات دقيقة تضمن كفاءتهم العلمية وأمانتهم التربوية.')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
})

