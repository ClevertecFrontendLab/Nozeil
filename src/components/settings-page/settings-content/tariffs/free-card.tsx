import { CheckOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { Card, Typography } from 'antd';

import { FreeCardProps } from './tariffs.types';

import styles from './tariffs.module.css';

export const FreeCard = ({ extra }: FreeCardProps) => (
    <Card
        className={styles.card}
        title='FREE tarif'
        extra={extra}
        cover={<img src='/png/free.png' alt='tariff-cover' />}
        bordered={false}
    >
        <Flex
            className={styles.tariffStatus}
            justify='justifyCenter'
            align='alignCenter'
            gap='gap8'
        >
            <Typography.Text className={styles.tariffStatusText}>активен</Typography.Text>
            <CheckOutlined style={{ fontSize: 16, color: 'var(--primary-light-10)' }} />
        </Flex>
    </Card>
);
