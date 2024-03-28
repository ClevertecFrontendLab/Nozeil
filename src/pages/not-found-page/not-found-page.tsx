import { NotFoundContent } from '@components/not-found-page/not-found-content';
import { PageTemplate } from '@components/page-template/page-template';

import styles from './not-found-page.module.css';

export const NotFoundPage = () => (
    <PageTemplate
        headerContentClassName={styles.headerContent}
        mainContent={<NotFoundContent />}
        mainContentClassName={styles.mainContent}
    />
);
