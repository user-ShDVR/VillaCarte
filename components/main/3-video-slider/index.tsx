'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const VideoSlider: React.FC = () => {
    const videos = [
        '/main/3-video-slider/video-slider.mp4',
        '/main/3-video-slider/video-slider2.mp4',
    ];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [videoKey, setVideoKey] = useState(Date.now());
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [progress, setProgress] = useState(0);

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setVideoKey(Date.now());
    };

    const handlePreviousVideo = () => {
        setCurrentVideoIndex(
            (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
        );
        setVideoKey(Date.now());
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;

            if (!isNaN(duration) && duration > 0) {
                const calculatedProgress = (currentTime / duration) * 100;
                setProgress(calculatedProgress);
            }
        }
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener(
                    'timeupdate',
                    handleTimeUpdate
                );
            }
        };
    }, [videoRef, currentVideoIndex]);

    useEffect(() => {
        setProgress(0);
    }, [currentVideoIndex]);

    return (
        <div className={styles.videoSlider}>
            <div className={styles.videoSliderContainer}>
                <div className={styles.videoContainer}>
                    <video
                        ref={videoRef}
                        key={videoKey}
                        autoPlay
                        loop
                        muted
                        playsInline>
                        <source
                            src={videos[currentVideoIndex]}
                            type='video/mp4'
                        />
                    </video>
                    <div className={styles.videoItems}>
                        <div className={styles.videoProgressBar}>
                            <div
                                className={styles.progressOverlay}
                                style={{ opacity: progress / 100 }}></div>
                            <span>&#x25CF;</span>
                        </div>

                        <div className={styles.videoControls}>
                            <button
                                onClick={handlePreviousVideo}
                                id='arrow-left'
                                className={
                                    currentVideoIndex === 0 ? 'disabled' : ''
                                }
                                disabled={currentVideoIndex === 0}>
                                <Image
                                    src={`/main/3-video-slider/arrow-left.svg`}
                                    alt='arrow-left'
                                    width={40 / 2}
                                    height={28 / 2}
                                />
                            </button>
                            <button
                                onClick={handleNextVideo}
                                id='arrow-right'
                                className={
                                    currentVideoIndex === videos.length - 1
                                        ? 'disabled'
                                        : ''
                                }
                                disabled={
                                    currentVideoIndex === videos.length - 1
                                }>
                                <Image
                                    src={`/main/3-video-slider/arrow-right.svg`}
                                    alt='arrow-right'
                                    width={40 / 2}
                                    height={28 / 2}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSlider;
