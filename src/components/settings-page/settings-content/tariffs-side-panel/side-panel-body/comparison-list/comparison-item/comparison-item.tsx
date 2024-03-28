import { CheckCircleFilled, CloseCircleOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { Typography } from 'antd';

import styles from './comparison-item.module.css';

type ComparisonProps = {
    text: string;
    includedInFree: boolean;
};

const fontSize = 18;

export const ComparisonItem = ({ text, includedInFree }: ComparisonProps) => {
    const checkIcon = <CheckCircleFilled style={{ fontSize }} />;

    const freeIcon = includedInFree ? (
        checkIcon
    ) : (
        <CloseCircleOutlined
            disabled={true}
            style={{ fontSize, color: 'var(--character-light-disable-25)' }}
        />
    );

    return (
        <Flex as='li' justify='justifyBetween'>
            <Typography.Text>{text}</Typography.Text>
            <Flex className={styles.iconsWrapper} justify='justifyBetween'>
                {freeIcon}
                {checkIcon}
            </Flex>
        </Flex>
    );
};
