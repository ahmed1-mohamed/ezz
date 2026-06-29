import useWebsiteAdmin from './hooks/useWebsiteAdmin';

import WebsiteStatsForm from './components/WebsiteStatsForm.jsx';
import ContactUsForm from './components/ContactUsForm.jsx';
import ExcellenceStarsSection from './components/ExcellenceStarsSection.jsx';
import EliteTeachersSection from './components/EliteTeachersSection.jsx';
import StudentStarModal from './components/StudentStarModal.jsx';
import TeacherFormModal from './components/TeacherFormModal.jsx';
import StarViewModal from './components/StarViewModal.jsx';
import TeacherViewModal from './components/TeacherViewModal.jsx';

import { CheckCircle2, AlertCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AdminWebsite() {
  const {
    isRtl,
    stats,
    contactInfo,
    stars,
    eliteTeachers,
    isTeacherModalOpen,
    selectedTeacher,
    isTeacherLoading,
    isTeacherFormOpen,
    currentTeacher,
    isModalOpen,
    isViewModalOpen,
    currentStar,
    systemTeachers,
    toast,
    setCurrentTeacher,
    setCurrentStar,
    handleStatChange,
    handleSaveStats,
    handleCancelStats,
    handleSaveContactInfo,
    handleCancelContactInfo,
    handleOpenAddModal,
    handleOpenEditModal,
    handleOpenViewModal,
    handleDeleteStar,
    handleCancelStarsList,
    handleSaveStarsList,
    handleOpenAddTeacher,
    handleOpenEditTeacher,
    handleShowTeacherNotes,
    handleDeleteTeacher,
    handleSaveModal,
    handleSaveTeacherSubmit,
    setIsModalOpen,
    setIsTeacherFormOpen,
    setIsViewModalOpen,
    setIsTeacherModalOpen
  } = useWebsiteAdmin();

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
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

      <StudentStarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentStar={currentStar}
        setCurrentStar={setCurrentStar}
        onSubmit={handleSaveModal}
      />

      <TeacherFormModal
        isOpen={isTeacherFormOpen}
        onClose={() => setIsTeacherFormOpen(false)}
        currentTeacher={currentTeacher}
        setCurrentTeacher={setCurrentTeacher}
        onSubmit={handleSaveTeacherSubmit}
        systemTeachers={systemTeachers}
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