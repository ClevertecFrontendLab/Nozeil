import { Button } from 'antd';

import styles from './tariffs.module.css';

type CardExtraProps = {
    onClick: () => void;
};

export const CardExtra = ({ onClick }: CardExtraProps) => (
    <Button className={styles.linkButton} type='link' onClick={onClick}>
        Подробнее
    </Button>
);
