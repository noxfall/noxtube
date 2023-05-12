import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ytReducer from './redux/ytSearch';
import { createWrapper } from 'next-redux-wrapper';

export const store = () => configureStore({
  reducer: {
    ytsearch: ytReducer
  }
});

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(store);
