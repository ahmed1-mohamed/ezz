import React from 'react';
import { EmptyState } from '../empty-state';

interface NoNotificationsStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NoNotificationsState: React.FC<NoNotificationsStateProps> = (props) => {
  return <EmptyState type="notifications" {...props} />;
};
