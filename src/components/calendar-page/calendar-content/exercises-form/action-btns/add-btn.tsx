import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { addEmptyFormExercise } from '@redux/slices/training-modal/training-modal';
import { Button } from 'antd';

import styles from './action-btns.module.css';

export const AddBtn = () => {
    const dispatch = useAppDispatch();
    const onAdd = () => dispatch(addEmptyFormExercise());

    return (
        <Button
            className={styles.btn}
            block={true}
            icon={<PlusOutlined />}
            size='large'
            type='link'
            onClick={onAdd}
        >
            Добавить ещё
        </Button>
    );
};
