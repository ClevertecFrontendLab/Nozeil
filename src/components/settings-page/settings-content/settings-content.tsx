import { Fragment } from 'react';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { FeedbackModalWithButtonGroup } from '@components/feedback-modal-with-button-group/feedback-modal-with-button-group';
import { FeedbackNavBtn } from '@components/feedbacks-nav-btn/feedbacks-nav-btn';
import { Flex } from '@components/flex/flex';

import { Switches } from './switches/switches';
import { Tariffs } from './tariffs/tariffs';
import { ModalSuccess } from './tariffs-side-panel/modal-success/modal-success';
import { TariffsSidePanel } from './tariffs-side-panel/tariffs-side-panel';

import styles from './settings-content.module.css';

export const SettingsContent = () => (
    <Fragment>
        <ModalSuccess />
        <ContentWrapper>
            <Flex
                className={styles.settingsContainer}
                direction='column'
                gap={{ xs: 'gap20', sm: 'gap24' }}
            >
                <TariffsSidePanel />
                <Tariffs />
                <Switches />
                <FeedbackModalWithButtonGroup
                    btnGroupClassName={styles.btnGroup}
                    maskStyleColor='var(--blue-2)'
                    additonalButton={
                        <FeedbackNavBtn className={styles.btn}>Смотреть все отзывы</FeedbackNavBtn>
                    }
                />
            </Flex>
        </ContentWrapper>
    </Fragment>
);
