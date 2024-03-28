import { type TrainingExercise } from '@models/models';

export type FormValues = {
  [x: number]: Omit<TrainingExercise, 'isImplementation'> & {
      id: number;
      shouldDelete?: boolean;
      isImplementation?: boolean;
  };
};