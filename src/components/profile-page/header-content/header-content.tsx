import { Fragment } from 'react';
import { HeaderSettingsRow } from '@components/header-settings-row/header-settings-row';
import { Breadcrumb, Typography } from 'antd';

import styles from './header-content.module.css';

export const HeaderContent = () => (
    <Fragment>
        <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>Профиль</Breadcrumb.Item>
        </Breadcrumb>
        <HeaderSettingsRow rowClassName={styles.row} align='middle'>
            <Typography.Title className={styles.title} level={4}>
                Профиль
            </Typography.Title>
        </HeaderSettingsRow>
    </Fragment>
);
