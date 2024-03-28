import { type ReactNode } from 'react';

import { INPUT_GROUP_TYPE_KEYS } from '../auth-page.constants';
import { type TypeValues } from '../auth-page.types';

import styles from './input-group.module.css';

type InputGroupProps = {
    children: ReactNode;
    type: TypeValues['inputGroup'];
    mobileBreakpoint?: boolean;
};

export const InputGroup = ({ children, type, mobileBreakpoint }: InputGroupProps) => {
    const classNames = mobileBreakpoint
        ? {
              [INPUT_GROUP_TYPE_KEYS.XL]: styles.group32MobileBreakpoint,
          }
        : {
              [INPUT_GROUP_TYPE_KEYS.LG]: styles.group24,
              [INPUT_GROUP_TYPE_KEYS.XL]: styles.group32,
          };
    const className = classNames[type];

    return <div className={className}>{children}</div>;
};
