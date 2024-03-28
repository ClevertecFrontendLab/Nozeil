import { NAV_MENU_LABELS } from '@constants/index';

type NavMenuActiveKeys = Omit<typeof NAV_MENU_LABELS, 'DIVIDER' | 'EXIT'>;

export type NavMenuSelectedKey = NavMenuActiveKeys[keyof NavMenuActiveKeys];
