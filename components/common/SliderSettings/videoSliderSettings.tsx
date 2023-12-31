import React from 'react';
import { SampleNextArrow } from '@/components/common/Buttons/SliderArrows/SampleNextArrow';
import { SamplePrevArrow } from '@/components/common/Buttons/SliderArrows/SamplePrevArrow';

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

