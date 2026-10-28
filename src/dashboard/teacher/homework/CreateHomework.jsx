import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Video,
  FileText,
  HelpCircle,
  Upload,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Trash2,
  Loader2,
  FileCheck,
  Film,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherHomeworkApi } from '@/shared/services/api/teacherHomeworkApi.js';
import QuestionBuilder from './components/QuestionBuilder.jsx';

export default function CreateHomework() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

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
          isRtl ? 'ar-SA-u-ca-islamic-umalqura' : 'en-US-u-ca-islamic-umalqura',
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }
        ).format(now);
        setCurrentDateStr(dateFormatted);
      } catch {
        setCurrentDateStr(isRtl ? 'الأربعاء، ٥ ذو القعدة ١٤٤٧ هـ' : 'Wednesday, 5 Dhu al-Qi\'dah 1447 AH');
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [isRtl]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState('');

  const [activeTab, setActiveTab] = useState('video');

  const [mediaFile, setMediaFile] = useState(null);
  const [mediaPreviewUrl, setMediaPreviewUrl] = useState('');
  const [documentFile, setDocumentFile] = useState(null);
  const [questions, setQuestions] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const { data: activeGroupsRes } = useQuery({
    queryKey: ['teacher-active-groups-homework'],
    queryFn: () => teacherHomeworkApi.fetchActiveGroups(),
    staleTime: 5 * 60 * 1000,
  });

  const activeGroups = useMemo(() => {
    const list = activeGroupsRes?.data;
    if (Array.isArray(list) && list.length > 0) {
      return list.map((g) => ({
        id: g.id || g._id,
        name: typeof g.name === 'object' ? (isRtl ? g.name.ar || g.name.en : g.name.en || g.name.ar) : g.name,
      }));
    }
    return [];
  }, [activeGroupsRes, isRtl]);

  const handleVideoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      toast.error('حجم الفيديو يجب ألا يتجاوز 50 ميغابايت');
      return;
    }

    setMediaFile(file);
    try {
      const url = URL.createObjectURL(file);
      setMediaPreviewUrl(url);
    } catch {
      setMediaPreviewUrl('');
    }
  };

  const handleRemoveVideo = () => {
    setMediaFile(null);
    if (mediaPreviewUrl) {
      URL.revokeObjectURL(mediaPreviewUrl);
      setMediaPreviewUrl('');
    }
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };

  const handleDocumentChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      toast.error('حجم ملف الواجب يجب ألا يتجاوز 50 ميغابايت');
      return;
    }

    setDocumentFile(file);
  };

  const handleRemoveDocument = () => {
    setDocumentFile(null);
    if (documentInputRef.current) {
      documentInputRef.current.value = '';
    }
  };

  const handlePublishHomework = async (isDraft = false) => {
    if (!title.trim()) {
      toast.error('يرجى كتابة عنوان الواجب');
      return;
    }

    if (!selectedGroupId) {
      toast.error(t('teacherHomework.errSelectGroup', 'يرجى اختيار المجموعة الدراسية النشطة'));
      return;
    }

    if (!deadline) {
      toast.error(t('teacherHomework.errSetDeadline', 'يرجى تحديد الموعد النهائي لتسليم الواجب'));
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('description', description.trim());
      formData.append('deadline', deadline);
      formData.append('group', selectedGroupId);
      formData.append('isDraft', String(isDraft));

      if (mediaFile) {
        formData.append('media', mediaFile);
      }

      if (documentFile) {
        formData.append('document', documentFile);
      }

      if (questions.length > 0) {
        formData.append('questions', JSON.stringify(questions));
      }

      const res = await teacherHomeworkApi.createHomework(formData);
      setIsSubmitting(false);

      if (res.success) {
        toast.success(
          isDraft
            ? t('teacherHomework.draftSaved', 'تم حفظ الواجب كمسودة بنجاح')
            : t('teacherHomework.publishedSuccess', 'تم نشر الواجب المدرسي بنجاح وإشعار جميع طلاب المجموعة')
        );
        navigate('/dashboard/teacher/assignments/submissions');
      } else {
        toast.error(res.message || t('teacherHomework.publishFailed', 'فشل نشر الواجب'));
      }
    } catch {
      setIsSubmitting(false);
      toast.error(t('teacherHomework.uploadError', 'حدث خطأ أثناء رفع ونشر الواجب'));
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {t('teacherHomework.createTitle', 'إنشاء واجب جديد')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-0.5">
            {t('teacherHomework.createSubtitle', 'أضف واجباً للطلاب بعد الجلسة')}
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

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start">
        <h3 className="text-sm font-black text-slate-800 dark:text-white">
          {t('teacherHomework.summaryTitle', 'ملخص الواجب')}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-50 dark:border-slate-800/80 pb-2.5">
            <div className="flex items-center gap-2">
              <Video size={16} className="text-slate-400" />
              <span>{t('teacherHomework.video', 'الفيديو')}</span>
            </div>
            <span className={mediaFile ? 'text-emerald-600 font-black' : 'text-slate-400'}>
              {mediaFile ? mediaFile.name : t('teacherHomework.notAttached', 'لم يتم الإرفاق')}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-50 dark:border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className={questions.length > 0 ? 'text-emerald-500' : 'text-slate-400'}
              />
              <span>{t('teacherHomework.quiz', 'الاختبار')} ({questions.length} أسئلة)</span>
            </div>
            <span className={questions.length > 0 ? 'text-emerald-600 font-black' : 'text-slate-400'}>
              {questions.length > 0 ? t('teacherHomework.questionsAdded', { count: questions.length, defaultValue: `${questions.length} سؤال مضاف` }) : '0 أسئلة'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-slate-400" />
              <span>{t('teacherHomework.document', 'ملف الواجب')}</span>
            </div>
            <span
              className={documentFile ? 'text-emerald-600 font-black' : 'text-slate-400'}
            >
              {documentFile ? documentFile.name : t('teacherHomework.notAttached', 'لم يتم الإرفاق')}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
        <h3 className="text-sm font-black text-slate-800 dark:text-white">
          {t('teacherHomework.attachmentsAndContent', 'معلومات الواجب')}
        </h3>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
            {t('teacherHomework.homeworkTitle', 'عنوان الواجب')}
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('teacherHomework.homeworkTitlePlaceholder', 'مثال : واجب أحكام المد والقصر')}
            className="w-full bg-[#f8faf9] dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
            {t('teacherHomework.homeworkDesc', 'وصف الواجب')}
          </label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t('teacherHomework.homeworkDescPlaceholder', 'اكتب تعليمات تفصيلية للطلاب...')}
            className="w-full bg-[#f8faf9] dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
              {t('teacherHomework.submissionDeadline', 'الموعد النهائي')}
            </label>
            <div className="relative">
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="DD/MM/YY"
                className="w-full bg-[#f8faf9] dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">
              {t('teacherHomework.studyGroup', 'المجموعة (النشطة فقط)')}
            </label>
            <div className="relative">
              <select
                value={selectedGroupId}
                onChange={(e) => setSelectedGroupId(e.target.value)}
                className="w-full bg-[#f8faf9] dark:bg-slate-800/80 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  {t('teacherHomework.selectActiveGroup', 'اختر المجموعة')}
                </option>
                {activeGroups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute end-4 top-4 text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden">
        <div className="flex items-center justify-end border-b border-slate-100 dark:border-slate-800 px-6 pt-3 gap-6">
          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`pb-3 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer relative ${activeTab === 'documents'
                ? 'text-[#00594C] dark:text-emerald-400'
                : 'text-slate-400 hover:text-slate-600'
              }`}
          >
            <FileText size={16} />
            <span>{t('teacherHomework.documentTab', 'ملف الواجب')}</span>
            {activeTab === 'documents' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#00594C] dark:bg-emerald-400" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`pb-3 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer relative ${activeTab === 'quiz'
                ? 'text-[#00594C] dark:text-emerald-400'
                : 'text-slate-400 hover:text-slate-600'
              }`}
          >
            <HelpCircle size={16} />
            <span>{t('teacherHomework.quizTab', 'اختبار قصير')}</span>
            {activeTab === 'quiz' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#00594C] dark:bg-emerald-400" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`pb-3 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer relative ${activeTab === 'video'
                ? 'text-[#00594C] dark:text-emerald-400'
                : 'text-slate-400 hover:text-slate-600'
              }`}
          >
            <Video size={16} />
            <span>{t('teacherHomework.videoTab', 'فيديو توضيحي')}</span>
            {activeTab === 'video' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#00594C] dark:bg-emerald-400" />
            )}
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTab === 'video' && (
            <div className="space-y-4">
              <input
                ref={videoInputRef}
                type="file"
                accept="video/mp4,video/quicktime,video/webm,audio/*"
                onChange={handleVideoChange}
                className="hidden"
              />

              {!mediaFile ? (
                <div
                  onClick={() => videoInputRef.current?.click()}
                  className="rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700/80 p-12 sm:p-16 text-center flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#00594C]/40 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                    <Upload size={26} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                      {t('teacherHomework.uploadVideo', 'رفع فيديو توضيحي')}
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold">
                      {t('teacherHomework.maxVideoSize', 'حتى 50 ميغابايت - MP4, MOV')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 space-y-4 text-start">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                        <Film size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-800 dark:text-white">
                          {mediaFile.name}
                        </h4>
                        <span className="text-xs text-slate-400 font-semibold">
                          {(mediaFile.size / (1024 * 1024)).toFixed(1)} MB
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRemoveVideo}
                      className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                      title={t('common.delete', 'حذف')}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {mediaPreviewUrl && (
                    <div className="rounded-2xl overflow-hidden bg-black/90 max-w-xl mx-auto">
                      <video src={mediaPreviewUrl} controls className="w-full max-h-64 object-contain" />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'quiz' && (
            <QuestionBuilder questions={questions} onChange={setQuestions} />
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <input
                ref={documentInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                onChange={handleDocumentChange}
                className="hidden"
              />

              {!documentFile ? (
                <div
                  onClick={() => documentInputRef.current?.click()}
                  className="rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700/80 p-12 text-center flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#00594C]/40 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                    <Upload size={26} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                      {t('teacherHomework.uploadDoc', 'رفع ملف الواجب')}
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold">
                      {t('teacherHomework.maxDocSize', 'ملف واحد فقط (PDF، Word أو صورة) حتى 50 ميغابايت')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#d2ede6] text-[#00594C] flex items-center justify-center">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 dark:text-white">
                        {documentFile.name}
                      </h4>
                      <span className="text-xs text-slate-400 font-semibold">
                        {(documentFile.size / (1024 * 1024)).toFixed(1)} MB
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRemoveDocument}
                    className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                    title={t('common.delete', 'حذف')}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => handlePublishHomework(false)}
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[200px] py-3.5 px-8 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>{t('teacherHomework.publishing', 'جاري نشر الواجب...')}</span>
            </>
          ) : (
            <>
              <FileCheck size={18} />
              <span>{t('teacherHomework.publishNow', 'نشر الواجب')}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
