import { useCallback, useMemo } from 'react';
import { STORAGE_TOKEN_KEY } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectAuthToken, setToken } from '@redux/slices/auth';

import type { AuthProviderProps, Signin, Signout } from './auth.types';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const token = useAppSelector(selectAuthToken);
    const dispatch = useAppDispatch();

    const signin: Signin = useCallback(
        (accessToken, callback, remember) => {
            if (remember) {
                localStorage.setItem(STORAGE_TOKEN_KEY, accessToken);
            }

            dispatch(setToken(accessToken));
            callback();
        },
        [dispatch],
    );

    const signout: Signout = useCallback(
        (callback) => {
            localStorage.removeItem(STORAGE_TOKEN_KEY);
            dispatch(setToken(null));

            if (callback) {
                callback();
            }
        },
        [dispatch],
    );

    const value = useMemo(
        () => ({
            token,
            signin,
            signout,
        }),
        [signin, signout, token],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
