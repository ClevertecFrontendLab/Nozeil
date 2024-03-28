import {
    CheckCircleFilled,
    CloseCircleFilled,
    ExclamationCircleFilled,
    WarningFilled,
} from '@ant-design/icons';

import { RESULT_ICON_TYPE_KEYS } from '../auth-page.constants';
import type { TypeValues } from '../auth-page.types';

import styles from './result-icon.module.css';

type ResultIconProps = {
    type: TypeValues['resultIcon'];
};

const { ERROR, SUCCESS, WARNING, EXCLAMATION } = RESULT_ICON_TYPE_KEYS;

export const ResultIcon = ({ type }: ResultIconProps) => {
    const fontSize = '71px';
    const icons = {
        [ERROR]: (
            <CloseCircleFilled
                className={styles.icon}
                style={{ color: 'var(--character-light-error)', fontSize }}
            />
        ),
        [SUCCESS]: (
            <CheckCircleFilled
                className={styles.icon}
                style={{ color: 'var(--character-light-success)', fontSize }}
            />
        ),
        [WARNING]: (
            <WarningFilled
                className={styles.icon}
                style={{ color: 'var(--character-light-warning)', fontSize }}
            />
        ),
        [EXCLAMATION]: (
            <ExclamationCircleFilled
                className={styles.icon}
                style={{ color: 'var(--primary-light-6)', fontSize }}
            />
        ),
    };

    return icons[type];
};
