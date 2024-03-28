import { Flex } from '@components/flex/flex';

import { ComparisonItem } from './comparison-item/comparison-item';

import styles from '../side-panel-body.module.css';

const tariffsComparison = [
    { id: 0, text: 'Статистика за месяц', includedInFree: true },
    { id: 1, text: 'Статистика за всё время', includedInFree: false },
    { id: 2, text: 'Совместные тренировки', includedInFree: true },
    { id: 3, text: 'Участие в марафонах', includedInFree: false },
    { id: 4, text: 'Приложение iOS', includedInFree: false },
    { id: 5, text: 'Приложение Android', includedInFree: false },
    { id: 6, text: 'Индивидуальный Chat GPT', includedInFree: false },
];

export const ComparisonList = () => (
    <Flex
        as='ul'
        className={styles.comparisonList}
        direction='column'
        gap={{ xs: 'gap8', sm: 'gap16' }}
    >
        {tariffsComparison.map(({ id, text, includedInFree }) => (
            <ComparisonItem key={id} text={text} includedInFree={includedInFree} />
        ))}
    </Flex>
);
