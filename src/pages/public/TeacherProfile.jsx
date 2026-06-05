import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import TeacherCard from './components/TeacherProfile/TeacherCard.jsx'
import TeacherAbout from './components/TeacherProfile/TeacherAbout.jsx'
import TeacherSubjects from './components/TeacherProfile/TeacherSubjects.jsx'
import TeacherStats from './components/TeacherProfile/TeacherStats.jsx'
import TeacherSchedule from './components/TeacherProfile/TeacherSchedule.jsx'
import TeacherLevels from './components/TeacherProfile/TeacherLevels.jsx'
import CTASection from '@/shared/components/CTASection.jsx'

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
                await new Promise(resolve => setTimeout(resolve, 600))

                const mockData = {
                    id: id,
                    name: t('teacherProfile.mock.name', "الشيخ أحمد منصور"),
                    title: t('teacherProfile.mock.title', "حاصل على إجازة في القراءات العشر"),
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=600&auto=format&fit=crop",
                    rating: 4.9,
                    reviewsCount: 128,
                    experience: t('teacherProfile.mock.experience', "15 سنة خبرة"),
                    location: t('teacherProfile.mock.location', "مصر"),
                    sessionsCount: "+1,250",
                    tags: [
                        t('teacherProfile.mock.tags.tajweed', "التجويد"), 
                        t('teacherProfile.mock.tags.quran', "القرآن الكريم"), 
                        t('teacherProfile.mock.tags.exp', "15 سنة خبرة")
                    ],
                    about: t('teacherProfile.mock.about', "أستاذ القراءات وعلوم القرآن بخبرة تزيد عن 15 عاماً في التدريس الأكاديمي والخاص. حصلت على إجازة في القراءات العشر المتواترة من طريق الشاطبية والدرة، وأسعى دائماً لتبسيط العلوم الشرعية لجيل الشباب بأسلوب معاصر يجمع بين الأصالة والحداثة."),
                    philosophy: t('teacherProfile.mock.philosophy', "التدريس ليس مجرد نقل للمعلومات، بل هو غرس للقيم وبناء للشخصية القرآنية المتوازنة. أؤمن بأن كل طالب لديه رحلة فريدة مع القرآن، ودوري هو إنارة هذا الطريق."),
                    credentials: [
                        t('teacherProfile.mock.credentials.phd', "دكتوراه في الدراسات الإسلامية"),
                        t('teacherProfile.mock.credentials.ijaza', "إجازة بالسند المتصل للنبي")
                    ],
                    stats: {
                        studentsCount: "300+",
                        sessionsCount: "1,250+",
                        experience: t('teacherProfile.mock.experience', "15 سنة خبرة")
                    },
                    subjects: [
                        { id: 1, name: t('teacherProfile.mock.subjects.sub1.name', "تحفيظ القرآن"), description: t('teacherProfile.mock.subjects.sub1.desc', "تحفيظ ميسر مع مراعاة أحكام التجويد الأساسية.") },
                        { id: 2, name: t('teacherProfile.mock.subjects.sub2.name', "علوم التجويد"), description: t('teacherProfile.mock.subjects.sub2.desc', "شرح مفصل لمخارج الحروف وصفاتها والمدود.") },
                        { id: 3, name: t('teacherProfile.mock.subjects.sub3.name', "تفسير القرآن"), description: t('teacherProfile.mock.subjects.sub3.desc', "ربط الآيات بالواقع المعاصر وفهم المقاصد.") }
                    ],
                    levels: [
                        {
                            id: 1,
                            title: t('levels.level1.title', "المستوى الأول التجويد"),
                            unitsCount: 8,
                            modules: [
                                { title: t('levels.level1.mod1', "مقدمة في التجويد") },
                                { title: t('levels.level1.mod2', "مخارج الحروف") }
                            ]
                        },
                        {
                            id: 2,
                            title: t('levels.level2.title', "المستوى الثاني القرآن"),
                            unitsCount: 8,
                            modules: [
                                { title: t('levels.level2.mod1', "القاعدة النورانية") },
                                { title: t('levels.level2.mod2', "أحكام التجويد الأساسية") }
                            ]
                        },
                        {
                            id: 3,
                            title: t('levels.level3.title', "المستوى الثالث التلاوة"),
                            unitsCount: 8,
                            modules: [
                                { title: t('levels.level3.mod1', "تلاوة سورة البقرة") },
                                { title: t('levels.level3.mod2', "تلاوة سورة آل عمران") }
                            ]
                        }
                    ],
                    schedule: [
                        { status: t('teacherProfile.mock.schedule.finished', "انتهت الحصة"), title: t('teacherProfile.mock.schedule.title1', "حفظ وتجويد سورة البقرة"), group: t('teacherProfile.mock.schedule.group1', "مجموعة الأمل (أطفال)"), duration: t('teacherProfile.mock.schedule.duration1', "45 دقيقة"), time: "09:00", period: t('teacherProfile.mock.schedule.period.am', "صباحاً") },
                        { status: t('teacherProfile.mock.schedule.started', "بدأت"), title: t('teacherProfile.mock.schedule.title1', "حفظ وتجويد سورة البقرة"), group: t('teacherProfile.mock.schedule.group1', "مجموعة الأمل (أطفال)"), duration: t('teacherProfile.mock.schedule.duration1', "45 دقيقة"), time: "01:00", period: t('teacherProfile.mock.schedule.period.pm', "مساءا") }
                    ]
                }

                setTeacher(mockData)
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
            <div className="min-h-screen bg-[#EEF2F0]/80 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#00695C] border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (error || !teacher) {
        return (
            <div className="min-h-screen bg-[#EEF2F0]/80 flex items-center justify-center">
                <p className="text-xl font-bold text-red-600">{t('teacherProfile.error', 'حدث خطأ في تحميل بيانات المعلم')}</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#EEF2F0]/80 pt-12 font-sans pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link to="/teachers" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00695C] transition-colors font-bold">
                    <ArrowBack className="w-5 h-5" />
                    <span>{t('teacherProfile.back', 'العودة للمعلمين')}</span>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Info Column (Start in DOM: Right in RTL, Left in LTR) */}
                    <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                        <TeacherAbout teacher={teacher} t={t} />
                        <TeacherSubjects subjects={teacher.subjects} t={t} />
                        <TeacherLevels levels={teacher.levels} t={t} />
                    </div>

                    {/* Card Column - End in DOM (Left in RTL, Right in LTR) */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <TeacherCard teacher={teacher} t={t} isRtl={isRtl} />
                    </div>
                </div>
            </div>

            <CTASection />
            <TeacherSchedule schedule={teacher.schedule} t={t} />
        </div>
    )
}
