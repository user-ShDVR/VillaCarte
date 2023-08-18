import React from 'react';
import { SampleNextArrow } from '@/components/common/Buttons/SliderArrows/SampleNextArrow';
import { SamplePrevArrow } from '@/components/common/Buttons/SliderArrows/SamplePrevArrow';

export const weAreTrustedSliderSettings = {
	dots: false,
	infinite: true,
	arrows: true,
	autoplay: false,
	speed: 1000,
	nextArrow: <SampleNextArrow/>,
	prevArrow: <SamplePrevArrow/>,
	swipeToSlide: true,
	slidesToShow: 2.02,
	slidesToScroll: 1,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 1,
			}
		},
	]
};