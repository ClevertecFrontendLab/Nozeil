import { SidePanel } from '@components/side-panel/side-panel';
import { SidePanelHead } from '@components/side-panel-head/side-panel-head';
import { DATE_FORMATS } from '@constants/index';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { closeSidePanel } from '@redux/slices/side-panel';
import { useGetTariffListQuery } from '@services/endpoints/catalogs';
import { useGetUserInfoQuery } from '@services/endpoints/user';
import { Typography } from 'antd';
import moment from 'moment';

import { SidePanelBody } from './side-panel-body/side-panel-body';
import { SubmitBtn } from './submit-btn/submit-btn';

import styles from './tariffs-side-panel.module.css';

export const TariffsSidePanel = () => {
    const { data: userInfo } = useGetUserInfoQuery();
    const { data: tariffList } = useGetTariffListQuery();

    const dispatch = useAppDispatch();

    const onClose = () => dispatch(closeSidePanel());

    const isData = userInfo && tariffList;

    return (
        isData && (
            <SidePanel
                className={styles.sidePanel}
                shouldCloseOnXs={false}
                footer={!userInfo.tariff && <SubmitBtn />}
                onClose={onClose}
                testId='tariff-sider'
            >
                <SidePanelHead onClose={onClose} title='Сравнить тарифы' />
                {userInfo?.tariff && (
                    <Typography.Title className={styles.proTariffActiveTitle} level={5}>
                        Ваш PRO tarif активен до{' '}
                        {moment(userInfo?.tariff.expired).format(DATE_FORMATS.DM)}
                    </Typography.Title>
                )}
                <SidePanelBody />
            </SidePanel>
        )
    );
};
