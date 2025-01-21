/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const getAuthenticate = () => {
  const isAuthenticated = localStorage.getItem("auth-sora");
  if (!isAuthenticated) return false;
  return true;
};

const setAuthenticatedLocalstorage = (value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth-sora", value);
  }
};

const initialState: AuthState = {
  user: null,
  role: null,
  isAuthencated: getAuthenticate(),
};

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<{ status: string; message: string }, SigninType>({
      query: (values) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: values,
          credentials: "include",
        };
      },
    }),
    getMe: builder.query({
      query: () => {
        return {
          url: "/user/profile",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setRole: (state, { payload }) => {
      state.role = payload;
    },
    setIAuthenticated: (state, { payload }) => {
      setAuthenticatedLocalstorage(payload.toString());
      state.isAuthencated = payload;
    },
  },
});

export const { useSigninMutation, useGetMeQuery } = authApi;

export const { setRole, setUser, setIAuthenticated } = authSlice.actions;

export default authSlice;
