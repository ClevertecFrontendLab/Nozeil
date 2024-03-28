import { type ModalFuncProps, Modal } from 'antd';

import styles from './modal-error.module.css';

export const CenteredModalError = (props: ModalFuncProps) => {
    Modal.error({
        centered: true,
        autoFocusButton: null,
        okButtonProps: {
            className: styles.modalOkBtn,
            
        },
        maskStyle: { backgroundColor: 'var(--blue-2)' },
        ...props,
    });
};
