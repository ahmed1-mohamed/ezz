import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import imageSrc from '@/images/programs/6.webp'
import { containerVariants, itemVariants } from './teachersUtils'

export default function TeachersHero({ isRtl = true }) {
  const { t } = useTranslation()
  return (
    <section className="overflow-hidden rounded-2xl sm:rounded-[40px] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-12 lg:p-16 shadow-sm">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 max-w-3xl space-y-8 flex-1 flex flex-col items-center text-center lg:items-start lg:text-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-gold-dark bg-[#735C00] dark:bg-amber-600 px-4 py-2 text-sm font-bold text-white shadow-sm">
            {t('teacher.badge', 'معلمونا')}
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="bg-gradient-to-r from-[#00695C] to-[#004D40] dark:from-emerald-400 dark:to-emerald-200 bg-clip-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.3] text-transparent pb-2">
              <span className="block">{t('teacher.titleLine1', 'نخبة من')}</span>
              <span className="block text-[#735C00] dark:text-amber-400 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.3] pt-2">
                {t('teacher.titleLine2', 'أفضل المعلمين المجازين')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {t('teacher.titleLine3', 'تعلم على أيدي نخبة من المعلمين المعتمدين، ذوي الخبرة الطويلة في تحفيظ القرآن الكريم وتدريس علومه واللغة العربية.')}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: isRtl ? 40 : -40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center flex-1"
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute z-0 inset-0 -m-8 rounded-full bg-brand-100/50 dark:bg-brand-900/20 blur-3xl mix-blend-multiply" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white dark:border-slate-800 bg-white dark:bg-slate-800 shadow-2xl"
            >
              <img
                src={imageSrc}
                alt={t('teacher.badge', 'معلمونا')}
                width="512"
                height="320"
                className="w-full h-64 sm:h-72 lg:h-[320px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
