import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { landingApi } from '@/shared/services/api/landingApi';

export const fetchLandingPage = createAsyncThunk(
  'landing/fetchLandingPage',
  async (lang, { rejectWithValue }) => {
    try {
      const response = await landingApi.fetchLandingPageData(lang);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch landing page data');
    }
  },
  {
    condition: (lang, { getState }) => {
      const { landing } = getState();
      if (landing.loading) return false;
      if (landing.landingData && landing.landingLang === lang) return false;
      return true;
    }
  }
);

export const fetchPackagesAndFaqs = createAsyncThunk(
  'landing/fetchPackagesAndFaqs',
  async (lang, { rejectWithValue }) => {
    try {
      const response = await landingApi.fetchPackagesAndFaqs(lang);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch packages and FAQs');
    }
  },
  {
    condition: (lang, { getState }) => {
      const { landing } = getState();
      if (landing.packagesData && landing.packagesLang === lang) return false;
      return true;
    }
  }
);

export const fetchContactInfo = createAsyncThunk(
  'landing/fetchContactInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await landingApi.fetchContactInfo();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch contact info');
    }
  },
  {
    condition: (_, { getState }) => {
      const { landing } = getState();
      if (landing.contactInfo) return false;
      return true;
    }
  }
);

export const sendMessage = createAsyncThunk(
  'landing/sendMessage',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await landingApi.sendMessage(messageData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to send message');
    }
  }
);

export const fetchPublicFeaturedStudents = createAsyncThunk(
  'landing/fetchPublicFeaturedStudents',
  async (lang, { rejectWithValue }) => {
    try {
      const response = await landingApi.fetchPublicFeaturedStudents({ lang });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch public featured students');
    }
  },
  {
    condition: (lang, { getState }) => {
      const { landing } = getState();
      if (landing.publicFeaturedStudents && landing.publicFeaturedStudentsLang === lang) return false;
      return true;
    }
  }
);

const initialState = {
  landingData: null,
  landingLang: null,
  packagesData: null,
  packagesLang: null,
  contactInfo: null,
  publicFeaturedStudents: null,
  publicFeaturedStudentsLang: null,
  messageSubmitStatus: 'idle',
  loading: false,
  error: null,
};

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    resetMessageSubmitStatus: (state) => {
      state.messageSubmitStatus = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLandingPage.fulfilled, (state, action) => {
        state.loading = false;
        state.landingData = action.payload?.data || null;
        state.landingLang = action.meta.arg;
      })
      .addCase(fetchLandingPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPackagesAndFaqs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPackagesAndFaqs.fulfilled, (state, action) => {
        state.loading = false;
        state.packagesData = action.payload?.data || null;
        state.packagesLang = action.meta.arg;
      })
      .addCase(fetchPackagesAndFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchContactInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.contactInfo = action.payload?.data || null;
      })
      .addCase(fetchContactInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendMessage.pending, (state) => {
        state.messageSubmitStatus = 'loading';
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.messageSubmitStatus = 'success';
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.messageSubmitStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchPublicFeaturedStudents.fulfilled, (state, action) => {
        state.publicFeaturedStudents = action.payload?.data || action.payload || null;
        state.publicFeaturedStudentsLang = action.meta.arg;
      });
  },
});

export const { resetMessageSubmitStatus } = landingSlice.actions;

export default landingSlice.reducer;
