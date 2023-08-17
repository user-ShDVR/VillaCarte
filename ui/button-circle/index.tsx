import React from 'react';
import Image from 'next/image';
import arrow from '@/../public/button-border/arrow.svg';
import IButtonCircle from './interface';
import styles from './styles.module.scss'

const ButtonCircle: React.FC<IButtonCircle> = ({
    children,
    type,
    bgColor,
    borderColor,
    color,
}) => {
    const buttonStyle = {
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: color,
        borderWidth: '2px',
    };
    return (
        <button
            className={styles.buttonCircle}
            style={buttonStyle}
            type={type}>
            {children}
            {/* <Image
                src={arrow}
                alt='arrow'
                width={28 / 2}
                height={20 / 2}
            /> */}
        </button>
    );
};

export default ButtonCircle;
