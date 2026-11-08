import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle,
  CheckCircle2,
  AlertCircle,
  Upload,
  Send,
  Download,
  Star,
  HelpCircle,
  FileText,
  File,
  Play,
  Pause,
  Trash2,
  Paperclip,
  Award,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { studentPortalApi } from '@/shared/services/api/studentPortalApi';
import { showSuccessToast, showErrorToast } from '@/shared/utils/sweetAlert';
import Spinner from '@/shared/components/Spinner';

const FALLBACK_HOMEWORK_DATABASE = {
  '1': {
    id: '1',
    homework: 'واجب أحكام المد والقصر',
    title: 'واجب أحكام المد والقصر',
    titleEn: 'Homework: Rules of Madd and Qasr',
    subject: 'القرآن الكريم',
    subjectEn: 'Holy Quran',
    teacher: 'الشيخ أحمد السيد',
    teacherEn: 'Sheikh Ahmed Al-Sayed',
    group: 'حصة التجويد - سورة البقرة',
    sessionName: 'حصة التجويد - سورة البقرة',
    sessionNameEn: 'Tajweed Session - Surah Al-Baqarah',
    deadline: '2026-04-17T20:00:00.000Z',
    dueDate: '17 أبريل 2026',
    dueDateEn: '17 April 2026',
    canSubmit: true,
    submissionStatus: 'قيد الانتظار',
    evaluationStatus: 'لم يتم التقييم',
    description: 'يرجى مراجعة أحكام المد الطبيعي والفرعي وحل الأسئلة التطبيقية أدناه بعناية، مع الاستماع للتلاوة الصوتية النموذجية المرفقة ورفع ورقة الحل قبل الموعد النهائي.',
    descriptionEn: 'Please review the rules of Madd and solve the questions below carefully, listen to the attached recitation, and upload your solution before deadline.',
    attachments: [
      { id: 'doc-1', name: 'ورقة_عمل_تطبيقات_أحكام_المد.pdf', size: '1.4 MB', type: 'pdf', url: '#' },
      { id: 'doc-2', name: 'ملخص_قواعد_التجويد_الميسرة.docx', size: '420 KB', type: 'docx', url: '#' },
    ],
    audioRecordings: [
      { id: 'aud-1', title: 'تلاوة_نموذجية_لسورة_البقرة_الآيات_1-10.mp3', duration: '02:45', size: '2.8 MB', url: '' },
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple_choice',
        questionText: 'ما حكم النون الساكنة إذا جاء بعدها حرف الياء في قوله تعالى: (فَمَن يَعْمَلْ)؟',
        questionTextEn: 'What is the Tajweed rule for Sakinah Nun followed by Ya in "فَمَن يَعْمَلْ"?',
        options: ['إدغام بغنة', 'إظهار حلقي', 'إقلاب', 'إخفاء حقيقي'],
        optionsEn: ['Idgham with Ghunnah', 'Izhar Halqi', 'Iqlab', 'Ikhfa Haqiqi'],
        points: 5,
      },
      {
        id: 'q2',
        type: 'multiple_choice',
        questionText: 'ما مقدار مد المد اللازم الكلمي المثقل باتفاق القراء؟',
        questionTextEn: 'What is the agreed duration of Madd Lazim Kalimi Muthaqqal?',
        options: ['حركتان (2)', 'أربع حركات (4)', 'ست حركات (6)', 'جواز القصر والتوسط'],
        optionsEn: ['2 Harakah', '4 Harakah', '6 Harakah', '2 or 4 Harakah'],
        points: 5,
      },
      {
        id: 'q3',
        type: 'text',
        questionText: 'وضح الفرق بين المد المتصل والمد المنفصل مع إعطاء مثال لكل منهما من القرآن الكريم.',
        questionTextEn: 'Explain the difference between Madd Muttasil and Madd Munfasil with a Quranic example for each.',
        points: 10,
      },
    ],
  },
  '2': {
    id: '2',
    homework: 'تسميع سورة الرحمن وتجويد النون',
    title: 'تسميع سورة الرحمن وتجويد النون',
    titleEn: 'Recitation: Surah Ar-Rahman and Nun Rules',
    subject: 'القرآن الكريم',
    subjectEn: 'Holy Quran',
    teacher: 'الشيخ أحمد السيد',
    teacherEn: 'Sheikh Ahmed Al-Sayed',
    group: 'حصة التجويد - سورة الرحمن',
    sessionName: 'حصة التجويد - سورة الرحمن',
    sessionNameEn: 'Tajweed Session - Surah Ar-Rahman',
    deadline: '2026-04-15T20:00:00.000Z',
    dueDate: '15 أبريل 2026',
    dueDateEn: '15 April 2026',
    submittedAt: '2026-04-14T18:30:00.000Z',
    submissionDate: '14 أبريل 2026',
    submissionDateEn: '14 April 2026',
    canSubmit: false,
    submissionStatus: 'تم التسليم',
    evaluationStatus: 'تم التقييم',
    grade: 95,
    maxScore: 100,
    teacherNotes: 'ما شاء الله تبارك الله، تلاوة متقنة وتطبيق ممتاز لأحكام التجويد وإتقان لمخارج الحروف. بارك الله فيك واستمر على هذا التميز.',
    description: 'المطلوب تسميع الآيات الكريمة من سورة الرحمن وتطبيق أحكام النون الساكنة والتنوين بدقة وحل الأسئلة.',
    descriptionEn: 'Recite verses from Surah Ar-Rahman and apply rules of Sakinah Nun with high precision.',
    attachments: [
      { id: 'doc-21', name: 'أحكام_النون_الساكنة_والتنوين.pdf', size: '980 KB', type: 'pdf', url: '#' },
    ],
    audioRecordings: [
      { id: 'aud-21', title: 'تلاوة_سورة_الرحمن_المقررة.mp3', duration: '03:15', size: '3.4 MB', url: '' },
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple_choice',
        questionText: 'كم عدد أحكام النون الساكنة والتنوين؟',
        questionTextEn: 'How many rules are there for Sakinah Nun and Tanween?',
        options: ['ثلاثة أحكام', 'أربعة أحكام', 'خمسة أحكام', 'ستة أحكام'],
        optionsEn: ['Three', 'Four', 'Five', 'Six'],
        points: 5,
      },
      {
        id: 'q2',
        type: 'text',
        questionText: 'اذكر حروف الإظهار الحلقي الستة مع كتابة بيت الشعر الجامع لها.',
        questionTextEn: 'List the 6 Izhar Halqi letters with their mnemonics verse.',
        points: 10,
      },
    ],
    answers: [
      { questionId: 'q1', selectedOption: 1, answer: 'أربعة أحكام' },
      { questionId: 'q2', textAnswer: 'حروف الإظهار ستة هي: الهمزة والهاء، والعين والحاء، والغين والخاء. ويجمعها قول: (أخي هاك علماً حازه غير خاسر).', answer: 'حروف الإظهار ستة هي: الهمزة والهاء، والعين والحاء، والغين والخاء.' },
    ],
    textAnswer: 'تمت قراءة الآيات المقررة وتسجيل التلاوة وحل أسئلة أحكام النون الساكنة بالكامل.',
    submittedFile: {
      name: 'حل_واجب_سورة_الرحمن_تجويد.pdf',
      size: '820 KB',
      url: '#',
    },
  },
  '4': {
    id: '4',
    homework: 'واجب النحو والإعراب - الجملة الاسمية',
    title: 'واجب النحو والإعراب - الجملة الاسمية',
    titleEn: 'Grammar: The Nominal Sentence',
    subject: 'اللغة العربية',
    subjectEn: 'Arabic Language',
    teacher: 'الأستاذ محمود علي',
    teacherEn: 'Mr. Mahmoud Ali',
    group: 'حصة النحو والصرف',
    sessionName: 'حصة النحو والصرف',
    sessionNameEn: 'Grammar and Morphology Session',
    deadline: '2026-04-13T20:00:00.000Z',
    dueDate: '13 أبريل 2026',
    dueDateEn: '13 April 2026',
    submittedAt: '2026-04-16T12:00:00.000Z',
    submissionDate: '16 أبريل 2026',
    submissionDateEn: '16 April 2026',
    canSubmit: false,
    submissionStatus: 'متسلم متأخر',
    evaluationStatus: 'لم يتم التقييم',
    isSubmittedLate: true,
    description: 'إعراب الجمل المحددة وتحديد المبتدأ والخبر وأنواعهما مع أمثلة من القرآن الكريم.',
    descriptionEn: 'Parse the given nominal sentences and identify the subject and predicate types.',
    attachments: [
      { id: 'doc-41', name: 'تمارين_الجملة_الاسمية_والمبتدأ.pdf', size: '1.1 MB', type: 'pdf', url: '#' },
    ],
    questions: [
      {
        id: 'q1',
        type: 'multiple_choice',
        questionText: 'ما علامة رفع المبتدأ إذا كان جمع مذكر سالماً؟',
        questionTextEn: 'What is the nominative sign for plural masculine sound noun?',
        options: ['الضمة الظاهرة', 'الواو', 'الألف', 'ثبوت النون'],
        optionsEn: ['Dammah', 'Waw', 'Alif', 'Nun affirmation'],
        points: 5,
      },
    ],
    answers: [
      { questionId: 'q1', selectedOption: 1, answer: 'الواو' },
    ],
    textAnswer: 'أعتذر عن التسليم المتأخر لظروف خاصة، وتم حل جميع التدريبات المطلوبة وإرفاق ملف الحل.',
    submittedFile: {
      name: 'حل_تمارين_النحو_المتأخر.pdf',
      size: '650 KB',
      url: '#',
    },
  },
  '5': {
    id: '5',
    homework: 'حفظ ومراجعة سورة يس',
    title: 'حفظ ومراجعة سورة يس',
    titleEn: 'Memorization and Review: Surah Yasin',
    subject: 'القرآن الكريم',
    subjectEn: 'Holy Quran',
    teacher: 'الشيخ أحمد السيد',
    teacherEn: 'Sheikh Ahmed Al-Sayed',
    group: 'حصة التجويد - سورة يس',
    sessionName: 'حصة التجويد - سورة يس',
    sessionNameEn: 'Tajweed Session - Surah Yasin',
    deadline: '2026-04-10T20:00:00.000Z',
    dueDate: '10 أبريل 2026',
    dueDateEn: '10 April 2026',
    canSubmit: true,
    submissionStatus: 'متأخر',
    lateTextAr: 'متأخر 5 أيام',
    lateTextEn: '5 days overdue',
    evaluationStatus: 'لم يتم التقييم',
    description: 'يرجى مراجعة وتسميع الربع الأول من سورة يس مع إتقان مخارج الحروف، وتسليم الحل بأسرع وقت لتجنب خصم درجات التأخير.',
    descriptionEn: 'Review the first quarter of Surah Yasin with proper pronunciation and submit as soon as possible.',
    attachments: [
      { id: 'doc-51', name: 'جدول_مراجعة_سورة_يس.pdf', size: '890 KB', type: 'pdf', url: '#' },
    ],
    questions: [
      {
        id: 'q1',
        type: 'text',
        questionText: 'اكتب الآيات الكريمة من أول سورة يس حتى قوله تعالى: (فَهُمْ لَا يُبْصِرُونَ) مع الضبط بالشكل.',
        questionTextEn: 'Write the first verses of Surah Yasin up to verse 9.',
        points: 10,
      },
    ],
  },
};

function formatAssignmentDate(dateStr, isRtl) {
  if (!dateStr) return isRtl ? '17 أبريل 2026' : '17 April 2026';
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return new Intl.DateTimeFormat(isRtl ? 'ar-EG-u-ca-gregory' : 'en-GB-u-ca-gregory', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(d);
    }
  } catch {
    return dateStr;
  }
  return dateStr;
}

function resolveHomeworkDetails(rawItem, fallbackId, isRtl) {
  const fallback = FALLBACK_HOMEWORK_DATABASE[String(fallbackId)] || FALLBACK_HOMEWORK_DATABASE['1'];
  if (!rawItem || typeof rawItem !== 'object') {
    return fallback;
  }
  const itemData = rawItem.data && typeof rawItem.data === 'object' ? rawItem.data : rawItem;
  const homeworkTitle = itemData.homework || itemData.title || itemData.titleAr || fallback.homework || fallback.title;
  const homeworkTitleEn = itemData.titleEn || itemData.homework || itemData.title || fallback.titleEn;
  const groupName = typeof itemData.group === 'object' ? itemData.group?.name : (itemData.group || fallback.group || fallback.sessionName);
  const teacherName = typeof itemData.teacher === 'object' ? itemData.teacher?.name : (itemData.teacher || itemData.teacherName || fallback.teacher);
  const rawStatus = (itemData.submissionStatus || itemData.status || itemData.submission?.status || fallback.submissionStatus || 'pending').toString().toLowerCase();
  const isLateSubmitted = rawStatus === 'submitted_late' || (rawStatus.includes('متأخر') && (rawStatus.includes('تسليم') || rawStatus.includes('مسلم') || rawStatus.includes('submitted'))) || Boolean(itemData.isLate) || Boolean(itemData.submittedLate);
  const isCompleted = Boolean(itemData.submittedAt) || rawStatus === 'submitted' || rawStatus === 'completed' || rawStatus.includes('مكتمل') || rawStatus.includes('تم التسليم') || isLateSubmitted;
  const isOverdue = !isCompleted && (rawStatus === 'overdue' || rawStatus.includes('متأخر'));
  const rawEval = (itemData.evaluationStatus || itemData.submission?.evaluationStatus || fallback.evaluationStatus || '').toString().toLowerCase();
  const isEvaluated = rawEval === 'evaluated' || rawEval.includes('تم التقييم') || rawEval.includes('مقيم') || (itemData.grade !== null && itemData.grade !== undefined && itemData.grade !== '');
  const canStudentSubmit = typeof itemData.canSubmit === 'boolean' ? itemData.canSubmit : (!isCompleted && !itemData.submittedAt);
  const isRealApiData = Boolean(rawItem.data || (itemData.id && String(itemData.id).length > 10) || itemData.homeworkId);
  const docsList = [];
  if (Array.isArray(itemData.attachments) && itemData.attachments.length > 0) {
    itemData.attachments.forEach((att, idx) => {
      if (typeof att === 'string') {
        const fileName = att.split('/').pop() || `مرفق_${idx + 1}`;
        docsList.push({ id: `att-${idx}`, name: fileName, url: att, size: 'ملف مرفق', type: fileName.endsWith('.pdf') ? 'pdf' : 'doc' });
      } else if (att && typeof att === 'object') {
        docsList.push({ id: att.id || att._id || `att-${idx}`, name: att.name || att.fileName || `مرفق_${idx + 1}`, url: att.url || att.fileUrl || '#', size: att.size || 'ملف مرفق', type: att.type || 'file' });
      }
    });
  }
  if (Array.isArray(itemData.documents) && itemData.documents.length > 0) {
    docsList.push(...itemData.documents);
  }
  if (itemData.document) {
    if (typeof itemData.document === 'string') {
      const fileName = itemData.document.split('/').pop() || 'مستند_الواجب.pdf';
      docsList.push({ id: 'main-doc', name: fileName, url: itemData.document, size: 'ملف الواجب', type: fileName.endsWith('.pdf') ? 'pdf' : 'doc' });
    } else if (typeof itemData.document === 'object') {
      docsList.push({ id: 'main-doc', name: itemData.document.name || 'مستند_الواجب.pdf', url: itemData.document.url || '#', size: itemData.document.size || 'ملف الواجب', type: 'doc' });
    }
  }
  if (itemData.fileUrl && !docsList.some((d) => d.url === itemData.fileUrl)) {
    docsList.push({ id: 'file-url-doc', name: 'ملف_الواجب_المرفق.pdf', url: itemData.fileUrl, size: '1.2 MB', type: 'pdf' });
  }
  if (!isRealApiData && docsList.length === 0 && fallback.attachments) {
    docsList.push(...fallback.attachments);
  }
  const audiosList = [];
  if (Array.isArray(itemData.audioRecordings) && itemData.audioRecordings.length > 0) {
    audiosList.push(...itemData.audioRecordings);
  }
  if (itemData.media) {
    if (typeof itemData.media === 'string') {
      const isAudio = itemData.media.endsWith('.mp3') || itemData.media.endsWith('.wav') || itemData.media.endsWith('.m4a') || itemData.media.includes('audio');
      if (isAudio) {
        audiosList.push({ id: 'main-audio', title: 'تسجيل_صوتي_مرفق.mp3', url: itemData.media, duration: '', size: 'تسجيل صوتي' });
      } else {
        docsList.push({ id: 'main-media', name: 'ملف_وسائط_مرفق', url: itemData.media, size: 'فيديو / وسائط', type: 'media' });
      }
    } else if (typeof itemData.media === 'object') {
      audiosList.push({ id: 'main-audio', title: itemData.media.title || 'تسجيل_صوتي_مرفق.mp3', url: itemData.media.url || '', duration: itemData.media.duration || '', size: itemData.media.size || 'تسجيل صوتي' });
    }
  }
  if (!isRealApiData && audiosList.length === 0 && fallback.audioRecordings) {
    audiosList.push(...fallback.audioRecordings);
  }
  const questionsList = isRealApiData
    ? (Array.isArray(itemData.questions) ? itemData.questions : [])
    : (Array.isArray(itemData.questions) && itemData.questions.length > 0 ? itemData.questions : fallback.questions);
  const initialAnswersMap = {};
  if (Array.isArray(itemData.answers) && itemData.answers.length > 0) {
    itemData.answers.forEach((ans) => {
      if (ans && typeof ans === 'object') {
        const qId = ans.questionId || ans.id || ans.question;
        const val = ans.selectedOption !== undefined ? ans.selectedOption : (ans.textAnswer !== undefined ? ans.textAnswer : ans.answer);
        if (qId) {
          initialAnswersMap[qId] = val;
        }
      }
    });
  } else if (fallback.answers) {
    fallback.answers.forEach((ans) => {
      if (ans?.questionId) {
        initialAnswersMap[ans.questionId] = ans.selectedOption !== undefined ? ans.selectedOption : ans.textAnswer;
      }
    });
  }
  const studentTextAnswer = itemData.textAnswer || fallback.textAnswer || itemData.submission?.studentNotes || '';
  const dueFormatted = formatAssignmentDate(itemData.deadline || itemData.dueDate || fallback.deadline || fallback.dueDate, isRtl);
  const submittedFormatted = formatAssignmentDate(itemData.submittedAt || itemData.submissionDate || fallback.submittedAt || fallback.submissionDate, isRtl);
  return {
    id: itemData.id || itemData._id || fallbackId,
    homeworkId: itemData.homeworkId || fallbackId,
    title: isRtl ? homeworkTitle : homeworkTitleEn,
    subject: isRtl ? (itemData.subject || itemData.group?.subject || fallback.subject) : (itemData.subjectEn || fallback.subjectEn),
    teacher: teacherName,
    group: groupName,
    sessionName: groupName,
    dueDate: dueFormatted,
    submissionDate: submittedFormatted,
    deadlineRaw: itemData.deadline || fallback.deadline,
    submittedAtRaw: itemData.submittedAt || fallback.submittedAt,
    lateTextAr: itemData.lateTextAr || fallback.lateTextAr || 'متأخر 5 أيام',
    lateTextEn: itemData.lateTextEn || fallback.lateTextEn || '5 days overdue',
    status: isCompleted ? (isLateSubmitted ? 'submitted_late' : 'completed') : (isOverdue ? 'overdue' : 'pending'),
    submissionStatus: itemData.submissionStatus || fallback.submissionStatus,
    isCompleted,
    isSubmittedLate: isLateSubmitted,
    isOverdue,
    isEvaluated,
    evaluationStatus: isEvaluated ? 'evaluated' : 'not_evaluated',
    canSubmit: canStudentSubmit,
    grade: itemData.grade ?? fallback.grade ?? null,
    maxScore: itemData.maxScore || fallback.maxScore || 100,
    teacherNotes: itemData.teacherNotes || itemData.feedback || fallback.teacherNotes || null,
    description: isRtl ? (itemData.description || fallback.description) : (itemData.descriptionEn || itemData.description || fallback.descriptionEn),
    documents: docsList,
    audioRecordings: audiosList,
    questions: questionsList,
    initialAnswers: initialAnswersMap,
    initialTextAnswer: studentTextAnswer,
    submittedFile: itemData.submittedFile || fallback.submittedFile || null,
  };
}

export default function StudentAssignmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [homework, setHomework] = useState(() => resolveHomeworkDetails(location.state?.homework, id, isRtl));
  const [selectedAnswers, setSelectedAnswers] = useState(() => homework?.initialAnswers || {});
  const [submissionNotes, setSubmissionNotes] = useState(() => homework?.initialTextAnswer || '');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  useEffect(() => {
    let isMounted = true;
    async function fetchAssignmentData() {
      setIsLoading(true);
      try {
        if (id && typeof id === 'string' && id.length > 10) {
          const res = await studentPortalApi.fetchHomeworkById(id);
          if (!isMounted) return;
          const parsed = resolveHomeworkDetails(res, id, isRtl);
          setHomework(parsed);
          if (parsed.initialAnswers && Object.keys(parsed.initialAnswers).length > 0) {
            setSelectedAnswers(parsed.initialAnswers);
          }
          if (parsed.initialTextAnswer) {
            setSubmissionNotes(parsed.initialTextAnswer);
          }
        } else {
          const parsed = resolveHomeworkDetails(location.state?.homework, id, isRtl);
          setHomework(parsed);
          if (parsed.initialAnswers && Object.keys(parsed.initialAnswers).length > 0) {
            setSelectedAnswers(parsed.initialAnswers);
          }
          if (parsed.initialTextAnswer) {
            setSubmissionNotes(parsed.initialTextAnswer);
          }
        }
      } catch {
        if (!isMounted) return;
        const parsed = resolveHomeworkDetails(location.state?.homework, id, isRtl);
        setHomework(parsed);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    fetchAssignmentData();
    return () => {
      isMounted = false;
    };
  }, [id, isRtl, location.state]);
  const isCompleted = Boolean(homework.isCompleted);
  const isLateSubmitted = Boolean(homework.isSubmittedLate);
  const isOverdue = Boolean(homework.isOverdue);
  const isEvaluated = Boolean(homework.isEvaluated);
  const canSubmit = Boolean(homework.canSubmit);
  const statusBadge = useMemo(() => {
    if (isCompleted) {
      if (isLateSubmitted) {
        return {
          label: t('studentDashboard.assignments.submittedLate', 'متسلم متأخر'),
          badgeClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
        };
      }
      return {
        label: t('studentDashboard.assignments.completed', 'مكتملة'),
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
      };
    }
    if (isOverdue) {
      return {
        label: t('studentDashboard.assignments.overdue', 'متأخر'),
        badgeClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
      };
    }
    return {
      label: t('studentDashboard.assignments.inProgress', 'قيد التنفيذ'),
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    };
  }, [isCompleted, isLateSubmitted, isOverdue, t]);
  const totalPoints = useMemo(() => {
    if (!Array.isArray(homework.questions)) return 0;
    return homework.questions.reduce((sum, q) => sum + (Number(q.points) || 5), 0);
  }, [homework.questions]);
  function handleBack() {
    navigate('/dashboard/student/assignments');
  }
  function handleOptionSelect(questionId, optionIndex) {
    if (isCompleted || !canSubmit) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  }
  function handleTextAnswerChange(questionId, textValue) {
    if (isCompleted || !canSubmit) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: textValue,
    }));
  }
  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 25 * 1024 * 1024) {
      showErrorToast(t('studentDashboard.assignments.maxFileSize', 'الحد الأقصى لحجم الملف 25 ميجابايت'));
      return;
    }
    setSelectedFile(file);
  }
  function handleRemoveFile() {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }
  function togglePlayAudio(audioId) {
    if (playingAudioId === audioId) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(audioId);
    }
  }
  async function handleSubmitSolution(event) {
    event.preventDefault();
    if (!canSubmit) {
      showErrorToast(t('studentDashboard.assignments.submissionClosed', 'انتهى الموعد النهائي لتسليم هذا الواجب ولم يعد متاحاً للتسليم'));
      return;
    }
    const hasAnyAnswer = Object.values(selectedAnswers).some((ans) => ans !== undefined && ans !== null && String(ans).trim() !== '');
    const hasNotes = Boolean(submissionNotes.trim());
    const hasFile = Boolean(selectedFile);
    if (!hasAnyAnswer && !hasNotes && !hasFile) {
      showErrorToast(t('studentDashboard.assignments.validationError', 'يرجى الإجابة على الأسئلة أو كتابة الحل أو إرفاق ملف للواجب'));
      return;
    }
    setIsSubmitting(true);
    try {
      const formattedAnswers = Object.entries(selectedAnswers).map(([qId, value]) => {
        const targetQ = (homework.questions || []).find((q) => String(q.id) === String(qId));
        if (targetQ && targetQ.type === 'multiple_choice') {
          const optText = Array.isArray(targetQ.options) ? targetQ.options[Number(value)] : '';
          return {
            questionId: qId,
            selectedOption: Number(value),
            answer: optText || String(value),
          };
        }
        return {
          questionId: qId,
          textAnswer: String(value),
          answer: String(value),
        };
      });
      const formData = new FormData();
      if (submissionNotes.trim()) {
        formData.append('textAnswer', submissionNotes.trim());
        formData.append('text', submissionNotes.trim());
        formData.append('notes', submissionNotes.trim());
      }
      if (selectedFile) {
        formData.append('file', selectedFile);
        formData.append('attachment', selectedFile);
        formData.append('document', selectedFile);
      }
      if (formattedAnswers.length > 0) {
        formData.append('answers', JSON.stringify(formattedAnswers));
      }
      const submitId = homework.id || id;
      if (submitId && typeof submitId === 'string' && submitId.length > 10) {
        await studentPortalApi.submitHomework(submitId, formData);
      }
      showSuccessToast(t('studentDashboard.assignments.submittedSuccessfully', 'تم تسليم الواجب بنجاح!'));
      setHomework((prev) => ({
        ...prev,
        isCompleted: true,
        canSubmit: false,
        status: isOverdue ? 'submitted_late' : 'completed',
        submissionStatus: isOverdue ? 'متسلم متأخر' : 'تم التسليم',
        isSubmittedLate: isOverdue,
        evaluationStatus: 'not_evaluated',
        isEvaluated: false,
        submissionDate: isRtl ? 'اليوم' : 'Today',
        initialTextAnswer: submissionNotes.trim(),
        submittedFile: selectedFile ? {
          name: selectedFile.name,
          size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
          url: URL.createObjectURL(selectedFile),
        } : (isRtl ? { name: 'حل_الواجب_المسلم.pdf', size: '1.0 MB', url: '#' } : { name: 'submitted_solution.pdf', size: '1.0 MB', url: '#' }),
      }));
    } catch (error) {
      const message = error.response?.data?.message || error.message || t('studentDashboard.assignments.submitFailed', 'فشل تسليم الواجب، يرجى المحاولة مرة أخرى');
      showErrorToast(Array.isArray(message) ? message.join(' - ') : message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen bg-[#EEF4F2] dark:bg-slate-950 p-4 sm:p-6 lg:p-8 font-sans transition-colors" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-[#00594C] dark:text-emerald-400 hover:text-[#004742] dark:hover:text-emerald-300 font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl shadow-xs border border-slate-100 dark:border-slate-800 transition cursor-pointer"
          >
            <BackIcon size={16} />
            <span>{t('studentDashboard.assignments.backToAssignments', 'العودة للواجبات')}</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              {t('studentDashboard.assignments.assignmentDetails', 'تفاصيل الواجب')}
            </span>
          </div>
        </div>
        {isLoading ? (
          <div className="min-h-[40vh] flex flex-col items-center justify-center space-y-4">
            <Spinner size="lg" />
            <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              {t('teacherHomework.loadingSubmissionDetails', 'جاري جلب تفاصيل الواجب...')}
            </p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="bg-[#E3EFFC] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full">
                      {homework.subject || 'القرآن الكريم'}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${statusBadge.badgeClass}`}>
                      {statusBadge.label}
                    </span>
                    {isCompleted && (
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                          isEvaluated
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <CheckCircle size={13} className={isEvaluated ? 'text-emerald-600' : 'text-slate-400'} />
                        <span>
                          {isEvaluated
                            ? t('studentDashboard.assignments.evaluated', 'تم التقييم')
                            : t('studentDashboard.assignments.notEvaluated', 'لم يتم التقييم')}
                        </span>
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                    {homework.title}
                  </h1>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                      <span>{t('studentDashboard.assignments.teacher', 'المعلم')}: <strong className="text-slate-800 dark:text-slate-200">{homework.teacher}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                      <span>{t('studentDashboard.assignments.group', 'المجموعة')}: <strong className="text-slate-800 dark:text-slate-200">{homework.group}</strong></span>
                    </div>
                  </div>
                </div>
                {isCompleted && isEvaluated && homework.grade !== null && (
                  <div className="flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 px-6 py-4 rounded-3xl border border-emerald-200/80 dark:border-emerald-800/50 shrink-0">
                    <div className="flex items-center gap-1.5 mb-1 text-emerald-700 dark:text-emerald-300">
                      <Star size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-xs font-bold">{t('studentDashboard.assignments.grade', 'الدرجة')}</span>
                    </div>
                    <div className="text-3xl font-black text-emerald-700 dark:text-emerald-300 flex items-baseline">
                      <span>{homework.grade}</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium ms-1">/ {homework.maxScore}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <Calendar size={18} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">
                      {t('studentDashboard.assignments.deadline', 'الموعد النهائي للتسليم')}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {homework.dueDate}
                    </span>
                  </div>
                </div>
                {isCompleted ? (
                  <div className="flex items-center gap-3 bg-emerald-50/60 dark:bg-emerald-950/30 p-3.5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
                    <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">
                        {t('studentDashboard.assignments.submittedAt', 'تاريخ التسليم')}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        {homework.submissionDate}
                      </span>
                    </div>
                  </div>
                ) : isOverdue ? (
                  <div className="flex items-center gap-3 bg-rose-50/80 dark:bg-rose-950/30 p-3.5 rounded-2xl border border-rose-100 dark:border-rose-900/40">
                    <Clock size={18} className="text-rose-500 shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-rose-500 block">
                        {t('studentDashboard.assignments.status', 'الحالة')}
                      </span>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                        {isRtl ? homework.lateTextAr : homework.lateTextEn}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 bg-amber-50/60 dark:bg-amber-950/30 p-3.5 rounded-2xl border border-amber-100 dark:border-amber-900/40">
                    <Clock size={18} className="text-amber-500 shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-amber-500 block">
                        {t('studentDashboard.assignments.status', 'الحالة')}
                      </span>
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                        {t('studentDashboard.assignments.inProgress', 'قيد التنفيذ')}
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <Award size={18} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block">
                      {t('studentDashboard.assignments.questions', 'الأسئلة والدرجات')}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {homework.questions && homework.questions.length > 0
                        ? `${homework.questions.length} ${t('studentDashboard.assignments.questions', 'أسئلة')} • ${totalPoints} ${t('studentDashboard.assignments.pointsCount', 'درجات')}`
                        : (isRtl ? 'تسليم حل كتابي أو ملف' : 'Written answer or file')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            {homework.description && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-3 text-start"
              >
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[#00594C] dark:text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {t('studentDashboard.assignments.description', 'وصف الواجب والتعليمات')}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {homework.description}
                </p>
              </motion.div>
            )}
            {((Array.isArray(homework.documents) && homework.documents.length > 0) ||
              (Array.isArray(homework.audioRecordings) && homework.audioRecordings.length > 0)) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 dark:border-slate-800 space-y-4 text-start"
              >
                <div className="flex items-center gap-2">
                  <Paperclip size={18} className="text-[#00594C] dark:text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {t('studentDashboard.assignments.attachedFiles', 'ملفات ومرفقات الواجب')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {homework.documents?.map((doc) => {
                    const isPdf = doc.name?.endsWith('.pdf') || doc.type === 'pdf';
                    return (
                      <div
                        key={doc.id}
                        className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100/70 dark:hover:bg-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-100 dark:border-slate-700/60 transition"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              isPdf
                                ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                                : 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
                            }`}
                          >
                            <FileText size={20} />
                          </div>
                          <div className="min-w-0 text-start">
                            <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                              {doc.name}
                            </h5>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold">
                              {doc.size || '1.2 MB'}
                            </p>
                          </div>
                        </div>
                        <a
                          href={doc.url && doc.url !== '#' ? doc.url : undefined}
                          download={doc.name}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-xs font-bold text-[#00594C] dark:text-emerald-400 border border-slate-200 dark:border-slate-600 transition shrink-0 cursor-pointer shadow-xs"
                        >
                          <Download size={14} />
                          <span>{t('studentDashboard.assignments.downloadFile', 'تحميل')}</span>
                        </a>
                      </div>
                    );
                  })}
                  {homework.audioRecordings?.map((audio) => {
                    const isPlaying = playingAudioId === audio.id;
                    return (
                      <div
                        key={audio.id}
                        className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 flex items-center justify-between gap-3 border border-slate-100 dark:border-slate-700/60"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <button
                            type="button"
                            onClick={() => togglePlayAudio(audio.id)}
                            className="w-10 h-10 rounded-full bg-[#d2ede6] hover:bg-[#bce4da] text-[#00594C] flex items-center justify-center transition shrink-0 cursor-pointer shadow-xs"
                          >
                            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ms-0.5" />}
                          </button>
                          <div className="min-w-0 text-start">
                            <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                              {audio.title}
                            </h5>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold">
                              {audio.duration ? `${audio.duration} • ` : ''}{audio.size || '2.5 MB'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-[#00594C] dark:text-emerald-400 bg-white dark:bg-slate-700 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-600 shrink-0">
                          <Sparkles size={13} />
                          <span>{isPlaying ? (isRtl ? 'قيد التشغيل' : 'Playing') : (isRtl ? 'تسجيل صوتي' : 'Audio')}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
            {Array.isArray(homework.questions) && homework.questions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.15 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle size={20} className="text-[#00594C] dark:text-emerald-400" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {t('studentDashboard.assignments.questions', 'أسئلة الواجب')}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {homework.questions.length} {t('studentDashboard.assignments.questions', 'أسئلة')}
                  </span>
                </div>
                <div className="space-y-5">
                  {homework.questions.map((q, qIndex) => {
                    const qPoints = Number(q.points) || 5;
                    const isMcq = q.type === 'multiple_choice';
                    const studentAns = selectedAnswers[q.id];
                    const optionsList = isRtl ? (q.options || []) : (q.optionsEn || q.options || []);
                    return (
                      <div
                        key={q.id || qIndex}
                        className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 space-y-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <span className="w-7 h-7 rounded-full bg-[#00594C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                              {qIndex + 1}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                              {isRtl ? q.questionText : (q.questionTextEn || q.questionText)}
                            </h4>
                          </div>
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shrink-0">
                            {qPoints} {t('studentDashboard.assignments.pointsCount', 'درجات')}
                          </span>
                        </div>
                        {isMcq && Array.isArray(optionsList) && optionsList.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                            {optionsList.map((opt, optIndex) => {
                              const isSelected = studentAns === optIndex;
                              const isSubmittedChoice = isCompleted && studentAns === optIndex;
                              return (
                                <button
                                  type="button"
                                  key={optIndex}
                                  disabled={isCompleted || !canSubmit}
                                  onClick={() => handleOptionSelect(q.id, optIndex)}
                                  className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-3 transition text-start ${
                                    isCompleted
                                      ? isSubmittedChoice
                                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200'
                                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 opacity-70'
                                      : !canSubmit
                                      ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 opacity-60 cursor-not-allowed'
                                      : isSelected
                                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-[#00594C] text-[#00594C] dark:text-emerald-300 ring-1 ring-[#00594C]'
                                      : 'bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer'
                                  }`}
                                >
                                  <span
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-[11px] font-bold ${
                                      isSelected || isSubmittedChoice
                                        ? 'border-[#00594C] bg-[#00594C] text-white'
                                        : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-400'
                                    }`}
                                  >
                                    {isSelected || isSubmittedChoice ? '✓' : ''}
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                        {!isMcq && (
                          <div className="pt-1">
                            {isCompleted ? (
                              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block mb-1">
                                  {t('studentDashboard.assignments.yourAnswer', 'إجابتك المسلمة')}:
                                </span>
                                {studentAns || (isRtl ? 'تمت الإجابة في ملف الحل المرفق.' : 'Answered in the attached file.')}
                              </div>
                            ) : (
                              <textarea
                                rows={3}
                                disabled={!canSubmit}
                                value={studentAns || ''}
                                onChange={(e) => handleTextAnswerChange(q.id, e.target.value)}
                                placeholder={t('studentDashboard.assignments.typeYourAnswer', 'اكتب إجابتك هنا بالتفصيل...')}
                                className="w-full p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00594C] dark:focus:border-emerald-500 transition resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
            {isCompleted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                className="space-y-5"
              >
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-5 text-start">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        {t('studentDashboard.assignments.submittedBannerTitle', 'تم تسليم هذا الواجب')}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {t('studentDashboard.assignments.submittedBannerDesc', 'تم إرسال حلك بنجاح وهو الآن بانتظار مراجعة وتقييم المعلم')}
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 space-y-4">
                    {submissionNotes && (
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 block mb-1">
                          {t('studentDashboard.assignments.submissionNotes', 'ملاحظات الطالب')}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {submissionNotes}
                        </p>
                      </div>
                    )}
                    {homework.submittedFile?.name && (
                      <div className="flex items-center justify-between gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText size={18} className="text-[#00594C] dark:text-emerald-400 shrink-0" />
                          <div className="min-w-0 text-start">
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                              {homework.submittedFile.name}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {homework.submittedFile.size || '1.0 MB'}
                            </span>
                          </div>
                        </div>
                        {homework.submittedFile.url && (
                          <a
                            href={homework.submittedFile.url}
                            download={homework.submittedFile.name}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 text-xs font-bold text-[#00594C] dark:text-emerald-400 transition"
                          >
                            <Download size={13} />
                            <span>{t('studentDashboard.assignments.downloadFile', 'تحميل')}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {isEvaluated && homework.teacherNotes && (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-emerald-200/80 dark:border-emerald-800/50 space-y-4 text-start">
                    <div className="flex items-center gap-2">
                      <Star size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        {t('studentDashboard.assignments.teacherEvaluation', 'تقييم وملاحظات المعلم')}
                      </h3>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/30 dark:to-teal-950/30 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800/40">
                      <p className="text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200 leading-relaxed">
                        &quot;{homework.teacherNotes}&quot;
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
                        <span>{homework.teacher}</span>
                        <span>{homework.grade} / {homework.maxScore}</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : !canSubmit ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-rose-100 dark:border-rose-900/40 space-y-4 text-start"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 flex items-center justify-center shrink-0">
                    <AlertCircle size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {t('studentDashboard.assignments.submissionClosedBtn', 'التسليم مغلق')}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {t('studentDashboard.assignments.submissionClosed', 'انتهى الموعد النهائي لتسليم هذا الواجب ولم يعد متاحاً للتسليم. يمكنك مراجعة الأسئلة والملفات التعليمية أعلاه.')}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800 space-y-6 text-start"
              >
                <div className="flex items-center gap-2.5">
                  <Upload size={20} className="text-[#00594C] dark:text-emerald-400" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {t('studentDashboard.assignments.studentSubmission', 'حل الواجب والتسليم')}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      {t('studentDashboard.assignments.typeAnswer', 'يمكنك كتابة الحل وإرفاق ملف الواجب قبل التسليم')}
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmitSolution} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      {t('studentDashboard.assignments.submissionNotes', 'ملاحظات أو حل كتابي')}
                    </label>
                    <textarea
                      rows={4}
                      value={submissionNotes}
                      onChange={(e) => setSubmissionNotes(e.target.value)}
                      placeholder={t('studentDashboard.assignments.submissionNotesPlaceholder', 'أضف أي ملاحظات أو حل كتابي للمعلم هنا...')}
                      className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00594C] dark:focus:border-emerald-500 transition resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      {t('studentDashboard.assignments.uploadSolutionFile', 'رفع ملف الحل (PDF، مستند، صورة)')}
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.mp3,.zip"
                      className="hidden"
                    />
                    {selectedFile ? (
                      <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-[#00594C] dark:text-emerald-300 flex items-center justify-center shrink-0">
                            <File size={20} />
                          </div>
                          <div className="min-w-0 text-start">
                            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 block truncate">
                              {selectedFile.name}
                            </span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-2 rounded-xl text-rose-500 hover:bg-rose-100/60 dark:hover:bg-rose-950/40 transition cursor-pointer"
                          title={t('studentDashboard.assignments.removeFile', 'حذف الملف')}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#00594C] dark:hover:border-emerald-500 p-6 sm:p-8 text-center space-y-2 bg-slate-50/40 dark:bg-slate-800/30 transition cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-[#00594C] dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xs border border-slate-100 dark:border-slate-700">
                          <Upload size={22} />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                          {t('studentDashboard.assignments.dragAndDrop', 'انقر لاختيار ملف الحل أو اسحبه وأفلته هنا')}
                        </div>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                          {t('studentDashboard.assignments.maxFileSize', 'الحد الأقصى لحجم الملف 25 ميجابايت (PDF, DOCX, JPG, PNG, MP3)')}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-[#00594C] hover:bg-[#004742] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner size="sm" />
                          <span>{t('studentDashboard.assignments.submitting', 'جاري التسليم...')}</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} className={isRtl ? 'rotate-180' : ''} />
                          <span>{t('studentDashboard.assignments.submitNow', 'تسليم الواجب الآن')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
