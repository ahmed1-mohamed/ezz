import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TeacherStudentAvatar({ src, name, className }) {
  const [failedSource, setFailedSource] = useState(null);
  const { i18n } = useTranslation();
  const showImage = Boolean(src && failedSource !== src);
  const initial = name?.trim()?.charAt(0) || (i18n.language?.startsWith('ar') ? 'ط' : 'S');

  if (showImage) {
    return (
      <img
        src={src}
        alt={name || ''}
        className={className}
        onError={() => setFailedSource(src)}
      />
    );
  }

  return (
    <div
      aria-label={name || undefined}
      className={`${className} bg-[#0f7a6c]/10 dark:bg-[#0f7a6c]/20 text-[#0f7a6c] dark:text-emerald-400 font-bold flex items-center justify-center`}
    >
      {initial}
    </div>
  );
}
