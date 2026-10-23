import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { parentApi } from '@/shared/services/api/parentApi';

export default function TeacherEvaluationView({ onBack }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [previousEvaluations, setPreviousEvaluations] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [teachersRes, ratingsRes] = await Promise.all([
          parentApi.fetchTeachersList(),
          parentApi.fetchPastRatings()
        ]);
        if (isMounted) {
          const teacherList = (teachersRes?.success && Array.isArray(teachersRes.data)) ? teachersRes.data : [];
          setTeachers(teacherList);
          if (teacherList.length > 0) {
            setSelectedTeacherId(teacherList[0].id || teacherList[0]._id);
          }
          const ratingsList = (ratingsRes?.success && Array.isArray(ratingsRes.data)) ? ratingsRes.data : [];
          setPreviousEvaluations(ratingsList);
        }
      } catch (err) {
        console.error('Failed to load evaluation data', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, []);

  const handleSubmitRating = async () => {
    if (!selectedTeacherId || rating === 0) {
      toast.error(t('parent.ratings.selectRatingRequired', 'يرجى اختيار التقييم أولاً'));
      return;
    }
    setIsSubmitting(true);
    try {
      await parentApi.submitRating({
        teacherId: selectedTeacherId,
        rating,
        comment: comment.trim()
      });
      toast.success(t('parent.ratings.ratingSuccess', 'تم إرسال التقييم بنجاح'));
      setRating(0);
      setComment('');
      const ratingsRes = await parentApi.fetchPastRatings();
      if (ratingsRes?.success && Array.isArray(ratingsRes.data)) {
        setPreviousEvaluations(ratingsRes.data);
      }
    } catch {
      toast.error(t('parent.ratings.ratingError', 'حدث خطأ أثناء إرسال التقييم'));
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const selectedTeacher = teachers.find(item => (item.id || item._id) === selectedTeacherId);

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
          {t('parent.childDetails.back', 'رجوع')}
        </button>
      </div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-start gap-2 text-start">
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{t('parent.childDetails.evaluateTeachers', 'تقييم المعلمين')}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('parent.ratings.subtitle', 'شاركنا رأيك في أداء معلمي أبنائك')}</p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parent.childDetails.selectTeacher', 'اختر المعلم')}</h2>
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2].map((n) => (
              <div key={n} className="h-16 rounded-xl bg-slate-100 dark:bg-slate-700/50 animate-pulse" />
            ))}
          </div>
        ) : teachers.length === 0 ? (
          <p className="text-sm text-slate-500 py-4 text-center">{t('parent.ratings.noTeachers', 'لا يوجد معلمون متاحون حالياً للتقييم')}</p>
        ) : (
          <div className="space-y-4">
            {teachers.map((teacher) => {
              const teacherId = teacher.id || teacher._id;
              const isSelected = selectedTeacherId === teacherId;
              const name = typeof teacher.name === 'object'
                ? (i18n.language.startsWith('ar') ? teacher.name.ar : teacher.name.en)
                : (teacher.name || '-');
              const subject = teacher.subject || teacher.specialization || '';
              const ratingVal = Number(teacher.rating || 5);
              const avatarChar = name.charAt(0) || 'م';

              return (
                <div
                  key={teacherId}
                  onClick={() => setSelectedTeacherId(teacherId)}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${isSelected
                      ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                      : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30'
                    }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {teacher.image ? (
                      <img src={teacher.image} alt={name} className="w-full h-full object-cover rounded-full" />
                    ) : avatarChar}
                  </div>

                  <div className="flex-grow text-start px-4">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{name}</h3>
                    {subject && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-2">{subject}</p>}
                    <div className="flex items-center justify-start gap-1 text-[10px] text-slate-400">
                      <span className="font-bold text-amber-500">{ratingVal.toFixed(1)}</span>
                      <div className="flex items-center gap-0.5 mx-2" dir="ltr">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className={`w-3 h-3 ${s <= Math.round(ratingVal) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                        ))}
                      </div>
                      {teacher.reviewsCount !== undefined && <span>{teacher.reviewsCount} {t('parent.ratings.evaluations', 'تقييم')}</span>}
                    </div>
                  </div>

                  <div className="shrink-0 w-8 flex items-center justify-end">
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-[#0f7a6c]" />}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>

      {selectedTeacher && (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start">
          <div className="flex items-center justify-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center text-lg font-bold shrink-0">
              {(selectedTeacher.name?.ar || selectedTeacher.name || 'م').charAt(0)}
            </div>
            <div className="text-start">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                {typeof selectedTeacher.name === 'object' ? selectedTeacher.name.ar : selectedTeacher.name}
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-4 w-full text-start">{t('parent.childDetails.rateTeacher', 'قيّم المعلم')} *</span>
            <div className="flex items-center gap-2 mb-4" dir="ltr">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
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

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('parent.ratings.commentPlaceholder', 'أضف ملاحظاتك أو تعليقك هنا...')}
              rows={3}
              className="w-full mt-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
            />

            <button
              onClick={handleSubmitRating}
              disabled={isSubmitting || rating === 0}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] disabled:opacity-50 text-white font-bold text-sm transition-colors self-end"
            >
              {isSubmitting ? t('parent.ratings.submitting', 'جاري الإرسال...') : t('parent.ratings.submit', 'إرسال التقييم')}
            </button>
          </div>
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-start">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{t('parent.childDetails.hasComplaint', 'هل لديك شكوى أو استفسار؟')}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('parent.childDetails.canSubmitComplaint', 'يمكنك تقديم شكوى مباشرة إلى الإدارة')}</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/parent/complaints')}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors w-full sm:w-auto justify-center"
        >
          <MessageSquare className="w-4 h-4" />
          {t('parent.childDetails.submitComplaint', 'تقديم شكوى')}
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-start">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-6">{t('parent.ratings.pastRatings', 'التقييمات السابقة')}</h2>
        {previousEvaluations.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-4">{t('parent.ratings.noPastRatings', 'لا توجد تقييمات سابقة')}</p>
        ) : (
          <div className="space-y-4">
            {previousEvaluations.map((review, idx) => (
              <div key={review.id || review._id || idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 gap-4">
                <div className="flex-grow text-start order-2 sm:order-1">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">{review.name || review.teacherName || t('parent.ratings.teacher', 'معلم')}</h3>
                  <div className="flex justify-start gap-0.5 mb-2" dir="ltr">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`w-3 h-3 ${s <= (review.rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                    ))}
                  </div>
                  {review.comment && <p className="text-xs text-slate-500 dark:text-slate-400">{review.comment}</p>}
                </div>
                {review.date && <span className="text-[10px] text-slate-400 order-1 sm:order-2 shrink-0">{review.date}</span>}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
