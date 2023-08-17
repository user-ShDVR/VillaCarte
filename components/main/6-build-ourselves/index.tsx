'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import axios from 'axios';
import ButtonBorderWhite from '@/ui/button-border-white';
import ButtonCircle from '@/ui/button-circle';
import IBuildOurselvesProps from './interface';

const BuildOurSelves: React.FC<IBuildOurselvesProps> = ({
    weAlsoBuildOurselves,
    weAlsoBuildOurselves2,
    buyRealEstateOnlyFromTrustedContractors,
    getAProfitCalculation,
    willBeTheFirstToKnow,
    remainConfidentAndCalm,
}) => {
    const BASE_URL = 'https://villacartetest.com';
    const URL = 'https://villacartetest.com/api/pages/thailand/index?lang=RU';
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(URL);
                const data = response.data;
                setData(data);
            } catch (error) {
                console.error('ошибка при fetchinge', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const nextButton = document.querySelector('#next-button');

        if (slider && nextButton) {
            const sliderItem = document.querySelector('.slider-item');
            const sliderItemWidth = sliderItem ? sliderItem.clientWidth : 0;
            const step = sliderItemWidth

            let position = 0;

            nextButton.addEventListener('click', () => {
                position =
                    (position + step) % (data?.data.ownProjects.length * step);

                slider.style.transform = `translateX(-${position}px)`;
                slider.classList.add('slider-transition');
            });
        }
    }, [data]);
    return (
        <div className={styles.buildOurselves}>
            <div className={styles.buildOurselvesContainer}>
                <div className={styles.top}>
                    <h1 className='header1'>
                        <span>{weAlsoBuildOurselves}</span>
                        <br />
                        <span>{weAlsoBuildOurselves2}</span>
                    </h1>
                    <ul className='paragraph1'>
                        <li>
                            <Image
                                className='svg'
                                src={`/main/6-build-ourselves/star.svg`}
                                alt='icon'
                                width={50 / 2}
                                height={52 / 2}
                            />
                            <p>{buyRealEstateOnlyFromTrustedContractors}</p>
                        </li>
                        <li>
                            <Image
                                src={`/main/6-build-ourselves/star.svg`}
                                alt='icon'
                                width={50 / 2}
                                height={52 / 2}
                            />
                            <p>{getAProfitCalculation}</p>
                        </li>
                        <li>
                            <Image
                                src={`/main/6-build-ourselves/star.svg`}
                                alt='icon'
                                width={50 / 2}
                                height={52 / 2}
                            />
                            <p>{willBeTheFirstToKnow}</p>
                        </li>
                        <li>
                            <Image
                                src={`/main/6-build-ourselves/star.svg`}
                                alt='icon'
                                width={50 / 2}
                                height={52 / 2}
                            />
                            <p>{remainConfidentAndCalm}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    {data ? (
                        <div>
                            <ul className='relative slider'>
                                {data.data.ownProjects.map(
                                    (item, index: number) => (
                                        <li
                                            key={index}
                                            className='slider-item'>
                                            <Image
                                                className='img'
                                                src={`${BASE_URL}/${item.image}`}
                                                alt='Villa'
                                                width={1000 / 2}
                                                height={1000 / 2}
                                            />
                                            <div className={styles.text}>
                                                <div
                                                    className={
                                                        styles.descriptionContainer
                                                    }>
                                                    <div
                                                        className={
                                                            styles.smallDescription
                                                        }>
                                                        <span>01/03</span> |
                                                        <span>
                                                            {item.type.ru}
                                                        </span>{' '}
                                                        |
                                                        <span>
                                                            {item.location.ru}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.description
                                                        }>
                                                        <h2 className='header2'>
                                                            {item.name}
                                                        </h2>
                                                        <p className='paragraph3'>
                                                            {
                                                                item.description
                                                                    .ru
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className={styles.price}>
                                                    <p>от {item.price.rub} $</p>
                                                    <ButtonBorderWhite
                                                        type='button'>
                                                        <span>
                                                            Подробнее об объекте
                                                        </span>
                                                        <Image
                                                            src={`/main/6-build-ourselves/arrow-white.svg`}
                                                            alt='arrow'
                                                            width={28 / 2}
                                                            height={20 / 2}
                                                        />
                                                    </ButtonBorderWhite>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                            <div
                                className='absolute right-[6vw] top-[15vw]'
                                id='next-button'>
                                <ButtonCircle
                                    type='button'
                                    bgColor='none'
                                    borderColor='white'
                                    color='white'>
                                    <Image
                                        src={`/main/6-build-ourselves/arrow-white.svg`}
                                        alt='arrow'
                                        width={28 / 2}
                                        height={20 / 2}
                                    />
                                </ButtonCircle>
                            </div>
                        </div>
                    ) : (
                        <p>Загрузка...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BuildOurSelves;
