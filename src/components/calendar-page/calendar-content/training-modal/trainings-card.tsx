import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import EmptyIcon from '@assets/icons/empty.svg?react';
import { TrainingBadge } from '@components/calendar-page/training-badge';
import { Flex } from '@components/flex/flex';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import {
    closeTrainingModal,
    setExerciseFormMode,
    setFormExercises,
    setReceivedExercises,
    setTrainings,
    switchToExercises,
} from '@redux/slices/training-modal/training-modal';
import { useGetTrainingListQuery } from '@services/endpoints/catalogs';
import { useGetTrainingQuery } from '@services/endpoints/training';
import { Button, Card, Empty, Row, Typography } from 'antd';
import { type ReactNode, useMemo } from 'react';

import styles from './training-modal.module.css';

type TrainingsCardProps = {
    date: ReactNode;
    iso: string;
};

export const TrainingsCard = ({ date, iso }: TrainingsCardProps) => {
    const { data: trainingList } = useGetTrainingListQuery();
    const { data } = useGetTrainingQuery(
        { name: undefined },
        {
            /* skip: previousLocations?.at(-1)?.location?.pathname !== ROUTES.MAIN, */
        },
    );
    const dispatch = useAppDispatch();
    const closeModal = () => dispatch(closeTrainingModal());

    const trainings = useMemo(() => data?.filter((training) => training.date === iso), [data, iso]);

    const trainingTypes = useMemo(() => trainings?.map((training) => training.name), [trainings]);

    const areTrainingsEmpty = !trainings?.length;

    const content = areTrainingsEmpty ? (
        <Empty description='' image={<EmptyIcon />} imageStyle={{ height: 64, marginBottom: 0 }} />
    ) : (
        <Flex className={styles.trainings} direction='column' align='alignStart' gap='gap4'>
            {trainings?.map((training) => (
                <Row className={styles.trainingWrapper} key={training._id} justify='space-between'>
                    <TrainingBadge className={styles.badge} text={training.name} />
                    <EditOutlined
                        className={styles.editIcon}
                        style={{ color: 'var(--primary-light-6)' }}
                        onClick={() => {
                            dispatch(
                                setTrainings({
                                    trainingType: { name: training.name, id: training._id },
                                    trainings,
                                }),
                            );
                            dispatch(setReceivedExercises(training.exercises));
                            dispatch(setExerciseFormMode('edit'));
                            dispatch(setFormExercises());

                            if (trainingTypes) {
                                dispatch(
                                    switchToExercises(
                                        trainingTypes.filter((type) => type !== training.name),
                                    ),
                                );
                            }
                        }}
                    />
                </Row>
            ))}
        </Flex>
    );

    const btnContent = areTrainingsEmpty ? 'Создать тренировку' : 'Добавить тренировку';

    return (
        <Card
            className={styles.card}
            bordered={false}
            actions={[
                <Button
                    className={styles.actionBtn}
                    block
                    type='primary'
                    size='large'
                    disabled={trainingList?.length === trainingTypes?.length}
                    onClick={() => {
                        if (trainingTypes) {
                            dispatch(switchToExercises(trainingTypes));
                        }

                        dispatch(setExerciseFormMode('new'));
                    }}
                >
                    {btnContent}
                </Button>,
            ]}
        >
            <Flex className={styles.cardHead} justify='justifyBetween'>
                <Flex direction='column' gap='gap4'>
                    <Typography.Text className={styles.title}>Тренировки на {date}</Typography.Text>
                    {areTrainingsEmpty && (
                        <Typography.Text className={styles.subtitle} disabled>
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
                />
            </Flex>
            {content}
        </Card>
    );
};
