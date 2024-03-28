import { useLocation, useNavigate } from 'react-router-dom';
import { COMPOUND_ROUTES } from '@constants/routes';

import { ResultButton } from '../../result-button/result-button';
import { RESULT_ICON_TYPE_KEYS } from '../auth-page.constants';
import { ResultCard } from '../result-card/result-card';
import { ResultIcon } from '../result-icon/result-icon';

export const ErrorRegistration = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = () => navigate(COMPOUND_ROUTES.AUTH_REGISTRATION, { state: location.state });

    return (
        <ResultCard
            head={<ResultIcon type={RESULT_ICON_TYPE_KEYS.ERROR} />}
            title='Данные не сохранились'
            text={`Что-то пошло не так и ваша регистрация 
не завершилась. Попробуйте ещё раз.`}
        >
            <ResultButton block={true} onClick={onClick} testId='registration-retry-button'>
                Повторить
            </ResultButton>
        </ResultCard>
    );
};
