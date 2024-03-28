import { type ElementType } from 'react';
import { Grid } from 'antd';
import classNames from 'classnames/bind';

import { FlexProps } from './flex.types';
import { createFlexClassNames } from './flex.utils';

import styles from './flex.module.css';

const { useBreakpoint } = Grid;
const cx = classNames.bind(styles);

export const Flex = <T extends ElementType = 'div'>({
    children,
    as,
    className,
    testId,
    ...additionalStyles
}: FlexProps<T>) => {
    const screens = useBreakpoint();

    const flexClassNames = createFlexClassNames(screens, additionalStyles);

    const Component = as || 'div';

    return (
        <Component className={cx(styles.flex, className, ...flexClassNames)} data-test-id={testId}>
            {children}
        </Component>
    );
};
