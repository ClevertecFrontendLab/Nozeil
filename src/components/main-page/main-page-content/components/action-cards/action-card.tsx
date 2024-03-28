import { Button, Card, Col } from 'antd';

import type { ActionCardProps } from './action-cards.types';

import styles from './action-cards.module.css';

export const ActionCard = ({
    title,
    buttonIcon,
    buttonContent,
    testId,
    onClick,
}: ActionCardProps) => (
    <Col className={styles.col} span={8}>
        <Card className={styles.card} title={title} bordered={false}>
            <Button
                className={styles.btn}
                block={true}
                type='link'
                icon={buttonIcon}
                data-test-id={testId}
                onClick={onClick}
            >
                {buttonContent}
            </Button>
        </Card>
    </Col>
);
