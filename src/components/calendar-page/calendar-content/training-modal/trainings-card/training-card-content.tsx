import EmptyIcon from '@assets/icons/empty.svg?react';
import { Flex } from '@components/flex/flex';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { trainingModalDateSelector } from '@redux/slices/training-modal/training-modal';
import { Empty } from 'antd';

import { useGetTrainingQueryWithSkip } from '../../hooks/use-get-training-with-skip';

import { Training } from './training';

import styles from '../training-modal.module.css';

type TrainingCardContentProps = {
    areTrainingsEmpty: boolean;
};

export const TrainingCardContent = ({ areTrainingsEmpty }: TrainingCardContentProps) => {
    const date = useAppSelector(trainingModalDateSelector);
    const { filteredTrainings } = useGetTrainingQueryWithSkip(date.iso);

    const content = areTrainingsEmpty ? (
        <Empty description='' image={<EmptyIcon />} imageStyle={{ height: 64, marginBottom: 0 }} />
    ) : (
        <Flex className={styles.trainings} direction='column' align='alignStart' gap='gap4'>
            {filteredTrainings?.map(({ _id, isImplementation, name, exercises }, index) => (
                <Training
                    key={_id}
                    _id={_id}
                    name={name}
                    isImplementation={isImplementation}
                    exercises={exercises}
                    index={index}
                />
            ))}
        </Flex>
    );

    return content;
};
