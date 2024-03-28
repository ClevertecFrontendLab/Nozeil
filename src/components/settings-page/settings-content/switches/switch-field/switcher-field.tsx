import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { Grid, Switch, Tooltip, TooltipProps, Typography } from 'antd';

import type { SwitchFieldProps } from '../switches.types';

import styles from './switch.module.css';

const { useBreakpoint } = Grid;

export const SwitchField = ({
    text,
    tooltip,
    maxWidth,
    defaultChecked,
    onChange,
    disabled,
    switchTestId,
    tooltipIconTestId,
}: SwitchFieldProps) => {
    const { xs } = useBreakpoint();

    const tooltipProps: TooltipProps = xs
        ? { placement: 'topLeft', align: { offset: [-24, 5] } }
        : { placement: 'bottomLeft', align: { offset: [-23, -2] } };
    const switchSize = xs ? 'small' : 'default';

    return (
        <Flex className={styles.switchField} justify='justifyBetween' align='alignCenter'>
            <Flex align='alignStart' gap='gap4'>
                <Typography.Text className={styles.switchFieldText} disabled={disabled}>
                    {text}
                </Typography.Text>
                <Tooltip
                    arrowPointAtCenter={true}
                    title={tooltip}
                    color='var(--neutral-gray-13)'
                    overlayClassName={styles.tooltipOverlay}
                    overlayStyle={{ maxWidth }}
                    {...tooltipProps}
                >
                    <ExclamationCircleOutlined
                        data-test-id={tooltipIconTestId}
                        style={{ fontSize: 16, color: 'var(--character-light-secondary-45)' }}
                    />
                </Tooltip>
            </Flex>
            <Switch
                defaultChecked={defaultChecked}
                size={switchSize}
                disabled={disabled}
                onChange={onChange}
                data-test-id={switchTestId}
            />
        </Flex>
    );
};
