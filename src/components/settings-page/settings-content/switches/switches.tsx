import { Flex } from '@components/flex/flex';
import { useGetUserInfoQuery, useUpdateUserInfoMutation } from '@services/endpoints/user';

import { SwitchField } from './switch-field/switcher-field';
import { FieldsData } from './switches.types';

import styles from './switches.module.css';

export const Switches = () => {
    const { data } = useGetUserInfoQuery();
    const [updateUser] = useUpdateUserInfoMutation();

    const fieldsData: FieldsData = [
        {
            id: 0,
            text: 'Открыт для совместных тренировок',
            tooltip: `включеная функция позволит участвовать 
в совместных тренировках`,
            maxWidth: 205,
            defaultChecked: data?.readyForJointTraining,
            switchTestId: 'tariff-trainings',
            tooltipIconTestId: 'tariff-trainings-icon',
            onChange: async (readyForJointTraining) => {
                try {
                    await updateUser({ readyForJointTraining }).unwrap();
                } catch (e) {
                    console.error(e);
                }
            },
        },
        {
            id: 1,
            text: 'Уведомления',
            tooltip: 'включеная функция позволит получать уведомления об активностях',
            maxWidth: 219,
            defaultChecked: data?.sendNotification,
            switchTestId: 'tariff-notifications',
            tooltipIconTestId: 'tariff-notifications-icon',
            onChange: async (sendNotification) => {
                try {
                    await updateUser({ sendNotification }).unwrap();
                } catch (e) {
                    console.error(e);
                }
            },
        },
        {
            id: 2,
            text: 'Тёмная тема',
            tooltip: 'темная тема доступна для PRO tarif',
            maxWidth: 113,
            disabled: !data?.tariff,
            switchTestId: 'tariff-theme',
            tooltipIconTestId: 'tariff-theme-icon',
        },
    ];

    return (
        <Flex className={styles.wrapper} direction='column' gap={{ xs: 'gap24', sm: 'gap16' }}>
            {data &&
                fieldsData.map(
                    ({
                        id,
                        text,
                        tooltip,
                        defaultChecked,
                        maxWidth,
                        disabled,
                        onChange,
                        switchTestId,
                        tooltipIconTestId,
                    }) => (
                        <SwitchField
                            key={id}
                            text={text}
                            tooltip={tooltip}
                            maxWidth={maxWidth}
                            defaultChecked={defaultChecked}
                            disabled={disabled}
                            onChange={onChange}
                            switchTestId={switchTestId}
                            tooltipIconTestId={tooltipIconTestId}
                        />
                    ),
                )}
        </Flex>
    );
};
