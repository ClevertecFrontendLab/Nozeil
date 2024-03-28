import { CalendarContent } from '@components/calendar-page/calendar-content/calendar-content';
import { HeaderContent } from '@components/calendar-page/header-content';
import { PageTemplate } from '@components/page-template/page-template';
import { useSetMenuKey } from '@hooks/use-set-menu-key';

import styles from './calendar-page.module.css';

export const CalendarPage = () => {
    useSetMenuKey('Календарь');

    return (
        <PageTemplate
            headerContent={<HeaderContent />}
            mainContent={<CalendarContent />}
            mainContentClassName={styles.mainContent}
        />
    );
};
