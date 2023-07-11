import React from 'react';
import VideoSlide from '@/components/common/Video/VideoSlide';
import Slider from 'react-slick';
import { videoSliderSettings } from '@/components/common/SliderSettings/videoSliderSettings';

const videos = [
	{ link: require( '@/public/taiVideo.mp4' ) },
	{ link: require( '@/public/taiVideo2.mp4' ) },
];

const VideoBlock = () => {
	return (
		<div className={ 'bgLightGrey' }>
			<div className={ 'pos container-xl z-5' }>
				<Slider { ...videoSliderSettings } className={ 'videoSlider' }>
					{ videos.map( ( video, index ) =>
						<VideoSlide key={ index } video={ video.link }/>
					) }
				</Slider>
			</div>
		</div>
	);
};

export default VideoBlock;