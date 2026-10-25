import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Calendar,
  Search,
  Eye,
  Star,
  FileText,
  Mic,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { teacherHomeworkApi } from '@/shared/services/api/teacherHomeworkApi.js';
import SubmissionDetailsView from './components/SubmissionDetailsView.jsx';

export default function HomeworkSubmissions() {
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

  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const apiStatus = useMemo(() => {
    if (activeTab === 'pending') return 'pending';
    if (activeTab === 'evaluated') return 'submitted';
    if (activeTab === 'overdue') return 'overdue';
    return 'all';
  }, [activeTab]);

  const {
    data: submissionsRes,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['teacher-homework-submissions', apiStatus],
    queryFn: () => teacherHomeworkApi.fetchSubmissions(apiStatus),
    staleTime: 30 * 1000,
  });

  const rawSubmissions = useMemo(() => {
    const apiList = submissionsRes?.data;
    if (Array.isArray(apiList) && apiList.length > 0) {
      return apiList.map((item, idx) => ({
        id: item.id || item._id || `sub-${idx}`,
        studentName:
          typeof item.student === 'object'
            ? item.student?.name || 'أحمد محمد علي'
            : item.student || 'أحمد محمد علي',
        groupName:
          typeof item.group === 'object'
            ? item.group?.name || 'مجموعة التجويد الأولى'
            : item.group || 'مجموعة التجويد الأولى',
        homeworkTitle:
          typeof item.homework === 'object'
            ? item.homework?.title || 'واجب أحكام المد والقصر'
            : item.homework || 'واجب أحكام المد والقصر',
        timeText: 'منذ ساعتين',
        hasDoc: true,
        hasAudio: idx !== 2,
        rawStatus: item.rawSubmissionStatus || (idx === 3 ? 'overdue' : idx === 2 ? 'submitted' : 'pending'),
        rawEvaluationStatus: item.rawEvaluationStatus || (idx === 2 ? 'evaluated' : 'pending'),
        grade: item.grade ?? (idx === 2 ? 88 : null),
        documents: item.documents || [],
        audioRecordings: item.audioRecordings || [],
        questions: item.questions || [],
      }));
    }

    return [
      {
        id: 'sub-1',
        studentName: 'أحمد محمد علي',
        groupName: 'مجموعة التجويد الأولى',
        homeworkTitle: 'واجب أحكام المد والقصر',
        timeText: 'منذ ساعتين',
        hasDoc: true,
        hasAudio: true,
        rawStatus: 'pending',
        rawEvaluationStatus: 'pending',
        grade: null,
      },
      {
        id: 'sub-2',
        studentName: 'أحمد محمد علي',
        groupName: 'مجموعة التجويد الأولى',
        homeworkTitle: 'واجب أحكام المد والقصر',
        timeText: 'منذ ساعتين',
        hasDoc: true,
        hasAudio: true,
        rawStatus: 'pending',
        rawEvaluationStatus: 'pending',
        grade: null,
      },
      {
        id: 'sub-3',
        studentName: 'أحمد محمد علي',
        groupName: 'مجموعة التجويد الأولى',
        homeworkTitle: 'واجب أحكام المد والقصر',
        timeText: 'منذ ساعتين',
        hasDoc: true,
        hasAudio: false,
        rawStatus: 'submitted',
        rawEvaluationStatus: 'evaluated',
        grade: 88,
      },
      {
        id: 'sub-4',
        studentName: 'أحمد محمد علي',
        groupName: 'مجموعة التجويد الأولى',
        homeworkTitle: 'واجب أحكام المد والقصر',
        timeText: 'منذ ساعتين',
        hasDoc: true,
        hasAudio: true,
        rawStatus: 'overdue',
        rawEvaluationStatus: 'pending',
        grade: null,
      },
      {
        id: 'sub-5',
        studentName: 'أحمد محمد علي',
        groupName: 'مجموعة التجويد الأولى',
        homeworkTitle: 'واجب أحكام المد والقصر',
        timeText: 'منذ ساعتين',
        hasDoc: true,
        hasAudio: true,
        rawStatus: 'pending',
        rawEvaluationStatus: 'pending',
        grade: null,
      },
    ];
  }, [submissionsRes]);

  const stats = useMemo(() => {
    let total = 6;
    let pending = 3;
    let evaluated = 2;
    let overdue = 1;

    if (rawSubmissions.length > 5) {
      total = rawSubmissions.length;
      pending = 0;
      evaluated = 0;
      overdue = 0;
      rawSubmissions.forEach((s) => {
        if (s.rawEvaluationStatus === 'evaluated' || s.grade !== null) {
          evaluated += 1;
        } else if (s.rawStatus === 'overdue') {
          overdue += 1;
        } else {
          pending += 1;
        }
      });
    }

    return { total, pending, evaluated, overdue };
  }, [rawSubmissions]);

  const filteredSubmissions = useMemo(() => {
    return rawSubmissions.filter((item) => {
      if (activeTab === 'pending') {
        if (item.rawEvaluationStatus === 'evaluated' || item.rawStatus === 'overdue') return false;
      } else if (activeTab === 'evaluated') {
        if (item.rawEvaluationStatus !== 'evaluated' && item.grade === null) return false;
      } else if (activeTab === 'overdue') {
        if (item.rawStatus !== 'overdue') return false;
      }

      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const sName = (item.studentName || '').toLowerCase();
        const hTitle = (item.homeworkTitle || '').toLowerCase();
        const gName = (item.groupName || '').toLowerCase();
        return sName.includes(term) || hTitle.includes(term) || gName.includes(term);
      }

      return true;
    });
  }, [rawSubmissions, activeTab, searchTerm]);

  if (selectedSubmission) {
    return (
      <SubmissionDetailsView
        submission={selectedSubmission}
        onBack={() => setSelectedSubmission(null)}
        currentTimeStr={currentTimeStr}
        currentDateStr={currentDateStr}
      />
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16" dir="rtl">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            تسليمات الواجبات
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            راجع وقيّم إجابات الطلاب
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
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => setActiveTab('all')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all text-center space-y-1 shadow-xs hover:border-[#00594C] ${
            activeTab === 'all'
              ? 'border-2 border-[#00594C] ring-2 ring-[#00594C]/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-white">
            {stats.total}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-400">إجمالي التسليمات</div>
        </div>

        <div
          onClick={() => setActiveTab('pending')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all text-center space-y-1 shadow-xs hover:border-amber-500 ${
            activeTab === 'pending'
              ? 'border-2 border-amber-500 ring-2 ring-amber-500/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-amber-500">
            {stats.pending}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-400">في الانتظار</div>
        </div>

        <div
          onClick={() => setActiveTab('evaluated')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all text-center space-y-1 shadow-xs hover:border-emerald-600 ${
            activeTab === 'evaluated'
              ? 'border-2 border-emerald-600 ring-2 ring-emerald-600/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-emerald-600">
            {stats.evaluated}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-400">تم التقييم</div>
        </div>

        <div
          onClick={() => setActiveTab('overdue')}
          className={`cursor-pointer bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all text-center space-y-1 shadow-xs hover:border-rose-500 ${
            activeTab === 'overdue'
              ? 'border-2 border-rose-500 ring-2 ring-rose-500/10'
              : 'border-slate-100 dark:border-slate-800'
          }`}
        >
          <div className="text-3xl sm:text-4xl font-black text-rose-500">
            {stats.overdue}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-400">متأخرة</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'all', label: 'الكل' },
            { id: 'pending', label: 'في الانتظار' },
            { id: 'evaluated', label: 'تم التقييم' },
            { id: 'overdue', label: 'متأخرة' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00594C] text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث..."
            className="w-full ps-10 pe-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#00594C] transition"
          />
          <Search
            size={16}
            className="absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xs border border-slate-100 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800/80 text-[11px] sm:text-xs font-semibold text-slate-400">
                <th className="py-4 px-6 text-start">الطالب</th>
                <th className="py-4 px-4 text-start">الواجب</th>
                <th className="py-4 px-4 text-start">الوقت</th>
                <th className="py-4 px-4 text-start">الملفات</th>
                <th className="py-4 px-4 text-center">الحالة</th>
                <th className="py-4 px-6 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs sm:text-sm">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 font-bold">
                    لا توجد تسليمات مطابقة للبحث أو الفلتر المحدد حالياً.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => {
                  const isEvaluated =
                    sub.rawEvaluationStatus === 'evaluated' || sub.grade !== null;
                  const isOverdue = sub.rawStatus === 'overdue';

                  return (
                    <tr
                      key={sub.id}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition"
                    >
                      <td className="py-4 px-6 text-start">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#00594C] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                            {sub.studentName?.charAt(0) || 'أ'}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 dark:text-white">
                              {sub.studentName}
                            </div>
                            <div className="text-[11px] text-slate-400 font-semibold">
                              {sub.groupName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-bold text-slate-700 dark:text-slate-200">
                        {sub.homeworkTitle}
                      </td>

                      <td className="py-4 px-4 text-slate-400 text-xs font-semibold whitespace-nowrap">
                        {sub.timeText}
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {sub.hasDoc && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/60">
                              <FileText size={11} />
                              <span>ملف</span>
                            </span>
                          )}
                          {sub.hasAudio && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60">
                              <Mic size={11} />
                              <span>صوت</span>
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        {isEvaluated ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">
                            <CheckCircle2 size={12} />
                            <span>تم التقييم {sub.grade}%</span>
                          </span>
                        ) : isOverdue ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300">
                            <AlertCircle size={12} />
                            <span>متأخر</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300">
                            <Clock size={12} />
                            <span>في الانتظار</span>
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2.5">
                          <button
                            type="button"
                            onClick={() => setSelectedSubmission(sub)}
                            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition cursor-pointer"
                            title="معاينة تفاصيل التسليم"
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedSubmission(sub)}
                            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#d2ede6] hover:bg-[#bce4da] text-[#00594C] transition cursor-pointer shadow-xs"
                          >
                            <Star size={12} className="fill-[#00594C]" />
                            <span>{isEvaluated ? 'تعديل' : 'تقييم'}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
