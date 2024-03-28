import { type ReactNode } from 'react';
import { Button } from 'antd';

import styles from './result-button.module.css';

type ResultButtonProps = {
    onClick: () => void;
    children: ReactNode;
    testId?: string;
    block?: boolean;
    type?: 'primary' | 'default';
};

export const ResultButton = ({
    onClick,
    children,
    block,
    testId,
    type = 'primary',
}: ResultButtonProps) => (
    <Button
        className={styles.btn}
        block={block}
        type={type}
        size='large'
        onClick={onClick}
        data-test-id={testId}
    >
        {children}
    </Button>
);
