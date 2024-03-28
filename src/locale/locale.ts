import calendarLocale from 'antd/es/date-picker/locale/ru_RU';
import antLocale from 'antd/es/locale/ru_RU';
import { PickerLocale } from 'antd/lib/date-picker/generatePicker';

const ruLocale: PickerLocale = {
    ...calendarLocale,
    lang: {
        ...calendarLocale.lang,
        shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        shortMonths: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ],
    },
    timePickerLocale: { ...calendarLocale.timePickerLocale },
};

export const locale = {
    ...antLocale,
    Calendar: ruLocale,
    DatePicker: ruLocale,
    Upload: { ...antLocale.Upload, uploading: 'Загружаем' },
};
