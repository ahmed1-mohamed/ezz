import { configureStore } from '@reduxjs/toolkit';
import parentReducer from '../features/parent/parentSlice';

export const store = configureStore({
  reducer: {
    parent: parentReducer,
    // Add other reducers here as the app grows
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Useful if we have dates or complex objects, can be tuned later
    }),
});
