import { PageTemplate } from '@components/page-template/page-template';
import { HeaderContent } from '@components/profile-page/header-content/header-content';
import { ProfileContent } from '@components/profile-page/profile-content/profile-content';
import { useSetMenuKey } from '@hooks/use-set-menu-key';

import styles from './profile-page.module.css';

export const ProfilePage = () => {
    useSetMenuKey('Профиль');

    return (
        <PageTemplate
            headerContent={<HeaderContent />}
            headerContentClassName={styles.header}
            mainContent={<ProfileContent />}
            mainContentClassName={styles.mainContent}
        />
    );
};
