import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import { COMPOUND_ROUTES } from '@constants/routes';
import { useConfirmEmailMutation } from '@services/endpoints/auth';

import styles from './custom-verification-input.module.css';

type CustomVerificationInputProps = {
    isError: boolean;
    setIsError: (isError: boolean) => void;
};

export const CustomVerificationInput = ({ isError, setIsError }: CustomVerificationInputProps) => {
    const [input, setInput] = useState('');
    const [confirmEmail] = useConfirmEmailMutation();
    const navigate = useNavigate();
    const { state } = useLocation();

    const onChange = (value: string) => setInput(value);

    const onComplete = async (code: string) => {
        if (state?.email) {
            try {
                await confirmEmail({ email: state.email, code }).unwrap();
                navigate(COMPOUND_ROUTES.AUTH_CHANGE_PASSWORD);
            } catch {
                setIsError(true);
                setInput('');
            }
        }
    };

    const verificationInputClassNames = isError
        ? {
              character: styles.inputError,
              characterSelected: styles.inputSelectedError,
          }
        : {
              character: styles.input,
              characterSelected: styles.inputSelected,
          };

    return (
        <VerificationInput
            classNames={{
                container: styles.container,
                characterInactive: styles.input,
                ...verificationInputClassNames,
            }}
            placeholder=''
            value={input}
            onComplete={onComplete}
            onChange={onChange}
            inputProps={{ 'data-test-id': 'verification-input' }}
        />
    );
};
