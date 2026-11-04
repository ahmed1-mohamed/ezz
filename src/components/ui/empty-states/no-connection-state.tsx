import React from 'react';
import { EmptyState } from '../empty-state';

interface NoConnectionStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NoConnectionState: React.FC<NoConnectionStateProps> = (props) => {
  return <EmptyState type="no_connection" {...props} />;
};
