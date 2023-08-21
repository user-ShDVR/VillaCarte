import React from 'react';
import Link from 'next/link';
import { staticResource } from '@/utils/resources';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { useStore } from 'effector-react';
import { $currencies } from '@/store/currencies';
import { useTranslations } from 'next-intl';
import { IOwnProjects } from '@/types/mainPage';

interface IProps {
	ownProject: IOwnProjects;
	index: number;
	length: number;
}

const OfferCard = ( { ownProject, index, length }: IProps ) => {
	const t = useTranslations('Index');
	const currency = useStore( $currencies );
	const currenciesLS = localStorage.getItem( 'currency' );
	let objFromStringLocalStorage = { value: currenciesLS, label: currenciesLS };

	let cur;
	let price;

	switch ( objFromStringLocalStorage.value || currency.value ) {
		case 'usd' :
			cur = '$';
			price = ownProject.price.usd;
			break;
		case 'rub':
			cur = '₽';
			price = ownProject.price.rub;
			break;
		case 'thb':
			cur = '฿';
			price = ownProject.price.thb;
			break;
	}

	return (
		<div className={ 'offerCard' }>
			<Link href={ ownProject.url }>
				<div className={ 'offerCard-wrapper' }>
					<img src={ staticResource( ownProject.image ) } alt={ '' } className={ 'offerCard-img' }/>

					<div className={ 'description-wrapper' }>

						<div className={ 'text700 colorWhite fz-12' }>
							0{ index + 1 }/
							<span className={ 'color03' }>0{ length }</span>
							<span className={ 'ml-8' }/>|<span className={ 'ml-8' }/>
							{ ownProject.type.en || '' }
							<span className={ 'ml-8' }/>|<span className={ 'ml-8' }/>
							{ ownProject.location.en || '' }
						</div>

						<h2 className={ 'h2Subtitle colorWhite' }>{ ownProject.name }</h2>

						<article className={ 'text300 colorWhite' }>
							{ t('theFirstAparthotelToGainTheEDGE') || '' }
						</article>

						<div className={ 'description-down' }>
							<h2 className={ 'h2Subtitle colorWhite pt-20 m-0 pb-20' }>{ t('from') || '' } { cur }{ price }</h2>

							<HoveredButton
								to={ '/' }
								text={ t('learnMoreAbout') || '' }
								variant={ 'arrowRevert' }
								// className={'offerCard-btn'}
							/>
						</div>
					</div>

					<div className={ 'invisibleRight' }/>
				</div>
			</Link>
		</div>
	);
};

export default OfferCard;