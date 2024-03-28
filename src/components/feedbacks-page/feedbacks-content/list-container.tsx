import { type ReactNode, useLayoutEffect, useRef } from 'react';

import styles from './feedback-content.module.css';

type ListContainerProps = {
    children: ReactNode;
    showAll: boolean;
};

export const ListContainer = ({ showAll, children }: ListContainerProps) => {
    const listContainterRef = useRef<HTMLDivElement>(null);
    const listContainerClassName = showAll ? styles.listContainerFull : styles.listContainer;

    const container = listContainterRef.current;
    const containerHeight = container?.offsetHeight;

    useLayoutEffect(() => {
        const footerHeight =
            container?.querySelector<HTMLDivElement>('.ant-list-footer')?.offsetHeight;
        const cards = container?.querySelector<HTMLDivElement>('.ant-spin-nested-loading');

        if (showAll) {
            if (containerHeight && footerHeight && cards) {
                const additionalPadding = 12;

                cards.style.height = `${containerHeight - footerHeight - additionalPadding}px`;
            }
        } else if (cards) {
                cards.style.height = '';
            }
    }, [container, containerHeight, showAll]);

    return (
        <div ref={listContainterRef} className={listContainerClassName}>
            {children}
        </div>
    );
};
