import React from 'react';
import listPoint from '@/public/icons/listPoint.svg';
import Image from 'next/image';
import OffersSlider from '@/components/Main/WeBuildOurselves6/OffersSlider/OffersSlider';
import FiveSteps from '@/components/Main/WeBuildOurselves6/OffersSlider/FiveSteps';
import { lang } from '@/pages';

const WeBuildOurselves = () => {
	const list = [
		lang?.buyRealEstateOnlyFromTrustedContractors || '',
		lang?.getAProfitCalculation || '',
		lang?.willBeTheFirstToKnow || '',
		lang?.remainConfidentAndCalm || '',
	];

	return (
		<div className={ 'weBuildOurselves' }>
			<div className={ 'container pt-60 d-md-flex' }>
				<h2 className={ 'h1Title colorWhite col-md-6 ls--216' }>{ lang?.weAlsoBuildOurselves || '' }</h2>

				<ul className={ 'col-md-6' }>
					{ list.map( item =>
						<div key={ item }>
							<Image src={ listPoint } alt={ '' }/>
							<li className={ 'text500 colorWhite' }>{ item }</li>
						</div>
					) }
				</ul>
			</div>

			<div className={ 'weBuildDownBlock' }>
				<div className={ 'container' }>
					<OffersSlider/>
				</div>

				<div className={ 'fiveStepsSlider-wrapper' }>

					<div className={ 'container' }>
						<h2 className={ 'h1Title colorWhite pos ls--216' }>{ lang?.fiveSteps || '' }</h2>
					</div>

					<FiveSteps/>

				</div>
			</div>
		</div>
	);
};

export default WeBuildOurselves;