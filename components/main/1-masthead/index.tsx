'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import IMastheadProps from './interface';

const Masthead: React.FC<IMastheadProps> = ({resortReal}) => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={styles.masthead}>
                <div className={styles.mastheadContainer}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline>
                        <source
                            src={
                                process.env.NODE_ENV === 'production'
                                    ? '/main/1-masthead/bg-video.mp4'
                                    : '/main/1-masthead/bg-video.mp4'
                            }
                            type='video/mp4'
                        />
                    </video>
                    <div className={styles.title}>
                        <h1 className='header-big'>VillaCarte</h1>
                        <p className='paragraph1'>{resortReal}</p>
                    </div>
                    <div
                        className={styles.scrollDown}
                        onClick={handleScroll}>
                        <Image
                            src={`/main/1-masthead/arrow-bottom.svg`}
                            width={84 / 2}
                            height={84 / 2}
                            alt='scroll down'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Masthead;
