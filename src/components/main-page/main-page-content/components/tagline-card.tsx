import { Card, Typography } from 'antd';

import styles from '../main-page-content.module.css';

export const TaglineCard = () => (
    <Card className={styles.card} bordered={false}>
        <Typography.Text className={styles.taglineText}>
            {'CleverFit\u00a0— это не\u00a0просто приложение, а\u00a0твой личный помощник в\u00a0мире фитнеса. Не\u00a0откладывай на\u00a0завтра\u00a0— начни тренироваться уже сегодня!'}
        </Typography.Text>
    </Card>
);
