import { useMemo } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { routerSelector } from '@redux/router-selector';
import { useGetTrainingQuery } from '@services/endpoints/training';
import moment from 'moment';

export const useGetTrainingQueryWithSkip = (iso?: string) => {
    const { previousLocations } = useAppSelector(routerSelector);
    const result = useGetTrainingQuery(undefined, {
        skip: previousLocations?.length === 1,
    });

    const filteredTrainings = useMemo(
        () =>
            result.data?.filter(({ date }) => {
                const momentDate = moment(date)
                    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                    .toISOString();

                return momentDate === iso;
            }),
        [result.data, iso],
    );

    return { result, filteredTrainings };
};
