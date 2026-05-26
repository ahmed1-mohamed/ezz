import { motion } from 'framer-motion';
import { Library, FileText, Video, Link2, Download, User, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const materials = [
  { id: 1, type: 'pdf', titleAr: 'ملزمة أحكام التجويد الكاملة', titleEn: 'Complete Tajweed Rules Booklet', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', date: '12 أبريل 2026', size: '2.4 MB', url: '#' },
  { id: 2, type: 'video', titleAr: 'فيديو أحكام التجويد الكاملة', titleEn: 'Complete Tajweed Rules Video', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', date: '12 أبريل 2026', size: '145 MB', url: '#' },
  { id: 3, type: 'link', titleAr: 'رابط أحكام التجويد الكاملة', titleEn: 'Complete Tajweed Rules Link', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', date: '12 أبريل 2026', size: '—', url: 'https://example.com' },
  { id: 4, type: 'pdf', titleAr: 'ملزمة النحو والصرف', titleEn: 'Grammar & Morphology Booklet', subject: 'اللغة العربية', subjectEn: 'Arabic Language', teacher: 'الدكتور محمد الأمين', teacherEn: 'Dr. Mohammed Al-Amin', date: '10 أبريل 2026', size: '1.8 MB', url: '#' },
  { id: 5, type: 'video', titleAr: 'شرح البلاغة العربية', titleEn: 'Arabic Rhetoric Explanation', subject: 'اللغة العربية', subjectEn: 'Arabic Language', teacher: 'الدكتور محمد الأمين', teacherEn: 'Dr. Mohammed Al-Amin', date: '8 أبريل 2026', size: '98 MB', url: '#' },
  { id: 6, type: 'link', titleAr: 'رابط مصحف التجويد الملوّن', titleEn: 'Colored Tajweed Quran Link', subject: 'القرآن الكريم', subjectEn: 'Holy Quran', teacher: 'الشيخ أحمد السيد', teacherEn: 'Sheikh Ahmed Al-Sayed', date: '5 أبريل 2026', size: '—', url: 'https://example.com' },
];

const TYPE_CONFIG = {
  pdf: { icon: FileText, iconCls: 'text-red-500', bgCls: 'bg-red-50 dark:bg-red-900/20', labelAr: 'ملف PDF', labelEn: 'PDF File' },
  video: { icon: Video, iconCls: 'text-blue-500', bgCls: 'bg-blue-50 dark:bg-blue-900/20', labelAr: 'فيديو تعليمي', labelEn: 'Video' },
  link: { icon: Link2, iconCls: 'text-emerald-600', bgCls: 'bg-emerald-50 dark:bg-emerald-900/20', labelAr: 'رابط مفيد', labelEn: 'Useful Link' },
};

const pdfCount = materials.filter((m) => m.type === 'pdf').length;
const videoCount = materials.filter((m) => m.type === 'video').length;
const linkCount = materials.filter((m) => m.type === 'link').length;

function MaterialRow({ material, isRtl, index }) {
  const { t } = useTranslation();
  const cfg = TYPE_CONFIG[material.type];
  const Icon = cfg.icon;

  const handleDownload = () => {
    if (material.type === 'link') {
      window.open(material.url, '_blank', 'noopener,noreferrer');
    } else {
      const a = document.createElement('a');
      a.href = material.url;
      a.download = isRtl ? material.titleAr : material.titleEn;
      a.click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="flex items-center gap-4 px-5 py-4"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cfg.bgCls}`}>
        <Icon size={18} className={cfg.iconCls} />
      </div>

      <div className="flex-1 min-w-0 text-end">
        <div className="flex items-center justify-end gap-2 mb-1">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
            {isRtl ? material.titleAr : material.titleEn}
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2 text-[10px] text-slate-500 dark:text-slate-400">
          <span className="bg-emerald-50 dark:bg-emerald-900/20 text-[#0f7a6c] dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
            {isRtl ? material.subject : material.subjectEn}
          </span>
          <span className="flex items-center gap-1"><User size={10} />{isRtl ? material.teacher : material.teacherEn}</span>
          <span className="flex items-center gap-1"><Calendar size={10} />{material.date}</span>
          {material.size !== '—' && <span className="text-slate-400">{t('studentDashboard.materials.size')}: {material.size}</span>}
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shrink-0 shadow-sm shadow-emerald-200/50"
      >
        <Download size={13} />
        {material.type === 'link' ? t('studentDashboard.materials.open') : t('studentDashboard.materials.download')}
      </button>
    </motion.div>
  );
}

export default function StudentMaterials() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="min-h-screen bg-[#f3f7f6] dark:bg-slate-900 p-4 sm:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto space-y-5">

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center shrink-0">
              <Library size={20} className="text-[#0f7a6c] dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{t('studentDashboard.materials.title')}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t('studentDashboard.materials.subtitle')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { value: linkCount, icon: Link2, iconCls: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/40', transKey: 'usefulLinks' },
            { value: videoCount, icon: Video, iconCls: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40', transKey: 'videos' },
            { value: pdfCount, icon: FileText, iconCls: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/40', transKey: 'pdfs' },
          ].map(({ value, icon: Icon, iconCls, bg, transKey }) => (
            <div key={transKey} className={`rounded-2xl p-4 text-center border shadow-sm ${bg}`}>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{value}</span>
                <Icon size={18} className={iconCls} />
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">{t(`studentDashboard.materials.${transKey}`)}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden divide-y divide-slate-100 dark:divide-slate-700">
          {materials.map((m, i) => (
            <MaterialRow key={m.id} material={m} isRtl={isRtl} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
