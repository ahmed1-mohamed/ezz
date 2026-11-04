import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  BellOff,
  CalendarX,
  AlertTriangle,
  FileX,
  Search,
  Globe,
  WifiOff,
  FileQuestion,
  Heart
} from 'lucide-react';

export type EmptyStateType =
  | 'notifications'
  | 'bookings'
  | 'error'
  | 'default'
  | 'no_results'
  | 'no_connection'
  | 'not_found'
  | 'favorites';

interface EmptyStateProps {
  type?: EmptyStateType;
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  className?: string;
}

const typeConfig = {
  notifications: {
    icon: BellOff,
    langKey: 'notifications',
  },
  bookings: {
    icon: CalendarX,
    langKey: 'bookings',
  },
  error: {
    icon: AlertTriangle,
    langKey: 'error',
  },
  no_results: {
    icon: Search,
    langKey: 'no_results',
  },
  no_connection: {
    icon: WifiOff,
    langKey: 'no_connection',
  },
  not_found: {
    icon: FileQuestion,
    langKey: 'not_found',
  },
  favorites: {
    icon: Heart,
    langKey: 'favorites',
  },
  default: {
    icon: FileX,
    langKey: 'default',
  },
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  type = 'default',
  title,
  message,
  icon,
  className = '',
}) => {
  const { t } = useLanguage();
  const config = typeConfig[type] || typeConfig.default;

  const defaultTitle = t(`empty_states.${config.langKey}.title`);
  const defaultMessage = t(`empty_states.${config.langKey}.message`);

  const renderInnerIcon = () => {
    switch (type) {
      case 'not_found':
        return (
          <div className="flex flex-col items-center justify-center -mt-0.5 select-none">
            <AlertTriangle className="w-5 h-5 text-white stroke-[2.5]" />
            <span className="text-[9px] font-extrabold text-white leading-none mt-0.5 tracking-wider">404</span>
          </div>
        );
      case 'no_connection':
        return (
          <div className="relative">
            <Globe className="w-6 h-6 text-white stroke-[2]" />
            <div className="absolute -bottom-1 -right-1 bg-[#0D7A70] rounded-full p-[1px]">
              <AlertTriangle className="w-3 h-3 text-white fill-white" stroke="#0D7A70" strokeWidth={3} />
            </div>
          </div>
        );
      case 'no_results':
        return (
          <div className="relative">
            <Search className="w-6 h-6 text-white stroke-[2]" />
            <div className="absolute -bottom-0.5 -right-0.5 bg-[#0D7A70] rounded-full w-3.5 h-3.5 flex items-center justify-center border border-[#0D7A70]">
              <span className="text-[10px] font-extrabold text-white leading-none -mt-[3px]">×</span>
            </div>
          </div>
        );
      case 'favorites':
        return <Heart className="w-6 h-6 text-white fill-white stroke-[2]" />;
      default:
        const Icon = config.icon;
        return <Icon className="w-6 h-6 text-white stroke-[2]" />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center min-h-[340px] bg-white rounded-xl ${className}`}>
      <div className="relative flex items-center justify-center w-24 h-24 mb-6 bg-white rounded-full shadow-lg shadow-teal-100/50">
        <div className="w-18 h-18 bg-[#F0FAF7] rounded-full flex items-center justify-center">
          <div className="relative flex items-center justify-center w-14 h-14 text-[#0D7A70]">
            {icon ? (
              <div className="relative z-10">{icon}</div>
            ) : (
              <>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-current">
                  <path d="M 46.5,9.5 C 48.5,8 51.5,8 53.5,9.5 L 85,39 C 88,42 88,46 88,50 L 88,82 C 88,86 84,90 80,90 L 20,90 C 16,90 12,86 12,82 L 12,50 C 12,46 12,42 15,39 Z" />
                </svg>
                <div className="relative z-10 text-white flex items-center justify-center mt-1">
                  {renderInnerIcon()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title || defaultTitle}</h3>
      <p className="text-sm text-gray-500 max-w-sm leading-relaxed">{message || defaultMessage}</p>
    </div>
  );
};
