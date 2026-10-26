import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { teacherEvaluationsApi } from '@/shared/services/api/teacherEvaluationsApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';
import EvaluationHeader from './components/EvaluationHeader.jsx';
import EvaluationSelectionCard from './components/EvaluationSelectionCard.jsx';
import EvaluationFormCard from './components/EvaluationFormCard.jsx';
import EvaluationHistoryList from './components/EvaluationHistoryList.jsx';

function isValidObjectId(id) {
  return typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id);
}

export default function TeacherEvaluations() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();

  const [currentTimeStr, setCurrentTimeStr] = useState('01:53:04 AM');
  const [currentDateStr, setCurrentDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString('en-US'));
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US'));
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [selectedSessionId, setSelectedSessionId] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [rating, setRating] = useState(5);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [evalPage, setEvalPage] = useState(1);
  const evalsPerPage = 5;

  const {
    data: groupsRes,
    isLoading: isLoadingGroups,
    refetch: refetchGroups,
  } = useQuery({
    queryKey: ['teacher-eval-groups'],
    queryFn: async () => {
      try {
        const activeRes = await teacherGroupsApi.fetchActiveGroups();
        if (Array.isArray(activeRes?.data) && activeRes.data.length > 0) {
          return activeRes;
        }
        return await teacherGroupsApi.fetchGroups();
      } catch {
        return await teacherEvaluationsApi.fetchTeacherGroups();
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  const groupsList = useMemo(() => {
    const raw = groupsRes?.data || (Array.isArray(groupsRes) ? groupsRes : []);
    if (Array.isArray(raw)) {
      return raw
        .map((g) => ({
          id: g.id || g._id,
          name:
            typeof g.name === 'object' && g.name !== null
              ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar)
              : g.name || t('teacherEvaluations.defaultGroupName', 'مجموعة دراسية'),
        }))
        .filter((g) => isValidObjectId(g.id));
    }
    return [];
  }, [groupsRes, isRtl, t]);

  const activeGroupId = useMemo(() => {
    if (selectedGroupId && groupsList.some((g) => g.id === selectedGroupId)) {
      return selectedGroupId;
    }
    return groupsList[0]?.id || '';
  }, [selectedGroupId, groupsList]);

  const {
    data: groupDetailsRes,
    isLoading: isLoadingGroupDetails,
    refetch: refetchGroupDetails,
  } = useQuery({
    queryKey: ['teacher-eval-group-details', activeGroupId],
    queryFn: () => teacherGroupsApi.fetchGroupDetails(activeGroupId),
    enabled: isValidObjectId(activeGroupId),
    staleTime: 0,
  });

  const sessionsList = useMemo(() => {
    const groupData = groupDetailsRes?.data || groupDetailsRes || {};
    const groupSessions = groupData.sessionsHistory || groupData.sessions || [];
    let list = [];

    if (Array.isArray(groupSessions) && groupSessions.length > 0) {
      list = groupSessions.map((s, idx) => ({
        id: s.id || s._id,
        name:
          s.title ||
          s.name ||
          t('teacherEvaluations.defaultSessionName', 'الحصة {{number}}', { number: idx + 1 }),
        date: s.date || s.startTime?.split('T')[0] || '',
      }));
    }

    return list.filter((s) => isValidObjectId(s.id));
  }, [groupDetailsRes, t]);

  const activeSessionId = useMemo(() => {
    if (selectedSessionId && sessionsList.some((s) => s.id === selectedSessionId)) {
      return selectedSessionId;
    }
    return sessionsList[0]?.id || '';
  }, [selectedSessionId, sessionsList]);

  const studentsList = useMemo(() => {
    const groupData = groupDetailsRes?.data || groupDetailsRes || {};
    const students = groupData.students || [];

    if (Array.isArray(students) && students.length > 0) {
      return students
        .map((std, idx) => {
          const rawId = std.id || std._id || std.student?._id || std.student?.id || std.student_id;
          const rawName = std.name || std.student?.name;
          const fallbackName = t('teacherEvaluations.defaultStudentName', 'طالب {{number}}', {
            number: idx + 1,
          });
          const nameStr =
            typeof rawName === 'object' && rawName !== null
              ? (isRtl ? rawName.ar || rawName.en : rawName.en || rawName.ar) || fallbackName
              : rawName || fallbackName;

          const avgRating = std.averageRating ?? std.rating ?? (std.lastGrade ? std.lastGrade / 20 : null);

          return {
            id: rawId,
            name: nameStr,
            averageRating: avgRating,
            lastGrade: std.lastGrade || null,
          };
        })
        .filter((std) => isValidObjectId(std.id) || (typeof std.id === 'string' && std.id.length > 5));
    }
    return [];
  }, [groupDetailsRes, isRtl, t]);

  const activeStudentId = useMemo(() => {
    if (selectedStudentId && studentsList.some((st) => st.id === selectedStudentId)) {
      return selectedStudentId;
    }
    return studentsList[0]?.id || '';
  }, [selectedStudentId, studentsList]);

  const currentSelectedStudent = useMemo(() => {
    return studentsList.find((s) => s.id === activeStudentId) || null;
  }, [studentsList, activeStudentId]);

  const studentAverageRating = useMemo(() => {
    if (currentSelectedStudent?.averageRating) {
      return Number(currentSelectedStudent.averageRating).toFixed(1);
    }
    return Number(rating).toFixed(1);
  }, [currentSelectedStudent, rating]);

  const studentAveragePercentage = useMemo(() => {
    return Math.round((Number(studentAverageRating) / 5) * 100);
  }, [studentAverageRating]);

  const { data: historyRes, refetch: refetchHistory } = useQuery({
    queryKey: ['teacher-evaluations-history'],
    queryFn: async () => {
      try {
        return await teacherEvaluationsApi.fetchTeacherEvaluationsHistory({ limit: 50 });
      } catch {
        return { success: true, data: [] };
      }
    },
    staleTime: 60 * 1000,
  });

  const recentEvaluationsList = useMemo(() => {
    const list = historyRes?.data;
    if (Array.isArray(list) && list.length > 0) {
      return list.map((item, idx) => {
        const studentName =
          typeof item.student === 'object' && item.student !== null
            ? (isRtl ? item.student?.name?.ar || item.student?.name?.en : item.student?.name?.en || item.student?.name?.ar) ||
              item.student?.name ||
              t('teacherEvaluations.defaultStudent', 'طالب')
            : item.studentName || t('teacherEvaluations.defaultStudent', 'طالب');

        const sessionName =
          typeof item.session === 'object' && item.session !== null
            ? item.session?.title ||
              item.session?.name ||
              t('teacherEvaluations.defaultSessionName', 'الحصة {{number}}', { number: idx + 1 })
            : item.sessionName ||
              t('teacherEvaluations.defaultSessionName', 'الحصة {{number}}', { number: idx + 1 });

        const groupName =
          typeof item.group === 'object' && item.group !== null
            ? (isRtl ? item.group?.name?.ar || item.group?.name?.en : item.group?.name?.en || item.group?.name?.ar) ||
              item.group?.name
            : item.groupName ||
              (typeof item.session?.group === 'object' ? item.session?.group?.name : item.session?.group) ||
              t('teacherEvaluations.defaultGroupName', 'المجموعة الدراسية');

        const ratingVal = Number(item.rating || 5);
        const dateStr = item.createdAt ? new Date(item.createdAt).toLocaleDateString(isRtl ? 'ar-EG' : 'en-US') : '';

        return {
          id: item.id || item._id || `eval-${idx}`,
          studentName,
          groupName,
          sessionName,
          notes: item.notes || t('teacherEvaluations.defaultHistoryNotes', 'أداء ممتاز وتفاعل متميز أثناء الجلسة'),
          rating: ratingVal,
          dateStr,
        };
      });
    }

    return [];
  }, [historyRes, isRtl, t]);

  const totalEvalPages = Math.max(1, Math.ceil(recentEvaluationsList.length / evalsPerPage));
  const paginatedEvaluations = useMemo(() => {
    const start = (evalPage - 1) * evalsPerPage;
    return recentEvaluationsList.slice(start, start + evalsPerPage);
  }, [recentEvaluationsList, evalPage, evalsPerPage]);

  const levelInfo = useMemo(() => {
    const pct = studentAveragePercentage;
    if (pct >= 90) {
      return {
        label: t('teacherEvaluations.levelExcellent', 'ممتاز'),
        badgeClass: 'bg-emerald-100 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300',
      };
    }
    if (pct >= 80) {
      return {
        label: t('teacherEvaluations.levelVeryGood', 'جيد جداً'),
        badgeClass: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300',
      };
    }
    if (pct >= 70) {
      return {
        label: t('teacherEvaluations.levelGood', 'جيد'),
        badgeClass: 'bg-[#fef3c7] text-[#92400e] dark:bg-amber-950/60 dark:text-amber-300',
      };
    }
    if (pct >= 60) {
      return {
        label: t('teacherEvaluations.levelAcceptable', 'مقبول'),
        badgeClass: 'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300',
      };
    }
    return {
      label: t('teacherEvaluations.levelNeedsImprovement', 'يحتاج لتحسين'),
      badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300',
    };
  }, [studentAveragePercentage, t]);

  const handleSaveEvaluation = async () => {
    if (!activeSessionId || !isValidObjectId(activeSessionId)) {
      toast.error(t('teacherEvaluations.invalidSessionToast', 'يرجى تحديد حصة صالحة مسجلة في النظام'));
      return;
    }

    if (!activeStudentId || (!isValidObjectId(activeStudentId) && activeStudentId.startsWith('std-'))) {
      toast.error(t('teacherEvaluations.selectStudentToast', 'يرجى اختيار طالب مسجل في الحصة'));
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        student: activeStudentId,
        rating: Number(rating),
        notes: notes.trim(),
      };

      const res = await teacherEvaluationsApi.createStudentEvaluation(activeSessionId, payload);

      setIsSubmitting(false);

      if (res.success) {
        toast.success(
          t('teacherEvaluations.saveSuccessToast', 'تم حفظ تقييم {{name}} بنجاح ({{rating}}/5 نجوم)', {
            name: currentSelectedStudent?.name || t('teacherEvaluations.defaultStudent', 'الطالب'),
            rating,
          })
        );
        setNotes('');
        queryClient.invalidateQueries({ queryKey: ['teacher-evaluations-history'] });
        queryClient.invalidateQueries({ queryKey: ['teacher-eval-group-details'] });
      } else {
        toast.error(res.message || t('teacherEvaluations.saveErrorToast', 'تعذر حفظ التقييم'));
      }
    } catch {
      setIsSubmitting(false);
      toast.error(t('teacherEvaluations.errorOccurredToast', 'حدث خطأ أثناء حفظ التقييم'));
    }
  };

  const handleRefreshAll = () => {
    refetchGroups();
    refetchGroupDetails();
    refetchHistory();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <EvaluationHeader
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
        onRefresh={handleRefreshAll}
      />

      <EvaluationSelectionCard
        groupsList={groupsList}
        activeGroupId={activeGroupId}
        onSelectGroup={setSelectedGroupId}
        isLoadingGroups={isLoadingGroups}
        sessionsList={sessionsList}
        activeSessionId={activeSessionId}
        onSelectSession={setSelectedSessionId}
        isLoadingGroupDetails={isLoadingGroupDetails}
        studentsList={studentsList}
        activeStudentId={activeStudentId}
        onSelectStudent={setSelectedStudentId}
      />

      <EvaluationFormCard
        currentSelectedStudent={currentSelectedStudent}
        studentAverageRating={studentAverageRating}
        studentAveragePercentage={studentAveragePercentage}
        levelInfo={levelInfo}
        rating={rating}
        onRatingChange={setRating}
        notes={notes}
        onNotesChange={setNotes}
        onSave={handleSaveEvaluation}
        isSubmitting={isSubmitting}
        canSubmit={Boolean(activeSessionId && activeStudentId)}
      />

      <EvaluationHistoryList
        evaluationsList={recentEvaluationsList}
        paginatedEvaluations={paginatedEvaluations}
        evalPage={evalPage}
        onPageChange={setEvalPage}
        totalEvalPages={totalEvalPages}
      />
    </div>
  );
}
