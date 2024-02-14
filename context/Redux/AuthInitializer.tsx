"use client";

import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setToken, setUser } from "./slices/authSlice";
import { User } from "./types";

interface AuthInitializerProps {
    children: ReactNode;
}

const AuthInitializer: React.FC<AuthInitializerProps> = ({children}) => {
    const dispatch = useDispatch();
    const userFromLocaStorage = useSelector(
        (state: RootState) => state.auth.user
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userFromLocaStorage = localStorage.getItem("user");
            const tokenFromLocalStorage = localStorage.getItem("access_token");

            if (userFromLocaStorage) {
                dispatch(setUser(JSON.parse(userFromLocaStorage) as User));
            }

            if (tokenFromLocalStorage) {
                dispatch(setToken(tokenFromLocalStorage));
            }
        }
    },[dispatch]);

    return children;
}

export default AuthInitializer;