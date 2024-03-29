import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { closeCalendarSidePanel } from '@redux/slices/calendar-side-panel';
import {
    closeTrainingModal,
    isTrainingModalOpenSelector,
    resetExercises,
    resetFormExercises,
} from '@redux/slices/training-modal/training-modal';
import { useGetTrainingListQuery } from '@services/endpoints/catalogs';
import { Calendar, Form, Grid } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './calendar-content.module.css';
import { ExercisesForm } from './exercises-form/exercises-form';
import { useTrainingModal } from './hooks/use-training-modal/use-training-modal';
import { locale } from './locale';
import { Notification } from './notification/notification';
import { SidePanel } from './side-panel/side-panel';
import { TrainingModal } from './training-modal/training-modal';

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
        isError ? setIsNotificationOpen(true) : closeNotification();
    }, [isError]);

    const refresh = () => {
        closeNotification();
        refetch();
    };

    const closeSidePanel = useCallback(() => {
        form.submit();
        dispatch(closeCalendarSidePanel());
    }, [dispatch, form]);

    const resetExercisesAndForm = () => {
        form.resetFields();

        dispatch(resetFormExercises());
        dispatch(resetExercises());
    };

    const calendar = isError ? (
        <Calendar locale={locale} fullscreen={sm} />
    ) : (
        <Calendar
            locale={locale}
            fullscreen={sm}
            onPanelChange={() => dispatch(closeTrainingModal())}
            onSelect={resetExercisesAndForm}
            dateCellRender={dateCellRender}
        />
    );

    return (
        <>
            <SidePanel form={<ExercisesForm form={form} />} close={closeSidePanel} />
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
        </>
    );
};
