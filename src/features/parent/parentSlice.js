import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { parentApi } from '../../services/api/parentApi';

// Async Thunks
export const fetchTeachers = createAsyncThunk(
  'parent/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await parentApi.fetchTeachersList();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch teachers');
    }
  }
);

export const fetchPastRatings = createAsyncThunk(
  'parent/fetchPastRatings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await parentApi.fetchPastRatings();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch past ratings');
    }
  }
);

export const submitTeacherRating = createAsyncThunk(
  'parent/submitTeacherRating',
  async (ratingData, { rejectWithValue }) => {
    try {
      const response = await parentApi.submitRating(ratingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to submit rating');
    }
  }
);

// Initial State
const initialState = {
  teachers: [],
  pastRatings: [],
  loading: false,
  error: null,
  ratingSubmitStatus: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
};

const parentSlice = createSlice({
  name: 'parent',
  initialState,
  reducers: {
    resetRatingStatus: (state) => {
      state.ratingSubmitStatus = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Teachers
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Past Ratings
      .addCase(fetchPastRatings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPastRatings.fulfilled, (state, action) => {
        state.loading = false;
        state.pastRatings = action.payload;
      })
      .addCase(fetchPastRatings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Submit Rating
      .addCase(submitTeacherRating.pending, (state) => {
        state.ratingSubmitStatus = 'loading';
      })
      .addCase(submitTeacherRating.fulfilled, (state) => {
        state.ratingSubmitStatus = 'success';
      })
      .addCase(submitTeacherRating.rejected, (state, action) => {
        state.ratingSubmitStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetRatingStatus } = parentSlice.actions;

export default parentSlice.reducer;
