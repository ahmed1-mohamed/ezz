import { motion } from 'framer-motion'
import { Book, Type, BookOpen } from 'lucide-react'

export default function TeacherSubjects({ subjects, t }) {
    // Map icons based on subject ID or type for dummy data
    const getIcon = (id) => {
        switch (id) {
            case 1:
                return (
                    <div className="bg-[#FECD31] w-12 h-12 rounded-xl flex items-center justify-center text-[#735C00] shadow-sm">
                        <Book className="w-6 h-6" />
                    </div>
                )
            case 2:
                return (
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm ring-4 ring-blue-100">
                        <Type className="w-6 h-6" />
                    </div>
                )
            case 3:
            default:
                return (
                    <div className="bg-[#F9DEDC] w-12 h-12 rounded-xl flex items-center justify-center text-[#B3261E] shadow-sm">
                        <BookOpen className="w-6 h-6" />
                    </div>
                )
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 mt-6"
        >
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#00695C] mb-6">
                {t('teacherProfile.subjectsTitle', 'المواد التي أدرسها')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                    <div key={subject.id} className="bg-[#EEF2F0]/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform">
                        {getIcon(subject.id)}
                        <h3 className="font-bold text-lg text-slate-800">
                            {subject.name}
                        </h3>
                        <p className="text-slate-600 font-medium text-sm">
                            {subject.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
