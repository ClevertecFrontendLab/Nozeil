import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HeaderSettingsRow } from '@components/header-settings-row/header-settings-row';
import { ROUTES } from '@constants/routes';
import { Breadcrumb } from 'antd';

export const HeaderContent = () => (
    <Fragment>
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={ROUTES.MAIN}>Главная</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Календарь</Breadcrumb.Item>
        </Breadcrumb>
        <HeaderSettingsRow />
    </Fragment>
);
