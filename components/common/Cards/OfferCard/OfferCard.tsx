import React from 'react';
import Link from 'next/link';
import { staticResource } from '@/utils/resources';
import HoveredButton from '@/components/common/Buttons/HoveredButton';

interface IProps {
	url: string;
	image: string;
}

const OfferCard = ( { url, image }: IProps ) => {

	return (
		<div className={ 'offerCard' }>
			<Link href={ url }>
				<div className={ 'offerCard-wrapper' }>
					<img src={ staticResource( image ) } alt={ '' } className={ 'offerCard-img' }/>

					<div className={ 'description-wrapper' }>

						<div className={ 'text300 colorWhite' }>01/03 | Апартаменты | Район: Банг Тао</div>

						<h2 className={ 'h2Subtitle colorWhite pt-12' }>Layan Green Park</h2>

						<article className={ 'text300 colorWhite pt-12' }>
							Первый апарт-отель, который получил сертификацию экологичности EDGE Advanced и стал частью коллекции
							World Hotels. Сейчас в нём продано больше 90% апартаментов
						</article>

						<div className={ 'description-down' }>
							<h2 className={ 'h2Subtitle colorWhite pt-20 m-0' }>от $147.000</h2>

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