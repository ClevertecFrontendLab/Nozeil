import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from 'antd';

import { RESULT_CARD_TYPE_KEYS, RESULT_ICON_TYPE_KEYS } from '../auth-page.constants';
import { ResultCard } from '../result-card/result-card';
import { ResultIcon } from '../result-icon/result-icon';

import { CustomVerificationInput } from './custom-verification-input/custom-verification-input';

import styles from './confirm-email.module.css';

export const ConfirmEmail = () => {
    const [isError, setIsError] = useState(false);
    const { state } = useLocation();

    const icon = isError ? (
        <ResultIcon type={RESULT_ICON_TYPE_KEYS.ERROR} />
    ) : (
        <ResultIcon type={RESULT_ICON_TYPE_KEYS.EXCLAMATION} />
    );

    return (
        <ResultCard
            type={RESULT_CARD_TYPE_KEYS.CARD_PB_56_BREAKPOINT}
            head={icon}
            title={`Введите код 
для восстановления аккауанта`}
            text={
                <span>
                    Мы отправили вам на e-mail <b>{state?.email}</b> <br />
                    шестизначный код. Введите его в поле ниже.
                </span>
            }
        >
            <CustomVerificationInput isError={isError} setIsError={setIsError} />
            <Typography.Text className={styles.text} type='secondary'>
                Не пришло письмо? Проверьте папку Спам.
            </Typography.Text>
        </ResultCard>
    );
};
