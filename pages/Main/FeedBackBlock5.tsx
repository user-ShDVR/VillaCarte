import React, { useEffect } from 'react';
import palmsTransparent from '@/public/palmsTransparent.png';
import flowerRight from '@/public/flowerRight.png';
import Image from 'next/image';
import FeedBackForm from '@/components/common/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';
import { Slide } from 'react-awesome-reveal';

const FeedBackBlock = () => {
	function onEntry( entry: any ) {
		entry.forEach( ( change: any ) => {
			if ( change.isIntersecting ) {
				change.target.classList.add( 'element-show' );
			}
		} );
	}

	let options = {
		threshold: [ 0.5 ]
	};

	useEffect( () => {
		let observer = new IntersectionObserver( onEntry, options );
		let elements = document.querySelectorAll( '.element-animation' );

		// @ts-ignore
		for ( let elm of elements ) {
			observer.observe( elm );
		}
	}, [] );

	return (
		<div className={ 'feedBackBlock ' } style={ { backgroundImage: `url(${ palmsTransparent.src })` } }>
			<Slide direction={ 'up' } triggerOnce={ true } delay={ 500 }>
				<div className={ 'element-animation' }>
					<Image src={ flowerRight } alt={ '' } className={ 'flowerRight' }/>
				</div>
			</Slide>

			<div className={ 'container pt-60 pos feedBackBlock-content' }>
				<div>
					<div>
						<h2 className={ 'h2Subtitle' }>Закажите персональную подборку</h2>
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
		</div>
	);
};

export default FeedBackBlock;