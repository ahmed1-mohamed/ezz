import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EvaluationAvatar({ image, name, className = '' }) {
  const { i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [failedImage, setFailedImage] = useState(null);
  const initial = name?.trim()?.charAt(0) || (isRtl ? 'م' : 'U');
  const imageFailed = failedImage === image;

  return (
    <div className={`overflow-hidden flex items-center justify-center shrink-0 ${className}`}>
      {image && !imageFailed ? (
        <img
          src={image}
          alt={name || ''}
          className="w-full h-full object-cover"
          onError={() => setFailedImage(image)}
        />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
}
