import { useState } from 'react';
import { AuthContext } from './auth-context';
import type { AuthProviderProps, Signin, Signout } from './auth.types';

const STORAGE_KEY = 'accessToken';

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState(
        localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY),
    );

    const signin: Signin = (accessToken, remember, callback) => {
        remember
            ? localStorage.setItem(STORAGE_KEY, accessToken)
            : sessionStorage.setItem(STORAGE_KEY, accessToken);
        setToken(accessToken);
        callback();
    };

    const signout: Signout = (callback) => {
        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(STORAGE_KEY);
        setToken(null);
        callback();
    };

    const value = { token, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
