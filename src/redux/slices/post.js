import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {deleteService, getService, postService, putService} from '../services';
import {api_urls} from '../../utilities';

const initialState = {
  feed: null,
};

export const getFeed = createAsyncThunk('getFeed', async (params, {}) => {
  try {
    const response = await getService(api_urls.post, {
      ...params,
      limit: params.limit || 15,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const uploadMedia = createAsyncThunk('uploadMedia', async (data, {}) => {
  try {
    const response = await postService(api_urls.media, data, false, {
      'content-type': 'multipart/form-data',
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const createPost = createAsyncThunk('createPost', async (data, {}) => {
  try {
    const response = await postService(api_urls.post, data, true, {
      'content-type': 'multipart/form-data',
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const updatePost = createAsyncThunk(
  'updatePost',
  async ({slug, data}, {}) => {
    try {
      const response = await putService(
        `${api_urls.post}/${slug}`,
        data,
        true,
        {
          'content-type': 'multipart/form-data',
        },
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const likePost = createAsyncThunk('likePost', async (data, {}) => {
  try {
    const response = await postService(api_urls.likePost, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const postComment = createAsyncThunk('postComment', async (data, {}) => {
  try {
    const response = await postService(api_urls.postComment, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const deletePost = createAsyncThunk(
  'deletePost',
  async (post_slug, {}) => {
    try {
      const response = await deleteService(`${api_urls.post}/${post_slug}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const postDetail = createAsyncThunk(
  'postDetail',
  async (post_slug, {}) => {
    try {
      const response = await getService(`${api_urls.post}/${post_slug}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updateFeedList: (state, action) => {
      state.feed = {...state.feed, data: action.payload};
    },
  },
  extraReducers: builder => {
    builder.addCase(getFeed.fulfilled, (state, {payload}) => {
      state.feed = payload;
    });
  },
});

export const {updateFeedList, updateRegionPosts} = postSlice.actions;
export default postSlice.reducer;
