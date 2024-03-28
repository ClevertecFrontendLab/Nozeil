import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { ResultButton } from '../../result-button/result-button';
import { RESULT_CARD_TYPE_KEYS, RESULT_ICON_TYPE_KEYS } from '../auth-page.constants';
import { ResultCard } from '../result-card/result-card';
import { ResultIcon } from '../result-icon/result-icon';

export const ErrorCheckEmailNoExist = () => {
    const navigate = useNavigate();

    const onClick = () => navigate(ROUTES.AUTH);

    return (
        <ResultCard
            type={RESULT_CARD_TYPE_KEYS.CARD_PB_56}
            head={<ResultIcon type={RESULT_ICON_TYPE_KEYS.ERROR} />}
            title='Такой e-mail не зарегистрирован'
            text={`Мы не нашли в базе вашего e-mail. Попробуйте
войти с другим e-mail.`}
        >
            <ResultButton onClick={onClick} testId='check-retry-button'>
                Попробовать снова
            </ResultButton>
        </ResultCard>
    );
};
