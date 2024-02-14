import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    // otp: string | null;
    resetEmail: string | null;
    verificationCode: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    // otp: null,
    resetEmail: null,
    verificationCode: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            if (action.payload) {
                localStorage.setItem("user", JSON.stringify(action.payload));
            } else {
                localStorage.removeItem("user");
            }
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;

            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }
        },
        setResetEmail: (state, action: PayloadAction<string | null>) => {
            state.resetEmail = action.payload;
        },
        setVerificationCode: (state, action: PayloadAction<string | null>) => {
            state.verificationCode = action.payload;
        },
        resetAuthState: (state) => {
            state.resetEmail = '';
            state.verificationCode = '';
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const {
    setUser,
    setToken,
    // setOTP,
    setResetEmail,
    setVerificationCode,
    resetAuthState,
    setIsAuthenticated,
} = authSlice.actions;

export default authSlice.reducer;
