import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, User, PlayCircle, CalendarClock, MonitorPlay, CheckCircle2 } from 'lucide-react'

export default function SchedulePage() {
    const { t, i18n } = useTranslation()
    const isRtl = i18n.language === 'ar'

    const mockDays = useMemo(() => [
        { day: t('schedule.sat', 'السبت'), date: '١٩', id: 'sat' },
        { day: t('schedule.sun', 'الأحد'), date: '٢٠', id: 'sun' },
        { day: t('schedule.mon', 'الاثنين'), date: '٢١', id: 'mon' },
        { day: t('schedule.tue', 'الثلاثاء'), date: '٢٢', id: 'tue' },
        { day: t('schedule.wed', 'الأربعاء'), date: '٢٣', id: 'wed' },
        { day: t('schedule.thu', 'الخميس'), date: '٢٤', id: 'thu' },
        { day: t('schedule.fri', 'الجمعة'), date: '٢٥', id: 'fri' },
    ], [t])

    const [activeDay, setActiveDay] = useState('mon')

    const classes = useMemo(() => [
        {
            id: 1,
            title: t('schedule.c1.title', 'حفظ سورة البقرة - المستوى المتقدم'),
            teacher: t('schedule.c1.teacher', 'الشيخ د. عبدالله أحمد'),
            time: t('schedule.c1.time', '04:00 م - 05:30 م (١.٥ ساعة)'),
            tags: [t('schedule.tag.tajweed', 'التجويد'), t('schedule.tag.level3', 'المستوى الثالث')],
            status: 'live',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            isVerified: true
        },
        {
            id: 2,
            title: t('schedule.c2.title', 'قصص الأنبياء للصغار'),
            teacher: t('schedule.c2.teacher', 'أ. فاطمة الزهراء'),
            time: t('schedule.c2.time', '06:00 م - 07:00 م'),
            tags: [t('schedule.tag.tajweed', 'التجويد'), t('schedule.tag.level3', 'المستوى الثالث')],
            status: 'upcoming',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            isVerified: false
        },
        {
            id: 3,
            title: t('schedule.c3.title', 'شرح متن الآجرومية'),
            teacher: t('schedule.c3.teacher', 'الشيخ محمد محمود'),
            time: t('schedule.c3.time', '01:00 م - 02:30 م'),
            tags: [t('schedule.tag.tajweed', 'التجويد'), t('schedule.tag.level3', 'المستوى الثالث')],
            status: 'finished',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
            isVerified: false
        }
    ], [t])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
    }

    return (
        <div className="min-h-screen bg-[#EEF2F0]/80 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-12">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00695C]">
                        {t('schedule.pageTitle', 'جدول الحلقات اليومي')}
                    </h1>
                    <p className="text-slate-600 font-medium text-lg">
                        {t('schedule.pageSubtitle', 'تابع رحلتك القرآنية والعلمية مع نخبة من المعلمين المعتمدين في منارة العز.')}
                    </p>
                </motion.div>

                {/* Days Selector */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center gap-3 sm:gap-4 flex-wrap"
                >
                    {mockDays.map(d => (
                        <button
                            key={d.id}
                            onClick={() => setActiveDay(d.id)}
                            className={`flex flex-col items-center justify-center w-20 h-24 rounded-3xl transition-all duration-300 font-bold focus:outline-none focus:ring-4 focus:ring-[#00695C]/20 ${
                                activeDay === d.id 
                                ? 'bg-[#00695C] text-white shadow-lg shadow-[#00695C]/30 scale-105' 
                                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100 hover:-translate-y-1'
                            }`}
                        >
                            <span className="text-sm mb-1">{d.day}</span>
                            <span className="text-2xl">{d.date}</span>
                            {activeDay === d.id && (
                                <motion.span layoutId="activeDot" className="w-1.5 h-1.5 bg-[#FECD31] rounded-full mt-2" />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Classes List */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeDay}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                    >
                        {classes.map((cls) => (
                            <motion.div
                                variants={itemVariants}
                                key={cls.id}
                                className="bg-white rounded-[2rem] p-5 sm:p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                            >
                                {/* Image Side */}
                                <div className="relative shrink-0 mx-auto md:mx-0">
                                    <img src={cls.image} alt={cls.teacher} className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-105" />
                                    {cls.isVerified && (
                                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                                            <CheckCircle2 className="w-5 h-5 text-white fill-[#00695C]" />
                                        </div>
                                    )}
                                </div>

                                {/* Details Side */}
                                <div className="flex-1 space-y-4 w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-[#00695C]">
                                            {cls.title}
                                        </h3>
                                        <StatusBadge status={cls.status} t={t} />
                                    </div>
                                    
                                    <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-slate-600 font-medium">
                                        <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full">
                                            <User className="w-4 h-4 text-slate-400" />
                                            {cls.teacher}
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full">
                                            <Clock className="w-4 h-4 text-slate-400" />
                                            {cls.time}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {cls.tags.map(tag => (
                                            <span key={tag} className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold transition-colors group-hover:bg-[#E6F0ED] group-hover:text-[#00695C]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Side */}
                                <div className="shrink-0 w-full md:w-auto flex justify-end mt-4 md:mt-0">
                                    <ActionButton status={cls.status} t={t} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* CTA Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#00695C] to-[#004D40] p-10 sm:p-14 text-center text-white mt-16 shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#FEF6E0_0%,transparent_50%)]" />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#FEF6E0_0%,transparent_50%)]" />
                    
                    <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                            {t('schedule.cta.title', 'هل أنت مستعد لبدء رحلتك نحو النور؟')}
                        </h2>
                        <p className="text-lg text-emerald-50/90 font-medium">
                            {t('schedule.cta.desc', 'انضم إلى آلاف الطلاب اليوم واستفد من خصم 20% على الشهر الأول لجميع البرامج التعليمية.')}
                        </p>
                        <div className="pt-4">
                            <button className="bg-black hover:bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg w-full sm:w-auto">
                                {t('schedule.cta.btn', 'انضم الآن و أبدأ')}
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

const StatusBadge = ({ status, t }) => {
    if (status === 'live') {
        return (
            <span className="inline-flex items-center gap-1.5 bg-[#E6F0ED] text-[#00695C] px-3 py-1 rounded-full text-xs font-bold border border-[#00695C]/10">
                <span className="w-2 h-2 rounded-full bg-[#00695C] animate-pulse" />
                {t('schedule.status.live', 'مباشر الآن')}
            </span>
        )
    }
    if (status === 'upcoming') {
        return (
            <span className="inline-flex items-center gap-1.5 bg-[#FEF6E0] text-[#735C00] px-3 py-1 rounded-full text-xs font-bold border border-[#735C00]/10">
                {t('schedule.status.upcoming', 'قادم')}
            </span>
        )
    }
    return (
        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
            {t('schedule.status.finished', 'انتهى')}
        </span>
    )
}

const ActionButton = ({ status, t }) => {
    if (status === 'live') {
        return (
            <button className="flex items-center justify-center gap-2 bg-[#00695C] hover:bg-[#005247] text-white px-8 py-3.5 rounded-2xl font-bold w-full md:w-auto transition-all active:scale-95 shadow-md shadow-[#00695C]/20">
                <PlayCircle className="w-5 h-5" />
                {t('schedule.btn.live', 'بدأت الآن')}
            </button>
        )
    }
    if (status === 'upcoming') {
        return (
            <button className="flex items-center justify-center gap-2 border-2 border-[#735C00] text-[#735C00] hover:bg-[#FEF6E0] hover:text-[#5C4A00] px-8 py-3.5 rounded-2xl font-bold w-full md:w-auto transition-all active:scale-95">
                <CalendarClock className="w-5 h-5" />
                {t('schedule.btn.upcoming', 'تذكير بالموعد')}
            </button>
        )
    }
    return (
        <button className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-8 py-3.5 rounded-2xl font-bold w-full md:w-auto transition-all active:scale-95">
            <MonitorPlay className="w-5 h-5 text-slate-500" />
            {t('schedule.btn.finished', 'مشاهدة التسجيل')}
        </button>
    )
}
