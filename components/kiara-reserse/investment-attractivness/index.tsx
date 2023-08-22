import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Image from 'next/image';
import VideoKiera from '../video-kiera';
import photo from '@/public/kiara-reserve/minorlogo.png';
import InvestrBg from '@/public/kiara-reserve/investAttBg.png';
import PalmOne from '@/public/kiara-reserve/TenYearsT.png';
import PalmTwo from '@/public/kiara-reserve/TenYearsB.png';
import { useWindowSize } from '@/hooks/useWindowSize';
import Slider from 'react-slick';


interface IProps {
	Program: string;
	Rassrochka: string;
	Okupaemost: string;
	ControledCompany: string;
	garanted: string;
	year5: string;
	managmentCompany: string;
	rentalPool: string;
	managmentCompanyBuilder: string;
	Summary: string;
	booking: string;
	signing: string;
	foundationReadiness: string;
	concreteStructure: string;
	readlinesWall: string;
	clearFloor: string;
	registration: string;
	year10: string;
approximately: string;
underManagement: string;
averageRating: string;
}
const InvestmentAttractivness: React.FC<IProps> = ({
	Program,
	Rassrochka,
	Okupaemost,
	ControledCompany,
	garanted,
	year5,
	managmentCompany,
	rentalPool,
	managmentCompanyBuilder,
	Summary,
	booking,
	signing,
	foundationReadiness,
	concreteStructure,
	readlinesWall,
	clearFloor,
	registration,
	year10,
approximately,
underManagement,
averageRating,
}) => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 500;
	const settings = {
		dots: true,
		infinite: false, // Исправил название параметра
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '0', // Добавлено
	};
	return (
		<div className={'Invest'}>
			<div style={{ position: 'relative', margin: 'auto' }}>
				<VideoKiera />
			</div>
			<div className={'Invest-inner'}>
				<Image src={InvestrBg} alt='bg' className={'Invest-bg'} />
				<h1 className='Invest-inner-header' >Инвестиционная<br />привлекательность</h1>


				<Tabs className={'Invest-tabs'} selectedTabPanelClassName={''}>
					<TabList className={'Invest-tabList text500 colorBlack'}>
						<Tab>{Program}</Tab>
						<Tab>{Rassrochka}</Tab>
						<Tab>{Okupaemost}</Tab>
						<Tab>{ControledCompany}</Tab>
					</TabList>
					{isMobile ?
						<TabPanel className={' container Invest-tabs-container-mobile'}>
							<Slider className='InvestSlide' {...settings}>
								<div className='slideWrapper'>
									<div className='slidecont'>
										<div className="mFlex">
											<h1>{garanted}</h1>
											<span className="invest-percent">7%</span>
											<h2>{year5}</h2>
											<p>
												{managmentCompany}
											</p>
										</div>
									</div>
								</div>

								<div className='slideWrapper'>
									<div className='slidecont'>
										<div className="mFlex ">
											<h1>{rentalPool}</h1>
											<span className="invest-percent">60/40%</span>
											<p>{managmentCompanyBuilder}</p>
										</div>
									</div>
								</div>
							</Slider>

						</TabPanel>
						:
						<TabPanel className={'Invest-tabs-container'}>

							<div>
								<h1>{garanted}</h1>
								<span className="invest-percent">7%</span>
								<h2>{year5}</h2>
								<p>
									{managmentCompany}
								</p>
							</div>
							<div className="investLine">
							</div>
							<div>
								<h1>{rentalPool}</h1>
								<span className="invest-percent">60/40%</span>
								<p>{managmentCompanyBuilder}</p>
							</div>
						</TabPanel>
					}


					<TabPanel className={'Invest-tabs-container2'}>
						<h1>{Summary}</h1>
						<table>
							<tbody>
								<tr>
									<td className='table-percent' >2%</td>
									<td>{booking}</td>
								</tr>
								<tr>
									<td className='table-percent'>28%</td>
									<td>{signing}</td>
								</tr>
								<tr>
									<td className='table-percent'>28%</td>
									<td>{foundationReadiness}</td>
								</tr>
								<tr>
									<td className='table-percent'>15%</td>
									<td>{concreteStructure}</td>
								</tr>
								<tr>
									<td className='table-percent'>15%</td>
									<td>{readlinesWall}</td>
								</tr>
								<tr>
									<td className='table-percent'>10%</td>
									<td>{clearFloor}</td>
								</tr>
								<tr>
									<td className='table-percent'>10%</td>
									<td>{registration}</td>
								</tr>
							</tbody>
						</table>
					</TabPanel>

					<TabPanel className={'Invest-tabs-container3'}>
						<Image src={PalmOne} alt='bg' className={'Invest-palmT'} />
						<Image src={PalmTwo} alt='bg' className={'Invest-palmb'} />

						<div>
							<span className="invest-percent">{year10}</span>
							<p>{approximately}</p>
						</div>
					</TabPanel>

					<TabPanel className={'Invest-tabs-container4'}>
						<div>
							<h1>{underManagement}</h1>
							<p>
								{averageRating}
							</p>
						</div>
						<div style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Image
								className='logo'
								src={photo}
								alt='photo'
							/>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default InvestmentAttractivness;