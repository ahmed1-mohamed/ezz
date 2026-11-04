import React from 'react';
import { EmptyState } from '../empty-state';

interface NoFavoritesStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NoFavoritesState: React.FC<NoFavoritesStateProps> = (props) => {
  return <EmptyState type="favorites" {...props} />;
};
