import { ModalWithShadowMd } from '@components/modal-with-shadow-md/modal-with-shadow-md';
import { ResultButton } from '@components/result-button/result-button';
import { WIDTH_540 } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import {
    closeErrorFeedbackModal,
    isErrorFeedbackModalOpenSelector,
} from '@redux/slices/error-feedback-modal';
import { openFeedbackModal } from '@redux/slices/feedback-modal';
import { Result, Space, Typography } from 'antd';

import styles from './modal-error.module.css';

export const ModalError = () => {
    const isOpen = useAppSelector(isErrorFeedbackModalOpenSelector);
    const dispatch = useAppDispatch();

    const onClose = () => dispatch(closeErrorFeedbackModal());

    const onRepeat = () => {
        dispatch(closeErrorFeedbackModal());
        dispatch(openFeedbackModal());
    };

    return (
        <ModalWithShadowMd
            open={isOpen}
            closable={false}
            centered={true}
            width={WIDTH_540}
            footer={null}
            maskStyle={{ backgroundColor: 'var(--blue-1)' }}
        >
            <Result
                status='error'
                title={
                    <Typography.Title className={styles.title} level={3}>
                        Данные не сохранились
                    </Typography.Title>
                }
                subTitle='Что-то пошло не так. Попробуйте ещё раз.'
                extra={
                    <Space className={styles.space}>
                        <ResultButton
                            block={true}
                            onClick={onRepeat}
                            testId='write-review-not-saved-modal'
                        >
                            Написать отзыв
                        </ResultButton>
                        <ResultButton block={true} type='default' onClick={onClose}>
                            Закрыть
                        </ResultButton>
                    </Space>
                }
            />
        </ModalWithShadowMd>
    );
};
