import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const VideoBlock = () => {
	const videos = [
        '/taiVideo.mp4',
        '/taiVideo2.mp4',
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
		<div className={ 'pos z-5 videoBlock' }>

			<div className={ 'pos z-5' }>
			<div className={'videoContainer'}>
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
                    <div className={'videoItems'} style={{ '--progress': progress }as any}>
					<div className="progress-bar html">
    				<progress id="html" max="100"></progress>
  					</div>

                        <div className={'videoControls'}>
                            <button
                                onClick={handlePreviousVideo}
                                id='arrow-left'
                                className={
                                    currentVideoIndex === 0 ? 'disabled' : 'videoBtn'
                                }
                                disabled={currentVideoIndex === 0}>
                                <Image
                                    src={`/icons/prevArrow.svg`}
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
                                        : 'videoBtn'
                                }
                                disabled={
                                    currentVideoIndex === videos.length - 1
                                }>
                                <Image
                                    src={`/icons/nextArrow.svg`}
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

export default VideoBlock;