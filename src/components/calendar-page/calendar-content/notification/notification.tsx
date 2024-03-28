import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';

import styles from './notificaton.module.css';

type NotificationProps = {
    isOpen: boolean;
    close: () => void;
    refresh: () => void;
};

export const Notification = ({ isOpen, close, refresh }: NotificationProps) => (
    <Modal
        open={isOpen}
        centered={true}
        footer={null}
        width={384}
        closable={false}
        maskStyle={{ backgroundColor: 'var(--blue-2)' }}
    >
        <Space className={styles.space} direction='vertical' align='end'>
            <Space size='middle' align='start'>
                <CloseCircleOutlined style={{ color: 'var(--primary-light-6)', fontSize: 24 }} />
                <div>
                    <Typography.Title
                        className={styles.title}
                        level={5}
                        data-test-id='modal-error-user-training-title'
                    >
                        При открытии данных произошла ошибка
                    </Typography.Title>
                    <Typography.Text
                        className={styles.title}
                        disabled={true}
                        data-test-id='modal-error-user-training-subtitle'
                    >
                        Попробуйте ещё раз.
                    </Typography.Text>
                </div>
                <Button
                    type='text'
                    size='small'
                    icon={
                        <CloseOutlined
                            style={{
                                color: 'var(--character-light-secondary-45)',
                                fontSize: 14,
                            }}
                        />
                    }
                    onClick={close}
                    data-test-id='modal-error-user-training-button-close'
                />
            </Space>
            <Button
                className={styles.btn}
                onClick={refresh}
                type='primary'
                data-test-id='modal-error-user-training-button'
            >
                Обновить
            </Button>
        </Space>
    </Modal>
);
