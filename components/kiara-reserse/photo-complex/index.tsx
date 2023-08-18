import React from 'react';
import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import Slider from 'react-slick';
import photo from '@/public/kiara-reserve/Rectangle.jpg';
import { OfferNextArrow } from '@/components/common/Buttons/SliderArrows/OfferNextArrow';
import { OfferPrevArrow } from '@/components/common/Buttons/SliderArrows/OfferPrevArrow';
import { SamplePrevArrow } from '@/components/common/Buttons/SliderArrows/SamplePrevArrow';


const PhotosOfTheComplex = () => {

	const SliderSetting = {
		dots: false,
		infinite: true,
		arrows: true,
		autoplay: false,
		speed: 1000,
		nextArrow: <OfferNextArrow />,
		prevArrow: <OfferPrevArrow />,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={'bgGradient photos'}>

			<div className={'container photos-inner'}>
				<h2 className={'h1Title colorWhite ls--216'}>Фотографии комплекса</h2>

				<Tabs className={'photos-tabs'} selectedTabPanelClassName={''}>
					<TabList className={'photos-tabList text500 colorWhite'}>
						<Tab>Интерьер</Tab>
						<Tab>Экстерьер</Tab>
						<Tab>Инфраструктура</Tab>
					</TabList>

					<TabPanel className={''}>
					<div className="container">
							<Slider className='PhotosSlider' {...SliderSetting} >
							<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									01<span>/03</span>
								</p>
								
								</div>

								<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									02<span>/03</span>
								</p>
								</div>
								<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									03<span>/03</span>
								</p>
								</div>
							</Slider>
						</div>
					</TabPanel>

					<TabPanel className={''}>
					<div className="container">
							<Slider className='PhotosSlider' {...SliderSetting} >
							<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									01<span>/03</span>
								</p>
								
								</div>

								<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									02<span>/03</span>
								</p>
								</div>
								<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									03<span>/03</span>
								</p>
								</div>
							</Slider>
						</div>
					</TabPanel>
					
					<TabPanel className={''}>
					<div className="container">
							<Slider className='PhotosSlider' {...SliderSetting} >
							<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									01<span>/03</span>
								</p>
								
								</div>

								<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									02<span>/03</span>
								</p>
								</div>
								<div className="slide-inner-container">
								<Image
									className='custom-slide'
									src={photo}
									alt='photo'
									width={2688 / 2}
									height={1400 / 2}
								/>
								<p>
									03<span>/03</span>
								</p>
								</div>
							</Slider>
						</div>
					</TabPanel>


				</Tabs>

				<div className={'mt-28 pb-40-100 d-flex jc-center'}>
					<HoveredButton
						text={'Видео обзор комплекса'}
						to={'/'}
						variant={'arrowRevert'}
						className={'manrope600-14 z-7'}
					/>
				</div>
			</div>
		</div>
	);
};

export default PhotosOfTheComplex;