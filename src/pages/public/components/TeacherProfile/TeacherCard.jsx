import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const getImageUrl = (imagePath) => {
    if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) return null
    const trimmed = imagePath.trim()
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
        return trimmed
    }
    const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed
    return `https://manaret-ezz.dramcode.top/${cleanPath}`
}

export default function TeacherCard({ teacher, t, isRtl }) {
    const navigate = useNavigate()
    const [hasImgError, setHasImgError] = useState(false)
    const [prevImg, setPrevImg] = useState(teacher?.image)

    if (prevImg !== teacher?.image) {
        setPrevImg(teacher?.image)
        setHasImgError(false)
    }

    const imgUrl = hasImgError ? null : getImageUrl(teacher?.image)
    const teacherInitial = teacher?.name ? teacher.name.trim().charAt(0) : 'م'

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800"
        >
            <div className="relative w-full max-w-[250px] sm:max-w-[370px] aspect-[4/5] mb-6">
                <div className={`absolute inset-0 bg-[#FECD31] rounded-[32px] translate-y-3 sm:translate-y-4 ${isRtl ? '-translate-x-3 sm:-translate-x-4' : 'translate-x-3 sm:translate-x-4'}`} />
                {imgUrl ? (
                    <img
                        src={imgUrl}
                        alt={teacher?.name || ''}
                        onError={() => setHasImgError(true)}
                        className="relative w-full h-full object-cover rounded-[32px] shadow-sm z-10 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                ) : (
                    <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-[#00695C] via-[#00594C] to-[#0A4038] flex flex-col items-center justify-center text-white shadow-sm z-10 p-6 text-center select-none">
                        <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-5xl font-extrabold text-white mb-3 shadow-md">
                            {teacherInitial}
                        </div>
                        <span className="text-base font-bold text-white/90">{teacher?.name}</span>
                        <span className="text-xs font-semibold text-emerald-200/90 mt-1">{teacher?.title || t('teacher.certified', 'معلم معتمد')}</span>
                    </div>
                )}
            </div>

            <h1 className="text-2xl sm:text-[28px] font-extrabold text-[#00695C] dark:text-emerald-400 text-center mb-1">
                {teacher?.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 font-semibold text-center mb-6 text-sm sm:text-base">
                {teacher?.title}
            </p>

            <div className="flex items-center gap-4 mb-8 w-full">
                <div className="flex items-center gap-1 text-[#9B7B16] dark:text-amber-400 font-bold">
                    <span className="text-lg">{teacher?.rating || '5.0'}</span>
                    <Star className="w-5 h-5 fill-[#9B7B16] dark:fill-amber-400" />
                </div>

                <div className="flex-1 flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-nowrap">
                    {(teacher?.tags || []).map((tag, i) => (
                        <span key={i} className="whitespace-nowrap bg-[#F2F2F2] dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-bold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full space-y-3">
                <button
                    onClick={() => navigate('/contact')}
                    className="w-full bg-[#00695C] hover:bg-[#004D40] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-md active:scale-95 text-lg cursor-pointer"
                >
                    {t('teacherProfile.bookTrial', 'احجز حصة تجريبية')}
                </button>
                <button
                    onClick={() => navigate('/pricing')}
                    className="w-full bg-black hover:bg-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 text-lg cursor-pointer"
                >
                    {t('teacherProfile.subscribeNow', 'اشترك الآن')}
                </button>
            </div>
        </motion.div>
    )
}
