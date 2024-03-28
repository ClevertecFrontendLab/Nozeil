import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import {
    removeFormExerciseById,
    removeFormExercisesByIds,
    setExercises,
} from '@redux/slices/training-modal/training-modal';
import { FormInstance } from 'antd/es/form/Form';

import { FormValues } from '../exercises-form.types';

export const useExercisesFormHandlers = (
    form: FormInstance,
    setIsDisabled: (isDisabled: boolean) => void,
) => {
    const dispatch = useAppDispatch();

    const onDelete = () => {
        const formValues: FormValues = form.getFieldsValue();
        const fields = Object.values(formValues);
        const ids = fields.filter((field) => field.shouldDelete).map((field) => field.id);

        if (fields.length !== ids.length) {
          setIsDisabled(true);
        }

        dispatch(removeFormExercisesByIds(ids));
    };

    const onFinish = (values: FormValues) => {
        const formExercises = Object.values(values)
            .map((exercise) => {
                if (!exercise.name) {
                    dispatch(removeFormExerciseById(exercise.id));
                }

                return {
                    _id: exercise.id,
                    name: exercise.name,
                    approaches: exercise.approaches ?? 1,
                    weight: exercise.weight ?? 0,
                    replays: exercise.replays ?? 1,
                    isImplementation: exercise.isImplementation ?? false,
                };
            })
            .filter((exercise) => exercise.name)
            .sort((exercise1, exercise2) => `${exercise2._id}`.length - `${exercise1._id}`.length);

        dispatch(setExercises(formExercises));
    };

    const valuesChangeHandler = (values: FormValues) => {
        const isDisabled = !Object.values(values).some((field) => field?.shouldDelete);

        setIsDisabled(isDisabled);
    };

    return { onDelete, onFinish, valuesChangeHandler };
};
