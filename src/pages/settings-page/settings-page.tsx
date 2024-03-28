import { PageTemplate } from '@components/page-template/page-template';
import { HeaderContent } from '@components/settings-page/header-content/header-content';
import { SettingsContent } from '@components/settings-page/settings-content/settings-content';

import styles from './settings-page.module.css';

export const SettingsPage = () => (
    <PageTemplate
        layoutClassName={styles.layout}
        headerContent={<HeaderContent />}
        mainContent={<SettingsContent />}
        mainContentClassName={styles.mainContent}
    />
);
