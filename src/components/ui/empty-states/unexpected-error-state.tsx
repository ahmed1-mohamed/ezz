import React from 'react';
import { EmptyState } from '../empty-state';

interface UnexpectedErrorStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const UnexpectedErrorState: React.FC<UnexpectedErrorStateProps> = (props) => {
  return <EmptyState type="error" {...props} />;
};
