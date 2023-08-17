import React from 'react';
import Image from 'next/image';
import arrow from '@/../public/button-border/arrow.svg';
import IButtonBorderProps from './interface';
import styles from './styles.module.scss';

const ButtonBorderBlack: React.FC<IButtonBorderProps> = ({
    children,
    type,
}) => {
    return (
        <button
            className={styles.buttonBorderBlack}
            type={type}>
            <span>{children}</span>
        </button>
    );
};

export default ButtonBorderBlack;
