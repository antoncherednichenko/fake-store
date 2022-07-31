import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import goodsSlice from '../features/goods/goodsSlice';

export const store = configureStore({
  reducer: {
    goods: goodsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
