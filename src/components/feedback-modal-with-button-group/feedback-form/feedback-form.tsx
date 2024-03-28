import { StarFilled, StarOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { openErrorFeedbackModal } from '@redux/slices/error-feedback-modal';
import { closeFeedbackModal } from '@redux/slices/feedback-modal';
import { openSuccessFeedbackModal } from '@redux/slices/success-feedback-modal';
import { useCreateFeedbackMutation } from '@services/endpoints/feedbacks';
import { type RateProps, Form, Input, Rate } from 'antd';

import { FORM_NAME } from '../../feedbacks-page/feedbacks-content/feedback-content.constants';

import type { FeedbackFormProps, OnFinishFeedbackValues } from './feedback-form.types';

import styles from './feedback-form.module.css';

const rateItemName = 'rating';

export const FeedbackForm = ({ disableSubmit }: FeedbackFormProps) => {
    const [trigger] = useCreateFeedbackMutation();
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const closeModal = () => dispatch(closeFeedbackModal());
    const openSuccessModal = () => dispatch(openSuccessFeedbackModal());
    const openErrorModal = () => dispatch(openErrorFeedbackModal());

    const onFieldsChange = () => {
        const hasErrors =
            form.getFieldsError().some(({ errors }) => errors.length) ||
            !form.getFieldValue(rateItemName);

        disableSubmit(hasErrors);
    };

    const onFinish = async (values: OnFinishFeedbackValues) => {
        try {
            await trigger(values).unwrap();
            openSuccessModal();
            form.resetFields();
        } catch {
            openErrorModal();
        } finally {
            closeModal();
        }
    };

    const character: RateProps['character'] = ({ index, value }) => {
        if (index !== undefined && value !== undefined) {
            return value > index ? <StarFilled /> : <StarOutlined />;
        }

        return null;
    };

    return (
        <Form
            form={form}
            name={FORM_NAME}
            layout='vertical'
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
        >
            <Form.Item
                className={styles.formItem}
                name={rateItemName}
                rules={[{ required: true, message: '' }]}
            >
                <Rate className={styles.rate} character={character} />
            </Form.Item>
            <Form.Item name='message' noStyle={true}>
                <Input.TextArea
                    placeholder='Напишите, что вам понравилось или не понравилось в нашем приложении, и как мы можем его улучшить'
                    autoSize={true}
                    className={styles.textarea}
                    size='middle'
                />
            </Form.Item>
        </Form>
    );
};
