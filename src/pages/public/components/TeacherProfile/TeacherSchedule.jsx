import { motion } from 'framer-motion'
import { Calendar, Users, Clock } from 'lucide-react'

export default function TeacherSchedule({ schedule, t }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 mt-6"
        >
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-[#FFFDF5] p-2 rounded-xl text-[#9B7B16]">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {t('teacherProfile.scheduleTitle', 'الجدول الدراسي اليومي')}
                    </h2>
                </div>
                <div className="bg-[#E5ECEB] p-2 rounded-xl text-[#00695C]">
                    <Calendar className="w-5 h-5" />
                </div>
            </div>

            <div className="space-y-4">
                {schedule.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center justify-between border border-slate-100 rounded-2xl p-4 sm:p-6 gap-6 hover:shadow-md transition-shadow">
                        
                        {/* Status Badge - Left on desktop */}
                        <div className="order-3 sm:order-1 sm:w-32 flex sm:justify-start justify-center w-full">
                            <span className="bg-slate-50 text-slate-400 font-bold px-6 py-2 rounded-xl text-sm border border-slate-100">
                                {item.status}
                            </span>
                        </div>

                        {/* Middle details */}
                        <div className="order-2 flex-1 text-center sm:text-start space-y-2 w-full">
                            <h3 className="font-extrabold text-slate-900 text-lg">
                                {item.title}
                            </h3>
                            <div className="flex items-center justify-center sm:justify-start gap-4 text-slate-500 text-sm font-medium">
                                <div className="flex items-center gap-1.5">
                                    <span>{item.group}</span>
                                    <Users className="w-4 h-4" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span>{item.duration}</span>
                                    <Clock className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Time Box - Right on desktop */}
                        <div className="order-1 sm:order-3 bg-[#F2F2F2] rounded-2xl p-4 flex flex-col items-center justify-center min-w-[120px]">
                            <span className="font-extrabold text-slate-700 text-xl" dir="ltr">{item.time}</span>
                            <span className="text-slate-500 font-bold text-sm mt-1">{item.period}</span>
                        </div>

                    </div>
                ))}
            </div>
        </motion.div>
    )
}
