import { type ReactNode } from 'react';
import { Card, Space } from 'antd';
import classNames from 'classnames/bind';

import styles from './content-layout.module.css';

type AuthPageLayoutProps = {
    children: ReactNode;
    className?: string;
    title?: ReactNode;
    cardClassName?: string;
};

const cx = classNames.bind(styles);

export const ContentLayout = ({
    className,
    children,
    title,
    cardClassName,
}: AuthPageLayoutProps) => (
    <Space className={cx(styles.space, className)} size={0}>
        <Card className={cx(styles.card, cardClassName)} bordered={false} title={title}>
            {children}
        </Card>
    </Space>
);
