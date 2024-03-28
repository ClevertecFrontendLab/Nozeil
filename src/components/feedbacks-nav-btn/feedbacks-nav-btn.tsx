import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { Button } from 'antd';
import classNames from 'classnames/bind';

import styles from './feedbacks-nav-btn.module.css';

type FeedbackNavBtnProps = {
    children: ReactNode;
    className?: string;
};

const cx = classNames.bind(styles);

export const FeedbackNavBtn = ({ children, className }: FeedbackNavBtnProps) => {
    const navigate = useNavigate();

    const onClick = () => navigate(ROUTES.FEEDBACKS);

    return (
        <Button
            className={cx(styles.btn, className)}
            onClick={onClick}
            type='link'
            size='large'
            data-test-id='see-reviews'
        >
            {children}
        </Button>
    );
};
