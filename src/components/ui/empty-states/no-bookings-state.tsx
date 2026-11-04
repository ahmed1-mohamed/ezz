import React from 'react';
import { EmptyState } from '../empty-state';

interface NoBookingsStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export const NoBookingsState: React.FC<NoBookingsStateProps> = (props) => {
  return <EmptyState type="bookings" {...props} />;
};
