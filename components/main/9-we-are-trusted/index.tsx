'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import WeAreTrustedItem from './we-are-trusted-item';
import IWeAreTrustedProps from './interface';

const WeAreTrusted: React.FC<IWeAreTrustedProps> = ({
    weAreTrustedBySuccessfulPeople,
    yensBrakerbush,
    cEOofPPGIndustry,
    review1,
    okishimaJunichi,
    cEOYOKOHAMARUS,
    review2
}) => {
    const slides = [
        {
            photo: '/main/9-we-are-trusted/person1.webp',
            name: yensBrakerbush,
            jobTitle: cEOofPPGIndustry,
            review: review1,
        },
        {
            photo: '/main/9-we-are-trusted/person2.webp',
            name: okishimaJunichi ,
            jobTitle: cEOYOKOHAMARUS ,
            review: review2 ,
        },
        {
            photo: '',
            name: 'Имя 3',
            jobTitle: 'Должность 3',
            review: '... Текст отзыва 3 ...',
        },
        {
            photo: '',
            name: 'Имя 3',
            jobTitle: 'Должность 4',
            review: '... Текст отзыва 4...',
        },
    ];

    const totalSlides = slides.length;
    const slidesPerPage = 2;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((currentSlideIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlideIndex(
            (currentSlideIndex - 1 + totalSlides) % totalSlides
        );
    };
    return (
        <div className={styles.reviews}>
            <div className={styles.reviewsContainer}>
                <div className={styles.top}>
                    <h1 className='header1'>
                        {weAreTrustedBySuccessfulPeople}
                    </h1>
                    <div className={styles.buttonContainer}>
                        <button onClick={prevSlide}>
                            <Image
                                className='arrow-prev'
                                src={`/main/9-we-are-trusted/arrow-white.svg`}
                                alt='arrow'
                                width={40 / 2}
                                height={28 / 2}
                            />
                        </button>
                        <button onClick={nextSlide}>
                            <Image
                                className='arrow-next'
                                src={`/main/9-we-are-trusted/arrow-white.svg`}
                                alt='arrow'
                                width={40 / 2}
                                height={28 / 2}
                            />
                        </button>
                    </div>
                </div>

                <div className={styles.allReviews}>
                    {slides
                        .slice(
                            currentSlideIndex,
                            currentSlideIndex + slidesPerPage
                        )
                        .map((slide, index) => (
                            <WeAreTrustedItem
                                key={index}
                                {...slide}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default WeAreTrusted;
