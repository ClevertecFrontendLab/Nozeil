import { Image } from 'antd';

import styles from './logo.module.css';

import LogoBase from '/svg/logo.svg';
import LogoCropped from '/svg/logo-cropped.svg';

type LogoProps = {
    isBreakpoint: boolean;
    cropped: boolean;
};

export const Logo = ({ cropped, isBreakpoint }: LogoProps) => {
    const imageProps = { className: styles.logo, src: LogoBase };

    if (cropped && !isBreakpoint) {
        imageProps.className = styles.logoCropped;
        imageProps.src = LogoCropped;
    }

    return (
        <Image className={imageProps.className} src={imageProps.src} preview={false} alt='logo' />
    );
};
