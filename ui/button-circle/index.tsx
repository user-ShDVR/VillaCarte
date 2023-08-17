import React from 'react';
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
        </button>
    );
};

export default ButtonCircle;
