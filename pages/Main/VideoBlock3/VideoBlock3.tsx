import React from 'react';
import VideoSlide from '@/components/common/Video/VideoSlide';
import Slider from 'react-slick';
import { videoSliderSettings } from '@/pages/Main/VideoBlock3/videoSliderSettings';

const videos = [
	// { link: '@/public/taiVideo.mp4' },
	// { link: '../../public/taiVideo2.mp4' },
	{ link: require( '@/public/taiVideo.mp4' ) },
	{ link: require( '@/public/taiVideo2.mp4' ) },
];

const VideoBlock = () => {
	return (
		<div className={ 'pos' }>
			<Slider { ...videoSliderSettings } className={ 'videoSlider' }>
				{ videos.map( ( video, index ) =>
					<VideoSlide key={ index } video={ video.link }/>
				) }
			</Slider>
		</div>
	);
};

export default VideoBlock;