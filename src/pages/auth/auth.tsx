import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BackdropBlur } from '@components/auth-page/backdrop-blur/backdrop-blur';
import { Loader } from '@components/loader/loader';
import { useIsLoading } from '@hooks/use-is-loading';
import { Layout } from 'antd';

import styles from './auth.module.css';

const { Content } = Layout;

export const AuthPage = () => {
    const isLoading = useIsLoading();

    return (
        <Suspense fallback={<Loader />}>
            <Layout className={styles.layout}>
                {!isLoading && <BackdropBlur />}
                <Content className={styles.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Suspense>
    );
};
