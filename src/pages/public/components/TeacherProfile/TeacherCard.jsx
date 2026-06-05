import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TeacherCard({ teacher, t, isRtl }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100"
        >
            <div className="relative w-full max-w-[250px] sm:max-w-[370px] aspect-[4/5] mb-6">
                <div className={`absolute inset-0 bg-[#FECD31] rounded-[32px] translate-y-3 sm:translate-y-4 ${isRtl ? '-translate-x-3 sm:-translate-x-4' : 'translate-x-3 sm:translate-x-4'}`} />
                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="relative w-full h-full object-cover rounded-[32px] shadow-sm z-10 grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <h1 className="text-2xl sm:text-[28px] font-extrabold text-[#00695C] text-center mb-1">
                {teacher.name}
            </h1>
            <p className="text-slate-600 font-semibold text-center mb-6 text-sm sm:text-base">
                {teacher.title}
            </p>

            <div className="flex items-center gap-4 mb-8 w-full">
                <div className="flex items-center gap-1 text-[#9B7B16] font-bold">
                    <span className="text-lg">{teacher.rating}</span>
                    <Star className="w-5 h-5 fill-[#9B7B16]" />
                </div>

                <div className="flex-1 flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-nowrap">
                    {teacher.tags.map((tag, i) => (
                        <span key={i} className="whitespace-nowrap bg-[#F2F2F2] text-slate-700 px-4 py-2 rounded-full text-sm font-bold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full space-y-3">
                <button className="w-full bg-[#00695C] hover:bg-[#004D40] text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md active:scale-95 text-lg">
                    {t('teacherProfile.bookTrial', 'احجز حصة تجريبية')}
                </button>
                <button className="w-full bg-black hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 text-lg">
                    {t('teacherProfile.subscribeNow', 'اشترك الآن')}
                </button>
            </div>
        </motion.div>
    )
}
