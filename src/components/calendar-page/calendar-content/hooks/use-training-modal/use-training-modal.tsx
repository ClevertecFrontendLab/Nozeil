import { type MouseEventHandler, useEffect, useRef, useState } from 'react';
import { DATE_FORMATS } from '@constants/index';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import {
    closeTrainingModal,
    openTrainingModal,
    setIsPastFalse,
    setIsPastTrue,
    setTrainingModalDate,
} from '@redux/slices/training-modal/training-modal';
import moment from 'moment';

import { CellContent } from '../../cell-content/cell-content';
import type { Coords } from '../use-training-modal.types';

import { calcCoords, disablePanelChange } from './use-training-modal.utils';

export const useTrainingModal = (breakpoint: boolean | undefined) => {
    const [coords, setCoords] = useState<Coords>({
        top: 0,
        left: 0,
    });
    const dispatch = useAppDispatch();
    const calendarWrapperRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLElement | null>(null);

    useEffect(() => {
        dispatch(closeTrainingModal());
    }, [breakpoint, dispatch]);

    const initStoreActions = (date: moment.Moment, iso: string) => {
        dispatch(closeTrainingModal());

        const setIsPast = date.isBefore() ? setIsPastTrue : setIsPastFalse;

        dispatch(setIsPast());

        dispatch(
            setTrainingModalDate({
                iso,
                formated: date.format(DATE_FORMATS.DMY),
            }),
        );

        dispatch(openTrainingModal());
    };

    const dateCellRender = (date: moment.Moment) => {
        const iso = date.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString();

        const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            disablePanelChange(e, date, breakpoint);

            initStoreActions(date, iso);

            const { coords: calculadtedCoords, container: current } = calcCoords(
                e,
                calendarWrapperRef.current,
                breakpoint,
            );

            container.current = current;

            setCoords(calculadtedCoords);
        };

        return <CellContent breakpoint={breakpoint} iso={iso} onClick={onClick} />;
    };

    return {
        coords,
        container: container.current,
        dateCellRender,
        calendarWrapperRef,
    };
};
