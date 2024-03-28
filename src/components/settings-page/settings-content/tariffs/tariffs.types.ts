import { type ReactNode } from 'react';

type CardProps = {
    extra: ReactNode;
};

export type FreeCardProps = CardProps;
export type ProCardProps = CardProps & { onClick: () => void };
