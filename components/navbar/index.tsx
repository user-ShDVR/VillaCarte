'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Modal from '../modal';
import useModal from '@/hooks/useModal';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import Dropdown from './drop-down';
import Link from 'next-intl/link';
import INavbarProps from './interface';

const Navbar: React.FC<INavbarProps> = ({
    sale,
    rent,
    concierge,
    propertyManagement,
    aboutTheCompany,
    aboutPhuket,
    news,
    requestACall,
}) => {
    const { isOpen, toggle } = useModal();
    const [blockScroll, allowScroll] = useScrollBlock();
    const [isScrollStarted, setScrollStarted] = useState(false);

    //options для dropdown списка
    const options1 = ['Продажа 1', 'Продажа 2', 'Продажа 3'];
    const options2 = [
        'Консьерж сервис 1',
        'Консьерж сервис 2',
        'Консьерж сервис 3',
    ];
    // const options3 = ['RU', 'ENG'];
    const options3 = [
        <Link
            key='ru'
            href='/'
            locale='ru'>
            RU
        </Link>,
        <Link
            key='eng'
            href='/'
            locale='en'>
            ENG
        </Link>,
    ];
    const options4 = ['USD', 'RUB', '3'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollStarted(true);
            } else {
                setScrollStarted(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.navbar}>
            <Modal
                isOpen={isOpen}
                allowScroll={allowScroll}
                toggle={toggle}></Modal>
            <div
                className={`${styles.navbarContainer} ${
                    isScrollStarted ? `${styles.scrolled}` : ''
                }`}>
                <div className={styles.logo}>
                    <Image
                        src={`/navbar/logo.svg`}
                        width={352 / 2}
                        height={24 / 2}
                        alt='logo'
                    />
                </div>
                <ul className='nav'>
                    <li>
                        <Dropdown
                            initialSelectedOption={sale}
                            options={options1}
                        />
                    </li>
                    <li>{rent}</li>
                    <li>
                        <Dropdown
                            initialSelectedOption={concierge}
                            options={options2}
                        />
                    </li>
                    <li>{propertyManagement}</li>
                    <li>{aboutTheCompany}</li>
                    <li>{aboutPhuket}</li>
                    <li>{news}</li>
                </ul>

                <ul className='nav'>
                    <li>
                        <Dropdown
                            initialSelectedOption='RU'
                            options={options3}
                        />
                    </li>
                    <li>
                        <Dropdown
                            initialSelectedOption='USD'
                            options={options4}
                        />
                    </li>
                </ul>
                <button
                    onClick={() => {
                        toggle();
                        blockScroll();
                    }}>
                    {requestACall}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
