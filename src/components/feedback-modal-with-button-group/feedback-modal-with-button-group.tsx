import { type ReactNode, Fragment, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { ModalWithShadowMd } from '@components/modal-with-shadow-md/modal-with-shadow-md';
import { WIDTH_540 } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import {
    closeFeedbackModal,
    isFeedbackModalOpenSelector,
    openFeedbackModal,
} from '@redux/slices/feedback-modal';
import { Button } from 'antd';
import classNames from 'classnames/bind';

import { FORM_NAME } from '../feedbacks-page/feedbacks-content/feedback-content.constants';

import { FeedbackForm } from './feedback-form/feedback-form';
import { ModalError } from './modal-error/modal-error';
import { ModalSuccess } from './modal-success/modal-success';

import styles from './feedback-modal-with-button-group.module.css';

type FeedbackModalWithButtonGroupProps = {
    btnGroupClassName?: string;
    additonalButton?: ReactNode;
    maskStyleColor?: string;
};

const cx = classNames.bind(styles);

export const FeedbackModalWithButtonGroup = ({
    additonalButton,
    btnGroupClassName,
    maskStyleColor,
}: FeedbackModalWithButtonGroupProps) => {
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const isOpen = useAppSelector(isFeedbackModalOpenSelector);
    const dispatch = useAppDispatch();

    const openModal = () => dispatch(openFeedbackModal());
    const closeModal = () => dispatch(closeFeedbackModal());

    return (
        <Fragment>
            <ModalSuccess />
            <ModalError />

            <ModalWithShadowMd
                className={styles.modal}
                open={isOpen}
                centered={true}
                width={WIDTH_540}
                title='Ваш отзыв'
                closeIcon={<CloseOutlined style={{ fontSize: 14 }} />}
                maskStyle={{ backgroundColor: maskStyleColor }}
                footer={
                    <Button
                        form={FORM_NAME}
                        className={styles.btn}
                        type='primary'
                        size='large'
                        htmlType='submit'
                        disabled={isSubmitDisabled}
                        data-test-id='new-review-submit-button'
                    >
                        Опубликовать
                    </Button>
                }
                onCancel={closeModal}
                zIndex={10}
            >
                <FeedbackForm disableSubmit={(disabled) => setIsSubmitDisabled(disabled)} />
            </ModalWithShadowMd>

            <Flex
                className={cx(styles.btnGroup, btnGroupClassName)}
                direction={{ sm: 'row', xs: 'column' }}
                align='alignCenter'
                gap={{ sm: 'gap8', xs: 'gap16' }}
            >
                <Button
                    block={true}
                    className={styles.btn}
                    type='primary'
                    size='large'
                    onClick={openModal}
                    data-test-id='write-review'
                >
                    Написать отзыв
                </Button>

                {additonalButton}
            </Flex>
        </Fragment>
    );
};
