import { useState, lazy, Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import { teachersApi } from '@/shared/services/api/teachersApi'
import TeacherDetailsHeader from './details/TeacherDetailsHeader'
import TeacherDetailsProfile from './details/TeacherDetailsProfile'
import TeacherDetailsStats from './details/TeacherDetailsStats'
import TeacherDetailsSpecializationsAndCertificates from './details/TeacherDetailsSpecializationsAndCertificates'
import TeacherDetailsGroups from './details/TeacherDetailsGroups'
import TeacherDetailsSessions from './details/TeacherDetailsSessions'
import TeacherDetailsActions from './details/TeacherDetailsActions'
import Spinner from '@/shared/components/Spinner'

const SendMessageModal = lazy(() => import('./SendMessageModal'))

export default function TeacherDetailsScreen({
  teacher,
  isRtl,
  t,
  onCancel,
  onToggleStatus,
  onDelete,
  onEdit
}) {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)

  const teacherId = teacher?.teacher_id || teacher?.id

  const { data: freshRes, isLoading } = useQuery({
    queryKey: ['teacher-details', teacherId],
    queryFn: () => teachersApi.fetchTeacherById(teacherId),
    enabled: !!teacherId,
    staleTime: 2 * 60 * 1000,
  })

  const currentTeacher = freshRes?.data || teacher

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherDetailsHeader
        teacher={currentTeacher}
        isRtl={isRtl}
        onCancel={onCancel}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <Spinner />
        </div>
      )}

      <TeacherDetailsProfile
        teacher={currentTeacher}
        isRtl={isRtl}
        t={t}
      />

      <TeacherDetailsStats
        teacher={currentTeacher}
        isRtl={isRtl}
        t={t}
      />

      <TeacherDetailsSpecializationsAndCertificates
        teacher={currentTeacher}
        isRtl={isRtl}
        t={t}
      />

      <TeacherDetailsGroups
        teacher={currentTeacher}
        isRtl={isRtl}
        t={t}
      />

      <TeacherDetailsSessions
        teacher={currentTeacher}
        isRtl={isRtl}
        t={t}
      />

      <TeacherDetailsActions
        teacher={currentTeacher}
        isRtl={isRtl}
        onToggleStatus={onToggleStatus}
        onOpenMessageModal={() => setIsMessageModalOpen(true)}
        onEdit={onEdit}
        onDelete={onDelete}
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