import { useMemo } from 'react';
import { useGetTrainingQueryWithSkip } from '@components/calendar-page/calendar-content/hooks/use-get-training-with-skip';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { trainingModalSelector } from '@redux/slices/training-modal/training-modal';

export const useTrainingTypes = () => {
    const { isPast, date } = useAppSelector(trainingModalSelector);

    const trainingQueryResult = useGetTrainingQueryWithSkip(date.iso);

    const trainingTypes = useMemo(
        () =>
            trainingQueryResult.filteredTrainings?.map(({ name, isImplementation }) => ({
                name,
                isImplementation,
            })),
        [trainingQueryResult.filteredTrainings],
    );

    return { trainingQueryResult, trainingTypes, date, isPast };
};
