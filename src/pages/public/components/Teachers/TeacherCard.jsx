import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import { getTeacherImageUrl } from './teachersUtils'

const TeacherCard = React.memo(function TeacherCard({ teacher, t, index = 0 }) {
  const navigate = useNavigate()

  const rawImg = teacher.image || teacher.avatar || teacher.photo
  const [hasError, setHasError] = useState(false)
  const [prevImg, setPrevImg] = useState(rawImg)

  if (prevImg !== rawImg) {
    setPrevImg(rawImg)
    setHasError(false)
  }

  const imgSrc = hasError ? null : getTeacherImageUrl(rawImg)

  const teacherId = teacher.teacher_id || teacher.id || teacher.user_id

  const handleProfileNavigation = () => {
    if (teacherId) {
      navigate(`/teachers/${teacherId}`)
    }
  }

  const ratingDisplay = teacher.rating && Number(teacher.rating) > 0
    ? Number(teacher.rating).toFixed(1)
    : '5.0'

  const countryName = useMemo(() => {
    if (!teacher.country) return null
    if (typeof teacher.country === 'object' && teacher.country !== null) {
      return teacher.country.name || teacher.country.ar || teacher.country.en || null
    }
    const str = String(teacher.country).trim()
    return str || null
  }, [teacher.country])

  const specializations = useMemo(() => {
    const list = []
    if (Array.isArray(teacher.specializations)) {
      teacher.specializations.forEach((s) => {
        const name = typeof s === 'object' && s !== null ? s.name : s
        if (name && name !== teacher.subject && !list.includes(name)) {
          list.push(name)
        }
      })
    }
    return list.slice(0, 2)
  }, [teacher.specializations, teacher.subject])

  const teacherInitial = teacher.name ? teacher.name.trim().charAt(0) : 'م'

  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ willChange: 'transform, opacity' }}
      className="group w-full max-w-[320px] mx-auto overflow-hidden rounded-[28px] bg-[#F5F5F2] dark:bg-slate-900 border border-transparent dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
    >
      <div
        onClick={handleProfileNavigation}
        className="relative overflow-hidden rounded-[28px] p-3 pb-0 cursor-pointer"
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            onError={() => setHasError(true)}
            alt={teacher.name || ''}
            width="320"
            height="400"
            className="aspect-[4/5] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="aspect-[4/5] w-full rounded-[24px] bg-gradient-to-br from-[#00695C] via-[#00594C] to-[#0A4038] flex flex-col items-center justify-center text-white shadow-inner select-none transition-transform duration-700 group-hover:scale-105 p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-4xl font-extrabold text-white mb-3 shadow-md">
              {teacherInitial}
            </div>
            <span className="text-sm font-bold text-white/90 line-clamp-1">{teacher.name}</span>
            <span className="text-xs font-semibold text-emerald-200/90 mt-1">{teacher.subject || t('teacher.certified', 'معلم معتمد')}</span>
          </div>
        )}
      </div>

      <div className="space-y-5 p-6 text-start flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col flex-1 min-w-0">
              <h3
                onClick={handleProfileNavigation}
                className="text-xl lg:text-[22px] font-extrabold leading-tight text-[#00695C] dark:text-emerald-400 truncate cursor-pointer hover:underline"
                title={teacher.name}
              >
                {teacher.name}
              </h3>
              <p className="mt-1.5 text-sm font-semibold text-[#8B6B15] dark:text-amber-400 line-clamp-1" title={teacher.degree || teacher.title}>
                {teacher.degree || teacher.title || t('teacher.jobTitle', 'معلم معتمد')}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[#9B7B16] dark:text-amber-400 shrink-0 mt-0.5 bg-[#F9F5E8] dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-[#9B7B16]/20 dark:border-amber-900/40">
              <Star className="h-3.5 w-3.5 fill-[#9B7B16] dark:fill-amber-400 text-[#9B7B16] dark:text-amber-400" />
              <span className="text-xs font-bold">{ratingDisplay}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-1.5 pt-1">
            {countryName && (
              <span className="rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 px-3 py-1 text-xs font-semibold text-[#8B6B15] dark:text-amber-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8B6B15] dark:text-amber-400 shrink-0" />
                <span>{countryName}</span>
              </span>
            )}
            {teacher.yearsOfExperience !== undefined && (
              <span className="rounded-full bg-[#E7E7E4] dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-[#555] dark:text-slate-300">
                {teacher.yearsOfExperience} {t('teacher.yearsExperience', 'سنوات خبرة')}
              </span>
            )}
            {teacher.subject && (
              <span className="rounded-full bg-[#00695C]/10 dark:bg-[#00695C]/20 px-3 py-1 text-xs font-bold text-[#00695C] dark:text-emerald-400">
                {teacher.subject}
              </span>
            )}
            {specializations.map((spec, i) => (
              <span key={i} className="rounded-full bg-[#E7E7E4] dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-[#7B7B7B] dark:text-slate-400">
                {spec}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleProfileNavigation}
          className="w-full rounded-2xl bg-[#00695C] hover:bg-[#005247] dark:bg-emerald-600 dark:hover:bg-emerald-700 py-3.5 text-[16px] font-bold text-white transition-all duration-300 ease-out hover:shadow-lg active:scale-95 hover:-translate-y-0.5 cursor-pointer"
        >
          {t('teacher.viewProfile', 'عرض الملف الشخصي')}
        </button>
      </div>
    </motion.article>
  )
})

export default TeacherCard
