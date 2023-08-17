'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import styles from './styles.module.scss';
import IShareExclusiveContentProps from './interface';

const ShareExclusiveContent: React.FC<IShareExclusiveContentProps> = ({
    sharingExclusiveContentFromTheIsland,
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

    return (
        <div className={styles.shareExclusiveContent}>
            <div className={styles.container}>
                <h1 className='header1'>{sharingExclusiveContentFromTheIsland}</h1>
                {data ? (
                    <div className={styles.content}>
                        <div className={styles.youtubeVideos}>
                            {data.data.youTubeVideos.map((video) => (
                                <div
                                    key={video.publicationId}
                                    className={styles.videoContainer}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.publicationId}?controls=0&modestbranding=1&rel=0`}
                                        title='YouTube video player'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen></iframe>
                                </div>
                            ))}
                            <Link href='https://www.youtube.com/@VillaCartePhuket/videos'>
                                <div className={styles.watchAll}>
                                    <div className='top'>
                                        <Image
                                            src={`main/11-share-exclusive-content/youtube.svg`}
                                            alt='arrow'
                                            width={52 / 2}
                                            height={40 / 2}
                                        />
                                    </div>
                                    <div className={styles.bottom}>
                                        <p className='paragraph2'>
                                            Смотреть <br /> экспертные видео
                                        </p>
                                        <Image
                                            src={`main/11-share-exclusive-content/arrow-right-blue.svg`}
                                            alt='arrow'
                                            width={40 / 2}
                                            height={28 / 2}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.instagramPosts}>
                            {data.data.instagramPosts.map((post) => (
                                <div
                                    key={post.publicationId}
                                    className={styles.hoverZoom}>
                                    <figure className='overflow-hidden'>
                                        <Image
                                            className='w-[14.653vw] h-[13.194vw]'
                                            src={`${BASE_URL}/${post.image}`}
                                            alt='Instagram Post'
                                            width={422 / 2}
                                            height={380 / 2}
                                        />
                                    </figure>
                                </div>
                            ))}
                            <Link href='https://www.youtube.com/@VillaCartePhuket/videos'>
                                <div className={styles.knowAll}>
                                    <div className='top'>
                                        <Image
                                            src={`main/11-share-exclusive-content/instagram.svg`}
                                            alt='arrow'
                                            width={52 / 2}
                                            height={40 / 2}
                                        />
                                    </div>
                                    <div className={styles.bottom}>
                                        <p className='paragraph2'>
                                            Узнать
                                            <br />
                                            все о недвижимости в Таиланде
                                        </p>
                                        <Image
                                            src={`main/11-share-exclusive-content/arrow-right-blue.svg`}
                                            alt='arrow'
                                            width={40 / 2}
                                            height={28 / 2}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p>123</p>
                )}
            </div>
        </div>
    );
};

export default ShareExclusiveContent;
