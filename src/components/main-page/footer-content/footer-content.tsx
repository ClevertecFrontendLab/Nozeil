import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { FeedbackNavBtn } from '@components/feedbacks-nav-btn/feedbacks-nav-btn';
import { Button, Card } from 'antd';

import styles from './footer-content.module.css';

const actions = [
    <Button type='text' className={styles.cardActionBtn} icon={<AndroidFilled key='android' />}>
        Android OS
    </Button>,
    <Button type='text' className={styles.cardActionBtn} icon={<AppleFilled key='apple' />}>
        Apple iOS
    </Button>,
];

export const FooterContent = () => (
    <div className={styles.space}>
        <FeedbackNavBtn>Смотреть отзывы</FeedbackNavBtn>

        <Card bordered={false} className={styles.card} actions={actions}>
            <Card.Meta
                className={styles.cardMeta}
                title={
                    <Button className={styles.cardBtnLink} type='link' size='large'>
                        Скачать на телефон
                    </Button>
                }
                description={
                    <Button className={styles.cardBtnLink} type='link' disabled={true}>
                        Доступно в PRO-тарифе
                    </Button>
                }
            />
        </Card>
    </div>
);
