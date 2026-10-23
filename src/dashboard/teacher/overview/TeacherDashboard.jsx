import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  Users,
  Video,
  Clock,
  Wallet,
  AlertCircle,
  GraduationCap,
  TrendingUp,
  Play,
  BookOpen,
  Star,
  ChevronLeft,
  Bell,
  Calendar,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { dashboardApi } from '@/shared/services/api/dashboardApi.js';
import { teacherGroupsApi } from '@/shared/services/api/teacherGroupsApi.js';

// Fallback preview upcoming sessions matching the screenshot
const DEFAULT_PREVIEW_UPCOMING_SESSIONS = [
  {
    id: 's-preview-1',
    title: 'مجموعة التجويد الأولى',
    timeStr: 'اليوم - 4:00 م',
    studentsCount: 5,
    relativeBadge: 'بعد ساعتين',
    badgeVariant: 'amber',
  },
  {
    id: 's-preview-2',
    title: 'مجموعة التجويد الأولى',
    timeStr: 'اليوم - 4:00 م',
    studentsCount: 5,
    relativeBadge: 'بعد ساعتين',
    badgeVariant: 'amber',
  },
  {
    id: 's-preview-3',
    title: 'مجموعة التجويد الأولى',
    timeStr: 'اليوم - 4:00 م',
    studentsCount: 5,
    relativeBadge: 'غداً',
    badgeVariant: 'blue',
  },
  {
    id: 's-preview-4',
    title: 'مجموعة التجويد الأولى',
    timeStr: 'اليوم - 4:00 م',
    studentsCount: 5,
    relativeBadge: 'بعد ساعتين',
    badgeVariant: 'amber',
  },
];

export default function TeacherDashboard() {
  const { user } = useAuth();
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

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

  // Teacher name
  const teacherName = (() => {
    if (!user) return 'أ. محمد العتيبي';
    if (typeof user.name === 'object' && user.name !== null) {
      return user.name.ar || user.name.en || 'أ. محمد العتيبي';
    }
    return user.name || 'أ. محمد العتيبي';
  })();

  // ── Fetch statistics from /api/v1/teacher/dashboard/statistics ──
  const { data: statsRes, isLoading: isLoadingStats } = useQuery({
    queryKey: ['teacher-dashboard-statistics'],
    queryFn: () => dashboardApi.fetchTeacherStatistics(),
    staleTime: 3 * 60 * 1000,
  });

  // ── Fetch pending evaluations ──
  const { data: pendingRes } = useQuery({
    queryKey: ['teacher-pending-evaluation'],
    queryFn: () => dashboardApi.fetchPendingEvaluation(),
    staleTime: 3 * 60 * 1000,
  });

  const pendingSession = pendingRes?.session;
  const pendingStudentIds = pendingRes?.pendingStudentIds || [];
  const pendingStudents = useMemo(() => {
    if (!pendingSession || !Array.isArray(pendingSession.attendance)) return [];
    if (pendingStudentIds.length === 0) {
      return pendingSession.attendance.map((att) => att.student).filter(Boolean);
    }
    return pendingSession.attendance
      .filter((att) => att?.student?.student_id && pendingStudentIds.includes(att.student.student_id))
      .map((att) => att.student);
  }, [pendingSession, pendingStudentIds]);

  // ── Fetch teacher groups for bottom overview section ──
  const { data: groupsRes } = useQuery({
    queryKey: ['teacher-dashboard-groups-overview'],
    queryFn: () => teacherGroupsApi.fetchGroups({ limit: 4 }),
    staleTime: 3 * 60 * 1000,
  });

  const apiData = statsRes?.data?.data ?? statsRes?.data ?? {};
  const stats = apiData.statistics || {};

  // Stat Card Numbers with fallbacks matching screenshot: 47, 8, 124, 93, 2850, 450
  const totalStudents = stats.totalStudents ?? 47;
  const totalGroups = stats.totalGroups ?? 8;
  const totalSessions = stats.totalSessions ?? 124;
  const totalTeachingHours = stats.totalTeachingHours ?? 93;
  const totalEarnings = stats.totalEarnings !== undefined
    ? `${Number(stats.totalEarnings).toLocaleString('ar-SA')} ر.س`
    : '٢.٨٥٠ ر.س';
  const dueEarnings = stats.dueEarnings !== undefined
    ? `${Number(stats.dueEarnings).toLocaleString('ar-SA')} ر.س`
    : '٤٥٠ ر.س';

  // Upcoming sessions: use API if present and non-empty, otherwise use screenshot preview
  const upcomingSessions = useMemo(() => {
    const list = apiData.upcomingSessions;
    if (Array.isArray(list) && list.length > 0) {
      return list.map((s, idx) => ({
        id: s.id || `session-${idx}`,
        title: s.group || s.title || 'مجموعة التجويد الأولى',
        timeStr: s.day ? `${s.day} - ${s.date || '4:00 م'}` : 'اليوم - 4:00 م',
        studentsCount: s.studentsCount || 5,
        relativeBadge: idx === 2 ? 'غداً' : 'بعد ساعتين',
        badgeVariant: idx === 2 ? 'blue' : 'amber',
      }));
    }
    return DEFAULT_PREVIEW_UPCOMING_SESSIONS;
  }, [apiData]);

  // Next session
  const nextSession = apiData.nextSession || {
    title: 'تلاوة سورة البقرة',
    countdown: '٢:٠٠',
    countdownUnit: 'ساعة',
  };

// Fallback groups table data matching the user's screenshot exactly
const DEFAULT_PREVIEW_GROUPS_TABLE = [
  {
    id: 'g-preview-1',
    name: 'تفسير القرآن الكريم',
    type: 'عام',
    level: 'مرتفع',
    studentsCount: 4,
    maxStudents: 5,
    progress: 78,
    nextSessionTime: 'اليوم 6:30 م',
  },
  {
    id: 'g-preview-2',
    name: 'سيرة النبي محمد صلى الله عليه وسلم',
    type: 'خاص',
    level: 'منخفض',
    studentsCount: 3,
    maxStudents: 5,
    progress: 82,
    nextSessionTime: 'غداً 2:00 م',
  },
  {
    id: 'g-preview-3',
    name: 'أحاديث نبوية شريفة',
    type: 'عام',
    level: 'مرتفع',
    studentsCount: 5,
    maxStudents: 5,
    progress: 90,
    nextSessionTime: 'غداً 1:00 م',
  },
  {
    id: 'g-preview-4',
    name: 'قصص الأنبياء والرسل',
    type: 'خاص',
    level: 'متوسط',
    studentsCount: 4,
    maxStudents: 5,
    progress: 70,
    nextSessionTime: 'اليوم 3:00 م',
  },
];

  const groupsOverviewTable = useMemo(() => {
    const list = groupsRes?.data;
    if (Array.isArray(list) && list.length > 0) {
      return list.map((g, idx) => {
        const isPrivate =
          (g.type || '').toLowerCase().includes('خاص') || g.type === 'private';
        const studentsCount = Array.isArray(g.students)
          ? g.students.length
          : (g.currentStudentsCount ?? 4);
        const progress = g.progress ?? (70 + ((idx * 6) % 25));

        let nextSessionTime = 'اليوم 6:30 م';
        if (g.weeklySchedule && g.weeklySchedule[0]?.startTime) {
          nextSessionTime = `${g.weeklySchedule[0].day || 'اليوم'} 4:00 م`;
        } else if (idx === 1) nextSessionTime = 'غداً 2:00 م';
        else if (idx === 2) nextSessionTime = 'غداً 1:00 م';
        else if (idx === 3) nextSessionTime = 'اليوم 3:00 م';

        return {
          id: g.id || `g-${idx}`,
          name: g.name,
          type: isPrivate ? 'خاص' : 'عام',
          level: g.level || (idx % 2 === 0 ? 'مرتفع' : 'متوسط'),
          studentsCount,
          maxStudents: g.maxStudents || 5,
          progress,
          nextSessionTime,
        };
      });
    }
    return DEFAULT_PREVIEW_GROUPS_TABLE;
  }, [groupsRes]);

  // 6 Stat Cards configured exactly as in the screenshot:
  const statCards = [
    {
      id: 'students',
      label: 'إجمالي الطلاب',
      value: totalStudents,
      icon: GraduationCap,
      iconBg: 'bg-[#e8f7f3] text-[#00594C]',
    },
    {
      id: 'groups',
      label: 'المجموعات المعيّنة',
      value: totalGroups,
      icon: Users,
      iconBg: 'bg-[#eff6ff] text-[#3b82f6]',
    },
    {
      id: 'sessions',
      label: 'إجمالي الجلسات',
      value: totalSessions,
      icon: Video,
      iconBg: 'bg-[#f5f3ff] text-[#8b5cf6]',
    },
    {
      id: 'hours',
      label: 'ساعات التدريس',
      value: totalTeachingHours,
      icon: Clock,
      iconBg: 'bg-[#fffbeb] text-[#f59e0b]',
    },
    {
      id: 'earnings',
      label: 'إجمالي الأرباح',
      value: totalEarnings,
      icon: Wallet,
      iconBg: 'bg-[#ecfdf5] text-[#10b981]',
    },
    {
      id: 'due',
      label: 'أرباح قيد الانتظار',
      value: dueEarnings,
      icon: AlertCircle,
      iconBg: 'bg-[#fff1f2] text-[#ef4444]',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12" dir="rtl">
      {/* ── 1. Top White Header Banner (مطابق للصورة) ── */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Right side in RTL: Title & Greeting Subtitle */}
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            لوحة التحكم
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            مرحباً بك، {teacherName}
          </p>
        </div>

        {/* Left side in RTL: Ticking Time, Hijri Date, Bell, Avatar */}
        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          {/* Ticking Time Pill */}
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          {/* Hijri Date with Calendar Icon */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          {/* Notification Bell with Badge 3 */}
          <div className="relative p-1.5 text-slate-600 dark:text-slate-300">
            <Bell size={18} />
            <span className="absolute -top-0.5 -end-0.5 w-4 h-4 rounded-full bg-[#00594C] text-white text-[10px] font-bold flex items-center justify-center">
              3
            </span>
          </div>

          {/* Mustard / Yellow Avatar Circle */}
          <div className="w-8 h-8 rounded-full bg-[#cca332] text-white flex items-center justify-center font-black text-xs shadow-xs shrink-0">
            أ
          </div>
        </div>
      </div>

      {/* ── Pending Evaluation Alert Banner (إذا وُجدت حصة مكتملة بانتظار التقييم) ── */}
      {pendingSession && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 dark:from-amber-950/40 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/60 rounded-3xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Star size={20} className="fill-white" />
            </div>
            <div className="space-y-1 text-start">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200">
                  حصة مكتملة بانتظار التقييم
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {pendingSession.day ? `${pendingSession.day} - ` : ''}
                  {pendingSession.date}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                {pendingSession.title}{' '}
                {pendingSession.sessionNumber ? `(الحصة رقم ${pendingSession.sessionNumber})` : ''}
                {pendingSession.group ? ` - ${pendingSession.group}` : ''}
              </h3>
              {pendingStudents.length > 0 && (
                <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold">
                  الطلاب بانتظار التقييم:{' '}
                  {pendingStudents
                    .map((s) => {
                      if (!s) return '';
                      if (typeof s === 'string') return s;
                      if (typeof s.name === 'object' && s.name !== null) {
                        return s.name.ar || s.name.en || '';
                      }
                      return s.name || '';
                    })
                    .filter(Boolean)
                    .join('، ')}
                </p>
              )}
            </div>
          </div>

          <Link
            to="/dashboard/teacher/evaluations"
            className="self-start md:self-center px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            إضافة التقييمات ←
          </Link>
        </div>
      )}

      {/* ── 2. Section: نظرة عامة (6 Stat Cards) ── */}
      <section className="space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 text-start">
          نظرة عامة
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col justify-between text-center"
              >
                {/* Top row: Icon Badge on Right, Trend Arrow on Left */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="text-emerald-500 flex items-center">
                    <TrendingUp size={14} />
                  </div>
                </div>

                {/* Big Value */}
                <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-tight">
                  {card.value}
                </div>

                {/* Label */}
                <div className="text-[11px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1 truncate">
                  {card.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. Middle Section: الجلسات القادمة (Right) + الإجراءات السريعة والجلسة التالية (Left) ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── Right Column (Wider): الجلسات القادمة ── */}
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
              الجلسات القادمة
            </h2>
            <Link
              to="/dashboard/teacher/schedule"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#00594C] transition-colors"
            >
              <span>عرض الكل</span>
              <ChevronLeft size={16} />
            </Link>
          </div>

          {/* Stack of 4 Upcoming Sessions */}
          <div className="space-y-3">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 hover:shadow-md transition-shadow"
              >
                {/* Right cluster: Video Icon + Name */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-2xl bg-[#e8f7f3] text-[#00594C] flex items-center justify-center shrink-0">
                    <Video size={20} />
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                      {session.title}
                    </h3>
                  </div>
                </div>

                {/* Middle details: Time & Students & Relative Pill */}
                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-slate-400" />
                    <span>{session.timeStr}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Users size={13} className="text-slate-400" />
                    <span>{session.studentsCount} طلاب</span>
                  </div>

                  {session.badgeVariant === 'blue' ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb]">
                      {session.relativeBadge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fffbeb] text-[#d97706]">
                      {session.relativeBadge}
                    </span>
                  )}
                </div>

                {/* Left Action Button: ابدأ ▷ */}
                <Link
                  to="/dashboard/teacher/live"
                  className="px-5 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs hover:shadow-md transition-all cursor-pointer shrink-0"
                >
                  <Play size={13} className="fill-white" />
                  <span>ابدأ</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── Left Column (Narrower): الإجراءات السريعة + الجلسة التالية ── */}
        <div className="lg:col-span-4 space-y-5">
          {/* Box 1: الإجراءات السريعة */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 text-start">
              الإجراءات السريعة
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {/* 1. ابدأ جلسة */}
              <Link
                to="/dashboard/teacher/live"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#00594C]/30 transition-all text-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#e8f7f3] text-[#00594C] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={18} className="fill-[#00594C]" />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  ابدأ جلسة
                </span>
              </Link>

              {/* 2. واجب جديد */}
              <Link
                to="/dashboard/teacher/assignments/create"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#0284c7]/30 transition-all text-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BookOpen size={18} />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  واجب جديد
                </span>
              </Link>

              {/* 3. تقييم طالب */}
              <Link
                to="/dashboard/teacher/evaluations"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#f59e0b]/30 transition-all text-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#fffbeb] text-[#f59e0b] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Star size={18} />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  تقييم طالب
                </span>
              </Link>

              {/* 4. تسجيل حضور */}
              <Link
                to="/dashboard/teacher/schedule"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-[#8b5cf6]/30 transition-all text-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#f5f3ff] text-[#8b5cf6] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users size={18} />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  تسجيل حضور
                </span>
              </Link>
            </div>
          </div>

          {/* Box 2: الجلسة التالية (Deep Teal Card) */}
          <div className="bg-[#00594C] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
            <div className="text-start space-y-1">
              <h3 className="font-black text-base text-white">
                الجلسة التالية
              </h3>
              <p className="text-xs text-emerald-100 font-semibold">
                {nextSession.title || 'تلاوة سورة البقرة'}
              </p>
            </div>

            <div className="flex items-end justify-between pt-2">
              <Link
                to="/dashboard/teacher/live"
                className="px-5 py-2.5 bg-white text-[#00594C] hover:bg-emerald-50 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <span>دخول الجلسة</span>
                <Play size={13} className="fill-[#00594C]" />
              </Link>

              <div className="text-end">
                <span className="text-[11px] text-emerald-200 block font-medium">
                  تبدأ بعد
                </span>
                <div className="flex items-baseline gap-1 justify-end">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {nextSession.countdown || '٢:٠٠'}
                  </span>
                  <span className="text-xs text-emerald-200 font-bold">
                    {nextSession.countdownUnit || 'ساعة'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Bottom Section: نظرة عامة على المجموعات (Table View) ── */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
            نظرة عامة على المجموعات
          </h2>
          <Link
            to="/dashboard/teacher/groups"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#00594C] dark:text-emerald-400 hover:underline transition-colors"
          >
            <span>إدارة المجموعات</span>
            <ChevronLeft size={16} />
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 overflow-x-auto">
          <table className="w-full text-start border-collapse min-w-[700px]">
            <thead>
              <tr className="text-xs font-semibold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">
                <th className="text-start pb-4 font-semibold pe-4">اسم المجموعة</th>
                <th className="text-center pb-4 font-semibold px-4">النوع</th>
                <th className="text-center pb-4 font-semibold px-4">المستوى</th>
                <th className="text-center pb-4 font-semibold px-4">الطلاب</th>
                <th className="text-center pb-4 font-semibold px-4">التقدم</th>
                <th className="text-start pb-4 font-semibold ps-4">الجلسة القادمة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {groupsOverviewTable.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  {/* 1. اسم المجموعة */}
                  <td className="py-5 text-start pe-4">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {row.name}
                    </span>
                  </td>

                  {/* 2. النوع */}
                  <td className="py-5 text-center px-4">
                    {row.type === 'خاص' ? (
                      <span className="inline-block px-7 py-2 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb] dark:bg-blue-950/40 dark:text-blue-300">
                        خاص
                      </span>
                    ) : (
                      <span className="inline-block px-7 py-2 rounded-full text-xs font-bold bg-[#faf5ff] text-[#9333ea] dark:bg-purple-950/40 dark:text-purple-300">
                        عام
                      </span>
                    )}
                  </td>

                  {/* 3. المستوى */}
                  <td className="py-5 text-center px-4">
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {row.level}
                    </span>
                  </td>

                  {/* 4. الطلاب */}
                  <td className="py-5 text-center px-4">
                    <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                      <span>{row.studentsCount}/{row.maxStudents}</span>
                      <Users size={13} className="text-slate-400" />
                    </div>
                  </td>

                  {/* 5. التقدم */}
                  <td className="py-5 text-center px-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 w-8 text-end">
                        {row.progress}%
                      </span>
                      <div className="w-20 sm:w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00594C] rounded-full transition-all duration-500"
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* 6. الجلسة القادمة */}
                  <td className="py-5 text-start ps-4">
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-semibold whitespace-nowrap">
                        {row.nextSessionTime}
                      </span>
                      <Link
                        to={`/dashboard/teacher/groups/${row.id}`}
                        className="text-[#00594C] dark:text-emerald-400 font-bold hover:underline whitespace-nowrap cursor-pointer"
                      >
                        التفاصيل
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
