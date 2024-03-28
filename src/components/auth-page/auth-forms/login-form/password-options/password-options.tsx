import { INPUT_NAMES } from '@components/auth-page/auth-page.constants';
import { Checkbox, Form } from 'antd';

import { ForgotPasswordBtn } from './forgot-password-btn';

import styles from './password-options.module.css';

export const PasswordOptions = () => (
    <Form.Item className={styles.checkArea}>
        <Form.Item
            valuePropName='checked'
            name={INPUT_NAMES.CHECKBOX_REMEMBER_ME}
            noStyle={true}
        >
            <Checkbox defaultChecked={false} data-test-id='login-remember'>
                Запомнить меня
            </Checkbox>
        </Form.Item>

        <ForgotPasswordBtn />
    </Form.Item>
);
