import { Fragment } from 'react';
import { BackdropBlur } from '@components/auth-page/backdrop-blur/backdrop-blur';
import animationData from '@lotties/loader.json';
import Lottie from 'lottie-react';

import styles from './loader.module.css';

export const Loader = () => (
    <Fragment>
        <BackdropBlur zIndex={100} />
        <Lottie className={styles.loader} animationData={animationData} data-test-id='loader' />
    </Fragment>
);
