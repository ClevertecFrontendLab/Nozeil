import { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Space, Typography } from 'antd';
import ContentLayout from '@components/auth-page/content-layout/content-layout';
import { ROUTES } from '@constants/routes';
import { RESULT_CARD_TYPE_KEYS } from '../auth-page.constants';
import type { ResultCardTypeValues } from '../auth-page.types';

import styles from './result-card.module.css';

interface ResultCardProps {
    title: string;
    text: ReactNode;
    children: ReactNode;
    head: ReactNode;
    type?: ResultCardTypeValues;
}

const { DEFAULT, CARD_PB_56, CARD_PB_56_BREAKPOINT } = RESULT_CARD_TYPE_KEYS;

const ResultCard = ({ head, title, text, type = DEFAULT, children }: ResultCardProps) => {
    const { state } = useLocation();
    const cardClassName = {
        [DEFAULT]: '',
        [CARD_PB_56]: styles.card,
        [CARD_PB_56_BREAKPOINT]: styles.cardBreakpoint,
    }[type];

    if (!state?.from) {
        return <Navigate to={ROUTES.AUTH} replace />;
    }

    return (
        <ContentLayout cardClassName={cardClassName}>
            <Space className={styles.space} direction='vertical' size='large' align='center'>
                {head}
                <div>
                    <Typography.Title className={styles.title} level={3}>
                        {title}
                    </Typography.Title>
                    <Typography.Text className={styles.text} type='secondary'>
                        {text}
                    </Typography.Text>
                </div>
                {children}
            </Space>
        </ContentLayout>
    );
};

export default ResultCard;