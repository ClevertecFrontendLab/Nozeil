import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PasswordsGroup } from '@components/passwords-group/passwords-group';
import { HTTP_STATUS_CODES } from '@constants/index';
import { COMPOUND_ROUTES } from '@constants/routes';
import type { ErrorResponse } from '@models/models';
import { useRegisterUserMutation } from '@services/endpoints/auth';

import { EmailInput } from '../../inputs/email-input';
import { INPUT_GROUP_TYPE_KEYS } from '../auth-page.constants';
import { InputGroup } from '../input-group/input-group';

import { AuthForm } from './auth-form/auth-form';
import type { OnFinishRegistrationValues } from './auth-forms.types';

export const RegistrationForm = () => {
    const [registerUser] = useRegisterUserMutation();
    const location = useLocation();
    const navigate = useNavigate();

    const onFinish = useCallback(
        async (values: OnFinishRegistrationValues) => {
            const options = { state: { from: location, values } };

            try {
                await registerUser({ email: values.email, password: values.password }).unwrap();

                navigate(COMPOUND_ROUTES.RESULT_SUCCESS_REGISTRATION, options);
            } catch (e) {
                const errorResponse = e as ErrorResponse;

                const route =
                    errorResponse.status === HTTP_STATUS_CODES.CONFLICT
                        ? COMPOUND_ROUTES.RESULT_ERROR_USER_EXIST
                        : COMPOUND_ROUTES.RESULT_ERROR_REGISTRATION;

                navigate(route, options);
            }
        },
        [location, navigate, registerUser],
    );

    useEffect(() => {
        if (location.state?.values) {
            onFinish(location?.state?.values);
        }
    }, [location, onFinish]);

    return (
        <AuthForm
            name='registration-form'
            googleButton={true}
            googleButtonText='Регистрация через Google'
            onFinish={onFinish}
            submitButtonTestId='registration-submit-button'
            shouldValidate={true}
        >
            <InputGroup type={INPUT_GROUP_TYPE_KEYS.XL} mobileBreakpoint={true}>
                <EmailInput testId='registration-email' />
                <PasswordsGroup
                    testId_1='registration-password'
                    testId_2='registration-confirm-password'
                />
            </InputGroup>
        </AuthForm>
    );
};
