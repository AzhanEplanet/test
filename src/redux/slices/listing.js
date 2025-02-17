import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getService, postService} from '../services';
import {api_urls} from '../../utilities';

const initialState = {
  badgeCount: null,
  notification: null,
};

export const getNotifications = createAsyncThunk(
  'getNotifications',
  async (params, {}) => {
    try {
      const response = await getService(api_urls.notification, params);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const getBadgeCount = createAsyncThunk(
  'getBadgeCount',
  async (params, {}) => {
    try {
      const response = await getService(api_urls.getBadgeCount, params);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const markReadNotifications = createAsyncThunk(
  'markReadNotifications',
  async (params, {}) => {
    try {
      const response = await getService(api_urls.markReadNotifications, params);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const getList = createAsyncThunk('getList', async (params, {}) => {
  try {
    const response = await getService(api_urls.any, params);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    updateBadgeCount: (state, action) => {
      state.badgeCount = state.badgeCount + 1;
    },
    updateNotificationList: (state, action) => {
      state.notification = {...state.notification, data: action.payload};
    },
  },
  extraReducers: builder => {
    builder.addCase(getNotifications.fulfilled, (state, {payload}) => {
      state.notification = payload;
    });
    builder.addCase(getBadgeCount.fulfilled, (state, {payload}) => {
      state.badgeCount = payload.badge_count;
    });
    builder.addCase(markReadNotifications.fulfilled, (state, {payload}) => {
      state.badgeCount = 0;
    });
  },
});

export const {updateBadgeCount, updateNotificationList} = listingSlice.actions;
export default listingSlice.reducer;
