import type { UpdateUserBody, UserInfoResponse } from '@models/models';
import { api } from '@services/api';
import { USER_ENDPOINTS } from '@services/api.constants';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserInfoResponse, void>({
            query: () => ({
                url: USER_ENDPOINTS.ME,
            }),
            providesTags: ['User'],
        }),
        updateUserInfo: builder.mutation<UserInfoResponse, UpdateUserBody>({
            query: (body) => ({
                url: USER_ENDPOINTS.USER,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userApi;
