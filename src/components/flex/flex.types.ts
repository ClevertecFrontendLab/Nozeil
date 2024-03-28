import { type ElementType, type ReactNode } from 'react';
import { type Breakpoint } from 'antd/lib/_util/responsiveObserve';

type Breakpoints = Partial<Record<Breakpoint, boolean>>;

export type Direction = 'row' | 'column' | 'column-reverse';
export type Justify = 'justifyStart' | 'justifyCenter' | 'justifyEnd' | 'justifyBetween';
export type Align = 'alignStart' | 'alignCenter' | 'alignEnd';
export type Gap =
    | 'gap4'
    | 'gap8'
    | 'gap6'
    | 'gap10'
    | 'gap12'
    | 'gap14'
    | 'gap16'
    | 'gap18'
    | 'gap20'
    | 'gap24'
    | 'gap26'
    | 'gap32';

type DirectionWithBreakpoint = Direction | Partial<Record<Breakpoint, Direction>>;
type JustifyWithBreakpoint = Justify | Partial<Record<Breakpoint, Justify>>;
type AlignWithBreakpoint = Align | Partial<Record<Breakpoint, Align>>;
type GapWithBreakpoint = Gap | Partial<Record<Breakpoint, Gap>>;

type AdditionalClassNames = {
    className?: string;
    direction?: DirectionWithBreakpoint;
    justify?: JustifyWithBreakpoint;
    align?: AlignWithBreakpoint;
    gap?: GapWithBreakpoint;
};

export type FlexProps<T extends ElementType> = {
    children: ReactNode;
    as?: T;
    testId?: string;
} & AdditionalClassNames;

export type ClassNameType =
    | FlexProps<'div'>['direction']
    | FlexProps<'div'>['justify']
    | FlexProps<'div'>['align']
    | FlexProps<'div'>['gap'];

export type CreateFlexClassNamesType = (
    breakpoints: Breakpoints,
    additionalClassNames: AdditionalClassNames,
) => string[];
