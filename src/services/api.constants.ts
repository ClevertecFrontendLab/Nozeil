export const BASE_URL = 'https://marathon-api.clevertec.ru/';

export const AUTH_ENDPOINTS = {
    REGISTRATION: 'auth/registration',
    LOGIN: 'auth/login',
    CHECK_EMAIL: 'auth/check-email',
    CONFIRM_EMAIL: 'auth/confirm-email',
    CHANGE_PASSWORD: 'auth/change-password',
} as const;

export const CATALOGS_ENDPOINTS = {
    TRAINING_LIST: 'catalogs/training-list',
} as const;

export const FEEDBACKS_ENDPOINTS = {
    FEEDBACK: '/feedback',
} as const;

export const TRAINING_ENDPOINTS = {
    TRAINING: '/training',
} as const;
