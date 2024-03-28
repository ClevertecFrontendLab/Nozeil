import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import { ROUTES } from '@constants/routes';
import { type RowProps, Button, Row } from 'antd';
import classNames from 'classnames/bind';

import styles from './header-settings-row.module.css';

type HeaderSettingsRowProps = {
    rowClassName?: string;
    align?: RowProps['align'];
    hideIconOnTablet?: boolean;
    btnWithBackground?: boolean;
    children?: ReactNode;
};

const cx = classNames.bind(styles);

export const HeaderSettingsRow = ({
    rowClassName,
    align,
    hideIconOnTablet,
    btnWithBackground,
    children,
}: HeaderSettingsRowProps) => {
    const navigate = useNavigate();

    const justify = children ? 'space-between' : 'end';
    const btnClassName = btnWithBackground ? cx(styles.btn, styles.btnWithBackground) : styles.btn;
    const iconClassName = hideIconOnTablet
        ? cx(styles.btnIcon, styles.btnIconNone)
        : styles.btnIcon;

    const onClick = () => navigate(ROUTES.SETTINGS);

    return (
        <Row className={cx(styles.row, rowClassName)} justify={justify} align={align} wrap={false}>
            {children}
            <Button
                className={btnClassName}
                type='text'
                icon={<SettingOutlined className={iconClassName} />}
                data-test-id='header-settings'
                onClick={onClick}
            >
                Настройки
            </Button>
        </Row>
    );
};
