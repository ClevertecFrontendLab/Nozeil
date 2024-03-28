import type { TariffListResponse, TrainingListResponse } from '@models/models';
import { api } from '@services/api';
import { CATALOGS_ENDPOINTS } from '@services/api.constants';

export const catalogsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTrainingList: builder.query<TrainingListResponse, void>({
            query: () => ({
                url: CATALOGS_ENDPOINTS.TRAINING_LIST,
            }),
        }),
        getTariffList: builder.query<TariffListResponse, void>({
            query: () => ({
                url: CATALOGS_ENDPOINTS.TARIFF_LIST,
            }),
        }),
    }),
});

export const { useGetTrainingListQuery, useGetTariffListQuery } = catalogsApi;
