import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useWebsiteStats from './hooks/useWebsiteStats';
import useFeaturedStudents from './hooks/useFeaturedStudents';
import useEliteTeachers from './hooks/useEliteTeachers';
import useTestimonials from './hooks/useTestimonials';
import useContactInfo from './hooks/useContactInfo';

import WebsiteStatsForm from './components/WebsiteStatsForm.jsx';
import ContactUsForm from './components/ContactUsForm.jsx';
import ExcellenceStarsSection from './components/ExcellenceStarsSection.jsx';
import EliteTeachersSection from './components/EliteTeachersSection.jsx';
import StudentStarModal from './components/StudentStarModal.jsx';
import TeacherFormModal from './components/TeacherFormModal.jsx';
import StarViewModal from './components/StarViewModal.jsx';
import TeacherViewModal from './components/TeacherViewModal.jsx';
import ParentTestimonialsSection from './components/ParentTestimonialsSection.jsx';
import TestimonialFormModal from './components/TestimonialFormModal.jsx';

import { CheckCircle2, AlertCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AdminWebsite() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const showNotification = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const { stats, handleStatChange, handleSaveStats, handleCancelStats } = useWebsiteStats(showNotification);
  
  const {
    stars, isModalOpen, setIsModalOpen, isViewModalOpen, setIsViewModalOpen,
    currentStar, setCurrentStar, systemStudents,
    handleOpenAddModal, handleOpenEditModal, handleOpenViewModal,
    handleDeleteStar, handleSaveModal, handleSaveStarsList, handleCancelStarsList
  } = useFeaturedStudents(showNotification);

  const {
    eliteTeachers, isTeacherModalOpen, setIsTeacherModalOpen, selectedTeacher,
    isTeacherLoading, isTeacherFormOpen, setIsTeacherFormOpen, currentTeacher,
    setCurrentTeacher, systemTeachers, handleOpenAddTeacher, handleOpenEditTeacher,
    handleShowTeacherNotes, handleDeleteTeacher, handleSaveTeacherSubmit
  } = useEliteTeachers(showNotification);

  const {
    testimonials, isTestimonialModalOpen, setIsTestimonialModalOpen, currentTestimonial,
    setCurrentTestimonial, handleOpenAddTestimonial, handleOpenEditTestimonial,
    handleDeleteTestimonial, handleSaveTestimonialSubmit
  } = useTestimonials(showNotification);

  const { contactInfo, handleSaveContactInfo, handleCancelContactInfo } = useContactInfo(showNotification);

  return (
    <div className="space-y-6 lg:space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebsiteStatsForm
        stats={stats}
        handleStatChange={handleStatChange}
        handleSaveStats={handleSaveStats}
        handleCancelStats={handleCancelStats}
      />

      <ExcellenceStarsSection
        stars={stars}
        handleOpenAddModal={handleOpenAddModal}
        handleOpenEditModal={handleOpenEditModal}
        handleOpenViewModal={handleOpenViewModal}
        handleDeleteStar={handleDeleteStar}
        handleCancelStarsList={handleCancelStarsList}
        handleSaveStarsList={handleSaveStarsList}
      />

      <EliteTeachersSection
        teachers={eliteTeachers}
        handleOpenAddTeacher={handleOpenAddTeacher}
        handleOpenEditTeacher={handleOpenEditTeacher}
        handleDeleteTeacher={handleDeleteTeacher}
        handleShowTeacherNotes={handleShowTeacherNotes}
      />

      <ParentTestimonialsSection
        testimonials={testimonials}
        handleOpenAddTestimonial={handleOpenAddTestimonial}
        handleOpenEditTestimonial={handleOpenEditTestimonial}
        handleDeleteTestimonial={handleDeleteTestimonial}
      />

      <StudentStarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentStar={currentStar}
        setCurrentStar={setCurrentStar}
        onSubmit={handleSaveModal}
        systemStudents={systemStudents}
        stars={stars}
      />

      <TeacherFormModal
        isOpen={isTeacherFormOpen}
        onClose={() => setIsTeacherFormOpen(false)}
        currentTeacher={currentTeacher}
        setCurrentTeacher={setCurrentTeacher}
        onSubmit={handleSaveTeacherSubmit}
        systemTeachers={systemTeachers}
        eliteTeachers={eliteTeachers}
      />

      <StarViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        currentStar={currentStar}
      />

      <TeacherViewModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
        teacher={selectedTeacher}
        isLoading={isTeacherLoading}
      />

      <TestimonialFormModal
        isOpen={isTestimonialModalOpen}
        onClose={() => setIsTestimonialModalOpen(false)}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
        onSubmit={handleSaveTestimonialSubmit}
      />
      <ContactUsForm
        contactInfo={contactInfo}
        onSave={handleSaveContactInfo}
        onCancel={handleCancelContactInfo}
      />
      <AnimatePresence>
        {toast.show && (
          <div className="fixed top-5 right-5 z-[9999]">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl border text-white font-semibold ${toast.type === 'success'
                ? 'bg-emerald-600 border-emerald-500'
                : toast.type === 'info'
                  ? 'bg-blue-600 border-blue-500'
                  : 'bg-red-600 border-red-500'
                }`}
            >
              {toast.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
              <span className="text-sm sm:text-base">{toast.message}</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}