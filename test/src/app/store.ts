import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {  weatherCityReducer } from "./slice";

export const store = configureStore({
  reducer: {
    weatherCity:weatherCityReducer,
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

