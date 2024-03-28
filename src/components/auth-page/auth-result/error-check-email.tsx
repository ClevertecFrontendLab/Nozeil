import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { Image } from 'antd';

import { ResultButton } from '../../result-button/result-button';
import { RESULT_CARD_TYPE_KEYS } from '../auth-page.constants';
import { ResultCard } from '../result-card/result-card';

import ErrorImage from '/png/error-image.png';

export const ErrorCheckEmail = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const onClick = () => navigate(ROUTES.AUTH, { state });

    return (
        <ResultCard
            head={
                <Image
                    src={ErrorImage}
                    preview={false}
                    width={254}
                    height={294}
                    alt='error-image'
                />
            }
            type={RESULT_CARD_TYPE_KEYS.CARD_PB_56}
            title='Что-то пошло не так'
            text='Произошла ошибка, попробуйте отправить форму ещё раз.'
        >
            <ResultButton onClick={onClick} testId='check-back-button'>
                Назад
            </ResultButton>
        </ResultCard>
    );
};
