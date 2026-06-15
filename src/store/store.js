import { configureStore } from '@reduxjs/toolkit';
import parentReducer from '@/store/parentSlice';
import landingReducer from '@/store/landingSlice';

export const store = configureStore({
  reducer: {
    parent: parentReducer,
    landing: landingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
