import { Form, Input } from 'antd';
import { type Rule } from 'antd/lib/form';

import { INPUT_NAMES } from '../auth-page/auth-page.constants';

import { passwordPattern } from './regex';

import styles from './inputs.module.css';

type PasswordInputProps = {
    testId?: string;
    name?: string;
    message?: string;
    placeholder?: string;
    help?: string;
    rules?: Rule[];
    required?: boolean;
};

export const PasswordInput = ({
    name = INPUT_NAMES.PASSWORD,
    message = '',
    placeholder = 'Пароль',
    help,
    rules: additionalRules,
    testId,
    required = true,
}: PasswordInputProps) => {
    const rules: Rule[] = [
        {
            required,
            pattern: passwordPattern,
            message,
        },
    ];

    if (additionalRules) {
        rules.push(...additionalRules);
    }

    return (
        <Form.Item className={styles.password} name={name} help={help} rules={rules}>
            <Input.Password
                className={styles.input}
                placeholder={placeholder}
                data-test-id={testId}
            />
        </Form.Item>
    );
};
