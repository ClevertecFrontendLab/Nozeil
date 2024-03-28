import { Flex } from '@components/flex/flex';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { openSidePanel } from '@redux/slices/side-panel';
import { Typography } from 'antd';

import { CardExtra } from './card-extra';
import { FreeCard } from './free-card';
import { ProCard } from './pro-card';

import styles from './tariffs.module.css';

export const Tariffs = () => {
    const dispatch = useAppDispatch();

    const onClick = () => dispatch(openSidePanel());

    return (
        <Flex direction='column' gap='gap16'>
            <Typography.Title className={styles.title} level={4}>
                Мой тариф
            </Typography.Title>

            <Flex
                direction={{ xs: 'column', sm: 'row' }}
                align='alignCenter'
                gap={{ xs: 'gap12', sm: 'gap24' }}
            >
                <FreeCard extra={<CardExtra onClick={onClick} />} />
                <ProCard extra={<CardExtra onClick={onClick} />} onClick={onClick} />
            </Flex>
        </Flex>
    );
};
