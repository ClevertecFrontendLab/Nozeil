import { Loader } from '@components/loader/loader';
import { ModalWithResult500 } from '@components/modal-with-result-500';
import { ROUTES } from '@constants/routes';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { closeError500Modal } from '@redux/slices/error-500-modal';
import { Layout } from 'antd';
import classNames from 'classnames/bind';
import { type ReactNode, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './page-template.module.css';

type PageTemplateProps = {
    headerContent?: ReactNode;
    mainContent?: ReactNode;
    mainContentClassName?: string;
    footerContent?: ReactNode;
};

const cx = classNames.bind(styles);
const { Header, Content, Footer } = Layout;

export const PageTemplate = ({
    headerContent,
    mainContent,
    mainContentClassName,
    footerContent,
}: PageTemplateProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const modalOnClick = () => {
        navigate(ROUTES.MAIN);
        dispatch(closeError500Modal());
    };

    return (
        <Suspense fallback={<Loader />}>
            <Layout className={styles.layout}>
                <Header className={styles.header}>{headerContent}</Header>
                <Content className={cx(styles.content, mainContentClassName)}>
                    {mainContent}
                </Content>
                <Footer className={styles.footer}>{footerContent}</Footer>
            </Layout>
            <ModalWithResult500 onClick={modalOnClick} />
        </Suspense>
    );
};
