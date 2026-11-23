import { useState } from 'react'
import { buildApiAssetUrl } from '@/shared/config/apiConfig.js'

export default function WebsiteAvatar({
  src,
  alt = '',
  initial,
  className,
  imageClassName = 'w-full h-full object-cover',
  fallbackClassName = '',
}) {
  const [failedSrc, setFailedSrc] = useState('')
  const rawSrc = typeof src === 'string' ? src.trim() : ''
  const imageUrl = rawSrc
    ? (/^(https?:|data:|blob:)/i.test(rawSrc) ? rawSrc : buildApiAssetUrl(rawSrc))
    : ''
  const canShowImage = imageUrl && imageUrl !== failedSrc

  return (
    <div className={className}>
      {canShowImage ? (
        <img
          src={imageUrl}
          alt={alt}
          onError={() => setFailedSrc(imageUrl)}
          className={imageClassName}
        />
      ) : (
        <span className={fallbackClassName}>{initial}</span>
      )}
    </div>
  )
}
