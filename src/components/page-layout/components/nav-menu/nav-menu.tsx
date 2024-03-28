import { useNavigate } from 'react-router-dom';
import { CalendarTwoTone, HeartFilled, IdcardTwoTone, TrophyFilled } from '@ant-design/icons';
import ExitIcon from '@assets/icons/exit.svg?react';
import { NAV_MENU_LABELS } from '@constants/index';
import { ROUTES } from '@constants/routes';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useAuth } from '@hooks/use-auth';
import { useCalendarHandler } from '@hooks/use-calendar-handler';
import { selectedKeysSelector } from '@redux/slices/nav-menu/nav-menu';
import { Grid, Menu, MenuProps } from 'antd';

import { ICONS_COLOR } from './nav-menu.constants';

import styles from './nav-menu.module.css';

const { useBreakpoint } = Grid;

const { CALENDAR, WORKOUT, ACHIEVEMENTS, PROFILE, EXIT, DIVIDER } = NAV_MENU_LABELS;

const menuItems = [
    {
        label: CALENDAR,
        title: CALENDAR,
        icon: <CalendarTwoTone className={styles.icon} twoToneColor={[ICONS_COLOR, ICONS_COLOR]} />,
        key: CALENDAR,
    },
    {
        label: WORKOUT,
        title: WORKOUT,
        icon: <HeartFilled className={styles.icon} style={{ color: ICONS_COLOR }} />,
        key: WORKOUT,
    },
    {
        label: ACHIEVEMENTS,
        title: ACHIEVEMENTS,
        icon: <TrophyFilled className={styles.icon} style={{ color: ICONS_COLOR }} />,
        key: ACHIEVEMENTS,
    },
    {
        label: PROFILE,
        title: PROFILE,
        icon: <IdcardTwoTone className={styles.icon} twoToneColor={[ICONS_COLOR, ICONS_COLOR]} />,
        key: PROFILE,
    },
    {
        type: 'divider',
        key: DIVIDER,
    },
    {
        label: EXIT,
        title: EXIT,
        icon: (
            <ExitIcon className={styles.icon} width={16} height={16} alignmentBaseline='central' />
        ),
        key: EXIT,
    },
];

export const NavMenu = () => {
    const selectedKeys = useAppSelector(selectedKeysSelector);
    const { signout } = useAuth();
    const navigate = useNavigate();
    const calendarHandler = useCalendarHandler(navigate);

    const { md } = useBreakpoint();
    const mode = md ? 'inline' : 'vertical';

    const menuOnClick: MenuProps['onClick'] = ({ key }) => {
        switch (key) {
            case CALENDAR:
                calendarHandler();
                break;
            case PROFILE:
                navigate(ROUTES.PROFILE);
                break;
            case EXIT:
                signout(() => navigate(ROUTES.AUTH));
                break;
            default:
        }
    };

    return (
        <Menu
            selectedKeys={selectedKeys}
            className={styles.menu}
            mode={mode}
            items={menuItems}
            inlineIndent={16}
            onClick={menuOnClick}
        />
    );
};
