import React from 'react';
import { EmptyState } from '../empty-state';

interface NoResultsStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NoResultsState: React.FC<NoResultsStateProps> = (props) => {
  return <EmptyState type="no_results" {...props} />;
};
