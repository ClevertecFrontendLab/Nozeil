import { useState } from 'react';
import { FeedbackModalWithButtonGroup } from '@components/feedback-modal-with-button-group/feedback-modal-with-button-group';
import { Button } from 'antd';

import { FeedbacksList } from './feedbacks-list';

import styles from './feedback-content.module.css';

const maskStyleColor = 'var(--blue-1)';

export const FeedbacksContent = () => {
    const [showAll, toggleShowAll] = useState(false);

    const expendBtnText = showAll ? 'Свернуть все отзывы' : 'Развернуть все отзывы';

    return (
        <FeedbacksList
            showAll={showAll}
            empty={<FeedbackModalWithButtonGroup btnGroupClassName={styles.btnGroup} maskStyleColor={maskStyleColor} />}
            footer={
                <FeedbackModalWithButtonGroup
                    btnGroupClassName={styles.btnGroup}
                    maskStyleColor={maskStyleColor}
                    additonalButton={
                        <Button
                            block={true}
                            type='link'
                            size='large'
                            onClick={() => toggleShowAll((prevShowAll) => !prevShowAll)}
                            data-test-id='all-reviews-button'
                        >
                            {expendBtnText}
                        </Button>
                    }
                />
            }
        />
    );
};
