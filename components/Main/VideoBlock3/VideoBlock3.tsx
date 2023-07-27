import React from 'react';

const video = { link: require( '@/public/taiVideo.mp4' ) };

const VideoBlock = () => {
	return (
		<div className={ 'pos z-5 videoBlock' }>
			<div className={ 'pos container-xl z-5' }>
				<div className={ 'bgLightGrey pos videoInner' }>
					<video className={ 'slideVideo' } autoPlay muted playsInline loop controls>
						<source src={ video.link } type="video/mp4"/>
					</video>
				</div>
			</div>
		</div>
	);
};

export default VideoBlock;