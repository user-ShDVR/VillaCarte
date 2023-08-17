'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import IDropDownProps from './interface';

const Dropdown: React.FC<IDropDownProps> = ({
    initialSelectedOption,
    options,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        toggleDropdown();
    };

    const closeAllDropdowns = () => {
        setIsOpen(false);
    };

    const handleDropdown = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            closeAllDropdowns();
            setIsOpen(true);
        }
    };

    return (
        <div className={styles.dropDown}>
            <div className={styles.dropDownContainer}>
                <div
                    className={`${styles.wrapperDropdown} ${isOpen ? styles.active : ''}`}
                    onClick={handleDropdown}>
                    <span>{selectedOption}</span>
                    <Image
                        // className={`arrow ${isOpen ? 'rotated' : ''}`}
                        className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
                        src={`/navbar/drop-down/drop-down.svg`}
                        alt='drop-down'
                        width={18 / 2}
                        height={12 / 2}
                    />
                    <ul
                        className={styles.dropDown}
                        style={{ margin: 0 }}>
                        {options.map((option, index) => (
                            <li
                                className='item'
                                key={index}
                                onClick={() => handleOptionClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
