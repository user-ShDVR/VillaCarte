import React from 'react';
import allServicesBg from '@/public/allServicesBg.webp';
import leavesVideo from '@/public/leavesLeft.webp';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import TitleTextArrowCard from '@/components/common/Cards/TitleTextArrowCard/TitleTextArrowCard';
import Image from 'next/image';
import { lang } from '@/pages';

const AllServices = () => {
	const allServices = [
		{ title: lang?.propertySale || '', text: lang?.villasAndApartmentsForLife || '' },
		{ title: lang?.propertyForRent || '', text: lang?.premiumAndLuxuryVillas || '' },
		{ title: lang?.concierge || '', text: lang?.anyIssuesAreSolvedForYou || '' },
		{ title: lang?.propertyManagement || '', text: lang?.passiveIncomeWithoutWorries || '' },
	];

	return (
		<div className={ 'allServices' }>
			<div className={ 'allServices-bg' } style={ { backgroundImage: `url(${ allServicesBg.src })` } }/>

			<Image src={ leavesVideo } alt={ '' } className={ 'leavesVideo' }/>

			<div className={ 'container services' }>
				<div className={ 'pos' }>
					<div className={ 'pt-60-40' }>
						<div>
							<h2 className={ 'h2Subtitle ls--144' }>{ lang?.allServicesInOneCompany || '' }</h2>
							<h2 className={ 'h2Subtitle mb-16 ls--144' }>{ lang?.allServicesInOneCompany2 || '' }</h2>
							<p className={ 'text300 colorText pt-10' }>
								{ lang?.weHelpYouBuyProperty || '' }
							</p>
						</div>
					</div>

					<div className={ 'mt-40' }>
						<HoveredButton to={ '/' } text={ lang?.learnMore || '' } variant={ 'arrow' } className={ 'mt-16' }/>
					</div>
				</div>

				<div className={ 'pb-16' }>
					<div className={ 'cardsWrapper' }>
						{ allServices.map( ( item, index ) =>
							<TitleTextArrowCard
								key={ index }
								title={ item.title }
								text={ item.text }
							/>
						) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllServices;