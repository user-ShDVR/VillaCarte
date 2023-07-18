import React from 'react';
import groupPhoto from '@/public/groupPhoto.png';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';

const WeCare = () => {
	return (
		<Slide direction={ 'up' } triggerOnce={ true } delay={ 1000 }>
			<div className={ 'weCare' }>
				<div className={ 'bgGradient' }/>
				<div className={ 'container-xl pos' }>
					<Fade delay={ 1e2 } cascade damping={ 1e-1 } duration={ 500 }>
						<Image src={ groupPhoto } alt={ 'VillaCarte' }/>
						<div className={ 'bgGradientBlack' }/>

						<div className={ 'textWrapper' }>
							<h3 className={ 'h2Subtitle colorWhite' }>Больше 10 лет заботимся <br/> о вашем отдыхе и доходе</h3>
							<p className={ 'text300 colorWhite' }>
								Каждый день мы работаем над тем, чтобы исполнять ваши желания в VillaCarte
							</p>
						</div>
					</Fade>
				</div>
				<div className={ 'bgLightGrey' }/>
			</div>
		</Slide>
	);
};

export default WeCare;