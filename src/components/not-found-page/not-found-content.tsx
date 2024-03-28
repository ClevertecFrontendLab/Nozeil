import { useNavigate } from 'react-router-dom';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { Flex } from '@components/flex/flex';
import { ResultButton } from '@components/result-button/result-button';
import { ROUTES } from '@constants/routes';
import { Result } from 'antd';

import styles from './not-found-content.module.css';

export const NotFoundContent = () => {
    const navigate = useNavigate();

    const onClick = () => navigate(ROUTES.MAIN);

    return (
        <ContentWrapper>
            <Flex className={styles.resultWrapper} align='alignCenter' justify='justifyCenter'>
                <Result
                    className={styles.result}
                    status='404'
                    title='Такой страницы нет'
                    subTitle='Извините, страница не найдена, возможно, она была удалена или перемещена.'
                    extra={<ResultButton onClick={onClick}>На главную</ResultButton>}
                />
            </Flex>
        </ContentWrapper>
    );
};
