import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import TeacherCard from './components/TeacherProfile/TeacherCard.jsx'
import TeacherAbout from './components/TeacherProfile/TeacherAbout.jsx'
import TeacherSubjects from './components/TeacherProfile/TeacherSubjects.jsx'
import TeacherStats from './components/TeacherProfile/TeacherStats.jsx'
import { teachersApi } from '../../shared/services/api/teachersApi.js'

export default function TeacherProfile() {
    const { id } = useParams()
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowBack = isRtl ? ChevronRight : ChevronLeft

    const [teacher, setTeacher] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)

        const fetchTeacher = async () => {
            try {
                setLoading(true)
                const res = await teachersApi.fetchPublicTeacherById(id)
                const realData = res?.data

                const fallbackImage = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=600&auto=format&fit=crop"

                const teacherData = {
                    id: realData?.teacher_id || realData?.id || id,
                    name: realData?.name || '',
                    title: realData?.degree || realData?.title || '',
                    image: realData?.image || fallbackImage,
                    rating: realData?.rating && Number(realData.rating) > 0 ? Number(realData.rating).toFixed(1) : '5.0',
                    reviewsCount: realData?.reviewsCount || realData?.ratingsCount || 0,
                    experience: realData?.yearsOfExperience !== undefined ? `${realData.yearsOfExperience} ${t('teacher.yearsExperience', 'سنوات خبرة')}` : '',
                    location: realData?.country || '',
                    sessionsCount: realData?.totalLessons ? `+${realData.totalLessons}` : "0",
                    tags: Array.isArray(realData?.specializations) && realData.specializations.length > 0
                        ? realData.specializations.map(s => typeof s === 'object' ? s.name : s).concat(realData.country ? [realData.country] : [])
                        : (realData?.country ? [realData.country] : []),
                    about: realData?.bio || realData?.aboutAr || realData?.aboutEn || '',
                    philosophy: realData?.philosophy || '',
                    credentials: Array.isArray(realData?.achievements) ? realData.achievements : (realData?.degree ? [realData.degree] : []),
                    stats: {
                        studentsCount: realData?.totalStudents ? `${realData.totalStudents}+` : "0",
                        sessionsCount: realData?.totalLessons ? `${realData.totalLessons}+` : "0",
                        experience: realData?.yearsOfExperience !== undefined ? `${realData.yearsOfExperience} ${t('teacher.yearsExperience', 'سنوات خبرة')}` : ''
                    },
                    subjects: Array.isArray(realData?.specializations) && realData.specializations.length > 0
                        ? realData.specializations.map((s, idx) => ({
                            id: s.id || idx + 1,
                            name: typeof s === 'object' ? s.name : s,
                            description: typeof s === 'object' && s.description ? s.description : ''
                        }))
                        : [],
                    levels: Array.isArray(realData?.levels) ? realData.levels : [],
                    schedule: Array.isArray(realData?.schedule) ? realData.schedule : []
                }

                setTeacher(teacherData)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchTeacher()
    }, [id, t])

    if (loading) {
        return (
            <div className="min-h-screen bg-[#EEF2F0]/80 dark:bg-slate-950 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#00695C] dark:border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (error || !teacher) {
        return (
            <div className="min-h-screen bg-[#EEF2F0]/80 dark:bg-slate-950 flex items-center justify-center">
                <p className="text-xl font-bold text-red-600 dark:text-red-400">{t('teacherProfile.error', 'حدث خطأ في تحميل بيانات المعلم')}</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#EEF2F0]/80 dark:bg-slate-950 pt-12 font-sans pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link to="/teachers" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#00695C] dark:hover:text-emerald-400 transition-colors font-bold">
                    <ArrowBack className="w-5 h-5" />
                    <span>{t('teacherProfile.back', 'العودة للمعلمين')}</span>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                        <TeacherAbout teacher={teacher} t={t} />
                        <TeacherSubjects subjects={teacher.subjects} t={t} />
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <TeacherCard teacher={teacher} t={t} isRtl={isRtl} />
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <TeacherStats stats={teacher.stats} t={t} />
                 </div>
            </div>

        </div>
    )
}
