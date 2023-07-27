import React from 'react';
import Link from 'next/link';
import { staticResource } from '@/utils/resources';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { useStore } from 'effector-react';
import { $currencies } from '@/store/currencies';

interface IProps {
	url: string;
	image: string;
}

const OfferCard = ( { url, image }: IProps ) => {
	const currency = useStore( $currencies );

	let cur;

	switch ( currency.value ) {
		case 'usd' :
			cur = '$';
			break;
		case 'rub':
			cur = '₽';
			break;
		case 'thb':
			cur = '฿';
			break;
	}

	return (
		<div className={ 'offerCard' }>
			<Link href={ url }>
				<div className={ 'offerCard-wrapper' }>
					<img src={ staticResource( image ) } alt={ '' } className={ 'offerCard-img' }/>

					<div className={ 'description-wrapper' }>

						<div className={ 'text700 colorWhite fz-12' }>
							01/
							<span className={ 'color03' }>03</span>
							<span className={ 'ml-8' }/>|<span className={ 'ml-8' }/>
							Апартаменты
							<span className={ 'ml-8' }/>|<span className={ 'ml-8' }/>
							Район: Банг Тао
						</div>

						<h2 className={ 'h2Subtitle colorWhite pt-12' }>Layan Green Park</h2>

						<article className={ 'text300 colorWhite pt-12' }>
							Первый апарт-отель, который получил сертификацию экологичности EDGE Advanced и стал частью коллекции
							World Hotels. Сейчас в нём продано больше 90% апартаментов
						</article>

						<div className={ 'description-down' }>
							<h2 className={ 'h2Subtitle colorWhite pt-20 m-0 pb-20' }>от { cur }147.000</h2>

							<HoveredButton
								to={ '/' }
								text={ 'Подробнее об объекте' }
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