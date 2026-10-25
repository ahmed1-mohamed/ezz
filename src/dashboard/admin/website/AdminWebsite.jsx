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
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions';

export default function AdminWebsite() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const { hasPermission } = useAdminPermissions();

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

  const canViewStats = hasPermission('statistics.read');
  const canUpdateStats = hasPermission('statistics.update');
  const canViewStars = hasPermission('featured_students.read');
  const canCreateStar = hasPermission('featured_students.create');
  const canDeleteStar = hasPermission('featured_students.delete');
  const canViewTeachers = hasPermission('elite_teachers.read');
  const canCreateTeacher = hasPermission('elite_teachers.create');
  const canDeleteTeacher = hasPermission('elite_teachers.delete');
  const canViewTestimonials = hasPermission('testimonials.read');
  const canCreateTestimonial = hasPermission('testimonials.create');
  const canEditTestimonial = hasPermission('testimonials.update');
  const canDeleteTestimonial = hasPermission('testimonials.delete');
  const canViewContact = hasPermission('contact_us.read');
  const canUpdateContact = hasPermission('contact_us.update');
  const hasAnyWebsiteSection = canViewStats || canViewStars || canViewTeachers || canViewTestimonials || canViewContact;

  const { stats, isLoading: isStatsLoading, isSaving: isSavingStats, handleStatChange, handleSaveStats, handleCancelStats } = useWebsiteStats(showNotification, canViewStats);
  
  const {
    stars, isModalOpen, setIsModalOpen, isViewModalOpen, setIsViewModalOpen,
    currentStar, setCurrentStar, systemStudents, isSaving: isSavingStar,
    handleOpenAddModal, handleOpenEditModal, handleOpenViewModal,
    handleDeleteStar, handleSaveModal, handleSaveStarsList, handleCancelStarsList
  } = useFeaturedStudents(showNotification, canViewStars);

  const {
    eliteTeachers, isTeacherModalOpen, setIsTeacherModalOpen, selectedTeacher,
    isTeacherLoading, isTeacherFormOpen, setIsTeacherFormOpen, currentTeacher,
    setCurrentTeacher, systemTeachers, isSaving: isSavingTeacher,
    handleOpenAddTeacher, handleOpenEditTeacher,
    handleShowTeacherNotes, handleDeleteTeacher, handleSaveTeacherSubmit
  } = useEliteTeachers(showNotification, canViewTeachers);

  const {
    testimonials, isTestimonialModalOpen, setIsTestimonialModalOpen, currentTestimonial,
    setCurrentTestimonial, isSaving: isSavingTestimonial, handleOpenAddTestimonial, handleOpenEditTestimonial,
    handleDeleteTestimonial, handleSaveTestimonialSubmit
  } = useTestimonials(showNotification, canViewTestimonials);

  const { contactInfo, isLoading: isContactLoading, isSaving: isSavingContact, handleSaveContactInfo, handleCancelContactInfo } = useContactInfo(showNotification, canViewContact);

  if (!hasAnyWebsiteSection) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center p-8">
        <p className="text-slate-600 dark:text-slate-400 font-bold text-base">
          {isRtl ? 'لا تملك الصلاحيات الكافية لعرض أقسام الموقع الإلكتروني' : 'You do not have permission to view website management sections'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {canViewStats && (
        <WebsiteStatsForm
          stats={stats}
          isLoading={isStatsLoading}
          isSaving={isSavingStats}
          canUpdate={canUpdateStats}
          handleStatChange={handleStatChange}
          handleSaveStats={handleSaveStats}
          handleCancelStats={handleCancelStats}
        />
      )}

      {canViewStars && (
        <ExcellenceStarsSection
          stars={stars}
          handleOpenAddModal={canCreateStar ? handleOpenAddModal : null}
          handleOpenEditModal={handleOpenEditModal}
          handleOpenViewModal={handleOpenViewModal}
          handleDeleteStar={canDeleteStar ? handleDeleteStar : null}
          handleCancelStarsList={handleCancelStarsList}
          handleSaveStarsList={handleSaveStarsList}
        />
      )}

      {canViewTeachers && (
        <EliteTeachersSection
          teachers={eliteTeachers}
          handleOpenAddTeacher={canCreateTeacher ? handleOpenAddTeacher : null}
          handleOpenEditTeacher={handleOpenEditTeacher}
          handleDeleteTeacher={canDeleteTeacher ? handleDeleteTeacher : null}
          handleShowTeacherNotes={handleShowTeacherNotes}
        />
      )}

      {canViewTestimonials && (
        <ParentTestimonialsSection
          testimonials={testimonials}
          handleOpenAddTestimonial={canCreateTestimonial ? handleOpenAddTestimonial : null}
          handleOpenEditTestimonial={canEditTestimonial ? handleOpenEditTestimonial : null}
          handleDeleteTestimonial={canDeleteTestimonial ? handleDeleteTestimonial : null}
        />
      )}

      {isModalOpen && currentStar && canViewStars && (
        <StudentStarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentStar={currentStar}
          setCurrentStar={setCurrentStar}
          onSubmit={handleSaveModal}
          systemStudents={systemStudents}
          stars={stars}
          isSaving={isSavingStar}
        />
      )}

      {isTeacherFormOpen && currentTeacher && canViewTeachers && (
        <TeacherFormModal
          isOpen={isTeacherFormOpen}
          onClose={() => setIsTeacherFormOpen(false)}
          currentTeacher={currentTeacher}
          setCurrentTeacher={setCurrentTeacher}
          onSubmit={handleSaveTeacherSubmit}
          systemTeachers={systemTeachers}
          eliteTeachers={eliteTeachers}
          isSaving={isSavingTeacher}
        />
      )}

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
        isSaving={isSavingTestimonial}
      />

      {canViewContact && (
        <ContactUsForm
          contactInfo={contactInfo}
          isLoading={isContactLoading}
          isSaving={isSavingContact}
          canUpdate={canUpdateContact}
          onSave={handleSaveContactInfo}
          onCancel={handleCancelContactInfo}
        />
      )}
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