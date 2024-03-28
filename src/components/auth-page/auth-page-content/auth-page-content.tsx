import { Link, Outlet, useLocation } from 'react-router-dom';
import { ContentLayout } from '@components/auth-page/content-layout/content-layout';
import { COMPOUND_ROUTES, ROUTES } from '@constants/routes';
import { Image,Tabs } from 'antd';

import styles from './auth-page-content.module.css';

import Logo from '/svg/logo.svg';

const items = [
    {
        label: (
            <Link className={styles.link} to='.'>
                Вход
            </Link>
        ),
        key: ROUTES.AUTH,
        children: <Outlet />,
    },
    {
        label: (
            <Link className={styles.link} to={ROUTES.REGISTRATION}>
                Регистрация
            </Link>
        ),
        key: COMPOUND_ROUTES.AUTH_REGISTRATION,
        children: <Outlet />,
    },
];

export const AuthPageContent = () => {
    const location = useLocation();
    const defaultActiveKey = location.pathname;

    return (
        <ContentLayout
            className={styles.space}
            title={<Image className={styles.logo} src={Logo} preview={false} alt='logo' />}
        >
            <Tabs
                className={styles.tabs}
                defaultActiveKey={defaultActiveKey}
                destroyInactiveTabPane={true}
                centered={true}
                items={items}
                size='large'
                color='red'
            />
        </ContentLayout>
    );
};
