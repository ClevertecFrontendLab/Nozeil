import { type ReactNode } from 'react';
import { Layout } from 'antd';

import { SIDER_SIZES } from './sider.constants';

import styles from './sider.module.css';

type SiderProps = {
    isBreakpoint: boolean;
    onBreakpoint: (broken: boolean) => void;
    collapsed: boolean;
    children: ReactNode;
};

export const Sider = ({ isBreakpoint, onBreakpoint, collapsed, children }: SiderProps) => {
    const sizes = isBreakpoint
        ? { width: SIDER_SIZES.WIDTH_XS, collapsedWidth: SIDER_SIZES.COLLAPSED_WIDTH_XS }
        : { width: SIDER_SIZES.WIDTH, collapsedWidth: SIDER_SIZES.COLLAPSED_WIDTH };

    return (
        <Layout.Sider
            breakpoint='md'
            className={styles.sider}
            collapsed={collapsed}
            collapsedWidth={sizes.collapsedWidth}
            collapsible={true}
            trigger={null}
            width={sizes.width}
            theme='light'
            onBreakpoint={onBreakpoint}
        >
            {children}
        </Layout.Sider>
    );
};
