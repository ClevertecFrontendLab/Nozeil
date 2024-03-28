import { Form, Input } from 'antd';

import { INPUT_NAMES } from '../auth-page/auth-page.constants';

import { emailPattern } from './regex';

import styles from './inputs.module.css';

type EmailInputProps = {
    testId?: string;
    required?: boolean;
};

export const EmailInput = ({ testId, required }: EmailInputProps) => (
    <Form.Item
        className={styles.email}
        name={INPUT_NAMES.EMAIL}
        rules={[
            {
                required,
                pattern: emailPattern,
                message: '',
            },
        ]}
    >
        <Input className={styles.input} type='email' addonBefore='e-mail:' data-test-id={testId} />
    </Form.Item>
);
