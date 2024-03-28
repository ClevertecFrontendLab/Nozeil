import { Fragment } from 'react';
import { EmailInput } from '@components/inputs/email-input';
import { PasswordsGroup } from '@components/passwords-group/passwords-group';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectProfileRequired } from '@redux/slices/profile';
import { Input, Typography } from 'antd';

import styles from './profile-content.module.css';

export const PrivacyGroup = () => {
    const required = useAppSelector(selectProfileRequired);

    return (
        <Fragment>
            <Typography.Title className={styles.privacyTitle} level={5}>
                Приватность и авторизация
            </Typography.Title>

            <Input.Group>
                <EmailInput testId='profile-email' />
                <PasswordsGroup
                    required={required}
                    testId_1='profile-password'
                    testId_2='profile-repeat-password'
                />
            </Input.Group>
        </Fragment>
    );
};
