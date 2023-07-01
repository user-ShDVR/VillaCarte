import React from 'react';
import { useStore } from 'effector-react';
import { $indicator, $indicator2, showIndicator, showIndicator2 } from '@/store/slideIndicator';

function SampleNextArrow( { className, style, onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onNextClick = () => {
		onClick();
		showIndicator( !indicator );
		showIndicator2( !indicator2 );
	};

	return (
		<div
			className={ className }
			style={ { ...style } }
			onClick={ onNextClick }
		/>
	);
}

function SamplePrevArrow( { className, style, onClick }: any ) {
	const indicator = useStore( $indicator );
	const indicator2 = useStore( $indicator2 );
	const onPrevClick = () => {
		onClick();
		showIndicator( !indicator );
		showIndicator2( !indicator2 );
	};

	return (
		<div
			className={ className }
			style={ { ...style } }
			onClick={ onPrevClick }
		/>
	);
}

export const videoSliderSettings = {
	dots: false,
	infinite: true,
	arrows: true,
	autoplay: true,
	speed: 1000,
	nextArrow: <SampleNextArrow/>,
	prevArrow: <SamplePrevArrow/>,
	autoplaySpeed: 5000,
	swipeToSlide: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 0,
};

