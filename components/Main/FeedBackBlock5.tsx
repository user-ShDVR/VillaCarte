import React, { useEffect, useState } from 'react';
import palmsTransparent from '@/public/palmsTransparent.png';
import flowerRight from '@/public/flowerRight.png';
import Image from 'next/image';
import FeedBackForm from '@/components/common/Forms/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';
import { Slide } from 'react-awesome-reveal';

const FeedBackBlock = () => {

	const [ scrolled, setScrolled ] = useState<boolean>( false );

	useEffect( () => {

		const onScroll = () => {
			// @ts-ignore
			if ( document.documentElement.scrollTop > 2200 ) {
				setScrolled( true );
			} else {
				setScrolled( false );
			}
		};

		window.addEventListener( 'scroll', onScroll );

		return () => {
			window.removeEventListener( 'scroll', onScroll );
		};
	}, [] );

	return (
		<div className={ 'feedBackBlock ' }>
			<div className={ 'feedBackBlock-bg' } style={ { backgroundImage: `url(${ palmsTransparent.src })` } }/>

			<Slide direction={ 'up' } triggerOnce={ true } delay={ 1000 }>
				{ scrolled &&
					<div className={ 'element-animation' }>
						<Image src={ flowerRight } alt={ '' } className={ 'flowerRight' }/>
					</div>
				}

				<div className={ 'container pt-60 pos feedBackBlock-content' }>
					<div>
						<div>
							<h2 className={ 'h2Subtitle' }>Закажите <br/> персональную подборку</h2>
							<h6 className={ 'text300 colorText pt-8' }>
								Вам позвонит менеджер и подберёт недвижимость под ваши индивидуальные запросы
							</h6>
						</div>

						<FeedBackForm/>
					</div>

					<div className={ 'ourMessengers-wrapper' }>
						<OurMessengers/>
					</div>

				</div>
			</Slide>
		</div>
	);
};

export default FeedBackBlock;