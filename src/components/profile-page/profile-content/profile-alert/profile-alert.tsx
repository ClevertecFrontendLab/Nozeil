import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { closeProfileAlert, selectProfileIsAlert } from '@redux/slices/profile';
import { Alert } from 'antd';

import styles from './profile-alert.module.css';

export const ProfileAlert = () => {
    const isAlert = useAppSelector(selectProfileIsAlert);
    const dispatch = useAppDispatch();

    return isAlert ? (
        <Alert
            className={styles.alert}
            message='Данные профиля успешно обновлены'
            type='success'
            showIcon={true}
            closable={true}
            onClose={() => dispatch(closeProfileAlert())}
            data-test-id='alert'
        />
    ) : null;
};
