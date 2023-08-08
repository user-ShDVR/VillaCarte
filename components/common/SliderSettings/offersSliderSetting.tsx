import React from 'react';
import { SamplePrevArrow } from '@/components/common/Buttons/SliderArrows/SamplePrevArrow';
import { OfferNextArrow } from '@/components/common/Buttons/SliderArrows/OfferNextArrow';

export const offersSliderSetting = {
	dots: false,
	infinite: true,
	arrows: true,
	autoplay: true,
	speed: 1000,
	nextArrow: <OfferNextArrow/>,
	prevArrow: <SamplePrevArrow/>,
	autoplaySpeed: 5000,
	swipeToSlide: true,
	slidesToShow: 1.1,
	slidesToScroll: 1,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
			}
		},
	]
};

