import React, { useEffect, useState } from 'react';
import flowerRight from '@/public/leavesRight.webp';
import Image from 'next/image';
import FeedBackForm from '@/components/common/Forms/FeedBackForm/FeedBackForm';
import OurMessengers from '@/components/common/OurMessengers/OurMessengers';
import feedBackBg from '@/public/feedBackBg.webp';
import { lang } from '@/pages';
import noise from '@/public/noise.webp';

const FeedBackBlock = () => {

	const [ scrolled, setScrolled ] = useState<boolean>( false );

	useEffect( () => {

		const onScroll = () => {
			// @ts-ignore
			if ( document.documentElement.scrollTop > 2900 ) {
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
			<img src={ noise.src } alt="" className={ 'noise' }/>

			<div className={ 'feedBackBlock-bg' } style={ { backgroundImage: `url(${ feedBackBg.src })` } }/>

			{ scrolled &&
				<div className={ 'element-animation' }>
					<Image src={ flowerRight } alt={ '' } className={ 'flowerRight' }/>
				</div>
			}

			<div className={ 'container pt-60 pos feedBackBlock-content w-620px z-7' }>
				<div>
					<div>
						<h2 className={ 'h2Subtitle ' }>{ lang?.orderAPersonalSelection || '' }</h2>
						<h2 className={ 'h2Subtitle ' }>{ lang?.orderAPersonalSelection2 || '' }</h2>
						<h6 className={ 'text300 colorText pt-8' }>
							{ lang?.ourManagerWillCallYou || '' }
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