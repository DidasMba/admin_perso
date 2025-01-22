/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
import { TOKEN } from "../../../_utils/constast";

const getInitialToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN);
  }
  return null;
};

const setAuthenticatedLocalstorage = (value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN, value);
  }
};

const initialState: AuthState = {
  token: getInitialToken(),
  user: null,
  role: null,
};

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<
      {
        status: string;
        message: string;
        data: {
          access_token: string;
        };
      },
      SigninType
    >({
      query: (values) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: values,
        };
      },
    }),
    getMe: builder.query<
      {
        status: string;
        user: {
          id: number;
          firstname: string;
          lastname: string;
          avatar: string;
          role: string;
          isVerified: boolean;
        };
      },
      null
    >({
      query: () => {
        return {
          url: "/user/profile",
          method: "GET",
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
    setToken: (state, { payload }) => {
      setAuthenticatedLocalstorage(payload.toString());
      state.token = payload;
    },
  },
});

export const { useSigninMutation, useGetMeQuery } = authApi;

export const { setRole, setUser, setToken } = authSlice.actions;

export default authSlice;
