import React from 'react';
import { IMainPageData } from '@/types/mainPage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GoodsCard from '@/components/common/Cards/GoodsCard/GoodsCard';
import HoveredButton from '@/components/common/Buttons/HoveredButton';
import { useTranslations } from 'next-intl';

interface IProps {
	data: IMainPageData | undefined;
	theBestProjectsForLife: string;
	theBestProjectsForLife2: string;
	apartments: string;
	villas: string;
	showTheRest: string;
	offers: string;

}

const BestProjects = ({
	data,
	theBestProjectsForLife,
	theBestProjectsForLife2,
	apartments,
	villas,
	showTheRest,
	offers,
}: IProps) => {
	const t = useTranslations('Index');
	return (
		<div className={'bgGradient bestProjects'}>

			<div className={'bestProjects-inner'}>
				<h2 className={'h1Title colorWhite ls--216'}>{theBestProjectsForLife}</h2>
				<h2 className={'h1Title colorWhite ls--216'}>{theBestProjectsForLife2}</h2>

				<Tabs className={'bestProjects-tabs'} selectedTabPanelClassName={''}>
					<TabList className={'bestProjects-tabList text500 colorWhite'}>
						<Tab>{apartments}</Tab>
						<Tab>{villas}</Tab>
					</TabList>

					<TabPanel className={''}>
						{data?.apartments.slice(0, 6).map((item, index) =>
							<GoodsCard key={index} url={item.url} image={item.image} logoImage={item.logoImage} />
						)}
					</TabPanel>

					<TabPanel className={''}>
						{data?.villas.slice(0, 6).map((item, index) =>
							<GoodsCard key={index} url={item.url} image={item.image} logoImage={item.logoImage} />
						)}
					</TabPanel>

				</Tabs>

				<div className={'mt-28 pb-40-100 d-flex jc-center'}>
					<HoveredButton
						text={`${showTheRest} 115 ${offers}`}
						to={'/'}
						variant={'arrowRevert'}
						className={'manrope600-14 z-7'}
					/>
				</div>
			</div>
		</div>
	);
};

export default BestProjects;