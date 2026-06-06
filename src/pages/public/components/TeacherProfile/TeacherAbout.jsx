import { motion } from 'framer-motion'
import { Award, ShieldCheck, MapPin, Video, Star } from 'lucide-react'

export default function TeacherAbout({ teacher, t }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col space-y-8"
        >
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#00695C]">
                    {t('teacherProfile.aboutTitle', 'نبذة عن المعلم')}
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                    {teacher.about}
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#00695C]">
                    {t('teacherProfile.philosophyTitle', 'فلسفة التدريس')}
                </h2>
                <div className="border-r-4 border-[#735C00] pr-4 py-2">
                    <p className="text-slate-700 font-bold leading-relaxed">
                        "{teacher.philosophy}"
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
                {teacher.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="text-[#735C00]">
                            {i === 0 ? <Award className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                        </div>
                        <span className="text-slate-700 font-bold">{cred}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 bg-[#F5F8F6] text-[#00695C] px-4 py-2 rounded-xl font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>{teacher.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5F8F6] text-[#00695C] px-4 py-2 rounded-xl font-bold">
                    <Video className="w-4 h-4" />
                    <span dir="ltr">{teacher.sessionsCount}</span> {t('teacherProfile.session', 'حصة')}
                </div>
                <div className="flex items-center gap-2 bg-[#FFFDF5] text-[#9B7B16] px-4 py-2 rounded-xl font-bold">
                    <Star className="w-4 h-4 fill-[#9B7B16]" />
                    <span>{teacher.rating} ({teacher.reviewsCount} {t('teacherProfile.rating', 'تقييم')})</span>
                </div>
            </div>
        </motion.div>
    )
}
