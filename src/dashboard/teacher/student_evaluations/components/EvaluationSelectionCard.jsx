import { useTranslation } from 'react-i18next';
import { ChevronDown, Users } from 'lucide-react';

export default function EvaluationSelectionCard({
  groupsList,
  activeGroupId,
  onSelectGroup,
  isLoadingGroups,
  sessionsList,
  activeSessionId,
  onSelectSession,
  isLoadingGroupDetails,
  studentsList,
  activeStudentId,
  onSelectStudent,
}) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
      <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
        {t('teacherEvaluations.selectGroupAndSession', 'اختر المجموعة و الحصة')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
            {t('teacherEvaluations.studyGroup', 'المجموعة الدراسية')}
          </label>
          <div className="relative">
            <select
              value={activeGroupId}
              onChange={(e) => onSelectGroup(e.target.value)}
              disabled={isLoadingGroups || groupsList.length === 0}
              className="w-full appearance-none px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold focus:outline-none focus:border-[#00594C] cursor-pointer disabled:opacity-60"
            >
              {groupsList.length === 0 ? (
                <option value="">
                  {t('teacherEvaluations.noGroupsAvailable', 'لا توجد مجموعات متاحة حالياً')}
                </option>
              ) : (
                groupsList.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))
              )}
            </select>
            <ChevronDown
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
            {t('teacherEvaluations.session', 'الحصة')}
          </label>
          <div className="relative">
            <select
              value={activeSessionId}
              onChange={(e) => onSelectSession(e.target.value)}
              disabled={isLoadingGroupDetails || sessionsList.length === 0}
              className="w-full appearance-none px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold focus:outline-none focus:border-[#00594C] cursor-pointer disabled:opacity-60"
            >
              {sessionsList.length === 0 ? (
                <option value="">
                  {t('teacherEvaluations.noSessionsRecorded', 'لا توجد حصص مسجلة لهذه المجموعة')}
                </option>
              ) : (
                sessionsList.map((sess) => (
                  <option key={sess.id} value={sess.id}>
                    {sess.name} {sess.date ? `(${sess.date})` : ''}
                  </option>
                ))
              )}
            </select>
            <ChevronDown
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2.5 pt-1">
        <label className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
          {t('teacherEvaluations.selectStudent', 'اختر الطالب للتقييم')}
        </label>

        {studentsList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
            <Users size={24} className="mx-auto mb-1 text-slate-300 dark:text-slate-600" />
            <p className="text-xs font-bold">
              {t('teacherEvaluations.noStudentsInGroup', 'لا يوجد طلاب مسجلين في هذه المجموعة بعد')}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {studentsList.map((student) => {
              const isSelected = student.id === activeStudentId;
              return (
                <button
                  type="button"
                  key={student.id}
                  onClick={() => onSelectStudent(student.id)}
                  className={`min-w-[150px] px-4 py-3 rounded-2xl text-center transition shrink-0 cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#00594C] bg-[#e8f7f3] dark:bg-emerald-950/30 shadow-xs'
                      : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-white truncate">
                    {student.name}
                  </div>
                  {student.lastGrade !== null && (
                    <div className="text-[11px] text-slate-400 font-semibold mt-0.5">
                      {t('teacherEvaluations.lastGrade', 'آخر درجة: {{grade}}%', { grade: student.lastGrade })}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
