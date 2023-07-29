import React, { useState } from 'react';
import { staticResource } from '@/utils/resources';
import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '@/public/icons/arrowBtnWhite.svg';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useStore } from 'effector-react';
import { $currencies } from '@/store/currencies';
import { lang } from '@/pages';

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

	const bgAccentOpacity = {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: 'rgba(0, 0, 0, .5)',
		zIndex: 3,
		transition: 'all .5s',
	};

	const styleBg = !mouseOver ? bgAccentOpacity : {};

	// const bgGradientBlack = {
	// 	position: 'absolute',
	// 	top: 0,
	// 	left: 0,
	// 	bottom: 0,
	// 	zIndex: 3,
	// 	background: 'linear-gradient(0deg, #252525, transparent)',
	// 	height: '150px',
	// };
	//
	// const styleGradientBg = (!isMobile && mouseOver) ? bgGradientBlack : {};

	const showContent = {
		opacity: 1,
		transition: 'opacity .5s',
	};

	const displayNone = {
		opacity: 0,
		transition: 'opacity .5s',
	};

	const styleShowContent = mouseOver ? showContent : displayNone;
	const styleShowContentReverse = mouseOver ? displayNone : showContent;

	const scaleImage = {
		scale: '1.1',
		transition: 'scale .5s',
	};

	const scaleImageReverse = {
		scale: '1',
		transition: 'scale .5s',
	};

	const styleScaleImage = mouseOver ? scaleImage : scaleImageReverse;

	return (
		<div className={ 'goodsCard' } onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
			<Link href={ url }>
				<div className={ 'pos goodsCard-image overflowNoHidden' }>
					<img src={ staticResource( image ) } alt={ '' } className={ 'cardPhoto' } style={ styleScaleImage }/>

					<div style={ styleBg }/>
					{ !isMobile && <div className={ 'bgGradientBlack' } style={ styleShowContent }/> }
				</div>

				<div
					className={ 'cardLabel text300 colorWhite' }
					style={ styleShowContent }
				>
					{ lang?.apartments || '' } | { lang?.region || '' }: { lang?.surin || '' }
				</div>

				{ isMobile &&
					<div className={ 'cardLabel text300 colorWhite' }>
						{ lang?.apartments || '' } | { lang?.region || '' }: { lang?.surin || '' }
					</div>
				}

				<img src={ staticResource( logoImage ) } alt={ '' } className={ 'cardLogo' } style={ styleShowContentReverse }/>
				{ isMobile && <img src={ staticResource( logoImage ) } alt={ '' } className={ 'cardLogo' }/> }

				<div className={ 'description-wrapper' } style={ styleShowContent }>
					<div>
						<div className={ 'text300 colorWhite' }>{ lang?.priceFrom || '' } { cur }100 000</div>
						<div className={ 'text300 colorWhite mt-8' }>{ lang?.income || '' } 10% { lang?.aYear || '' }</div>
					</div>
					<p className={ 'text300 colorWhite' }>{ lang?.more || '' } <Image src={ arrowRight } alt={ '' }/></p>
				</div>

				{ isMobile &&
					<div className={ 'description-wrapper' }>
						<div>
							<div className={ 'text300 colorWhite' }>{ lang?.priceFrom || '' } { cur }100 000</div>
							<div className={ 'text300 colorWhite mt-8' }>{ lang?.income || '' } 10% { lang?.aYear || '' }</div>
						</div>
						<p className={ 'text300 colorWhite' }>{ lang?.more || '' } <Image src={ arrowRight } alt={ '' }/></p>
					</div>
				}
			</Link>
		</div>
	);
};

export default GoodsCard;