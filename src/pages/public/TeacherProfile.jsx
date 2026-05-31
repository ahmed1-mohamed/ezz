import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Star, MapPin, BookOpen, Clock, Award, Video, ChevronRight, ChevronLeft, ShieldCheck, PlayCircle } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function TeacherProfile() {
    const { id } = useParams()
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'
    const ArrowBack = isRtl ? ChevronRight : ChevronLeft

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    // Mock teacher data (in a real app, you'd fetch this based on the ID)
    const teacher = {
        name: "د. أحمد المنصوري",
        title: "أستاذ دكتور في الفقه وأصوله ومجاز بالقراءات العشر",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=600&auto=format&fit=crop",
        coverImage: "https://images.unsplash.com/photo-1584697964190-7cb830dc5a5e?q=80&w=1200&h=400&auto=format&fit=crop",
        rating: 4.9,
        reviewsCount: 128,
        experience: 15,
        studentsCount: 3450,
        coursesCount: 12,
        about: "أكاديمي متخصص في الدراسات الإسلامية بخبرة تزيد عن 15 عاماً في التدريس الجامعي والإشراف على الرسائل العلمية. مجاز في القراءات العشر المتواترة من طريق الشاطبية والدرة، ومهتم بتطوير طرق تدريس العلوم الشرعية باستخدام التقنيات الحديثة. أسعى دائماً لتقديم المادة العلمية بأسلوب ميسر يربط الأصالة بالمعاصرة.",
        certifications: [
            "دكتوراه في الفقه المقارن - جامعة الأزهر",
            "إجازة في القراءات العشر الصغرى والكبرى",
            "دبلوم في طرق التدريس الحديثة",
        ],
        subjects: ["الفقه", "التجويد", "القراءات", "أصول الفقه"],
        courses: [
            { id: 1, title: "المدخل إلى علم الفقه", students: 1200, rating: 4.8 },
            { id: 2, title: "شرح تحفة الأطفال", students: 850, rating: 4.9 },
            { id: 3, title: "القراءات السبع إفراداً", students: 430, rating: 5.0 },
        ],
        schedule: [
            { day: "الأحد", time: "09:00 ص - 11:00 ص" },
            { day: "الثلاثاء", time: "04:00 م - 06:00 م" },
            { day: "الخميس", time: "08:00 م - 10:00 م" },
        ]
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-sans">
            {/* Header / Cover Section */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img src={teacher.coverImage} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                <div className="absolute top-6 start-6 z-10">
                    <Link to="/teachers" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all text-sm font-semibold">
                        <ArrowBack className="w-4 h-4" />
                        <span>{t('common.back', 'العودة')}</span>
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left/Main Column - Teacher Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Profile Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-start"
                        >
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00695C] to-[#004D40] blur-md opacity-40" />
                                <img 
                                    src={teacher.image} 
                                    alt={teacher.name} 
                                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                                <div className="absolute bottom-2 end-2 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white shadow-sm" title="متصل الآن" />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">{teacher.name}</h1>
                                    <p className="text-[#00695C] font-semibold mt-1 text-lg">{teacher.title}</p>
                                </div>

                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-medium">
                                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                                        <span>{teacher.rating} ({teacher.reviewsCount} تقييم)</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">
                                        <Award className="w-4 h-4" />
                                        <span>{teacher.experience} سنوات خبرة</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                                        <UserIcon className="w-4 h-4" />
                                        <span>{teacher.studentsCount} طالب</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                                    {teacher.subjects.map((sub, i) => (
                                        <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors cursor-default">
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* About Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-4"
                        >
                            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-[#00695C]" />
                                نبذة تعريفية
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {teacher.about}
                            </p>
                        </motion.div>

                        {/* Certifications Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-4"
                        >
                            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-[#00695C]" />
                                الشهادات والاعتمادات
                            </h2>
                            <ul className="space-y-3">
                                {teacher.certifications.map((cert, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-emerald-100 p-1 rounded-full shrink-0">
                                            <Award className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium text-lg">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        {/* Courses Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-4"
                        >
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <Video className="w-5 h-5 text-[#00695C]" />
                                    الدورات الحالية
                                </h2>
                                <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full font-bold">
                                    {teacher.coursesCount} دورات
                                </span>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {teacher.courses.map((course) => (
                                    <div key={course.id} className="border border-slate-100 rounded-2xl p-4 hover:border-[#00695C] transition-colors group cursor-pointer">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="bg-[#00695C]/10 p-2 rounded-xl text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                                                <PlayCircle className="w-6 h-6" />
                                            </div>
                                            <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
                                                <Star className="w-4 h-4 fill-amber-500" />
                                                {course.rating}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-1 line-clamp-1">{course.title}</h3>
                                        <p className="text-xs text-slate-500 flex items-center gap-1">
                                            <UserIcon className="w-3 h-3" /> {course.students} طالب مسجل
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Booking & Schedule */}
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-24"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#00695C]" />
                                المواعيد المتاحة
                            </h3>
                            
                            <div className="space-y-3 mb-6">
                                {teacher.schedule.map((slot, i) => (
                                    <div key={i} className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <span className="font-bold text-slate-700">{slot.day}</span>
                                        <span className="text-sm text-[#00695C] font-medium bg-teal-50 px-2 py-1 rounded-md" dir="ltr">
                                            {slot.time}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <button className="w-full bg-[#00695C] hover:bg-[#004D40] text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md active:scale-95">
                                    احجز حصة تجريبية
                                </button>
                                <button className="w-full bg-white border-2 border-[#00695C] text-[#00695C] hover:bg-teal-50 font-bold py-4 px-6 rounded-2xl transition-all active:scale-95">
                                    مراسلة المعلم
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
