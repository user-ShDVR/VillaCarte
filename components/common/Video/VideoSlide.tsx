import React from 'react';
import SpinnerVideo from '@/components/common/SpinnerVideo/SpinnerVideo';
import { useStore } from 'effector-react';
import { $indicator, $indicator2 } from '@/store/slideIndicator';

interface IProps {
	video: any;
}

const VideoSlide = ( { video }: IProps ) => {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );

	return (
		<div className={ 'bgLightGrey pos' }>
			<video className={ 'slideVideo' } autoPlay muted playsInline loop>
				<source src={ video } type="video/mp4"/>
			</video>

			{ indicator && <SpinnerVideo/> }
			{ indicator2 && <SpinnerVideo/> }
		</div>
	);
};

export default VideoSlide;