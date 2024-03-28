export type FeedbackFormProps = {
    disableSubmit: (disable: boolean) => void;
};

export type OnFinishFeedbackValues = {
    message: string;
    rating: number;
};
