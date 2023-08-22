import React from 'react';
import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import Slider from 'react-slick';
import Info from '@/public/kiara-reserve/PlanerInfo.svg';
import Choose from '@/public/kiara-reserve/PlanerChoose.svg';

import { OfferNextArrow } from '@/components/common/Buttons/SliderArrows/OfferNextArrow';
import { OfferPrevArrow } from '@/components/common/Buttons/SliderArrows/OfferPrevArrow';
import { SamplePrevArrow } from '@/components/common/Buttons/SliderArrows/SamplePrevArrow';

interface IProps {
	studio: string;
	one: string;
	two: string;
	threePlus: string;
	penthouse: string;
	duplex: string;
	areaTextHeader: string;
	square: string;
	bedrooms: string;
	bathroom: string;
	view: string;
	price: string;
}
const Planer: React.FC<IProps> = ({
	studio,
	one,
	two,
	threePlus,
	penthouse,
	duplex,
	areaTextHeader,
	square,
	bedrooms,
	bathroom,
	view,
	price
}) => {

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
		<div className={'bgGradient planer'}>

			<div className={'planer-inner'}>
				<div className="">
					<h2 className={'h1Title colorWhite ls--216'}>Планировки</h2>
				</div>

				<Tabs className={'planer-tabs'} selectedTabPanelClassName={''}>
					<TabList className={'planer-tabList text500 colorWhite'}>
						<Tab>{studio}</Tab>
						<Tab>{one}</Tab>
						<Tab>{two}</Tab>
						<Tab>{threePlus}</Tab>
						<Tab>{penthouse}</Tab>
						<Tab>{duplex}</Tab>
					</TabList>

					<TabPanel className={''}>
						<div className="Area-container">
							<div className="Area-info">
								<div className="Area-inner-info">
									<div className="Area-text">
										<h1>
											{areaTextHeader}
										</h1>
										<p>
											{square}
										</p>
										<p>
											{bedrooms}
										</p>
										<p>
											{bathroom}
										</p>
										<p>
											{view}
										</p>
										<div className="Area-tags"> 									{/* добавляй скок хочешь только в спан не забудь обернуть <3 */}
											<span>
												Частный бассейн
											</span>
											<span>
												Частный сад
											</span>
											<span>
												Балкон
											</span>
											<span>
												Терасса
											</span>
											<span>
												Джакузи
											</span>
										</div>
									</div>
									<div className="Area-price">
										<p>{price}</p>
										<h2>от $1 540 000</h2>
										<HoveredButton
											text={'Забронировать'}
											to={'/'}
											variant={'simple'}
											className={'manrope600-14 z-7'}
										/>
									</div>
								</div>
								<div className="Area-slider">
									<p>Grand Residences</p>
									<Image
										alt='Choose-image'
										src={Info}
									/>
								</div>
							</div>
							<div className="Area-choose">
								<div className="item_Planer">
									<p>Grand Residences</p>
									<Image
										alt='Choose-image'
										src={Choose}
									/>
									<p>382 м2</p>
								</div>
								<div className="item_Planer">
									<p>Grand Residences</p>
									<Image
										alt='Choose-image'
										src={Choose}
									/>
									<p>382 м2</p>
								</div>
								<div className="item_Planer">
									<p>Grand Residences</p>
									<Image
										alt='Choose-image'
										src={Choose}
									/>
									<p>382 м2</p>
								</div>
								<div className="item_Planer">
									<p>Grand Residences</p>
									<Image
										alt='Choose-image'
										src={Choose}
									/>
									<p>382 м2</p>
								</div>
							</div>
						</div>
					</TabPanel>
				</Tabs>

			</div>
		</div>
	);
};

export default Planer;