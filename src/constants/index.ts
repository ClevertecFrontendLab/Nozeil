export const HTTP_STATUS_CODES = {
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
} as const;

export const ERROR_MESSAGES = {
    EMAIL_NOT_FOUND: 'Email не найден',
} as const;

export const STORAGE_TOKEN_KEY = 'accessToken';

export const WIDTH_540 = 540;

export const NAV_MENU_LABELS = {
    CALENDAR: 'Календарь',
    WORKOUT: 'Тренировки',
    ACHIEVEMENTS: 'Достижения',
    PROFILE: 'Профиль',
    EXIT: 'Выход',
    DIVIDER: 'Divider',
} as const;

export const DATE_FORMATS = {
    ISO: 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]',
    DMY: 'DD.MM.YYYY',
    DM: 'DD.MM',
} as const;
