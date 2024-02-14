"use client";

import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useEffect } from "react";
import { setIsAuthenticated } from "./slices/authSlice";
import { toast } from "react-toastify";

const isAuthenticated = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    const Auth: React.FC<P> = (props) => {
        const router = useRouter();
        const isAuthenticated = useSelector(
            (state: RootState) => state.auth.isAuthenticated
        );
        const token = useSelector((state: RootState) => state.auth.token);
        const dispatch = useDispatch<AppDispatch>();

        useEffect(() => {
            if (token) {
                dispatch(setIsAuthenticated(true));
            } else {
                dispatch(setIsAuthenticated(false));
                toast.warn("unauthenticated, redirecting...");
                router.push("/signIn")
            }
        }, [dispatch, router, token]);

        if (!isAuthenticated) {
            return (
                <div>
                    <h1>Loading......</h1>
                </div>
            )
        }

        return <WrappedComponent {...props} />
    };

    return Auth;
}

export default isAuthenticated;