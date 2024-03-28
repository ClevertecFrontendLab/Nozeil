import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { Flex } from '@components/flex/flex';
import { useGetUserInfoQuery } from '@services/endpoints/user';
import { Form } from 'antd';
import moment from 'moment';

import { useFormHandlers } from './hooks/use-form-handlers';
import { ProfileAlert } from './profile-alert/profile-alert';
import { SubmitBtn } from './submit-btn/submit-btn';
import { PersonalGroup } from './personal-group';
import { PrivacyGroup } from './privacy-group';
import { FormValues } from './profile-content.types';

import styles from './profile-content.module.css';

export const ProfileContent = () => {
    const { data } = useGetUserInfoQuery();
    const [form] = Form.useForm<FormValues>();
    const { onFieldsChange, onFinish, onValuesChange } = useFormHandlers(form);

    return (
        <ContentWrapper>
            <ProfileAlert />
            {data && (
                <Form
                    form={form}
                    className={styles.form}
                    initialValues={{
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        birthday: data.birthday && moment(data.birthday),
                        password: undefined,
                        'password-confirm': undefined,
                    }}
                    name='user-data-update-form'
                    autoComplete='off'
                    size='large'
                    onFinish={onFinish}
                    onValuesChange={onValuesChange}
                    onFieldsChange={onFieldsChange}
                >
                    <Flex direction='column' gap={{ xs: 'gap20', sm: 'gap24' }}>
                        <PersonalGroup />
                        <PrivacyGroup />
                        <SubmitBtn />
                    </Flex>
                </Form>
            )}
        </ContentWrapper>
    );
};
