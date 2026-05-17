import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, BookText, GraduationCap, Award, Users, ArrowLeft, ArrowRight, Mic, Lightbulb, Star, Book } from 'lucide-react'

export default React.memo(function CurriculumUnits() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

    const [activeTab, setActiveTab] = useState('quran')

    const tabs = [
        { id: 'quran', label: t('curriculumUnits.tabs.quran', 'القرآن الكريم'), icon: BookOpen },
        { id: 'arabic', label: t('curriculumUnits.tabs.arabic', 'اللغة العربية'), icon: BookText },
        { id: 'islamic', label: t('curriculumUnits.tabs.islamic', 'الدراسات الإسلامية'), icon: GraduationCap },
    ]

    const tabData = {
        quran: {
            sidebar: {
                title: t('curriculumUnits.quran.sidebar.title', 'عن منهج القرآن الكريم'),
                description: t('curriculumUnits.quran.sidebar.desc', 'منهج متكامل يجمع بين التلاوة الصحيحة، الحفظ المتقن، وفهم معاني الآيات. نعتمد منهجية التدرج ومراعاة الفروق الفردية لكل طالب مع التركيز على أحكام التجويد الأساسية.'),
                features: [
                    { icon: Award, title: t('curriculumUnits.quran.feat1.title', 'شهادة معتمدة'), subtitle: t('curriculumUnits.quran.feat1.desc', 'عند إتمام كل جزء') },
                    { icon: Users, title: t('curriculumUnits.quran.feat2.title', 'حلقات تفاعلية'), subtitle: t('curriculumUnits.quran.feat2.desc', 'مع أمهر المقرئين') }
                ],
                buttonText: t('curriculumUnits.quran.btn', 'استعرض المنهج')
            },
            units: [
                { id: 1, title: t('curriculumUnits.quran.u1.title', 'مبادئ التجويد'), desc: t('curriculumUnits.quran.u1.desc', 'تعرف على مخارج الحروف وصفاتها الأساسية لتلاوة صحيحة خالية من اللحن.'), level: t('curriculumUnits.quran.u1.level', 'مستوى مبتدئ'), icon: Book },
                { id: 2, title: t('curriculumUnits.quran.u2.title', 'جزء عمّ تلاوة وحفظاً'), desc: t('curriculumUnits.quran.u2.desc', 'حفظ وتدبر قصار السور بأسلوب ممتع يربط الآيات بحياة الطفل اليومية.'), level: t('curriculumUnits.quran.u2.level', 'المرحلة الأولى'), icon: Star },
                { id: 3, title: t('curriculumUnits.quran.u3.title', 'مقامات القراءة'), desc: t('curriculumUnits.quran.u3.desc', 'تحسين الصوت بالأداء القرآني وتعلم المقامات الأساسية بوقار وهدوء.'), level: t('curriculumUnits.quran.u3.level', 'مستوى متقدم'), icon: Mic },
                { id: 4, title: t('curriculumUnits.quran.u4.title', 'قصص من القرآن'), desc: t('curriculumUnits.quran.u4.desc', 'استخلاص العبر والدروس التربوية من قصص الأنبياء المذكورة في القرآن.'), level: t('curriculumUnits.quran.u4.level', 'منهج إثرائي'), icon: Lightbulb }
            ]
        },
        arabic: {
            sidebar: {
                title: t('curriculumUnits.arabic.sidebar.title', 'عن منهج اللغة العربية'),
                description: t('curriculumUnits.arabic.sidebar.desc', 'منهج يؤسس لمهارات اللغة الأربع: الاستماع، التحدث، القراءة، والكتابة بأساليب حديثة تربط اللغة بالواقع اليومي.'),
                features: [
                    { icon: Award, title: t('curriculumUnits.arabic.feat1.title', 'تقييم مستمر'), subtitle: t('curriculumUnits.arabic.feat1.desc', 'لقياس تطور المهارات') },
                    { icon: Users, title: t('curriculumUnits.arabic.feat2.title', 'ممارسة عملية'), subtitle: t('curriculumUnits.arabic.feat2.desc', 'من خلال أنشطة تفاعلية') }
                ],
                buttonText: t('curriculumUnits.arabic.btn', 'استعرض المنهج')
            },
            units: [
                { id: 1, title: t('curriculumUnits.arabic.u1.title', 'أساسيات النحو'), desc: t('curriculumUnits.arabic.u1.desc', 'فهم القواعد النحوية الأساسية وتطبيقها في التحدث والكتابة.'), level: t('curriculumUnits.arabic.u1.level', 'مستوى مبتدئ'), icon: Book },
                { id: 2, title: t('curriculumUnits.arabic.u2.title', 'مهارات التعبير'), desc: t('curriculumUnits.arabic.u2.desc', 'تطوير قدرة الطالب على التعبير عن أفكاره بوضوح وسلاسة.'), level: t('curriculumUnits.arabic.u2.level', 'المرحلة الأولى'), icon: Star },
                { id: 3, title: t('curriculumUnits.arabic.u3.title', 'الأدب والبلاغة'), desc: t('curriculumUnits.arabic.u3.desc', 'تذوق جماليات اللغة العربية من خلال دراسة النصوص الأدبية.'), level: t('curriculumUnits.arabic.u3.level', 'مستوى متقدم'), icon: Mic },
                { id: 4, title: t('curriculumUnits.arabic.u4.title', 'القراءة الحرة'), desc: t('curriculumUnits.arabic.u4.desc', 'تشجيع المطالعة وتوسيع المدارك اللغوية والمعرفية.'), level: t('curriculumUnits.arabic.u4.level', 'منهج إثرائي'), icon: Lightbulb }
            ]
        },
        islamic: {
            sidebar: {
                title: t('curriculumUnits.islamic.sidebar.title', 'عن منهج الدراسات الإسلامية'),
                description: t('curriculumUnits.islamic.sidebar.desc', 'برنامج يهدف إلى غرس العقيدة الصحيحة، وتعليم الفقه الميسر، واستلهام العبر من السيرة النبوية لتربية جيل واعٍ بدينه.'),
                features: [
                    { icon: Award, title: t('curriculumUnits.islamic.feat1.title', 'شهادة إتمام'), subtitle: t('curriculumUnits.islamic.feat1.desc', 'بعد اجتياز الاختبارات') },
                    { icon: Users, title: t('curriculumUnits.islamic.feat2.title', 'نقاشات هادفة'), subtitle: t('curriculumUnits.islamic.feat2.desc', 'لترسيخ المفاهيم') }
                ],
                buttonText: t('curriculumUnits.islamic.btn', 'استعرض المنهج')
            },
            units: [
                { id: 1, title: t('curriculumUnits.islamic.u1.title', 'العقيدة الإسلامية'), desc: t('curriculumUnits.islamic.u1.desc', 'ترسيخ أركان الإيمان وتوضيح مفاهيم التوحيد بأسلوب مبسط.'), level: t('curriculumUnits.islamic.u1.level', 'مستوى مبتدئ'), icon: Book },
                { id: 2, title: t('curriculumUnits.islamic.u2.title', 'فقه العبادات'), desc: t('curriculumUnits.islamic.u2.desc', 'تعلم أحكام الطهارة والصلاة والصيام عملياً ونظرياً.'), level: t('curriculumUnits.islamic.u2.level', 'المرحلة الأولى'), icon: Star },
                { id: 3, title: t('curriculumUnits.islamic.u3.title', 'السيرة النبوية'), desc: t('curriculumUnits.islamic.u3.desc', 'محطات من حياة النبي ﷺ واستخلاص الدروس والعبر منها.'), level: t('curriculumUnits.islamic.u3.level', 'مستوى متقدم'), icon: Mic },
                { id: 4, title: t('curriculumUnits.islamic.u4.title', 'الأخلاق والآداب'), desc: t('curriculumUnits.islamic.u4.desc', 'تعزيز السلوكيات الإيجابية والآداب الإسلامية في الحياة اليومية.'), level: t('curriculumUnits.islamic.u4.level', 'منهج إثرائي'), icon: Lightbulb }
            ]
        }
    }

    const currentData = tabData[activeTab]

    return (
        <section className="py-12 sm:py-16 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {t('curriculumUnits.mainTitle', 'الوحدات التعليمية')}
                    </h2>
                    <div className="bg-[#E7E7E4] text-[#735C00] font-bold px-6 py-2.5 rounded-full text-sm sm:text-base">
                        {t('curriculumUnits.badgeCount', '١٢ وحدة دراسية')}
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 ${isActive 
                                    ? 'bg-white border-[#00695C] text-[#00695C] shadow-md' 
                                    : 'bg-white border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                <tab.icon className={`w-5 h-5 ${isActive ? 'text-[#00695C]' : 'text-slate-400'}`} />
                                {tab.label}
                            </button>
                        )
                    })}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.1 } }
                        }}
                        className="flex flex-col lg:flex-row gap-6 lg:gap-8"
                    >
                        {/* Sidebar */}
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                            }}
                            style={{ willChange: 'transform, opacity' }}
                            className="w-full lg:w-1/3"
                        >
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 h-full flex flex-col relative overflow-hidden group text-start">
                                <div className="absolute top-0 end-0 w-48 h-48 bg-[#00695C] opacity-[0.03] rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:opacity-[0.06]" />
                                
                                <h3 className="text-2xl font-extrabold text-[#00695C] mb-4 relative z-10">
                                    {currentData.sidebar.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-8 relative z-10">
                                    {currentData.sidebar.description}
                                </p>

                                <div className="space-y-4 mb-10 relative z-10">
                                    {currentData.sidebar.features.map((feat, idx) => (
                                        <div key={idx} className="bg-slate-50/80 rounded-2xl p-4 flex items-center gap-4 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#00695C]/20 hover:-translate-y-1">
                                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                                <feat.icon className="w-6 h-6 text-[#735C00]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{feat.title}</h4>
                                                <p className="text-sm text-slate-500">{feat.subtitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto relative z-10">
                                    <button className="w-full bg-[#00695C] hover:bg-[#005247] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 group/btn">
                                        {currentData.sidebar.buttonText}
                                        <ArrowIcon className="w-5 h-5 transition-transform duration-300 rtl:group-hover/btn:-translate-x-1 ltr:group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Units Grid */}
                        <div className="w-full lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {currentData.units.map((unit) => (
                                    <motion.button 
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95, y: 10 },
                                            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                                        }}
                                        key={unit.id} 
                                        className="group bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#00695C]/30 text-start relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#00695C]/20"
                                    >
                                        <div className="absolute top-0 end-0 w-32 h-32 bg-gradient-to-br from-[#00695C] to-[#004D40] opacity-[0.02] rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150 group-hover:opacity-[0.06]" />
                                        
                                        <div className="flex justify-between items-start mb-6 relative z-10">
                                            <div className="bg-[#E7E7E4]/50 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00695C]/10">
                                                <unit.icon className="w-7 h-7 text-[#00695C] transition-colors duration-300" />
                                            </div>
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 transition-all duration-300 opacity-0 rtl:translate-x-4 ltr:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-[#00695C]/10 text-[#00695C]">
                                                <ArrowIcon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-extrabold text-slate-900 mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#00695C]">{unit.title}</h4>
                                        <p className="text-slate-500 leading-relaxed mb-6 font-medium text-sm relative z-10 transition-colors duration-300 group-hover:text-slate-600">
                                            {unit.desc}
                                        </p>
                                        <div className="inline-flex items-center gap-2 bg-[#FEF6E0] text-[#735C00] text-sm font-bold px-4 py-2 rounded-full relative z-10 transition-all duration-300 group-hover:bg-[#735C00] group-hover:text-white">
                                            {unit.level}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
})
