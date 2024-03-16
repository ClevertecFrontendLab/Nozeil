import type {
    AuthUserBody,
    ChangePasswordBody,
    ChangePasswordResponse,
    CheckEmailBody,
    CheckEmailResponse,
    ConfirmEmailBody,
    ConfirmEmailResponse,
    LoginResponse,
} from '@models/models';
import { api } from '@services/api';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<void, AuthUserBody>({
            query: (body) => ({
                url: 'auth/registration',
                method: 'POST',
                body,
            }),
        }),
        loginUser: builder.mutation<LoginResponse, AuthUserBody>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body,
            }),
        }),
        checkEmail: builder.mutation<CheckEmailResponse, CheckEmailBody>({
            query: (body) => ({
                url: 'auth/check-email',
                method: 'POST',
                body,
            }),
        }),
        confirmEmail: builder.mutation<ConfirmEmailResponse, ConfirmEmailBody>({
            query: (body) => ({
                url: 'auth/confirm-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordBody>({
            query: (body) => ({
                url: 'auth/change-password',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
    }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCheckEmailMutation,
  useConfirmEmailMutation,
  useChangePasswordMutation,
} = authApi;