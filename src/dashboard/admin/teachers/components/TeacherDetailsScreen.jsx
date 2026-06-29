import { useState, lazy, Suspense } from 'react'
import TeacherDetailsHeader from './details/TeacherDetailsHeader'
import TeacherDetailsProfile from './details/TeacherDetailsProfile'
import TeacherDetailsStats from './details/TeacherDetailsStats'
import TeacherDetailsGroups from './details/TeacherDetailsGroups'
import TeacherDetailsSessions from './details/TeacherDetailsSessions'
import TeacherDetailsActions from './details/TeacherDetailsActions'

const SendMessageModal = lazy(() => import('./SendMessageModal'))

export default function TeacherDetailsScreen({
  teacher,
  isRtl,
  t,
  onCancel,
  onToggleStatus,
  onEdit
}) {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)

  return (
    <div className="space-y-8 pb-10 text-start animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      <TeacherDetailsHeader 
        teacher={teacher} 
        isRtl={isRtl} 
        onCancel={onCancel} 
        onEdit={onEdit} 
      />

      <TeacherDetailsProfile 
        teacher={teacher} 
        isRtl={isRtl} 
      />

      <TeacherDetailsStats 
        teacher={teacher} 
        isRtl={isRtl} 
        t={t} 
      />

      <TeacherDetailsGroups 
        teacher={teacher} 
        isRtl={isRtl} 
        t={t} 
      />

      <TeacherDetailsSessions 
        teacher={teacher} 
        isRtl={isRtl} 
        t={t} 
      />

      <TeacherDetailsActions 
        teacher={teacher} 
        isRtl={isRtl} 
        onToggleStatus={onToggleStatus} 
        onOpenMessageModal={() => setIsMessageModalOpen(true)} 
      />

      <Suspense fallback={null}>
        {isMessageModalOpen && (
          <SendMessageModal
            isOpen={isMessageModalOpen}
            onClose={() => setIsMessageModalOpen(false)}
            teacher={teacher}
            isRtl={isRtl}
            t={t}
          />
        )}
      </Suspense>
    </div>
  )
}