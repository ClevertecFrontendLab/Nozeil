import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectIsTariffsSubmitDisabled } from '@redux/slices/tariffs';
import { Button } from 'antd';

import { FORM_NAME } from '../tariffs-side-panel.constants';

import styles from './submit-btn.module.css';

export const SubmitBtn = () => {
    const isSubmitDisabled = useAppSelector(selectIsTariffsSubmitDisabled);

    return (
        <Button
            className={styles.btn}
            disabled={isSubmitDisabled}
            type='primary'
            size='large'
            block={true}
            htmlType='submit'
            form={FORM_NAME}
            data-test-id='tariff-submit'
        >
            Выбрать и оплатить
        </Button>
    );
};
