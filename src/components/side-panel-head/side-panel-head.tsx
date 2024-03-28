import { type ReactNode } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { Button, Typography } from 'antd';

import styles from './side-panel-head.module.css';

type SidePanelHeadProps = {
    title: string;
    onClose: () => void;
    icon?: ReactNode;
};

export const SidePanelHead = ({ icon, title, onClose }: SidePanelHeadProps) => (
    <Flex className={styles.wrapper} gap='gap10' align='alignCenter'>
        {icon}
        <Typography.Title className={styles.title} level={4}>
            {title}
        </Typography.Title>
        <Button
            className={styles.closeBtn}
            type='text'
            icon={<CloseOutlined style={{ color: 'var(--character-light-secondary-45)' }} />}
            data-test-id='modal-drawer-right-button-close'
            onClick={onClose}
        />
    </Flex>
);
