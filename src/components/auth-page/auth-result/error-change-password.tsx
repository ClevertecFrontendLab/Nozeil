import { useLocation, useNavigate } from 'react-router-dom';
import { COMPOUND_ROUTES } from '@constants/routes';

import { ResultButton } from '../../result-button/result-button';
import { RESULT_CARD_TYPE_KEYS, RESULT_ICON_TYPE_KEYS } from '../auth-page.constants';
import { ResultCard } from '../result-card/result-card';
import { ResultIcon } from '../result-icon/result-icon';

export const ErrorChangePassword = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const onClick = () => navigate(COMPOUND_ROUTES.AUTH_CHANGE_PASSWORD, { state });

    return (
        <ResultCard
            head={<ResultIcon type={RESULT_ICON_TYPE_KEYS.ERROR} />}
            type={RESULT_CARD_TYPE_KEYS.CARD_PB_56_BREAKPOINT}
            title='Данные не сохранились'
            text="Что-то пошло не так. Попробуйте ещё раз"
        >
            <ResultButton block={true} onClick={onClick} testId='change-retry-button'>
                Повторить
            </ResultButton>
        </ResultCard>
    );
};
