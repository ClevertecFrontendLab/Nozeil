import { CloseOutlined } from '@ant-design/icons';
import { Flex } from '@components/flex/flex';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import {
    closeTrainingModal,
    setExerciseFormMode,
    switchToExercises,
} from '@redux/slices/training-modal/training-modal';
import { useGetTrainingListQuery } from '@services/endpoints/catalogs';
import { Button, Card, Typography } from 'antd';

import { useTrainingTypes } from './hooks/use-training-types';
import { TrainingCardContent } from './training-card-content';

import styles from '../training-modal.module.css';

export const TrainingsCard = () => {
    const { trainingQueryResult, trainingTypes, isPast, date } = useTrainingTypes();

    const { data: trainingList } = useGetTrainingListQuery();

    const dispatch = useAppDispatch();

    const closeModal = () => dispatch(closeTrainingModal());

    const areTrainingsEmpty = !trainingQueryResult.filteredTrainings?.length;

    const onCreateTraining = () => {
        if (trainingTypes) {
            dispatch(switchToExercises(trainingTypes));
        }

        dispatch(setExerciseFormMode('new'));
    };

    return (
        <Card
            className={styles.card}
            bordered={false}
            actions={[
                <Button
                    className={styles.actionBtn}
                    block={true}
                    type='primary'
                    size='large'
                    disabled={trainingList?.length === trainingTypes?.length || isPast}
                    onClick={onCreateTraining}
                >
                    Создать тренировку
                </Button>,
            ]}
            data-test-id='modal-create-training'
        >
            <Flex className={styles.cardHead} justify='justifyBetween'>
                <Flex direction='column' gap='gap4'>
                    <Typography.Text className={styles.title}>
                        Тренировки на <span className={styles.date}>{date.formated}</span>
                    </Typography.Text>
                    {areTrainingsEmpty && (
                        <Typography.Text className={styles.subtitle} disabled={true}>
                            Нет активных тренировок
                        </Typography.Text>
                    )}
                </Flex>

                <Button
                    className={styles.iconBtn}
                    type='text'
                    onClick={closeModal}
                    icon={
                        <CloseOutlined
                            style={{
                                color: 'var(--character-light-title-85)',
                                fontSize: 12,
                            }}
                        />
                    }
                    data-test-id='modal-create-training-button-close'
                />
            </Flex>
            <TrainingCardContent areTrainingsEmpty={areTrainingsEmpty} />
        </Card>
    );
};
