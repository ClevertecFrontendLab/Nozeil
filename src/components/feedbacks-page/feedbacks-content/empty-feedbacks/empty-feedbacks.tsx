import { ReactNode } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectSider } from '@redux/slices/sider';
import { Card, Space, Typography } from 'antd';

import styles from './empty-feedbacks.module.css';

type EmptyFeedbackProps = {
    children: ReactNode;
};

export const EmptyFeedbacks = ({ children }: EmptyFeedbackProps) => {
    const collapsed = useAppSelector(selectSider);
    const cardClassName = collapsed ? styles.cardCollapsed : styles.card;

    return (
        <Space className={styles.space} align='center'>
            <Space className={styles.space} direction='vertical' align='center' size={20}>
                <Card className={cardClassName} bordered={false}>
                    <Space direction='vertical' size={48}>
                        <Typography.Title className={styles.title} level={3}>
                            Оставьте свой отзыв первым
                        </Typography.Title>
                        <Typography.Paragraph className={styles.subtitle} type='secondary'>
                            {`Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
Поделитесь своим мнением и опытом с другими пользователями, 
и помогите им сделать правильный выбор.`}
                        </Typography.Paragraph>
                    </Space>
                </Card>
                {children}
            </Space>
        </Space>
    );
};
