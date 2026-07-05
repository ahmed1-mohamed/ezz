import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { studentsApi } from '@/shared/services/api/studentsApi'

const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
        return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `https://manaret-ezz.dramcode.top/${cleanPath}`;
}

export default function StarsSection({ featuredStudents }) {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language.startsWith('ar')

    const [studentsList, setStudentsList] = useState([])

    useEffect(() => {
        const loadStudentsList = async () => {
            try {
                const res = await studentsApi.fetchLocalizedStudentsList()
                const data = res?.data || res || []
                if (Array.isArray(data)) {
                    setStudentsList(data)
                }
            } catch (err) {
                console.error('Failed to fetch students list in StarsSection:', err)
            }
        }
        loadStudentsList()
    }, [])

    const displayStudents = featuredStudents && featuredStudents.length > 0
        ? featuredStudents
        : studentsList

    if (!displayStudents || displayStudents.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        {t('stars.title', 'نجوم التميز الأكاديمي')}
                    </h2>
                    <p className="text-slate-700 text-lg">
                        {t('stars.description', 'نحتفي بطلابنا المتميزين الذين حققوا نتائج استثنائية وكانوا مثالاً للجد والاجتهاد')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
                    {displayStudents.map((student, index) => {
                        const studentName = typeof student.name === 'object' && student.name !== null
                            ? (isRtl ? student.name.ar || student.name.en : student.name.en || student.name.ar)
                            : (student.name || '');
                        const initial = studentName ? studentName.trim().charAt(0) : 'ط';

                        return (
                            <motion.div
                                key={student.id || student._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative mb-6 group">
                                    <div className="absolute inset-0 rounded-full bg-[#EAB308] opacity-50 blur-md group-hover:blur-2xl transition-all duration-300 transform scale-110"></div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FDE047] to-[#CA8A04] p-1.5">
                                        <div className="bg-white rounded-full w-full h-full p-1">
                                            {student.image ? (
                                                <img
                                                    src={getImageUrl(student.image)}
                                                    alt={studentName}
                                                    width="160"
                                                    height="160"
                                                    loading="lazy"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="bg-gradient-to-br from-[#0f7a6c] to-emerald-700 rounded-full w-full h-full flex items-center justify-center text-white text-3xl font-extrabold shadow-inner select-none">
                                                    {initial}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 sm:w-48 sm:h-48 invisible"></div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {studentName}
                                </h3>

                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[#735C00] text-[#735C00]" />
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}