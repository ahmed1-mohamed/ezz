import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Gift,
  Award,
  Trophy,
  Star,
  BookOpen,
  ChevronDown,
  Bell,
  Calendar,
  X,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherRewardsApi } from '@/shared/services/api/teacherRewardsApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

// Default preview rewards matching the screenshot
const DEFAULT_PREVIEW_REWARDS = [
  {
    id: 'rew-1',
    name: 'ميدالية الاجتهاد',
    points: 12,
    icon: '💪',
    bg: 'bg-[#f5f3ff] dark:bg-purple-950/40 text-[#7c3aed] dark:text-purple-300',
  },
  {
    id: 'rew-2',
    name: 'شارة المشاركة',
    points: 8,
    icon: '🌟',
    bg: 'bg-[#fff1f2] dark:bg-rose-950/40 text-[#e11d48] dark:text-rose-300',
  },
  {
    id: 'rew-3',
    name: 'جائزة التميز',
    points: 25,
    icon: '🎖️',
    bg: 'bg-[#fffbeb] dark:bg-amber-950/40 text-[#d97706] dark:text-amber-300',
  },
  {
    id: 'rew-4',
    name: 'نجمة الإتقان',
    points: 10,
    icon: '⭐',
    bg: 'bg-[#fefce8] dark:bg-yellow-950/40 text-[#ca8a04] dark:text-yellow-300',
  },
  {
    id: 'rew-5',
    name: 'درع التفوق',
    points: 20,
    icon: '🏆',
    bg: 'bg-[#ecfdf5] dark:bg-emerald-950/40 text-[#059669] dark:text-emerald-300',
  },
  {
    id: 'rew-6',
    name: 'وسام الحفظ',
    points: 15,
    icon: '📖',
    bg: 'bg-[#eff6ff] dark:bg-blue-950/40 text-[#2563eb] dark:text-blue-300',
  },
];

// Student card rewards matching screenshot 2
const STUDENT_REWARDS_GRID = [
  { id: 'rew-1', name: 'ميدالية الاجتهاد', icon: '💪' },
  { id: 'rew-2', name: 'شارة المشاركة', icon: '🌟' },
  { id: 'rew-3', name: 'جائزة التميز', icon: '🎖️' },
  { id: 'rew-5', name: 'درع التفوق', icon: '🏆' },
  { id: 'rew-4', name: 'نجمة الإتقان', icon: '⭐' },
  { id: 'rew-6', name: 'وسام الحفظ', icon: '📖' },
];

// Default preview students matching screenshot 1 and screenshot 2
const DEFAULT_PREVIEW_STUDENTS = [
  {
    student_id: 'st-1',
    name: 'أحمد محمد علي',
    initial: 'أ',
    totalPoints: 85,
  },
  {
    student_id: 'st-2',
    name: 'سارة يوسف حمد',
    initial: 'س',
    totalPoints: 90,
  },
  {
    student_id: 'st-3',
    name: 'ليلى عبد الرحمن',
    initial: 'ل',
    totalPoints: 95,
  },
  {
    student_id: 'st-4',
    name: 'عمر خالد المنصور',
    initial: 'ع',
    totalPoints: 110,
  },
];

// Default preview leaderboard matching screenshot
const DEFAULT_LEADERBOARD = [
  { rank: 1, name: 'نور', initial: 'ن', count: 12, points: 145, medal: '🥇' },
  { rank: 2, name: 'فاطمة', initial: 'ف', count: 10, points: 120, medal: '🥈' },
  { rank: 3, name: 'سارة', initial: 'س', count: 15, points: 122, medal: '🥉' },
  { rank: 4, name: 'أحمد', initial: 'أ', count: 20, points: 121, medal: '4' },
];

// Default recent rewards matching screenshot
const DEFAULT_RECENT_REWARDS = [
  { student: 'نور الهدى', reward: 'درع التفوق', icon: '🏆', time: 'أمس' },
  { student: 'فاطمة أحمد', reward: 'نجمة الإتقان', icon: '⭐', time: 'أمس' },
  { student: 'أحمد محمد', reward: 'شارة المشاركة', icon: '🌟', time: '3 أيام' },
  { student: 'عمر خالد', reward: 'وسام الحفظ', icon: '📖', time: '10 أيام' },
];

export default function TeacherRewards() {
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();

  // Live ticking clock & Hijri date
  const [currentTimeStr, setCurrentTimeStr] = useState('١:٥٣:٠٤ ص');
  const [currentDateStr, setCurrentDateStr] = useState('الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      try {
        const timeFormatted = new Intl.DateTimeFormat(isRtl ? 'ar-EG' : 'en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setCurrentTimeStr(timeFormatted);
      } catch {
        setCurrentTimeStr(now.toLocaleTimeString());
      }

      try {
        const dateFormatted = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr('الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ');
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  // Modal State for Suggest Reward
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [suggestionForm, setSuggestionForm] = useState({
    name: '',
    description: '',
    icon: 'crown',
    points: 15,
    backgroundColor: '#FFD700',
  });
  const [isSubmittingSuggestion, setIsSubmittingSuggestion] = useState(false);

  // Selected session dropdown state
  const [selectedSessionText, setSelectedSessionText] = useState('اختر الحصة و الجلسة');
  const [isSessionDropdownOpen, setIsSessionDropdownOpen] = useState(false);

  // Local selected rewards state: { [studentId]: [rewardId, ...] }
  // Starts empty so the teacher selects up to 3 rewards freely
  const [studentAwards, setStudentAwards] = useState({});
  const [isGrantingRewards, setIsGrantingRewards] = useState(false);

  // Total selected count
  const totalSelectedCount = useMemo(() => {
    return Object.values(studentAwards).reduce(
      (acc, list) => acc + (Array.isArray(list) ? list.length : 0),
      0
    );
  }, [studentAwards]);

  // Query rewards from API: GET /api/v1/teacher/rewards
  const { data: rewardsRes, isLoading: isLoadingRewards } = useQuery({
    queryKey: ['teacher-rewards'],
    queryFn: () => teacherRewardsApi.fetchRewards(),
    staleTime: 5 * 60 * 1000,
  });

  // Query groups for sessions dropdown
  const { data: groupsRes } = useQuery({
    queryKey: ['teacher-groups-rewards'],
    queryFn: () => teacherGroupsApi.fetchGroups({ limit: 10 }),
    staleTime: 5 * 60 * 1000,
  });

  // Combine API rewards with preview rewards for available cards
  const rewardsList = useMemo(() => {
    const apiList = rewardsRes?.data || [];
    if (Array.isArray(apiList) && apiList.length > 0) {
      const mapped = apiList.map((r) => {
        let nameStr = r.name;
        if (typeof r.name === 'object' && r.name !== null) {
          nameStr = r.name.ar || r.name.en || 'مكافأة';
        }
        return {
          id: r.id || r._id,
          name: nameStr,
          points: r.points || 15,
          icon: r.icon === 'crown' ? '👑' : r.icon || '🏆',
          bg: r.backgroundColor ? `text-amber-600 bg-amber-50` : 'bg-[#fffbeb] text-[#d97706]',
          isApi: true,
        };
      });
      return [...mapped, ...DEFAULT_PREVIEW_REWARDS.filter((d) => !mapped.some((m) => m.name === d.name))];
    }
    return DEFAULT_PREVIEW_REWARDS;
  }, [rewardsRes]);

  // Selected group for sessions
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  // Session options from groups
  const sessionOptions = useMemo(() => {
    const list = groupsRes?.data || [];
    if (Array.isArray(list) && list.length > 0) {
      return list.map((g) => ({
        id: g.id || g._id,
        label: `${g.name} - حصة اليوم 4:00 م`,
      }));
    }
    return [
      { id: 'sess-1', label: 'مجموعة التجويد الأولى - حصة اليوم 4:00 م' },
      { id: 'sess-2', label: 'مجموعة الإتقان - حصة غداً 2:00 م' },
      { id: 'sess-3', label: 'مجموعة الفجر - حصة الخميس 5:00 م' },
    ];
  }, [groupsRes]);

  useEffect(() => {
    if (!selectedGroupId && Array.isArray(groupsRes?.data) && groupsRes.data.length > 0) {
      const first = groupsRes.data[0];
      setSelectedGroupId(first.id || first._id);
      setSelectedSessionText(`${first.name} - حصة اليوم 4:00 م`);
    }
  }, [groupsRes, selectedGroupId]);

  // Query group details for real students
  const { data: groupDetailsRes } = useQuery({
    queryKey: ['teacher-group-students-rewards', selectedGroupId],
    queryFn: () => teacherGroupsApi.fetchGroupDetails(selectedGroupId),
    enabled: Boolean(selectedGroupId && /^[0-9a-fA-F]{24}$/.test(selectedGroupId)),
    staleTime: 5 * 60 * 1000,
  });

  const studentsList = useMemo(() => {
    const groupStudents = groupDetailsRes?.data?.students || groupDetailsRes?.students;
    if (Array.isArray(groupStudents) && groupStudents.length > 0) {
      return groupStudents.map((s, idx) => {
        const studentId = s.student_id || s._id || s.id || `st-${idx + 1}`;
        let name = s.name;
        if (typeof name === 'object' && name !== null) {
          name = name.ar || name.en || `طالب ${idx + 1}`;
        }
        name = name || `طالب ${idx + 1}`;
        const initial = name.replace(/^أ\.\s*/, '').trim().charAt(0) || 'ط';
        return {
          student_id: studentId,
          name,
          initial,
          totalPoints: s.totalPoints || s.points || 85 + idx * 5,
        };
      });
    }
    return DEFAULT_PREVIEW_STUDENTS;
  }, [groupDetailsRes]);

  // Combined student reward items including real API rewards if present
  const studentRewardItems = useMemo(() => {
    const apiList = rewardsRes?.data || [];
    if (Array.isArray(apiList) && apiList.length > 0) {
      const mappedApi = apiList.map((r) => {
        let nameStr = r.name;
        if (typeof r.name === 'object' && r.name !== null) {
          nameStr = r.name.ar || r.name.en || 'مكافأة';
        }
        return {
          id: r.id || r._id,
          name: nameStr,
          icon: r.icon === 'crown' ? '👑' : r.icon || '🏆',
        };
      });
      return [...mappedApi, ...STUDENT_REWARDS_GRID.filter((d) => !mappedApi.some((m) => m.name === d.name))].slice(0, 6);
    }
    return STUDENT_REWARDS_GRID;
  }, [rewardsRes]);

  // Toggle reward selection for a student (Max 3 rewards allowed per session)
  const handleToggleReward = (studentId, rewardId) => {
    setStudentAwards((prev) => {
      const studentList = prev[studentId] || [];
      const isAlreadySelected = studentList.includes(rewardId);

      if (isAlreadySelected) {
        return {
          ...prev,
          [studentId]: studentList.filter((id) => id !== rewardId),
        };
      }

      const currentTotal = Object.values(prev).reduce(
        (acc, list) => acc + (Array.isArray(list) ? list.length : 0),
        0
      );

      if (currentTotal >= 3) {
        toast.error('يمكنك منح حد أقصى 3 مكافآت في الجلسة الواحدة');
        return prev;
      }

      return {
        ...prev,
        [studentId]: [...studentList, rewardId],
      };
    });
  };

  // Bulk grant all selected rewards using POST /api/v1/teacher/students/{studentId}/rewards/{rewardId}
  const handleGrantAllRewards = async () => {
    const pairs = [];
    Object.entries(studentAwards).forEach(([studentId, rewardIds]) => {
      rewardIds.forEach((rewardId) => {
        pairs.push({ studentId, rewardId });
      });
    });

    if (pairs.length === 0) {
      toast.error('يرجى اختيار مكافأة واحدة على الأقل لمنحها');
      return;
    }

    setIsGrantingRewards(true);
    let anySuccess = false;
    for (const pair of pairs) {
      const res = await teacherRewardsApi.awardRewardToStudent(pair.studentId, pair.rewardId);
      if (res.success) {
        anySuccess = true;
      }
    }
    setIsGrantingRewards(false);

    if (anySuccess) {
      toast.success('تم منح المكافآت للطلاب بنجاح وسيتم إشعار أولياء أمورهم');
      setStudentAwards({});
      queryClient.invalidateQueries({ queryKey: ['teacher-rewards'] });
    }
  };

  const handleSuggestSubmit = async (e) => {
    e.preventDefault();
    if (!suggestionForm.name.trim()) {
      toast.error('يرجى كتابة اسم المكافأة');
      return;
    }
    setIsSubmittingSuggestion(true);
    const res = await teacherRewardsApi.suggestReward({
      name: { ar: suggestionForm.name, en: suggestionForm.name },
      description: { ar: suggestionForm.description, en: suggestionForm.description },
      icon: suggestionForm.icon,
      backgroundColor: suggestionForm.backgroundColor,
      points: Number(suggestionForm.points) || 15,
    });
    setIsSubmittingSuggestion(false);
    if (res.success) {
      toast.success('تم إرسال اقتراح المكافأة بنجاح للإدارة');
      setIsSuggestModalOpen(false);
      setSuggestionForm({
        name: '',
        description: '',
        icon: 'crown',
        points: 15,
        backgroundColor: '#FFD700',
      });
    } else {
      toast.error(res.error || 'تعذر إرسال الاقتراح');
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir="rtl">
      {/* ── 1. Top White Header Banner (مطابق للصورة) ── */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Right side in RTL: Title & Subtitle */}
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            المكافآت
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            امنح الطلاب مكافآت بعد كل جلسة
          </p>
        </div>

        {/* Left side in RTL: Ticking Time, Date, Bell, Avatar */}
        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          <div className="relative p-1.5 text-slate-600 dark:text-slate-300">
            <Bell size={18} />
            <span className="absolute -top-0.5 -end-0.5 w-4 h-4 rounded-full bg-[#00594C] text-white text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#cca332] text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
            أ
          </div>
        </div>
      </div>

      {/* ── 2. Prominent Action Button: اقترح مكافأة جديدة 🎁 ── */}
      <button
        onClick={() => setIsSuggestModalOpen(true)}
        type="button"
        className="w-full py-4 px-6 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
      >
        <Gift size={20} />
        <span>اقترح مكافأة جديدة</span>
      </button>

      {/* ── 3. Golden Notice Banner (مكافآت الجلسة) ── */}
      <div className="bg-[#f6eedd] dark:bg-amber-950/30 border border-[#ecd9b8] dark:border-amber-800/40 rounded-3xl p-5 flex items-center justify-between shadow-xs">
        <div className="space-y-1 text-start">
          <h3 className="text-base font-extrabold text-[#785b12] dark:text-amber-200">
            مكافآت الجلسة
          </h3>
          <p className="text-xs text-[#8c6b1b] dark:text-amber-300 font-medium">
            يمكنك منح حد أقصى 3 مكافآت في الجلسة الواحدة
          </p>
        </div>

        <div className="w-11 h-11 rounded-2xl bg-[#cca332] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
          <Gift size={22} />
        </div>
      </div>

      {/* ── 4. Main 2-Column Section (منح مكافأة على اليمين + لوحة المتصدرين والمكافآت الأخيرة على اليسار) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── Right Column (Wider): منح مكافأة ── */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start">
            {/* Header */}
            <h2 className="text-lg font-black text-slate-800 dark:text-white">
              منح مكافأة
            </h2>

            {/* Session Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSessionDropdownOpen(!isSessionDropdownOpen)}
                className="w-full bg-[#f8faf9] dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer hover:bg-slate-100/60 transition-colors"
              >
                <span>{selectedSessionText}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform ${isSessionDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isSessionDropdownOpen && (
                <div className="absolute top-full mt-2 inset-x-0 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-lg z-20 py-2 space-y-1">
                  {sessionOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedSessionText(opt.label);
                        setSelectedGroupId(opt.id);
                        setIsSessionDropdownOpen(false);
                      }}
                      className="w-full text-start px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#e8f7f3] dark:hover:bg-slate-800 transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Subheader 1: المكافآت المتاحة */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400">
                المكافآت المتاحة
              </h3>

              {/* 6 Grid Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {rewardsList.map((reward) => (
                  <div
                    key={reward.id}
                    className={`rounded-2xl p-4 text-center border border-slate-100/60 dark:border-slate-800/60 shadow-2xs hover:shadow-sm transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${reward.bg}`}
                  >
                    <span className="text-2xl block">{reward.icon}</span>
                    <span className="text-xs sm:text-sm font-black truncate max-w-full block">
                      {reward.name}
                    </span>
                    <span className="text-[11px] font-bold opacity-80 block">
                      {reward.points} نقطة
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subheader 2: اختر الطالب والمكافأة */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-slate-400">
                اختر الطالب والمكافأة
              </h3>

              {/* Students List */}
              <div className="space-y-4">
                {studentsList.map((student) => {
                  const awardedList = studentAwards[student.student_id] || [];

                  return (
                    <div
                      key={student.student_id}
                      className="bg-[#fafbfb] dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 space-y-3.5"
                    >
                      {/* Student Top Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#00594C] text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0">
                            {student.initial}
                          </div>
                          <span className="text-sm font-black text-slate-800 dark:text-slate-100">
                            {student.name}
                          </span>
                        </div>

                        <span className="text-xs text-slate-400 font-semibold">
                          {student.totalPoints} نقطة إجمالي
                        </span>
                      </div>

                      {/* Reward Buttons Grid for this student */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {studentRewardItems.map((rew) => {
                          const isAwarded = awardedList.includes(rew.id);

                          return (
                            <button
                              key={rew.id}
                              type="button"
                              onClick={() => handleToggleReward(student.student_id, rew.id)}
                              className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                isAwarded
                                  ? 'bg-[#fdfaf3] dark:bg-amber-950/40 border border-[#cca332] text-[#8c6b1b] dark:text-amber-200 shadow-2xs'
                                  : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#00594C]/40 hover:text-[#00594C]'
                              }`}
                            >
                              <span>{rew.name}</span>
                              <span className="text-sm">{rew.icon}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Prominent Action Button: منح المكافآت (N) 🎁 ── */}
          <button
            type="button"
            onClick={handleGrantAllRewards}
            disabled={isGrantingRewards || totalSelectedCount === 0}
            className={`w-full py-4 px-6 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all ${
              totalSelectedCount > 0
                ? 'bg-[#00594C] hover:bg-[#00473d] text-white shadow-sm hover:shadow-md cursor-pointer'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-60'
            }`}
          >
            <span>
              {isGrantingRewards
                ? 'جاري منح المكافآت...'
                : totalSelectedCount > 0
                ? `منح المكافآت (${totalSelectedCount})`
                : 'منح المكافآت'}
            </span>
            <Gift size={20} />
          </button>
        </div>

        {/* ── Left Column (Narrower): لوحة المتصدرين والمكافآت الأخيرة ── */}
        <div className="lg:col-span-4 space-y-6">
          {/* Box 1: لوحة المتصدرين 🏆 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start">
            <h3 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span>لوحة المتصدرين</span>
              <span>🏆</span>
            </h3>

            <div className="space-y-2.5">
              {DEFAULT_LEADERBOARD.map((item) => (
                <div
                  key={item.rank}
                  className="bg-[#fafbfb] dark:bg-slate-800/40 rounded-2xl p-3 flex items-center justify-between border border-slate-100 dark:border-slate-800"
                >
                  {/* Right in RTL: Medal + Avatar + Name + Count */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-bold w-5 text-center">{item.medal}</span>
                    <div className="w-8 h-8 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-semibold">
                        {item.count} مكافأة
                      </p>
                    </div>
                  </div>

                  {/* Left: Points Pill */}
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#fffbeb] text-[#d97706] dark:bg-amber-950/60 dark:text-amber-300">
                    {item.points}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: المكافآت الأخيرة */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start">
            <h3 className="text-base font-black text-slate-800 dark:text-white">
              المكافآت الأخيرة
            </h3>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {DEFAULT_RECENT_REWARDS.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-2 text-xs"
                >
                  {/* Right in RTL: Icon + Student + Reward */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100">
                        {item.student}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {item.reward}
                      </p>
                    </div>
                  </div>

                  {/* Left: Time */}
                  <span className="text-[11px] text-slate-400 font-semibold shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal: اقتراح مكافأة جديدة ── */}
      {isSuggestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-5 text-start">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Gift className="text-[#00594C]" size={20} />
                <h3 className="text-base font-bold text-slate-800 dark:text-white">
                  اقتراح مكافأة جديدة
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSuggestModalOpen(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSuggestSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  اسم المكافأة *
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: وسام الحافظ المتقن"
                  value={suggestionForm.name}
                  onChange={(e) => setSuggestionForm({ ...suggestionForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  الوصف أو سبب المنح
                </label>
                <textarea
                  rows={2}
                  placeholder="اكتب وصفاً مختصراً لسبب استحقاق الطالب لهذه المكافأة..."
                  value={suggestionForm.description}
                  onChange={(e) =>
                    setSuggestionForm({ ...suggestionForm, description: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    النقاط الممنوحة
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={suggestionForm.points}
                    onChange={(e) =>
                      setSuggestionForm({ ...suggestionForm, points: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00594C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    لون الخلفية
                  </label>
                  <input
                    type="color"
                    value={suggestionForm.backgroundColor}
                    onChange={(e) =>
                      setSuggestionForm({
                        ...suggestionForm,
                        backgroundColor: e.target.value,
                      })
                    }
                    className="w-full h-9 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer p-0.5"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsSuggestModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingSuggestion}
                  className="px-6 py-2 rounded-xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs font-bold shadow-xs transition-all disabled:opacity-50"
                >
                  {isSubmittingSuggestion ? 'جاري الإرسال...' : 'إرسال الاقتراح'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
