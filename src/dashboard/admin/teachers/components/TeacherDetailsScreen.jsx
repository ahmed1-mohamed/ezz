import { useState, lazy, Suspense } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ArrowRight, ArrowLeft, Pencil } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { teachersApi } from '@/shared/services/api/teachersApi'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import TeacherDetailsHeaderCard from './details/TeacherDetailsHeaderCard'
import TeacherDetailsPersonalInfoCard from './details/TeacherDetailsPersonalInfoCard'
import TeacherDetailsAcademicCard from './details/TeacherDetailsAcademicCard'
import TeacherDetailsContactCard from './details/TeacherDetailsContactCard'
import TeacherDetailsSecurityCard from './details/TeacherDetailsSecurityCard'
import TeacherDetailsCertificatesCard from './details/TeacherDetailsCertificatesCard'
import TeacherDetailsWebsiteCard from './details/TeacherDetailsWebsiteCard'
import TeacherDetailsPerformanceCard from './details/TeacherDetailsPerformanceCard'
import TeacherDetailsGroupsCard from './details/TeacherDetailsGroupsCard'
import TeacherDetailsRecentLessonsCard from './details/TeacherDetailsRecentLessonsCard'
import UpdateHourlyRateModal from './details/UpdateHourlyRateModal'
import ChangeTeacherPasswordModal from './details/ChangeTeacherPasswordModal'
import AddCertificateModal from './details/AddCertificateModal'
import EditCertificateModal from './details/EditCertificateModal'
import Spinner from '@/shared/components/Spinner'

const SendMessageModal = lazy(() => import('./SendMessageModal'))

export default function TeacherDetailsScreen({
  teacher,
  isRtl = true,
  t,
  onCancel,
  onEdit
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const queryClient = useQueryClient()
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
  const [isHourlyRateModalOpen, setIsHourlyRateModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [isAddCertModalOpen, setIsAddCertModalOpen] = useState(false)
  const [editingCert, setEditingCert] = useState(null)

  const teacherId = teacher?.teacher_id || teacher?.id

  const { data: freshRes, isLoading, refetch } = useQuery({
    queryKey: ['teacher-details', teacherId],
    queryFn: () => teachersApi.fetchTeacherById(teacherId),
    enabled: !!teacherId,
    staleTime: 60 * 1000,
  })

  const currentTeacher = freshRes?.data || teacher

  const handleRefetchTeacher = async () => {
    await refetch()
    await queryClient.invalidateQueries({ queryKey: ['teacher-details', teacherId] })
    await queryClient.invalidateQueries({ queryKey: ['teachers'] })
  }

  const handleDeleteCertificate = async (cert) => {
    if (!cert) return
    const certId = cert.id || cert._id
    const certTitle = cert.name || (isRtl ? 'الشهادة' : 'Certificate')

    const isConfirmed = await showDeleteConfirm(isRtl, certTitle)
    if (!isConfirmed) return

    try {
      await teachersApi.deleteTeacherCertificate(teacherId, certId)
      toast.success(isRtl ? 'تم حذف الشهادة بنجاح' : 'Certificate deleted successfully')
      await handleRefetchTeacher()
    } catch (err) {
      const backendMsg = err.response?.data?.message
      const errorText = Array.isArray(backendMsg)
        ? backendMsg.join(' - ')
        : (backendMsg || (isRtl ? 'حدث خطأ أثناء حذف الشهادة' : 'Failed to delete certificate'))
      toast.error(errorText)
    }
  }

  if (isLoading && !currentTeacher) {
    return (
      <div className="flex flex-col items-center justify-center p-16 space-y-4">
        <Spinner />
        <p className="text-sm font-semibold text-slate-500">
          {isRtl ? 'جاري تحميل تفاصيل المعلم...' : 'Loading teacher details...'}
        </p>
      </div>
    )
  }

  if (!currentTeacher) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 space-y-4 max-w-xl mx-auto">
        <p className="text-base font-bold text-slate-700 dark:text-slate-300">
          {isRtl ? 'لم يتم العثور على بيانات المعلم' : 'Teacher details not found'}
        </p>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 bg-[#005953] hover:bg-[#004742] text-white rounded-xl text-sm font-bold transition-all cursor-pointer"
          >
            {isRtl ? 'العودة لقائمة المعلمين' : 'Back to teachers list'}
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
       <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
              title={isRtl ? 'العودة لقائمة المعلمين' : 'Back to teachers list'}
            >
              <BackArrow size={20} />
            </button>
          )}
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white hidden sm:block">
            {isRtl ? 'تفاصيل المعلم' : 'Teacher Details'}
          </h1>
        </div>

        {onEdit && (
          <button
            type="button"
            onClick={() => onEdit(currentTeacher)}
            className="flex items-center gap-2 px-6 py-3 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl text-sm transition-all shadow-md shadow-[#005953]/15 active:scale-95 cursor-pointer"
          >
            <Pencil size={16} />
            <span>{isRtl ? 'تعديل البيانات' : 'Edit Profile'}</span>
          </button>
        )}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center p-2">
          <Spinner />
        </div>
      )}

       <TeacherDetailsHeaderCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsPersonalInfoCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsAcademicCard
        teacher={currentTeacher}
        isRtl={isRtl}
        onDeleteAchievement={(idx) => {
          const currentList = Array.isArray(currentTeacher.achievements) ? currentTeacher.achievements : []
          const updated = currentList.filter((_, i) => i !== idx)
          teachersApi.updateTeacher(teacherId, { achievements: updated })
            .then(handleRefetchTeacher)
            .catch(() => {})
        }}
      />

       <TeacherDetailsContactCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsSecurityCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsCertificatesCard
        teacher={currentTeacher}
        isRtl={isRtl}
        onAddCertificate={() => setIsAddCertModalOpen(true)}
        onEditCertificate={(cert) => setEditingCert(cert)}
        onDeleteCertificate={handleDeleteCertificate}
      />

       <TeacherDetailsWebsiteCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsPerformanceCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsGroupsCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       <TeacherDetailsRecentLessonsCard
        teacher={currentTeacher}
        isRtl={isRtl}
      />

       
      <UpdateHourlyRateModal
        isOpen={isHourlyRateModalOpen}
        onClose={() => setIsHourlyRateModalOpen(false)}
        teacher={currentTeacher}
        isRtl={isRtl}
        onSuccess={handleRefetchTeacher}
      />

      <ChangeTeacherPasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        teacher={currentTeacher}
        isRtl={isRtl}
        onSuccess={handleRefetchTeacher}
      />

      <AddCertificateModal
        isOpen={isAddCertModalOpen}
        onClose={() => setIsAddCertModalOpen(false)}
        teacherId={teacherId}
        isRtl={isRtl}
        onSuccess={handleRefetchTeacher}
      />

      <EditCertificateModal
        isOpen={Boolean(editingCert)}
        onClose={() => setEditingCert(null)}
        teacherId={teacherId}
        certificate={editingCert}
        isRtl={isRtl}
        onSuccess={handleRefetchTeacher}
      />

      <Suspense fallback={null}>
        {isMessageModalOpen && (
          <SendMessageModal
            isOpen={isMessageModalOpen}
            onClose={() => setIsMessageModalOpen(false)}
            teacher={currentTeacher}
            isRtl={isRtl}
            t={t}
          />
        )}
      </Suspense>
    </div>
  )
}