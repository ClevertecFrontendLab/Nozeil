import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { routerSelector } from '@redux/router-selector';
import { Button } from 'antd';

import styles from './header-content.module.css';

export const HeaderContent = () => {
    const { previousLocations } = useAppSelector(routerSelector);
    const navigate = useNavigate();

    const onClick = () => {
        if (previousLocations?.length !== 1) {
            const prevPathname = previousLocations?.at(-1)?.location?.pathname;

            if (prevPathname) {
                navigate(prevPathname);
            }
        }
    };

    return (
        <Button
            className={styles.btn}
            icon={<ArrowLeftOutlined style={{ fontSize: 14 }} />}
            size='large'
            type='text'
            onClick={onClick}
            data-test-id='settings-back'
        >
            Настройки
        </Button>
    );
};
