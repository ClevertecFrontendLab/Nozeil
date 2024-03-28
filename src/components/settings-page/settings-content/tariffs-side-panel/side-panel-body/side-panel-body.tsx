import { CheckCircleOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { useGetUserInfoQuery } from '@services/endpoints/user';
import { Grid, Typography } from 'antd';

import { ComparisonList } from './comparison-list/comparison-list';
import { TariffSelection } from './tariff-selection';

import styles from './side-panel-body.module.css';

const { useBreakpoint } = Grid;

export const SidePanelBody = () => {
    const { data: userInfo } = useGetUserInfoQuery();
    const { xs } = useBreakpoint();

    return (
        <Flex className={styles.sidePanelBody} direction='column' gap='gap24'>
            <Flex direction='column' gap={{ xs: 'gap12', sm: 'gap24' }}>
                <Flex justify='justifyEnd' gap='gap14'>
                    <div className={styles.tariffLabelFree}>
                        <Typography.Text>FREE</Typography.Text>
                    </div>

                    <div className={styles.tariffLabelPro}>
                        <Typography.Text className={styles.proTariffLabelText}>PRO</Typography.Text>
                        {!xs && userInfo?.tariff && (
                            <CheckCircleOutlined className={styles.successIcon} />
                        )}
                    </div>
                </Flex>

                <ComparisonList />
                {!userInfo?.tariff && <TariffSelection />}
            </Flex>
        </Flex>
    );
};
