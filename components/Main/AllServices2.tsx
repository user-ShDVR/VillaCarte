import React from 'react';
import allServicesBg from '@/public/allServicesBg.webp';
import leavesAllServicesMobile from '@/public/leavesAllServicesMobile.webp';
import leavesLeft from '@/public/leavesLeft.webp';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import TitleTextArrowCard from '@/components/common/Cards/TitleTextArrowCard/TitleTextArrowCard';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SimpleButton from '../common/Buttons/SimpleButton';

interface IProps {
	propertySale: string;
	villasAndApartmentsForLife: string;
	propertyForRent: string;
	premiumAndLuxuryVillas: string;
	concierge: string;
	anyIssuesAreSolvedForYou: string;
	propertyManagement: string;
	passiveIncomeWithoutWorries: string;
	allServicesInOneCompany: string;
	allServicesInOneCompany2: string;
	weHelpYouBuyProperty: string;
	learnMore: string;
}
const AllServices: React.FC<IProps> = ({
	propertySale,
	villasAndApartmentsForLife,
	propertyForRent,
	premiumAndLuxuryVillas,
	concierge,
	anyIssuesAreSolvedForYou,
	propertyManagement,
	passiveIncomeWithoutWorries,
	allServicesInOneCompany,
	allServicesInOneCompany2,
	weHelpYouBuyProperty,
	learnMore,
}) => {
	const t = useTranslations('Index');
	const allServices = [
		{ title: propertySale || '', text: villasAndApartmentsForLife || '' },
		{ title: propertyForRent || '', text: premiumAndLuxuryVillas || '' },
		{ title: concierge || '', text: anyIssuesAreSolvedForYou || '' },
		{ title: propertyManagement || '', text: passiveIncomeWithoutWorries || '' },
	];

	return (
		<div className={'allServices'}>

			<div className={'allServices-bg'} style={{ backgroundImage: `url(${allServicesBg.src})` }} />
			<div
				className={'leavesAllServicesMobile'}
				style={{ backgroundImage: `url(${leavesAllServicesMobile.src})` }}
			/>

			<Image src={leavesLeft} alt={''} className={'leavesVideo'} />

			<div className={'services'}>
				<div className={'pos'}>
					<div className={'pt-60-40'}>
						<div>
							<h2 className={'h2Subtitle ls--144'}>{allServicesInOneCompany}</h2>
							<h2 className={'h2Subtitle mb-16 ls--144'}>{allServicesInOneCompany2}</h2>
							<p className={'text300 colorText pt-10'}>
								{weHelpYouBuyProperty}
							</p>
						</div>
					</div>

					<div className={'mt-40'}>
						<SimpleButton text={ learnMore } variant={ 'arrow' } className={ "HoverBtn__AllService" }/>
					</div>
				</div>

				<div className={'pb-16'}>
					<div className={'cardsWrapper'}>
						{allServices.map((item, index) =>
							<TitleTextArrowCard
								key={index}
								title={item.title}
								text={item.text}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllServices;