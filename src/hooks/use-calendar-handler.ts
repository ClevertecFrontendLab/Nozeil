import { type NavigateFunction } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { openError500Modal } from '@redux/slices/error-500-modal';
import { useLazyGetTrainingQuery } from '@services/endpoints/training';

import { useAppDispatch } from '.';

export const useCalendarHandler = (navigate: NavigateFunction) => {
    const [getTraining] = useLazyGetTrainingQuery();
    const dispatch = useAppDispatch();

    const handler = async () => {
        try {
            await getTraining(undefined, true).unwrap();
            navigate(ROUTES.CALENDAR);
        } catch {
            dispatch(openError500Modal());
        }
    };

    return handler;
};
