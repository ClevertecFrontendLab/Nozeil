import { type TrainingExercise, TrainingResponse } from '@models/models';
import { type PayloadAction } from '@reduxjs/toolkit';

export type TrainingTypesWithImplementation = Array<Pick<TrainingResponse, 'name' | 'isImplementation'>>;

type Exercise = TrainingExercise & { _id: number | string };

export type Exercises = Exercise[];

export type FormExercises = Array<Partial<TrainingExercise> & { _id: number | string }>;

export type Trainings = TrainingResponse[];

export type SetExercisesAction = PayloadAction<Exercises>;

export type AddTrainingsAction = PayloadAction<Trainings>;

export type AddTrainingTypesAction = PayloadAction<TrainingTypesWithImplementation>;

export type TrainingType = { name: string; id?: string };

export type SetTrainingTypeAction = PayloadAction<TrainingType>;

export type SetTrainingsAction = PayloadAction<{
    trainingType: TrainingType;
    trainings: Trainings;
}>;

export type RemoveTrainingTypeAction = PayloadAction<string>;

export type AddExerciseAction = PayloadAction<Exercise>;

export type RemoveFormExerciseByIdAction = PayloadAction<string | number>;

export type RemoveFormExercisesByIdsAction = PayloadAction<Array<string | number>>;

export type FormModes = 'edit' | 'view' | 'new';

export type SetFormModeAction = PayloadAction<FormModes>;

export type TrainingModalDate = { iso: string; formated: string };

export type SetTrainingModalDateAction = PayloadAction<TrainingModalDate>;
