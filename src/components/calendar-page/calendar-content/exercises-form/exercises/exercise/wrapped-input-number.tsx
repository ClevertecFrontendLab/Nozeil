import { type InputNumberProps, Col, Form, InputNumber, Row, Typography } from 'antd';

import styles from './exercise.module.css';

type WrappedInputNumberProps = {
    id: string | number;
    name: string;
    title: string;
    flex: string;
    initialValue?: number;
    testId: string;
} & Omit<InputNumberProps, 'id'>;

export const WrappedInputNumber = ({
    id,
    name,
    initialValue,
    testId,
    min,
    placeholder,
    title,
    flex,
}: WrappedInputNumberProps) => (
    <Col flex={flex}>
        <Row gutter={[0, 6]}>
            <Typography.Text className={styles.text}>{title}</Typography.Text>

            <Form.Item name={[id, name]} initialValue={initialValue} noStyle={true}>
                <InputNumber
                    className={styles.input}
                    placeholder={placeholder}
                    min={min}
                    data-test-id={testId}
                />
            </Form.Item>
        </Row>
    </Col>
);
