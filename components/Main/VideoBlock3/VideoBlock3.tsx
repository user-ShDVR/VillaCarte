import React from 'react';
import noise from '@/public/noise.webp';

const video = { link: require( '@/public/taiVideo.mp4' ) };

const VideoBlock = () => {
	return (
		<div className={ 'pos z-5 videoBlock' }>
			<img src={ noise.src } alt="" className={ 'noise' }/>

			<div className={ 'pos container-xl z-5' }>
				<div className={ 'bgLightGrey pos videoInner' }>
					<video className={ 'slideVideo' } autoPlay muted playsInline loop>
						<source src={ video.link } type="video/mp4"/>
					</video>
				</div>
			</div>
		</div>
	);
};

export default VideoBlock;