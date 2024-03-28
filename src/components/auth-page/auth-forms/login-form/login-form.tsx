import { useLocation, useNavigate } from 'react-router-dom';
import { INPUT_GROUP_TYPE_KEYS } from '@components/auth-page/auth-page.constants';
import { InputGroup } from '@components/auth-page/input-group/input-group';
import { COMPOUND_ROUTES, ROUTES } from '@constants/routes';
import { useAuth } from '@hooks/use-auth';
import { useLoginUserMutation } from '@services/endpoints/auth';

import { EmailInput } from '../../../inputs/email-input';
import { PasswordInput } from '../../../inputs/password-input';
import { AuthForm } from '../auth-form/auth-form';
import type { OnFinishLoginValues } from '../auth-forms.types';

import { PasswordOptions } from './password-options/password-options';

import styles from './login-form.module.css';

export const LoginForm = () => {
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const onFinish = async ({ email, password, remember }: OnFinishLoginValues) => {
        const options = { state: { from: location } };

        try {
            const { accessToken } = await loginUser({
                email,
                password,
            }).unwrap();

            signin(accessToken, () => navigate(ROUTES.MAIN, options), remember);
        } catch {
            navigate(COMPOUND_ROUTES.RESULT_ERROR_LOGIN, options);
        }
    };

    return (
        <AuthForm
            className={styles.loginForm}
            name='login-form'
            googleButton={true}
            googleButtonText='Войти через Google'
            onFinish={onFinish}
            submitButtonTestId='login-submit-button'
        >
            <InputGroup type={INPUT_GROUP_TYPE_KEYS.LG}>
                <EmailInput required={true} testId='login-email' />
                <PasswordInput testId='login-password' />
            </InputGroup>

            <PasswordOptions />
        </AuthForm>
    );
};
