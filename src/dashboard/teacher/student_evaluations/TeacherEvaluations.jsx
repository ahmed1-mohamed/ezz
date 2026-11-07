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

function isStudentEvaluated(raw) {
  if (!raw) return false;
  if (raw.isEvaluated === true || raw.evaluated === true || raw.hasEvaluation === true) return true;
  const s = raw.student && typeof raw.student === 'object' ? raw.student : null;
  if (s && (s.isEvaluated === true || s.evaluated === true || s.hasEvaluation === true)) return true;
  return false;
}

function normalizePendingStudent(raw, idx, isRtl, t, nameMap = {}) {
  if (!raw) return null;
  const isDirectString = typeof raw === 'string';
  const s = (!isDirectString && raw.student && typeof raw.student === 'object') ? raw.student : raw;
  const rawId = isDirectString
    ? raw
    : (typeof s === 'string'
      ? s
      : (s?.id || s?._id || s?.student_id || raw?.student_id || raw?.studentId || raw?.id));
  if (!rawId) return null;
  const idStr = String(rawId).trim();
  const rawName = !isDirectString ? (s?.name || raw?.studentName || raw?.name) : null;
  const mappedName = nameMap[idStr] || null;
  const fallbackName = t('teacherEvaluations.defaultStudentName', 'طالب {{number}}', { number: idx + 1 });
  let nameStr = mappedName || fallbackName;
  if (typeof rawName === 'object' && rawName !== null) {
    nameStr = (isRtl ? rawName.ar || rawName.en : rawName.en || rawName.ar) || nameStr;
  } else if (typeof rawName === 'string' && rawName.trim()) {
    nameStr = rawName.trim();
  }
  const avgRating = !isDirectString ? (s?.averageRating ?? s?.rating ?? raw?.averageRating ?? raw?.rating ?? (s?.lastGrade ? s.lastGrade / 20 : null)) : null;
  const lastGrade = !isDirectString ? (s?.lastGrade ?? raw?.lastGrade ?? null) : null;
  return {
    id: idStr,
    name: nameStr,
    averageRating: avgRating,
    lastGrade,
  };
}

function extractSessionPendingStudents(item, isRtl, t, nameMap = {}) {
  if (!item) return [];
  const sess = item.session && typeof item.session === 'object' ? item.session : item;
  const directPending =
    item.pendingStudents ||
    item.pendingEvaluationStudents ||
    item.pendingStudentsList ||
    item.unevaluatedStudents ||
    sess.pendingStudents ||
    sess.pendingEvaluationStudents ||
    sess.pendingStudentsList ||
    sess.unevaluatedStudents;
  if (Array.isArray(directPending) && directPending.length > 0) {
    return directPending
      .map((st, idx) => normalizePendingStudent(st, idx, isRtl, t, nameMap))
      .filter((st) => Boolean(st && st.id));
  }
  const pendingIds =
    item.pendingEvaluationStudentIds ||
    item.pendingStudentIds ||
    sess.pendingEvaluationStudentIds ||
    sess.pendingStudentIds;
  if (Array.isArray(pendingIds) && pendingIds.length > 0) {
    const pool = [
      ...(Array.isArray(item.attendance) ? item.attendance : []),
      ...(Array.isArray(sess.attendance) ? sess.attendance : []),
      ...(Array.isArray(item.students) ? item.students : []),
      ...(Array.isArray(sess.students) ? sess.students : []),
      ...(Array.isArray(item.group?.students) ? item.group.students : []),
      ...(Array.isArray(sess.group?.students) ? sess.group.students : []),
    ];
    return pendingIds.map((pid, idx) => {
      const pidStr = String(pid);
      const foundInPool = pool.find((st) => {
        const sObj = st.student && typeof st.student === 'object' ? st.student : st;
        const id = typeof st === 'string' ? st : (sObj?.id || sObj?._id || sObj?.student_id || st?.student_id || st?.studentId || st?.id);
        return String(id) === pidStr;
      });
      return normalizePendingStudent(foundInPool || pid, idx, isRtl, t, nameMap);
    }).filter((st) => Boolean(st && st.id));
  }
  const attendance = Array.isArray(item.attendance) ? item.attendance : (Array.isArray(sess.attendance) ? sess.attendance : null);
  if (Array.isArray(attendance) && attendance.length > 0) {
    const unEvaluated = attendance.filter((att) => att.isEvaluated !== true && att.evaluated !== true);
    if (unEvaluated.length > 0) {
      return unEvaluated
        .map((att, idx) => normalizePendingStudent(att.student || att, idx, isRtl, t, nameMap))
        .filter((st) => Boolean(st && st.id));
    }
  }
  const students = Array.isArray(item.students) ? item.students : (Array.isArray(sess.students) ? sess.students : null);
  if (Array.isArray(students) && students.length > 0) {
    const unEvaluated = students.filter((st) => st.isEvaluated !== true && st.evaluated !== true);
    return unEvaluated
      .map((st, idx) => normalizePendingStudent(st, idx, isRtl, t, nameMap))
      .filter((st) => Boolean(st && st.id));
  }
  return [];
}

export default function TeacherEvaluations() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toTimeString().slice(0, 8));
      }
      try {
        const dateFormatted = new Intl.DateTimeFormat(
          isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(now.toLocaleDateString(isRtl ? 'ar-EG' : 'en-GB'));
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
    data: pendingSessionsRes,
    isLoading: isLoadingPendingSessions,
    refetch: refetchPendingSessions,
  } = useQuery({
    queryKey: ['teacher-pending-eval-sessions', activeGroupId],
    queryFn: () => teacherEvaluationsApi.fetchPendingEvaluationSessions(activeGroupId),
    enabled: isValidObjectId(activeGroupId),
    staleTime: 60 * 1000,
  });
  const studentNameMap = useMemo(() => {
    const map = {};
    const rawGroups = groupsRes?.data || (Array.isArray(groupsRes) ? groupsRes : []);
    if (Array.isArray(rawGroups)) {
      rawGroups.forEach((g) => {
        const gStudents = Array.isArray(g.students) ? g.students : [];
        gStudents.forEach((st) => {
          const sObj = st.student && typeof st.student === 'object' ? st.student : st;
          const id = String(sObj?.id || sObj?._id || sObj?.student_id || st?.id || '').trim();
          const name = typeof sObj?.name === 'object'
            ? (isRtl ? sObj.name?.ar || sObj.name?.en : sObj.name?.en || sObj.name?.ar)
            : (sObj?.name || st?.name);
          if (id && name) map[id] = name;
        });
      });
    }
    return map;
  }, [groupsRes, isRtl]);
  const sessionsList = useMemo(() => {
    const rawList = pendingSessionsRes?.data;
    if (!Array.isArray(rawList)) return [];
    const mapped = rawList
      .map((item, idx) => {
        const sessObj = item?.session && typeof item.session === 'object' ? item.session : item;
        const id = sessObj?.id || sessObj?._id || item?.id || item?._id;
        if (!isValidObjectId(id)) return null;
        const resolveStr = (val) => {
          if (!val) return '';
          if (typeof val === 'string') return val.trim();
          if (typeof val === 'object') return (isRtl ? val.ar || val.en : val.en || val.ar) || '';
          return String(val);
        };
        const name =
          resolveStr(sessObj?.title) ||
          resolveStr(sessObj?.name) ||
          resolveStr(item?.title) ||
          resolveStr(item?.name) ||
          (sessObj?.sessionNumber ? (isRtl ? `الحصة رقم ${sessObj.sessionNumber}` : `Session #${sessObj.sessionNumber}`) : '') ||
          t('teacherEvaluations.defaultSessionName', 'الحصة {{number}}', { number: idx + 1 });
        const date = sessObj?.date || sessObj?.startTime?.split('T')[0] || item?.date || '';
        const pendingStudents = extractSessionPendingStudents(item, isRtl, t, studentNameMap);
        return {
          id,
          name,
          date,
          pendingStudents,
          raw: item,
        };
      })
      .filter(Boolean);
    const withPending = mapped.filter((s) => s.pendingStudents && s.pendingStudents.length > 0);
    return withPending.length > 0 ? withPending : mapped;
  }, [pendingSessionsRes, isRtl, t, studentNameMap]);
  const activeSessionId = useMemo(() => {
    if (selectedSessionId && sessionsList.some((s) => s.id === selectedSessionId)) {
      return selectedSessionId;
    }
    return sessionsList[0]?.id || '';
  }, [selectedSessionId, sessionsList]);
  const activeSession = useMemo(() => {
    return sessionsList.find((s) => s.id === activeSessionId) || null;
  }, [sessionsList, activeSessionId]);
  const studentsList = useMemo(() => {
    if (activeSession?.pendingStudents && activeSession.pendingStudents.length > 0) {
      return activeSession.pendingStudents;
    }
    const currentGroup = (groupsRes?.data || []).find((g) => (g.id || g._id) === activeGroupId);
    if (currentGroup && Array.isArray(currentGroup.students) && currentGroup.students.length > 0) {
      return currentGroup.students
        .map((st, idx) => normalizePendingStudent(st, idx, isRtl, t, studentNameMap))
        .filter((st) => Boolean(st && st.id));
    }
    return [];
  }, [activeSession, groupsRes, activeGroupId, isRtl, t, studentNameMap]);
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
        const resolveGroupName = (rawGroup) => {
          if (!rawGroup || typeof rawGroup !== 'object') return typeof rawGroup === 'string' ? rawGroup : '';
          const n = rawGroup.name;
          if (!n) return '';
          if (typeof n === 'object') return (isRtl ? n.ar || n.en : n.en || n.ar) || '';
          return String(n);
        };
        const studentName =
          typeof item.student === 'object' && item.student !== null
            ? (isRtl ? item.student?.name?.ar || item.student?.name?.en : item.student?.name?.en || item.student?.name?.ar) ||
              (typeof item.student?.name === 'string' ? item.student?.name : '') ||
              t('teacherEvaluations.defaultStudent', 'طالب')
            : item.studentName || t('teacherEvaluations.defaultStudent', 'طالب');
        const sessionName =
          typeof item.session === 'object' && item.session !== null
            ? (typeof item.session?.title === 'string' ? item.session.title : '') ||
              (typeof item.session?.name === 'string' ? item.session.name : '') ||
              t('teacherEvaluations.defaultSessionName', 'الحصة {{number}}', { number: idx + 1 })
            : item.sessionName ||
              t('teacherEvaluations.defaultSessionName', 'الحصة {{number}}', { number: idx + 1 });
        const groupName =
          resolveGroupName(item.group) ||
          (typeof item.groupName === 'string' ? item.groupName : '') ||
          resolveGroupName(item.session?.group) ||
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
        setSelectedStudentId('');
        queryClient.invalidateQueries({ queryKey: ['teacher-evaluations-history'] });
        queryClient.invalidateQueries({ queryKey: ['teacher-pending-eval-sessions'] });
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
    refetchPendingSessions();
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
        onSelectGroup={(newGroupId) => {
          setSelectedGroupId(newGroupId);
          setSelectedSessionId('');
          setSelectedStudentId('');
        }}
        isLoadingGroups={isLoadingGroups}
        sessionsList={sessionsList}
        activeSessionId={activeSessionId}
        onSelectSession={setSelectedSessionId}
        isLoadingSessions={isLoadingPendingSessions}
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

