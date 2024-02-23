import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '@services/api';
import { COMPOUND_ROUTES } from '@constants/routes';
import AuthForm from './auth-form/auth-form';
import EmailInput from '../inputs/email-input';
import { HTTP_STATUS_CODES } from '@constants/index';
import PasswordsGroup from '@components/auth-page/passwords-group/passwords-group';

import type { ErrorResponse } from '@models/models';
import type { OnFinishRegistrationValues } from './auth-forms.types';
import InputGroup from '../input-group/input-group';
import { INPUT_GROUP_TYPE_KEYS } from '../auth-page.constants';

const RegistrationForm = () => {
    const [registerUser] = useRegisterUserMutation();
    const location = useLocation();
    const navigate = useNavigate();

    const onFinish = async (values: OnFinishRegistrationValues) => {
        const options = { state: { from: location, values } };

        try {
            await registerUser({ email: values.email, password: values.password }).unwrap();

            navigate(COMPOUND_ROUTES.RESULT_SUCCESS_REGISTRATION, options);
        } catch (e) {
            const errorResponse = e as ErrorResponse;
            errorResponse.statusCode === HTTP_STATUS_CODES.CONFLICT
                ? navigate(COMPOUND_ROUTES.RESULT_ERROR_USER_EXIST, options)
                : navigate(COMPOUND_ROUTES.RESULT_ERROR_REGISTRATION, options);
        }
    };

    useEffect(() => {
        if (location?.state?.values) {
            onFinish(location?.state?.values);
        }
    }, []);

    return (
        <AuthForm
            name='registration-form'
            googleButton
            googleButtonText='Регистрация через Google'
            onFinish={onFinish}
        >
            <InputGroup type={INPUT_GROUP_TYPE_KEYS.XL} mobileBreakpoint>
                <EmailInput />
                <PasswordsGroup />
            </InputGroup>
        </AuthForm>
    );
};

export default RegistrationForm;