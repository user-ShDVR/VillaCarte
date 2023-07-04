import React from 'react';
import groupPhoto from '@/public/groupPhoto.png';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const WeCare = () => {
	return (
		<div className={ 'weCare' }>
			<Fade delay={ 1e2 } cascade damping={ 1e-1 } duration={ 500 }>
				<Image src={ groupPhoto } alt={ 'VillaCarte' }/>
				<div className={ 'bgGradientBlack' }/>

				<div className={ 'textWrapper' }>
					<h3 className={ 'h2Subtitle colorWhite' }>Больше 10 лет заботимся о вашем отдыхе и доходе</h3>
					<p className={ 'text500 colorWhite' }>
						Каждый день мы работаем над тем, чтобы исполнять ваши желания в VillaCarte
					</p>
				</div>
			</Fade>
		</div>
	);
};

export default WeCare;