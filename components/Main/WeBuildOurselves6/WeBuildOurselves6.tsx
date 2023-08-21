import React from 'react';
import listPoint from '@/public/icons/listPoint.svg';
import Image from 'next/image';
import OffersSlider from '@/components/Main/WeBuildOurselves6/OffersSlider/OffersSlider';
import FiveSteps from '@/components/Main/WeBuildOurselves6/OffersSlider/FiveSteps';
import { IMainPageData } from '@/types/mainPage';

interface IProps {
	data: IMainPageData | undefined;
	buyRealEstateOnlyFromTrustedContractors: string;
	getAProfitCalculation: string;
	willBeTheFirstToKnow: string;
	remainConfidentAndCalm: string;
	weAlsoBuildOurselves: string;
	weAlsoBuildOurselves2: string;
	fiveSteps: string;
	fiveSteps2: string;
	weSelectTheRealEstatePersonally: string;
	weCalculateProfitability: string;
	weNegotiateWithTheDeveloper: string;
	weLegallyAccompanyTheTransaction: string;
	weTakeCareOfYourPropertyManagement: string;
}

const WeBuildOurselves = ({
	data,
	buyRealEstateOnlyFromTrustedContractors,
	getAProfitCalculation,
	willBeTheFirstToKnow,
	remainConfidentAndCalm,
	weAlsoBuildOurselves,
	weAlsoBuildOurselves2,
	fiveSteps,
	fiveSteps2,
	weSelectTheRealEstatePersonally,
weCalculateProfitability,
weNegotiateWithTheDeveloper,
weLegallyAccompanyTheTransaction,
weTakeCareOfYourPropertyManagement,
}: IProps) => {
	const list = [
		buyRealEstateOnlyFromTrustedContractors,
		getAProfitCalculation,
		willBeTheFirstToKnow,
		remainConfidentAndCalm,
	];

	return (
		<div className={'weBuildOurselves'}>

			<div style={{ padding: '0 3.333vw' }} className={'pt-60 d-md-flex jc-between'}>
				<div>
					<h2 className={'h1Title colorWhite ls--216'}>{weAlsoBuildOurselves}</h2>
					<h2 className={'h1Title colorWhite ls--216'}>{weAlsoBuildOurselves2}</h2>
				</div>

				<ul className={'col-md-6'}>
					{list.map((item, index) =>
						<div key={index}>
							<Image src={listPoint} alt={''} />
							<li className={'text500 colorWhite'}>{item}</li>
						</div>
					)}
				</ul>
			</div>

			<div className={'weBuildDownBlock'}>
				<div style={{ padding: '0 3.333vw' }}>
					<OffersSlider data={data} />
				</div>

				<div className={'fiveStepsSlider-wrapper'}>

					<div style={{ padding: '0 3.333vw' }}>
						<h3 className={'h1Title colorWhite pos ls--216'}>{fiveSteps}</h3>
						<h3 className={'h1Title colorWhite pos ls--216'}>{fiveSteps2}</h3>
					</div>

					<FiveSteps weSelectTheRealEstatePersonally={weSelectTheRealEstatePersonally}
weCalculateProfitability={weCalculateProfitability}
weNegotiateWithTheDeveloper={weNegotiateWithTheDeveloper}
weLegallyAccompanyTheTransaction={weLegallyAccompanyTheTransaction}
weTakeCareOfYourPropertyManagement={weTakeCareOfYourPropertyManagement} />

				</div>
			</div>
		</div>
	);
};

export default WeBuildOurselves;