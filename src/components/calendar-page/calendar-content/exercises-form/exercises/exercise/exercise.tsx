import { PlusOutlined } from '@ant-design/icons';
import { Col, Form, Grid, Input, Row, Typography } from 'antd';

import { NameInput } from './name-input';
import { WrappedInputNumber } from './wrapped-input-number';

import styles from './exercise.module.css';

const { useBreakpoint } = Grid;

type ExerciseProps = {
    id: string | number;
    testIdIndex: number;
    name?: string;
    replays?: number;
    weight?: number;
    approaches?: number;
};

export const Exercise = ({ id, name, replays, weight, approaches, testIdIndex }: ExerciseProps) => {
    const { xs } = useBreakpoint();

    const approachColWidth = 120;
    const gutter = { xs: 16, sm: 32 };
    const approachColFlex = xs ? approachColWidth + gutter.xs : approachColWidth + gutter.sm;

    return (
        <Row gutter={[0, 8]}>
            <Form.Item name={[id, 'id']} initialValue={id} noStyle={true} hidden={true}>
                <Input />
            </Form.Item>
            <NameInput id={id} initialValue={name} index={testIdIndex} />
            <Row gutter={gutter} wrap={false}>
                <WrappedInputNumber
                    flex={`${approachColFlex}px`}
                    title='Подходы'
                    id={id}
                    name='approaches'
                    initialValue={approaches}
                    addonBefore={<PlusOutlined />}
                    placeholder='1'
                    min={1}
                    testId={`modal-drawer-right-input-approach${testIdIndex}`}
                />

                <Col flex='auto'>
                    <Row wrap={false}>
                        <WrappedInputNumber
                            flex='89px'
                            title='Вес, кг'
                            id={id}
                            name='weight'
                            initialValue={weight}
                            placeholder='0'
                            min={0}
                            testId={`modal-drawer-right-input-weight${testIdIndex}`}
                        />

                        <Col>
                            <Row className={styles.xRow} align='bottom'>
                                <Typography.Text className={styles.x} disabled={true}>
                                    x
                                </Typography.Text>
                            </Row>
                        </Col>

                        <WrappedInputNumber
                            flex='89px'
                            title='Количество'
                            id={id}
                            name='replays'
                            initialValue={replays}
                            placeholder='3'
                            min={1}
                            testId={`modal-drawer-right-input-quantity${testIdIndex}`}
                        />
                    </Row>
                </Col>
            </Row>
        </Row>
    );
};
