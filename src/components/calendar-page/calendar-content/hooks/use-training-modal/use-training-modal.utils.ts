import moment from 'moment';

import { type Coords } from '../use-training-modal.types';

import { type EventType } from './use-training-modal.types';

export const calcCoords = (
    e: EventType,
    calendarWrapper: HTMLDivElement | null,
    breakpoint?: boolean,
) => {
    let coords: Coords = {
        top: 0,
    };
    let container = null;

    if (calendarWrapper) {
        const trainingCardWidth = 264;
        const marginX = 4;
        const cellMask = e.currentTarget;

        const { x: cellMaskX, bottom: cellMaskBottom } = cellMask.getBoundingClientRect();
        const { top: wrapperTop, right: wrapperRight } = calendarWrapper.getBoundingClientRect();

        if (breakpoint) {
            container = cellMask.closest('td');
            const x = cellMask.offsetLeft + marginX;
            const top = cellMask.offsetTop;

            coords =
                cellMaskX + trainingCardWidth >= wrapperRight
                    ? { right: x, top }
                    : { left: x, top };
        } else {
            container = calendarWrapper;
            coords = { top: cellMaskBottom - wrapperTop };
        }
    }

    return { coords, container };
};

export const disablePanelChange = (e: EventType, date: moment.Moment, breakpoint?: boolean) => {
    const currMonth = moment().month();
    const pickedMonth = date.month();

    if (pickedMonth !== currMonth && breakpoint) {
        e.stopPropagation();
    }
};
