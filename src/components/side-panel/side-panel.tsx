import { type ReactNode, useEffect } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { isSidePanelOpenSelector } from '@redux/slices/side-panel';
import { Drawer, Grid } from 'antd';
import classNames from 'classnames/bind';

import styles from './side-panel.module.css';

type SidePanelProps = {
    children: ReactNode;
    onClose: () => void;
    shouldCloseOnXs?: boolean;
    className?: string;
    footer?: ReactNode;
    testId?: string;
};

const cx = classNames.bind(styles);

const { useBreakpoint } = Grid;

export const SidePanel = ({
    children,
    onClose,
    footer,
    className,
    testId,
    shouldCloseOnXs = true,
}: SidePanelProps) => {
    const isOpen = useAppSelector(isSidePanelOpenSelector);
    const { xs } = useBreakpoint();

    useEffect(() => {
        if (shouldCloseOnXs) {
            onClose();
        }
    }, [onClose, shouldCloseOnXs, xs]);

    const drawerProps: { placement: 'bottom' | 'right'; height: number } = xs
        ? { placement: 'bottom', height: 555 }
        : { placement: 'right', height: 378 };

    return (
        <Drawer
            className={cx(styles.drawer, className)}
            open={isOpen}
            closable={false}
            width={408}
            maskStyle={{ backgroundColor: 'transparent' }}
            data-test-id={testId}
            footer={footer}
            onClose={onClose}
            destroyOnClose={true}
            {...drawerProps}
        >
            {children}
        </Drawer>
    );
};
