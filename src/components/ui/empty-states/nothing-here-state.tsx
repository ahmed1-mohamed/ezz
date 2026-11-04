import React from 'react';
import { EmptyState } from '../empty-state';

interface NothingHereStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NothingHereState: React.FC<NothingHereStateProps> = (props) => {
  return <EmptyState type="default" {...props} />;
};
