export type ErrorResponse = {
    status: number;
    data: { statusCode: number; error: string; message: string };
};

export type AuthUserBody = {
    email: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
};

export type CheckEmailBody = {
    email: string;
};

export type CheckEmailResponse = {
    email: string;
    message: string;
};

export type ConfirmEmailBody = {
    email: string;
    code: string;
};

export type ConfirmEmailResponse = {
    email: string;
    message: string;
};

export type ChangePasswordBody = {
    password: string;
    confirmPassword: string;
};

export type ChangePasswordResponse = {
    message: string;
};

export type Feedback = {
    id: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string;
    rating: number;
    createdAt: string;
};

export type GetFeedbacksResponse = Feedback[];

export type CreateFeedbackBody = {
    message: string;
    rating: number;
};

export type TrainingExercise = {
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    isImplementation: boolean;
};

type NewTraining = {
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    parameters: {
        repeat: boolean;
        period: number;
        jointTraining: boolean;
        participants: string[];
    };
    exercises: TrainingExercise[];
};

export type TrainingResponse = NewTraining & {
    _id: string;
    exercises: Array<TrainingExercise & {
        _id: string;
    }>;
};

export type GetTrainingResponse = TrainingResponse[];

type TrainingListItem = {
    name: string;
    key: string;
};

export type TrainingListResponse = TrainingListItem[];

export type CreateTrainingResponse = TrainingResponse;
export type TrainingBody = Omit<NewTraining, 'userId'>;
export type UpdateTrainingArgs = { id: string; body: TrainingBody };

export type UserInfoResponse = {
    email: string;
    firstName: string;
    lastName: string;
    birthday: string;
    imgSrc: string;
    readyForJointTraining: boolean;
    sendNotification: boolean;
    tariff: {
        tariffId: string;
        expired: string;
    };
};

export type UpdateUserBody = {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    birthday?: string;
    imgSrc?: string;
    readyForJointTraining?: boolean;
    sendNotification?: boolean;
};

type TariffItem = {
    _id: string;
    name: string;
    periods: Array<{
        text: string;
        cost: number;
        days: number;
    }>;
};

export type TariffListResponse = TariffItem[];

export type BuyTariffBody = {
    tariffId: string;
    days: number;
};
