import { type ReactNode } from 'react';

export type Signin = (accessToken: string, remember: boolean, callback: () => void) => void;

export type Signout = (callback?: () => void) => void;

export type ContextDefaultValue = {
    token: string | null;
    signin: Signin;
    signout: Signout;
};

export type AuthProviderProps = {
    children: ReactNode;
};
