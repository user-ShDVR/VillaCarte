import React from 'react';
import groupPhoto from '@/public/groupPhoto.png';
import Image from 'next/image';

const WeCare = () => {
	return (
		<div className={ 'weCare' }>
			<div className={ 'bgTransparent-white' }/>
			<div className={ 'container-xl pos' }>
				<Image src={ groupPhoto } alt={ 'VillaCarte' }/>
				<div className={ 'bgGradientBlack' }/>

				<div className={ 'textWrapper' }>
					<h3 className={ 'h2Subtitle colorWhite' }>Больше 10 лет заботимся <br/> о вашем отдыхе и доходе</h3>
					<p className={ 'text300 colorWhite' }>
						Каждый день мы работаем над тем, чтобы исполнять ваши желания в VillaCarte
					</p>
				</div>
			</div>
			<div className={ 'bgLightGrey' }/>
		</div>
	);
};

export default WeCare;