import React, { useState } from 'react';
import { staticResource } from '@/utils/resources';
import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '@/public/icons/arrowBtnWhite.svg';
import { useWindowSize } from '@/hooks/useWindowSize';

interface IProps {
	image: string;
	logoImage: string;
	url: string;
}

const GoodsCard = ( { image, logoImage, url }: IProps ) => {
	const size = useWindowSize();
	// @ts-ignore
	const isMobile = size.width <= 1023;

	const [ mouseOver, setMouseOver ] = useState<boolean>( false );

	const onMouseOver = () => {
		setMouseOver( true );
	};
	const onMouseLeave = () => {
		setMouseOver( false );
	};

	return (
		<div className={ 'goodsCard' } onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
			<Link href={ url }>
				<div className={ 'pos goodsCard-image overflowNoHidden' }>
					<img src={ staticResource( image ) } alt={ '' } className={ 'cardPhoto' }/>
					{ !mouseOver && <div className={ 'bgAccentOpacity' }/> }
					{ !isMobile && mouseOver && <div className={ 'bgGradientBlack' }/> }
				</div>

				{ mouseOver && <div className={ 'cardLabel text300 colorWhite' }>Апартаменты | Район: Сурин</div> }
				{ isMobile && <div className={ 'cardLabel text300 colorWhite' }>Апартаменты | Район: Сурин</div> }

				{ !mouseOver && <img src={ staticResource( logoImage ) } alt={ '' } className={ 'cardLogo' }/> }
				{ isMobile && <img src={ staticResource( logoImage ) } alt={ '' } className={ 'cardLogo' }/> }

				{ mouseOver &&
					<div className={ 'description-wrapper' }>
						<div>
							<div className={ 'text300 colorWhite' }>Цена: от $100 000</div>
							<div className={ 'text300 colorWhite mt-8' }>Доход 10% в год</div>
						</div>
						<p className={ 'text300 colorWhite' }>Подробнее <Image src={ arrowRight } alt={ '' }/></p>
					</div>
				}
				{ isMobile &&
					<div className={ 'description-wrapper' }>
						<div>
							<div className={ 'text300 colorWhite' }>Цена: от $100 000</div>
							<div className={ 'text300 colorWhite mt-8' }>Доход 10% в год</div>
						</div>
						<p className={ 'text300 colorWhite' }>Подробнее <Image src={ arrowRight } alt={ '' }/></p>
					</div>
				}
			</Link>
		</div>
	);
};

export default GoodsCard;