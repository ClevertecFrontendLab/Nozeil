import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectSider, toogleCollapsed } from '@redux/slices/sider';
import { useGetUserInfoQuery } from '@services/endpoints/user';
import { Layout } from 'antd';

import { Logo } from './components/logo/logo';
import { NavMenu } from './components/nav-menu/nav-menu';
import { Sider } from './components/sider/sider';
import { Trigger } from './components/trigger/trigger';

import styles from './page-layout.module.css';

export const PageLayout = () => {
    useGetUserInfoQuery();

    const collapsed = useAppSelector(selectSider);
    const dispatch = useAppDispatch();
    const [isBreakpoint, setIsBreakpoint] = useState(false);

    const onTrigger = () => dispatch(toogleCollapsed());
    const collapsedAtBreakpoint = isBreakpoint ? !collapsed : collapsed;

    return (
        <Layout className={styles.layout}>
            <Sider
                collapsed={collapsedAtBreakpoint}
                isBreakpoint={isBreakpoint}
                onBreakpoint={setIsBreakpoint}
            >
                <Logo cropped={collapsed} isBreakpoint={isBreakpoint} />
                <Trigger
                    collapsed={collapsedAtBreakpoint}
                    onClick={onTrigger}
                    isBreakpoint={isBreakpoint}
                />
                <NavMenu />
            </Sider>
            <Outlet />
        </Layout>
    );
};
