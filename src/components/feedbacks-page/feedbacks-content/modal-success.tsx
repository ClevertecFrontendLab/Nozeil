import { ModalWithShadowMd } from '@components/modal-with-shadow-md/modal-with-shadow-md';
import { ResultButton } from '@components/result-button/result-button';
import { WIDTH_540 } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import {
    closeSuccessFeedbackModal,
    isSuccessFeedbackModalOpenSelector,
} from '@redux/slices/success-feedback-modal';
import { Result, Typography } from 'antd';

export const ModalSuccess = () => {
    const isOpen = useAppSelector(isSuccessFeedbackModalOpenSelector);
    const dispatch = useAppDispatch();

    const onClick = () => dispatch(closeSuccessFeedbackModal());

    return (
        <ModalWithShadowMd
            open={isOpen}
            closable={false}
            centered
            width={WIDTH_540}
            footer={null}
            maskStyle={{ backgroundColor: 'var(--blue-1)' }}
        >
            <Result
                status='success'
                title={<Typography.Title level={3}>Отзыв успешно опубликован</Typography.Title>}
                extra={
                    <ResultButton block onClick={onClick}>
                        Отлично
                    </ResultButton>
                }
            />
        </ModalWithShadowMd>
    );
};
