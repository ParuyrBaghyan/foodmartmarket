"use client";

import { configureStore } from "@reduxjs/toolkit";
import differFuncReducer from "./differFunc";
import loginReducer from "./loginSlice";
import countReducer from "./count";
import favouriteReducer from "./favouriteSlice";
import personalReducer from "./personalSlice";
import searchReducer from './searchSlice'

export const store = configureStore({
  reducer: {
    differFunc: differFuncReducer,
    login: loginReducer,
    count: countReducer,
    favourite: favouriteReducer,
    personal: personalReducer,
    search:searchReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
