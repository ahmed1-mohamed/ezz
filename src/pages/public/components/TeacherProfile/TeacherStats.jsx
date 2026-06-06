import { motion } from 'framer-motion'
import { Users, Video, Award } from 'lucide-react'

export default function TeacherStats({ stats, t }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-8xl mx-auto bg-[#00695C] rounded-3xl p-6 sm:p-8 shadow-sm mt-6"
        >
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-8">
                {t('teacherProfile.statsTitle', 'أرقام وإحصائيات')}
            </h2>

            <div className="space-y-4">
                <div className="flex justify-between items-center text-white border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg">
                            <Users className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg">{t('teacherProfile.statsStudents', 'عدد الطلاب')}</span>
                    </div>
                    <span className="font-bold text-xl" dir="ltr">{stats.studentsCount}</span>
                </div>

                <div className="flex justify-between items-center text-white border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg">
                            <Video className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg">{t('teacherProfile.statsSessions', 'إجمالي الحصص')}</span>
                    </div>
                    <span className="font-bold text-xl" dir="ltr">{stats.sessionsCount}</span>
                </div>

                <div className="flex justify-between items-center text-white">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg">
                            <Award className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg">{t('teacherProfile.statsExp', 'سنوات الخبرة')}</span>
                    </div>
                    <span className="font-bold text-xl">{stats.experience}</span>
                </div>
            </div>
        </motion.div>
    )
}
