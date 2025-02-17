import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postService, getService, putService} from '../services';
// import {api_urls, strings, utility} from '../../utilities';

const initialState = {
  accessToken: null,
  userInfo: null,
};

// export const login = createAsyncThunk('login', async (data, {}) => {
//   try {
//     const response = await postService(api_urls.login, data);
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const sociaLogin = createAsyncThunk('login', async (data, {}) => {
//   try {
//     const response = await postService(api_urls.sociaLogin, data);
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const signup = createAsyncThunk('signup', async (data, {}) => {
//   try {
//     const response = await postService(api_urls.user, data, false, {
//       'content-type': 'multipart/form-data',
//     });
//     return response.data.data;
//   } catch (error) {
//     const err = error.response.data.data;

//     if (err.hasOwnProperty('email')) {
//       utility.showAlertMessage('danger', strings.emailDuplication);
//     } else if (err.hasOwnProperty('mobile_no')) {
//       utility.showAlertMessage('danger', strings.phoneDuplication);
//     } else {
//       utility.checkError(api_urls.user, error);
//     }

//     throw error;
//   }
// });

// export const getProfile = createAsyncThunk('getProfile', async (slug, {}) => {
//   try {
//     const response = await getService(`${api_urls.user}/${slug}`);
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const updateProfile = createAsyncThunk(
//   'updateProfile',
//   async ({slug, data}, {}) => {
//     try {
//       const response = await putService(
//         `${api_urls.user}/${slug}`,
//         data,
//         true,
//         {'content-type': 'multipart/form-data'},
//       );
//       return response.data.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

// export const forgotPassword = createAsyncThunk(
//   'forgotPassword',
//   async (data, {}) => {
//     try {
//       const response = await postService(api_urls.forgotPassword, data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

// export const changePassword = createAsyncThunk(
//   'changePassword',
//   async (data, {}) => {
//     try {
//       const response = await postService(api_urls.changePassword, data);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

// export const contact = createAsyncThunk('contact', async (data, {}) => {
//   try {
//     const response = await postService(api_urls.contact, data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const logout = createAsyncThunk('logout', async (data, {}) => {
//   try {
//     const response = await postService(api_urls.logout, data, false);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    removeAccessToken: (state, action) => {
      state.accessToken = null;
    },
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: builder => {
    // builder.addCase(login.fulfilled, (state, {payload}) => {
    //   state.accessToken = true;
    //   state.userInfo = payload;
    // });
    // builder.addCase(signup.fulfilled, (state, {payload}) => {
    //   state.accessToken = true;
    //   state.userInfo = payload;
    // });
    // builder.addCase(updateProfile.fulfilled, (state, {payload}) => {
    //   state.userInfo = payload;
    // });
  },
});

export const {saveUserInfo, saveAccessToken, removeAccessToken} =
  authSlice.actions;

export default authSlice.reducer;
