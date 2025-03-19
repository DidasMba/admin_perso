/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import authSlice from "./features/slice/authSlice";
import eventsReducer from "./features/slice/eventsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    events: eventsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
