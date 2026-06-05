import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const students = [
    {
        id: 1,
        name: "مريم الجبوري",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "سارة العبدالله",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "يوسف القاضي",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "علي الهاشمي",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&h=250&auto=format&fit=crop"
    }
]

export default function StarsSection() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        {t('stars.title', 'نجوم التميز الأكاديمي')}
                    </h2>
                    <p className="text-slate-500 text-lg">
                        {t('stars.description', 'نحتفي بطلابنا المتميزين الذين حققوا نتائج استثنائية وكانوا مثالاً للجد والاجتهاد')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
                    {students.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative mb-6 group">
                                {/* Golden Glow Effect */}
                                <div className="absolute inset-0 rounded-full bg-[#EAB308] opacity-50 blur-md group-hover:blur-2xl transition-all duration-300 transform scale-110"></div>
                                {/* Golden Ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FDE047] to-[#CA8A04] p-1.5">
                                    {/* Image Container */}
                                    <div className="bg-white rounded-full w-full h-full p-1">
                                        <img
                                            src={student.image}
                                            alt={student.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Aspect Ratio Wrapper for uniform sizing */}
                                <div className="w-40 h-40 sm:w-48 sm:h-48 invisible"></div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {t(`stars.student.${student.id}.name`, student.name)}
                            </h3>

                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#735C00] text-[#735C00]" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
