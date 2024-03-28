import { type MouseEventHandler, Fragment } from 'react';
import { TrainingBadge } from '@components/calendar-page/training-badge';
import { Flex } from '@components/flex/flex';

import { useGetTrainingQueryWithSkip } from '../hooks/use-get-training-with-skip';

import styles from './cell-content.module.css';

type CellContentProps = {
    iso: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    breakpoint?: boolean;
};

export const CellContent = ({ breakpoint, iso, onClick }: CellContentProps) => {
    const { filteredTrainings } = useGetTrainingQueryWithSkip(iso);

    const wrapperClassName = filteredTrainings?.length ? styles.wrapper : undefined;

    return (
        <Fragment>
            <button
                className={styles.cellMask}
                type='button'
                aria-label='open-trainings-modal'
                onClick={onClick}
            />
            <Flex className={wrapperClassName} direction='column'>
                {breakpoint &&
                    filteredTrainings?.map((training) => (
                        <TrainingBadge
                            key={training._id}
                            className={styles.badge}
                            text={training.name}
                        />
                    ))}
            </Flex>
        </Fragment>
    );
};
