import { configureStore } from '@reduxjs/toolkit';
import parentReducer from '@/store/parentSlice';

export const store = configureStore({
  reducer: {
    parent: parentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
