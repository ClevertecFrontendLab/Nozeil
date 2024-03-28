import { type ReactNode } from 'react';

import styles from './content-wrapper.module.css';

type ContentWrapperProps = {
    children: ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => (
    <div className={styles.wrapper}>{children}</div>
);
