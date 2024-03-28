import type { BuyTariffBody } from '@models/models';
import { api } from '@services/api';
import { TARIFF_ENDPOINTS } from '@services/api.constants';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        buyTariff: builder.mutation<void, BuyTariffBody>({
            query: (body) => ({
                url: TARIFF_ENDPOINTS.TARRIFF,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useBuyTariffMutation } = userApi;
