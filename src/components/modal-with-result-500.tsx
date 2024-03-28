import { ResultButton } from '@components/result-button/result-button';
import { WIDTH_540 } from '@constants/index';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { isError500ModalOpenSelector } from '@redux/slices/error-500-modal';
import { Result } from 'antd';

import { ModalWithShadowMd } from './modal-with-shadow-md/modal-with-shadow-md';

type ModalWithResult500Props = {
    onClick: () => void;
};

export const ModalWithResult500 = ({ onClick }: ModalWithResult500Props) => {
    const isOpen = useAppSelector(isError500ModalOpenSelector);

    return (
        <ModalWithShadowMd
            open={isOpen}
            closable={false}
            centered={true}
            width={WIDTH_540}
            footer={null}
            maskStyle={{ backgroundColor: 'var(--blue-1)' }}
            data-test-id='modal-no-review'
        >
            <Result
                status='500'
                title='Что-то пошло не так'
                subTitle='Произошла ошибка, &nbsp;попробуйте ещё раз.'
                extra={<ResultButton onClick={onClick}>Назад</ResultButton>}
            />
        </ModalWithShadowMd>
    );
};
