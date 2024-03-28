import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { ResultButton } from '../../result-button/result-button';
import { RESULT_CARD_TYPE_KEYS, RESULT_ICON_TYPE_KEYS } from '../auth-page.constants';
import { ResultCard } from '../result-card/result-card';
import { ResultIcon } from '../result-icon/result-icon';

export const SuccessChangePassword = () => {
    const navigate = useNavigate();

    const onClick = () => navigate(ROUTES.AUTH);

    return (
        <ResultCard
            head={<ResultIcon type={RESULT_ICON_TYPE_KEYS.SUCCESS} />}
            type={RESULT_CARD_TYPE_KEYS.CARD_PB_56_BREAKPOINT}
            title='Пароль успешно изменен'
            text={`Теперь можно войти в аккаунт, используя 
свой логин и новый пароль`}
        >
            <ResultButton block={true} onClick={onClick} testId='change-entry-button'>
                Вход
            </ResultButton>
        </ResultCard>
    );
};
