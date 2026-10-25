import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Calendar,
  ChevronDown,
  Star,
  Save,
  Loader2,
  Users,
  Video,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherEvaluationsApi } from '@/shared/services/api/teacherEvaluationsApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';
import { teacherSessionsApi } from '@/shared/services/api/teacherSessionsApi.js';

function isValidObjectId(id) {
  return typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id);
}

export default function TeacherEvaluations() {
  const { i18n } = useTranslation();
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

  const [criteriaScores, setCriteriaScores] = useState({
    recitation: 4,
    tajweed: 4,
    memorization: 3,
    interaction: 5,
    homework: 4,
  });

  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          name: typeof g.name === 'object' && g.name !== null ? g.name.ar || g.name.en : g.name || 'مجموعة دراسية',
        }))
        .filter((g) => isValidObjectId(g.id));
    }
    return [];
  }, [groupsRes]);

  useEffect(() => {
    if (groupsList.length > 0 && (!selectedGroupId || !groupsList.some((g) => g.id === selectedGroupId))) {
      setSelectedGroupId(groupsList[0].id);
    }
  }, [groupsList, selectedGroupId]);

  const {
    data: groupDetailsRes,
    isLoading: isLoadingGroupDetails,
    refetch: refetchGroupDetails,
  } = useQuery({
    queryKey: ['teacher-eval-group-details', selectedGroupId],
    queryFn: () => teacherGroupsApi.fetchGroupDetails(selectedGroupId),
    enabled: isValidObjectId(selectedGroupId),
    staleTime: 2 * 60 * 1000,
  });

  const { data: completedSessionsRes } = useQuery({
    queryKey: ['teacher-completed-sessions-for-eval'],
    queryFn: () => teacherSessionsApi.fetchSessionsByStatus('completed'),
    staleTime: 2 * 60 * 1000,
  });

  const sessionsList = useMemo(() => {
    const groupData = groupDetailsRes?.data || groupDetailsRes || {};
    const groupSessions = groupData.sessionsHistory || groupData.sessions || [];
    let list = [];

    if (Array.isArray(groupSessions) && groupSessions.length > 0) {
      list = groupSessions.map((s, idx) => ({
        id: s.id || s._id,
        name: s.title || s.name || `الحصة ${idx + 1}`,
        date: s.date || s.startTime?.split('T')[0] || '',
      }));
    } else {
      const allCompleted = completedSessionsRes?.data || (Array.isArray(completedSessionsRes) ? completedSessionsRes : []);
      if (Array.isArray(allCompleted) && allCompleted.length > 0) {
        list = allCompleted
          .filter((s) => {
            if (!selectedGroupId) return true;
            const gId = s.groupId || s.group?._id || s.group?.id || s.group;
            return String(gId) === String(selectedGroupId);
          })
          .map((s, idx) => ({
            id: s.id || s._id,
            name: s.title || s.name || `حصة مكتملة ${idx + 1}`,
            date: s.date || s.startTime?.split('T')[0] || '',
          }));
      }
    }

    return list.filter((s) => isValidObjectId(s.id));
  }, [groupDetailsRes, completedSessionsRes, selectedGroupId]);

  useEffect(() => {
    if (sessionsList.length > 0 && (!selectedSessionId || !sessionsList.some((s) => s.id === selectedSessionId))) {
      setSelectedSessionId(sessionsList[0].id);
    } else if (sessionsList.length === 0) {
      setSelectedSessionId('');
    }
  }, [sessionsList, selectedSessionId]);

  const studentsList = useMemo(() => {
    const groupData = groupDetailsRes?.data || groupDetailsRes || {};
    const students = groupData.students || [];

    if (Array.isArray(students) && students.length > 0) {
      return students
        .map((std, idx) => {
          const rawId = std.id || std._id || std.student?._id || std.student?.id || std.student_id;
          const rawName = std.name || std.student?.name;
          const nameStr =
            typeof rawName === 'object' && rawName !== null
              ? rawName.ar || rawName.en || `طالب ${idx + 1}`
              : rawName || `طالب ${idx + 1}`;

          return {
            id: rawId,
            name: nameStr,
            lastGrade: std.lastGrade || std.latestGrade || null,
          };
        })
        .filter((std) => isValidObjectId(std.id) || (typeof std.id === 'string' && std.id.length > 5));
    }
    return [];
  }, [groupDetailsRes]);

  useEffect(() => {
    if (studentsList.length > 0 && (!selectedStudentId || !studentsList.some((st) => st.id === selectedStudentId))) {
      setSelectedStudentId(studentsList[0].id);
    } else if (studentsList.length === 0) {
      setSelectedStudentId('');
    }
  }, [studentsList, selectedStudentId]);

  const currentSelectedStudent = useMemo(() => {
    return studentsList.find((s) => s.id === selectedStudentId) || null;
  }, [studentsList, selectedStudentId]);

  const { data: historyRes, refetch: refetchHistory } = useQuery({
    queryKey: ['teacher-evaluations-history'],
    queryFn: async () => {
      try {
        return await teacherEvaluationsApi.fetchTeacherEvaluationsHistory({ limit: 10 });
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
            ? item.student?.name?.ar || item.student?.name?.en || item.student?.name || 'طالب'
            : item.studentName || 'طالب';
        const sessionName =
          typeof item.session === 'object' && item.session !== null
            ? item.session?.title || item.session?.name || `الجلسة ${idx + 1}`
            : `الجلسة ${idx + 1}`;
        const ratingPct = item.percentage || Math.round((Number(item.rating || 4) / 5) * 100);

        return {
          id: item.id || item._id || `eval-${idx}`,
          studentName,
          sessionText: `${sessionName} • حديثاً`,
          notes: item.notes || 'أداء جيد في الحصة وتفاعل ممتاز',
          percentage: ratingPct,
        };
      });
    }

    return [];
  }, [historyRes]);

  const criteriaDefinitions = [
    { key: 'recitation', label: 'حسن التلاوة وطلاقة القراءة', max: 5 },
    { key: 'tajweed', label: 'تطبيق أحكام التجويد ومخارج الحروف', max: 5 },
    { key: 'memorization', label: 'جودة الحفظ والضبط والإتقان', max: 5 },
    { key: 'interaction', label: 'التفاعل والمشاركة والانضباط في الجلسة', max: 5 },
    { key: 'homework', label: 'أداء الواجبات والتكاليف المنزلية', max: 5 },
  ];

  const totalScore = useMemo(() => {
    const values = Object.values(criteriaScores);
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    const maxPossible = criteriaDefinitions.length * 5;
    return Math.round((sum / maxPossible) * 100);
  }, [criteriaScores, criteriaDefinitions]);

  const levelInfo = useMemo(() => {
    if (totalScore >= 90) return { label: 'ممتاز', badgeClass: 'bg-emerald-100 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300' };
    if (totalScore >= 80) return { label: 'جيد جداً', badgeClass: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300' };
    if (totalScore >= 70) return { label: 'جيد', badgeClass: 'bg-[#fef3c7] text-[#92400e] dark:bg-amber-950/60 dark:text-amber-300' };
    if (totalScore >= 60) return { label: 'مقبول', badgeClass: 'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300' };
    return { label: 'يحتاج لتحسين', badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300' };
  }, [totalScore]);

  const handleStarClick = (criterionKey, starValue) => {
    setCriteriaScores((prev) => ({
      ...prev,
      [criterionKey]: starValue,
    }));
  };

  const handleSaveEvaluation = async () => {
    if (!selectedSessionId || !isValidObjectId(selectedSessionId)) {
      toast.error('يرجى تحديد حصة صالحة مسجلة في النظام');
      return;
    }

    if (!selectedStudentId || (!isValidObjectId(selectedStudentId) && selectedStudentId.startsWith('std-'))) {
      toast.error('يرجى اختيار طالب مسجل في الحصة');
      return;
    }

    setIsSubmitting(true);

    try {
      const normalizedRating = Math.min(5, Math.max(1, Math.round((totalScore / 100) * 5)));

      const payload = {
        student: selectedStudentId,
        rating: normalizedRating,
        notes: notes.trim(),
        totalScore,
      };

      const res = await teacherEvaluationsApi.createStudentEvaluation(
        selectedSessionId,
        payload
      );

      setIsSubmitting(false);

      if (res.success) {
        toast.success(`تم حفظ تقييم ${currentSelectedStudent?.name || 'الطالب'} بنجاح (${totalScore}/100)`);
        setNotes('');
        queryClient.invalidateQueries({ queryKey: ['teacher-evaluations-history'] });
        queryClient.invalidateQueries({ queryKey: ['teacher-eval-group-details'] });
      } else {
        toast.error(res.message || 'تعذر حفظ التقييم');
      }
    } catch (err) {
      setIsSubmitting(false);
      toast.error('حدث خطأ أثناء حفظ التقييم');
    }
  };

  const handleRefreshAll = () => {
    refetchGroups();
    refetchGroupDetails();
    refetchHistory();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16" dir="rtl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-2">
            <span>التقييمات</span>
            <span className="text-2xl">⭐</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            تقييم أداء وتلاوة الطلاب في الحصص ومتابعة مستواهم الدراسي
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          <button
            type="button"
            onClick={handleRefreshAll}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="تحديث البيانات"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
        <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
          اختر المجموعة و الحصة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
              المجموعة الدراسية
            </label>
            <div className="relative">
              <select
                value={selectedGroupId}
                onChange={(e) => setSelectedGroupId(e.target.value)}
                disabled={isLoadingGroups || groupsList.length === 0}
                className="w-full appearance-none px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold focus:outline-none focus:border-[#00594C] cursor-pointer disabled:opacity-60"
              >
                {groupsList.length === 0 ? (
                  <option value="">لا توجد مجموعات متاحة حالياً</option>
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
              الحصة
            </label>
            <div className="relative">
              <select
                value={selectedSessionId}
                onChange={(e) => setSelectedSessionId(e.target.value)}
                disabled={isLoadingGroupDetails || sessionsList.length === 0}
                className="w-full appearance-none px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold focus:outline-none focus:border-[#00594C] cursor-pointer disabled:opacity-60"
              >
                {sessionsList.length === 0 ? (
                  <option value="">لا توجد حصص مسجلة لهذه المجموعة</option>
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
            اختر الطالب للتقييم
          </label>

          {studentsList.length === 0 ? (
            <div className="p-6 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
              <Users size={24} className="mx-auto mb-1 text-slate-300 dark:text-slate-600" />
              <p className="text-xs font-bold">لا يوجد طلاب مسجلين في هذه المجموعة بعد</p>
            </div>
          ) : (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {studentsList.map((student) => {
                const isSelected = student.id === selectedStudentId;
                return (
                  <button
                    type="button"
                    key={student.id}
                    onClick={() => setSelectedStudentId(student.id)}
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
                        آخر درجة: {student.lastGrade}%
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-7 text-start">
        <div className="flex items-center justify-between gap-4">
          <span
            className={`px-4 py-1 rounded-full text-xs sm:text-sm font-bold ${levelInfo.badgeClass}`}
          >
            {levelInfo.label}
          </span>

          <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
            تقييم {currentSelectedStudent ? currentSelectedStudent.name : 'الطالب'}
          </h3>
        </div>

        <div className="space-y-3">
          <div className="text-start">
            <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 block mb-1">
              الدرجة الإجمالية
            </span>
            <div className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
              {totalScore}/100
            </div>
          </div>

          <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-[#00594C] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${totalScore}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white">
            معايير التقييم التفصيلية
          </h4>

          <div className="space-y-3.5">
            {criteriaDefinitions.map((crit) => {
              const currentVal = criteriaScores[crit.key] || 0;
              return (
                <div
                  key={crit.key}
                  className="flex items-center justify-between gap-4 py-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-bold text-slate-500 font-mono">
                      {currentVal}/5
                    </span>

                    <div className="flex items-center gap-1" dir="ltr">
                      {[1, 2, 3, 4, 5].map((starNum) => {
                        const isFilled = starNum <= currentVal;
                        return (
                          <button
                            type="button"
                            key={starNum}
                            onClick={() => handleStarClick(crit.key, starNum)}
                            className="p-0.5 text-amber-400 hover:scale-110 transition focus:outline-none cursor-pointer"
                            title={`${starNum} من 5`}
                          >
                            <Star
                              size={19}
                              className={
                                isFilled
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-200 dark:text-slate-700'
                              }
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {crit.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="block text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
            ملاحظات وتوجيهات
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="اكتب ملاحظاتك وتوجيهاتك للطالب..."
            className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00594C] transition resize-none"
          />
        </div>

        <button
          type="button"
          onClick={handleSaveEvaluation}
          disabled={isSubmitting || !selectedSessionId || !selectedStudentId}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#00594C] hover:bg-[#00473c] text-white text-sm sm:text-base font-black transition flex items-center justify-center gap-2 shadow-xs disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>جاري حفظ التقييم...</span>
            </>
          ) : (
            <>
              <Save size={18} />
              <span>حفظ التقييم</span>
            </>
          )}
        </button>
      </div>

      {recentEvaluationsList.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start">
          <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white">
            التقييمات الأخيرة المسجلة
          </h3>

          <div className="space-y-3">
            {recentEvaluationsList.map((evalItem) => {
              const isHigh = evalItem.percentage >= 90;
              const badgeBg = isHigh
                ? 'bg-emerald-50 text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400'
                : 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400';

              return (
                <div
                  key={evalItem.id}
                  className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-4 flex items-center justify-between gap-4 border border-slate-100/70 dark:border-slate-800 transition"
                >
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${badgeBg}`}
                  >
                    {evalItem.percentage}%
                  </span>

                  <div className="text-start space-y-1">
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                      {evalItem.studentName}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-semibold">
                      {evalItem.sessionText}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-300 font-medium">
                      {evalItem.notes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
