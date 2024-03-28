import { Fragment } from 'react';
import { CalendarTwoTone } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { DATE_FORMATS } from '@constants/index';
import { useGetUserInfoQuery } from '@services/endpoints/user';
import { DatePicker, Form, Grid, Input, Typography } from 'antd';

import { UploadAvatar } from './upload-avatar/upload-avatar';
import { INPUT_NAMES } from './profile-content.constants';

import styles from './profile-content.module.css';

const iconColor = 'var(--character-light-disable-25)';
const { useBreakpoint } = Grid;

export const PersonalGroup = () => {
    const { data } = useGetUserInfoQuery();
    const { xs } = useBreakpoint();

    const personalWrapperDirection = xs ? 'column-reverse' : 'row';

    return (
        <Fragment>
            <Typography.Title className={styles.personalTitle} level={5}>
                Личная информация
            </Typography.Title>

            <Flex direction={personalWrapperDirection} gap='gap16'>
                <UploadAvatar imgSrc={data?.imgSrc} />

                <Flex className={styles.inputsWrapper} direction='column' gap='gap16'>
                    <Form.Item name={INPUT_NAMES.FIRST_NAME} noStyle={true}>
                        <Input
                            className={styles.input}
                            placeholder='Имя'
                            data-test-id='profile-name'
                        />
                    </Form.Item>
                    <Form.Item name={INPUT_NAMES.LAST_NAME} noStyle={true}>
                        <Input
                            className={styles.input}
                            placeholder='Фамилия'
                            data-test-id='profile-surname'
                        />
                    </Form.Item>
                    <Form.Item name={INPUT_NAMES.BIRTHDAY} noStyle={true}>
                        <DatePicker
                            className={styles.datePicker}
                            placeholder='Дата рождения'
                            format={DATE_FORMATS.DMY}
                            suffixIcon={
                                <CalendarTwoTone
                                    twoToneColor={[iconColor, iconColor]}
                                    style={{ fontSize: 12 }}
                                />
                            }
                            data-test-id='profile-birthday'
                        />
                    </Form.Item>
                </Flex>
            </Flex>
        </Fragment>
    );
};
