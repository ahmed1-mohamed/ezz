import { useState } from 'react';
import { Check } from 'lucide-react';
import { getImageUrl } from '@/shared/services/api/teachersApi';

export default function StudentAvatar({
    image,
    name,
    sizeClass = 'w-8 h-8',
    textClass = 'text-xs',
    selected = false,
    fallbackClass = 'bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-brand-400',
}) {
    const [failedImage, setFailedImage] = useState('');
    const imageUrl = image ? getImageUrl(image) : '';
    const showImage = imageUrl && failedImage !== imageUrl;
    const initial = String(name || '').trim().charAt(0).toLocaleUpperCase() || 'S';

    return (
        <div className={`relative ${sizeClass} shrink-0`}>
            {showImage ? (
                <img
                    src={imageUrl}
                    alt={name || 'Student'}
                    onError={() => setFailedImage(imageUrl)}
                    className={`${sizeClass} rounded-full object-cover border border-slate-200`}
                />
            ) : (
                <div className={`${sizeClass} rounded-full ${fallbackClass} flex items-center justify-center font-bold ${textClass}`}>
                    {selected ? <Check size={20} /> : initial}
                </div>
            )}
            {selected && showImage && (
                <div className={`absolute inset-0 ${sizeClass} rounded-full bg-[#0f7a6c]/80 flex items-center justify-center text-white backdrop-blur-[1px]`}>
                    <Check size={20} />
                </div>
            )}
        </div>
    );
}
