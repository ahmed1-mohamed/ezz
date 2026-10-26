import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Gift,
  Award,
  ChevronDown,
  Users,
  Search,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  X,
  Check,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherRewardsApi } from '@/shared/services/api/teacherRewardsApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

function resolveRewardIcon(icon) {
  if (!icon) return '👑';
  const lower = String(icon).toLowerCase().trim();
  if (lower === 'crown') return '👑';
  if (lower === 'star') return '⭐';
  if (lower === 'trophy') return '🏆';
  if (lower === 'medal') return '🎖️';
  if (lower === 'award') return '🎗️';
  if (lower === 'book') return '📖';
  if (lower === 'heart') return '❤️';
  return icon;
}

export default function TeacherAwardStudentsTab() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const queryClient = useQueryClient();

  const [selectedGroupId, setSelectedGroupId] = useState('all');
  const [selectedGroupName, setSelectedGroupName] = useState('');
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false);
  const [studentSearchQuery, setStudentSearchQuery] = useState('');

  const [studentAwards, setStudentAwards] = useState({});
  const [isGrantingRewards, setIsGrantingRewards] = useState(false);

  const { data: rewardsRes, isLoading: isLoadingRewards } = useQuery({
    queryKey: ['teacher-rewards'],
    queryFn: () => teacherRewardsApi.fetchRewards(),
    staleTime: 5 * 60 * 1000,
  });

  const { data: activeGroupsRes } = useQuery({
    queryKey: ['teacher-active-groups-rewards'],
    queryFn: () => teacherRewardsApi.fetchActiveGroups(),
    staleTime: 5 * 60 * 1000,
  });

  const activeGroups = useMemo(() => {
    const list = activeGroupsRes?.data;
    if (Array.isArray(list) && list.length > 0) {
      return list.map((g) => ({
        id: g.id || g._id,
        name: typeof g.name === 'object' ? g.name?.ar || g.name?.en : g.name,
        studentsCount: g.currentStudentsCount || g.studentsCount || (Array.isArray(g.students) ? g.students.length : 0),
      }));
    }
    return [];
  }, [activeGroupsRes]);

  const { data: teacherStudentsRes, isLoading: isLoadingStudents } = useQuery({
    queryKey: ['teacher-students', selectedGroupId],
    queryFn: () =>
      teacherRewardsApi.fetchTeacherStudents(
        selectedGroupId !== 'all' ? { groupId: selectedGroupId } : {}
      ),
    staleTime: 5 * 60 * 1000,
  });

  const { data: groupDetailsRes } = useQuery({
    queryKey: ['teacher-active-group-details', selectedGroupId],
    queryFn: () => teacherGroupsApi.fetchGroupDetails(selectedGroupId),
    enabled: Boolean(selectedGroupId && selectedGroupId !== 'all' && /^[0-9a-fA-F]{24}$/.test(selectedGroupId)),
    staleTime: 5 * 60 * 1000,
  });

  const rewardsList = useMemo(() => {
    const apiList = rewardsRes?.data;
    const list = Array.isArray(apiList) ? apiList : [];

    return list.map((r) => {
      let nameStr = r.name;
      if (typeof nameStr === 'object' && nameStr !== null) {
        nameStr = nameStr.ar || nameStr.en || 'مكافأة';
      }
      let descStr = r.description;
      if (typeof descStr === 'object' && descStr !== null) {
        descStr = descStr.ar || descStr.en || '';
      }
      const iconStr = resolveRewardIcon(r.icon);

      return {
        id: r.id || r._id,
        name: nameStr,
        description: descStr,
        points: r.points || null,
        icon: iconStr,
        backgroundColor: r.backgroundColor || '#FFD700',
      };
    });
  }, [rewardsRes]);

  const studentRewardItems = useMemo(() => {
    return rewardsList.map((r) => ({
      id: r.id,
      name: r.name,
      icon: r.icon,
      backgroundColor: r.backgroundColor,
    }));
  }, [rewardsList]);

  const studentsList = useMemo(() => {
    let rawList = [];

    if (Array.isArray(teacherStudentsRes?.data) && teacherStudentsRes.data.length > 0) {
      rawList = teacherStudentsRes.data;
    } else if (Array.isArray(groupDetailsRes?.data?.students) && groupDetailsRes.data.students.length > 0) {
      rawList = groupDetailsRes.data.students;
    }

    let mapped = rawList.map((s, idx) => {
      const studentId = s.id || s._id || s.student_id || `st-${idx + 1}`;
      let name = s.name;
      if (typeof name === 'object' && name !== null) {
        name = name.ar || name.en || `طالب ${idx + 1}`;
      }
      name = name || `طالب ${idx + 1}`;
      const initial = name.replace(/^أ\.\s*/, '').trim().charAt(0) || 'ط';

      let gName = s.groupName || s.group?.name || '';
      if (typeof gName === 'object' && gName !== null) {
        gName = gName.ar || gName.en || '';
      }

      return {
        student_id: String(studentId),
        name,
        initial,
        groupName: gName,
        groupId: s.groupId || s.group?.id || s.group?._id,
        totalPoints: s.totalPoints || s.points || 0,
        recentRewards: Array.isArray(s.rewards) ? s.rewards : (Array.isArray(s.badges) ? s.badges : []),
      };
    });

    if (selectedGroupId !== 'all') {
      mapped = mapped.filter((s) => {
        if (!s.groupId) return true;
        return String(s.groupId) === String(selectedGroupId);
      });
    }

    if (studentSearchQuery.trim()) {
      const q = studentSearchQuery.trim().toLowerCase();
      mapped = mapped.filter((s) => s.name.toLowerCase().includes(q));
    }

    return mapped;
  }, [teacherStudentsRes, groupDetailsRes, selectedGroupId, studentSearchQuery]);

  const totalSelectedCount = useMemo(() => {
    return Object.values(studentAwards).reduce(
      (acc, list) => acc + (Array.isArray(list) ? list.length : 0),
      0
    );
  }, [studentAwards]);

  const awardedStudentsCount = useMemo(() => {
    return Object.values(studentAwards).filter(
      (list) => Array.isArray(list) && list.length > 0
    ).length;
  }, [studentAwards]);

  const handleToggleReward = (studentId, rewardId) => {
    setStudentAwards((prev) => {
      const currentList = prev[studentId] || [];
      const isAlreadySelected = currentList.includes(rewardId);

      if (isAlreadySelected) {
        const nextList = currentList.filter((id) => id !== rewardId);
        const next = { ...prev };
        if (nextList.length === 0) {
          delete next[studentId];
        } else {
          next[studentId] = nextList;
        }
        return next;
      }

      const currentTotal = Object.values(prev).reduce(
        (acc, list) => acc + (Array.isArray(list) ? list.length : 0),
        0
      );

      if (currentTotal >= 3) {
        toast.error(t('teacher.max3RewardsToast', 'يمكنك منح حد أقصى 3 مكافآت في الجلسة الواحدة'));
        return prev;
      }

      return {
        ...prev,
        [studentId]: [...currentList, rewardId],
      };
    });
  };

  const handleClearAllSelections = () => {
    setStudentAwards({});
  };

  const handleGrantAllRewards = async () => {
    const pairs = [];
    Object.entries(studentAwards).forEach(([studentId, rewardIds]) => {
      rewardIds.forEach((rewardId) => {
        pairs.push({ studentId, rewardId });
      });
    });

    if (pairs.length === 0) {
      toast.error(t('teacher.selectAtLeastOneRewardToast', 'يرجى اختيار مكافأة واحدة على الأقل لمنحها'));
      return;
    }

    setIsGrantingRewards(true);
    let successCount = 0;
    let lastMessage = '';

    for (const pair of pairs) {
      const res = await teacherRewardsApi.awardRewardToStudent(pair.studentId, pair.rewardId);
      if (res.success) {
        successCount++;
        lastMessage = res.message;
      }
    }
    setIsGrantingRewards(false);

    if (successCount > 0) {
      toast.success(
        lastMessage || t('teacher.grantSuccessToast', 'تم منح المكافآت للطلاب بنجاح وسيتم إشعار أولياء أمورهم')
      );
      setStudentAwards({});
      queryClient.invalidateQueries({ queryKey: ['teacher-students'] });
      queryClient.invalidateQueries({ queryKey: ['teacher-rewards'] });
    } else {
      toast.error(t('teacher.grantErrorToast', 'تعذر منح المكافآت، يرجى المحاولة مرة أخرى'));
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-[#f6eedd] dark:bg-amber-950/30 border border-[#ecd9b8] dark:border-amber-800/40 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="space-y-1 text-start">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-[#785b12] dark:text-amber-200">
              {t('teacher.currentSessionRewards', 'مكافآت الجلسة الحالية')}
            </h3>
            <Sparkles size={18} className="text-[#cca332]" />
          </div>
          <p className="text-xs sm:text-sm text-[#8c6b1b] dark:text-amber-300 font-semibold leading-relaxed">
            {t('teacher.currentSessionRewardsNotice', 'يمكنك منح حد أقصى 3 مكافآت في الجلسة الواحدة لتعزيز المنافسة الإيجابية بين الطلاب')}
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
          <div className="px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-[#ecd9b8] dark:border-amber-800/40 flex items-center gap-2">
            <Award size={16} className="text-[#cca332]" />
            <span className="text-xs font-bold text-[#785b12] dark:text-amber-200">
              تم اختيار <span className="font-mono font-black text-sm text-[#00594C] dark:text-emerald-400">{totalSelectedCount}</span> / 3
            </span>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#cca332] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
            <Gift size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-7 text-start">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2.5">
              <span>{t('teacher.awardStudentsHeader', 'منح المكافآت للطلاب')}</span>
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#e8f7f3] text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
                {studentsList.length} طالب
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
              {t('teacher.filterActiveGroupsSubtitle', 'اختر المجموعة أو ابحث عن الطالب ثم انقر على المكافأة المناسبة لمنحها')}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                className="bg-[#f8faf9] dark:bg-slate-800 rounded-2xl px-4 py-2.5 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 transition-colors cursor-pointer min-w-[200px]"
              >
                <div className="flex items-center gap-2 truncate">
                  <Users size={16} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                  <span className="truncate">
                    {selectedGroupId === 'all'
                      ? t('teacher.allActiveGroups', 'جميع المجموعات النشطة')
                      : selectedGroupName}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 transition-transform shrink-0 ${
                    isGroupDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isGroupDropdownOpen && (
                <div className="absolute top-full mt-2 start-0 w-64 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-xl z-30 py-2 space-y-1">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800">
                    {t('teacher.activeGroupsOnly', 'المجموعات النشطة فقط')} ({activeGroups.length})
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGroupId('all');
                      setSelectedGroupName('');
                      setIsGroupDropdownOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between ${
                      selectedGroupId === 'all'
                        ? 'bg-[#e8f7f3] dark:bg-slate-800 text-[#00594C] dark:text-emerald-300'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{t('teacher.allActiveGroups', 'جميع المجموعات النشطة')}</span>
                    {selectedGroupId === 'all' && <CheckCircle2 size={14} className="text-[#00594C]" />}
                  </button>

                  {activeGroups.map((grp) => (
                    <button
                      key={grp.id}
                      type="button"
                      onClick={() => {
                        setSelectedGroupId(grp.id);
                        setSelectedGroupName(grp.name);
                        setIsGroupDropdownOpen(false);
                      }}
                      className={`w-full text-start px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between ${
                        selectedGroupId === grp.id
                          ? 'bg-[#e8f7f3] dark:bg-slate-800 text-[#00594C] dark:text-emerald-300'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="truncate">{grp.name}</span>
                      {selectedGroupId === grp.id && (
                        <CheckCircle2 size={14} className="text-[#00594C] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={studentSearchQuery}
                onChange={(e) => setStudentSearchQuery(e.target.value)}
                placeholder={t('teacher.searchStudentPlaceholder', 'ابحث عن طالب...')}
                className="w-full bg-[#f8faf9] dark:bg-slate-800 rounded-2xl px-4 py-2.5 ps-10 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00594C]/20 focus:border-[#00594C] transition-all"
              />
              <Search size={16} className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              {studentSearchQuery && (
                <button
                  type="button"
                  onClick={() => setStudentSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Gift size={16} className="text-[#00594C] dark:text-emerald-400" />
              <span>{t('teacher.availableRewards', 'دليل المكافآت المتاحة للطلاب')}</span>
            </h3>
            <span className="text-xs font-semibold text-slate-400">
              {rewardsList.length} مكافأة معتمدة
            </span>
          </div>

          {isLoadingRewards ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-slate-50 dark:bg-slate-800/50 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : rewardsList.length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
              <Gift size={28} className="mx-auto mb-2 text-slate-300 dark:text-slate-600" />
              <p className="text-xs font-bold">{t('teacher.noAvailableRewards', 'لا توجد مكافآت متاحة حالياً')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {rewardsList.map((reward) => (
                <div
                  key={reward.id}
                  className="rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-[#00594C]/30 transition-all flex items-center gap-3.5 bg-white dark:bg-slate-800/50 text-start group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: reward.backgroundColor ? `${reward.backgroundColor}22` : '#FFFBEB',
                    }}
                  >
                    <span>{reward.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white truncate">
                        {reward.name}
                      </h4>
                      {reward.points && (
                        <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 shrink-0">
                          +{reward.points}
                        </span>
                      )}
                    </div>
                    {reward.description && (
                      <p className="text-[11px] text-slate-400 font-medium line-clamp-2 mt-0.5 leading-relaxed">
                        {reward.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Award size={16} className="text-[#00594C] dark:text-emerald-400" />
                <span>{t('teacher.selectStudentAndReward', 'قائمة الطلاب وتوزيع المكافآت')}</span>
              </h3>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                انقر على اسم المكافأة أسفل اسم كل طالب لتحديدها له
              </p>
            </div>

            {totalSelectedCount > 0 && (
              <button
                type="button"
                onClick={handleClearAllSelections}
                className="text-xs font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1.5 self-start sm:self-center transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>إلغاء جميع التحديدات ({totalSelectedCount})</span>
              </button>
            )}
          </div>

          {isLoadingStudents ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-slate-50 dark:bg-slate-800/50 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : studentsList.length === 0 ? (
            <div className="p-12 text-center text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 space-y-2">
              <Users size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
              <p className="text-sm font-bold">{t('teacher.noStudentsInActiveGroup', 'لا يوجد طلاب مطابقين في هذه المجموعة')}</p>
              <p className="text-xs text-slate-400">تأكد من اختيار مجموعة تحتوي على طلاب أو قم بتغيير عبارة البحث</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {studentsList.map((student) => {
                const awardedList = studentAwards[student.student_id] || [];
                const isSelected = awardedList.length > 0;

                return (
                  <div
                    key={student.student_id}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all text-start space-y-3.5 ${
                      isSelected
                        ? 'bg-[#f4faf8] dark:bg-emerald-950/20 border-[#00594C]/40 shadow-xs'
                        : 'bg-[#fafbfb] dark:bg-slate-800/40 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-[#00594C] text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0">
                          {student.initial}
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-black text-slate-800 dark:text-slate-100 truncate block">
                            {student.name}
                          </span>
                          {student.groupName && (
                            <span className="text-[11px] text-slate-400 font-semibold truncate block">
                              {student.groupName}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isSelected && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00594C] text-white flex items-center gap-1 shadow-xs">
                            <Check size={11} />
                            <span>محدد ({awardedList.length})</span>
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                          {student.totalPoints} نقطة
                        </span>
                      </div>
                    </div>

                    {studentRewardItems.length === 0 ? (
                      <p className="text-xs text-slate-400 font-medium py-1">
                        {t('teacher.noAvailableRewards', 'لا توجد مكافآت متاحة حالياً')}
                      </p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {studentRewardItems.map((rew) => {
                          const isAwarded = awardedList.includes(rew.id);

                          return (
                            <button
                              key={rew.id}
                              type="button"
                              onClick={() => handleToggleReward(student.student_id, rew.id)}
                              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-1.5 cursor-pointer ${
                                isAwarded
                                  ? 'bg-[#00594C] text-white shadow-xs ring-2 ring-[#00594C]/30'
                                  : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#00594C]/40 hover:text-[#00594C]'
                              }`}
                            >
                              <span className="truncate">{rew.name}</span>
                              <span className="text-sm shrink-0">{rew.icon}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold text-start">
            {totalSelectedCount > 0 ? (
              <span>
                سيتم منح <strong className="text-[#00594C] dark:text-emerald-400 font-black">{totalSelectedCount}</strong> مكافأة لـ <strong className="text-slate-800 dark:text-white font-black">{awardedStudentsCount}</strong> طلاب.
              </span>
            ) : (
              <span>اختر الطلاب والمكافآت لتفعيل زر المنح</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {totalSelectedCount > 0 && (
              <button
                type="button"
                onClick={handleClearAllSelections}
                className="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                إلغاء التحديد
              </button>
            )}

            <button
              type="button"
              onClick={handleGrantAllRewards}
              disabled={isGrantingRewards || totalSelectedCount === 0}
              className={`py-3.5 px-8 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                totalSelectedCount > 0
                  ? 'bg-[#00594C] hover:bg-[#00473d] text-white shadow-sm hover:shadow-md cursor-pointer'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-60'
              }`}
            >
              <Gift size={18} />
              <span>
                {isGrantingRewards
                  ? t('teacher.grantingRewards', 'جاري منح المكافآت للطلاب...')
                  : totalSelectedCount > 0
                  ? `${t('teacher.grantSelectedRewards', 'منح المكافآت المختارة')} (${totalSelectedCount})`
                  : t('teacher.grantRewards', 'منح المكافآت')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
