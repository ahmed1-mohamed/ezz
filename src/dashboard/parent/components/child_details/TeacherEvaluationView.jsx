import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function TeacherEvaluationView({ onBack }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedTeacherId, setSelectedTeacherId] = useState(1);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const teachers = [
    { id: 1, name: t('parent.mockData.teachers.sheikhAhmedMansourName'), subject: t('parent.mockData.subjects.holyQuran'), rating: 4.8, reviewsCount: 120, avatarChar: 'أ' },
    { id: 2, name: t('parent.mockData.teachers.ustadhaFatimaAli'), subject: t('parent.mockData.subjects.tajweed'), rating: 4.9, reviewsCount: 85, avatarChar: 'ف' }
  ];

  const previousEvaluations = [
    { id: 1, name: t('parent.mockData.teachers.sheikhAhmedMansourName'), date: '2024-04-15', rating: 5, comment: t('parent.mockData.evaluations.excellentAndCooperativeTeacher') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const selectedTeacher = teachers.find(t => t.id === selectedTeacherId);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6 font-sans w-full"
      dir={i18n.language.startsWith('ar') ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#0f7a6c] hover:text-[#0c6156] transition-colors font-bold text-sm bg-[#0f7a6c]/10 px-4 py-2 rounded-xl"
        >
          <ArrowRight className={`w-4 h-4 ${i18n.language.startsWith('ar') ? '' : 'rotate-180'}`} />
          {t('parent.childDetails.back')}
        </button>
      </div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-start gap-2 text-start">
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.childDetails.evaluateTeachers')}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.ratings.subtitle')}</p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parent.childDetails.selectTeacher')}</h2>
        <div className="space-y-4">
          {teachers.map((teacher) => {
            const isSelected = selectedTeacherId === teacher.id;
            return (
              <div
                key={teacher.id}
                onClick={() => setSelectedTeacherId(teacher.id)}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${isSelected
                    ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                    : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30'
                  }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-xl font-bold shrink-0">
                  {teacher.avatarChar}
                </div>

                <div className="flex-grow text-start px-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{teacher.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-2">{teacher.subject}</p>
                  <div className="flex items-center justify-start gap-1 text-[10px] text-slate-400">
                    <span className="font-bold text-amber-500">{teacher.rating}</span>
                    <div className="flex items-center gap-0.5 mx-2" dir="ltr">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`w-3 h-3 ${s <= Math.round(teacher.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span>{teacher.reviewsCount} {t('parent.ratings.evaluations')}</span>
                  </div>
                </div>

                <div className="shrink-0 w-8 flex items-center justify-end">
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-[#0f7a6c]" />}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {selectedTeacher && (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start">
          <div className="flex items-center justify-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-lg font-bold shrink-0">
              {selectedTeacher.avatarChar}
            </div>
            <div className="text-start">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{selectedTeacher.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{selectedTeacher.subject}</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-4 w-full text-start">{t('parent.childDetails.rateTeacher')} *</span>
            <div className="flex items-center gap-2 mb-4" dir="ltr">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                  className="p-1 transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star
                    className={`w-10 h-10 ${star <= (hoveredRating || rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300 dark:text-slate-600'
                      } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-start">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{t('parent.childDetails.hasComplaint')}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('parent.childDetails.canSubmitComplaint')}</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/parent/complaints')}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors w-full sm:w-auto justify-center"
        >
          <MessageSquare className="w-4 h-4" />
          {t('parent.childDetails.submitComplaint')}
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parent.ratings.pastRatings')}</h2>
        <div className="space-y-4">
          {previousEvaluations.map((review) => (
            <div key={review.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 gap-4">
              <div className="flex-grow text-start order-2 sm:order-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">{review.name}</h3>
                <div className="flex justify-start gap-0.5 mb-2" dir="ltr">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-3 h-3 ${s <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{review.comment}</p>
              </div>
              <span className="text-[10px] text-slate-400 order-1 sm:order-2 shrink-0">{review.date}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
}
