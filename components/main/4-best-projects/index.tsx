'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import ButtonBorderWhite from '@/ui/button-border-white';
import styles from './styles.module.scss';
import IBestProjectsProps from './interface';

const BestProjects: React.FC<IBestProjectsProps> = ({
    theBestProjectsForLife,
    theBestProjectsForLife2,
    apartments,
    villas,
}) => {
    const BASE_URL = 'https://villacartetest.com';
    const URL = 'https://villacartetest.com/api/pages/thailand/index?lang=RU';
    const [dataa, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(URL);
                const dataa = response.data;
                setData(dataa);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    console.log(dataa, 'data');

    return (
        <div className={styles.bestProjects}>
            <div className={styles.bestProjectsContainer}>
                <div className={styles.title}>
                    <h1 className='header1'>
                        <span>{theBestProjectsForLife}</span>
                        <br />
                        <span>{theBestProjectsForLife2}</span>
                    </h1>
                    <div className='paragraph1'>
                        <span>{apartments}</span>
                        <span>{villas}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {dataa ? (
                        <div>
                            <ul className={styles.imageList}>
                                {dataa.data.apartments.map((item, index) => {
                                    const ownProject =
                                        dataa.data.ownProjects.find(
                                            (project) =>
                                                project.url === item.url
                                        );

                                    return (
                                        <li
                                            key={index}
                                            className={styles.imageItem}>
                                            <div
                                                className={
                                                    styles.imageContainer
                                                }>
                                                <Image
                                                    className='w-[30.347vw] h-[31.25vw]'
                                                    src={`${BASE_URL}/${item.image}`}
                                                    alt='Villa'
                                                    width={1000 / 2}
                                                    height={1000 / 2}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.infoContainer
                                                }>
                                                <div
                                                    className={
                                                        styles.infoContent
                                                    }>
                                                    <h3
                                                        className={
                                                            styles.infoType
                                                        }>
                                                        {ownProject &&
                                                            ownProject.type &&
                                                            ownProject.type.ru}
                                                    </h3>
                                                    <p
                                                        className={
                                                            styles.infoLocation
                                                        }>
                                                        {ownProject &&
                                                            ownProject.location &&
                                                            ownProject.location
                                                                .ru}
                                                    </p>
                                                    <p
                                                        className={
                                                            styles.infoPrice
                                                        }>
                                                        Цена от
                                                        {ownProject &&
                                                            ownProject.price &&
                                                            ownProject.price
                                                                .rub}{' '}
                                                        RUB
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.logoContainer
                                                }>
                                                <Image
                                                    src={`${BASE_URL}/${item.logoImage}`}
                                                    alt='Villa Logo'
                                                    width={1000 / 2}
                                                    height={1000 / 2}
                                                />
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : (
                        <p>Загрузка...</p>
                    )}
                </div>
                <div className='flex justify-center'>
                    <ButtonBorderWhite type='button'>
                        <span>Показать еще 115 предложений</span>
                        <Image
                            className={styles.la}
                            src={`main/4-best-projects/arrow-white.svg`}
                            alt='arrow'
                            width={28 / 2}
                            height={20 / 2}
                        />
                    </ButtonBorderWhite>
                </div>
            </div>
        </div>
    );
};

export default BestProjects;
