import { type ReactNode } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import EmptyIcon from '@assets/icons/empty.svg?react';
import { Flex } from '@components/flex/flex';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { openSidePanel } from '@redux/slices/side-panel';
import {
    resetFormExercises,
    trainingModalSelector,
} from '@redux/slices/training-modal/training-modal';
import { Button, Card, Empty } from 'antd';

import { Exercises } from './exercises';
import { ExercisesSelect } from './exercises-select';

import styles from '../training-modal.module.css';

type ExercisesCardProps = {
    saveButton: ReactNode;
    resetForm: () => void;
    onArrowLeftClick: () => void;
};

export const ExercisesCard = ({ saveButton, resetForm, onArrowLeftClick }: ExercisesCardProps) => {
    const { exercises, formExercises, isExerciseBtnLocked } = useAppSelector(trainingModalSelector);
    const dispatch = useAppDispatch();

    const onAddExerciseClick = () => {
        if (!formExercises.length) {
            dispatch(resetFormExercises());
        }

        dispatch(openSidePanel());
    };

    const content = exercises.length ? (
        <Exercises onAdd={onAddExerciseClick} />
    ) : (
        <Empty description='' image={<EmptyIcon />} imageStyle={{ height: 91, marginBottom: 0 }} />
    );

    return (
        <Card
            className={styles.card}
            bordered={false}
            title={
                <Flex className={styles.cardTitleWrapper}>
                    <ArrowLeftOutlined
                        onClick={onArrowLeftClick}
                        data-test-id='modal-exercise-training-button-close'
                    />
                    <ExercisesSelect reset={resetForm} />
                </Flex>
            }
            actions={[
                <Flex direction='column' gap='gap8'>
                    <Button
                        block={true}
                        type='default'
                        onClick={onAddExerciseClick}
                        disabled={isExerciseBtnLocked}
                    >
                        Добавить упражнения
                    </Button>
                    {saveButton}
                </Flex>,
            ]}
            data-test-id='modal-create-exercise'
        >
            {content}
        </Card>
    );
};
