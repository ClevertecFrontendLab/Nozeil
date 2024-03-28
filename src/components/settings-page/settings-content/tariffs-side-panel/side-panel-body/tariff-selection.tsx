import { Flex } from '@components/flex/flex';
import { Typography } from 'antd';

import { TariffSelectionForm } from './tariff-selection-form/tariff-selection-form';

import styles from './side-panel-body.module.css';

export const TariffSelection = () => (
    <Flex direction='column' gap={{ xs: 'gap12', sm: 'gap24' }} testId='tariff-cost'>
        <Typography.Title className={styles.tariffSelectionTitle} level={5}>
            Стоимость тарифа
        </Typography.Title>
        <TariffSelectionForm />
    </Flex>
);
