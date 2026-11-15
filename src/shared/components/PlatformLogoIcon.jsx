import { memo } from 'react';
import logoImg from '@/images/programs/NewLogo.webp';

/**
 * Official platform logo icon of Manarat Al-Ezz Academy.
 * Renders the authentic circular brand emblem.
 */
function PlatformLogoIcon({ size = 36, className = '', title = 'منارة العز' }) {
  return (
    <img
      src={logoImg}
      alt={title}
      width={size}
      height={size}
      className={`object-contain shrink-0 drop-shadow-xs ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      loading="eager"
    />
  );
}

export default memo(PlatformLogoIcon);
