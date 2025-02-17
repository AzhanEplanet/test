import {persistStore, persistReducer} from 'redux-persist';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loaderReducer from './slices/loader';
import authReducer from './slices/auth';
import {RootState} from '../interface';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
});

const rootReducer = (state: RootState | undefined, action: any) => {
  if (action.type === 'auth/removeAccessToken') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type {RootState};
