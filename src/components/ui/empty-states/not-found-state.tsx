import React from 'react';
import { EmptyState } from '../empty-state';

interface NotFoundStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NotFoundState: React.FC<NotFoundStateProps> = (props) => {
  return <EmptyState type="not_found" {...props} />;
};
