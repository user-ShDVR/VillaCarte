'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import INavbarMobile from './interface';
import Modal from '../../modal';
import useModal from '@/hooks/useModal';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import Dropdown from '../drop-down';
import Link from 'next-intl/link';
import ButtonBorder from '@/ui/button-border';

const NavbarMobile: React.FC<INavbarMobile> = ({
    sale,
    rent,
    concierge,
    propertyManagement,
    aboutTheCompany,
    aboutPhuket,
    news,
    requestACall,
    montenegro,
    phuket,
}) => {
    const { isOpen, toggle } = useModal();
    const [blockScroll, allowScroll] = useScrollBlock();
    const [isScrollStarted, setScrollStarted] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

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
        <div className={styles.navbarMobile}>
            <Modal
                isOpen={isOpen}
                allowScroll={allowScroll}
                toggle={toggle}></Modal>
            <div
                className={`${styles.navbarMobileContainer} ${
                    isScrollStarted ? `${styles.scrolled}` : ''
                }`}>
                <Image
                   onClick={() => {
                    toggleMenu();
                }}
                    className={styles.logo}
                    src={`/navbar/logo-mobile.svg`}
                    width={61 / 2}
                    height={75 / 2}
                    alt='logo'
                />
                <div>
                    <button
                        onClick={() => {
                            toggle();
                            blockScroll();
                        }}>
                        {requestACall}
                    </button>
                    <Image
                        onClick={() => {
                            toggleMenu();
                        }}
                        src={`/main/1-masthead/arrow-bottom.svg`}
                        alt='open-menu'
                        width={84 / 2}
                        height={84 / 2}
                    />
                </div>
            </div>
            {/* <div className={styles.menuContent}> */}
            <div
                className={`${styles.menuContent} ${
                    isMenuOpen ? styles.menuOpen : ''
                }`}>
                <div className={styles.top}>
                    <Image
                        className={styles.logo}
                        src={`/navbar/logo-mobile-black.svg`}
                        width={61 / 2}
                        height={75 / 2}
                        alt='logo'
                    />
                    <ul className='nav text-black'>
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
                    <Image
                        className={styles.logo}
                        src={`/navbar/logo-mobile-black.svg`}
                        width={61 / 2}
                        height={75 / 2}
                        alt='logo'
                    />
                </div>
                <div className={styles.center}>
                    <ul className=''>
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
                </div>
                <div className={styles.bottom}>
                    <div>
                        <p className='paragraph3'>Почта</p>
                        <p className='paragraph2'>sales@villacarte.com</p>
                    </div>
                    <div>
                        <p className='paragraph3'>{montenegro}</p>
                        <p className='paragraph2'>+382 (68) 815-019</p>
                    </div>
                    <div>
                        <p className='paragraph3'>{phuket}</p>
                        <p className='paragraph2'>+66 (89) 290-01-10</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarMobile;
