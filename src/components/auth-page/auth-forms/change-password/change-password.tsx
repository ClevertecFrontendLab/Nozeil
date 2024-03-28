import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { COMPOUND_ROUTES } from '@constants/routes';
import { useChangePasswordMutation } from '@services/endpoints/auth';
import { Typography } from 'antd';

import { PasswordsGroup } from '../../../passwords-group/passwords-group';
import { INPUT_GROUP_TYPE_KEYS } from '../../auth-page.constants';
import { ContentLayout } from '../../content-layout/content-layout';
import { InputGroup } from '../../input-group/input-group';
import { AuthForm } from '../auth-form/auth-form';
import type { OnFinishChangePasswordValues } from '../auth-forms.types';

import styles from './change-password.module.css';

export const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation();
    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = useCallback(
        async (values: OnFinishChangePasswordValues) => {
            const options = {
                state: { from: location, values },
            };

            try {
                await changePassword({
                    password: values.password,
                    confirmPassword: values['password-confirm'],
                }).unwrap();
                navigate(COMPOUND_ROUTES.RESULT_SUCCESS_CHANGE_PASSWORD, options);
            } catch {
                navigate(COMPOUND_ROUTES.RESULT_ERROR_CHANGE_PASSWORD, options);
            }
        },
        [changePassword, location, navigate],
    );

    useEffect(() => {
        if (location?.state?.values) {
            onFinish(location.state.values);
        }
    }, [location, onFinish]);

    return (
        <ContentLayout>
            <AuthForm
                name='change-password-form'
                onFinish={onFinish}
                submitButtonClassName={styles.btn}
                submitButtonText='Сохранить'
                submitButtonTestId='change-submit-button'
                shouldValidate={true}
            >
                <Typography.Title level={3} className={styles.title}>
                    Восстановление аккауанта
                </Typography.Title>
                <InputGroup type={INPUT_GROUP_TYPE_KEYS.XL}>
                    <PasswordsGroup
                        placeholder_1='Новый пароль'
                        testId_1='change-password'
                        testId_2='change-confirm-password'
                    />
                </InputGroup>
            </AuthForm>
        </ContentLayout>
    );
};
