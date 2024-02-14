"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import registrationReducer from "../slices/registrationSlice";
import { Provider } from "react-redux";

export const store = configureStore({
    reducer: {
        registration: registrationReducer,
        auth: authSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;