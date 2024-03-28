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
import { AUTH_ENDPOINTS } from '@services/api.constants';

const { REGISTRATION, LOGIN, CHECK_EMAIL, CHANGE_PASSWORD, CONFIRM_EMAIL } = AUTH_ENDPOINTS;

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<void, AuthUserBody>({
            query: (body) => ({
                url: REGISTRATION,
                method: 'POST',
                body,
            }),
        }),
        loginUser: builder.mutation<LoginResponse, AuthUserBody>({
            query: (body) => ({
                url: LOGIN,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),
        checkEmail: builder.mutation<CheckEmailResponse, CheckEmailBody>({
            query: (body) => ({
                url: CHECK_EMAIL,
                method: 'POST',
                body,
            }),
        }),
        confirmEmail: builder.mutation<ConfirmEmailResponse, ConfirmEmailBody>({
            query: (body) => ({
                url: CONFIRM_EMAIL,
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordBody>({
            query: (body) => ({
                url: CHANGE_PASSWORD,
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
