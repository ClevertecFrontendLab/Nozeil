import { Fragment, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SidePanel } from '@components/side-panel/side-panel';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { closeSidePanel } from '@redux/slices/side-panel';
import {
    closeTrainingModal,
    isTrainingModalOpenSelector,
    resetExercises,
    resetFormExercises,
} from '@redux/slices/training-modal/training-modal';
import { useGetTrainingListQuery } from '@services/endpoints/catalogs';
import { Calendar, Form, Grid } from 'antd';

import { CalendarSidePanelBody } from './calendar-side-panel-body/calendar-side-panel-body';
import { ExercisesForm } from './exercises-form/exercises-form';
import { useTrainingModal } from './hooks/use-training-modal/use-training-modal';
import { Notification } from './notification/notification';
import { TrainingModal } from './training-modal/training-modal';
import { CalendarSidePanelHead } from './calendar-side-panel-head';

import styles from './calendar-content.module.css';

const { useBreakpoint } = Grid;

export const CalendarContent = () => {
    const { isError, refetch } = useGetTrainingListQuery();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const isTrainingModalOpen = useAppSelector(isTrainingModalOpenSelector);
    const dispatch = useAppDispatch();

    const [form] = Form.useForm();
    const { sm } = useBreakpoint();

    const { coords, container, dateCellRender, calendarWrapperRef } = useTrainingModal(sm);

    const closeNotification = () => setIsNotificationOpen(false);

    useEffect(() => {
        if (isError) {
            setIsNotificationOpen(true);
        } else {
            closeNotification();
        }
    }, [isError]);

    const refresh = () => {
        closeNotification();
        refetch();
    };

    const closeCalendarSidePanel = useCallback(() => {
        form.submit();
        dispatch(closeSidePanel());
    }, [dispatch, form]);

    const resetExercisesAndForm = () => {
        form.resetFields();

        dispatch(resetFormExercises());
        dispatch(resetExercises());
    };

    const calendar = isError ? (
        <Calendar fullscreen={sm} />
    ) : (
        <Calendar
            fullscreen={sm}
            onPanelChange={() => dispatch(closeTrainingModal())}
            onSelect={resetExercisesAndForm}
            dateCellRender={dateCellRender}
        />
    );

    return (
        <Fragment>
            <SidePanel onClose={closeCalendarSidePanel} testId='modal-drawer-right'>
                <CalendarSidePanelHead onClose={closeCalendarSidePanel} />
                <CalendarSidePanelBody>
                    <ExercisesForm form={form} />
                </CalendarSidePanelBody>
            </SidePanel>
            <Notification isOpen={isNotificationOpen} close={closeNotification} refresh={refresh} />
            <div ref={calendarWrapperRef} className={styles.calendarWrapper}>
                {isTrainingModalOpen &&
                    container &&
                    createPortal(
                        <TrainingModal
                            style={{ ...coords }}
                            resetForm={() => form.resetFields()}
                            resetExercisesAndForm={resetExercisesAndForm}
                        />,
                        container,
                    )}
                {calendar}
            </div>
        </Fragment>
    );
};
