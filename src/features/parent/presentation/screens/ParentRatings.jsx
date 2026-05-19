import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchTeachers, fetchPastRatings, submitTeacherRating } from '../../../../features/parent/parentSlice';
import { Star, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Spinner from '../../../../components/ui/Spinner';

export default function ParentRatings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { teachers, pastRatings, loading, ratingSubmitStatus } = useSelector((state) => state.parent);
  
  const isRtl = i18n.language.startsWith('ar');

  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(fetchPastRatings());
  }, [dispatch]);

  const handleSubmitComplaint = () => {
    navigate('/dashboard/parent/complaints');
  };

  const handleRatingSubmit = (rating) => {
    if (!selectedTeacherId) return;
    setRatingValue(rating);
    dispatch(submitTeacherRating({ teacherId: selectedTeacherId, rating }));
  };

  if (loading && teachers.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 font-sans"
    >
      
      {/* Header Card */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm text-center border border-slate-100 dark:border-slate-700 transition-all hover:shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {t('parentDashboard.ratings.title')}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          {t('parentDashboard.ratings.subtitle')}
        </p>
      </motion.div>

      {/* Select Teacher Section */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.ratings.selectTeacher')}
        </h2>
        
        <div className="space-y-3">
          {teachers.map((teacher) => {
            const isSelected = selectedTeacherId === teacher.id;
            return (
              <div 
                key={teacher.id}
                onClick={() => setSelectedTeacherId(teacher.id)}
                className={`
                  flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border-2
                  ${isSelected ? 'border-[#0f7a6c] bg-emerald-50 dark:bg-emerald-900/20 shadow-sm' : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30 hover:shadow-sm'}
                `}
              >
                <div className="flex items-center gap-4 text-start">
                  <div className={`w-12 h-12 rounded-full ${teacher.color} flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-sm`}>
                    {teacher.avatar}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                      {isRtl ? teacher.name : teacher.nameEn}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {isRtl ? teacher.subject : teacher.subjectEn}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <span>({teacher.reviewsCount} {t('parentDashboard.ratings.evaluations')})</span>
                      <span className="text-yellow-400 font-medium ms-1">{teacher.rating}</span>
                      <Star size={12} className="text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="ms-4 shrink-0">
                  {isSelected ? (
                    <div className="text-[#0f7a6c]">
                      <CheckCircle2 size={24} className="fill-current text-[#0f7a6c] bg-white rounded-full" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-600 group-hover:border-[#0f7a6c]/50 transition-colors" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Rating Stars Section */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center min-h-[200px]">
        {selectedTeacherId ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6 text-start">
              {(() => {
                const teacher = teachers.find(t => t.id === selectedTeacherId);
                return teacher && (
                  <>
                    <div className={`w-12 h-12 rounded-full ${teacher.color} flex items-center justify-center text-white font-bold shadow-md`}>
                      {teacher.avatar}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100">{isRtl ? teacher.name : teacher.nameEn}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{isRtl ? teacher.subject : teacher.subjectEn}</p>
                    </div>
                  </>
                );
              })()}
            </div>
            
            <p className="text-sm text-slate-500 mb-4 font-medium">* {t('parentDashboard.ratings.yourRating')}</p>
            
            <div className="flex items-center justify-center gap-2" dir="ltr">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => handleRatingSubmit(star)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star 
                    size={44} 
                    className={`
                      ${(hoverRating || ratingValue) >= star 
                        ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' 
                        : 'text-slate-200 dark:text-slate-700'}
                      transition-colors duration-200
                    `} 
                  />
                </button>
              ))}
            </div>

            {ratingSubmitStatus === 'success' && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-lg">
                {t('parentDashboard.ratings.sending').replace('...', '')}
              </motion.p>
            )}
            {ratingSubmitStatus === 'loading' && (
              <div className="mt-6"><Spinner size="sm" /></div>
            )}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center text-slate-400 dark:text-slate-500">
            <Star size={48} className="mb-4 opacity-20" />
            <p className="font-medium text-center">
              {t('parentDashboard.ratings.ratingHint')}
            </p>
          </div>
        )}
      </motion.div>

      {/* Complaints Section */}
      <motion.div variants={itemVariants} className="bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10 rounded-xl p-6 shadow-sm border border-[#0f7a6c]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-start order-2 sm:order-1">
          <h3 className="font-bold text-[#0f7a6c] dark:text-emerald-400 text-lg mb-1">{t('parentDashboard.ratings.complaintQuestion')}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t('parentDashboard.ratings.complaintHint')}</p>
        </div>
        <button 
          onClick={handleSubmitComplaint}
          className="flex items-center gap-2 px-6 py-3 bg-[#0f7a6c] hover:bg-[#0c6156] text-white rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap order-1 sm:order-2"
        >
          <MessageSquare size={18} />
          <span>{t('parentDashboard.ratings.submitComplaint')}</span>
        </button>
      </motion.div>

      {/* Past Ratings Section */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-4">
        <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 text-start">
          {t('parentDashboard.ratings.pastRatings')}
        </h2>
        
        <div className="space-y-4">
          {pastRatings.map((rating) => (
            <div key={rating.id} className="border border-slate-100 dark:border-slate-700 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-200 dark:hover:border-slate-600 transition-colors">
              
              <div className="flex flex-col text-start">
                <h3 className="font-bold text-slate-800 dark:text-slate-100">{isRtl ? rating.teacherName : rating.teacherNameEn}</h3>
                <div className="flex items-center gap-1 my-1.5" dir="ltr">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star} 
                      size={14} 
                      className={star <= rating.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200 dark:text-slate-700'} 
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {isRtl ? rating.comment : rating.commentEn}
                </p>
              </div>

              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg shrink-0">
                {rating.date}
              </span>
              
            </div>
          ))}
          {pastRatings.length === 0 && (
            <p className="text-center text-slate-500 dark:text-slate-400 py-8 font-medium">
              لا توجد تقييمات سابقة
            </p>
          )}
        </div>
      </motion.div>

    </motion.div>
  );
}
